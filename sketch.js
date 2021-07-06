function sendMail() {
    let sorusayısı = Math.floor(Math.random() * 50);
    let dogrusayısı = Math.floor(Math.random() * sorusayısı);
    let yanlıssayısı = Math.floor(Math.random() * sorusayısı - dogrusayısı);
    console.log(yanlıssayısı)
    let from_list = ["Durmuş Kartcı", "Muhammed Fatih Kartcı", "Nihan", "Emine Serra"]
    let from = from_list[Math.floor(Math.random() * from_list.length)]

    let messageFormat = "Merhaba Emin Kartcı,\n " + from + "'nın bugünkü test sonuçları ." +
        "Soru Sayısı : " + sorusayısı + "\nDoğru Sayısı : " + dogrusayısı + "\Yanlış Sayısı : " + yanlıssayısı + "\nBoş Sayısı : " + (sorusayısı - dogrusayısı - yanlıssayısı) + "\nDoğruluk Oranı : " + ((dogrusayısı * 100 / sorusayısı) / (sorusayısı * 100 / sorusayısı)) + "\nÇözdüğü süre :" + " 2 saat" // + saat + ":" + dakika + ":" + saniye

    let tempParams = {
        to_name: "Emin Kartcı",
        from_name: from,
        total_question: sorusayısı,
        correct_question: dogrusayısı,
        wrong_question: yanlıssayısı,
        time: sure(),
        space_question: (sorusayısı - dogrusayısı - yanlıssayısı),
        score: ((dogrusayısı * 100 / sorusayısı) * 100 / (sorusayısı * 100 / sorusayısı)).toFixed(0) + "/100",
        to: document.getElementById("to").value,
    }
    console.log(tempParams)
    emailjs.send("service_880b6o7", "template_cbjq7pg", tempParams).then(function(res) { console.log("succes : " + res.status) })
}

function sure() {
    return "00:52:08";
}