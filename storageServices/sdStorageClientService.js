(function () {
	'use strict';

	/**
	 * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
	 */
	angular
		.module('sterzden.storage')
		.service('sdStorageClientService', SDStorageClientService);

	SDStorageClientService.$inject = [
		'$injector',
		'CONSTANTS'
	];

	function SDStorageClientService(
		$injector,
		CONSTANTS
	) {
		var serviceName = CONSTANTS.backend.service;
		var storageService = $injector.get(serviceName);

		// console.log('getService();', serviceName, storageService);

		return {
			saveJsonToStorage: function (data) {
				storageService.saveJsonToStorage(data);
				console.log('*** JSON is saved ***');
			},

			deleteStorage: function () {
				storageService.deleteStorage();
				console.log('*** Storage deleted ***');
			},

			getJsonDataFromStorage: function () {
				return storageService.getJsonDataFromStorage();
			}
		};
	}
})();
