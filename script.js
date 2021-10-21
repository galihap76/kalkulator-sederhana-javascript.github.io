//buat variabel
let nilai1 = document.getElementById('nilai1');
let nilai2 = document.getElementById('nilai2');
let tambah = document.getElementById('tambah');
let kurang = document.getElementById('kurang');
let kali = document.getElementById('kali');
let bagi = document.getElementById('bagi');
let hasil = document.getElementById('hasil');
let reset = document.getElementById('reset');

//ketika tombol tambah di klik
tambah.addEventListener('click', function(){
    //jalankan program untuk tambah
	tambah = parseInt(nilai1.value) + parseInt(nilai2.value);
	hasil.value = tambah;
});

//ketika tombol kurang di klik
kurang.addEventListener('click', function(){
    //jalankan program untuk kurang
    kurang = parseInt(nilai1.value) - parseInt(nilai2.value);
	hasil.value = kurang;    
});

//ketika tombol kali di klik
kali.addEventListener('click', function(){
    //jalankan program untuk kali
    kali = parseInt(nilai1.value) * parseInt(nilai2.value);
	hasil.value = kali;
});

//ketika tombol bagi di klik
bagi.addEventListener('click', function(){
    //jalankan program untuk bagi
    bagi = parseInt(nilai1.value) / parseInt(nilai2.value);
	hasil.value = bagi;
});

//ketika tombol reset di klik
reset.addEventListener('click', function(){
    //jalankan program untuk reset
    hasil.value = "";
	nilai1.value = "";
	nilai2.value = "";   
});