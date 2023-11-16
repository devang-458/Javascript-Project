# PROJECTS RELATED TO DOM

## Project link

[Click Here]()

# Solution code

## Project - 01 (Color Changer)

```javascript
const button = document.querySelectorAll(".button");
const body = document.getElementById("container");

button.forEach(function (button) {
    button.addEventListener("click", (e) => {
        if (e.target.id === "green") {
            document.body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "blue") {
            document.body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "white") {
            document.body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "brown") {
            document.body.style.backgroundColor = e.target.id;
        }
    })
});

```

## Project - 02 (BMI Calculator )

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a vaild height: ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a vaild height: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            results.innerHTML = `<span>You are weight is in "UNDER WEIGHT" ${bmi}</span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>You are weight is in "NORMAL RANGE" ${bmi}</span>`;
        } else {
            results.innerHTML = `<span>You are weight is in "OVERWEIGHT" ${bmi}</span>`;
        }

    }
});
```

## Project - 03 (Digital Clock)

```javascript
const clock = document.getElementById("clock");

setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project - 04 ()
```javascipt


```