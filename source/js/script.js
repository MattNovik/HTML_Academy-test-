menuToggle = document.querySelector(".page-header__menu-toggle");
menuMob = document.querySelector(".menu-mob");
openPopup = document.querySelectorAll(".open-popup");
popup = document.querySelector(".wrapper-modal");
closePopup = document.querySelector(".wrapper-modal-form__close");
pageHover = document.querySelector(".wrapper-page-modal-hover");
popupFormSend = document.querySelector(".wrapper-modal-form__send");
additionalFromSend = document.querySelector(".additional-info__send");
countriesCards = document.querySelector(".countries-cards");
countriesSlides = document.querySelectorAll(".countries-slide__elem");
countriesElements = document.querySelectorAll(".card");
const COUNTRIES = {
	greece: {
		countryName: "greece",
		name: "Греция",
		text: "На севере Греции находится один из крупнейших комплексов монастырей, расположенных на вершинах скал. Название его «Метеора» буквально переводится как «висящие в воздухе». Этот монастырь основная цель нашего путешествия в Греции. После покарения скал из песчанника и обломочной горной породы, достигающих в высоту 600 метров, наградой будет неописуемая красота природы и атмосфера, царящая в монастырях Метеоры.",
		button: "купить тур сейча",
		image: "img/greeceRealTabDesk.png",
		reviewName: "Отзывы",
		reviewText: "Метеоры в Греции можно сравнить разве что с Монсерратт в Испании. Такие же высоченные скалы. Но здесь потрясает масштаб. Огромная территория, высоко в горах. Ощущение такое, как будто стоишь на краю света!",
		reviewAuthor: "Влада Голицина",
	},
	maked:{
		countryName: "maked",
		name: "Македония",
		text: "В Македонии нашей целью будет посетить Палаошник, который расположился в удивительно красивой лесистой местности возле Охридского озера и Самуиловой твердыни. А также мы заберемся на вершину горы Татичев Камен где находится  археологический памятник Кокино в длину около 100 метров.",
		button: "купить тур сейча",
		image: "img/makedoniaTabDesk.png",
		reviewName: "Отзывы",
		reviewText: "Я бы сказал необычное старое здание. В архитектуре я не разбираюсь, но подъем в гору был очень веселым так как люди оказались легкими и заводными. Красота природы впечатлила, особенно после долгого пути в гору.",
		reviewAuthor: "Михаил Кузьмин",
	},
	albanium:{
		countryName: "albanium",
		name: "Албания",
		text: "В Албании мы посетим Курорт Ксамиль. Этот курорт поразит вас чистейшей водой и удивительным пляжем. Вначале кажется, что на пляже вас встречает обычный, правда невероятно белоснежный и слишком крупный песок. Однако, присмотревшись, можно понять, что это не песок, а камни, перетёртые до такого мелкого состояния. ",
		button: "купить тур сейча",
		image: "img/albaniaTabDesk.png",
		reviewName: "Отзывы",
		reviewText: "Замечательный курорт, обязательно стоит посетить. В следующий раз возьму с собой сестру, чтобы тоже смогла вкусить все красоты природы :)",
		reviewAuthor: "Маришка",
	},
	cherno:{
		countryName: "cherno",
		name: "Черногория",
		text: "Черногория удивит нас самым большим в Европе каньоном реки Тара, который в некоторых местах высотой берегов доходит до 1300 метров, а шириной не превышает трех. При этом длина каньона составляет 80 км. ",
		button: "купить тур сейча",
		image: "img/chernogoriaTabDesk.png",
		reviewName: "Отзывы",
		reviewText: "МНеописуемой красоты каньон! Ничего прекраснее в жизни не видела, разве что в фильмах :) Всем советую",
		reviewAuthor: "Анастасия Мей",
	},
	croatia:{
		countryName: "croatia",
		name: "Хорватия",
		text: "В Хорватии мы посетим необычайную пещеру названную Бередине. Ее подземный мир увлечет вас на 80-ти метровую глубину через 5 освещенных залов, украшенных удивительными нерукотворными скульптурами —  сталактитами и сталагмитами —  формировавшимися тысячи и тысячи лет.",
		button: "купить тур сейча",
		image: "img/croatiaTabDesk.png",
		reviewName: "Отзывы",
		reviewText: "Мы поехали всей семьей, я, моя жена и родители. Пещера просто незабываема! А то, что все это формировалось тысячелетиями, мега необычно. Первоначально даже не верилось, но натур ни с чем не спутать по итогу :)",
		reviewAuthor: "Владимир Мулицин",
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
	tab.querySelector("img").src = arr.image;
	tab.querySelector(".tab-review__name").textContent = arr.reviewName;
	tab.querySelector(".tab-review__text").textContent = arr.reviewText;
	tab.querySelector(".tab-review__author").textContent = arr.reviewAuthor;
	tab.querySelector(".open-popup").addEventListener("click", () => {
		if (popup.classList.contains("wrapper-modal_closed")) {
			popup.classList.remove("wrapper-modal_closed");
			pageHover.classList.remove("wrapper-page-modal-hover_closed");
		}
	});

	return tab;
};

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

additionalFromSend.addEventListener("click", (evt) => {
	evt.preventDefault();
});

popupFormSend.addEventListener("click", (evt) => {
	evt.preventDefault();

});

const addEventOnButton = () => { 
	for (let i = 0; i < openPopup.length; i++) {
		openPopup[i].addEventListener("click", () => {
			if (popup.classList.contains("wrapper-modal_closed")) {
				popup.classList.remove("wrapper-modal_closed");
				pageHover.classList.remove("wrapper-page-modal-hover_closed");
			}
		})
	};
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

addEventOnButton();

const telephoneForm = document.querySelector(".additional-info__telephone");

telephoneForm.addEventListener('input', () => {
  if (telephoneForm.validity.tooShort || telephoneForm.validity.tooLong) {
  	telephoneForm.setCustomValidity('Телефон должен состоять из 9 симоволов (если вы из РФ)');
  } else if (telephoneForm.validity.valueMissing) {
  	telephoneForm.setCustomValidity('Обязательное поле');
  } else {
  	telephoneForm.setCustomValidity('');
  }
});

