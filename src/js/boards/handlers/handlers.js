import { getCurrentPin, renderPins } from "../../pins/index.js";
import { setBoardToSearchPins } from "../../pins/index.js";
import { openChooseBoardDropdown, closeChooseBoardDropdown } from "../components/chooseBoardDropdown.js";
import { openBoardsModal } from "../components/chooseBoardModal.js";

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

// обработчик выбора доски
function handleChooseBoard(e) {
    e.preventDefault();
    e.stopPropagation();

    const board = +e.target.value;
    setBoardToSearchPins(board);

    renderPins();
}

function handleOpenBoardsModal(e) {
    const currentPin = getCurrentPin();
    openBoardsModal(currentPin);
}

export {
    handleChooseBoard,
    handleBoardsButtonClick,
    handleOpenBoardsModal,
}