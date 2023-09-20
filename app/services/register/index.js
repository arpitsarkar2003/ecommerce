export const registerNewUser = async (formData) => {
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        const finalData = response.json();

        return finalData;

    } catch (error) {
        console.log("error",error);
    }
}