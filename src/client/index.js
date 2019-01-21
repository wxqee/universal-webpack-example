// @flow

import createDebug from 'debug';
import { fetchPeopleList } from '../both/namelist';
import type { PeopleList } from "../both/namelist";
import People from "../both/People";

const debug = createDebug('example:client-index');

debug('register greeting');
window.greeting = function greeting(people) {
  alert(people.name);
};

debug('register load event');
document.addEventListener('DOMContentLoaded', function onDomReady() {
  debug('document is loaded.');

  fetchPeopleList().then((guys: PeopleList) => {
    const html = ['<ul>'];
    guys.forEach((guy: People) => {
      html.push(`
        <li style="background-color: ${guy.eyeColor}; color: white;">
          ${guy.getResume()}
        </li>
      `);
    });
    html.push('</ul>');

    const guysContainer: ?HTMLElement = document.getElementById('guys');

    if (guysContainer) {
      guysContainer.innerHTML = html.join('');
    }
  });
});

