const menuToggle = document.querySelector(".page-header__menu-toggle");
const menuMob = document.querySelector(".menu-mob");
const openPopup = document.querySelectorAll(".open-popup");
const popup = document.querySelector(".wrapper-modal");
const closePopup = document.querySelector(".wrapper-modal-form__close");
const pageHover = document.querySelector(".wrapper-page-modal-hover");
const popupFormSend = document.querySelector(".wrapper-modal-form__form");
const additionalFromSend = document.querySelector(".additional-info__form");
const countriesCards = document.querySelector(".countries-cards");
const countriesSlides = document.querySelectorAll(".countries-slide__elem");
const countriesElements = document.querySelectorAll(".card");
const header = document.querySelector(".page-header");
const telephoneForm = document.querySelectorAll(".telephone");
const formSendSuccess = document.querySelector(".wrapper-modal-success");
const formSendSucessClose = document.querySelector(".wrapper-modal-success__close");

const COUNTRIES = {
	greece: {
		countryName: "greece",
		name: "Греция",
		text: "На севере Греции находится один из крупнейших комплексов монастырей, расположенных на вершинах скал. Название его «Метеора» буквально переводится как «висящие в воздухе». Этот монастырь основная цель нашего путешествия в Греции. После покарения скал из песчанника и обломочной горной породы, достигающих в высоту 600 метров, наградой будет неописуемая красота природы и атмосфера, царящая в монастырях Метеоры.",
		button: "купить тур сейча",
		reviewName: "Отзывы",
		reviewText: "Метеоры в Греции можно сравнить разве что с Монсерратт в Испании. Такие же высоченные скалы. Но здесь потрясает масштаб. Огромная территория, высоко в горах. Ощущение такое, как будто стоишь на краю света!",
		reviewAuthor: "Влада Голицина",
	},
	maked:{
		countryName: "maked",
		name: "Македония",
		text: "В Македонии нашей целью будет посетить Палаошник, который расположился в удивительно красивой лесистой местности возле Охридского озера и Самуиловой твердыни. А также мы заберемся на вершину горы Татичев Камен где находится  археологический памятник Кокино в длину около 100 метров.",
		button: "купить тур сейча",
		reviewName: "Отзывы",
		reviewText: "Я бы сказал необычное старое здание. В архитектуре я не разбираюсь, но подъем в гору был очень веселым так как люди оказались легкими и заводными. Красота природы впечатлила, особенно после долгого пути в гору.",
		reviewAuthor: "Михаил Кузьмин",
	},
	albanium:{
		countryName: "albanium",
		name: "Албания",
		text: "В Албании мы посетим Курорт Ксамиль. Этот курорт поразит вас чистейшей водой и удивительным пляжем. Вначале кажется, что на пляже вас встречает обычный, правда невероятно белоснежный и слишком крупный песок. Однако, присмотревшись, можно понять, что это не песок, а камни, перетёртые до такого мелкого состояния. ",
		button: "купить тур сейча",
		reviewName: "Отзывы",
		reviewText: "Замечательный курорт, обязательно стоит посетить. В следующий раз возьму с собой сестру, чтобы тоже смогла вкусить все красоты природы :)",
		reviewAuthor: "Маришка",
	},
	cherno:{
		countryName: "cherno",
		name: "Черногория",
		text: "Черногория удивит нас самым большим в Европе каньоном реки Тара, который в некоторых местах высотой берегов доходит до 1300 метров, а шириной не превышает трех. При этом длина каньона составляет 80 км. ",
		button: "купить тур сейча",
		reviewName: "Отзывы",
		reviewText: "МНеописуемой красоты каньон! Ничего прекраснее в жизни не видела, разве что в фильмах :) Всем советую",
		reviewAuthor: "Анастасия Мей",
	},
	croatia:{
		countryName: "croatia",
		name: "Хорватия",
		text: "В Хорватии мы посетим необычайную пещеру названную Бередине. Ее подземный мир увлечет вас на 80-ти метровую глубину через 5 освещенных залов, украшенных удивительными нерукотворными скульптурами —  сталактитами и сталагмитами —  формировавшимися тысячи и тысячи лет.",
		button: "купить тур сейча",
		reviewName: "Отзывы",
		reviewText: "Мы поехали всей семьей, я, моя жена и родители. Пещера просто незабываема! А то, что все это формировалось тысячелетиями, мега необычно. Первоначально даже не верилось, но натур ни с чем не спутать по итогу :)",
		reviewAuthor: "Владимир Мулицин",
	}
};

const isEscEvent = (evt) => {
  return evt.key === "Escape" || evt.key === "Esc";
};

const onPopupEscKeydown = (evt) => {
	if (isEscEvent(evt)) {
		evt.preventDefault();
		popup.classList.add("wrapper-modal_closed");
		pageHover.classList.add("wrapper-page-modal-hover_closed");
		if (!formSendSuccess.classList.contains("wrapper-modal-success_closed")) {
			formSendSuccess.classList.add("wrapper-modal-success_closed");
		}
	}
};

