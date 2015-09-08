import fs from 'fs';
import getTemplate from './getTemplate';
import makePath from './makePath';

export default function createFiles(appName, framework, pathFolder = false) {
  try {
    if (framework === 'react') {
      fs.writeFileSync(`${makePath(appName, pathFolder)}/index.js`,
                        getTemplate('index', appName));

      fs.writeFileSync(`${makePath(appName, pathFolder)}/messages.json`,
                        getTemplate('messages'));

      fs.writeFileSync(`${makePath(appName, pathFolder)}/components/App.jsx`,
                        getTemplate('appComponent'));
    }

    return true;
  } catch (error) {
    throw error;
  }
}
