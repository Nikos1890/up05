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

let moviesLast = [];
moviesLast.push(movies[8]);
moviesLast.push(movies[9]);
moviesLast.push(movies[10]);
moviesLast.push(movies[11]);
moviesLast.push(movies[12]);

let cardsDiv = document.querySelector(".cards");

function cardtemplate() {
	let cards = [];
	moviesLast.map((i) => {
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
	cardsDiv.innerHTML = "";
	cards.forEach((i) => {
		cardsDiv.innerHTML += i.template;
	});
}
cardtemplate();
