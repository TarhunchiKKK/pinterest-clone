import { splitPosts } from "./utils/splitPosts";
import { createPostsWrapper } from "./components/createPostsWrapper"
import { getColumnsCount } from "./utils/getColumnsCount";

let posts = JSON.parse(localStorage.getItem('posts')) ?? [];

function renderPosts(renderList = posts) {
    const postsContainer = document.getElementById('posts-container')
    
    const postsWrappersCount = getColumnsCount();

    const splitedPosts = splitPosts(renderList, postsWrappersCount);
    const postsWrappers = splitedPosts.map(item => createPostsWrapper(item));
    for (let postsWrapper of postsWrappers) {
        postsContainer.appendChild(postsWrapper)
    }
}

function searchPosts(title) {
    return posts.filter(post => post.title.includes(title.toLowerCase()));
}

function savePosts() {
    localStorage.setItem('posts', JSON.stringify(posts));
    posts = JSON.parse(localStorage.getItem('posts'));
}

export {
    renderPosts,
    searchPosts,
    savePosts
}