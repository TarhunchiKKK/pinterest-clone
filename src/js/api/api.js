
function getPins() {
    return fetch(URL).then(response => response.json());
}

function deletePin(id) {
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });
}