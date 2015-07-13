function NewGameState(GameStateMachine, Game, Player, Graphics) {
  var gsm = GameStateMachine;
  var game = Game;
  var p = Player;
  var g = Graphics;

  var Container = new PIXI.Container();
  var text = new PIXI.Text("New Game...", {font: "24px Tahoma", fill: 0XFFFFFF});
  text.anchor.y = text.anchor.x = 0.5;
  text.position.x = 400;
  text.position.y = 300;

  Container.addChild(text);

  this.OnEnter = function() {

  };
  this.OnExit = function() {

  };
  this.Update = function() {

  };
  this.Render = function() {
    $('#omg').html("NEWGAME");
    g.render(Container);
  };
}
