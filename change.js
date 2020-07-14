var switcher = document.getElementById('switch-box');
var main = document.getElementById('main');


// female-male switch
function switchCheck(){
    if (switcher.checked === true) {
        main.classList.remove('female');
        main.classList.add('male');
    }
    else {
        main.classList.remove('male');
        main.classList.add('female');
    }
}

//CALCULATE STEPS
var testsuly;
var testmagassag;
var error = document.getElementById('error-message');
var resultDisp = document.getElementById('result');
var category = document.getElementById('bmi-kategoria');

    document.getElementById('submit').addEventListener('click',function(e) {
        e.preventDefault();
        //get user data
        testsuly = document.getElementById('testsuly').value;
        testmagassag = document.getElementById('testmagassag').value;
        //check if data is set
        if (testsuly && testmagassag) {
            error.style.display="none";
            resultDisp.style.display="flex";
            var calcResult = testsuly/((testmagassag*testmagassag)*0.0001);
            //display data for user
            if(calcResult) {
                var finalRes = document.getElementById('bmi-ertek').innerHTML = Math.round(calcResult);
                console.log(finalRes);
                if (finalRes < 18.5) {
                    category.innerHTML = "Sovány";
                }else if (finalRes >= 18.5 && finalRes < 25) {
                    category.innerHTML = "Normál";
                }else if (finalRes >= 25 && finalRes < 30) {
                    category.innerHTML = "Túlsúly";
                }else {
                    category.innerHTML = "Elhízás";
                }
            }
        } else {
            error.style.display="block";
            resultDisp.style.display="none";
        }
    })
//display category