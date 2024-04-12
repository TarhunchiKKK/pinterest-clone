import { getCurrentPin, savePins } from '../../pins/index.js';
import { updatePin } from '../../pins/index.js';
import { getBoards } from '../helpers/getBoards.js';

const modalId = 'choose-board-modal';
const formId = 'choose-board-form';
const environmentId = 'choose-board-modal-environment';

// создание чекбокса 
function createBoardCheckbox(pin, board) {
    const div = document.createElement('div');
    div.setAttribute('class', 'mb-4 last:mb-0');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('value', board);
    checkbox.setAttribute('name', `board-${board}`);
    if (pin.boards.includes(board) === true) {
        checkbox.setAttribute('checked', true);
    }

    const label = document.createElement('label');
    label.setAttribute('for', `board-${board}`);
    label.setAttribute('class', 'ml-2')
    label.innerText = `board-${board}`;

    div.append(checkbox, label);
    return div;
}

// выбор досок для пина
function handleSubmit(e) {
    e.preventDefault();
    
    const form = document.getElementById(formId);
    const formData = new FormData(form);

    const currentPin = getCurrentPin();
    currentPin.boards = [];
    for (let [name, value] of formData) {
        currentPin.boards.push(+value)
    }

    updatePin(currentPin);
    savePins();
    
    handleCloseModal();
}

// открытие модельного окна
function openBoardsModal(pin) {
    // окружение модельного окна
    const environment = document.createElement('div');
    environment.setAttribute('id', environmentId);
    environment.setAttribute('class', 'w-screen h-screen fixed top-0 left-0');
    environment.addEventListener('click', handleCloseModal);

    // модальное окно
    const modal = document.createElement('div');
    modal.setAttribute('id', modalId);
    modal.setAttribute('class', 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 z-40 w-3/5 sm:w-1/3 px-4 sm:px-8 py-4 bg-gray-300 rounded-2xl');

    // заголовок модальног окна
    const header = document.createElement('h3');
    header.setAttribute('class', 'text-center mb-6 sm:mb-4 max-w-2/3');
    header.innerText = 'Modal window menu for choosing board';
    modal.append(header);

    // форма выбора доски
    const form = document.createElement('form');
    form.setAttribute('id', formId);
    form.setAttribute('class', 'w-full');
    form.addEventListener('submit', handleSubmit);

    // получение досок (чекбоксы)
    const formDiv = document.createElement('div');
    const boards = getBoards();
    boards.forEach(b => { 
        formDiv.append(createBoardCheckbox(pin, b));
    });
    form.append(formDiv);

    // кнопка подтверждения
    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.setAttribute('class', 'mx-auto block mt-4');
    button.innerText = 'Confirm';
    form.append(button);


    modal.append(form);
    document.body.append(environment, modal);
}

// закрытие модального окна
function handleCloseModal(e) {
    // удаление слушателя событий с формы
    const form = document.getElementById(formId);
    form.removeEventListener('submit', handleSubmit);

    // очистка слушателей с окружения
    const environment = document.getElementById(environmentId);
    environment.removeEventListener('click', handleCloseModal);
    environment.remove();

    // удаление модального окна
    const modal = document.getElementById(modalId);
    modal.remove();
}


export {
    openBoardsModal,
}