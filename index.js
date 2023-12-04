const nextPage = document.querySelector('.card-inner-box').style;
const frontImage = document.querySelector('.front-image-box').style;
function rotateRight(){
    nextPage.transform = "rotateY(-180deg)";
}
function rotateLeft(){
    nextPage.transform = "rotateY(0deg)";
}
