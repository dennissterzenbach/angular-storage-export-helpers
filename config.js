;
(function() {

    /**
     * Use to configure which storage and what export service will be used by
     * the sdStorageClientService and sdDownloadExportService for example.
     * 
     * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
     */
    angular
        .module('sterzden')
        .constant('CONSTANTS', {
            'backend': {
                'service': 'sdSessionStorageService'
            },
            'export': {
                'service': 'sdSimpleJSONExportService'
            }
        });

})();