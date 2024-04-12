import { getPinsSearchOptions, renderPins, setBoardToSearchPins } from "../../pins/index.js";
import { getBoards } from "../helpers/getBoards.js";

const chooseBoardButton = document.getElementById('choose-board-button');
const chooseBoardModalId = 'choose-board-modal';

let currentBoard = undefined;
let closeCallback = () => {};

// вызывается при закрытии меню
export function setCloseBoardsDropdownCallback(callback) {
    closeCallback = callback;
}

// кнопка для меню
function createChooseBoardButton(board) {
    const button = document.createElement('button');
    button.setAttribute('value', board);
    button.innerText = `Bpoard ${board}`;
    button.addEventListener('click', handleChooseBoard);
    if (board === currentBoard) {
        button.setAttribute('class', 'text-[#d1478e]');
    }
    return button;
}

// открытие модального окна выбора доски
function openChooseBoardDropdown() {
    currentBoard = getPinsSearchOptions().board;
    
    const modal = document.createElement('div');
    modal.setAttribute('id', chooseBoardModalId);
    modal.setAttribute('class', 'flex flex-col items-center gap-2 bg-gray-300 border-2 border-black px-2 py-4');
    modal.style.width = chooseBoardButton.offsetWidth + 'px';
    modal.style.position = 'fixed';
    modal.style.top = chooseBoardButton.offsetTop + chooseBoardButton.offsetHeight + 8 + 'px';
    modal.style.left = chooseBoardButton.offsetLeft +'px';
    modal.style.borderRadius = '8px';
    modal.style.zIndex = 100;

    const boards = getBoards();
    for (const board of boards) {
        modal.append(createChooseBoardButton(board));
    }

    document.body.append(modal);
}

// закрытие модельного окна выбора доски
function closeChooseBoardDropdown() {
    const modal = document.getElementById(chooseBoardModalId);
    modal.remove();
}

// обработчик выбора доски
function handleChooseBoard(e) {
    e.preventDefault();
    e.stopPropagation();

    const board = +e.target.value;
    setBoardToSearchPins(board);

    renderPins();

    closeChooseBoardDropdown();
    closeCallback();
}

export {
    openChooseBoardDropdown,
    closeChooseBoardDropdown
}
