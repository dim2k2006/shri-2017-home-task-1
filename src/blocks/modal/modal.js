(() => {
    if (!window.app) {
        window.app = {};
    }

    if (!('modules' in window.app)) {
        window.app.modules = {};
    }

    if ('modal' in app.modules) {
        return;
    }

    /**
     * Creates a new Modal class.
     * @class
     */
    const Modal = function() {
        const self = this;

        /**
         * Get options for module
         */
        self.getOptions = () => {
            self.container = document.querySelector('.modal');
            self.title = document.querySelector('.title');
            self.description = document.querySelector('.description p');
            self.closeBtn = document.querySelector('.modal__close');
        };

        /**
         * Add events listeners
         */
        self.setupListener = () => {
            self.closeBtn.addEventListener('click', self.close);
        };

        /**
         * Open modal window
         */
        self.open = () => {
            self.container.classList.add('modal_state_open');
        };

        /**
         * Close modal window
         */
        self.close = () => {
            self.container.classList.remove('modal_state_open');
        };

        /**
         * Init module
         */
        self.init = () => {
            self.getOptions();
            self.setupListener();
        };
    };

    window.app.modules.modal = new Modal();
})();
