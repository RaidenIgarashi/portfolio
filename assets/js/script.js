let count = 0
const num_ads = 3

let slider = document.getElementById('slide')

function nextimage(){
    count++
    if(count > num_ads-1){
        count=0
    }
    passimage()
}

function passimage(){
    let marginpercent = 100/num_ads
    marginpercent = marginpercent*count
    slider.style.marginLeft = `-${marginpercent}%`
    slider.style.transition = "1s"    
}

setInterval(nextimage, 2000)