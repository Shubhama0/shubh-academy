console.log(1);

const cb=document.getElementById("c-b");
const mb=document.getElementById("m-b");
const ll=document.getElementById("ll");

mb.addEventListener('click',function(){ll.classList
    .add('active');})

    cb.addEventListener('click',function(){ll.classList
        .remove('active');})