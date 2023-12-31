
async function putWeightMeasurement(timestamp: string, weight: number) {

    return fetch('//localhost:8080/api/weight', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            timestamp,
            weight: weight.toString()
        })
    }).then((response) => {
        if (response.status === 201) {
            return response
        } else {
            return null
        }
    });
}

export default putWeightMeasurement