import { createPost } from "./createPost";

const postsWrapperStyle = 'flex flex-column justify-start items-center grow'

export function createPostsWrapper(posts) {
    const postsWrapper = document.createElement('div');
    postsWrapper.setAttribute('class', postsWrapperStyle);

    for (let post of posts) {
        postsWrapper.appendChild(createPost(post));
    }

    return postsWrapper;
}