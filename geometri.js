// bangun datar
const prompt = require("prompt-sync")({ sigint: true });

console.log("1 persegi")
console.log("2 persegi panjang")
console.log("3 segitiga")
console.log("4 jajar genjang")
console.log("5 trapesium")
console.log("6 belah ketupat")
console.log("7 layang layang")
console.log("8 lingkaran")

let pilihan = prompt("Pilih bangun datar 1-8: ")


 if (pilihan === "1") {
    // Persegi
    s = Number(prompt("Masukkan panjang sisi persegi: "))
    k = 4 * s
    l = s * s
    console.log("keliling = " + k)
    console.log("luas = " + l)
 } else if (pilihan === "2") {
    // Persegi Panjang
    p = Number(prompt("Masukkan panjang persegi panjang: "))
    l = Number(prompt("Masukkan lebar persegi panjang: "))
    k = 2 * (p + l)
    l = p * l
    console.log("keliling = " + k)
    console.log("luas = " + l)
 } else if (pilihan === "3") {
    // Segitiga
    a = Number(prompt("Masukkan alas: "))
    b = Number(prompt("Masukkan keliling: "))
    c = Number(prompt("Masukkan sisi miring: "))
    t = Number(prompt("Masukkan tinggi: "))
    k = a + b + c
    l = 0.5 * a * t
    console.log("keliling = " + k)
    console.log("luas = " + l)
 } else if (pilihan === "4") {
    // Jajar Genjang
    a = Number(prompt("Masukkan alas: "))
    t = Number(prompt("Masukkan tinggi: "))
    p = Number(prompt("Masukkan panjang: "))
    l = a * t
    k = 2 * (a + p)
    console.log("keliling = " + k)
    console.log("luas = " + l)

 } else if (pilihan === "5"){
    // Trapesium
    a = Number(prompt("Masukkan sisi A: "))
    b = Number(prompt("Masukkan sisi B: "))
    c = Number(prompt("Masukkan sisi C: "))
    d = Number(prompt("Masukkan sisi D: "))
    t = Number(prompt("Masukkan tinggi: "))
    l = 0.5 * (a + b) * t
    k = a + b + c + d

    console.log("keliling = " + k)
    console.log("luas = " + l)

 } else if (pilihan === "6"){
    // Belah Ketupat
    s = Number(prompt("Masukkan sisi: "))
    d1 = Number(prompt("Masukkan diagonal pertama: "))
    d2 = Number(prompt("Masukkan diagonal kedua: "))
    l = 1/2 *d1 *d2
    k = 4 * s
    console.log("Keliling = " + k)
    console.log("Luas = " + l)

 } else if (pilihan === "7"){
    // Layang-Layang
    d1 = Number(prompt("Masukkan diagonal pertama: "))
    d2 = Number(prompt("Masukkan diagonal kedua: "))
    l = 1/2 * d1 * d2
    k = 2 * (d1 + d2)
    console.log("Keliling = " + k)
    console.log("Luas = " + l)
 } else if (pilihan === "8") {
    // Lingkaran
    r = Number(prompt("Masukkan jari-jari lingkaran: "))
    π = Number(prompt("Masukkan π: "))
    l = π * r * r
    k = 2 * π * r
    console.log("Keliling = " + k)
    console.log("Luas = " + l)
 } else {
   console,log(" pilihannya gak ada")
 }
