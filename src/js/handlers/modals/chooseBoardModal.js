import { getboards } from '../../utils/getBoards.js';

const modalId = 'choose-board-modal';
const formId = 'choose-board-form';
const environmentId = 'choose-board-modal-environment';

// создание чекбокса 
function createBoardCheckbox(pin, board) {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    // доска уже в списке досок пина
    if (pin.boards.includes(board) === true) {
        checkbox.setAttribute('checked');
    }
}

// выбор досок для пина
function handleSubmit(e) {
    // запрос на обновление данных о досках пина
    fetch().then();
    
    // удаление слушателя событий с формы
    const form = document.getElementById(formId);
    form.removeEventListener('submit', handleSubmit);

    const environment = document.getElementById(environmentId);
    environment.removeEventListener('submit', handleCloseModal);
    environment.remove();

    // удаление модального окна
    const modal = document.getElementById(modalId);
    modal.remove();
}

// открытие модельного окна
function openBoardModal(pin) {
    const modal = document.createElement('div');
    modal.setAttribute('id', modalId);

    // окружение модельного окна
    const environment = document.createElement('div');
    environment.setAttribute('id', environmentId);
    environment.addEventListener('click', handleClosemodal);

    // форма выбора доски
    const form = document.createElement('form');
    form.setAttribute('id', formId);
    form.addEventListener('submit', handleSubmit);

    // получение досок
    const boards = getboards();
    boards.forEach(b => { 
        form.append(createBoardCheckbox(pin, b));
    });

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
    openBoardModal,
}