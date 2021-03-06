angular.module('admin').config(function($routeProvider){
    $routeProvider
    .when("/login", {
      templateUrl: "components/login/login.htm",
      controller: "loginCtrl"
    })
    .when("/", {
      templateUrl: "components/login/login.htm",
      controller: "loginCtrl"
    })
    .when("/admin", {
      templateUrl : "components/admin/admin.htm",
      controller: "adminCtrl"
    })
    .when("/landoj", {
      templateUrl: "components/landoj/landoj.htm",
      controller: "landojCtrl"
    })
    .when("/membrecoj", {
      templateUrl:"components/membrecoj/membrecoj.htm",
      controller: "membrecojCtrl"
    })
    .when("/kotizoj/:id", {
      templateUrl:"components/kotizoj/kotizoj.htm",
      controller: "kotizojCtrl"
    })
    .when("/perantoj", {
      templateUrl:"components/perantoj/perantoj.htm",
      controller: "perantojCtrl"
    })
    .when("/membrecpetoj", {
      templateUrl:"components/membrecpetoj/membrecpetoj.htm",
      controller: "membrecpetojCtrl"
    })
    .when("/membrecpetoj/:id", {
      templateUrl:"components/membrecpetoj/membrecpetojID.htm",
      controller: "membrecpetojCtrl"
    })
    .when("/membroj", {
        templateUrl:"components/membroj/membroj.htm",
        controller: "membrojCtrl"
      })
    .when("/membroj/:id", {
      templateUrl:"components/membroj/membrojID.htm",
      controller: "membrojCtrl"
    })
    .when("/laborgrupoj", {
      templateUrl:"components/laborgrupoj/laborgrupoj.htm",
      controller: "laborgrupojCtrl"
    })
    .when("/uzantoj/:id", {
      templateUrl:"components/uzantoj/uzantoj.htm",
      controller: "uzantojCtrl"
    })
    .when("/faktemoj", {
      templateUrl:"components/faktemoj/faktemoj.htm",
      controller: "faktemojCtrl"
    }).when("/printejo", {
        templateUrl:"components/printejo/printejo.html",
        controller: "printejoCtrl"
    }).when("/revuoj", {
        templateUrl: "components/revuoj/revuoj.html",
        controller: "revuojCtrl"
    }).when("/revuoj/:id/volumon", {
        templateUrl: "components/revuoj/volumon/volumon.html",
        controller: "volumonCtrl"
    }).when("/revuoj/:revuonId/volumon/:id", {
        templateUrl: "components/revuoj/volumon/redaktiVolumon.html",
        controller: "redaktiVolumonCtrl"
    }).when("/aliajgrupojCtrl", {
        templateUrl: "comoponents/aliajgrupoj/aliajgrupoj.htm",
        controller: "aliajgrupojCtrl"
    }).when("/retlistoj", {
        templateUrl: "components/retlistoj/retlistoj.html",
        controller: "retlistojCtrl"
    }).when("/retlistoj/new", {
        templateUrl: "components/retlistoj/addRetliston.html",
        controller: "addRetlistojCtrl"
    }).when("/dissendoj", {
        templateUrl: "components/dissendoj/dissendoj.html",
        controller: "dissendojCtrl"
    })
    .when('/helpo', {
      templateUrl: "components/helpo/helpo.htm",
      controller: "helpoCtrl"
    });
});
