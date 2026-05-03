Will convert between Celsisus, Fahrenheit, and Kelvin
Live updates between the three fields

One page
Three inputs, labeled with the temp, explaining each one
When one input is adjusted the other three automatically follow
One button to clear the input and return the app to a new state

Implementation Steps
1. Create a temperature display component that has a title, description, hidden warning, and input/display that can take input
2. Update the input to displays an error if any non-numbers are entered into it
3. Create a button on the app level that will reset that input to blank
4. Create two more instances of this component that will include the other two temperatures
5. Create a service that will be used to calculate the temperatures, but will at first just bind the three components together, they should start by showing the same value in all components
6. Include the calculations for converting the temperatures in the new service
7. Include the warning logic on when this should be displayed along with the given message
