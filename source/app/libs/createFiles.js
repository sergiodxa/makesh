import fs from 'fs';
import getTemplate from './getTemplate';

export default function createFiles(appName, framework, pathFolder = false) {
  try {
    if (framework === 'react') {
      if (pathFolder) {
        fs.writeFileSync(`${pathFolder}/${appName}/index.js`,
                          getTemplate('index', appName));

        fs.writeFileSync(`${pathFolder}/${appName}/messages.json`,
                          getTemplate('messages'));

        fs.writeFileSync(`${pathFolder}/${appName}/components/App.jsx`,
                          getTemplate('appComponent'));
      } else {
        fs.writeFileSync(`${appName}/index.js`,
                          getTemplate('index', appName));

        fs.writeFileSync(`${appName}/messages.json`,
                          getTemplate('messages'));

        fs.writeFileSync(`${appName}/components/App.jsx`,
                          getTemplate('appComponent'));
      }
    }
    return true;
  } catch (error) {
    throw error;
  }
}
