const now = new Date();
const day = now.getDate();
const dayIndex = now.getDay();
const monthIndex = now.getMonth();
const year = now.getFullYear();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.write(`
    <h1>${days[dayIndex].toUpperCase()}</h1>
    <h2><img id='calendar' src="img/favicon.svg" alt="calendar" />${months[monthIndex].toUpperCase()} ${day}, ${year}</h2>
`);
