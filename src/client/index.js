var debug = require('debug')('example:client-index');

debug('register greeting');
window.greeting = function greeting(people) {
	alert(people.name);
}

debug('register load event');
document.addEventListener('DOMContentLoaded', function onDomReady() {
	debug('document is loaded.');
});
