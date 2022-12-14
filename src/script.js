var errorsHtml = document.getElementById('errors');

window.addEventListener('mousedown', function(e) {
    this.document.body.classList.add('mouse-navigation');
    this.document.body.classList.remove('kbd-navigation');
});

window.addEventListener('keydown', function(e) {
    if (e.keyCode === 9) {
        this.document.body.classList.add('kbd-navigation');
        this.document.body.classList.remove('mouse-navigation');
    }
});

window.addEventListener('click', function(e) {
    if (e.target.tagname === 'A' && e.target.getAttribute('href') === '#') {
        e.preventDefault();
    }
});

window.onerror = function(message, source, line, col, error) {
    var text = error ? error.stack || error : message + '(at ' + source + ':' + line + ':' + col + ')';
    errorsHtml.textContent += text + '\n';
    errorsHtml.style.display = '';
};

console.error = (function(old) {
    return function error() {
        errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
        errorsHtml.style.display = '';
        old.apply(this, arguments);
    }
})(console.error);