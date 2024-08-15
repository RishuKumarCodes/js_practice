let btn = document.querySelector("button");
let ul = document.querySelector("ol");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    delBtn.classList.add("delete");

    // console.log(inp.value);
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

// This will not work for newely added tasks in todo: 

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

// Event deligation:
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
    }
    // console.log("Batane kaliked");
})