import { handleSearchFormSubmit } from "./pins/index.js";
import { handleBoardsButtonClick } from "./boards/index.js";
import { handleWindowResize } from "./shared/handleResize.js";

const searchForm = document.getElementById("search-form");
const boardsButton = document.getElementById("choose-board-button");

searchForm.addEventListener("submit", handleSearchFormSubmit);
boardsButton.addEventListener("click", handleBoardsButtonClick);

window.addEventListener('resize', handleWindowResize);