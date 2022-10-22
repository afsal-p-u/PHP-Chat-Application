const form = document.querySelector('.typing-area'),
inputFeild = form.querySelector('.input-field'),
sentBtn = form.querySelector('button'),
chatBox = document.querySelector('.chat-box');

console.log(chatBox);

form.onsubmit = (e) => {
    e.preventDefault();
}

sentBtn.onclick = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '../php/insert-chat.php', true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
               inputFeild.value = '';
               scrollToLast();
            }
        }
    }
    let formdata = new FormData(form);
    xhr.send(formdata)
}

chatBox.onmouseenter = () => {
    chatBox.classList.add('active');
}
chatBox.onmouseleave = () => {
    chatBox.classList.remove('active');
}

setInterval(() => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '../php/get-chat.php', true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                chatBox.innerHTML = data;
                if(!chatBox.classList.contains('active')){
                    scrollToLast();
                }
            }
        }
    }
    let formdata = new FormData(form);
    xhr.send(formdata)
}, 500);


function scrollToLast(){
    chatBox.scrollTop = chatBox.scrollHeight;
}