// разбиение всех пинов на группы
export function splitPins(pins, divisor ) {
    /////////////////
    pins = pins[0]

    const splitedPins = []
    for (let i = 0; i < divisor; i++) {
        splitedPins.push([]);
    }
    for (let i = 0; i < pins.length; i++) {
        splitedPins[i % divisor].push(pins[i])
    }
    return splitedPins
}