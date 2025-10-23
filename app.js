let myLeads = [];

const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");

const ulEl = document.querySelector("#ul-el");

let LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(LeadsFromLocalStorage) {
    myLeads = LeadsFromLocalStorage;
    renderLeads();
}

inputBtn.addEventListener("click", ()=> {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
})

/*
function renderLead() {
    let listItem = "<li>" + inputEl.value + "</li>"
    ulEl.innerHTML += listItem;
}
*/

function renderLeads() {
    let listItems = "";

    for(let i=0; i<myLeads.length; i++) {
        listItems += `<li><a target="_blank" href="${myLeads[i]}"> ${myLeads[i]} </a></li>`;

        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
}


let deleteEl = document.getElementById("delete-btn");

deleteEl.addEventListener("click", ()=> {
    localStorage.clear();
    myLeads = [];
    renderLeads()
})