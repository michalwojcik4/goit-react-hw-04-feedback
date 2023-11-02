Feedback Statistics App

https://michalwojcik4.github.io/goit-react-hw-02-feedback

This is a simple React application for collecting and displaying feedback statistics from users. The app allows users to provide feedback in three categories: "good," "neutral," and "bad," and then displays statistics based on the collected responses.

Getting Started
To get started with this app, you can follow these steps:

Clone this repository to your local machine:
git clone git@github.com:michalwojcik4/goit-react-hw-04-feedback.git

Navigate to the project directory:
cd feedback-statistics-app

Install the required dependencies:
npm install

Run the application:
npm start

Open your web browser and go to http://localhost:3000 to use the app.

Usage
Once you run the application, you can use it to collect feedback by clicking on the "good," "neutral," or "bad" buttons. The app will then display statistics based on the collected responses, including the total number of responses, and the percentage of positive feedback.

Components
The app is organized into several components:

App: The root component that manages the application's state and renders the other components.
Section: A component for creating sections with a title.
FeedbackOptions: Displays buttons for collecting feedback in different categories.
Statistics: Displays the collected feedback statistics, including the number of "good," "neutral," and "bad" responses, the total number of responses, and the percentage of positive feedback.
Notification: Displays a message when there is no feedback to display.
Features
Collect feedback in three categories: "good," "neutral," and "bad."
Display statistics on the number of responses in each category.
Calculate and display the total number of responses and the percentage of positive feedback.
Hide statistics until at least one response has been collected.
Contributing
If you would like to contribute to this project, please follow these steps:

Fork the repository on GitHub.
Clone your forked repository to your local machine.
Create a new branch for your changes: git checkout -b feature/your-feature-name
Make your changes and commit them: git commit -m 'Add your feature'
Push your changes to your forked repository: git push origin feature/your-feature-name
Create a pull request on the original repository.