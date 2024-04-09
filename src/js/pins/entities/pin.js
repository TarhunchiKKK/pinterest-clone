import uniqid from 'uniqid';

export class Pin {
    id;
    title;
    image;
    constructor(title, imageUrl) {
        this.id = uniqid();
        this.title = title;
        this.imageUrl = imageUrl;
    }
}


