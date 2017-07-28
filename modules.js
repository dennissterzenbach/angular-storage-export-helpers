;(function () {

	/**
	 * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
	 */
	angular.module('sterzden', [
		/* Angular modules */
		'ngSanitize',
		'ngStorage',

		/* own modules */
		'sterzden.storage',
		'sterzden.export',
	]);

	angular.module('sterzden.storage', [
		'sterzden',
		'sterzden.export',
	]);

	angular.module('sterzden.export', [
		'sterzden',
		'sterzden.storage'
	]);

})();
