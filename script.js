function showMessage() {
    alert("jangan di klik");
}

var i = 0;
var txt = 'Saya seorang mahasiswa yang sedang menempuh pendidikan di perguruan tinggi. Saya memiliki minat yang besar dalam bidang teknologi dan pengembangan perangkat lunak. Selain itu, saya juga aktif dalam berbagai kegiatan organisasi di kampus.,';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    }
window.onload = function() {
    typeWriter();
}