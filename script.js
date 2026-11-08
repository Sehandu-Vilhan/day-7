
let calHitory = [];



function clickMe_sum() {

    let txtvalue = document.getElementById("txtSample").value;
    let num1 = parseInt(txtvalue);

    let txtvalue2 = document.getElementById("txtSample2").value;
    let num2 = parseInt(txtvalue2);


    let total = num1 + num2;
    console.log(total);
    document.getElementById("lblSelection").innerHTML = "<h1>" + total + "</h1>";


    calHitory.push(num1 + "+" + num2 + "=" + total);

clickMe_H();


}




dddff




function clickMe_red() {

    let txtvalue = document.getElementById("txtSample").value;
    let num1 = parseInt(txtvalue);

    let txtvalue2 = document.getElementById("txtSample2").value;
    let num2 = parseInt(txtvalue2);

    let total = num1 - num2;
    console.log(total);
    document.getElementById("lblSelection").innerHTML = "<h1>" + total + "</h1>";


    calHitory.push(num1 + "-" + num2 + "=" + total);


clickMe_H();
}



function clickMe_dev() {

    let txtvalue = document.getElementById("txtSample").value;
    let num1 = parseInt(txtvalue);

    let txtvalue2 = document.getElementById("txtSample2").value;
    let num2 = parseInt(txtvalue2);


    let total = num1 / num2;
    console.log(total);
    document.getElementById("lblSelection").innerHTML = "<h1>" + total + "</h1>";


    calHitory.push(num1 + "/" + num2 + "=" + total);

clickMe_H();

}


function clickMe_mul() {

    let txtvalue = document.getElementById("txtSample").value;
    let num1 = parseInt(txtvalue);

        let txtvalue2 = document.getElementById("txtSample2").value;
         let num2 = parseInt(txtvalue2);


    let total = num1 * num2;
    console.log(total);
    document.getElementById("lblSelection").innerHTML = "<h1>" + total + "</h1>";


    calHitory.push(num1 + "*" + num2 + "=" + total);

    clickMe_H();



}


// function clickMe_7() {
// let txtvalue = 7;
// let num1 = parseInt(txtvalue);

// let txtvalue2 = 
// let num2 = parseInt(txtvalue2);



// }

function clickMe(num) {
    document.getElementById("txtSample").value += num;

}




function clickMe_H() {

    document.getElementById("hhh").innerHTML = "";

    for (let i = 0; i < calHitory.length; i++) {
        //const element = calHitory[i];

        document.getElementById("hhh").innerHTML += "<li>" + calHitory[i] + "</li>";


    }



    
}