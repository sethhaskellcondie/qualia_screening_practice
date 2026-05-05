Question object
text: string
answers: string[] [option1, option2, option3, option4]
correct answer: string "option1"

Score object
correct: number
total: number

Two components
Question component
- display the current question
- when answers show the selected answer and updated score
- when answered show a "next question" button

Results component
- show the final score
- include a reset button that will reset the score, and go back to the first question

Implementation Plan
1. Create a question service that will store and retrieve the questions in memory (questions will be hardcoded, we will have 5 questions for this project)
2. Create a question component that will display the question and all the options
3. Update the question component to allow an answer to be selected, (selected answer is stored in memory and displayed in the UI but answers cannot be returned to so we don't need it after the next button is clicked) then show the correct answer and the selected answer, answers cannot be changed after one is selected
4. Update the question service to also keep track of the score, with a 1/1 or 1/2 if a question is answered incorrectly
5. Update the question component to display the score in the UI
6. Include a next button in the question component, when clicked this will display the next question, this is only shown when a question is answered
7. Include a results component, this will be displayed when "next" is clicked on the last question
8. Include a reset button that will clear the score and go back to the question component displaying the first question
