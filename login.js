document.getElementById('toggle-link').addEventListener('click', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const formTitle = document.getElementById('form-title');
    const toggleLink = document.getElementById('toggle-link');

    if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        formTitle.textContent = 'Login';
        toggleLink.textContent = 'Belum punya akun? Daftar di sini.';
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        formTitle.textContent = 'Daftar';
        toggleLink.textContent = 'Sudah punya akun? Login di sini.';
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === 'admin' && password === 'password') {
        document.getElementById('message').innerText = 'Login berhasil!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerText = 'Nama pengguna atau kata sandi salah.';
        document.getElementById('message').style.color = 'red';
    }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        document.getElementById('message').innerText = 'Registrasi berhasil!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerText = 'Kata sandi dan konfirmasi kata sandi tidak cocok.';
        document.getElementById('message').style.color = 'red';
    }
});
