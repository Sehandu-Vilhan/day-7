function clickMe_add() {
    let txtname =document.getElementById("txtSample").value;
    console.log(txtname );
    document.getAnimations("dd").innerHTML+=`<li>${txtname}</li>`
}
