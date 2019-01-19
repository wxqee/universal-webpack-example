import createDebug from 'debug';
import { fetchPeopleList } from '../both/namelist';

const debug = createDebug('example:client-index');

debug('register greeting');
window.greeting = function greeting(people) {
  alert(people.name);
}

debug('register load event');
document.addEventListener('DOMContentLoaded', function onDomReady() {
  debug('document is loaded.');

  fetchPeopleList().then(guys => {
    const html = ['<ul>'];
    guys.forEach(guy => {
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

