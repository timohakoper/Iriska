document.getElementById('btn').addEventListener('click',showDiv);
let myDiv = true;
function showDiv(){
    let isShow = document.getElementById('dv');
    if(myDiv){
        isShow.style.display='block';
        myDiv=false;
    }else{
        isShow.style.display='none';
        myDiv=true;
    }
}
