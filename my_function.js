function positive_number_counter(alist) {
    var num_of_positive_num = 0;
    if (alist.constructor != Array) { //checks if the input is a list
        throw "This is not a list!";
    }
    for(var i = 0; i < alist.length; i++){ //iterates through the length of the list, and looks for positive numbers, incrementing the counter up when it does
        if(alist[i] > 0){
            num_of_positive_num++;
        }
    }
    return num_of_positive_num
}

console.log(positive_number_counter([1, 2, 3, 4, 5, -6, 7, -8, -9, 10]));
console.log(positive_number_counter("This is wrong"));