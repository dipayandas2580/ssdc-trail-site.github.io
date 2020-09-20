var marker=document.querySelector("#marker");
var item=document.querySelectorAll(".activity-bar a");


function indicator(e)
{
    marker.style.left=e.offsetLeft+"px";
    marker.style.width=e.offsetWidth+"px";
}
item.forEach(Link =>{
    Link.addEventListener("click",(e)=>{
        indicator(e.target);
    })
})
document.getElementsByClassName("content-link")[0].click();

function openContent(evt, activity_name) {
    var i, content, content_link;
    content = document.getElementsByClassName("content");
    for (i = 0; i <content.length; i++) {
      content[i].style.display = "none";
    }
    content_link= document.getElementsByClassName("content-link");
    for (i = 0; i < content_link.length; i++) {
      content_link[i].className = content_link[i].className.replace(" active", "");
    }
    document.getElementById(activity_name).style.display = "block";
    evt.currentTarget.className += " active";
  } 