function CreateDisplay(x,y){
    let a, b, arr = [], display = {};

    for(a = 0; a < x; a++){
        display[a] = [];
        for(b = 0; b < y; b++){
            display[a][b] = 0;
        }
    }
    for(key in display){
        arr[key] = display[key];
    }
    return arr;
}

function matrix(matrix){
    matrix.forEach(el => {
        console.log("[" + el.join(", ") + "]");
    });
    return "";
}

let display = CreateDisplay(3,3);

display[1][1] = 1;

let x = 3, y = 3;
let a = 0;
let b = 0;
console.log(matrix(display));

let interval0 = setInterval(() => {
    if(a > y){
        a = 0;
        b += 1;
    };
    a++;
    console.log(display[a][0]);
},800);