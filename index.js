let qr; // this will hold the QR code object

// Function to generate the QR code
function generate() {
    const text = document.getElementById("text").value || " ";
    // Clear any old QR code so it can be replaced
    document.getElementById("qrcode").innerHTML = "";

    // Create a new QR code with the user text
    qr = new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: 256,
        height: 256,
        colorDark: "#000000",  // QR code color
        colorLight: "#ffffff", // background color
        correctLevel: QRCode.CorrectLevel.M // error correction level
    });
}

// Function to download the QR code as a PNG image
function download() {
    if (!qr) return;
    const img = document.querySelector("#qrcode img");
    if (!img) return;
    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qrcode.png";
    link.click();
}

// Every time the user types in the box, generate a new QR code
document.getElementById("text").addEventListener("input", generate);

// Make a QR code when the page first loads
generate();