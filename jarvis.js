const element = document.getElementsByClassName('form-control wide')[0];
const btnn = document.getElementsByClassName('btn btn-primary mb-3 wide')[0];

console.log(element);
console.log(btnn);

btnn.addEventListener('click', function (){
    if(element.value.trim()!=0){
        let items = JSON.parse(localStorage.getItem('item'));
        if (items === null){
            task = [];
        }
        else{
            task = items;
        }
        task.push(element.value);
        localStorage.setItem('item', JSON.stringify(task));
        alert("Task Added Successfully !!!!")
    }
    else{
        alert("Empty Task Can't be added !!!!")
    }
    show();
});

function show(){
    let items = JSON.parse(localStorage.getItem('item'));
    if(items === null){
        task = [];

    }else
    {
       task = items;
    }

    let html = '';
    let itemshow = document.querySelector('.todo');
    task.forEach((data, index) => {

        html += `
        <div class="col-lg-10 todo">
            <div class="form-control wide">
                <p class="we">${data}</p>
            </div>
            <br>
        </div> 
        <div class="col-lg-2">
            <center><button class="btn btn-primary mb-3 wide" onClick="deleteItem(${index})">Delete</button></center>
        </div>
        `
        
    });
    itemshow.innerHTML = html;
}
show();

function deleteItem(index){
    let items = JSON.parse( localStorage.getItem('item'));
    task.splice(index, 1);
    localStorage.setItem('item', JSON.stringify(task));
    alert("Task Deleted Successfully !!!!")
    show();
}