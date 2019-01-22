import * as createDebug from 'debug';
import {fetchPeopleList, PeopleList} from '../both/namelist';
import {IPeople} from '../both/People';

const debug = createDebug('example:client-index');

debug('register greeting');
function greeting(people: IPeople) {
  alert(people.name);
}

Object.assign(window, { greeting });

debug('register load event');
document.addEventListener('DOMContentLoaded', function onDomReady(): void {
  debug('document is loaded.');

  fetchPeopleList().then((guys: PeopleList) => {
    const html = ['<ul>'];
    guys.forEach((guy: IPeople) => {
      html.push(`
        <li style="background-color: ${guy.eyeColor}; color: white;">
          ${guy.getResume()}
        </li>
      `);
    });
    html.push('</ul>');

    document.querySelector('#guys').innerHTML = html.join('');
  });
});
