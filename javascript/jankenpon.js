function startJankenpon(){
    alert("Selamat Datang di Permainan Jankenpon");
    const jankenpon = ["batu", "kertas", "gunting"];
    let comp;
    let player;
    let lagi=true;
    let inputplayer=false;
    let hasil;
    while(lagi==true){
        let random = Math.random()*jankenpon.length;
        comp = jankenpon[~~random]
        for(inputplayer=false; inputplayer!=true;){
            player = prompt("Pilih salah satu: \n- kertas \n- gunting \n- batu \nInputkan sesuai text di atas!");
            if (player == "kertas" || player == "gunting" || player == "batu"){
                inputplayer=true;
            }
            else if (player == null){
                break;
            }
            else{
                alert("Input tidak valid! \nLakukan input kembali!");
                inputplayer=false;
            }
        }
        if(player == null){
            alert("Selesai");
            lagi=false;
        }
        else{
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
            alert("Review Pertandingan Jankenpon \nAnda = " + player + "\nComputer = " + comp + "\nHasil pertandingannya adalah  " + hasil);
            lagi = confirm("Ingin main lagi?")
        }
    }
}