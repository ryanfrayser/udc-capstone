// Import Functions
import {handleSubmit} from "./js/formHandler.js";

console.log ("I'm here!");

//Import Styles
import './styles/style.scss';

//Event Listeners

document.getElementById('generate').addEventListener('click', handleSubmit);



//Export Functions
export {
  handleSubmit
};

if (module.hot)  {    // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef
}