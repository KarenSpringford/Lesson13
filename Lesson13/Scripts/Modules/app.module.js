var app;
(function () {
    "use strict";
    var mainApplicationModuleName = "MVCMusicStore";
    app = angular.module(mainApplicationModuleName, ['ngResource']);
    //wait for web page to load then manually bootstrap angular
    angular.element(document).ready(function () {
    });
})();
