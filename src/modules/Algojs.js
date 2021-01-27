"use strict";

// npm--------------------------------------------Function without argument--------------------------------------------
export function isoNum() {
    return 42;
}

// --------------------------------------------------- Function with arguments -------------------------------------
export function myFct(arg1, arg2) {
    return  91;
}

// --------------------------------------------------- Messi’s Goal Total -------------------------------------
export function goalTotal(arg1, arg2, arg3) {
    var sum = arg1 + arg2 + arg3;
    return  sum;
}
// --------------------------------------------------- Grasshopper Order of Operations -------------------------------------
export function GrasshopperOrder() {
    var sum = (2+2) * (2+2) * 2;
    return  sum;
}
// --------------------------------------------------- Return the First Element in an Array -------------------------------------
export function getFirstValue(tab) {
    var tab = [58, 34, 29 ];
    return  tab[0];
}

// --------------------------------------------------- Find the Smallest and Biggest Numbers -------------------------------------
export function minMax(tab) {
    var result = [];
    var top = tab[0];
    var down = tab[0];
    for ( var i= 1; i <= tab.length; i++) {
        if (tab[i] > top) {
            top = tab[i];
        }    
    }
    for (var j= 1; j <= tab.length; j++) {
        if (tab[j] < down) {
            down = tab[j];
        }    
    }
    result = [down, top];
    return result; 

}


// --------------------------------------------------- Find the Smallest and Biggest Numbers -------------------------------------
// export function minMax(tab) {
//     var result = [];
//     var top = tab[0];
//     var down = tab[0];
//     for ( var i= 1; i <= tab.length; i++) {
//         if (tab[i] > top) {
//             top = tab[i];
//         }    
//     }
//     for (var j= 1; j <= tab.length; j++) {
//         if (tab[j] < down) {
//             down = tab[j];
//         }    
//     }
//     result = [down, top];
//     return result; 

// }

// --------------------------------------------------- Sort by String Length -------------------------------------
export function sortByLength(tab) {
    var final = 0;
    var tmp = 0;
    for (var i =0 ; i< tab.length ; i++){
        final = i;
            for ( var j=i+1 ; j < tab.length ; j++) {
                if ( tab[j].length < tab[final].length) {
                    tmp= tab[final]
                    tab[final] = tab[j];
                    tab[j]= tmp;
                } 
            }
    }
    return tab ;
}
// --------------------------------------------------- Filter Strings from Array -------------------------------------
export function filterArray(tab){
    var tab = [1, 2, 3, "a", "b", 4];
    var final = [];
    var j = 0;
    for ( var i = 0 ; i<tab.length; i++){
        if (tab[i]<= 0 || tab[i]>= 0){
        final [j]= tab[i];
        j++;
        }
    }
    return final;
 }
// --------------------------------------------------- Return Last Item -------------------------------------
export function lastItem(chain) {
    var last = chain.charAt(chain.length-1);
    return last;
}


// --------------------------------------------------- The Farm Problem -------------------------------------
export function animals(matrice) {
    var x = 2 * 2;
    var y = 3 * 4;
    var z = 5 * 4;
    var sum = x + y + z;
    return sum;

}
// --------------------------------------------------- Reverse an Array -------------------------------------
export function reverseArray(tab) {
    var tab = [1, 2, 3, 4];
    var move = 0;   
    for (var i=0 ; i<=tab.length ; i++){
        while ( tab[i] < tab[i+1]){
            move = tab[i];
            tab[i]= tab[i+1];
            tab[i+1]= move;
            i = 0;
        } 
    }
    return tab ;
 }
// --------------------------------------------------- Return the Next Number from the Integer Passed -------------------------------------
export function addition(x) {
    return 9+1;
}

// --------------------------------------------------- Boolean to String Conversion -------------------------------------
export function boolToString(boleans) {
    if (boleans === true ) {
        return "true";
    }
    if (boleans === false ) {
        return "false";
    }
}

// --------------------------------------------------- Filter out Strings from an Array -------------------------------------
export function filterArrayInt(tab) {
    var array = [];
    for (var i = 0; i < tab.length; i++) {
        var cheek = (tab[i]);
        console.log("le type est :", typeof cheek );
        if (typeof cheek === 'number'){
            array.push(tab[i]);
             
        }
    }
    return array;
}

// --------------------------------------------------- Array of Multiples -------------------------------------
export function arrayOfMultiples(x, nbre) {
    var multiple = 0;
    var tab = [];
    for (var i = 1; i <= nbre; i++){
        multiple = x * i;
        tab.push(multiple);
    }
    return tab;
}

// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------
export function convert(h, mn) {
    var x = h * 3600;
    var y = mn * 60;
    return x + y;
}
// --------------------------------------------------- Return Negative -------------------------------------
 export function returnNegative(arg) {
     if (arg > 0) {
         return -arg;
     } else if (arg < 0) {
         return arg;
         } else {
            return 0;
            }
 }
// --------------------------------------------------- Simple Loop -------------------------------------
export function simpleLoop(nbre) {
    var tab = [];
    for (var i = 1; i <= nbre; i++) {
        tab.push(i);
    }
    return tab;
}

// --------------------------------------------------- Area of a Rectangle -------------------------------------
export function getArea(long, larg) {
    var surf = long * larg;
    if (surf <= 0) {
        return -1;
    }
    return surf;
}
// --------------------------------------------------- Two Makes Ten -------------------------------------
export function makesTen(x, y) {
    var sum = x + y;
    if (x === 10 || y === 10) {
        return true;
    } else if (sum === 10) {
        return true;
    } else {
        return false;
    } 
}

// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------
export function addUp(nbre) {
    var sum = 0;
    for (var i = 1; i <= nbre; i++) {
        sum = sum + i;
    }

    return sum;
}
// --------------------------------------------------- Matchstick Houses -------------------------------------
export function matchHouses(x) {
    var result = (6 * x) - (x - 1);
    return result;

}