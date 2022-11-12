var all = 0;
var driver =4;
var a = "";
var slideList = ["img0","img1","img2","img3","img4"];
var height = document.querySelector('.navbar').offsetHeight +20;
var trigger="";


function changeRight() { //shifts the list towards right for going right in slideshow

    trigger = "main_fadeInRight";
    driver = 4;
    a=slideList[4];
    
    for (var i = 0; i < 4; i++) {
        slideList[driver] = slideList[driver-1];
        driver--;
    }
    slideList[0]=a;
    update(trigger);
}

function changeLeft() { //shifts the list towards left for going left in slideshow

    trigger = "main_fadeInLeft";
    a=slideList[0];
    for (var i = 0; i < 4; i++) {
        slideList[i] = slideList[i+1];
    }
    slideList[4]=a;
    update(trigger);

}

function update(putTrigger) { // updates all images classes in slideshow 
    for (var j = 0; j < 5; j++) {
        document.querySelectorAll(".main_area img")[j].className = slideList[j];

        // set the background as the main image in slideshow and add a fadein effect to it.
        if (document.querySelectorAll(".main_area img")[j].className == "img0") {
            document.querySelector(".dynamicback").style.backgroundImage = "url('images/cover"+j+".jpg')";
            document.querySelectorAll(".main_area img")[j].classList.add(putTrigger);  
            //^takes the animation name stored in trigger when clicking left or right buttons and plays animation accordingly
        }
    }

}

document.querySelector(".leftbtn").addEventListener("click",changeLeft);
document.querySelector(".rightbtn").addEventListener("click",changeRight);
document.querySelector(".dynamicback").style.height = height+"px";

// var x = document.getElementById("demo");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.watchPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
// function showPosition(position) {
//     document.querySelector(".testing").innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
// }

// getLocation();
// showPosition();

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');

    console.log(`Latitude : ${crd.latitude}`);
    document.querySelector(".testing").innerHTML=`Latitude : ${crd.latitude} Longitude: ${crd.longitude}`;
    console.log(`Longitude: ${crd.longitude}`);
    // document.querySelector(".testing").innerHTML=`Longitude: ${crd.longitude}`;

    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);