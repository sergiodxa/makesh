import mkpath from 'mkpath';
import appExists from './appExists';
import makePath from './makePath';
import fs from 'fs-extra';

export default function createFolders(appName, framework, pathFolder = false) {
  try {
    if (appExists(appName, pathFolder)) {
      fs.copySync(makePath(appName, pathFolder), 'tmp');
      fs.removeSync(makePath(appName, pathFolder));
      fs.copySync('tmp', `${makePath(appName, pathFolder)}/legacy`);
      fs.removeSync('tmp');
    }
    if (framework === 'react') {
      mkpath.sync(`${makePath(appName, pathFolder)}`);
      mkpath.sync(`${makePath(appName, pathFolder)}/components`);
      mkpath.sync(`${makePath(appName, pathFolder)}/stores`);
      mkpath.sync(`${makePath(appName, pathFolder)}/actions`);
    }

    return true;
  } catch (error) {
    throw error;
  }
}
