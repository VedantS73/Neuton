rstrip = document.querySelector('.rstrip');
rstriptxt = document.querySelector('.rstriptxt');
rnum = 2;

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.add('show');
        rstrip.style.transform = `rotate(${(rnum/2)*180}deg)`;
        rstriptxt.style.transform = `rotate(${(rnum/2)*180}deg), translate(-50%, -50%)`;
        // rnum = entries.indexOf(entry);
        // console.log(rnum);
        // if(entry.isIntersecting){
        //     entry.target.classList.add('show');
        // } else {
        //     entry.target.classList.remove('show');
        // }
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    rstrip = document.querySelector('.rstrip');
    console.log('DOM fully loaded and parsed');
    const  hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    rstriptxt = document.querySelector('.rstriptxt');
});

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    //rstrip.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    rnum = round1(window.pageYOffset/(window.innerHeight/2))
    console.log(rnum);
    // if (Math.floor((rnum/5)*5) % 5){
    //     console.log("SWAP");
    // }else{
    //     console.log("NOSWAP");
    // }
}

function round1(x)
{
    return Math.ceil(x/2)*2;
}
