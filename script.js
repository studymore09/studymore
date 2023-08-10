document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const nohp = document.getElementById('nohp').value;
        const kelas = document.getElementById('kelas').value;
        const alamat = document.getElementById('alamat').value;
        const minat = document.getElementById('minat').value;

        const registration = { nama, email, nohp, kelas, alamat, minat };

        let registrations = JSON.parse(localStorage.getItem('registrations')) || [];
        registrations.push(registration);
        localStorage.setItem('registrations', JSON.stringify(registrations));

        alert('Pendaftaran berhasil!');
        registrationForm.reset();
    });
});
