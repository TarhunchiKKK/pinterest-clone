import { COMPLAINTS_URL } from '../../utils/constants.js';

const modalId = 'choose-board-modal';
const formId = 'choose-board-form';
const environmentId = 'complaint-modal-environment';

// создание чекбокса
function createComplaintCheckbox(pin, complaint) {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    // данная жалоба уже есть
    if (pin.complaints.includes(complaint) === true) {
        checkbox.setAttribute('checked');
    }
}

// выбор жалоб для пина
function handleSubmit (e) {
    // запрос на изменение данных о жалобах на пин
    fetch().then();

    // удаление слушателя событий с формы
    const form = document.getElementById(formId);
    form.removeEventListener('submit', handleSubmit);

    const environment = document.getElementById(environmentId);
    environment.removeEventListener('click', handleCloseModal);
    environment.remove();

    // удаление модального окна
    const modal = document.getElementById(modalId);
    modal.remove();
}

function openComplaintsModal(pin) {
    const modal = document.createElement('div');
    modal.setAttribute('id', modalId);

    const environment = document.createElement('div');
    environment.setAttribute('id', environmentId);
    environment.addEventListener('click', handleCloseModal);

    const form = document.createElement('div');
    form.setAttribute('id', formId);
    form.addEventListener('submit', handleSubmit);

    

    fetch(COMPLAINTS_URL)
        .then(response => response.json())
        .then(complaints => complaints.forEach(complaint => {
            form.append(createComplaintCheckbox(pin, complaint.title));
        }))
        .then(() => {
            modal.append(form);
            document.body.append(environment, modal);
        });
}

function handleCloseModal(e) {
    // удаление слушателя событий с формы
    const form = document.getElementById(formId);
    form.removeEventListener('submit', handleSubmit);

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