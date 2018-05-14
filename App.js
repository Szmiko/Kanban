var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': '3051',
	'X-Auth-Token': '57c45b20f304c90545fc6a1bc5778811'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
	url: baseUrl + '/board',
	method: 'GET',
	success: function(response) {
		setupColumns(response.columns);
	}
});

function setupColumns(columns) {
	columns.forEach(function(column) {
		var col = new Column(column.id, column.name);
		board.createColumn(col);
		setupCards(col, column.cards);
	});
};

function setupCards(col, cards) {
	cards.forEach(function(card) {
		var card0bj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
		col.createCard(card0bj);
	});
};
//?

function createCard() {
	var card = $('<li class="card"></li>');
	var cardDeleteBtn = $('<button class="btn-delete">x</button>');
	var cardDescription = $('<p class="card-description"></p>');
		
	cardDeleteBtn.click(function(){
		self.removeCard();
	});
		
	card.append(cardDeleteBtn);
	cardDescription.text(self.description);
	card.append(cardDescription)
	return card;
};
