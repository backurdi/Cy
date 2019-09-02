import '../css/ydelser.scss';
import { insertElement } from '../reusable/reusable';
import $ from 'jquery';

const memberImagePath = require.context(
  '../img',
  true,
);

insertElement('nav', 'nav.html');
insertElement('footer', 'footer.html');

const navElement = $(
  '.toggle-nav ul li',
);

console.log(navElement);
navElement.click(el => {
    console.log(el.find('a'));
});
