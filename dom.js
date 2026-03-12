function result() {
    //take input from user and display in h2 headin
    let inputData=document.getElementById("InputText").value;
    document.getElementById('text').textContent=inputData;
    

    //valid age for vote casting
    if (inputData>=18) {
        alert("Valid data");
    }
    else {
        alert("Not Valid")
    }

    //change color of heading on click
    let changeColor=document.getElementById('text');
    changeColor.style.color="red";
    
    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="yellow";

}

let para=document.getElementById("Paratext");
function changetextColor() {
    para.style.backgroundColor="#"+Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
};
para.addEventListener('mouseover', changetextColor);

