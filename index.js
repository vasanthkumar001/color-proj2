const red=document.querySelector(".red");
const cyan=document.querySelector(".cyan");
const violet=document.querySelector(".violet");
const orange=document.querySelector(".orange");
const pink=document.querySelector(".pink");

const center=document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor)

const getBgColour =(selectedElement)=>{
   return window.getComputedStyle(selectedElement).backgroundColor;
}

const magicColor=(element,color)=>{
    element.addEventListener('mouseenter',()=>{
      return  center.style.background=color
    })
 };

magicColor(red,getBgColour(red));
magicColor(cyan,getBgColour(cyan));
magicColor(violet,getBgColour(violet));
magicColor(orange,getBgColour(orange));
magicColor(pink,getBgColour(pink));
