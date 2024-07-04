document.querySelectorAll("section img").forEach(image =>{
    image.onclick = () =>{
        console.log(Object.keys(image));
        document.querySelector(".popup").style.display = "block";
        console.log(Object.keys(image));
        document.querySelector(".popup img").src = image.getAttribute("src");  
    }
});
document.querySelector(".popup span").onclick = () =>{
    document.querySelector(".popup").style.display = "none";
}
