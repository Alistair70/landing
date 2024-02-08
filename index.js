document.getElementById("toLogin").addEventListener("click", function() {
    window.location.href = "/login";
});
document.getElementById("toSignup").addEventListener("click", function() {
    window.location.href = "/signup";
});

document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display elements from the server
    cookieCheck(); 

});

function cookieCheck()
{
    cookie_name = "stock_tracker_cookie_container"
    if(document.cookie.split(';').some((item) => item.trim().startsWith(`${cookie_name}=`)))
    {
        console.log("true")
        window.location.href = "/dash";
    }
}