movies = [
	{
		id: 1,
		name: "The Lord of the Rings: The Fellowship of the Ring",
		year: 2001,
		age: 12,
		genre: "Фентези",
		rate: 9,
	},
	{
		id: 2,
		name: "Kung Fu Panda",
		year: 2009,
		age: 6,
		genre: "Экшен",
		rate: 8,
	},
	{
		id: 3,
		name: "Up",
		year: 2009,
		age: 0,
		genre: "Приключение",
		rate: 9,
	},
	{
		id: 4,
		name: "The Matrix",
		year: 1999,
		age: 16,
		genre: "Экшен",
		rate: 9,
	},
	{
		id: 5,
		name: "Inception",
		year: 2010,
		age: 12,
		genre: "Экшен",
		rate: 9,
	},
	{
		id: 6,
		name: "Forrest Gump",
		year: 1994,
		age: 12,
		genre: "Драма",
		rate: 6,
	},
	{
		id: 7,
		name: "Cidade de Deus",
		year: 2002,
		age: 16,
		genre: "Драма",
		rate: 9,
	},
	{
		id: 8,
		name: "Gisaengchung",
		year: 2019,
		age: 18,
		genre: "Триллер",
		rate: 4,
	},
	{
		id: 9,
		name: "Sen to Chihiro no kamikakushi",
		year: 2001,
		age: 12,
		genre: "Приключение",
		rate: 7,
	},
	{
		id: 10,
		name: "Gandhi",
		year: 1982,
		age: 6,
		genre: "Драма",
		rate: 3,
	},
	{
		id: 11,
		name: "The Northman",
		year: 2022,
		age: 12,
		genre: "Экшен",
		rate: 9,
	},
	{
		id: 12,
		name: "Sherlock",
		year: 2011,
		age: 16,
		genre: "Драма",
		rate: 8,
	},
	{
		id: 13,
		name: "Warrior Nun",
		year: 2020,
		age: 12,
		genre: "Фентези",
		rate: 7,
	},
];

const year = document.querySelector("#year");
const genre = document.querySelector("#genres");
const age = document.querySelector("#age");
const rate = document.querySelector("#rate");
const sort = document.querySelector("#sort");
const reverseButton = document.querySelector(".reverse");

let selects = [year, genre, age, rate, sort, reverseButton];

let isReverse = false;

function cardtemplate() {
	let cards = [];
	movies.map((i) => {
		cards.push({
			template: `<div class="card">
				<img src="img/${i.id}.jpg" alt="" />
				<h2 class="title">${i.name}</h2>
				<div class="info">
					<p class="rate">${i.rate}/10</p>
					<button class="button">Cмотреть</button>
				</div>
            </div>`,
			name: i.name,
			genre: i.genre,
			age: i.age,
			year: i.year,
			rate: i.rate,
		});
	});
	return cards;
}

function addcards(cards) {
	let cardshtml = document.querySelector(".cards");
	cardshtml.innerHTML = "";
	cards.map((i) => {
		cardshtml.innerHTML += i.template;
	});
}

addcards(cardtemplate());

function filter(year, genre, age, rate, sort) {
	let yearx = false;
	let genrex = false;
	let agex = false;
	let ratex = false;

	let cards = cardtemplate();

	if (year !== "") {
		yearx = true;
	}
	if (genre !== "") {
		genrex = true;
	}
	if (age !== "") {
		agex = true;
	}
	if (rate !== "") {
		ratex = true;
	}
	if (yearx || genrex || agex || ratex) {
		cards = cards.filter((i) => {
			let isshow = [];
			if (yearx) {
				if (
					i.year >= Number(year.split("-")[0]) &&
					i.year <= Number(year.split("-")[1])
				) {
					isshow.push(true);
				} else {
					isshow.push(false);
				}
			}
			if (genrex) {
				if (i.genre === genre) {
					isshow.push(true);
				} else {
					isshow.push(false);
				}
			}
			if (agex) {
				if (i.age <= Number(age.slice(0, age.length - 1))) {
					isshow.push(true);
				} else {
					isshow.push(false);
				}
			}
			if (ratex) {
				if (
					Number(rate.split("-")[0]) <= i.rate &&
					i.rate <= Number(rate.split("-")[1])
				) {
					console.log(i.rate);
					isshow.push(true);
				} else {
					isshow.push(false);
				}
			}
			if (isshow.length > 1) {
				return isshow.reduce((a, b) => a * b);
			} else if (isshow.length === 1) {
				return isshow[0];
			} else {
				return false;
			}
		});
	}

	if (sort !== "") {
		if (sort === "По названию") {
			cards.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
		} else if (sort === "По рейтингу") {
			cards.sort((a, b) => (a.rate < b.rate ? 1 : b.rate < a.rate ? -1 : 0));
		}
	}
	isReverse ? addcards(cards.reverse()) : addcards(cards);
}

selects.map((i) => {
	i.addEventListener("click", () => {
		const year = document.querySelector("#year");
		const genre = document.querySelector("#genres");
		const age = document.querySelector("#age");
		const rate = document.querySelector("#rate");
		const sorts = document.querySelector("#sort");
		const yearvalue = year.value;
		const genrevalue = genre.value;
		const agevalue = age.value;
		const ratevalue = rate.value;
		const sortsvalue = sorts.value;
		filter(yearvalue, genrevalue, agevalue, ratevalue, sortsvalue);
	});
});

reverseButton.addEventListener("click", () => {
	const year = document.querySelector("#year");
	const genre = document.querySelector("#genres");
	const age = document.querySelector("#age");
	const rate = document.querySelector("#rate");
	const sorts = document.querySelector("#sort");
	const yearvalue = year.value;
	const genrevalue = genre.value;
	const agevalue = age.value;
	const ratevalue = rate.value;
	const sortsvalue = sorts.value;
	isReverse = !isReverse;
	filter(yearvalue, genrevalue, agevalue, ratevalue, sortsvalue);
});

const search = document.querySelector(".search");
search.addEventListener("input", () => {
	let text = search.value.trim().toLowerCase();
	let cardArr = document.querySelectorAll(".card");
	cardArr.forEach((elem) => {
		if (text !== "") {
			let cardTittle = elem.querySelector(".title");
			if (cardTittle.innerText.toLowerCase().search(text) === -1) {
				elem.classList.add("hide");
			} else {
				elem.classList.remove("hide");
			}
		} else {
			elem.classList.remove("hide");
		}
	});
});

function reset() {
	const year = document.querySelector("#year");
	const genre = document.querySelector("#genres");
	const age = document.querySelector("#age");
	const rate = document.querySelector("#rate");
	const sorts = document.querySelector("#sort");
	year.value = "";
	genre.value = "";
	age.value = "";
	rate.value = "";
	sorts.value = "";
	filter(yearvalue, genrevalue, agevalue, ratevalue, sortsvalue);
}

let resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
	const year = document.querySelector("#year");
	const genre = document.querySelector("#genres");
	const age = document.querySelector("#age");
	const rate = document.querySelector("#rate");
	const sorts = document.querySelector("#sort");
	year.value = "";
	genre.value = "";
	age.value = "";
	rate.value = "";
	sorts.value = "";
	filter(year.value, genre.value, age.value, rate.value, sorts.value);
});
