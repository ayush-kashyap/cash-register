const closeTable = document.querySelector(".table-close");
const nextBtn = document.querySelector(".go");
const amtReturn = document.querySelector(".rtnamt");
const resetBtn = document.querySelector(".reset");
const loadImg = document.querySelector("img");
var billAmt = document.querySelector("#bill");
var cashAmt = document.querySelector("#cash");
const cashLabel = document.querySelector(".cashlabel");
const getChange = document.querySelector(".change");
const table = document.querySelector(".table");
let notesCount = document.querySelectorAll(".notesCount");
let notesAvailable = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

nextBtn.addEventListener('click', () => {
        if(billAmt.value == ""){
            alert("Bill Amount Cannot be Empty");
        }
        else{
            nextBtn.style.display="none";
            cashAmt.style.display=" block";
            getChange.style.display=" block";
            cashLabel.style.display=" block";
            cashAmt.focus();
        }
});
getChange.addEventListener('click', () => {
    let bill = parseInt(billAmt.value);
    let cash = parseInt(cashAmt.value);
    if(bill == cash){
        alert("No change!");
    }else if(cash == "" || cash < bill){
        alert("Cash given is less than bill amount");
        console.log(cash, bill);
    }else{
        let returnAmt = cash - bill;
        amtReturn.innerText=returnAmt;
        for(let i =0; i < notesAvailable.length; i++){
            notesCount[i].innerText = Math.trunc(returnAmt / notesAvailable[i]);
            returnAmt %= notesAvailable[i]; 
        }
        loadImg.style.display="block";
        setTimeout(() => {
            loadImg.style.display="none";
            table.style.display="block";
        }, 1500);
    }
});
closeTable.addEventListener('click', reset);
resetBtn.addEventListener('click', reset);
function reset(){
    table.style.display="none";
    nextBtn.style.display="block";
    cashAmt.style.display=" none";
    getChange.style.display=" none";
    cashLabel.style.display=" none";
    cashAmt.value="";
    billAmt.value="";
    billAmt.focus();
}