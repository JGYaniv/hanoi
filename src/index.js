const HanoiView = require('./hanoi-view.js')
const HanoiGame = require('./game.js')

console.log("success!");

$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
