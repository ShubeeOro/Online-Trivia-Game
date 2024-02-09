# Node.js Trivia Game

Welcome to the Node.js Trivia Game! This simple trivia game is built using Node.js, allowing you to test your knowledge on various topics while exploring the capabilities of Node.js. This is a side project to help develop a better understanding of JavaScript, Node.js, Networking, and the many other technologies behind creating a web application.

## Features (To be added)

- [ ] Local Questions or Trivia API option
- [ ] Private Game Lobbies
- [ ] Global High Score
- [ ] Join Ongoing Games
- [ ] More to be added

## Getting Started

Follow these steps to get the trivia game up and running on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/nodejs-trivia-game.git
   cd nodejs-trivia-game
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the game:**
   ```bash
   npm start
   ```

   The trivia game will start running on `http://localhost:3000`. Open this URL in your browser to begin playing.

## How to Play

- Answer the questions presented on the screen by selecting the correct option.
- After completing a set of questions, your total score will be displayed.
- Challenge yourself to beat your high score in subsequent rounds.

## Customize Questions

Feel free to customize the trivia questions to suit your preferences. You can find the questions in the `questions.json` file. Update the file with your own set of questions and answers. We use [Trivia API](https://opentdb.com/api_config.php) by Open Trivia Database as the main way to get questions and fall back to `questions.json`.

```json
[
    {
        "category": "General Knowledge",
        "difficulty": "easy",
        "question": "Area 51 is located in which US state?",
        "correct_answer": "Nevada",
        "incorrect_answers": [
            "Arizona",
            "New Mexico",
            "Utah"
        ]
    },
  // Add more questions as needed
]
```

## Technologies Used

- **Node.js:** The runtime environment for running the trivia game.
- **Express:** A web application framework for Node.js, used to handle routing.
- **Socket.IO:** An event-driven library for bi-directional communication between web clients and servers.

## Contributing

If you have ideas for improvement or new features, feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This trivia game is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as you see fit.

Enjoy playing the Node.js Trivia Game! 🎉
