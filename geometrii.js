// Bangun Ruang
const prompt = require("prompt-sync")({ sigint: true });

console.log("1. Kubus");
console.log("2. Balok");
console.log("3. Prisma Segitiga");
console.log("4. Limas");
console.log("5. Tabung");
console.log("6. Kerucut");
console.log("7. Bola");

let pilihan = Number(prompt("pilih 1 - 7 : "))


// Kubus
if (pilihan === 1){
    s    = Number(prompt("Masukkan  sisi : "))
    v    = s * 3
    l    = 6 * s * s
    console.log("Volume = " + v)
    console.log("Luas Permukaan = " + l)
} else if (pilihan === 2){
    // Balok
    p    = Number(prompt("Masukkan panjang : "))
    l    = Number(prompt("Masukkan lebar : "))
    t    = Number(prompt("Masukkan tinggi : "))
    v    = p * l * t
    lu   = 2 * (p * l + p * t + l * t)
    console.log("Volume = " + v)
    console.log("Luas Permukaan = " + lu)
} else if (pilihan === 3){
    // Prisma Segitiga
    Lalas    = Number(prompt("Masukkan Luas alas : "))
    Kalas    = Number(prompt("Masukkan keliling alas : "))
    t        = Number(prompt("Masukkan tinggi : "))
    v        = Lalas * t
    l        = 2 * Lalas + Kalas * t
    console.log("Volume = " + v)
    console.log("Luas Permukaan = " + l)
} else if (pilihan === 4){
    // Limas
    Lalas            = Number(prompt("Masukkan Luas alas : "))
    Lselubung        = Number(prompt("Masukkan Keliling selubung : "))
    t                = Number(prompt("Masukkan Tinggi : "))
    v                = 1/3 * Lalas * t
    l                = Lalas + Lselubung
    console.log("Volume = " + v)
    console.log("Luas Permukaan = " + l)
} else if (pilihan === 5){
    // Tabung
    π = Number(prompt("Masukkan π : "))
    r = Number(prompt("Masukkan jari jari :"))
    t = Number(prompt("Masukkan Tinggi : "))
    v = π * r * r * t
    l = 2 * π * r * (r + t)
    console.log("Volume = " + v)
    console.log("Luas Permukaan = " + l)

} else if (pilihan === 6){
    // Kerucut
    π = Number(prompt("Masukkan π : "));
    r = Number(prompt("Masukkan jari-jari : "));
    t = Number(prompt("Masukkan tinggi : "));
    s = Math.sqrt(r * r + t * t); // garis pelukis
    v = (1/3) * π * r * r * t;
    l = π * r * (r + s);
    console.log("Volume = " + v);
    console.log("Luas Permukaan = " + l);
}   else if (pilihan === 7){
    // Bola 
    π = Number(prompt("Masukkan π : "));
    r = Number(prompt("Masukkan jari-jari : "));
    v = 4/3 * π * r * r * r;
    l = 4 * π * r * r;
    console.log("Volume = " + v);
    console.log("Luas Permukaan = " + l);
} else {
    console.log("pilihan tidak tersedia")
}
