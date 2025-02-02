let formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const localStorageKey = 'feedback-form-state';

const emailInput = form.elements.email;
const messageInput = form.elements.message;

function saveToLocalStorage() {
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function loadDataFromLocalStorage() {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

loadDataFromLocalStorage();

form.addEventListener('input', (event) => {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }
  saveToLocalStorage();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email  || !formData.message ) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    emailInput.value = '';
    messageInput.value = '';
  }
});

