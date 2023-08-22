const backDrop = document.querySelector(".backdrop");
const showModalbtn = document.querySelector(".show-modal");
const Modal = document.querySelector(".modal");
const CloseModal = document.querySelector(".close-modal");
const ConfirmModal = document.querySelector(".confirm-modal");
const Inputs = document.querySelectorAll(".modal .input-user input");
function showfun() {
    Modal.style.opacity = "1";
    Modal.style.transform = "translateY(20vh)";
    backDrop.style.display = "block";
}
function closeModal(){
    Modal.style.opacity = "0" ;
    Modal.style.transform = "translateY(-100vh)";
    backDrop.style.display = "none";
}
function confirmfun(){

    Swal.fire(
        '!ثبت نام شما با موفقیت انجام شد',
        '',
        'success'
      );
      closeModal();
    };
showModalbtn.addEventListener("click" , showfun);
CloseModal.addEventListener("click" , closeModal);
backDrop.addEventListener("click" , closeModal);
ConfirmModal.addEventListener("click" ,confirmfun);


