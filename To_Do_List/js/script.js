// function listDownTask(){
//     var data = document.getElementById("list-display").value
//     // document.getElementById("result").innerHTML += data;
//     var result = document.createElement("li")
//     var result_display =  result.innerText = data.value
//     document.innerText = result_display
// }

function listDownTask(){

    // Using METHOD

    // var data = document.getElementById("list-display").value;

    // var li = document.createElement("li");
    // li.innerText = data;

    // var strike = document.createElement("button");
    // strike.innerText = "Complete";

    // var ul = document.getElementById('result');

    // li.style.textDecoration="line-through";
    // ul.appendChild(li);
    // ul.appendChild(strike)

    // Using INNERHTML

    var data = document.getElementById("list-display").value;
    var ul = document.getElementById('result');

    ul.innerHTML = ul.innerHTML + `<li>${data}</li><button onclick="copleteTask()">Complete</button>`;

    
}