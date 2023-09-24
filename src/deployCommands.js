// Deploy commands globally
import 'dotenv/config';
import { REST, Routes } from 'discord.js';
import envConfig from './envConfig';
import commands from './commands';

const commandsToSend = [];

function deployCommands() {
  commands.forEach(command => {
    if ('data' in command && 'execute' in command) {
      commandsToSend.push(command.data.toJSON());
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
      );
    }
  });

  const rest = new REST().setToken(envConfig.discord.botToken);

  return rest
    .put(Routes.applicationCommands(envConfig.discord.appId), {
      body: commandsToSend,
    })
    .then(data =>
      console.log(
        'commands sent:',
        data.map(c => c.name),
      ),
    )
    .catch(err => console.error('error sending commands', err.message));
}

deployCommands();
