# TG Booking Calendar

`TG Booking Calendar` is a simple and interactive JavaScript library for creating booking calendars.

## Installation:
You can install `tg-booking-calendar` using npm or yarn:
```bash
npm install tg-booking-calendar
```
```bash
yarn add tg-booking-calendar
```

## Usage:
### Import the Calendar
You can use either CommonJS or ES modules to import and use the calendar.

CommonJS (Node.js):
```bash
const TgCalendar = require('tg-booking-calendar');

// Initialize the calendar
const calendar = new TgCalendar();
```

ES Modules (ESM):
```bash
import TgCalendar from 'tg-booking-calendar';

// Initialize the calendar
const calendar = new TgCalendar();
```

### For Browser Environments:
For legacy environments or when you want to use the package via a CDN, you can load `tg-booking-calendar` UMD bundle from npm-based CDN such as jsDelivr and unpkg:

Use jsDelivr:
```bash
<script src="https://cdn.jsdelivr.net/npm/tg-booking-calendar"></script>
```
Or, Use unpkg:
```bash
<script src="https://unpkg.com/tg-booking-calendar"></script>
```
## Basic HTML Example:
Include the following HTML structure in your page to create the calendar UI.
```bash
    <div class="tg-calendar-container">
        <div class="controls">
            <button class="prev">Previous</button>
            <div class="month-title">September 2024</div>
            <button class="next">Next</button>
        </div>
        <div class="calendar-grid"></div>
    </div>
```

At the bottom of your HTML file, before the closing </body> tag, initialize the calendar:
```bash
    <!-- Include the tg-booking-calendar package from a CDN -->
    <script src="https://cdn.jsdelivr.net/npm/tg-booking-calendar"></script>

    <!-- or -->
    <script src="https://unpkg.com/tg-booking-calendar"></script>

    <script>
        // Initialize the calendar
        const calendar = new TgCalendar();
    </script>
```

## Styles:
For npm/yarn users:
```bash
    import 'tg-booking-calendar/css/style.css';
```

For CDN users, they should manually include the CSS file from the CDN or your own hosting:
```bash
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tg-booking-calendar/css/style.css">
```

You can customize the following styles to change the appearance of the calendar:
```bash
    .calendar-day {
        padding: 10px;
        text-align: center;
        cursor: pointer;
    }

    .current-day {
        background-color: #ffcc00;
    }

    .selected-day {
        background-color: #4CAF50;
        color: white;
    }
```

## License
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
