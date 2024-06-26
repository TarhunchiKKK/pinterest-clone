import { getComplaints } from '../helpers/getComplaints.js';
import { getCurrentPin } from '../../pins/index.js';
import { updatePin, savePins } from '../../pins/index.js';

const modalId = 'choose-complaint-modal';
const formId = 'choose-complaint-form';
const environmentId = 'complaint-modal-environment';

// создание чекбокса
function createComplaintCheckbox(pin, complaint) {
    const div = document.createElement('div');
    div.setAttribute('class', 'mb-4 last:mb-0');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('value', complaint);
    checkbox.setAttribute('name', `complaint-${complaint}`);
    if (pin.complaints.includes(complaint) === true) {
        checkbox.setAttribute('checked', true);
    }

    const label = document.createElement('label');
    label.setAttribute('for', `complaint-${complaint}`);
    label.setAttribute('class', 'ml-2');
    label.innerText = complaint;

    div.append(checkbox, label);
    return div;
}

// выбор жалоб для пина
function handleSubmit (e) {
    e.preventDefault();
    
    const form = document.getElementById(formId);
    const formData = new FormData(form);

    const currentPin = getCurrentPin();
    currentPin.complaints = [];
    for (let [name, value] of formData) {
        currentPin.complaints.push(value);
    }
    updatePin(currentPin);
    savePins();
    
    handleCloseModal();
}

function openComplaintsModal(pin) {
    // окружение модельного окна
    const environment = document.createElement('div');
    environment.setAttribute('id', environmentId);
    environment.setAttribute('class', 'w-screen h-screen fixed left-0 top-0');
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
    const complaints = getComplaints();
    complaints.forEach(c => { 
        formDiv.append(createComplaintCheckbox(pin, c));
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
    openComplaintsModal,
}