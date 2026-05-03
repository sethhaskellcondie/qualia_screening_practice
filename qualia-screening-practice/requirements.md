Temperature Converter – App Requirements
Overview
A single-page web application that allows users to convert temperatures between multiple units in real time.
Functional Requirements
Conversion

Support at least three temperature scales (e.g. Celsius, Fahrenheit, Kelvin, Rankine, Delisle — pick any three or more)
When a user enters a value in any field, all other fields update instantly without a button press
Handle negative values and decimal inputs correctly

Input & Validation

Each temperature scale has its own labeled input field
Inputs accept only numeric values (including negatives and decimals)
Display a clear, inline error message when an invalid value is entered (e.g. letters, symbols)
Display a warning when a value below absolute zero is entered for a given scale

Display

Show a brief label or description of each scale (e.g. its typical use case or origin)
Clearly indicate which field the user is currently editing

Reset

Provide a reset control that clears all fields and returns the app to its initial state

Non-Functional Requirements

The app must be a true Angular SPA — no page reloads
All logic should be contained within Angular constructs (components, services, pipes, etc.)
The UI should be clean and usable without any external UI library (plain CSS or Angular-native styling only)
The app should be responsive enough to work on both desktop and a narrow mobile viewport

Out of Scope

No backend, API calls, or data persistence
No user authentication
No unit test suite is required (though the code should be testable in structure)
