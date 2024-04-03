export function getColumnsCount() {
    const windowSize = window.innerWidth
    if (1500 < windowSize) {
        return 6
    }
    else if (1024 < windowSize && windowSize <= 1500) {
        return 5
    }
    else if (768 < windowSize && windowSize <= 1024) {
        return 4
    }
    else if (540 < windowSize && windowSize <= 768) {
        return 3
    }
    else if (320 < windowSize && windowSize <= 540) {
        return 2
    }
    else {
        return 1
    }
}