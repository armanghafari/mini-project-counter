let valueDisplyes = document.querySelectorAll(".num");

valueDisplyes.forEach( valueDisplye => {
    let startValue = 0;
    let endValue = parseInt(valueDisplye.getAttribute("data-val"));
    let counter = setInterval(() => {
        startValue += 1;
        valueDisplye.innerHTML = startValue;
        if (startValue == endValue) {
            clearInterval(counter)
        };

    });
    
});