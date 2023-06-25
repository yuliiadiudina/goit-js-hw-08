import throttle from 'lodash.throttle';

const LOCALSTORAGEKEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onUpdateInput, 500));
formRef.addEventListener('submit', formSubmit);

try {
   let onTextInput = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY));
   formRef.elements.email.value = onTextInput.email;
   formRef.elements.message.value = onTextInput.message;
} catch (e) {
   console.log(e);
}

function onUpdateInput(e) {   
   localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(createStatusInput()));
}

function createStatusInput() {
  return {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };
}

function formSubmit(e) {
   e.preventDefault();
   console.log(createStatusInput());
   formRef.reset();
   localStorage.removeItem(LOCALSTORAGEKEY);
}
