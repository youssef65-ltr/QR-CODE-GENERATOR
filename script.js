let qrtext = document.getElementById("qrtext");
let qrcode = document.getElementById("qrcode");
let qrimage = document.getElementById("qrimage");
let qr_print = document.getElementById("qr_print");
qr_print.style.display = "none";
function generate() {
    if (qrtext.value.trim() !== ""){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        qr_print.style.display = "";
    }else{
        qrimage.src = ""
        qrtext.className = "error"
        setTimeout(() => {
            qrtext.className = ""
        }, 1000);
        qr_print.style.display = "none";
    }
}

function qr_print_fun(){
    open()
}



