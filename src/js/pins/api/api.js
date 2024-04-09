const URL = 'https://660eabe6356b87a55c4fb91f.mockapi.io/pin';

function getPins() {
    return fetch(URL).then(response => response.json());
}

function deletePin(id) {
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });
}