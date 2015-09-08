import fs from 'fs';
import makePath from './makePath';

export default function appExists(appName, pathFolder) {
  try {
    return fs.existsSync(makePath(appName, pathFolder));
  } catch (error) {
    throw error;
  }
}
