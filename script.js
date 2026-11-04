function clickMe_sum() {

    let txtvalue = document.getElementById("txtSample").value;
    let num1 = parseInt(txtvalue);

    let txtvalue2 = document.getElementById("txtSample2").value;
    let num2 = parseInt(txtvalue2);


    let total = num1 + num2;
    console.log(total);
    document.getElementById("lblSelection").innerHTML = "<h1>" + total + "</h1>";

    
}


function clickMe_red() {

    let txtvalue = document.getElementById("txtSample").value;
    let num1 = parseInt(txtvalue);

    let txtvalue2 = document.getElementById("txtSample2").value;
    let num2 = parseInt(txtvalue2);


    let total = num1 - num2;
    console.log(total);
    document.getElementById("lblSelection").innerHTML = "<h1>" + total + "</h1>";}



function clickMe_dev() {

    let txtvalue = document.getElementById("txtSample").value;
    let num1 = parseInt(txtvalue);

    let txtvalue2 = document.getElementById("txtSample2").value;
    let num2 = parseInt(txtvalue2);


    let total = num1 / num2;
    console.log(total);
    document.getElementById("lblSelection").innerHTML = "<h1>" + total + "</h1>";
}


function clickMe_mul() {

    let txtvalue = document.getElementById("txtSample").value;
    let num1 = parseInt(txtvalue);

    let txtvalue2 = document.getElementById("txtSample2").value;
    let num2 = parseInt(txtvalue2);


    let total = num1 * num2;
    console.log(total);
    document.getElementById("lblSelection").innerHTML = "<h1>" + total + "</h1>";
}


// function clickMe_7() {
// let txtvalue = 7;
// let num1 = parseInt(txtvalue);

// let txtvalue2 = 
// let num2 = parseInt(txtvalue2);



// }