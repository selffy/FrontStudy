const brandLogo = document.querySelector(".brand-logo-border");
const convertButton = document.querySelector(".article-footer");
const textarea = document.querySelector(".article-body-textarea textarea");
const pre = document.querySelector(".article-body pre");
const inputUrl = document.querySelector("#web-url");
const linkButton = document.querySelector(".button-url button");

brandLogo.onclick = () => {
    //location.href = "https://papago.naver.com";
    //location.replace("https://papago.naver.com/");
    //location.replace: 뒤로가기가 안됨.
    //이전페이지로 돌아갈 이유가 없을 때 사용.(예) 회원가입 인증 등.
    
    location.href = "http://127.0.0.1:5500/git/FrontStudy/src/papago/historyback";
}

convertButton.onclick = () => {
    pre.textContent = textarea.value;
}

textarea.onkeyup = () => {
    pre.textContent = textarea.value;
}

linkButton.onclick = () => {
    let protocols = new Array();
    protocols.push("http://");
    protocols.push("https://");

    for(let i = 0; i < protocols.length; i++){
        if(inputUrl.value.includes(protocols[i])){
            location.href = inputUrl.value;
            return;            
        }
    }
    location.href = "https://" + inputUrl.value;
}

inputUrl.onkeypress = () => {
    if(window.event.keyCode == 13){
        linkButton.click();
    }
}

