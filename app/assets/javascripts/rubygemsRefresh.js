var RubyGemsRefresh = (function () {
  var $rubygemsTile, failureThreshold = 4, failureCount = 0;
  var pollIntervalSeconds = 30, timeoutFunction;

  return {
    init : function () {
    },

    refresh : function () {
    },

    cleanupTimeout : function () {
      clearTimeout(timeoutFunction);
    },

    markAsUnreachable: function () {
    },

    markAsDown: function () {
    },

    markAsBroken: function () {
    },

    clearStatuses: function () {
    }
  };
})();
