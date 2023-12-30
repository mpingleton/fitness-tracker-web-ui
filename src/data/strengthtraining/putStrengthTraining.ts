
async function putStrengthTraining(name: string, timestampBegin: string, totalSets: number, repsPerSet: number, weight: number, typeId?: number) {

    return fetch('//localhost:8080/api/strength', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            typeId,
            name,
            timestampBegin,
            totalSets: totalSets.toString(),
            repsPerSet: repsPerSet.toString(),
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

export default putStrengthTraining