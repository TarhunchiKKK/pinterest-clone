import { PIN_WRAPPER_CLASS } from "../../shared/constants.js";
import { getPinById, renderPins, setTitleToSearchPins } from "../pins";
import { openPinModal } from "../components/pinMenu.js";

// обработчик поиска пинов по названию
function handleSearchFormSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const input = document.querySelector('search-form input');
    
    let title = input.value;
    input.value = '';

    setTitleToSearchPins(title);
    renderPins();
}


// открытие меню действий с пином
function handlePinClick(e) {
    e.stopPropagation();
    e.preventDefault();
    
    const id = +e.target.closest(`div.${PIN_WRAPPER_CLASS}`).id.split('-')[2];
    const pin = getPinById(id); 
    openPinModal(pin);
}

export {
    handleSearchFormSubmit,
    handlePinClick
}