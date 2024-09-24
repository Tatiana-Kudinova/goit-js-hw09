console.log('Form');

const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';
const formData = { email: '', message: '' };

form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

const savedData = JSON.parse(localStorage.getItem(localStorageKey));
console.log(savedData);

storageData();

function storageData(email, message) {
  if (savedData) {
    form.email.value = savedData.email;
    form.message.value = savedData.message;
  }
}

function onFormSubmit(evt) {
  if (!formData.email || !formData.message) {
    alert('Fill please all field');
  }
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(localStorageKey);
}
