# AI Discord Bot

**Creator**: Arypton

## Description
This Discord bot, created by Arypton, utilizes the power of OpenAI's GPT-3.5 Turbo model to provide chat-based responses in your Discord server. With this bot, you can have dynamic conversations with ChatGPT, the helpful assistant. Simply send a message starting with `!chatgpt` and ChatGPT will respond to your queries.

## Installation
Before using this bot, make sure you have the following prerequisites:
- [Node.js](https://nodejs.org/) installed on your system.
- A Discord bot token.
- An OpenAI API key.

To get started, follow these steps:

1. Clone this repository to your local machine.
2. Open the terminal and navigate to the bot's directory.
3. Install the required Node.js packages by running:

    ```bash
    npm install discord.js axios
    ```

4. Open the `config.js` file and replace `'YOUR_BOT_TOKEN'` with your Discord bot token and `'YOUR_OPENAI_API_KEY'` with your OpenAI API key.
5. Save the changes and close the `config.js` file.

## Usage
1. To run the bot, open a terminal and navigate to the bot's directory.
2. Start the bot with the following command:

    ```bash
    node bot.js
    ```

3. Once the bot is running, it will log in as your Discord bot and listen for messages in your server.
4. To interact with ChatGPT, simply send a message that starts with `!chatgpt` followed by your question or input.

For example, to ask a question, type `!chatgpt How does photosynthesis work?` and ChatGPT will respond with an answer.

## Commands
- `!chatgpt <your_message>`: Send a message to ChatGPT and receive a response.

## Important Notes
- This bot uses OpenAI's GPT-3.5 Turbo model, and you will need to have the corresponding API key for it.
- Be cautious with the usage of the bot, as it may incur API usage charges.
- Ensure that your bot has the necessary permissions to read and send messages in your Discord server.

## Support and Issues
If you encounter any issues or have questions about this bot, please feel free to contact Arypton for assistance.

Happy chatting with ChatGPT!
