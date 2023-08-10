document.addEventListener('DOMContentLoaded', function() {
    const dataTable = document.getElementById('dataTable');

    const registrations = JSON.parse(localStorage.getItem('registrations')) || [];

    registrations.forEach(function(registration, index) {
        const row = dataTable.insertRow(-1);
        
        const cellNama = row.insertCell(0);
        const cellEmail = row.insertCell(1);
        const cellNoHP = row.insertCell(2);
        const cellKelas = row.insertCell(3);
        const cellAlamat = row.insertCell(4);
        const cellMinat = row.insertCell(5);
        
        cellNama.innerHTML = registration.nama;
        cellEmail.innerHTML = registration.email;
        cellNoHP.innerHTML = registration.nohp;
        cellKelas.innerHTML = registration.kelas;
        cellAlamat.innerHTML = registration.alamat;
        cellMinat.innerHTML = registration.minat;
        cellAksi.innerHTML = `<button onclick="deleteRegistration(${index})">Hapus</button>`;
    });
});

function deleteRegistration(index) {
    const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
    registrations.splice(index, 1);
    localStorage.setItem('registrations', JSON.stringify(registrations));
    location.reload();
}
