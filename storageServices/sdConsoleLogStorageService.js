(function () {
	'use strict';

	/**
	 * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
	 */
	angular
		.module('sterzden.storage')
		.service('sdConsoleLogStorageService', SDConsoleLogStorageService);

	function SDConsoleLogStorageService() {
		var savedJson = {};

		return {
			saveJsonToStorage: function (data) {
				savedJson = angular.toJson(data);
				console.log('GOT', savedJson);
			},

			deleteStorage: function () {
				savedJson = {};
				console.log('EMPTY');
			},

			getJsonDataFromStorage: function () {
				return savedJson;
			}
		};
	}
})();
