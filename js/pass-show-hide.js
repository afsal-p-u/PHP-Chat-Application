const pswrdFeild = document.querySelector('.form  input[type="password"]'),
      toggleBtn = document.querySelector('form .input i');


toggleBtn.onclick = () => {
    if(pswrdFeild.type == 'password'){
        pswrdFeild.type = 'text';
        toggleBtn.classList.add('active');
    }else{
        pswrdFeild.type = 'password';
        toggleBtn.classList.remove('active');
    }
}