// Github repo:
// https://github.com/greenball/numinate
(function (e) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], e);
  } else {
    e(jQuery);
  }
})(function (e) {
  "use strict";
  var t = {
    from: 0,
    to: 0,
    runningInterval: null,
    stepInterval: null,
    stepCount: null,
    stepUnit: null,
    format: "%counter%",
    class: "numinate",
    precision: 0,
    autoStart: true,
    autoRemove: false,
    onCreate: null,
    onStart: null,
    onStep: null,
    onStop: null,
    onComplete: null,
    onRemove: null,
  };
  var n = function (e, t) {
    if (!t.runningInterval && !t.stepInterval) {
      return window.console.error("No interval was provided.");
    }
    var n = Math.abs(t.from - t.to);
    if (!t.stepCount && !t.stepUnit) {
      return window.console.error(
        "Provide either stepCount or stepUnit value."
      );
    }
    if (t.stepUnit && t.stepCount) {
      t.to = t.from + t.stepUnit * t.stepCount;
    }
    if (!t.stepCount) {
      t.stepCount = n / t.stepUnit;
    }
    if (!t.stepUnit) {
      t.stepUnit = n / t.stepCount;
    }
    if (t.runningInterval) {
      t.stepInterval = t.runningInterval / t.stepCount;
    }
    if (n && t.stepUnit > n) {
      t.stepUnit = n;
      t.stepCount = 1;
    }
    if (t.stepInterval < 10) {
      var r = 10 / t.stepInterval;
      t.stepInterval *= r;
      t.stepUnit *= r;
      t.stepCount /= r;
    }
    this.textBackup = e.text();
    this.element = e;
    this.options = t;
    this.stepper = null;
    this.current = t.from;
    this.finished = false;
    this.element.addClass(t.class);
    this.fire("onCreate");
    if (this.options.autoStart) {
      this.start();
    }
  };
  n.prototype = {
    constructor: n,
    fire: function (t) {
      if (e.isFunction(this.options[t])) {
        this.options[t](this.element, this.options, this.current);
      }
    },
    stop: function () {
      if (!this.stepper || this.finished) {
        return;
      }
      this.stepper = clearInterval(this.stepper);
      this.fire("onStop");
    },
    start: function () {
      if (this.stepper || this.finished) {
        return;
      }
      this.render();
      this.stepper = setInterval(
        e.proxy(this.step, this),
        this.options.stepInterval
      );
      this.fire("onStart");
    },
    step: function () {
      if (!(this.options.from + this.options.to)) {
        this.current += this.options.stepUnit;
      } else if (this.options.from < this.options.to) {
        this.current += this.options.stepUnit;
      } else if (this.options.from > this.options.to) {
        this.current -= this.options.stepUnit;
      }
      if (this.options.from < this.options.to) {
        if (this.current > this.options.to) {
          return this.completed();
        }
      } else if (this.options.from > this.options.to) {
        if (this.current < this.options.to) {
          return this.completed();
        }
      }
      this.fire("onStep");
      this.render();
    },
    completed: function () {
      var e = Math.abs(this.options.from - this.options.to);
      if (e && this.options.current !== this.options.to) {
        this.current = this.options.to;
        this.render();
      }
      this.stop();
      this.finished = true;
      this.fire("onComplete");
      if (this.options.autoRemove) {
        this.remove();
      }
    },
    remove: function () {
      this.fire("onRemove");
      e.removeData(this.element, "numinate");
      this.element.text(this.textBackup ? this.textBackup : "");
      this.element.removeClass(this.options.class);
    },
    render: function () {
      this.element.text(
        this.options.format.replace(
          /\%counter\%/,
          this.current.toFixed(this.options.precision)
        )
      );
    },
    restart: function () {
      this.finished = false;
      this.current = this.options.from;
      this.stop();
      this.start();
    },
  };
  e.fn.numinate = function (r) {
    var i;
    if (typeof r == "object") {
      r = e.extend(true, {}, t, r);
      i = "init";
    } else if (typeof r == "string") {
      i = r;
    }
    return this.each(function () {
      var t = e(this);
      if (i == "init") {
        t.data("numinate", new n(t, r));
      } else {
        t.data("numinate")[i]();
      }
    });
  };
  e.fn.numinate.defaults = t;
  e.fn.numinate.Plugin = n;
});

