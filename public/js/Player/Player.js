function Player() {
  this.initialized = false;

  var saveString = "";

  var level = 0;
  var xp = 0;
  var current_xp = 0;

  var stats = new Stats({
    "hp"  : 0,
    "max_hp" : 0,
    "mp"  : 0,
    "max_mp"  : 0,
    "str" : 0,
    "agi" : 0,
    "int" : 0
  });

  var inventory = null;
  var equipment = null;
  var base_actions = [
    {
      name    : "Attack",
      action  : { type: "damage" },
      stat    : "str",
      value   : 1.0
    },
    {
      name    : "Defend",
      action  : { type: "block" },
      stat    : "str",
      value   : 0.25
    }
  ];
  var extend_actions = [];

  var worldState = {
    location: 0
  };
  var dungeonState = {
    zone: 0
  };

  var levelUp = function() {
    ++level;
    current_xp = 0;
    //gsm.Change("LEVELUP");
  };

  var buildExtendActions = function() {

  };


  // Save File Handling
  this.LoadFromSave = function(saveObj) {
    level = saveObj.level;
    stats = new Stats(saveObj.stats);
    inventory = new Inventory(saveObj.inventory);
  };

  this.NewGame = function(setupBundle) {
    level = 1;
    xp    = 0;
    current_xp = 0;
    stats = new Stats(setupBundle.classStats);
  };

  this.Save = function() {

  };


  // LEVEL AND XP
  this.AddXP = function( value ) {
    xp += value;
    current_xp += value;
    if(xp >= this.NextLevel())
      levelUp();
  };

  this.NextLevel = function() {
    return ((4 * Math.pow(level,3))/5);
  };

  this.PercentOfLevel = function() {
    return (current_xp / (this.NextLevel() - xp));
  };

  // Other Accessors
  this.GetActions = function() {
    buildExtendActions();
    var actions = base_actions.concat(extend_actions);
    return JSON.parse(JSON.stringify(actions));
  };

  this.GetStatValue = function(stat) {
    return JSON.parse(JSON.stringify(stats.GetBase(stat)));
  };

  return this;
}
