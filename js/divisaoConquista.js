
var cont = 0;
var x = [];

function corpo(){

    for(var i = 0; i<=400; i++){

        if(document.getElementById("field"+i) == null || 
            document.getElementById("field"+i).value == null || 
             document.getElementById("field"+i).value == ""){
            break;
        }else{
            x[cont] = parseInt(document.getElementById("field"+i).value);
            cont++;
        }
    }

    console.log(mergeSort(x));
}

function mergeSort(arr){

    if (arr.length < 2)
        return arr;
 
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
 
    return merge(console.log(mergeSort(left)), console.log(mergeSort(right));

}
 
function merge(left, right){

    var result = [];
 
    while (left.length && right.length) {

        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }

    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;

}

