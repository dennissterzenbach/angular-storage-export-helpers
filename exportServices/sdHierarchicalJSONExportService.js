(function () {
	'use strict';

	/**
	 * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
	 */
	angular
		.module('sterzden.export')
		.service('sdHierarchicalJSONExportService', SDHierarchicalJSONExportService);

	function SDHierarchicalJSONExportService() {
		return {
			export: function exportToJSON(data) {
				if (!data) {
					return '{}';
				}

				var result = {};
				for (var key in data) {
					Object.assign(result, result, makeHierarchical(key, data[key]));
				}

				function makeHierarchical(inputKey, value) {
					var keyParts = inputKey.split('.');
					var lastIndex = keyParts.length - 1;

					var result = {};
					var next = result;
					keyParts.forEach((part, index) => {
						if (index === lastIndex) {
							next[part] = value;
						} else {
							next[part] = {};
							next = next[part];
						}
					});

					return result;
				}

				return JSON.stringify(result);
			}
		};
	}
})();
