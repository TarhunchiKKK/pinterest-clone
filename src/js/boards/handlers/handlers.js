import { getCurrentPin } from "../../pins/lib/currentPin";
import { addPinToBoard, setBoardToSearchPins } from "../../pins/pins";
import { openChooseBoardDropdown, closeChooseBoardDropdown } from "../components/chooseBoardDropdown";

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
}

// обработчик добавлени пина на доску
function handleAddBoardToPin(e) {
    e.preventDefault();
    e.stopPropagation();

    const board = +e.target.value;
    const currentPin = getCurrentPin();
    addPinToBoard(currenPin.id, board);
    updatePin(currentPin);
}

export {
    handleAddBoardToPin,
    handleChooseBoard,
    handleBoardsButtonClick
}