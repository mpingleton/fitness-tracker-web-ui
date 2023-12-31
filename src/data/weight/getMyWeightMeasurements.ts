
async function getMyWeightMeasurements() {

    return fetch('//localhost:8080/api/weight', {
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

export default getMyWeightMeasurements