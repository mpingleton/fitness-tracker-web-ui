
async function putBloodPressureMeasurement(timestamp: string, systolic: number, diastolic: number, rate: number) {

    return fetch('//localhost:8080/api/bloodpressure', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            timestamp,
            systolic: systolic.toString(),
            diastolic: diastolic.toString(),
            rate: rate.toString()
        })
    }).then((response) => {
        if (response.status === 201) {
            return response
        } else {
            return null
        }
    });
}

export default putBloodPressureMeasurement