function Inventory(inv) {
  var mItems = {};
  var counter = 0;
  for( var i in inv ) {
    var item = inv[i];
    mItems["slot_" + counter++] = item;
  }

  this.GetItem = function(id) {
    return JSON.parse(JSON.stringify(mItems[id]));
  };
}
