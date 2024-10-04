# TG Booking Calendar

`TG Booking Calendar` is a simple and interactive JavaScript library for creating booking calendars.

## Installation:
You can install `tg-booking-calendar` using `npm` or `yarn`:
```bash
npm install tg-booking-calendar
```
```bash
yarn add tg-booking-calendar
```

## Usage:
### Import the Calendar

ES Modules (ESM):
```javascript
import React, { useEffect } from 'react';
import TgCalendar from 'tg-booking-calendar';

// Initialize the calendar
useEffect(() => {
  new TgCalendar();   
}, []);
```

Use Styles for `npm` or `yarn` users:
```js
import 'tg-booking-calendar/dist/tg-booking-calendar.min.css';
```

## For Browser Environments:
For legacy environments or when you want to use the package via a CDN, you can load `tg-booking-calendar` UMD bundle from npm-based CDN:

#### Include Script:
At the bottom of your `HTML` file, before the closing `</body>` tag, initialize the calendar:
```html
<script src="https://cdn.jsdelivr.net/npm/tg-booking-calendar/dist/tg-booking-calendar.min.js"></script>
```

#### Iclude CSS:
At the Top of your `HTML` file, before the closing `</head>` tag, initialize the calendar:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tg-booking-calendar/dist/tg-booking-calendar.min.css">
```

### Basic HTML Example:
Include the following `HTML` structure in your page to create the calendar UI.
```html
<div class="tg-calendar-container">
    <div class="controls">
        <button class="prev">Previous</button>
        <div class="month-title">September 2024</div>
        <button class="next">Next</button>
    </div>
    <div class="calendar-grid"></div>
</div>
```

You can customize the following styles to change the appearance of the calendar:
```css
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

## Contributions:

Contributions, issues, and feature requests are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

- Fork the Project
- Create your Feature Branch
- Commit your Changes
- Push to the Branch
- Open a Pull Request

Feel free to check the [issues page](https://github.com/emimrulkayes/tg-booking-calendar/issues) for any existing issues or to create a new one.

- Contributions, issues and features requests are welcome!
- Submit PRs to help solve issues or add features
- Find and report issues
- Star the project

## License:

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
