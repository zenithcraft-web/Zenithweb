// Dapatkan elemen IP
const ipAddressElement = document.getElementById('ip-address');

// Tambahkan event listener saat IP diklik
ipAddressElement.addEventListener('click', function() {
    const ipToCopy = this.textContent;

    // Gunakan Clipboard API modern untuk menyalin
    navigator.clipboard.writeText(ipToCopy).then(() => {
        // Berikan feedback visual
        alert(`IP Address "${ipToCopy}" berhasil disalin!`);
    }).catch(err => {
        // Feedback jika gagal
        console.error('Gagal menyalin IP: ', err);
        alert('Gagal menyalin IP. Silakan salin manual.');
    });
});
