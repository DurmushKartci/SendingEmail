function sendMail() {
    let tempParams = {
        from: document.getElementById("from").value,
        to: document.getElementById("to").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    console.log(tempParams)
    emailjs.send("service_880b6o7", "template_0kcpfca", tempParams).then(function(res) { console.log("succes : " + res.status) })
}