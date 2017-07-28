(function () {
	'use strict';

	/**
	 * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
	 */
	angular
		.module('sterzden.export')
		.service('sdDownloadExportService', SDDownloadExportService);

	SDDownloadExportService.$inject = [
		'download',
		'$injector',
		'CONSTANTS',
	];

	function SDDownloadExportService(
		download,
		$injector,
		CONSTANTS
	) {
		var serviceName = CONSTANTS.export.service;
		var exportService = $injector.get(serviceName);

		return {
			exportJsonFromStorage: function (data) {
				if(data)
					download.fromData(exportService.export(data), "application/json", "download.json");
				else
					console.log('*** No DATA ***');
			}
		};
	}
})();
