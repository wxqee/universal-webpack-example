import CanadaPeople from './CanadaPeople';
import ChinesePeople from './ChinesePeople';
import {IPeople} from './People';

export type PeopleList = IPeople[];
export type fetchPeopleListFunc = () => PromiseLike<PeopleList>;

export const fetchPeopleList: fetchPeopleListFunc = () => Promise.resolve([
  new ChinesePeople('张三'),
  new CanadaPeople('Jacob White'),
  new ChinesePeople('王二麻'),
]);

export default {
  fetchPeopleList,
};
