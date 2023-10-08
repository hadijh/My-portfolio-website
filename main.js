var typed= new Typed(".text" , {
    strings: ["Front-end Developer" , "Web Designer " , "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px"
};
const scriptURL = 'https://script.google.com/macros/s/AKfycbwWHbEaWMPJKIWE3E1MYZpnGrEpK1FWV4fpFcdiXRVBM0BrvEd6p0zbJHZG5EGhco7h/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Massage sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});
