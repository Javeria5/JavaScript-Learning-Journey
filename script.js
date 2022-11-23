
var selectedRow = null;
var data = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
        saveLocalimpArray(ToDoList.value);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["ToDoList"] = document.getElementById("ToDoList").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("TodoList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.ToDoList;
    var cell2 = newRow.insertCell(1);
       
        cell2.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
    ///let impArray = [ data.ToDoList];
    
    ///localStorage.setItem('Name', impArray);
    //saveLocalimpArray(data.ToDoList);
}
// Save Value in Data Base
function saveLocalimpArray(todo){
    let impArray;
    if (localStorage.getItem("impArray") === null ){

        impArray = [];
    }
    
    else {
        impArray = JSON.parse(localStorage.getItem("impArray"));
        }
       
    impArray.push(todo);
    localStorage.setItem("impArray", JSON.stringify(impArray));
}


// To Reset the data of fill input
function resetForm(){
    document.getElementById('ToDoList').value = '';
    selectedRow = null;
}
// function update(){
//     //kr kya rahy yeh btao jab hum update krien tu submit hojyr hold
// }

// For Edit operatio

//myBtn.addEventListener('click',updatedata)

function updatedata(){
    console.log("udpatedata")
    EditLocalStorage();


}
var data_global

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    data_global = selectedRow.children[0].innerHTML;
    // now call localstorage funcion  with data value
    //localStorage.setItem("data", JSON.stringify(data));
    document.getElementById('ToDoList').value = data_global
    console.log(data_global); 
    
    // EditLocalStorage(data);
    

}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.ToDoList;
    

    EditLocalStorage();
    

    
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('TodoList').deleteRow(row.rowIndex);
        resetForm();
        removeLocalimpArray(TodoList); 
        
        //localStorage.setItem("impArray", JSON.stringify(impArray));
    }

    
}
function removeLocalimpArray(todo){
    let impArray;
    if (localStorage.getItem("impArray") === null ){

        impArray = [];
    }
    
    else {
        impArray = JSON.parse(localStorage.getItem("impArray"));
        }
    
    const todoIndex = todo.children[0].innerText;
    console.log(todoIndex);
    impArray.splice(impArray.indexOf(todoIndex),1);
    localStorage.setItem("impArray", JSON.stringify(impArray));
}
//
function EditLocalStorage(){
    var impArray;
    if (localStorage.getItem("impArray") === null ){

        impArray = [];
    }
    
    else {
        impArray = JSON.parse(localStorage.getItem("impArray"));
        }
    console.log("edit")
    var new_data = document.getElementById('ToDoList').value;
    console.log(data_global)
    data_value = impArray.indexOf(data_global)  //is data kai andar
    console.log(data_value);
    impArray[data_value] = new_data;
    console.log(impArray)
    localStorage.setItem("impArray", JSON.stringify(impArray));

    //kro
   

    //impArray[td] = 
   // <button type="button" class="myBtn" id="myBtn">Updates</button>
}
//ok