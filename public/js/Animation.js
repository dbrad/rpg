var Animation = {};
Animation.TextBounce = function(pObj){
  var obj = pObj;
  var origY = obj.position.y;
  var dir = 0.2;
  var moveTotal = 0;

  this.ChangeTarget = function(pObj) {
    obj = pObj;
    origY = obj.position.y;
  };
  this.Animate = function() {
    if( !obj )
      return;
    obj.position.y += dir;
    moveTotal += dir;
    if( moveTotal >= 5 ) {
      dir = dir * -1;
    } else if (moveTotal < 0) {
      dir = dir * -1;
    }
  };
  this.Stop = function() {
    obj.position.y = origY;
    obj = null;
  };
};
