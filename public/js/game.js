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

function InitState(StateMachine) {
  var gGameMode = StateMachine;
  this.OnEnter = function() {

  };
  this.OnExit = function() {

  };
  this.Update = function() {

  };
  this.Render = function() {

  };
}

function Game() {
  var _running = true;
  var _handler = null;

  var gGameMode = new StateMachine();

  gGameMode.Add("INIT", new InitState(gGameMode));
  gGameMode.Change("INIT");

  var _busy = false;
  var _delta = 0.0;
  var DELTA_CONST = 3.0;

  var _frameRate = 60.0;
  var _updateRate = _frameRate * 2;
  var _updateDelta = 0.0;
  var _renderDelta = 0.0;

  var _renderTiming = 1000/_frameRate;
  var _updateTiming = 1000/_updateRate;

  var loop = function() {
    _delta += DELTA_CONST;
    if(!_busy) {
      _busy = true;

      _updateDelta += _delta;
      if(_updateDelta >= _updateTiming) {
        _updateDelta -= _updateTiming;
        Profiler.updateCounter++;
        gGameMode.Update(_delta);
      }
      Profiler.update(_delta);

      _renderDelta += _delta;
      if(_renderDelta >= _renderTiming) {
        _renderDelta -= _renderTiming;
        Profiler.renderCounter++;
        gGameMode.Render();
        document.body.innerHTML = "Updates per Sec: " + Profiler.UPS + "<br>Renders Per Sec: " + Profiler.FPS;
      }
      Profiler.render(_delta);

      _delta -= DELTA_CONST;
      _busy = false;
    }
  };

  this.start = function() {
    _handler = setInterval(loop, DELTA_CONST);
  };

  this.stop = function() {
    clearInterval(_handler);
  };

}

var Profiler = {
  FPS: 0,
  renderCounter: 0,
  renderTimer: 0,
  render: function(delta) {
    this.renderTimer += delta;
    if(this.renderTimer >= 1000) {
      this.FPS = this.renderCounter;
      this.renderCounter = 0;
      this.renderTimer -= 1000;
    }
  },
  UPS: 0,
  updateCounter: 0,
  updateTimer: 0,
  update: function(delta) {
    this.updateTimer += delta;
    if(this.updateTimer >= 1000) {
      this.UPS =  this.updateCounter;
      this.updateCounter = 0;
      this.updateTimer -= 1000;
    }
  }
};
