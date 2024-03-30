function salah(){
    document.getElementById("jdl").textContent="Anda Benar!"
    document.getElementById("bar").src="salah.png"
    document.getElementById("kotak").style.backgroundColor = "#6FD240"
    document.getElementById("tulisan").textContent="Anda adalah seorang Mahasiswa"
    document.getElementById("tmbl").style.display="none"
}

function betul(){
    document.getElementById("jdl").textContent="Anda Berbohong!"
    document.getElementById("bar").src="betul.png"
    document.getElementById("kotak").style.backgroundColor = "#E12E2E"
    document.getElementById("tulisan").textContent="Anda adalah seorang Teknisi"
    document.getElementById("tmbl").style.display="none"
    
}

