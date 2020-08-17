// @flow strict

const path = require('path');

/*::

type JestConfig = {|
  +rootDir: string,
  +transform: {| +[string]: string |},
  +setupFilesAfterEnv: $ReadOnlyArray<string>,
|};

*/

// This configuration is merged with the project configuration defined
// in this monorepo root.
module.exports = ({
  rootDir: __dirname,
  testMatch: ['<rootDir>/**/__tests__/**/?(*.)+(spec|test).js?(x)'], // @x-shipit-enable
  // @x-shipit-disable: transform: { '^.+\\.js$': '<rootDir>/scripts/jest/custom-transformer.js' },
  setupFilesAfterEnv: [path.join(__dirname, 'scripts', 'jest', 'setupTests.js')],
} /*: JestConfig */);
