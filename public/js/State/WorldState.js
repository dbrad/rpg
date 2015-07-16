function WorldState(GameStateMachine, Game, Player, Graphics) {
  var gsm = GameStateMachine;
  var game = Game;
  var p = Player;
  var g = Graphics;

  var Container = new PIXI.Container();

  var tile = new PIXI.extras.TilingSprite.fromFrame("sprite_5_0", 800, 600);
  Container.addChild(tile);

  var tileFor = new PIXI.extras.TilingSprite.fromFrame("sprite_13_9", 800, 16);
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

  var selectedLoc = 0;
  var locations = [];
//  locations.push(new Location("Test City", "castle", 200, 100, g));
  //Container.addChild(locations[0].sprite);
/*
  var selector = new PIXI.Sprite.fromImage("/images/loc_sel.png");
  selector.anchor = new PIXI.Point(0.5, 0.5);
  selector.position = new PIXI.Point(locations[selectedLoc].sprite.position.x, locations[selectedLoc].sprite.position.y);
  Container.addChild(selector);

  var text = new PIXI.Text("HEY", {fill: 0xFFFFFF});
  text.position = new PIXI.Point(25, 460);
  Container.addChild(text);
*/
  // State Methods
  this.OnEnter = function() {

  };
  this.OnExit = function() {

  };
  this.Update = function() {
    //text.text = locations[selectedLoc].name + "(" + locations[selectedLoc].sprite.getBounds().width + ")";

  };
  this.Render = function() {
    $('#omg').html("OVERWORLD");
    g.render(Container);
  };
}

function Location(name, textureID, x, y, g) {
  this.name = name;

  var graphic = new PIXI.Graphics();
  graphic.beginFill(0xFFFFFF, 0);
  graphic.drawRect(0,0,1,1);
  graphic.updateLocalBounds();
  graphic.endFill();

  this.sprite = new PIXI.Sprite.fromFrame(textureID);
  this.sprite.anchor = new PIXI.Point(0.5, 0.5);
  this.sprite.position = new PIXI.Point(x, y);
}
