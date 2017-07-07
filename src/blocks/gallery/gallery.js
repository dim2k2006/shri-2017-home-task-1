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
            self.content = document.querySelector('.gallery__content');
            self.data = JSON.parse(self.container.getAttribute('data-gallery')) || [];
            self.template = document.querySelector('#templateDefault').innerHTML;
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
            const link = target.closest('.galleryItem__link');

            event.preventDefault();

            if (!link) {
                return;
            }

            const id = link.id;

            console.log(id);

            // const info = JSON.parse(link.getAttribute('data-info'));

            // self.modalOpen(info);
        };

        /**
         * Render gallery
         */
        self.render = () => {
            const list = document.createElement('ul');

            list.classList.add('gallery__list');

            self.data.forEach(galleryItem => {
                const listItem = document.createElement('li');

                listItem.classList.add('gallery__item');
                listItem.innerHTML = self.template;

                const link = listItem.querySelector('.galleryItem__link');
                const img = listItem.querySelector('.galleryItem__img');
                const title = listItem.querySelector('.galleryItem__title');

                link.href = galleryItem.source;
                link.title = galleryItem.title;
                link.id = galleryItem.id;

                img.src = galleryItem.preview;
                img.alt = galleryItem.title;

                title.textContent = galleryItem.title;

                list.appendChild(listItem);
            });

            self.content.innerHTML = '';

            self.content.appendChild(list);
        };

        /**
         * Init module
         */
        self.init = () => {
            self.getOptions();
            self.render();
            self.setupListener();
        };
    };

    window.app.modules.gallery = new Gallery();
})();
