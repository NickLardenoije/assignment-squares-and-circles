let arr1 = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500]
let arr2 = [100, 200, 300, 400, 500, 600]

let xmlns = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(xmlns, "svg");
svg.setAttribute("width", 600);
svg.setAttribute("height", 700);
svg.setAttribute("viewBox", "0 0 600 600");
svg.setAttribute("background", "grey");

for(y = 0; y < arr2.length; y = y + 1){
    for(x = 0; x < arr1.length; x = x + 1){
        if(x == 0){
            kleur = `rgb(${255 - y * 50},0,0)`;
            let Vierkant = document.createElementNS(xmlns, "rect");
            Vierkant.setAttribute("width", 25);
            Vierkant.setAttribute("height", 25);
            Vierkant.setAttribute("x", arr1[x] - 10);
            Vierkant.setAttribute("y", arr2[y] - 10);
            Vierkant.setAttribute("fill", kleur);
            Vierkant.setAttribute("stroke","black");

            svg.appendChild(Vierkant);
        }
        else {
            let Cirkel = document.createElementNS(xmlns, "circle");
            Cirkel.setAttribute("cx", arr1[x]);
            Cirkel.setAttribute("cy", arr2[y]);
            Cirkel.setAttribute("r", 12.5);
            Cirkel.setAttribute("fill", kleur);
            Cirkel.setAttribute("stroke", "black");

            svg.appendChild(Cirkel);
        }
    }
}

document.body.appendChild(svg);
