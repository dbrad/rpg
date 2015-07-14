function WorldState(GameStateMachine, Game, Player, Graphics) {
  var gsm = GameStateMachine;
  var game = Game;
  var p = Player;
  var g = Graphics;

  var Container = new PIXI.Container();

var tile = new PIXI.extras.TilingSprite.fromFrame("sprite_1_1", 800, 600);
Container.addChild(tile);

var tileFor = new PIXI.extras.TilingSprite.fromFrame("sprite_4_12", 800, 16);
tileFor.position.y = 7;
Container.addChild(tileFor);

var prim = new PIXI.Graphics();
prim.beginFill(0xFFFFFF, 0);
prim.lineStyle(9, 0x000000, 100);
prim.drawRect(4, 4, 800-8, 600-8);
prim.endFill();

prim.beginFill(0x000000, 100);
prim.lineStyle(1, 0xFFFFFF, 100);
prim.drawRect(9, 450, 800-18, 141);
prim.endFill();
Container.addChild(prim);
  // State Methods
  this.OnEnter = function() {

  };
  this.OnExit = function() {

  };
  this.Update = function() {

  };
  this.Render = function() {
    $('#omg').html("WORLD");
    g.render(Container);
  };
}

function Location() {
  this.container = new PIXI.Container();

  
}
