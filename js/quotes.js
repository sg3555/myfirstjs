const quotes = [
  {
    quote: "인터넷에 있는 말을 믿지 마라.",
    author: "에이브러햄 링컨",
  },
  {
    quote: "흑백사진 옆에 멋있는 말이 써있다고 믿지마라.",
    author: "마하트마 간디",
  },
  {
    quote: "주식 제 1원칙 : 절대 손해보지 마라.",
    author: "피타고라스",
  },
  {
    quote: "주식 제 2원칙: 제 1원칙을 절대 고수하라.",
    author: "도쿠가와 이에야스",
  },
  {
    quote: "누나 라면좀 끓여줘.",
    author: "엘리자베스 2세",
  },
  {
    quote: "세상이 멸망한다면 나는 한그루의 나무를 심겠다.",
    author: "로버트 다우니 주니어",
  },
  {
    quote: "하드 스데미 코인먹자팟 20젬.",
    author: "태조 이성계",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function changeQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const todaysQuote = quotes[randomNumber];
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}

changeQuote();
setInterval(changeQuote, 5000);
