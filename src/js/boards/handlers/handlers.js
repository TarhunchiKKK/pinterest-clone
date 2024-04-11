import { getCurrentPin, renderPins } from "../../pins";
import { addPinToBoard, setBoardToSearchPins } from "../../pins";
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
    openBoardsModal();
}

// // обработчик добавлени пина на доску
// function handleAddBoardToPin(e) {
//     e.preventDefault();
//     e.stopPropagation();

//     const board = +e.target.value;
//     const currentPin = getCurrentPin();
//     addPinToBoard(currentPin.id, board);
//     updatePin(currentPin);
// }

export {
    // handleAddBoardToPin,
    handleChooseBoard,
    handleBoardsButtonClick,
    handleOpenBoardsModal,
}