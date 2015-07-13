function Stats(stats) {
  var mBase = {};
  var mModifiers = {};

  for(var s in stats) {
    mBase[s] = stats[s];
  }
  this.GetBase = function(id) {
    return mBase[id];
  };
  this.CalcModifiers = function(mods) {

  };
  return this;
}
