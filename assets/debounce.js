export default function debounce(callback, delay) {
    let timer;
    delay;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, args); // Garante que o contexto de 'this' seja mantido
        }, delay);
    };
}