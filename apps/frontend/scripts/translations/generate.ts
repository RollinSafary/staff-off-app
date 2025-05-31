(() => {
  const shell = require('shelljs');
  const fs = require('fs');
  const path = require('path');

  // Paths
  const jsonPath = path.resolve(__dirname, '../../src/assets/locales/en.json');
  const translationsFilePath = path.resolve(__dirname, '../../src/constants/translations.ts');
  const translationsFile = fs.readFileSync(jsonPath, 'utf-8');
  const translations: Record<string, string> = JSON.parse(translationsFile);

  // Convert dotted keys to UPPER_CASE format
  const toUpperCase = (line: string) => line.toUpperCase().replace(/\./g, '_').replace(/-/g, '_');

  // Generate a line in the enum for each translation key
  const generateEnumLine = (key: string) => {
    shell.ShellString(` ${toUpperCase(key)} = "${key}",\n`).toEnd(translationsFilePath);
  };

  // Generate the translations enum file
  const generateTranslationsEnum = () => {
    shell.ShellString('/* AUTO GENERATED FILE. DO NOT MODIFY !!! */\n\n').to(translationsFilePath);

    const keys = Object.keys(translations);

    shell.ShellString('export enum Translations {\n').toEnd(translationsFilePath);

    keys.forEach(generateEnumLine);

    shell.ShellString('}\n\n').toEnd(translationsFilePath);
    shell.ShellString('/* AUTO GENERATED FILE. DO NOT MODIFY !!! */').toEnd(translationsFilePath);
  };

  generateTranslationsEnum();

  // Format the file with prettier
  shell.exec(`npx prettier --write ${translationsFilePath}`);

  console.log(`✓ Generated translations enum at ${translationsFilePath}`);
})();
