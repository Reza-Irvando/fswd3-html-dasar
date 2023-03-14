function startJankenpon(){
    alert("Selamat Datang di Permainan Jankenpon");
    const jankenpon = ["batu", "kertas", "gunting"];
    let comp;
    let player;
    let lagi=true;
    let hasil;
    while(lagi==true){
        let random = Math.random()*jankenpon.length;
        comp = jankenpon[~~random]
        player = prompt("Pilih salah satu kertas, gunting, batu dengan input text...");
        if(player=="batu" && comp=="gunting"){
            hasil = "Anda Menang";
        }
        else if(player=="kertas" && comp=="batu"){
            hasil = "Anda Menang";
        }
        else if(player=="gunting" && comp=="kertas"){
            hasil = "Anda Menang";
        }
        else if(player=="batu" && comp=="batu"){
            hasil = "Seri";
        }
        else if(player=="kertas" && comp=="kertas"){
            hasil = "Seri";
        }
        else if(player=="gunting" && comp=="gunting"){
            hasil = "Seri";
        }
        else{
            hasil = "Anda Kalah";
        }
        alert("Anda = " + player + ", Computer = " + comp + ". Hasilnya " + hasil);
        lagi = confirm("Ingin main lagi?")
    }
}