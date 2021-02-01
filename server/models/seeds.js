const dotenv = require('dotenv');
const mongoose = require('mongoose');

const Card = require('./Card');
const Question = require('./Question');

dotenv.config();

const global = 'mongodb+srv://vika:qwerty123@cluster0.4ufny.mongodb.net/myowngame';
mongoose.connect(global, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const sportCard1 = new Question({
  title: 'Какая страна является родиной бокса?',
  cost: 100,
  answer: 'Великобритания',
});

const sportCard2 = new Question({
  title: 'Какой самый опасный вид спорта?',
  cost: 200,
  answer: 'Шахматы',
});
const sportCard3 = new Question({
  title: 'От судьи футбольный мяч попал в ворота. Засчитается ли гол?',
  cost: 300,
  answer: 'Да',
});
const sportCard4 = new Question({
  title: 'Состояние боксера, когда в результате полученного удара, он находится в отключке, и у него есть 10 сек., чтобы прийти в себя.',
  cost: 400,
  answer: 'Нокдаун',
});
const sportCard5 = new Question({
  title: 'Как называется спортивный спуск с горы?',
  cost: 500,
  answer: 'Слалом',
});

const sport = new Card({
  title: 'Спорт',
  questions: [sportCard1, sportCard2, sportCard3, sportCard4, sportCard5],
});

const politicCard1 = new Question({
  title: 'Кто отравил Новального?',
  cost: 100,
  answer: 'Испорченная печенька',
});

const politicCard2 = new Question({
  title: 'Кто самый известный диктатор 20-го века?',
  cost: 200,
  answer: 'Гитлер',
});

const politicCard3 = new Question({
  title: 'Он(а) - 46-й президент США',
  cost: 300,
  answer: 'Джо Байден',
});

const politicCard4 = new Question({
  title: 'Когда откроют границы?',
  cost: 400,
  answer: 'Надейся и жди',
});

const politicCard5 = new Question({
  title: 'Если не Путин, то кто?',
  cost: 500,
  answer: 'Сам Бог',
});

const politics = new Card({
  title: 'Политика',
  questions: [politicCard1, politicCard2, politicCard3, politicCard4, politicCard5],
});

const generalCard1 = new Question({
  title: 'Второго по размерам пингвина называют королевским. Как назвают самого большого?',
  cost: 100,
  answer: 'Императорский',
});

const generalCard2 = new Question({
  title: 'Как называется Еврейская церковь?',
  cost: 200,
  answer: 'Синагога',
});

const generalCard3 = new Question({
  title: 'Какая страна подарила США статую свободы?',
  cost: 300,
  answer: 'Франция',
});

const generalCard4 = new Question({
  title: 'Кто помог Чипполино сбежать из тюрьмы?',
  cost: 400,
  answer: 'Крот',
});

const generalCard5 = new Question({
  title: 'Едут в поезде и играют в карты: Буратино, Мальвина, начальник ТСЖ и честный гаишник. Перед тем, как поезд заехал в темный туннель, "банк" лежал на столе, а после того, как выехал - денег на столе не оказалось. Кто их украл?',
  cost: 500,
  answer: 'Начальник ТСЖ',
});

const general = new Card({
  title: 'Все обо всем',
  questions: [generalCard1, generalCard2, generalCard3, generalCard4, generalCard5],
});

const historyCard1 = new Question({
  title: 'Кто был первым русским царем?',
  cost: 100,
  answer: 'Иван Грозный',
});

const historyCard2 = new Question({
  title: 'Какой князь крестил Русь?',
  cost: 200,
  answer: 'Владимир',
});

const historyCard3 = new Question({
  title: 'Близ этого места в 1805 г. выйграл сражение Наполеон у русско-австрийской армии',
  cost: 300,
  answer: 'Аустерлиц',
});

const historyCard4 = new Question({
  title: 'Кто не был Генсеком ЦК?',
  cost: 400,
  answer: 'Подгорный',
});

const historyCard5 = new Question({
  title: 'Кто продал Аляску США?',
  cost: 500,
  answer: 'Граф Муравьев-Амурский',
});

const history = new Card({
  title: 'История государства российского',
  questions: [historyCard1, historyCard2, historyCard3, historyCard4, historyCard5],
});

const geoCard1 = new Question({
  title: 'Кто из великих мореплавателей дал имя самому большоу океану?',
  cost: 100,
  answer: 'Магеллан',
});

const geoCard2 = new Question({
  title: 'Какова температура (градусов Цельсия) в центре ядра Земли?',
  cost: 200,
  answer: '5000',
});

const geoCard3 = new Question({
  title: 'Место на Земле, где, куда не повернись, всегда будет юг',
  cost: 300,
  answer: 'Северный полюс',
});

const geoCard4 = new Question({
  title: 'Какая страна является родиной кофе?',
  cost: 400,
  answer: 'Эфиопия',
});

const geoCard5 = new Question({
  title: 'Где находится город Баден-Баден?',
  cost: 500,
  answer: 'Германия',
});

const geo = new Card({
  title: 'География',
  questions: [geoCard1, geoCard2, geoCard3, geoCard4, geoCard5],
});

const litCard1 = new Question({
  title: 'Улица, на которой жил Шерлок Холмс',
  cost: 100,
  answer: 'Бейкер-Стрит',
});

const litCard2 = new Question({
  title: 'Где спрятался седьмой козленок?',
  cost: 200,
  answer: 'В печке',
});

const litCard3 = new Question({
  title: 'Как дюймовочка попала в страну эльфов?',
  cost: 300,
  answer: 'На ласточке',
});

const litCard4 = new Question({
  title: 'Обитательница земли и воды, ставшая женой богатого наследника после покушения на ее жизнь',
  cost: 400,
  answer: 'Царевна лягушка',
});

const litCard5 = new Question({
  title: 'Кто первым встретился Алисе под землёй?',
  cost: 500,
  answer: 'Кролик',
});

const lit = new Card({
  title: 'Литература',
  questions: [litCard1, litCard2, litCard3, litCard4, litCard5],
});

const codeCard1 = new Question({
  title: `Что выведет alert
  alert(str);
  var str = "Hello";`,
  cost: 100,
  answer: 'undefined',
});

const codeCard2 = new Question({
  title: `Что выведет этот код?

  for(let i=0; i<10; i++) {
    setTimeout(function() {
      alert(i);
    }, 100);
  }`,
  cost: 200,
  answer: '10 раз 10',
});

const codeCard3 = new Question({
  title: 'Чему равна сумма [] + 1 + 2?',
  cost: 300,
  answer: '12',
});

const codeCard4 = new Question({
  title: `Что выведет код
  let a = (1,5 - 1) * 2;
  alert(a); 
  ?`,
  cost: 400,
  answer: '8',
});

const codeCard5 = new Question({
  title: `Какое будет выведено значение?

  let x = 5;
  alert( x++ );`,
  cost: 500,
  answer: '5',
});

const code = new Card({
  title: 'Кодинг',
  questions: [codeCard1, codeCard2, codeCard3, codeCard4, codeCard5],
});

function saver() {
  sportCard1.save();
  sportCard2.save();
  sportCard3.save();
  sportCard4.save();
  sportCard5.save();

  sport.save();

  politicCard1.save();
  politicCard2.save();
  politicCard3.save();
  politicCard4.save();
  politicCard5.save();

  politics.save();

  historyCard1.save();
  historyCard2.save();
  historyCard3.save();
  historyCard4.save();
  historyCard5.save();

  history.save();

  generalCard1.save();
  generalCard2.save();
  generalCard3.save();
  generalCard4.save();
  generalCard5.save();

  general.save();

  geoCard1.save();
  geoCard2.save();
  geoCard3.save();
  geoCard4.save();
  geoCard5.save();

  geo.save();

  litCard1.save();
  litCard2.save();
  litCard3.save();
  litCard4.save();
  litCard5.save();

  lit.save();

  codeCard1.save();
  codeCard2.save();
  codeCard3.save();
  codeCard4.save();
  codeCard5.save();

  code.save();
}

// saver();
