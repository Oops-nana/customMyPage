const body = document.querySelector("body");

const IMAGE_COUNT = 3;

function getRanNum(){
    const ranNum = Math.floor(Math.random() * IMAGE_COUNT);
    return ranNum;
}

function painting(randomNumber){
    const img = new Image();
    img.src = `images/${randomNumber + 1}.jpg`
    img.classList.add("bgImage");
    body.prepend(img);

}

function init(){
    const randomNumber = getRanNum();
    painting(randomNumber);
}

init();