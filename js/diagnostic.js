// Helper for viewport width diagnostics

const outputStatus = false;
//const outputStatus = true;

const diagnosticContainer = document.querySelector("#diagnosticContainer");
const diagnosticContent = document.querySelector(  "#diagnosticContent");


if (outputStatus == true)
{
    // "<span class='navbar-text'>Size: <span class='pf-diagnostic' id='size'>XXL</span></span>" +        
    diagnosticContent.innerHTML = "<span class='navbar-text'>Size: <span class='pf-diagnostic'></span></span>" +
                                  "<span class='navbar-text'>Width: <span id='width'>9999</span></span>" +
                                  "<span class='navbar-text'>Height: <span id='height'>9999</span></span>";

    //const sizeOutput = document.querySelector("#size");
    const heightOutput = document.querySelector("#height");
    const widthOutput = document.querySelector("#width");

    function resizeListener() {
        heightOutput.textContent = window.innerHeight;
        widthOutput.textContent = window.innerWidth;
/*
        if ( window.innerWidth < 576 )
        sizeOutput.textContent = "xs";
        else if ( window.innerWidth < 768 )
        sizeOutput.textContent = "sm";
        else if ( window.innerWidth < 992 )
        sizeOutput.textContent = "md";
        else if ( window.innerWidth < 1200 )
        sizeOutput.textContent = "lg";
        else
        sizeOutput.textContent = "xl";
*/
    }

    window.addEventListener("resize", resizeListener);

    window.onload = function() {
        resizeListener();
    }

}
else
{
    diagnosticContainer.style.display = "none";
}