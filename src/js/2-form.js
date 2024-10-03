console.log('Form');

const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';
const formData = { email: '', message: '' };

form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

const savedData = JSON.parse(localStorage.getItem(localStorageKey));
console.log(savedData);

storageData();

function storageData(email, message) {
  if (savedData) {
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('email:', formData.email);
  console.log('message:', formData.message);

  localStorage.removeItem(localStorageKey);
  form.reset();
}
