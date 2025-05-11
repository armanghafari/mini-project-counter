let valueDisplyes = document.querySelectorAll(".num");

let interval = 5000;

valueDisplyes.forEach(valueDisplye =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplye.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(()=>{
        startValue += 1;
        valueDisplye.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    } ,duration)
})