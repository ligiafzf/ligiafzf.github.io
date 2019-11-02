let iconMenu = document.getElementById('íconMenu');
let sidebar = document.getElementById('sidebar');
let mainContent = document.getElementById('mainContent');
sidebar.style.left = '-300px';

let w = window.innerWidth;

window.addEventListener("resize", () => {
    w = window.innerWidth;
})

if (w <=768) {
    sidebar.classList.add('hide');
} else {
    sidebar.classList.remove('hide');
}


function responsiveSidebar() {
    if (w <= 768) {
        if (sidebar.classList.contains('hide') || sidebar.style.left == '-300px'){
            sidebar.classList.remove('hide');
            sidebar.style.left='0px';
        } else {
            sidebar.style.left='-300px';
        }
    }
}