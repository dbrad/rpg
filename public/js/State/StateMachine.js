function StateMachine() {
  var mStates = {};
  var mCurrentState = "";

  this.Update = function(delta) {
    mStates[mCurrentState].Update(delta);
  };

  this.Render = function() {
    mStates[mCurrentState].Render();
  };

  this.Change = function(stateName) {
    if( mStates[mCurrentState] )
      mStates[mCurrentState].OnExit();
    mCurrentState = stateName;
    var params = [];
    for( var i = 1; i <= arguments.length; i++ ) {
      params.push(arguments[i]);
    }

    mStates[mCurrentState].OnEnter( params );
  };

  this.Add = function(name, state) {
    mStates[name] = state;
  };
}
