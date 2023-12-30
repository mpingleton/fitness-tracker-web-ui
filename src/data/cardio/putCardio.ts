
async function putCardio(name: string, timestampBegin: string, duration: number, distance: number, caloriesBurned: number, typeId?: number) {

    return fetch('//localhost:8080/api/cardio', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            typeId,
            name,
            timestampBegin,
            duration: duration.toString(),
            distance: distance.toString(),
            caloriesBurned: caloriesBurned.toString()
        })
    }).then((response) => {
        if (response.status === 201) {
            return response
        } else {
            return null
        }
    });
}

export default putCardio