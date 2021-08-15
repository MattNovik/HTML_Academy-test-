menuToggle = document.querySelector(".page-header__menu-toggle");
menuMob = document.querySelector(".menu-mob");
openPopup = document.querySelectorAll(".open-popup");
popup = document.querySelector(".wrapper-modal");
closePopup = document.querySelector(".wrapper-modal-form__close");
pageHover = document.querySelector(".wrapper-page-modal-hover");

for (let i = 0; i < openPopup.length; i++) {
	openPopup[i].addEventListener("click", () => {
		if (popup.classList.contains("wrapper-modal_closed")) {
			popup.classList.remove("wrapper-modal_closed");
			pageHover.classList.remove("wrapper-page-modal-hover_closed");
		}
	})
};

pageHover.addEventListener("click", () => {
	popup.classList.add("wrapper-modal_closed");
	pageHover.classList.add("wrapper-page-modal-hover_closed");
});

closePopup.addEventListener("click", () => {
	if (!popup.classList.contains("wrapper-modal_closed")) {
		popup.classList.add("wrapper-modal_closed");
		pageHover.classList.add("wrapper-page-modal-hover_closed");
	}
});

menuToggle.addEventListener("click", () => {
	if (menuMob.classList.contains("menu-mob_closed")) {
		menuMob.classList.remove("menu-mob_closed");
		menuToggle.classList.add("page-header__menu-toggle_opened");
	} else {
		menuMob.classList.add("menu-mob_closed");
		menuToggle.classList.remove("page-header__menu-toggle_opened");
	}
});