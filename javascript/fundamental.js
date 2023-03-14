console.log("Hello World");
var nama = "Reza Irvando";
let id = 4765717;
const alamat = "Jogja";
let body = document.body;
let judul = document.createElement("h1");
let parag = document.createElement("p");
judul.innerHTML = "Web Fundamental JavaScript";
parag.innerHTML = "Haloo, Saya " + nama + " , dengan ID " + id + ", alamat di " + alamat;

body.append(judul);
body.append(parag);

let a = 12345;
let b = 123.45;
let c = "Arkatama";
let d = 1 > 5;
let e = null;
let f;
let g = Symbol('Joko')
let h = {
    nama : "Pando",
    kelas : "FSWD 2",
    id : 4765717,
    SIB : "Arkatama"
}

// Tipe Data JavaScript
console.log("~~Tipe data~~");
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);
console.log(h, typeof h);

// Konversi Tipe Data
console.log("~~Konversi Tipe Data~~")
let value = false;
value = String(value);
console.log(value, typeof value);
console.log("6" / "2");
let str = "123";
console.log("str bertipe ", typeof str, " dengan value : ", str);
let num = Number(str);
console.log("num bertipe ", typeof num);
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));

// Operator Aritmatika
console.log("~~Operator Aritmatika~~");
let i = 20;
let j = 5;
console.log("i = 20 , j = 5")
console.log("Penjumlahan : ",i + j);
console.log("Pengurangan : ",i - j);
console.log("Perkalian : ",i * j);
console.log("Pembagian : ",i / j);
console.log("Perpangkatan : ",i ** j);
console.log("Sisa Bagi : ",i % j);

// Operator Assignment
console.log("~~Operator Assignment~~");
let k = 2;
console.log(k);
k += 5;
console.log(k);
k -= 3;
console.log(k);
k *= 2;
console.log(k);
k /= 2;
console.log(k);
k **= 3;
console.log(k);
k %= 3;
console.log(k);

// Operator Logika
console.log("~~Operator Logika~~");
let l = true;
let m = false;
console.log(l && m);
console.log(l || m);
console.log(!l);

//Operator Bitwise
console.log("~~Operator Bitwise~~");
let n = 00111100;
let o = 00001101;
console.log(n  & o);
console.log(n  | o);
console.log(n  ^ o);
console.log(~n);

//Operator Ternary
console.log("~~Operator Ternary~~")
let p = 1;
let q = 1;
console.log(p == q ? "yes" : "no");

//Pop Up : Alert
alert("Selamat datang di web Reza Irvando");
alert("Sekarang tanggal: " + new Date());

//Pop Up : Prompt
let response1 = prompt("Apakah kamu mau nonton movie anime Suzume no Tojimari akhir pekan ini?");
alert("Jawabannya adalah " + response1)

//Pop Up : Confirm
let response2 = confirm("Okee kamu yang bayar yaa Heheee");
if (response = true){
    alert("Asiiiik Gaaaasssss");
}
else {
    alert("Yaaahhh, Padahal sebenernya aku mau bayarin :(")
}

//Conditional
alert("Waktunya maen games!!!");
let soal1 = prompt("Hasil 2 + 3 adalah ...");
if(soal1 == 5){
    alert("Waah kamu benar");
}
else{
    alert("Yaah kamu salah");
}
let soal2 = prompt("Pilih salah satu angka 1 sampai 3!")
switch (soal2){
    case "1":
        alert("Kamu wibuuu");
        break;
    case "2":
        alert("Pacarmu Animeee");
        break;
    case "3":
        alert("Kamu gapunya temen hehee");
        break;
    default:
        alert("Salah input bwang!!")
        break;
}

alert("Sesi Pop Up Berakhir. Silahkan Check Console!")

//Loop JavaScript
console.log("~~Loop JavaScript~~");
for(let x=0; x<5; x++){
    console.log("Iterasi ke ", x);
}

let x = 0;
do{
    console.log("Iterasi ke ", x);
    x+=1;
}
while(x<5){
    console.log("Iterasi ke ", x);
    x++;
}

let y = 0;
while(i<5){
    console.log("Iterasi ke ", y);
    y++;
}

for(let x = 0; x < 5; x++){
    if(x==3){
        break;
    }
    console.log("Iterasi ke ", x)
}

for(let x = 0; x < 5; x++){
    if(x==3){
        continue;
    }
    console.log("Iterasi ke ", x)
}

//Function
function salam1(){
    console.log("1. Hello World!");
}
salam1();

let salam2 = function(){
    console.log("2. Hello World!");
}
salam2();

var salam3 = () => {
    console.log("3. Hello World!");
}

var salam4 = () => console.log("4. Hello World!");

salam3();
salam4();