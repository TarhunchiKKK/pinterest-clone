const URL = 'https://660eabe6356b87a55c4fb91f.mockapi.io/pin';

function getPosts() {
    return fetch(URL).then(response => response.json());
}

function createPost(post) {
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 
            'Content-Type': 'application/json' 
        }
    });
}

function deletePost(id) {
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });
}