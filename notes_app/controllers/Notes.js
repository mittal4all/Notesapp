showData();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', editData);

function editData() {
    console.log(localStorage.username);
    let abc=localStorage.key(localStorage.username);
    console.log(abc);
    let addtext = document.getElementById('addtext')
    let addTitle = document.getElementById('addTitle');
    let myNotes = localStorage.getItem("notes");
    if (myNotes == null) {
        NotesArr = [];
    }
    else {
        NotesArr = JSON.parse(myNotes);
    }
    var NotesObj = {
        title: addTitle.value,
        Data: addtext.value
    }
    NotesArr.push(NotesObj);
    if (addtext.value != "" && addTitle.value != "") {
        localStorage.setItem("notes", JSON.stringify(NotesArr));
        addtext.value = "";
        addTitle.value = "";
        showData();
    }
}

// collect data form localstorage and print the data into html page
function showData() {
    let myNotes = localStorage.getItem("notes");
    if (myNotes == null) {
        NotesArr = [];
    }
    else {
        NotesArr = JSON.parse(myNotes);
    }
    let showNotes = "";
    NotesArr.forEach((element, index) =>{
        showNotes += `
        <div class="card mx-2 my-2" style="width:18rem;">
        <div class="card-body">
            <h5 class="card-title">${index + 1}. ${element.title}</h5>
            <p class="card-text">${element.Data}</p>
            <button class="btn btn-primary" id="${index}" onclick="deleteNotes(this.id)">Delete Note</button>
        </div>
    </div>`
    });
    if (NotesArr.length != 0) {
        let notescontent = document.getElementById("notescontent");
        notescontent.innerHTML = showNotes;
    }
    else {
        notescontent.innerHTML = `please add your content`;
    }
}

// Delete notes
function deleteNotes(index) {
    let myNotes = localStorage.getItem("notes");
    NotesArr = JSON.parse(myNotes);
    NotesArr.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(NotesArr));
    showData();
}

let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input', searchNotes);

//search notes
function searchNotes() {
    let searchValue = searchTxt.value;
    let Notes = document.getElementsByClassName('card');
    Array.from(Notes).forEach(element => {
        let notesdata = element.getElementsByTagName('p')[0].innerHTML;
        if (notesdata.includes(searchValue)) {
            element.style.display = "Block";
        }
        else {
            element.style.display = "none";
        }
    });
}