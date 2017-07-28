(function () {
	'use strict';

	/**
	 * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
	 */
	angular
		.module('sterzden.storage')
		.service('sdSessionStorageService', SDSessionStorageService);

	SDSessionStorageService.$inject = [
		'$sessionStorage'
	];

	function SDSessionStorageService(
		$sessionStorage
	) {
		var storage = $sessionStorage;

		return {
			saveJsonToStorage: function (data) {
				storage.savedJson = angular.toJson(data);
				console.log('*** JSON is saved ***');
			},

			deleteStorage: function () {
				delete storage.savedJson;
				console.log('*** Storage deleted ***');
			},

			getJsonDataFromStorage: function () {
				return storage.savedJson;
			}
		};
	}
})();
