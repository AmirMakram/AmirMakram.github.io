let cv = document.getElementsByClassName('cv');

for(let item of cv){
    item.addEventListener('click',(e)=>{
        window.location.reload(false);
    })
}
