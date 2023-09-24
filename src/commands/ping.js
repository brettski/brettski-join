import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('checks latencies'),
  async execute(interaction) {
    const heartbeat = `Websocket heartbeat: ${interaction.client.ws.ping}ms`;
    const sent = await interaction.reply({
      content: 'Pinging...',
      fetchReply: true,
      ephemeral: true,
    });
    interaction.editReply(
      `Roundtrip latency: ${
        sent.createdTimestamp - interaction.createdTimestamp
      }ms, ${heartbeat}`,
    );
  },
};
