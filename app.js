const inputBtn = document.querySelector("#input-btn");

let myLeads = [];

const inputEl = document.querySelector("#input-el");

const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", ()=> {
    myLeads.push(inputEl.value);
    // renderLead();
    ulEl.innerHTML += `<li><a target="_blank" href="${inputEl.value}"> ${inputEl.value} </a></li>`;
    inputEl.value = '';
})

/*
function renderLead() {
    let listItem = "<li>" + inputEl.value + "</li>"
    ulEl.innerHTML += listItem;
}
*/

/*
function renderLeads() {
    let listItems = "";

    for(let i=0; i<myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>";

        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
}
*/
