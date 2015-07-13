function NewGameState(GameStateMachine, Game, Player, Graphics) {
  var gsm = GameStateMachine;
  var game = Game;
  var p = Player;
  var g = Graphics;

  var Container = new PIXI.Container();
  var options = [];

  var menu = BuildMenu("Pick a Class", ["Warrior", "Theif", "Mage"], {x: 400, y: 100});
  var MenuOptions = {
    0: function() {
      var warrior = {
        classStats : {
          "hp"  : 100,
          "max_hp"  : 100,
          "mp"  : 0,
          "max_mp"  : 0,
          "str" : 10,
          "agi" : 5,
          "int" : 0
        }
      };

      p.NewGame(warrior);
      //gsm.Change("WORLD");
    },
    1: function() {
      var theif = {
        classStats : {
          "hp"  : 80,
          "max_hp"  : 80,
          "mp"  : 20,
          "max_mp"  : 20,
          "str" : 5,
          "agi" : 5,
          "int" : 5
        }
      };

      p.NewGame(theif);
      //gsm.Change("WORLD");
    },
    2: function() {
      var mage = {
        classStats : {
          "hp"  : 60,
          "max_hp"  : 60,
          "mp"  : 50,
          "max_mp"  : 50,
          "str" : 2,
          "agi" : 2,
          "int" : 10
        }
      };

      p.NewGame(mage);
      //gsm.Change("WORLD");
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
    } else if(game.Input.keys.P_DOWN || game.Input.keys.P_UP) {
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
    menu.options[selected].tint = 0xa80303;
    txtBounce.Animate();
  };
  this.Render = function() {
    $('#omg').html("NEWGAME");
    g.render(Container);
  };
}
