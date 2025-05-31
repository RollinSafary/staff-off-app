(() => {
  const shell = require('shelljs');
  const fs = require('fs');
  const path = require('path');

  // Paths to the translation files
  const localesDir = path.resolve(__dirname, '../../src/assets/locales');
  const languages = fs
    .readdirSync(localesDir)
    .filter((file: string) => file.endsWith('.json') && file !== 'en.json');

  const mainKeys: string[] = [];
  let enJson: Record<string, string>;

  const processFiles = () => {
    // Process each language
    for (const lang of languages) {
      const jsonPath = path.join(localesDir, lang);

      if (!fs.existsSync(jsonPath)) {
        console.log(`Translation file for ${lang} does not exist. Skipping...`);
        continue;
      }

      const translationsFile = fs.readFileSync(jsonPath, 'utf-8');
      const translations: Record<string, string> = JSON.parse(translationsFile);

      let keys = Object.keys(translations);

      // If this is English (our main language)
      if (lang === 'en') {
        enJson = translations;
        mainKeys.push(...keys);
      } else {
        // Check for missing keys (in other languages but not in English)
        const missingKeys = mainKeys.filter((key) => !keys.includes(key));
        if (missingKeys.length) {
          console.log(`## Missing keys in ${jsonPath}:\n`);
          for (const key of missingKeys) {
            console.log(`"${key}": "${enJson[key]}",`);
          }
          console.log('\n');
        }

        // Check for additional keys (in other languages but not in English)
        const additionalKeys = keys.filter((key) => !mainKeys.includes(key));
        if (additionalKeys.length) {
          console.log(`## Additional keys in ${jsonPath}: Removing...\n`);
          for (const key of additionalKeys) {
            console.log(`"${key}": "${translations[key]}",`);
          }
          for (const key of additionalKeys) {
            delete translations[key];
          }
          keys = Object.keys(translations);
        }
      }

      // Sort keys alphabetically
      const ordered = keys.sort().reduce((obj: Record<string, string>, key: string) => {
        obj[key] = translations[key];
        return obj;
      }, {});

      // Write the sorted translations back to the file
      shell.ShellString(JSON.stringify(ordered, null, 2)).to(jsonPath);
      shell.exec(`npx prettier --write ${jsonPath}`);

      console.log(`✓ Processed translations for ${lang}`);
      console.log(`\n================================\n`);
    }
  };

  processFiles();
})();
