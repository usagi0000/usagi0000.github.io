/* GSAP ANIMATION */
gsap.from('.sa', 1.2,{opacity: 0, y: 200,delay: .1});
gsap.from('.presentation h1', 1.2,{opacity: 0, x: -100,delay: .1});
gsap.from('.down ', 1.2,{opacity: 0, y: -150,delay: .1});
gsap.from('.contactImg ', 1.2,{opacity: 0, y: 150,delay: .1});
gsap.from('.forum ', 1.2,{opacity: 0, x: 150,delay: .1});



gsap.from('.diplome ', 1.2,{opacity: 0, y: -200,delay: .1});

var icon=document.getElementById("icon");
var line=document.getElementById("line");
var line2=document.getElementById("line2");
var theme;
icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
}
icon.onclick=function(){
    if(document.body.classList.toggle("dark-theme")){
        icon.src="images/sun.png";
        line.src="images/Line 2.png";
        line2.src="images/Line 2.png";
        theme="dark";
        localStorage.setItem("mode", "dark")  

    }else{
        icon.src="images/moon.png";
        line.src="images/Line 1.png";
        line2.src="images/Line 1.png";
        theme="light";

    } localStorage.setItem("PageTheme", JSON.stringify(theme));
}

    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    console.log(GetTheme);
    if(GetTheme === "dark"){
        document.body.classList = "dark-theme";
    }else{
        document.body.classList = "";
    }





