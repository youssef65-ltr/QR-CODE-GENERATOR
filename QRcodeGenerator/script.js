function generate() {
    let qrtext = document.getElementById("qrtext");
    let qrcode = document.getElementById("qrcode");
    let qrimage = document.getElementById("qrimage");
    if (qrtext.value.trim() !== ""){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    }else{
        qrimage.src = ""
        qrtext.className = "error"
        setTimeout(() => {
            qrtext.className = ""
        }, 1000);
    }
}


