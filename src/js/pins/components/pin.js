import { PIN_WRAPPER_CLASS } from "../../shared/constants";

// создание пина
export function createPin(pin) {
    const pinWrapper = document.createElement('div');
    pinWrapper.setAttribute('class', 'w-full');
    pinWrapper.setAttribute('class', PIN_WRAPPER_CLASS);
    pinWrapper.setAttribute('id', `pin-${pin.id}`);

    const imageWrapper = document.createElement('div');
    imageWrapper.setAttribute('class', 'rounded-md sm:rounded-lg md:rounded-xl hover:cursor-pointer');

    const image = document.createElement('img');
    image.setAttribute('class', 'w-full');
    image.setAttribute('src', pin.imageUrl);
    image.setAttribute('alt', pin.title);

    const titleWrapper = document.createElement('div');
    
    const titleSpan = document.createElement('span');
    titleSpan.setAttribute('class', 'font-bold text-md');
    titleSpan.innerText = pin.title;

    imageWrapper.append(image);
    titleWrapper.appendChild(titleSpan);
    pinWrapper.append(imageWrapper);
    pinWrapper.appendChild(titleSpan);
    return pinWrapper;
}