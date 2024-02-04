const buttons = document.querySelectorAll("[data-modal-id]");
// const buttonz = document.querySelectorAll("button");

buttons.forEach((button) => {
  const modalId = button.dataset.modalId;
  const modal = document.getElementById(modalId);
  modal.classList.add("show");
});