const createTab = function(arr) {
	const tabTemplate = document.querySelector("#tabs").content;
	const tab = tabTemplate.cloneNode(true);

	tab.querySelector(".cards").classList.add("cards_" + arr.countryName);
	tab.querySelector(".cards").id = "cards_" + arr.countryName;
	if (!tab.querySelector(".cards_greece")) {
		tab.querySelector(".cards").classList.add("cards_close");
	}
	tab.querySelector(".tab-info__name").textContent = arr.name;
	tab.querySelector(".tab-info__text").textContent = arr.text;
	tab.querySelector(".tab-info__button").textContent = arr.button;
	tab.querySelector(".tab-image__image").classList.add("cards__image_" + arr.countryName);
	tab.querySelector(".tab-review__name").textContent = arr.reviewName;
	tab.querySelector(".tab-review__text").textContent = arr.reviewText;
	tab.querySelector(".tab-review__author").textContent = arr.reviewAuthor;
	tab.querySelector(".open-popup").addEventListener("click", () => {
		if (popup.classList.contains("wrapper-modal_closed")) {
			document.addEventListener("keydown", onPopupEscKeydown);
			popup.classList.remove("wrapper-modal_closed");
			pageHover.classList.remove("wrapper-page-modal-hover_closed");
			popup.querySelector(".telephone").focus();
		}
	});

	return tab;
};

menuMob.classList.remove("menu-mob_no-js");
header.classList.remove("no-js");

formSendSucessClose.addEventListener("click", () => {
	if (!formSendSuccess.classList.contains("wrapper-modal-success_closed")) {
		formSendSuccess.classList.add("wrapper-modal-success_closed");
		pageHover.classList.add("wrapper-page-modal-hover_closed");
		document.removeEventListener("keydown", onPopupEscKeydown);
	}
});

additionalFromSend.addEventListener("submit", (evt) => {
	evt.preventDefault();
	console.log("hi");
	formSendSuccess.classList.remove("wrapper-modal-success_closed");
	pageHover.classList.remove("wrapper-page-modal-hover_closed");
	document.addEventListener("keydown", onPopupEscKeydown);
	localStorage.setItem("telephone", additionalFromSend.querySelector(".telephone").value);
	localStorage.setItem("email", additionalFromSend.querySelector(".email").value);
});

popupFormSend.addEventListener("submit", (evt) => {
	evt.preventDefault();
	formSendSuccess.classList.remove("wrapper-modal-success_closed");
	pageHover.classList.remove("wrapper-page-modal-hover_closed");
	document.addEventListener("keydown", onPopupEscKeydown);
	localStorage.setItem("telephone", popupFormSend.querySelector(".telephone").value);
	localStorage.setItem("email", popupFormSend.querySelector(".email").value);
});

pageHover.addEventListener("click", () => {
	popup.classList.add("wrapper-modal_closed");
	pageHover.classList.add("wrapper-page-modal-hover_closed");
	formSendSuccess.classList.add("wrapper-modal-success_closed");
	document.removeEventListener("keydown", onPopupEscKeydown);
});

closePopup.addEventListener("click", () => {
	if (!popup.classList.contains("wrapper-modal_closed")) {
		popup.classList.add("wrapper-modal_closed");
		pageHover.classList.add("wrapper-page-modal-hover_closed");
		document.removeEventListener("keydown", onPopupEscKeydown);
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

menuMob.addEventListener("click", (evt) => {
	console.log(evt.target.tagName);
		if (evt.target.tagName === "A") {
			menuMob.classList.add("menu-mob_closed");
			menuToggle.classList.remove("page-header__menu-toggle_opened");
		}
});

for (let arr in COUNTRIES) {
	countriesCards.appendChild(createTab(COUNTRIES[arr]));
};

for (let i = 0; i < countriesSlides.length; i++) {
	countriesSlides[i].addEventListener("click", () => {

		for (let k = 0; k < countriesSlides.length; k++) {
			if (countriesSlides[k].classList.contains("active")) {
				countriesSlides[k].classList.remove("active");
			}
		}
		countriesSlides[i].classList.add("active");
		let cardsElements = document.querySelectorAll(".cards");
		cardsElements.forEach((arr) => {
			if (!arr.classList.contains("cards_close")) {
				arr.classList.add("cards_close");
			}
			if (arr.classList.contains("cards_" + countriesSlides[i].id) && arr.classList.contains("cards_close")) {
				arr.classList.remove("cards_close");
			}
		})
	});
};

for (let i = 0; i < countriesElements.length; i++) {
	countriesElements[i].addEventListener("click", () => {
		let checkClass = countriesElements[i].className.split(" ");
		let cardsElements = document.querySelectorAll(".cards");
		for (let k = 0; k < countriesSlides.length; k++) {
			if (countriesSlides[k].classList.contains("active")) {
				countriesSlides[k].classList.remove("active");
			}
			if ( countriesElements[i].classList.contains(countriesSlides[k].id)) {
				countriesSlides[k].classList.add("active");
			}
		}
		cardsElements.forEach((arr) => {
			if (!arr.classList.contains("cards_close")) {
				arr.classList.add("cards_close");
			}
			checkClass.forEach((elem) => {
				if (arr.classList.contains("cards_" + elem) && arr.classList.contains("cards_close")) {
					arr.classList.remove("cards_close");
				}
			})
		})
	});
};

for (let i = 0; i < openPopup.length; i++) {
	openPopup[i].addEventListener("click", () => {
		if (popup.classList.contains("wrapper-modal_closed")) {
			popup.classList.remove("wrapper-modal_closed");
			pageHover.classList.remove("wrapper-page-modal-hover_closed");
			document.addEventListener("keydown", onPopupEscKeydown);
			popup.querySelector(".telephone").focus();
		}
	})
}

for (let i = 0; i < telephoneForm.length; i++) {
	telephoneForm[i].addEventListener("input", () => {

	  if (telephoneForm[i].validity.tooShort || telephoneForm[i].validity.tooLong) {
	  	telephoneForm[i].classList.add("error")
	  } else if (telephoneForm[i].validity.valueMissing) {
	  	telephoneForm[i].classList.add("error");
	  } else {
	  	telephoneForm[i].classList.remove("error");
	  }
	  telephoneForm[i].value = telephoneForm[i].value.replace(/[^0-9]/g, "");
	});
}
