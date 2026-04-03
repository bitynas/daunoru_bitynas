

document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const mobileNav = document.querySelector(".mobile_nav");
    const mobileMenuBtn = document.querySelector(".mobile_menu_btn");
    const submenuToggles = document.querySelectorAll(".mobile_submenu_toggle");
    const mobileMenuLinks = document.querySelectorAll(".mobile_menu_panel a");
    const mobileSearchToggle = document.querySelector(".mobile_search_toggle");
    const searchToggles = document.querySelectorAll(".search_toggle");

    function closeMobileMenu() {
        if (!mobileNav || !mobileMenuBtn) return;

        mobileNav.classList.remove("menu_open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");

        submenuToggles.forEach(toggle => {
            toggle.setAttribute("aria-expanded", "false");
        });

        document.querySelectorAll(".mobile_has_submenu").forEach(item => {
            item.classList.remove("submenu_open");
        });
    }

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener("click", () => {
            const isOpen = mobileNav.classList.toggle("menu_open");
            mobileMenuBtn.setAttribute("aria-expanded", isOpen);
        });
    }

    submenuToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const parentItem = toggle.closest(".mobile_has_submenu");
            if (!parentItem) return;

            const isOpen = parentItem.classList.toggle("submenu_open");
            toggle.setAttribute("aria-expanded", isOpen);
        });
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeMobileMenu();
        });
    });

    searchToggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            const searchBox = toggle.closest(".search_box");
            if (!searchBox) return;

            document.querySelectorAll(".search_box.open").forEach(box => {
                if (box !== searchBox) {
                    box.classList.remove("open");
                }
            });

            searchBox.classList.toggle("open");
        });
    });

    if (mobileSearchToggle && mobileNav) {
        mobileSearchToggle.addEventListener("click", () => {
            mobileNav.classList.toggle("search_open");
        });
    }

    document.addEventListener("click", (e) => {
        document.querySelectorAll(".search_box.open").forEach(box => {
            if (!box.contains(e.target)) {
                box.classList.remove("open");
            }
        });
    });
});


