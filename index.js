const Discord = require('discord.js');
const axios = require('axios');

const client = new Discord.Client();
const token = 'bot token';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith('!chatgpt')) return;

  const command = message.content.slice('!chatgpt'.length).trim();
  
  if (!command) {
    message.channel.send('Please provide a message for ChatGPT.');
    return;
  }

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: command }],
    }, {
      headers: {
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
        'Content-Type': 'application/json',
      },
    });

    const reply = response.data.choices[0].message.content;
    message.channel.send(reply);
  } catch (error) {
    console.error(error);
    message.channel.send('An error occurred while processing your request.');
  }
});

client.login(token);
