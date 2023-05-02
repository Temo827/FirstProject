//1
document.addEventListener("DOMContentLoaded", function() {
    let gamochenilia = false;

    function frequently(){
        if(gamochenilia){
            document.querySelector("#ForJS1").style.display = "none";
            document.querySelector("#ForJSImg1 img").setAttribute("src", "Images/plus.png");
            gamochenilia = false;
        } else{
            document.querySelector("#ForJS1").style.display = "block";
            document.querySelector("#ForJSImg1 img").setAttribute("src", "Images/x.png");
            gamochenilia = true;
        }
    }
    document.querySelector("#ForJSImg1").addEventListener("click", frequently);
});
//2
document.addEventListener("DOMContentLoaded", function() {
    let gamochenilia = false;

    function frequently(){
        if(gamochenilia){
            document.querySelector("#ForJS2").style.display = "none";
            document.querySelector("#ForJSImg2 img").setAttribute("src", "Images/plus.png");
            gamochenilia = false;
        } else{
            document.querySelector("#ForJS2").style.display = "block";
            document.querySelector("#ForJSImg2 img").setAttribute("src", "Images/x.png");
            gamochenilia = true;
        }
    }
    document.querySelector("#ForJSImg2").addEventListener("click", frequently);
});
//3
document.addEventListener("DOMContentLoaded", function() {
    let gamochenilia = false;

    function frequently(){
        if(gamochenilia){
            document.querySelector("#ForJS3").style.display = "none";
            document.querySelector("#ForJSImg3 img").setAttribute("src", "Images/plus.png");
            gamochenilia = false;
        } else{
            document.querySelector("#ForJS3").style.display = "block";
            document.querySelector("#ForJSImg3 img").setAttribute("src", "Images/x.png");
            gamochenilia = true;
        }
    }
    document.querySelector("#ForJSImg3").addEventListener("click", frequently);
});
//4
document.addEventListener("DOMContentLoaded", function() {
    let gamochenilia = false;

    function frequently(){
        if(gamochenilia){
            document.querySelector("#ForJS4").style.display = "none";
            document.querySelector("#ForJSImg4 img").setAttribute("src", "Images/plus.png");
            gamochenilia = false;
        } else{
            document.querySelector("#ForJS4").style.display = "block";
            document.querySelector("#ForJSImg4 img").setAttribute("src", "Images/x.png");
            gamochenilia = true;
        }
    }
    document.querySelector("#ForJSImg4").addEventListener("click", frequently);
});
//5
document.addEventListener("DOMContentLoaded", function() {
    let gamochenilia = false;

    function frequently(){
        if(gamochenilia){
            document.querySelector("#ForJS5").style.display = "none";
            document.querySelector("#ForJSImg5 img").setAttribute("src", "Images/plus.png");
            gamochenilia = false;
        } else{
            document.querySelector("#ForJS5").style.display = "block";
            document.querySelector("#ForJSImg5 img").setAttribute("src", "Images/x.png");
            gamochenilia = true;
        }
    }
    document.querySelector("#ForJSImg5").addEventListener("click", frequently);
});