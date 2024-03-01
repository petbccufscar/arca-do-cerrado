export function getIndex(x, y) {
    var index = 0;
    if (x < 15){ // quadrante 1 e 5
        if (y < 19){
            index = 5
        } else {
            index = 1
        }
    }else if (x < 32){
        if (y < 19){ // quadrante 2 e 6
            index = 6
        } else {
            index = 2
        }
    } else if (x < 49){ // quadrante 3
        index = 3
    } else if (x < 65){ // quadrante 4
        index = 4
    }
    return index;
}

export function getPosition(x, y, index){
    if (Number(index) == 1){
        return {x: x*15 + 152 , y: (y - 19)*15 + 9 }
    } else if (Number(index) == 2){
        return {x: (x - 15)*15 + 0 , y: (y - 19)*15 + 13 }
    } else if (Number(index) == 3){
        return {x: (x - 32)*15 + 0 , y: (y - 19)*15 + 10 }
    } else if (Number(index) == 4){
        return {x: (x - 49)*15 + 2 , y: (y - 19)*15 + 11 }
    } else if (Number(index) == 5){
        return {x: x*15 + 150 , y: y*15 + 170 }
    } else if (Number(index) == 6){
        return {x: (x - 15)*15 + 0 , y: y*15 + 170 }
    } 
}

console.log(getPosition(0, 0, 5))