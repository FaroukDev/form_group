names = ["David","Joshua","Bernard","Youssef","Bart","Mohamed","Marwa","Maria","Maria","Rachid","Maxime","Jordan","Thibault","Tiphaine","Biben","Mouni","Farouk","Souad","Adlane"]

let newArray = [];


document.getElementById("add").onclick = function() {
    var text = document.getElementById("input").value;
    newArray.push(text);
    var li = "<li>" + text + "</li>";
    document.getElementById("list").insertAdjacentHTML('beforeend', li);
    document.getElementById("input").value = ""; // clear the value
  }



let my_list = document.querySelector("#my_p");


function addToList(){
let nb_groups = 5;
let nbr_per_group = document.getElementById("input_group").value

while (names.length >= nbr_per_group){
    const result = new Array(Math.ceil(names.length / nbr_per_group))
        .fill()
        .map(_ => names.splice(0, nbr_per_group))
        console.log(result);
        let my_group = document.querySelector(".group")
        for(let i = 0; i <  result.length; i++){
            my_list.innerText +=  "Voici le groupe : " + result[i] + "\n";
        }
        
    
}


}

function removeGroup(){
    let group = document.getElementById("#remove_group");
    my_list.remove();
}

