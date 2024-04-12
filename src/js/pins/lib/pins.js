import { splitPins } from "../helpers/splitPins.js";
import { createPinsColumn } from "../components/pinsColumn.js";
import { getColumnsCount, setCurrentColumnsCount } from "../helpers/getColumnsCount.js";
import { getPinsSearchOptions } from "./search.js";
import { PINS_URL } from "../../shared/constants.js";

let pins = [];

async function initPins() {
    if (!localStorage.getItem('pins')) {
        const result = await fetch(PINS_URL);
        pins = await result.json();
        savePins();
    }
    else {
        pins = JSON.parse(localStorage.getItem('pins'));
    }

    renderPins();
}

await initPins();


// отрисовка пинов
function renderPins() {    
    const pinsContainer = document.getElementById('pins-container')

    pinsContainer.innerHTML = '';
    
    const renderList = searchPins();
    const pinsWrappersCount = getColumnsCount();
    setCurrentColumnsCount(pinsWrappersCount);

    const splitedPins = splitPins(renderList, pinsWrappersCount);
    const pinsWrappers = splitedPins.map(item => createPinsColumn(item));
    
    for (let pinsWrapper of pinsWrappers) {
        pinsContainer.append(pinsWrapper)
    }
}

// получение пина по id
function getPinById(id) {
    return pins.find(p => p.id === String(id)) ?? null;
}

// поиск пинов
function searchPins() {
    const { title, board } = getPinsSearchOptions();
    
    return pins
        .filter(pin => title === undefined ? true : pin.title.toLowerCase().includes(title.toLowerCase()))
        .filter(pin => board === undefined ? true : pin.boards.includes(board));
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
    addComplaintToPin,
    getPinById,
    initPins
}