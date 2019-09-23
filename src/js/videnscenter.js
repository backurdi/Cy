import '../css/videnscenter.scss';
import { insertElement } from '../reusable/reusable';
const axios = require('axios');

insertElement('nav', 'nav.html');
insertElement('footer', 'footer.html');

axios
  .get(
    'http://localhost:8000/api/v1/blogs',
  )
  .then(response => {
    console.log(response.data);
  });
