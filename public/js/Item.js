function Item(name, mods) {
  var mName = name;
  var mModifiers = {};
  for( var m in mods ) {
    mModifiers[m] = mods[m];
  }
  this.GetName = function() {
    return mName;
  };
  this.GetModifers = function() {
    return JSON.parse(JSON.stringify(mModifiers));
  };
}
