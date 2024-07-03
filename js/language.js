document,addEventListener('DOMContentLoaded', function() {
    i18next
    .use(i18nextHttpBackend)
    .init({
        lng: 'en', // idioma por defecto
        fallbackLng: 'en',
        backend: {
        loadPath: 'locales/{{lng}}.json'
        }
    }, function(err, t) {
        updateContent();
    });

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = i18next.t(key);
        });
        // Actualiza los placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = i18next.t(key);
        });
    }

    document.getElementById('lang-es').addEventListener('click', function() {
        i18next.changeLanguage('es', updateContent);
    });

    document.getElementById('lang-en').addEventListener('click', function() {
        i18next.changeLanguage('en', updateContent);
    });    
});

