(() => {
    if (!window.app) {
        window.app = {};
    }

    if (!('modules' in window.app)) {
        window.app.modules = {};
    }

    if ('gallery' in app.modules) {
        return;
    }

    /**
     * Creates a new Gallery class.
     * @class
     */
    const Gallery = function() {
        const self = this;

        /**
         * Get options for module
         */
        self.getOptions = () => {
            self.container = document.querySelector('.gallery');
            self.modalOpen = app.modules.modal.open;
        };

        /**
         * Add events listeners
         */
        self.setupListener = () => {
            self.container.addEventListener('click', self.handleClick);
        };

        /**
         * Handle click event
         * @param {Object} event
         */
        self.handleClick = function(event) {
            const target = event.target;
            const link = target.closest('.gallery__link');

            event.preventDefault();

            if (!link) {
                return;
            }

            const info = JSON.parse(link.dataset.info);

            self.modalOpen(info);
        };

        /**
         * Init module
         */
        self.init = () => {
            self.getOptions();
            self.setupListener();
        };
    };

    window.app.modules.gallery = new Gallery();
})();
