function handleGabungButtonClick() {
    alert("Anda telah berhasil bergabung!");     
}

const btnGabung = document.querySelector('.btn-gabung');
btnGabung.addEventListener('click', handleGabungButtonClick);

function handleLihatButtonClick(event) {
    const teks = event.target.parentElement.querySelector('.teks').innerText;
    alert("Anda mengklik tombol 'Lihat' pada kelas: " + teks);
}

const lihatButtons = document.querySelectorAll('.blok-dalam button');
lihatButtons.forEach((button) => {
    button.addEventListener('click', handleLihatButtonClick);
});

function handleChatButtonClick() {
    alert("Anda telah mengklik tombol 'Chat'. Silakan hubungi kami melalui email atau Instagram.");
}

const btnChat = document.querySelector('.chat');
btnChat.addEventListener('click', handleChatButtonClick);

function handleAnotherButtonClick() {
    alert("Anda telah mengklik tombol 'Another'. Silakan cari kontak kami di WhatsApp.");
}

const btnAnother = document.querySelector('.another');
btnAnother.addEventListener('click', handleAnotherButtonClick);


// Slide testimonials when "Testimoni" button is clicked
function handleTestimoniButtonClick() {
    const testimoniContainer = document.querySelector('.testimoni-container');
    const cardHeight = testimoniContainer.querySelector('.card').clientHeight;
    const testimoniButton = document.querySelector('.testimoni-button');

    // Toggle the sliding effect by changing the container height
    if (testimoniContainer.style.height === '' || testimoniContainer.style.height === '0px') {
        testimoniContainer.style.height = `${cardHeight}px`;
        testimoniButton.innerText = 'Sembunyikan Testimoni';
    } else {
        testimoniContainer.style.height = '0px';
        testimoniButton.innerText = 'Testimoni';
    }
}

const testimoniButton = document.querySelector('.testimoni-button');
testimoniButton.addEventListener('click', handleTestimoniButtonClick);
