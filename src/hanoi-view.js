const HanoiGame = require('./game.js')

class View {
  constructor(game, $el){
    this.game = game;
    this.$el = $el;
    this.fromTowerIdx = null;
    this.$el.on('click', 'ul', this.clickTower.bind(this));
    this.setupTowers();
    this.render()
  }

  clickTower(event) {
    const clickedTowerIdx = $(event.currentTarget).index();
    
    if (this.fromTowerIdx === null) {
      console.log(clickedTowerIdx);
      this.fromTowerIdx = clickedTowerIdx;  
    } else {
      this.game.move(this.fromTowerIdx, clickedTowerIdx)
      this.fromTowerIdx = null; 
    }

    this.render();
  }

  setupTowers() {

    this.$el.empty();
    
    let $tower, $disk;

    for (var i = 0; i < 3; i++) {
      $tower = $('<ul>');
      for (var j = 0; j < 3; j++) {
        $disk = $('<li>') 
        $tower.append($disk)
      }
      this.$el.append($tower)
    }

  }

  render() {
    const $towers = this.$el.find('ul');
    $towers.removeClass();
    
    if (this.fromTowerIdx !== null) {
      $towers.eq(this.fromTowerIdx).addClass('selected')
    }

    this.game.towers.forEach((disks, towerIdx) => {
      const $disks = $towers.eq(towerIdx).children();
      $disks.removeClass();

      disks.forEach((diskWidth, diskIdx) => {
        $disks.eq(-1 * (diskIdx + 1)).addClass(`disk${diskWidth}`)
      });
    });
  }
}


module.exports = View;
