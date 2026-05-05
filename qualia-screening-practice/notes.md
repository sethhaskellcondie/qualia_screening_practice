Input (form)
bill amount
tip percent
Split the bill feature (input is number of people)
provide buttons to quickly input common tip percentages in the input box (15, 18, 20, 25)

Implementation Plan
1. Create inputs for bill amount, and tip percent, also include an error message that is only shown when error are found
2. Create one button that will overwrite the existing tip percent and input 10 into the tip input
3. Create a service that will validate the inputs to be positive, tip percent must be between 0 and 100 calculate the tip amount
4. Create a display for the new amount (tip + bill) (Make sure that the total value is updated live when the tip and bill amount are updated, where there is an error then the display field should be hidden)
5. Create a reset button that when clicked with reset the bill tip inputs to be blank
6. Create additional buttons for 15, 20, 25, and 30 % quick population of the tip amount
7. Create a new input for number of people that will be splitting the bill, must be a positive integer
8. Update the existing calculation to divide the total amount by that many people
9. Create a new display that will display how much each person need to pay, seperated into bill and tip amounts
