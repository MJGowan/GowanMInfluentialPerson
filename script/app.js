let fianceeBtn = document.getElementById("fianceeBtn");
let teacherBtn = document.getElementById("teacherBtn");
let badassBtn = document.getElementById("badassBtn");
let backBtn = document.getElementById("backBtn");

fianceeBtn.addEventListener('click', function(){
    window.open('../pages/pageOne.html')
})
teacherBtn.addEventListener('click', function(){
    window.open('../pages/pageTwo.html')
})
badassBtn.addEventListener('click', function(){
    window.open('../pages/pageThree.html')
})
backBtn.addEventListener('click', function(){
    window.open('../index.html')
})
