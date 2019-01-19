import ChinesePeople from './ChinesePeople';
import CanadaPeople from './CanadaPeople';

export const fetchPeopleList = () => Promise.resolve([
  new ChinesePeople('张三'),
  new CanadaPeople('Jacob White'),
  new ChinesePeople('王二麻'),
]);

export default {
  fetchPeopleList,
};
