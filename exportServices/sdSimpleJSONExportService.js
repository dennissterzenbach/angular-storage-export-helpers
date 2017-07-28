(function () {
	'use strict';

	/**
	 * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
	 */
	angular
		.module('sterzden.export')
		.service('sdSimpleJSONExportService', SDSimpleJSONExportService);

	function SDSimpleJSONExportService() {
		return {
			export: function exportToJSON(data) {
				if (!data) {
					return '{}';
				}

				return JSON.stringify(data);
			}
		};
	}
})();
