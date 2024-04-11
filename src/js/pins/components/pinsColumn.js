import { createPin } from "./createPin.js";

const pinsWrapperStyle = 'flex flex-column justify-start items-center grow'

// создание колонки с пинами
export function createPinsColumn(pins) {
    const pinsWrapper = document.createElement('div');
    pinsWrapper.setAttribute('class', pinsWrapperStyle);

    for (let pin of pins) {
        poinsWrapper.appendChild(createPin(pin));
    }

    return pinsWrapper;
}