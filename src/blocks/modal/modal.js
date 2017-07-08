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
        };

        /**
         * Add events listeners
         */
        self.setupListener = () => {
            self.closeBtn.addEventListener('click', self.close);
        };

        /**
         * Open modal window
         * @param {Object} info
         */
        self.open = (info) => {
            const data = info || {};

            data.title = data.title ? data.title : 'Заголовок изображения не найден';
            data.description = data.description ? data.description : 'Описание изображения не найдено.';
            data.source = data.source ? data.source : 'images/vis-error.jpg';

            self.title.textContent = data.title;
            self.description.textContent = data.description;
            self.img.src = data.source;

            self.container.classList.add('modal_state_open');
        };

        /**
         * Close modal window
         */
        self.close = () => {
            self.container.classList.remove('modal_state_open');
            self.container.classList.remove('modal_state_loading');
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
