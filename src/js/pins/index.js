import { splitPins } from "./utils/splitPins";
import { createPinsWrapper } from "./components/createPinsWrapper"
import { getColumnsCount } from "./utils/getColumnsCount";

let pins = JSON.parse(localStorage.getItem('pins')) ?? [];

function renderPins(renderList = pins) {
    const pinsContainer = document.getElementById('pins-container')
    
    const pinsWrappersCount = getColumnsCount();

    const splitedPins = splitPins(renderList, pinsWrappersCount);
    const pinsWrappers = splitedPins.map(item => createPinsWrapper(item));
    for (let pinsWrapper of pinsWrappers) {
        pinsContainer.appendChild(pinsWrapper)
    }
}

function searchPins(title) {
    return pins.filter(pin => pin.title.includes(title.toLowerCase()));
}

function savePins() {
    localStorage.setItem('pins', JSON.stringify(pins));
    pins = JSON.parse(localStorage.getItem('pins'));
}

export {
    renderPins,
    searchPins,
    savePins
}