function Player() {
  this.initialized = false;
  var ashes = 0;
  var AshenGear = [];

  this.Hero = new Hero();

  this.LoadFromSave = function(saveObj) {
    ashes = saveObj.ashes;
    AshenGear = saveObj.AshenGear;
    this.Hero.LoadFromSave(saveObj.Hero);
  };

  this.NewGame = function(setupBundle) {
    this.Hero.NewGame(setupBundle);
  };

  this.Save = function() {

  };

  return this;
}
