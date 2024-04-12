import { getColumnsCount, getCurrentColumsCount, renderPins } from '../pins/index.js';

export function handleWindowResize (e) {
    if (getColumnsCount() !== getCurrentColumsCount()) {
        renderPins();
    }
}