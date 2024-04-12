// { title: string, board: number }
let pinsSearchOptions = JSON.parse(localStorage.getItem('search')) ??  { board: 1 };

function getPinsSearchOptions() {
    return pinsSearchOptions;
}

// установка названия для поиска пинов
function setTitleToSearchPins(title) {
    pinsSearchOptions.title = title;
    localStorage.setItem('search', JSON.stringify(pinsSearchOptions));
}

// выбор доски
function setBoardToSearchPins(board) {
    pinsSearchOptions.board = board;
    localStorage.setItem('search', JSON.stringify(pinsSearchOptions));
}


function resetTitleToSearchPins() {
    pinsSearchOptions.title = undefined;
    localStorage.setItem('search', JSON.stringify(pinsSearchOptions));
}

export {
    getPinsSearchOptions,
    setTitleToSearchPins,
    setBoardToSearchPins,
    resetTitleToSearchPins
}