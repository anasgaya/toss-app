
var list = document.querySelector("#para")


function result(coin){
    var tossResult = Math.ceil(Math.random()*2)
    console.log(tossResult);


    if(tossResult === 1 && coin === "chand" ){
 console.log("you won the toss");
 list.innerhtml ="tossResult";
    }


    else if (tossResult === 2 && coin === "masjid"){
console.log("you won the toss")
    }


    else if (tossResult === 2 && coin === "chand")
        console.log ("you loss the toss")


    else if (tossResult === 1 && coin === "masjid")
        console.log ("you loss the toss")
}