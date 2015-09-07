import mkpath from 'mkpath';

export default function createFolders(appName, framework, pathFolder = false) {
  try {
    if (framework === 'react') {
      if (pathFolder) {
        mkpath.sync(`${pathFolder}/${appName}`);
        mkpath.sync(`${pathFolder}/${appName}/components`);
        mkpath.sync(`${pathFolder}/${appName}/stores`);
        mkpath.sync(`${pathFolder}/${appName}/actions`);
      } else {
        mkpath.sync(`${appName}`);
        mkpath.sync(`${appName}/components`);
        mkpath.sync(`${appName}/stores`);
        mkpath.sync(`${appName}/actions`);
      }
    }
    return true;
  } catch (error) {
    throw error;
  }
}
