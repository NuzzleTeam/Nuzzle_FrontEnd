const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal-wrapper");

open.onclick = () => {
    modal.style.display = "flex";
};

close.onclick = () => {
    modal.style.display = "none";
};