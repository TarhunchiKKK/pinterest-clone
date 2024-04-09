import { createPin } from "./createpin";

const pinsWrapperStyle = 'flex flex-column justify-start items-center grow'

export function createPinsWrapper(pins) {
    const pinsWrapper = document.createElement('div');
    pinsWrapper.setAttribute('class', pinsWrapperStyle);

    for (let pin of pins) {
        poinsWrapper.appendChild(createPin(pin));
    }

    return pinsWrapper;
}