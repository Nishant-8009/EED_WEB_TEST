// Settings of Count
const time = 2000 // 2 seconds

window.addEventListener('load', () => {
    let elems = document.querySelectorAll('.count_custom');
    elems.forEach((item, index) => {
        let count = Number(item.innerHTML);
        customCount(item, count);
    });
});

function customCount(element, count) {
    const delay = Math.round(time / count);
    let currentCount = 0;
    let intervalId = setInterval(() => {
        element.innerHTML = currentCount;
        if (currentCount === count) {
            clearInterval(intervalId);
        }
        currentCount++;
    }, delay);
}