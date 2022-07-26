function resetpassword(event){
    event.preventDefault()
    const form = new FormData(event.target)
    const email = {
        email: form.get('email')
    }
    console.log(email);

    axios.post('http://localhost:8000/password/forgotpassword',email)
    .then(response=>{
        console.log(response)
    })
    .catch(err=>{
        console.log(err)
    })
}