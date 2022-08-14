const modal = document.getElementById("myModal");
const modal_edit = document.getElementById("myModal_edit")

const btn_del = document.getElementById("modal_del_button");

const btn_edit = document.getElementById("modal_edit_button");

const span_del = document.getElementsByClassName("close")[0];
const span_edit = document.getElementsByClassName("close")[1];

const cancel_btn_del = document.getElementById("cancel_button_del");
const cancel_btn_edit = document.getElementById("cancel_button_edit");

btn_del.addEventListener('click',()=>{modal.style.display = "block";});

btn_edit.addEventListener('click',()=>{modal_edit.style.display = "block"})

cancel_btn_del.addEventListener('click',()=>{modal.style.display = "none";})
cancel_btn_edit.addEventListener('click',()=>{modal_edit.style.display = "none";})

span_del.addEventListener('click',()=>{modal.style.display = "none";});
span_edit.addEventListener('click',()=>{modal_edit.style.display = "none";})

window.addEventListener('click',(event)=>{if (event.target == modal) {modal.style.display = "none";}})
window.addEventListener('click',(event)=>{if (event.target == modal_edit) {modal_edit.style.display = "none";}})