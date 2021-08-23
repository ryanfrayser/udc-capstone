// Import Functions
import {createEntry} from "./js/app.js";
import {getWeather} from "./js/app.js";
import {postEntry} from "./js/app.js";
import {updateUi} from "./js/app.js";


console.log ("I'm here!");

//Import Styles
import './styles/style.scss';

//Event Listeners




//Export Functionsr
export {
  createEntry,
  getWeather,
  postEntry,
  updateUi
};

if (module.hot)  {    // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef
}