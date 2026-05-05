Here are the requirements for a tip calculator SPA:

Tip Calculator — Product Requirements
Overview
A clean, single-page web app that helps users calculate tip amounts and split bills between multiple people.
Functional Requirements
Core Calculations

User can enter a bill amount
User can select or enter a tip percentage
App displays the tip amount and total bill (subtotal + tip)
User can specify the number of people to split the bill between
App displays the amount each person owes (tip and total)

Tip Percentage Options

Provide quick-select buttons for common tip percentages (e.g. 15%, 18%, 20%, 25%)
Allow the user to type in a custom tip percentage
Selecting a quick-select clears any custom value, and vice versa

Input Validation

Bill amount must be a positive number
Number of people must be a positive integer (minimum of 1)
Tip percentage must be between 0% and 100%
Display inline error messages for invalid inputs
Calculated outputs should not display until all inputs are valid

Resetting

A reset button clears all inputs and outputs back to their default state
