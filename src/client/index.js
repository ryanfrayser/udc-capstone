// Import Functions
import {handleSubmit} from "./js/formHandler.js";
import {updateUI} from "./js/updateUI.js";

console.log ("I'm here!");

//Import Styles
import './styles/style.scss';

//Event Listeners

document.getElementById('generate').addEventListener('click', handleSubmit);



//Export Functions
export {
  handleSubmit,
  updateUI
};

if (module.hot)  {    // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef
}