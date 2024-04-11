const chooseBoardButton = document.getElementById('choose-board-button');
const chooseBoardModalId = 'choose-board-modal';


// открытие модального окна выбора доски
function openChooseBoardDropdown() {
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
    modalEnvironment.addEventListener('click', closeChooseBoardDropdown);

    document.body.append(modal);
}

// закрытие модельного окна выбора доски
function closeChooseBoardDropdown() {
    const modal = document.getElementById(chooseBoardModalId);
    modal.remove();
}


export {
    openChooseBoardDropdown,
    closeChooseBoardDropdown
}
