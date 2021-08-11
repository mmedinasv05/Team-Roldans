const $body = document.getElementById("body"),
$moon = document.getElementById("moon"),
$sun = document.getElementById("sun");

document.addEventListener("click", (e) => {

    if(e.target.matches("#moon")){
        $body.classList.add("dark-mode");
        $body.classList.remove("light-mode");
    }
    if(e.target.matches("#sun")){
        $body.classList.remove("dark-mode");
        $body.classList.add("light-mode");
    }



    if($body.classList.contains("light-mode") || $body.classList.contains("")){
        localStorage.setItem("light-mode", "false");
    }else{
        localStorage.setItem("light-mode", "true");
    }
})

if(localStorage.getItem("light-mode") === "true"){
    $body.classList.add("dark-mode");
    $body.classList.remove("light-mode");
}else{
    $body.classList.add("light-mode");
    $body.classList.remove("dark-mode");
}