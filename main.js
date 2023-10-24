let saturate =document.getElementById('saturate');
let contrast =document.getElementById('contrast');
let brightness =document.getElementById('brightness');
let sepia =document.getElementById('sepia');
let grayscale =document.getElementById('grayscale');
let blur =document.getElementById('blur');
let huerotate =document.getElementById('hue-rotate');
let download =document.getElementById('download');
let reast =document.querySelector('span');
let image =document.getElementById('image');
let upload =document.getElementById('upload');
let imgbox =document.querySelector('.img-box');
const canvas =document.getElementById('canvas');
const ctx =canvas.getContext('2d');


function resetvalue(){
    image.style.filter='none';
    saturate.value='100';
    contrast.value='100';
    brightness.value='100';
    sepia.value='0';
    grayscale.value='0';
    blur.value='0';
    huerotate.value='0';
    // Reset the ctx.filter property
    ctx.filter = 'none';

    // Redraw the image on the canvas with no filters
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

}

window.onload =function (){
    download.style.display='none';
    reast.style.display='none';
    imgbox.style.display='none';

}
upload.onchange = function (){
    resetvalue()
    download.style.display='block';
    reast.style.display='block';
    imgbox.style.display='block';
    let file =new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload =function (){
        image.src=file.result;
    }
    image.onload=function(){
        resetvalue()
        canvas.width=image.width;
        canvas.height=image.height;
        ctx.drawImage(image,0,0,canvas.width,canvas.height)
        image.style.display='none';
        
    }
   
}
let filters = document.querySelectorAll("ul li input");
 filters.forEach( filter =>{
    filter.addEventListener('input',function(){
        ctx.filter=`
        saturate(${(saturate.value)}%)
        contrast(${(contrast.value)}%)
        sepia(${(sepia.value)}%)
        grayscale(${(grayscale.value)})
        blur(${(blur.value)}px)
        hue-rotate(${(huerotate.value)}deg)
        brightness(${(brightness.value)}%)

        `
        ctx.drawImage(image,0,0,canvas.width,canvas.height)
    })
 }) 
 download.onclick=function(){
    download.href=canvas.toDataURL();
 }
 