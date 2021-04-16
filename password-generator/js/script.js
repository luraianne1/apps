function myFunction() {
    var senha_gerada = document.getElementById("senha_gerada").value;    
    var tamanho = document.getElementById("tamanho").value;
    // var upper = document.getElementById("upper").value;
    // var lower = document.getElementById("lower").value;
    // var number = document.getElementById("number").value;
    // var simbolo = document.getElementById("simbolo").value;

    console.log(senha_gerada);
    console.log(tamanho);

    if (upper.checked) {
        console.log(upper.value);
    }
    if (lower.checked) {
        console.log(lower.value);
    }
    if (number.checked) {
        console.log(number.value);
    }
    if (simbolo.checked) {
        console.log(simbolo.value);
    }
}