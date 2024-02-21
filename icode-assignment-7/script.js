const displayDate = () => {
    const today = document.querySelector('#today');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    let date = new Date();

    today.textContent = `${days[date.getDay() - 1]}, ${months[date.getMonth()]} , ${date.getDate()} ${date.getFullYear()}`;
}


window.addEventListener('load', () => {
    displayDate();
    displayTasksCount();
});