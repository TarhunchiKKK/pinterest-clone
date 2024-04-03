export function createPost(post) {
    const postWrapper = document.createElement('div');
    postWrapper.setAttribute('class', 'w-full');

    const imageWrapper = document.createElement('div');
    imageWrapper.setAttribute('class', 'rounded-md sm:rounded-lg md:rounded-xl hover:cursor-pointer');

    const image = document.createElement('img');
    image.setAttribute('class', 'w-full');
    image.setAttribute('src', post.imageUrl);
    image.setAttribute('alt', post.title);

    const titleWrapper = document.createElement('div');
    
    const titleSpan = document.createElement('span');
    titleSpan.setAttribute('class', 'font-bold text-md');
    titleSpan.innerText = post.title;

    imageWrapper.append(image);
    titleWrapper.appendChild(titleSpan);
    postWrapper.append(imageWrapper);
    postWrapper.appendChild(titleSpan);
    return postWrapper;
}