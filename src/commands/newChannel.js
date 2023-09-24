import { SlashCommandBuilder, ChannelType } from 'discord.js';
import debug from 'debug';

const dlog = debug('brettski:join');

export default {
  data: new SlashCommandBuilder()
    .setName('new-join-channel')
    .setDescription('Creates a new voice channel for a Join')
    .setDMPermission(false)
    .addStringOption(option =>
      option
        .setName('join_title')
        .setDescription('Name of new channel which should match join title')
        .setRequired(true),
    ),
  execute: async interaction => {
    const newChannelName = interaction.options.getString('join_title');
    // need to get the parent id, or ask for parent name 🤔
    const newChannel = await interaction.guild.channels.create({
      name: newChannelName,
      type: ChannelType.GuildVoice,
      parent: '1155341811838091295',
    });
    dlog('New channel info:\n%s,%o', newChannel.name, newChannel.id);
    await interaction.reply({ content: 'Channel created', ephemeral: true });
  },
};
