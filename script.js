var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman tradisional

    // Ambil data form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Contoh validasi sederhana (untuk tujuan demonstrasi)
    if (username === 'admin' && password === 'password') {
        document.getElementById('login-message').innerText = 'Login berhasil!';
        document.getElementById('login-message').style.color = 'green';
        // Alihkan ke halaman lain atau lakukan tindakan lain di sini
    } else {
        document.getElementById('login-message').innerText = 'Nama pengguna atau kata sandi salah.';
    }
});
