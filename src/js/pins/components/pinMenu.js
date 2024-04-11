import { openBoardModal } from '../../boards';
import { openComplaintModal } from '../../complaints';

const modalId = 'pin-modal';
const environmentId = 'pin-modal-environment-id';
const boardButtonId = 'pin-modal-board-button';
const complaintButtonId = 'pin-modal-complaint-button';

function handleOpenBoardModal(e) {
    handleCloseModal();
    openBoardModal(pin);
}

function handleOpenComplaintModal(e) {
    handleCloseModal();
    openComplaintModal(pin);
}

function openPinModal(pin) {
    const modal = document.createElement('div');
    modal.setAttribute('id', modalId);

    const environment = document.createElement('div');
    environment.setAttribute('id', environmentId);
    environment.addEventListener('click', handleCloseModal);

    const boardButton = document.createElement('button');
    boardButton.setAttribute('id', boardButtonId);
    boardButton.innerText = 'Добавить на доску';
    boardButton.addEventListener('click', handleOpenBoardModal);

    const complaintButton = document.createElement('button');
    complaintButton.setAttribute('id', complaintButtonId);
    complaintButton.innerText = 'Рожаловаться';
    complaintButton.addEventListener('click', handleOpenComplaintModal);

    modal.apend(boardButton, complaintButton);
    document.body.append(environment, modal);
}

function handleCloseModal(e) {
    const boardButton = document.getElementById(boardButtonId);
    boardButton.removeEventListener('click', handleOpenBoardModal);

    const complaintButton = document.getElementById(complaintButtonId);
    complaintButton.removeEventListener('click', handleOpenComplaintModal);

    const environment = document.getElementById(environmentId);
    environment.removeEventListener('click', handleCloseModal);
    environment.remove();

    const modal = document.getElementById(modalId);
    modal.remove();
}

export {
    openPinModal,
}