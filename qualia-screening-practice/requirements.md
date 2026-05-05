Here are the requirements for your Quiz App:

Quiz App — Requirements
Overview
A single-page quiz application that presents the user with a series of questions and tracks their score as they progress.

Functional Requirements
Question Flow

The app displays one question at a time
The user can advance to the next question after selecting an answer
The quiz ends after all questions have been answered
The user cannot go back to a previous question

Answer Selection

Each question has multiple choice answers (at least 4 options)
The user selects one answer per question
Once an answer is selected, all options become disabled (no changing answers)
The selected answer is visually highlighted

Feedback

After selecting an answer, the app immediately indicates whether the answer was correct or incorrect
Correct and incorrect answers are visually distinct (e.g. color-coded)
The correct answer is always revealed after the user makes a selection

Score Tracking

The app tracks the number of correct answers throughout the quiz
A running score or progress indicator is visible during the quiz (e.g. "Question 3 of 10")

Results Screen

After the final question, the app transitions to a results view
The results view displays the final score (e.g. "You got 7 out of 10")
A "Restart" button resets the entire quiz back to the first question with a zeroed score


UI / Rendering Requirements
Conditional Rendering

The question view and results view are mutually exclusive — only one is shown at a time
Answer feedback (correct/incorrect indicators) is only rendered after an answer has been selected
The "Next" button is only visible/enabled after an answer has been selected
The "Restart" button only appears on the results screen
