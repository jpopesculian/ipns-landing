window._onLoad = (function(window, document) {
  var pathsLoaded = 0;
  var doneLoading = false;
  var fontsLoaded = false;

  var endTransition = function() {
      document.getElementById("solar-system").className="loaded";
  };

  return {
    percent: function(percent) {
    },

    fonts: function() {
      fontsLoaded = true;
      if (doneLoading) return endTransition();
    },

    all: function() {
      doneLoading = true;
      if (fontsLoaded) return endTransition();
    }
  }
}(window, document));

(function(window) {
  var translate = window.System.translate;
  var TOTAL_SIZE = 473242;
  var TOTAL_FILES = 92;
  var sizeDownloaded = 0;
  var filesDownloaded = 0;

  window.System.translate = function() {
    var args = arguments;

    window.setTimeout(function() {
      var size = args[0].source.length;
      sizeDownloaded += size;
      filesDownloaded += 1;
      // console.log(sizeDownloaded, filesDownloaded);

      percentageBytes = sizeDownloaded / TOTAL_SIZE;
      percentageRequests = filesDownloaded / TOTAL_FILES;
      percentage = (percentageRequests + percentageBytes) / 2;
      window._onLoad.percent(percentage);
    }, 0)

    return translate.apply(window.System, args);
  }
}(window));

(function (window) {
  if (!window.WebFont) return window._onLoad.fonts();
  window.WebFontConfig = {
    active: window._onLoad.fonts()
  };
  window.WebFont.load({
    google: {
      families: [
          'Roboto:300,400,500', 
          'Oswald'
      ]
    }
  });
}(window));

System.import('app/index').then(function(module) {
  window._onLoad.all();
  var bootstrap = module.default;
  bootstrap("#app");
});
