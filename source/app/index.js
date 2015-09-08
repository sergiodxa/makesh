// node_modules
import prompt from 'prompt';
import colors from 'colors';

import createFolders from './libs/createFolders';
import createFiles from './libs/createFiles';
import availableFrameworks from '../available-frameworks.js';

export default function makeApp(pathFolder = false) {
  prompt.start();

  prompt.get({
    properties: {
      appName: {
        description: 'Application name',
        type: 'String',
        pattern: /^[a-zA-Z\s\-\.]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true,
      },
      framework: {
        description: 'Framework (react)',
        type: 'String',
        pattern: /^[a-zA-Z\s\-\.]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true,
        default: 'react',
      },
    },
  }, function done(error, {appName, framework}) {
    if (error) throw error;

    if (availableFrameworks.indexOf(framework.toLowerCase()) === -1) {
      return console.error(colors.red('Selected framework invalid.'));
    }

    const transforms = [
      createFolders,
      createFiles,
    ];

    const path = (typeof pathFolder === 'string') ? pathFolder : false;

    const result = transforms
                    .map(fn => fn(appName, framework, path))
                    .reduce((p, c) => (p === true && c === true));

    if (result) {
      return console.log(colors.green('App created'));
    }
    return console.error(colors.red('App creator failed'));
  });
}
