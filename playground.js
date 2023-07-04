class Person {
    name;

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        document.getElementById('name').innerHTML = "Hi I'm " + this.name 
    }
}

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
    document.getElementById('increment').innerHTML = "Count: " + count
} 

function reset() {
    count = 0
    document.getElementById('increment').innerHTML = "Count: " + count
}

function time() {
    setInterval(time, 1000);
    var date = new Date()
    window.onload = 
    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds()

    document.getElementById('time').innerHTML = (hours < 10 ? "0" : "") + hours 
                                                + ":" + (minutes < 10 ? "0" : "") + minutes 
                                                + ":" + (seconds < 10 ? "0" : "") + seconds
                                            
}

function displayName() {
    const aozora = new Person('AozoraHusky')
    aozora.introduceSelf()
}

window.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('time');
  
    // Function to update the time
    const updateTime = () => {
      const date = new Date();
      const timeString = date.toLocaleTimeString();
      timeElement.textContent = timeString;
    };
  
    // Call the function to update the time immediately
    updateTime();
  
    // Update the time every second
    setInterval(updateTime, 1000);
  });