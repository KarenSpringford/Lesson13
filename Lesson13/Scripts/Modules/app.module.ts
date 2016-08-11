let app: ng.IModule;
(function () {
    "use strict";

    let mainApplicationModuleName = "MVCMusicStore";
    app = angular.module(mainApplicationModuleName, ['ngResource']);

    //wait for web page to load then manually bootstrap angular
    angular.element(document).ready(() => {

    });
})();