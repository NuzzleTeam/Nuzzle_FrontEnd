const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal-wrapper');

openBtn.onclick = () => {
    modal.style.display = 'flex';
};

closeBtn.onclick = () => {
    modal.style.display = 'none';
};