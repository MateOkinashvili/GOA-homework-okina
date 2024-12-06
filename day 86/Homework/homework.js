document.getElementById("calculate-button").addEventListener("click", () => {
    const day = parseInt(document.getElementById("day").value, 10);
    const month = parseInt(document.getElementById("month").value, 10);
    const year = parseInt(document.getElementById("year").value, 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter valid numbers for day, month, and year.");
        return;
    }

    const inputDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    if (inputDate > currentDate) {
        alert("The date cannot be in the future.");
        return;
    }

    const diffTime = currentDate - inputDate;
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const diffDays = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

    document.getElementById("years").textContent = `${diffYears} years`;
    document.getElementById("months").textContent = `${diffMonths} months`;
    document.getElementById("days").textContent = `${diffDays} days`;
});
