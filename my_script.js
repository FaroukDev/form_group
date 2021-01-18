names = ["David","Joshua","Bernard","Youssef","Bart","Mohamed","Marwa","Maria","Maria","Rachid","Maxime","Jordan","Thibault","Tiphaine","Biben","Mouni","Farouk","Souad","Adlane"]


document.getElementById("add").onclick = function() {
    var text = document.getElementById("input").value; 
    var li = "<li>" + text + "</li>";
    document.getElementById("list").insertAdjacentHTML('beforeend', li);
    document.getElementById("input").value = ""; // clear the value
  }



function addToList(){
let nb_groups = 3;

let nbr_per_group = document.getElementById("input_group").value
while (names.length >= nbr_per_group){
    const result = new Array(Math.ceil(names.length / nbr_per_group))
        .fill()
        .map(_ => names.splice(0, nb_groups))
        console.log("\n", result);
        my_group = document.querySelector(".group")
        my_group.textContent =  `${result}`
        document.body.append(my_group)
        
    break;
}

    //for(i = 0; i < names.length; i++){
    //    i.remove(names) 
    //console.log("il reste=", names)
    //    { break; }
    //}
}



  