let currentPin = undefined;

function setCurrentPin(pin) {
    currentPin = pin;
}

function getCurrentPin() {
    return currentPin
}

function resetCurrentPin() {
    currentPin = undefined;
}

export {
    setCurrentPin,
    getCurrentPin,
    resetCurrentPin
}