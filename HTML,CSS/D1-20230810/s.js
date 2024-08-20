let currentIndex = 0;

function showSlide(Index){

    // const slides = document.querySelectorAll(".displayofftag");
    if(Index <= 0){
        currentIndex =  Index;
        document.getElementsByClassName("slider-btn left")[0].style.display = "none"
        document.getElementsByClassName("slider-btn right")[0].style.display = "block"
        // document.getElementById(".slider-btn left").style.display = "none"
        // document.getElementById(".slider-btn right").style.display = "block"
    } else {
        currentIndex = Index
        document.getElementsByClassName("slider-btn left")[0].style.display = "block"
        document.getElementsByClassName("slider-btn right")[0].style.display = "none"
        // document.getElementById("leftcur").style.display = "block"
        // document.getElementById("rightcur").style.display = "none"
    };

    const offset = -currentIndex * 100;
    document.querySelector(".slider").style.transform = `translateX(${offset}%)`;

};

function prevslide(){
    showSlide(currentIndex-1);
};

function nextslide(){
    showSlide(currentIndex+1);
};
