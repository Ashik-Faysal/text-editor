document.getElementById("text-bold").addEventListener("click", function(){
    
    const textField = document.getElementById("text-field");
    textField.style.fontWeight = "bold";
    textField.style.fontSize = "1.5rem";
});

document.getElementById("text-italic").addEventListener("click", function(){
    const textField = document.getElementById("text-field");
    textField.style.fontStyle="italic";
   
});
document.getElementById("text-underLine").addEventListener("click", function(){
    const textField = document.getElementById("text-field");
    textField.style.textDecoration = "underline";
   
});
document.getElementById("left-align").addEventListener("click", function(){
    const textField = document.getElementById("text-field");
    textField.style.textAlign = "left";
   
});
document.getElementById("center-align").addEventListener("click", function(){
    const textField = document.getElementById("text-field");
    textField.style.textAlign = "center";
   
});
document.getElementById("right-align").addEventListener("click", function(){
    const textField = document.getElementById("text-field");
    textField.style.textAlign = "right";
   
});


document.getElementById("btn-number").addEventListener("click", function(e){
    const textField = document.getElementById("text-field");
    const value = e.target.value;
    textField.style.fontSize= value + "px";
    
   
});

document.getElementById("btn-text").addEventListener("click", function(){
    const textField = document.getElementById("text-field");
    textField.style.textTransform= "lowercase";
   
});
//------------------------------------
document.getElementById("btn-color").addEventListener("change",function(event){
    const textField = document.getElementById("text-field");
    textField.style.color = event.target.value;
})
    
document.getElementById("clear-text").addEventListener("click", function(){
    const textField = document.getElementById("text-field");
    textField.value = "";
   
});