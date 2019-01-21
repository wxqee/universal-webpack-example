import ChinesePeople from './ChinesePeople';
import CanadaPeople from './CanadaPeople';
import People from "./People";

export type fetchPeopleListResult = PromiseLike<Array<People>>;

export const fetchPeopleList = (): fetchPeopleListResult => Promise.resolve([
  new ChinesePeople('张三'),
  new CanadaPeople('Jacob White'),
  new ChinesePeople('王二麻'),
]);

export default {
  fetchPeopleList,
};
