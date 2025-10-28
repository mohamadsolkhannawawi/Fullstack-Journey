// const hari = prompt("Sekarang hari apa?").toLowerCase();
// if (hari == "senin") {
//     console.log("Hari ini menyenangkan!");
// } else if (hari == "minggu") {
//     console.log("Hari ini terasa cepat!");
// } else {
//     console.log("Hari pelengkap!")
// }

const password = prompt("Masukkan password:");
if (password.length >= 6 && password.indexOf(" ") == -1) {
    console.log("Password valid!");
} else {
    console.log("Password tidak valid!");
}