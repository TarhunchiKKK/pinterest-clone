import { createPin } from "./pin.js";

const pinsWrapperStyle = 'flex flex-col justify-start gap-6 items-center grow'

// создание колонки с пинами
export function createPinsColumn(pins) {
    const pinsWrapper = document.createElement('div');
    pinsWrapper.setAttribute('class', pinsWrapperStyle);

    for (let pin of pins) {
        pinsWrapper.append(createPin(pin));
    }
    return pinsWrapper;
}