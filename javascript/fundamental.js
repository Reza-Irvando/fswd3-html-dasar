// Variable JavaScript
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

//Pop Up
alert("Selamat datang di web Reza Irvando \nWeb ini berisi tentang penerapan fundamental JavaScript");
alert("Sekarang tanggal: " + new Date());

// Tipe Data JavaScript
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
console.log("~~Tipe data~~");
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);
console.log(h, typeof h);
let nilaig = String(g)
alert("Tipe data JavaScript" + "\na = " + a + " , tipe data " + typeof a + "\nb = " + b + " , tipe data " + typeof b + "\nc = " + c +" , tipe data " + typeof c + "\nd = " + d +" , tipe data " + typeof d + "\ne = " + e +" , tipe data " + typeof e + "\nf = " + f +" , tipe data " + typeof f + "\ng = " + nilaig + " , tipe data " + typeof g + "\nh = " + h +" , tipe data " + typeof h);

// Konversi Tipe Data
console.log("~~Konversi Tipe Data~~")
let nilai1 = false;
nilai2 = String(nilai1);
console.log(nilai2, typeof nilai2);
console.log("6" / "2");
let nilai3 = ("6" / "2");
let str = "123";
console.log("str bertipe ", typeof str, " dengan nilai : ", str);
let num = Number(str);
console.log("num bertipe ", typeof num);
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));
alert("Konversi Tipe Data \nnilai1 = " + nilai1 + " bertipe " + typeof nilai1 + " menjadi nilai2 = " + nilai2 + " bertipe " + typeof nilai2 + "\n('6'/'2') menghasilkan nilai " + nilai3 +"\nstr = '123' bertipe " + typeof str + " menjadi bernilai " + num + " bertipe " + typeof num + "\nBoolean(1) dan Boolean('hello) sama-sama bernilai " + Boolean('hello') + " bertipe " + typeof Boolean('hello') + "\nBoolean(0) dan Boolean('') sama-sama bernilai " + Boolean('') + " bertipe " + typeof Boolean(''));

// Operator Aritmatika
console.log("~~Operator Aritmatika~~");
let i = 20;
let j = 5;
console.log("i = 20 , j = 5")
console.log("Penjumlahan : " + i + j);
console.log("Pengurangan : " + i - j);
console.log("Perkalian : " + i * j);
console.log("Pembagian : " + i / j);
console.log("Perpangkatan : " + i ** j);
console.log("Sisa Bagi : " + i % j);
alert("Operator Aritmatika \ni = " + i + " dan j = " + j + "\ni + j = " + (i+j) + "\ni - j = " + (i-j) + "\ni * j = " + (i*j) + "\ni / j = " + (i/j) + "\ni ** j = " + (i**j) + "\ni % j = " + (i%j));


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
k = 2;
alert("Operator Aritmatika \nk = " + k + "\nk += 5 hasilnya " + (k+=5) + "\nk -= 3 hasilnya " + (k-=3) + "\nk *= 2 hasilnya " + (k*=2) + "\nk /= 2 hasilnya " + (k/=2) + "\nk **= 3 = " + (k**=3) + "\nk %= 3 = " + (k%=3));


// Operator Logika
console.log("~~Operator Logika~~");
let l = true;
let m = false;
console.log(l && m);
console.log(l || m);
console.log(!l);
alert("Operator Logika \nl = " + l + " dan m = " + m + "\(nl && m) hasilnya " + (l&&m) + "\n(l || m) hasilnya " + (l||m) + "\n(!l) hasilnya " + (!l));

//Operator Bitwise
console.log("~~Operator Bitwise~~");
let n = 00111100;
let o = 00001101;
console.log(n  & o);
console.log(n  | o);
console.log(n  ^ o);
console.log(~n);
alert("Operator Bitwise \nn = " + n + " dan o = " + o + "\n(n & o) hasilnya " + (n&o) + "\n(n | o) hasilnya " + (n|o) + "\n(n ^ o) hasilnya " + (n^o) + "\n(~n) hasilnya " + (~n));

//Operator Ternary
console.log("~~Operator Ternary~~")
let p = 1;
let q = 1;
console.log(p == q ? "yes" : "no");
alert("Operator Ternary \n p = " + p + " dan q = " + q + "\nuntuk (p == q ? 'yes' : 'no') hasilnya adalah " + (p==q ? "yes":"no"))

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

//Conditional
let response1 = prompt("Pop Up Conditional \nApakah kamu mau nonton movie anime Suzume no Tojimari akhir pekan ini? (y/t)");
if (response1 == "y"){
    let response2 = confirm("Okee kamu yang bayar yaa Heheee");
    if (response2 = true){
        alert("Asiiiik Gaaaasssss");
    }
    else {
        alert("Bercandaaa, gasss laah heeheee");
    }
}
else if(response1 == "t"){
    alert("Waduuuh, yaudah mungkin lain kali aja :(");
}
else{
    alert("Input tidak valid");
}

alert("Waktunya maen games!!!");
let soal1 = prompt("Hasil 2 + 3 adalah ...");
if(soal1 == 5){
    alert("Yeaaayy, jawaban kamu benar");
}
else if (soal1 == null){
    alert("Input tidak valid")
}
else{
    alert("Waduuuh, jawaban kamu salah");
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

let ulangtext = prompt("Looping Javascript \nMasukkan jumlah perulangan alert Hello World!")
for(let t=0; t<ulangtext; t++){
    alert("Hello World! ke-" + (t+1))
}

alert("Sesi Pop Up Berakhir. Silahkan Check Console!")