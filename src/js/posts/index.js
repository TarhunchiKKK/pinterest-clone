import { splitPosts } from "./utils/splitPosts";
import { createPostsWrapper } from "./components/createPostsWrapper"
import { getColumnsCount } from "./utils/getColumnsCount";

let posts = JSON.parse(localStorage.getItem('posts')) ?? [];

function renderPosts() {
    const postsContainer = document.getElementById('posts-container')
    
    const postsWrappersCount = getColumnsCount();

    const splitedPosts = splitPosts(posts, postsWrappersCount);
    const postsWrappers = splitedPosts.map(item => createPostsWrapper(item));
    for (let postsWrapper of postsWrappers) {
        postsContainer.appendChild(postsWrapper)
    }
}

export {
    renderPosts
}