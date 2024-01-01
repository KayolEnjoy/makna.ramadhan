document.addEventListener("DOMContentLoaded", function() {
    const changingEmTextElement = document.getElementById("changingEmText");
    const textOptions = ["Kreatif", "Pintar "];
    let currentIndex = 0;

    function changeText() {
        changingEmTextElement.innerHTML = textOptions[currentIndex];
        currentIndex = (currentIndex + 1) % textOptions.length;
    }

    setInterval(changeText, 4000); // Ubah teks setiap 4 detik
});
// Fungsi untuk menggulir ke atas
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Fungsi untuk menampilkan atau menyembunyikan tombol scroll up berdasarkan posisi scroll
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollUpBtn = document.getElementById("scrollUpBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
}
function checkWebsite(event) {
    // Menghentikan perilaku default formulir
    event.preventDefault();

    // Menampilkan alert bahwa sedang memeriksa data website
    Swal.fire({
        icon: 'info',
        title: 'Memeriksa Data Website....',
        showConfirmButton: false
    });

    // Menambahkan jeda selama 2 detik sebelum melanjutkan pemeriksaan
    setTimeout(() => {
        const registeredWebsites = [
            { websiteName: 'lmao.shop', emailname: 'sugichanel@gmail.com' },
            { websiteName: 'sukiroku.online', emailname: 'jancokpedia@gmail.com' },
            { websiteName: 'bibitrakyat.com', emailname: 'indonesiatanam@gmail.com' }
        ];

        const websiteNameInput = document.getElementById('websiteName').value;
        const emailInput = document.getElementById('emailname').value;

        const isRegistered = registeredWebsites.some(site => site.websiteName === websiteNameInput && site.emailname === emailInput);

        // Menutup alert yang menampilkan "Memeriksa Data Website...."
        Swal.close();

        if (isRegistered) {
            // Munculkan SweetAlert kustom untuk konfirmasi
            Swal.fire({
                icon: 'success',
                title: 'Pengecekan Berhasil!',
                text: 'Website Anda sudah terdaftar.',
                confirmButtonText: 'Ok'
            });
        } else {
            // Munculkan SweetAlert kustom untuk kesalahan
            Swal.fire({
                icon: 'error',
                title: 'Verifikasi Gagal',
                text: 'Website dan email kamu belum terdaftar atau kamu salah ketik.',
                confirmButtonText: 'Ok'
            });
        }
    }, 2000); // Jeda selama 2 detik (2000 milidetik)
}
function sendEmail() {
    Swal.fire({
        icon: 'info',
        title: 'Mengirim Pesan...',
        showConfirmButton: false
    });

    const templateParams = {
        user_name: document.getElementById('name').value,
        user_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_nknxhx9', 'template_errfr34', templateParams, 'w9YV4c_k0ab29gwf4')
        .then(function(response) {
            // Email terkirim, tampilkan SweetAlert
            Swal.close();

            Swal.fire({
                icon: 'success',
                title: 'Email Terkirim!',
                text: 'Terima kasih atas pesan Anda.',
                confirmButtonText: 'Ok'
            });

            // Reset formulir
            document.getElementById('contactForm').reset();
        }, function(error) {
            // Error dalam mengirim email, tampilkan SweetAlert kesalahan
            Swal.close();

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Gagal mengirim email. Silakan coba lagi nanti.',
                confirmButtonText: 'Ok'
            });
        });
}
function pilihtemplate() {
    // Menggunakan window.location untuk mengarahkan ke URL
    window.location.href = 'template';
}

let alertShown = false;
let timeout;

// Mendapatkan elemen targetDiv
const targetDiv = document.getElementById('targetDiv');

// Menambahkan event untuk meng-handle hover pada targetDiv
targetDiv.addEventListener('mouseenter', function() {
    // Membatalkan timeout yang sudah ada jika ada
    clearTimeout(timeout);
    // Menunda alert selama 6 detik setelah pengunjung berhenti menggulir atau mengarahkan kursor
    timeout = setTimeout(function() {
        if (!alertShown) {
            alertShown = true;
            Swal.fire({
                icon: 'info',
                title: 'Klik Pilih Template',
                text: 'Untuk Memilih Lebih Banyak Template',
                confirmButtonText: 'Ok'
            });
        }
    }, 6000);
});

// Menambahkan event scroll dengan fungsi untuk membatalkan timeout jika pengunjung menggulir
window.addEventListener('scroll', function() {
    clearTimeout(timeout);
});

// Link To Katalog WhatsApp

function OnceClear() {
    window.location.href = "https://wa.me/p/7131142943634243/62882008025015";
}
function promaster() {
    window.location.href = "https://wa.me/p/24618680101110523/62882008025015";
}
function proelite() {
    window.location.href = "https://wa.me/p/7297318190357905/62882008025015";
}
function umkmm() {
    window.location.href = "https://wa.me/p/7318256424865338/62882008025015";
}
function umkml() {
    window.location.href = "https://wa.me/p/7190261794367300/62882008025015";
}
function pwpdp() {
    window.location.href = "https://wa.me/p/6791249480984659/62882008025015";
}
function pwkdp() {
    window.location.href = "https://wa.me/p/6902576269855350/62882008025015";
}