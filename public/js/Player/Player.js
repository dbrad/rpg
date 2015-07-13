function Player() {
  this.initialized = false;

  var saveString = "";

  var level = 0;
  var xp = 0;

  var stats = new Stats({
    "hp"  : 0,
    "mp"  : 0,
    "str" : 0,
    "agi" : 0,
    "int" : 0
  });

  var inventory = null;
  var equipment = null;

  var worldState = {
    location: 0
  };
  var dungeonState = {
    zone: 0
  };


  this.LoadFromSave = function(saveObj) {
    level = saveObj.level;
    stats = new Stats(saveObj.stats);
    inventory = new Inventory(saveObj.inventory);
  };

  this.NewGame = function(setupBundle) {
    level = 1;
    xp    = 0;
    stats = new Stats(setupBundle.classStats);
  };

  this.NextLevel = function() {
    return ((4 * Math.pow(level,3))/5);
  };

  return this;
}
