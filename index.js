// Import the CSS file.
import './css/style.css';

class TgCalendar {
  constructor() {
    if (typeof document === "undefined") {
      throw new Error("TgCalendar is intended for use in a browser environment.");
    }
    this.monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    this.dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.today = new Date();
    this.currentDay = this.today.getDate();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.displayedMonth = this.currentMonth;
    this.displayedYear = this.currentYear;
    this.selectedDay = null;

    this.initCalendar();
  }

  initCalendar() {
    this.calendarGrid = document.querySelector(".calendar-grid");
    this.monthTitle = document.querySelector(".month-title");
    this.prevBtn = document.querySelector(".prev");
    this.nextBtn = document.querySelector(".next");

    if (!this.calendarGrid || !this.monthTitle || !this.prevBtn || !this.nextBtn) {
      throw new Error("Required DOM elements are missing.");
    }

    this.prevBtn.addEventListener("click", () => this.prevMonth());
    this.nextBtn.addEventListener("click", () => this.nextMonth());

    this.updateCalendar(this.displayedMonth, this.displayedYear);
  }

  updateCalendar(month, year) {
    this.calendarGrid.innerHTML = "";
    this.monthTitle.textContent = `${this.monthNames[month]} ${year}`;
    this.dayNames.forEach(day => { /* Add day names */ });
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyCell = document.createElement("div");
      this.calendarGrid.appendChild(emptyCell);
    }
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      const dayCell = document.createElement("div");
      dayCell.classList.add("calendar-day");
      dayCell.textContent = i;
      if (i === this.currentDay && month === this.currentMonth && year === this.currentYear) {
        dayCell.classList.add("current-day");
      }
      dayCell.addEventListener("click", () => this.selectDay(i, dayCell));
      this.calendarGrid.appendChild(dayCell);
    }
  }

  selectDay(day, dayCell) {
    if (this.selectedDay) {
      this.selectedDay.classList.remove("selected-day");
    }
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

// Hybrid approach to support both Node (npm) and browser environments
if (typeof module !== "undefined" && module.exports) {
  // Node/CommonJS environment (npm package)
  module.exports = TgCalendar;
} else {
  // Browser environment (auto-instantiation)
  document.addEventListener("DOMContentLoaded", () => {
    const calendar = new TgCalendar();
  });
}
