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
            self.title = document.querySelector('.modal__title');
            self.description = document.querySelector('.modal__description p');
            self.img = document.querySelector('.modal__preview img');
            self.closeBtn = document.querySelector('.modal__close');
            self.delay = {open: 150, close: 200};
        };

        /**
         * Add events listeners
         */
        self.setupListener = () => {
            self.closeBtn.addEventListener('click', self.close);
        };

        /**
         * Setup and open modal window
         * @param {Object} info
         */
        self.route = (info) => {
            self.setup(info);
            self.open();
        };

        /**
         * Open modal window
         */
        self.open = () => {
            self.container.classList.add('modal_state_open');
            setTimeout(() => self.container.classList.add('modal_state_visible'), self.delay.open);
        };

        /**
         * Close modal window
         */
        self.close = () => {
            self.container.classList.remove('modal_state_visible');
            setTimeout(() => {
                self.container.classList.remove('modal_state_open');

                self.reset();
            }, self.delay.close);
        };

        /**
         * Setup modal data
         * @param {Object} info
         */
        self.setup = (info) => {
            const data = info || {};

            data.title = data.title ? data.title : 'Заголовок изображения не найден';
            data.description = data.description ? data.description : 'Описание изображения не найдено.';
            data.source = data.source ? data.source : 'images/vis-error.jpg';

            self.title.textContent = data.title;
            self.description.textContent = data.description;
            self.img.src = data.source;
        };

        /**
         * Reset modal data
         */
        self.reset = () => {
            self.title.textContent = '';
            self.description.textContent = '';
            self.img.src = '';
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
