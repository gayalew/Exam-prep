const dwld = document.querySelector("#loadApp");
const abt = document.querySelector('#about');
const clickable = document.querySelectorAll('.clickable');
const text = document.querySelector('#text');
const guide = document.querySelector('#guide');
const sheet = document.querySelector('#sheet');
const mock = document.querySelector('#mock');
const search = document.querySelector('#search');
const schedule = document.querySelector('#schedule');

dwld.addEventListener('click', function(){
    console.log("downloading started...")
});

abt.addEventListener("click", function(){
    console.log("This ia v1.0 Exam-Prep web and mobile app.");
});
text.addEventListener("click", function(){
    console.log("Text books are loading...");
});
guide.addEventListener("click", function(){
    console.log("Guide books are loading...");
});
sheet.addEventListener("click", function(){
    console.log("Exam sheets are loading...");
});
mock.addEventListener("click", function(){
    console.log("Mock tests are loading...");
});

console.log(clickable);
clickable.forEach(el => el.addEventListener('click', function(e){
    e.style.borderColor = 'none';
}))