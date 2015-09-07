import makeIndex from '../templates/makeIndex';
import makeMessages from '../templates/makeMessages';
import makeAppComponent from '../templates/makeAppComponent';

export default function template(type, data = {}) {
  if (type === 'index') {
    return makeIndex(data.appName);
  }
  if (type === 'messages') {
    return makeMessages();
  }
  if (type === 'appComponent') {
    return makeAppComponent();
  }
  return null;
}
