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
    form.email.value = savedData.email;
    form.message.value = savedData.message;
    form.elements.email = formData.email;
    form.elements.message = formData.message;
  }
}

console.log(formData.message);
console.log(formData.email);

function onFormSubmit(evt) {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all field');
    return;
  }
  console.log(formData);
  console.log('email:', formData.email);
  console.log('message:', formData.message);
  localStorage.removeItem(localStorageKey);
  form.reset();
}
