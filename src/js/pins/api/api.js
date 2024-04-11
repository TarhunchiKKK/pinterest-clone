import { PINS_URL } from '../../shared/constants.js';
import { fillPins } from '../pins.js';

function fetchPins() {
    fetch(PINS_URL)
        .then(response => response.json())
        .then(json => fillPins(json));
}

function updatePin(pin) {
    const options = {
        method: 'PUT',
        body: JSON.stringify(pin),
        headers: {
            "Content-type": "application/json",
        }
    };
    fetch(`${PINS_URL}/${pin.id}`, options);
}


export {
    fetchPins,
    updatePin
}