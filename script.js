let c=0, ic=0, dc=0;

function update () {
    document.getElementById("count").innerText = c;
    document.getElementById("increment").innerText = ic;
    document.getElementById("decrement").innerText = dc;
}

function reset(){
    c=0;
    ic=0;
    dc=0;
    update();
}

function inc(){
    c++
    ic++
    update();
}

function dec(){
    c--
    dc++
    update();
}
