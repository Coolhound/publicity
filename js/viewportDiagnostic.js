// Helper for viewport width diagnostics


export function viewportDiagnostic(bDiagnose) {

    const diagnosticContent = document.querySelector("#diagnosticContent");

    if (bDiagnose == true)
    {
        diagnosticContent.innerHTML = "<span class='navbar-text'>Size: <span class='dg-diagnostic'></span></span>" +
                                    "<span class='navbar-text'>Width: <span id='width'>9999</span></span>" +
                                    "<span class='navbar-text'>Height: <span id='height'>9999</span></span>";

        const heightOutput = document.querySelector("#height");
        const widthOutput = document.querySelector("#width");

        function resizeListener() {
            heightOutput.textContent = window.innerHeight;
            widthOutput.textContent = window.innerWidth;
        }

        window.addEventListener("resize", resizeListener);

        window.onload = function() {
            resizeListener();
        }

    }
    else
    {
        diagnosticContent.style.display = "none";
    }
}