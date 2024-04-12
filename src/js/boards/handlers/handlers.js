import { getCurrentPin } from "../../pins/index.js";
import { openChooseBoardDropdown, closeChooseBoardDropdown, setCloseBoardsDropdownCallback } from "../components/chooseBoardDropdown.js";
import { openBoardsModal } from "../components/chooseBoardModal.js";


// при закрытии окна флаг должен сбрасываться
setCloseBoardsDropdownCallback(() => isModalOpen = false);

// обработчик нажатия кнопки выбора доски
let isModalOpen = false;

function handleBoardsButtonClick(event) {
    event.preventDefault();
    event.stopPropagation();

    if (isModalOpen === true) {
        closeChooseBoardDropdown();
    }
    else {
        openChooseBoardDropdown();
    }
    isModalOpen = !isModalOpen;
}

// открытие окна для добавления пина на доску
function handleOpenBoardsModal(e) {
    const currentPin = getCurrentPin();
    openBoardsModal(currentPin);
}

export {
    handleBoardsButtonClick,
    handleOpenBoardsModal,
}