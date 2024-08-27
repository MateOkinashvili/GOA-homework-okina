const password = "okina123";
let pass;
let attempts = 3;


while(attempts > 0){
    let pass = prompt("Enter your password");
    if(pass !== password){
        attempts --
        alert("You have attempts " + attempts + "left")
    }
    else {
        alert("Access granted")
        break;
    }
    if(attempts === 0){
        alert("System blocked, no more tries left!")
    }
}