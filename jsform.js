function cetak() {
    var nama = document.getElementById("nama").value;
    var nomer = document.getElementById("nomer").value;
    var email = document.getElementById("email").value;
    var pendidikan = document.getElementById("pendidikan").value;
    var jeniskelamin = document.getElementById("jenis kelamin").value;
    var universitas = document.getElementById("universitas").value;
    var bidang = document.getElementById("bidang").value;
    var lapeng = document.getElementById("lapeng").value;

    var backskul = document.getElementById("backskul").value;
    var sertif = document.getElementById("sertif").value;
    var porto = document.getElementById("porto").value;
    var CV = document.getElementById("file").value;



    if (nama != "" && nomer != "" && email != "" && pendidikan != "" && jeniskelamin != "" && universitas != "" && bidang != "" && lapeng != "") {
        // document.getElementById("result").value=nama;

        var tes = confirm("apakah kamu yakin dengan jawabanmu?")

        tes = true
        if (tes === true) {

            // document.getElementById("hasil") .value="nama:"+nama +"nomer: "+nomer+"email:"+email
            // +"pendidikan:"+pendidikan+"universitas"+universitas+"Bidang:"+bidang+"lama pengalaman"
            // +lapeng+"background sekolah : "+backskul+" sertifikat : "+sertif+" file : "+file;



            document.getElementById("Nm").value = nama,
                document.getElementById("Nr").value = nomer,
                document.getElementById("Em").value = email,
                document.getElementById("Pd").value = pendidikan,
                document.getElementById("Jk").value = jeniskelamin,
                document.getElementById("Un").value = universitas,
                document.getElementById("Bd").value = bidang,
                document.getElementById("Lp").value = lapeng,
                document.getElementById("BGs").value = backskul,
                document.getElementById("Srt").value = sertif,
                document.getElementById("Prt").value = porto,
                document.getElementById("fl").value = CV;



        } else (
            alert("kosong")
        )
    }
    else {
        alert('anda harus masukkan  data dengan lengkap');
    }


}

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}





document.getElementById("hasil").value = "nama:" + nama + "nomer: " + nomer + "email:" + email
    + "pendidikan:" + pendidikan + "jenis kelamin : " + jeniskelamin + "universitas" + universitas + "Bidang:" + bidang + "lama pengalaman"
    + lapeng + "background sekolah : " + backskul + " sertifikat : " + sertif + " portofolio : " + porto + " file : " + CV;








