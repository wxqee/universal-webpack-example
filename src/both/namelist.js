// @flow

import People from './People';
import ChinesePeople from './ChinesePeople';
import CanadaPeople from './CanadaPeople';

export type PeopleList = Array<People>;
type fetchPeopleListFunc = () => Promise<PeopleList>;

export const fetchPeopleList: fetchPeopleListFunc = () => Promise.resolve([
  new ChinesePeople('张三'),
  new CanadaPeople('Jacob White'),
  new ChinesePeople('王二麻'),
]);

export default {
  fetchPeopleList,
};
