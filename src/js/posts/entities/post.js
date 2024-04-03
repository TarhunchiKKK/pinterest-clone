import uniqid from 'uniqid';

export class Post {
    id;
    title;
    imageUrl;
    constructor(title, imageUrl) {
        this.id = uniqid();
        this.title = title;
        this.imageUrl = imageUrl;
    }
}



