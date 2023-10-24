let saturate = document.getElementById("saturate");
let saturateid = document.getElementById("saturateid");
let contrast = document.getElementById("contrast");
let contrastid = document.getElementById("contrastid");
let brightness = document.getElementById("brightness");
let brightnessid = document.getElementById("brightnessid");
let sepia = document.getElementById("sepia");
let sepiaid = document.getElementById("sepiaid");
let grayscale = document.getElementById("grayscale");
let grayscaleid = document.getElementById("grayscaleid");
let blure = document.getElementById("blur");
let blureid = document.getElementById("blurid");
let hueRotate = document.getElementById("hue-rotate");
let hueRotateid = document.getElementById("hue-rotateid");



linkInputs(saturate, saturateid);
linkInputs(contrast, contrastid);
linkInputs(brightness, brightnessid);
linkInputs(sepia, sepiaid);
linkInputs(grayscale, grayscaleid);
linkInputs(blure, blureid);
linkInputs(hueRotate, hueRotateid);


function linkInputs(range, number) {
  range.addEventListener("input", () => {number.value = range.value; })
  number.addEventListener("input", () => {range.value = number.value;})
}

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let rest = document.querySelector("span");
let mainImage = document.querySelector('.main-image');

function  restValue() {
  ctx.filter = 'none';
  saturate.value = '100';
  saturateid.value = '100';
  contrast.value = '100';
  contrastid.value = '100';
  brightness.value = '100';
  brightnessid.value = '100';
  sepia.value = '0';
  sepiaid.value = '0';
  grayscale.value = '0';
  grayscaleid.value = '0';
  blure.value = '0';
  blureid.value = '0';
  hueRotate.value = '0';
  hueRotateid.value = '0';
  ctx.drawImage(img,0,0,canvas.width,canvas.height)
};
rest.addEventListener('click', () => restValue())

window.addEventListener("load", function () {
download.style.display ='none';
rest.style.display ='none';
mainImage.style.display ='none';
});

const canvas = document.getElementById("canva-img");
const ctx = canvas.getContext("2d");

upload.addEventListener("change", function() {
  restValue();
  download.style.display ='block';
  rest.style.display ='block';
  mainImage.style.display ='block';
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = () => img.src = file.result;
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
    img.style.display = 'none';
  }
});


let filters  = document.querySelectorAll("ul li input");
filters.forEach(function(filter)  {
  filter.addEventListener("input", function() {
    ctx.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blure.value}px)
    hue-rotate(${hueRotate.value}deg)
    `
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    // set();
  });
});

download.addEventListener("click", function () {
  download.href = canvas.toDataURL('image/jpeg');
})
