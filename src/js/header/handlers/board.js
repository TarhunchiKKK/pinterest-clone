const chooseBoardButton = document.getElementById('choose-board-button');


const chooseBoardModalId = 'choose-board-modal';
const chooseBoardModalEnvironmentId = 'choose-board-environment';

let currentBoard = JSON.parse(localStorage.getItem('board')) ?? 1;

function openChooseBoardModal() {
    const modalEnvironment = document.createElement('div');
    modalEnvironment.setAttribute('id', chooseBoardModalEnvironmentId);
    modalEnvironment.className = 'w-screen h-screen absolute left-0 top-0';
    modalEnvironment.style.zIndex = 70;

    
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

    document.body.appendChild(modalEnvironment);
    document.body.append(modal);
}

function closeChooseBoardModal() {
    const modal = document.getElementById(chooseBoardModalId);
    const modalEnvironment = document.getElementById(chooseBoardModalEnvironmentId);
    
    modal.remove();

    modalEnvironment.removeEventListener('click', closeChooseBoardModal);
    modalEnvironment.remove();  
}

function handleChooseBoard(event) {
    event.preventDefault();
    event.stopPropagation();
    openChooseBoardModal();
}

function initBoards() {
    chooseBoardButton.addEventListener('click', handleChooseBoard);
}


export {
    initBoards,
}
