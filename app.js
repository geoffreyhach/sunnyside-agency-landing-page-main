
let navBtn = document.getElementById('toggle-nav');

navBtn.addEventListener('click', () => {
    let mobileNav = document.getElementById('header-nav');

        if (mobileNav.style.display == "none")
        mobileNav.style.display = "flex";
        else {
            mobileNav.style.display = "none";
        }
});

