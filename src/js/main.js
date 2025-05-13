import flatpickr from 'flatpickr';
import { Korean } from 'flatpickr/dist/l10n/ko.js';

import 'flatpickr/dist/flatpickr.min.css';
import '../scss/main.scss';

flatpickr("#date", {
    locale: Korean,
    dateFormat: "Y-m-d",
})