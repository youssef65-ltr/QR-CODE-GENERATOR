let qrtext = document.getElementById("qrtext");
let qrcode = document.getElementById("qrcode");
let download_code = document.getElementById("download");
let qr_size = document.getElementById("qr_size");
download_code.style.display = "none";

const button_generate = document.getElementById("generate");
const button_download = document.getElementById("download");

button_generate.addEventListener("click" , generate);
button_download.addEventListener("click" , download);



function generate() {
    if (validation() ) {
    qrcode.innerHTML = null ;
    // that QRCode class will create an elem <canva> and <img> inside the element with id = "qrcode" ; 
    new QRCode("qrcode", {
    text : qrtext.value,
    width : +qr_size.value,
    height : +qr_size.value
    });
    }

}


function download() {
    const img = document.querySelector("#qrcode img");
    // to download anyfile you need href of this file and add attribut download="givea prefer name to download file"
    if (validation()){
        let a = document.createElement("a");
        a.href = img.src ;
        a.download = "qrcode.png" ;
        a.click()
    }
}


function validation() {
    if (qrtext.value.trim() === "") {
        // give an error anmation
         qrtext.className = "error"
        setTimeout(() => {
            qrtext.className = ""
        }, 1000);
        // remove button download
        download_code.style.display = "none";
        // remove image
        qrcode.innerHTML = null ;
        return false ;
    }else {
        download_code.style.display = "";
        return true ;
    }
}


