import { splitPins } from "./utils/splitPins";
import { createPinsWrapper } from "./components/createPinsWrapper"
import { getColumnsCount } from "./utils/getColumnsCount";
import { getPinsSearchOptions } from "./search";

let pins = JSON.parse(localStorage.getItem('pins')) ?? [];


// отрисовка пинов
function renderPins() {
    const pinsContainer = document.getElementById('pins-container')
    
    const renderList = searchPins();
    const pinsWrappersCount = getColumnsCount();

    const splitedPins = splitPins(renderList, pinsWrappersCount);
    const pinsWrappers = splitedPins.map(item => createPinsWrapper(item));
    
    for (let pinsWrapper of pinsWrappers) {
        pinsContainer.appendChild(pinsWrapper)
    }
}

// получение пина по id
function getPinById(id) {
    return pins.find(p => p.id === id) ?? null;
}

// поиск пинов
function searchPins() {
    const { title, board } = getPinsSearchOptions();
    
    return pins
        .filter(pin => title === undefined ? true : pin.title.includes(title.toLowerCase()))
        .filter(pin => title === undefined ? true : pin.board === board);
}

// сохранение пинов в localStorage
function savePins() {
    localStorage.setItem('pins', JSON.stringify(pins));
    pins = JSON.parse(localStorage.getItem('pins'));
}

// заполнение массива пинов
function fillPins(data) {
    pins = [];
    pins.push([...data]);
    savePins();
}

// добавление пина на доску
function addPinToBoard(pinId, board) {
    const index = pins.findIndex(p => p.id === pinId);
    if (index !== -1) {
        if (!pins[index].boards.includes(board)) {
            pins[index].boards.push(board);
            savePins();
        }
    }
}

// добавление далобы на пин
function addComplaintToPin(pinId, complaint) {
    const index = pins.findIndex(p => p.id === pinId);
    if (index !== -1) {
        if (!pins[index].complaints.includes(complaint)) {
            pins[index].complaints.push(complaint);
            savePins();
        }
    }
}



export {
    renderPins,
    searchPins,
    fillPins,
    savePins,
    addPinToBoard,
    addComplaintToPin,
    getPinById
}