const searchForm = document.getElementById('search-form');
const searchFormInput = document.querySelector('search-form input');

function handleSearchFormSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    let searchedPosts = searchFormInput.value;
    searchFormInput.value = '';
    return searchedPosts;
}

export {
    handleSearchFormSubmit,
}