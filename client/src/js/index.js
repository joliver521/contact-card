//import modules
import './form';
import './submit';

//import static images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

//import css
import '../css/index.css';
//import Bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//import indexedDB
import { initDb, getDb, postDb } from './database';

window.addEventListener('load', function () {
  initDb();
  postDb('Lernantino', 'learnantino@test.com', '555-555-5555', Bear);
  getDb();
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});
