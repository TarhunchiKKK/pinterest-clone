import { splitPins } from "../helpers/splitPins.js";
import { createPinsColumn } from "../components/pinsColumn.js";
import { getColumnsCount } from "../helpers/getColumnsCount.js";
import { getPinsSearchOptions } from "./search.js";
import { fetchPins } from "../api/api.js";
import { PINS_URL } from "../../shared/constants.js";

let pins = [];

export async function initPins() {
    pins = JSON.parse(localStorage.getItem('pins')) ?? [];

    if (!pins || pins.length === 0) {
        const result = await fetch(PINS_URL)
        pins = await result.json();
    }

    renderPins();
}

await initPins();


// отрисовка пинов
function renderPins() {
    const pinsContainer = document.getElementById('pins-container')
    
    const renderList = searchPins();
    const pinsWrappersCount = getColumnsCount();

    const splitedPins = splitPins(renderList, pinsWrappersCount);
    const pinsWrappers = splitedPins.map(item => createPinsColumn(item));
    
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