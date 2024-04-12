import { PIN_WRAPPER_CLASS } from "../../shared/constants.js";
import { openPinMenu } from "../components/pinMenu.js";
import { getPinById, renderPins } from "../lib/pins.js";
import { setTitleToSearchPins, resetTitleToSearchPins } from "../lib/search.js";
import { resetCurrentPin, setCurrentPin } from "../lib/currentPin.js";

// обработчик поиска пинов по названию
function handleSearchFormSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const input = document.querySelector('#search-form input');
    
    let title = input.value;


    if (title !== '' && title !== null && title !== undefined) {
        setTitleToSearchPins(title);
    }
    else {
        resetTitleToSearchPins();
    }

    renderPins();
}


// открытие меню действий с пином
function handlePinCircleMouseenter(e) {
    e.stopPropagation();
    e.preventDefault();
    
    const id = +e.target.closest(`div.${PIN_WRAPPER_CLASS}`).getAttribute('id').slice(4);
    const pin = getPinById(id);
    setCurrentPin(pin); 

    openPinMenu(e.target);
}

export {
    handleSearchFormSubmit,
    handlePinCircleMouseenter
}