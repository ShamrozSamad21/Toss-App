var head = document.querySelector("#head")
var img = document.querySelector("#coin")
function toss(val){
var randonNumber = Math.ceil(Math.random() * 2 )
console.log(randonNumber)
if(randonNumber === 1 && val === `chand` || randonNumber === 2 && val === `masjid` ){
    head.innerHTML = `You won the toss`
    console.log("You won the toss")
}else{
    head.innerHTML = `You loss the toss`
    console.log("you loss the toss")
}
if (randonNumber === 1) {
img.src = "./assets/s-l1200.jpg"    
}else{
img.src = "assets/424-original.jpg"
}
}