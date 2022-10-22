const form = document.querySelector('.signup form'),
      continueBtn = form.querySelector('.button input'),
      errorTxt = document.querySelector('.error-txt');


form.onsubmit = (e) => {
    e.preventDefault();
} 

continueBtn.onclick = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', './php/signup.php', true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                if(data === 'success'){
                    location.href = 'pages/users.php';
                }else{
                    errorTxt.style.display = 'block';
                    errorTxt.textContent = data;
                }
            }
        }
    }
    let formdata = new FormData(form);
    xhr.send(formdata)
}