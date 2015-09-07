// node_modules
import prompt from 'prompt';
import createFolders from './libs/createFolders';
import createFiles from './libs/createFiles';

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

    const transforms = [
      createFolders,
      createFiles,
    ];

    const path = (typeof pathFolder === 'string') ? pathFolder : false;

    const result = transforms
                    .map(fn => fn(appName, framework, path))
                    .reduce((p, c) => (p === true && c === true));

    if (result) {
      return console.log('App created');
    }
    return console.error('App creator failed');
  });
}
