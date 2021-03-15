function init()
{
   
    const img=document.getElementById("indexBG");
    img.onclick=()=>{
        img.style.animation=""
        img.style.display="none";
    }
    
}
window.onload=init();