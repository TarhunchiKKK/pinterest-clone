const chooseBoardButton = document.getElementById('choose-board-button');


const chooseBoardModalId = 'choose-board-modal';

let currentBoard = JSON.parse(localStorage.getItem('board')) ?? 1;
let isModalOpen = false;

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

function closeChooseBoardModal() {
    const modal = document.getElementById(chooseBoardModalId);
    modal.remove();
}

function handleChooseBoard(event) {
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

function initBoards() {
    chooseBoardButton.addEventListener('click', handleChooseBoard);
}


export {
    initBoards,
}
