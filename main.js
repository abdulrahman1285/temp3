let down = document.querySelector('.go-down');

down.onclick=()=>{
    scroll({
        left:0,
        top:900,
        behavior:'smooth'
    })
}



let menu = document.getElementsByClassName('maga-menu')[0];
let btn = document.getElementsByClassName('btn')[0];

btn.onclick=function(){
    if(menu.classList.contains('hide')){
        menu.classList.remove('hide');
    }else{
        menu.classList.add('hide')
    }
}
