count = 0
document.getElementById('_counter').innerText = count
function increase(){
    count = count + 1;
    document.getElementById('_counter').innerText = count
    document.getElementById('_counter').style.color = 'blue'
}
function reset(){
    count = count = 0;
    document.getElementById('_counter').innerText = count;
    document.getElementById('_counter').style.color = 'purple'
}
function decreasse(){
    count = count - 1;
    if(count <= 0){
        if(count < 1 && count <= 100){
        }
    }
    document.getElementById('_counter').innerText = count
    document.getElementById('_counter').style.color = 'green'
}

