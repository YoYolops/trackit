

async function teste() {
    const response = await axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
        email: "yoyo@gmail.com",
        password: "123"
    }).catch(error => false)

    console.log(response)
}