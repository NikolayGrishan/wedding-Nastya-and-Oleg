// const form = document.getElementById("rsvpForm");
// const success = document.getElementById("successMessage");

// const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbywvG1dqWbo4c_vrXWL2V8o_MEMAkBbCwEXaybYnmXrnQrO7z3S6lYzFJXk2seFYa9f/exec";

// form.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const formData = new FormData(form);

//   const drinks = formData.getAll("drink").join(", ");
//   formData.delete("drink");
//   formData.append("drink", drinks);

//   try {
//     await fetch(GOOGLE_SCRIPT_URL, {
//       method: "POST",
//       body: formData,
//       mode: "no-cors"
//     });

//     form.reset();
//     success.style.display = "block";
//   } catch (error) {
//     alert("Не получилось отправить форму.");
//   }
// });


const form = document.getElementById("rsvpForm");
const success = document.getElementById("successMessage");
const submitButton = document.querySelector(".submit");

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbywvG1dqWbo4c_vrXWL2V8o_MEMAkBbCwEXaybYnmXrnQrO7z3S6lYzFJXk2seFYa9f/exec";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const drinks = formData.getAll("drink").join(", ");
  formData.delete("drink");
  formData.append("drink", drinks);

  // состояние загрузки
  submitButton.disabled = true;
  submitButton.textContent = "Отправляем...";

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors"
    });

    form.reset();

    success.style.display = "block";
    success.textContent = "Спасибо! Ответ отправлен 💌";

    submitButton.textContent = "Отправлено";
  } catch (error) {
    alert("Не получилось отправить форму.");
    
    submitButton.disabled = false;
    submitButton.textContent = "Отправить";
  }
});