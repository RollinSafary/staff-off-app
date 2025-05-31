(() => {
  const fs = require('fs');
  const path = require('path');

  // Path to the translation file
  const translationFilePath = path.join(__dirname, '../../src/assets/locales/en.json');
  // Path to the translations enum file
  const translationsEnumPath = path.join(__dirname, '../../src/constants/translations.ts');
  // Directory to scan for references
  const projectDir = path.join(__dirname, '../../src');
  const outputPath = path.join(__dirname, '../../unused-translations.json');

  // Read and parse the translation file
  const translationFile = fs.readFileSync(translationFilePath, 'utf-8');
  const translations = JSON.parse(translationFile);
  const translationKeys = Object.keys(translations);

  // Read the translations enum file to get the enum keys
  const translationsEnumFile = fs.readFileSync(translationsEnumPath, 'utf-8');
  const enumRegex = /export enum Translations\s*\{([^}]+)\}/s;
  const enumMatch = enumRegex.exec(translationsEnumFile);
  if (!enumMatch) {
    throw new Error("Doesn't match the enum pattern");
  }
  const enumEntries = enumMatch[1]
    .split(',')
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);

  // Create a map of enum keys to translation keys
  const enumToTranslationMap: Record<string, string> = {};
  enumEntries.forEach((entry) => {
    const parts = entry.split('=');
    if (parts.length === 2) {
      const enumKey = parts[0].trim();
      const translationKey = parts[1].trim().replace(/['"]/g, '');
      enumToTranslationMap[enumKey] = translationKey;
    }
  });

  // Function to escape special characters in regex
  function escapeRegExp(text: string) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Function to recursively scan files
  const scanFiles = (dir: string, callback: (path: string) => void) => {
    fs.readdirSync(dir).forEach((file: string) => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        scanFiles(fullPath, callback);
      } else if (
        // Only scan relevant file types
        fullPath.match(/\.(tsx|ts|jsx|js)$/) &&
        !fullPath.includes('node_modules') &&
        !fullPath.includes('translations.ts') // Skip the translations enum file
      ) {
        callback(fullPath);
      }
    });
  };

  // Scan project files and track usage
  const usedKeys = new Set();
  scanFiles(projectDir, (filePath: string) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Detect direct t('key') usage pattern
    translationKeys.forEach((key) => {
      const escapedKey = escapeRegExp(key);
      // Look for both single and double quotes
      const pattern1 = new RegExp(`t\\(['"]${escapedKey}['"]\\)`, 'g');
      const pattern2 = new RegExp(`t\\(['"]${escapedKey}['"],\\s?{`, 'g');

      if (pattern1.test(fileContent) || pattern2.test(fileContent)) {
        usedKeys.add(key);
      }
    });

    // Detect Translations.ENUM_KEY usage pattern
    Object.keys(enumToTranslationMap).forEach((enumKey) => {
      const pattern = new RegExp(`Translations\\.${enumKey}\\b`, 'g');
      if (pattern.test(fileContent)) {
        usedKeys.add(enumToTranslationMap[enumKey]);
      }
    });
  });

  // List unused keys
  const unusedKeys = translationKeys.filter((key) => !usedKeys.has(key));

  if (unusedKeys.length > 0) {
    console.log('Unused translation keys:');
    unusedKeys.forEach((key) => {
      console.log(`- "${key}": "${translations[key]}"`);
    });
    console.log(
      `\nFound ${unusedKeys.length} unused translation keys out of ${translationKeys.length} total keys.`
    );
  } else {
    console.log('No unused translation keys found! All translations are being used.');
  }

  // Create file with unused keys for easier removal
  if (unusedKeys.length > 0) {
    const unusedTranslations: Record<string, string> = {};
    unusedKeys.forEach((key) => {
      unusedTranslations[key] = translations[key];
    });
    console.log(`\nUnused translations:\n${JSON.stringify(unusedTranslations, null, 2)}`);
  }
})();
