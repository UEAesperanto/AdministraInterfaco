app.controller('printejoCtrl', function ($scope, $window, $http, config, membrojService, $rootScope, auth) {

	$scope.grupoj = [];
	$scope.checkboxFields = [{'name': 'Tuta nomo', selected: true},
							{'name': 'UEA-kodo', selected: false},
							{'name': 'Adreso', selected: true},
							{'name': 'Postkodo', selected: true},
							{'name': 'Lando - FR', selected: true},
							{'name': 'Lando - EO', selected: false},
							{'name': 'Lando - NL', selected: false},
							{'name': 'Lando - EN', selected: false},
							{'name': 'Telefono', selected: false},
							{'name': 'Retadreso', selected: false}
							];

	$scope.uzantoj = {};

	$scope.makePDF = function () {
		html2canvas(document.getElementById('exportthis')).then(function(canvas) {
			var data = canvas.toDataURL();
			var docDefinition = {
				content: [{
					image: data,
					width: 500,
				}]
			};
			pdfMake.createPdf(docDefinition).download("uzantoj.pdf");
		});
	};

	var init = function () {
		auth.ensalutita();

      	$rootScope.menuo = true;
      	
		membrojService.getAllGrupoj().then(function (response) {
			$scope.grupoj = response.data;

			$scope.grupoj.forEach(function (grupoj) {
				membrojService.getMembroj(grupoj.id).then(function (res) {
					$scope.uzantoj[grupoj.nomo] = res.data;
				});
			});
		});
	};

	function saveTextAsFile (data, filename){

		if(!data) {
			console.error('Console.save: No data')
			return;
		}

		if(!filename) filename = 'console.json'

		var blob = new Blob([data], {type: 'text/plain'}),
			e    = document.createEvent('MouseEvents'),
			a    = document.createElement('a')
		// FOR IE:

		if (window.navigator && window.navigator.msSaveOrOpenBlob) {
			window.navigator.msSaveOrOpenBlob(blob, filename);
		}
		else{
			var e = document.createEvent('MouseEvents'),
				a = document.createElement('a');

			a.download = filename;
			a.href = window.URL.createObjectURL(blob);
			a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
			e.initEvent('click', true, false, window,
				0, 0, 0, 0, 0, false, false, false, false, 0, null);
			a.dispatchEvent(e);
		}
	}


	$scope.expFile = function() {

		var content = document.getElementById('exportthis');

		var fileText = content.textContent || content.innerText;
		var fileName = "membroj.txt";
		saveTextAsFile(fileText, fileName);
	}



	init();

});