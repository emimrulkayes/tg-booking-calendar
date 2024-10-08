// Import the CSS file.
import "./styles/index.css";

class TgCalendar {
  constructor() {
    if (typeof document === "undefined") {
      throw new Error(
        "TgCalendar is intended for use in a browser environment."
      );
    }

    // Initialize the calendar
    this.monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.today = new Date();
    this.currentDay = this.today.getDate();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.displayedMonth = this.currentMonth;
    this.displayedYear = this.currentYear;
    this.selectedDay = null;

    this.container = document.querySelector(".tg-calendar-container");
    this.controls = document.querySelector(".controls");
    this.calendarGrid = document.querySelector(".calendar-grid");
    this.monthTitle = document.querySelector(".month-title");
    this.prevBtn = document.querySelector(".prev");
    this.nextBtn = document.querySelector(".next");
    this.initCalendar();
  }

  initCalendar() {
    this.prevBtn.addEventListener("click", () => this.prevMonth());
    this.nextBtn.addEventListener("click", () => this.nextMonth());
    this.updateCalendar(this.displayedMonth, this.displayedYear);
  }

  updateCalendar(month, year) {
    this.calendarGrid.innerHTML = "";
    this.monthTitle.textContent = `${this.monthNames[month]} ${year}`;

    // Render day names (Sun, Mon, Tue...)
    this.dayNames.forEach((day) => {
      const dayNameCell = document.createElement("div");
      dayNameCell.classList.add("day-name");
      dayNameCell.textContent = day;
      this.calendarGrid.appendChild(dayNameCell);
    });

    // Get the first day of the month (0 = Sunday, 1 = Monday...)
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyCell = document.createElement("div");
      emptyCell.classList.add("empty-cell");
      this.calendarGrid.appendChild(emptyCell);
    }

    // Add days of the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      const dayCell = document.createElement("div");
      dayCell.classList.add("calendar-day");
      dayCell.textContent = i;

      // Highlight the current day
      if (
        i === this.currentDay &&
        month === this.currentMonth &&
        year === this.currentYear
      ) {
        dayCell.classList.add("current-day");
      }

      // Add event listener to select a day
      dayCell.addEventListener("click", () => this.selectDay(i, dayCell));
      this.calendarGrid.appendChild(dayCell);
    }
  }

  selectDay(day, dayCell) {
    // Clear the previous selection
    if (this.selectedDay) {
      this.selectedDay.classList.remove("selected-day");
    }

    // Mark the new selected day
    this.selectedDay = dayCell;
    this.selectedDay.classList.add("selected-day");
  }

  prevMonth() {
    this.displayedMonth--;
    if (this.displayedMonth < 0) {
      this.displayedMonth = 11;
      this.displayedYear--;
    }
    this.updateCalendar(this.displayedMonth, this.displayedYear);
  }

  nextMonth() {
    this.displayedMonth++;
    if (this.displayedMonth > 11) {
      this.displayedMonth = 0;
      this.displayedYear++;
    }
    this.updateCalendar(this.displayedMonth, this.displayedYear);
  }
}

if (typeof document !== "undefined") {

  document.addEventListener("DOMContentLoaded", () => {
    const calendar = new TgCalendar();
  });
}

export default TgCalendar;