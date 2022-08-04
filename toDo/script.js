function printHeight(){
    var height = window.innerHeight
    var width = window.innerWidth
    console.log( height, typeof(height), width, typeof(width))
    // heightWin, typeof(heightWin),
}

// MODEL
// 1. Schema -> data_object = {
//         text: value_text,
//         date: value_date,
//         id: id_value
//     }


function loadAll(){

    if (localStorage.getItem('list') === null) {
        var list = [];   
    }
    else {
        var list = JSON.parse(localStorage.getItem('list'))
        list.forEach(element => {
            addToView(element);
        })
    };
    return list
}

var list_data = loadAll();

function savejson(list){
    localStorage.setItem('list', JSON.stringify(list));
}    


function addToModel(){
    //////////////
    // TO MODEL///
    //////////////
    let value_text = document.getElementById('data-text').value;
    let value_date = document.getElementById('data-date').value;
    let value_id = Math.random(); // for the data-id
    let data_object = {
        text: value_text,
        date: value_date,
        id:value_id
    };
    list_data.push(data_object);
    // console.log(data_object);
    savejson(list_data);
    return data_object;
}


// CONTROLLER

function addTodo(){
    let data_object = addToModel()
    addToView(data_object);
    cleanSpace();

}

function get_and_remove_id(event) {
    
    const id_x = get_id(event);
    remove_id(id_x);
    
}
function get_id(event){
    const x = event.target
    
    const id_x = x.parentNode.id;
    return id_x;
}

function remove_id(id_x){
    id_x = Number(id_x)
    document.getElementById(id_x).remove();
    list_data = list_data.filter(function(item) {
        return item.id !== id_x;
    });
    // update the local storage
    savejson(list_data)
}


// VIEW
function addToView(data_object) {
    /////////////
    // TO VIEW///
    /////////////
    let element = document.createElement('div');
    element.className = 'div-made';
    element.id = data_object.id;
    let element_span = document.createElement('span');
    element_span.innerText = data_object.text + ' ' + data_object.date;
    element.appendChild(element_span);
    // CREATE BUTTON DELETE
    let element_buttom = document.createElement('input');
    element_buttom.type = 'button';
    element_buttom.value = 'delete';
    element_buttom.onclick = get_and_remove_id;
    element.appendChild(element_buttom);
    // ADD DIV TO MAIN
    document.getElementById('main').appendChild(element);
}
function cleanSpace(){
    document.getElementById('data-text').value = '';
    document.getElementById('data-date').value = '';
}

