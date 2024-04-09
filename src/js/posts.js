import { splitPins } from "./utils/splitPins";
import { createPinsWrapper } from "./components/createPinsWrapper"
import { getColumnsCount } from "./utils/getColumnsCount";

let pins = JSON.parse(localStorage.getItem('pins')) ?? [];
let pinsSearchOptions = JSON.parse(localStorage.getItem('search')) ??  { board: 1 };


function setTitleToSearchPins(title) {
    pinsSearchOptions.title = title;
    localStorage.setItem('search', JSON.stringify(pinsSearchOptions));
}

function setBoardToSearchPins(board) {
    pinsSearchOptions.board = board;
    localStorage.setItem('search', JSON.stringify(pinsSearchOptions));
}


// отрисовка пинов
function renderPins(renderList = pins) {
    const pinsContainer = document.getElementById('pins-container')
    
    const pinsWrappersCount = getColumnsCount();

    const splitedPins = splitPins(renderList, pinsWrappersCount);
    const pinsWrappers = splitedPins.map(item => createPinsWrapper(item));
    for (let pinsWrapper of pinsWrappers) {
        pinsContainer.appendChild(pinsWrapper)
    }
}

// поиск пинов
function searchPins({ title, board } = pinsSearchOptions) {
    return pins
        .filter(pin => title === undefined ? true : pin.title.includes(title.toLowerCase()))
        .filter(pin => title === undefined ? true : pin.board === board);
}

// сохранение пинов в localStorage
function savePins() {
    localStorage.setItem('pins', JSON.stringify(pins));
    pins = JSON.parse(localStorage.getItem('pins'));
}



export {
    setTitleToSearchPins,
    setBoardToSearchPins,
    renderPins,
    searchPins,
    savePins
}