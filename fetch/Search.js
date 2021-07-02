

function submited(){
let v=document.getElementById("searchv").value;
    let s =document.getElementById("searchurl").href;
    let ur=s+"more.html?q="+v;
    location.replace(ur);
    return false
}