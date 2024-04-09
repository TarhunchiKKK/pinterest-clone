const chooseBoardButton = document.getElementById('choose-board-button');


export const chooseBoardModalId = 'choose-board-modal';

let isModalOpen = false;

// открытие модального окна выбора доски
function openChooseBoardModal() {
    const modal = document.createElement('div');
    modal.setAttribute('id', chooseBoardModalId);
    modal.style.width = chooseBoardButton.offsetWidth + 'px';
    modal.style.height = '150px';
    modal.style.position = 'fixed';
    modal.style.top = chooseBoardButton.offsetTop + chooseBoardButton.offsetHeight + 8 + 'px';
    modal.style.left = chooseBoardButton.offsetLeft +'px';
    modal.style.borderRadius = '8px';
    modal.style.backgroundColor = 'green';
    modal.style.zIndex = 100;

    modal.addEventListener('click', () => {});    
    modalEnvironment.addEventListener('click', closeChooseBoardModal);

    document.body.append(modal);
}

// закрытие модельного окна выбора доски
function closeChooseBoardModal() {
    const modal = document.getElementById(chooseBoardModalId);
    modal.remove();
}

// обработчик нажатия кнопки выбора доски
function handleOpenBoardsDropdown(event) {
    event.preventDefault();
    event.stopPropagation();

    if (isModalOpen === true) {
        closeChooseBoardModal();
    }
    else {
        openChooseBoardModal();
    }
    isModalOpen = !isModalOpen;
}

function initBoardsButton() {
    chooseBoardButton.addEventListener('click', handleOpenBoardsDropdown);
}


export {
    chooseBoardModalId,
    initBoardsButton,
}
