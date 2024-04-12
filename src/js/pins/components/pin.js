import { PIN_WRAPPER_CLASS } from "../../shared/constants.js";
import { handlePinCircleMouseenter } from "../handlers/handlers.js";

// создание пина
export function createPin(pin) {    
    // обертка пина
    const pinWrapper = document.createElement('div');
    pinWrapper.setAttribute('class', PIN_WRAPPER_CLASS);
    pinWrapper.setAttribute('id', `pin-${pin.id}`);

    // обертка картинки
    const imageWrapper = document.createElement('div');
    imageWrapper.setAttribute('class', 'relative rounded-md sm:rounded-lg md:rounded-xl hover:cursor-pointer');

    // картинка
    const image = document.createElement('img');
    image.setAttribute('class', 'w-full');
    image.setAttribute('src', pin.image);
    image.setAttribute('alt', pin.title);
    imageWrapper.append(image);

    // круг
    const pinCircle = document.createElement('div');
    pinCircle.setAttribute('class', 'absolute rounded-full bg-[#d1478e] w-3 sm:w-6 lg:w-9 xl:w-12 h-3 sm:h-6 lg:h-9 xl:h-12 right-0 bottom-0');
    pinCircle.addEventListener('mouseenter', handlePinCircleMouseenter);
    imageWrapper.append(pinCircle);

    // обертка для аватара и названия
    const titleWrapper = document.createElement('div');
    titleWrapper.setAttribute('class', 'w-full flex justify-between items-center');
    
    // аватар


    // название пина
    const titleSpan = document.createElement('span');
    titleSpan.setAttribute('class', 'font-bold text-md');
    titleSpan.innerText = pin.title;
    titleWrapper.append(titleSpan);

    pinWrapper.append(imageWrapper);
    pinWrapper.append(titleWrapper);
    return pinWrapper;
}