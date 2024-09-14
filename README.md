# TG Booking Calendar

`TG Booking Calendar` is a simple and interactive JavaScript library for creating booking calendars.

## Include JS:
Install with npm or added yarn.
```bash
npm install tg-booking-calendar
```
```bash
yarn add tg-booking-calendar
```

### Then use with either commonjs or ESM imports:
```bash
const TgCalendar = require('tg-booking-calendar');

// Initialize the calendar
const calendar = new TgCalendar();
```


#### For legacy environments, you can load `tg-booking-calendar` UMD bundle from an npm-based CDN such as jsDelivr and unpkg:
```bash
<script src="https://cdn.jsdelivr.net/npm/tg-booking-calendar"></script>
```
```bash
<script src="https://unpkg.com/tg-booking-calendar"></script>
```

## Usage:

```bash
<body>
    <div class="tg-calendar-container">
        <div class="controls">
            <button class="prev">Previous</button>
            <div class="month-title">September 2024</div>
            <button class="next">Next</button>
        </div>
        <div class="calendar-grid"></div>
    </div>
</body>
```
Initialize the script at the bottom of the page before the closing body tag.
```bash
     <!-- Include the npm package from jsDelivr or unpkg -->
     <script src="https://cdn.jsdelivr.net/npm/tg-booking-calendar"></script>
     <!-- or -->
     <script src="https://unpkg.com/tg-booking-calendar"></script>
     
     <script>
       // Initialize the calendar
       const calendar = new TgCalendar();
     </script>
```