function InitState(GameStateMachine, Game, Player, Graphics) {
  var gsm = GameStateMachine;
  var game = Game;
  var p = Player;
  var g = Graphics;

  var complete = true;

  var InitContainer = new PIXI.Container();
  var text = new PIXI.Text("Loading...", {font: "24px Tahoma", fill: 0XFFFFFF});
  text.anchor.y = text.anchor.x = 0.5;
  text.position.x = 400;
  text.position.y = 300;

  InitContainer.addChild(text);

  this.OnEnter = function() {
    $('body').append(g.view);
    if(!p.initialized) {
      // look for save file
      // call p.LoadFromSave() if one is found and decoded
    }
  };
  this.OnExit = function() {

  };
  this.Update = function() {
    if( complete )
      gsm.Change("MENU");
  };
  this.Render = function() {
    $('#omg').html("INIT");
    g.render(InitContainer);
  };


  this.Complete = function() {
    complete = true;
  };

  var callback =  this.Complete.bind(this);
  setTimeout(CreateCombinedSprites, 100, g, callback);
}
