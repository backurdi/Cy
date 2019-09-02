import '../css/ydelser.scss';
import {
    insertElement
} from '../reusable/reusable';

const memberImagePath = require.context('../img', true);

insertElement('nav', 'nav.html');
insertElement('footer', 'footer.html');