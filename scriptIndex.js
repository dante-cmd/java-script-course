function changeText(){
    let go_text = document.getElementById('go-text');
    if (document.getElementById('some-text') === null) {
        let element = document.createElement('span');
        element.id = 'some-text';
        element.innerText = 'Hello World';
        go_text.appendChild(element);
        go_text.style = "width: 100%;height:100px;background-color: rgb(17, 115, 160);color: #fff;font-size: 30px;text-align: center;";
    }
}
function removeText(){
    let go_text = document.getElementById('go-text');
    go_text.style = "";
    let element = document.getElementById('some-text');
    element.remove();
}

// togle
function togle(){
    let element = document.getElementById("bottom-id");
    element.classList.toggle('transparent');
}

function writeText(){
    document.write('Hello World');
}

function helloAlert(){
    alert('Hello World');
        }

function addDiv(name) {
    let element = document.createElement('div');
    element.innerText = name;
    document.getElementById('main').appendChild(element);
}



