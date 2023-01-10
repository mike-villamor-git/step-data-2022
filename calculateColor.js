export function calculateColor(value){
    let color;
    if (value >= 10000){
        color = "rgba(30, 250, 100, 1.0)"
    }
    else if (value >= 7500){
        color = "rgba(30, 200, 100, 0.8)"
    }
    else if (value >= 6000){
        color = "rgba(40, 180, 110, 0.8)"
    }
    else if (value >= 3000){
        color = "rgba(255, 205, 86, 0.8)"
    }
    else {

        color = "rgba(255, 99, 132, 1.0)";
    }
    return color;
}

