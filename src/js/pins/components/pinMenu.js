import { handleOpenBoardsModal } from '../../boards/index.js';
import { handleOpenComplaintsModal } from '../../complaints/index.js';
import { PIN_IMAGE_WRAPPER } from '../../shared/constants.js';

const boardButtonId = 'pin-modal-board-button';
const complaintButtonId = 'pin-modal-complaint-button';

function openPinMenu(target) {
    const predict = target.closest(`.${PIN_IMAGE_WRAPPER}`);

    const menu = document.createElement('div');
    menu.setAttribute('class', 'absolute flex flex-col items-center gap-2 z-30 bg-[#d1478e] right-0 bottom-0 rounded-tl-xl px-4 py-2');
    menu.addEventListener('mouseleave', handleClosePinMenu);

    const boardButton = document.createElement('button');
    boardButton.setAttribute('id', boardButtonId);
    boardButton.innerText = 'Add to board';
    boardButton.addEventListener('click', handleOpenBoardsModal);
    menu.append(boardButton);

    const complaintButton = document.createElement('button');
    complaintButton.setAttribute('id', complaintButtonId);
    complaintButton.innerText = 'Complaint';
    complaintButton.addEventListener('click', handleOpenComplaintsModal);
    menu.append(complaintButton);

    predict.append(menu);
}


function handleClosePinMenu(e) {
    const boardButton = document.getElementById(boardButtonId);
    boardButton.removeEventListener('click', handleOpenBoardsModal);

    const complaintButton = document.getElementById(complaintButtonId);
    complaintButton.removeEventListener('click', handleOpenComplaintsModal);

    const target = e.target;
    target.removeEventListener('mouseleave', handleClosePinMenu);
    target.remove();
}

export {
    openPinMenu,
    handleClosePinMenu
}