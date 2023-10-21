let display=document.getElementById("output-box");
let buttons=document.querySelectorAll("button");
let out="";


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "="){
            out =eval(out);
            display.value=out;
        }
        else if(e.target.innerHTML == "AC"){
            out ="";
            display.value=out;
        }
        else if(e.target.innerHTML == "DEL"){
            out=out.slice(0,-1 );
            display.value=out;
        }
        else{
            out += e.target.innerHTML;
            display.value = out;
        }
    });
});