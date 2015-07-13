function MenuState(GameStateMachine, Game, Player, Graphics) {
  var gsm = GameStateMachine;
  var game = Game;
  var p = Player;
  var g = Graphics;


  var selected = 0;
  var orig = 300, moveTotal = 0, dir = 0.2;

  var MenuContainer = new PIXI.Container();
  var options = [];

  SetupMenu(options);

  this.OnEnter = function() {

  };
  this.OnExit = function() {

  };
  this.Update = function() {
    if(game.Input.keys.ENTER) {
      switch(selected) {
        case 0:
          gsm.Change("NEWGAME");
          break;
        case 1:
          gsm.Change("INIT")
          break;
        default:
          break;
      }
    }

    else if(game.Input.keys.DOWN) {
      options[selected].position.y = orig;
      selected = 1;
      orig = options[selected].position.y;
    } else if(game.Input.keys.UP) {
      options[selected].position.y = orig;
      selected = 0;
      orig = options[selected].position.y;
    }

    for( var op in options ) {
      if(op != selected)
        options[op].tint = 0xFFFFFF;
    }
    options[selected].tint = 0x51c1d0;
    options[selected].position.y += dir;
    moveTotal += dir;
    if( moveTotal >= 5 ) {
      dir = dir * -1;
    } else if (moveTotal < 0) {
      dir = dir * -1;
    }
  };
  this.Render = function() {
    $('#omg').html("MENU");

    g.render(MenuContainer);
  };

  function SetupMenu(options) {
    var text = null;
    text = new PIXI.Text("New Game", {font: "24px Arial", fill : "white"});
    text.anchor.y = text.anchor.x = 0.5;
    text.position.x = 400;
    text.position.y = 300;
    MenuContainer.addChild(text);
    options.push(text);

    text = new PIXI.Text("Exit Game", {font: "24px Arial", fill : "white"});
    text.anchor.y = text.anchor.x = 0.5;
    text.position.x = 400;
    text.position.y = 350;
    MenuContainer.addChild(text);
    options.push(text);
    return options;
  }
}
