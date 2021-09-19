let switch1 = document.querySelector(".switch1");
let switch2 = document.querySelector(".switch2");
let switch3 = document.querySelector(".switch3");
let switch4 = document.querySelector(".switch4");
let allSwitch = document.querySelectorAll("input");

allSwitch.forEach(btn => {
    btn.checked = false;
});

function randomSwitch(valueSwitch) {
    let rdm = Math.floor((Math.random() * 4) + 1);
    console.log(rdm);

    if (rdm === 1) {
        if (switch1.checked == false) {
            switch1.checked = true;
        }else{
            switch1.checked = false;
        }
    }else if (rdm === 2){
        if (switch2.checked == false) {
            switch2.checked = true;
        }else{
            switch2.checked = false;
        }
    }else if(rdm === 3){
        if (switch3.checked == false) {
            switch3.checked = true;
        }else{
            switch3.checked = false;
        }
    }else if(rdm === 4){
        if (switch3.checked == false) {
            switch3.checked = true;
        }else{
            switch3.checked = false;
        }
    }
}


switch1.addEventListener('change', function(){
    randomSwitch(switch1);
});

switch2.addEventListener('change', function(){
    randomSwitch(switch2);
});

switch3.addEventListener('change', function(){
    randomSwitch(switch3);
});

switch4.addEventListener('change', function(){
    randomSwitch(switch4);
});

