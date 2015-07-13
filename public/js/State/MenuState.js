function MenuState(GameStateMachine, Game, Player, Graphics) {
  var gsm = GameStateMachine;
  var game = Game;
  var p = Player;
  var g = Graphics;

  var Container = new PIXI.Container();
  var menu = BuildMenu("Dungeons & Dice", ["New Game", "Exit Game"], {x: 400, y: 200});
  var MenuOptions = {
    0: function() {
      gsm.Change("NEWGAME");
    },
    1: function() {
      gsm.Change("INIT");
    }
  };
  var selected = 0;

  Container.addChild(menu.title);
  menu.options.forEach(function(option){
    Container.addChild(option);
  });
  var txtBounce = new Animation.TextBounce(menu.options[selected]);

  // State Methods
  this.OnEnter = function() {
    selected = 0;
    txtBounce.ChangeTarget(menu.options[selected]);
  };
  this.OnExit = function() {
    txtBounce.Stop();
  };
  this.Update = function() {
    if(game.Input.keys.ENTER) {
      MenuOptions[selected]();
    } else if(game.Input.keys.DOWN || game.Input.keys.UP) {
      txtBounce.Stop();
      if( game.Input.keys.DOWN ) {
        if(++selected > menu.options.length - 1)
          selected = menu.options.length - 1;
      } else {
        if(--selected < 0)
          selected = 0;
      }
      txtBounce.ChangeTarget(menu.options[selected]);
    }

    for( var op in menu.options ) {
      if(op != selected)
        menu.options[op].tint = 0xFFFFFF;
    }
    menu.options[selected].tint = 0x51c1d0;
    txtBounce.Animate();
  };
  this.Render = function() {
    $('#omg').html("MENU");
    g.render(Container);
  };
}
