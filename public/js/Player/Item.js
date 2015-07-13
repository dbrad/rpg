function Item(item) {
  var mName         = item.name;
  var mDescription  = item.desc;
  var mType         = item.type;

  var mModifiers = {};
  for( var m in item.mods ) {
    mModifiers[m] = item.mods[m];
  }
  var mActions = [];
  for( var a in item.actions ) {
    mActions.push = item.actions[a];
  }

  this.GetName = function() {
    return mName;
  };
  this.GetDescription = function() {
    return mDescription;
  };
  this.GetType = function() {
    return mType;
  };
  this.GetModifers = function() {
    return JSON.parse(JSON.stringify(mModifiers));
  };
}

/*
{
  "name" : "Sword",
  "desc" : "A sharp Sword.",
  "type" : "hand",
  "mods" : {
    "str" : 2
  },
  "actions" : [
    {
      name    : "Slash",
      action  : { type: "damage" },
      stat    : "str",
      value   : 1.1
    }
  ]
}
*/
