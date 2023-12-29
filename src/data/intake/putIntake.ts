
async function putIntake(timestamp: string, subject: string, numberServings: number, calories: number, carbohydrates: number, protein: number, fat: number, presetId?: number) {

    return fetch('//localhost:8080/api/intakes', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            presetId,
            timestamp,
            subject,
            numberServings: numberServings.toString(),
            calories: calories.toString(),
            carbohydrates: carbohydrates.toString(),
            protein: protein.toString(),
            fat: fat.toString()
        }),
    }).then((response) => {
        if (response.status === 201) {
            return response
        } else {
            return null
        }
    });
}

export default putIntake