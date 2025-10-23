let myLeads = [];

const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteEl = document.getElementById("delete-btn");
const LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(LeadsFromLocalStorage) {
    myLeads = LeadsFromLocalStorage;
    renderLeads(myLeads);
}

inputBtn.addEventListener("click", ()=> {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
})

/*
function renderLead() {
    let listItem = "<li>" + inputEl.value + "</li>"
    ulEl.innerHTML += listItem;
}
*/

function renderLeads(leads) {
    let listItems = "";

    for(let i=0; i<leads.length; i++) {
        listItems += `<li><a target="_blank" href="${leads[i]}"> ${leads[i]} </a></li>`;

        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
}

deleteEl.addEventListener("click", ()=> {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
})
