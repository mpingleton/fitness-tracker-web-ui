
async function getMyCardio() {

    return fetch('//localhost:8080/api/cardio', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            return null
        }
    });
}

export default getMyCardio