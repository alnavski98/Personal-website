let count = 0;

function myFunction() {
    let a = "UwU ";
    let b = "what's this?";
    c = a+b;
    alert(c);
}

function incrementer() {
    //alert(count++);
    //console.log("Clicked");
    count++
    document.getElementById('increment').value = count
} 

function reset() {
    count = 0
    document.getElementById('increment').value = count
}