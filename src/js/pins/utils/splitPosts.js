export function splitPins(pins, divisor = 7) {
    const splitedPins = []
    for (let i = 0; i < divisor; i++) {
        splitPins[i] = []
    }
    for (let i = 0; i < pins.length; i++) {
        splitedPins[i % divisor].push(pins[i])
    }
    return splitPins
}