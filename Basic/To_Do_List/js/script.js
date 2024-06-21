var count = 0;
    function listDownTask(){
        var data = document.getElementById("list-display").value;
        var taskResult = document.getElementById("result");
        
        // var li = document.createElement("li")
        // taskResult.appendChild(li)
        //  console.log(taskResult);

        // Generated list in ul and inherit
        taskResult.innerHTML += `<li class="list-text" id="list-${count}"> ${data} </li> <button onclick="listStrike('list-${count}')"> Complete </button>`;
        count++;
        // console.log(data);
    }

    function listStrike(id){
        console.log("It's working!!!");
        console.log(id)
        // console.log(taskResult);
        var list = document.getElementById(id);
        list.style.textDecoration = "line-through";
    }