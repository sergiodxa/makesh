export default function makePath(appName, pathFolder = false) {
  try {
    if (pathFolder) {
      return `${pathFolder}/${appName}`;
    }
    return `${appName}`;
  } catch (error) {
    throw error;
  }
}
