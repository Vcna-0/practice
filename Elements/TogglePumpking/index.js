let input = document.querySelector("input");
let tittle = document.querySelector(".tittle");


input.addEventListener("click", () => {
    if (input.checked) {
        // tittle.style.color="yellow";
        tittle.style.textShadow="#DA5F0B 1px 0 10px";
    }else{
        tittle.style.color="#250007";
        tittle.style.textShadow="#250007 5px 0 20px";
        
    }
});
