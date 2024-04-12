import { PINS_URL } from '../../shared/constants.js';

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
    updatePin
}