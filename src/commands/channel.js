import { SlashCommandBuilder } from 'discord.js';
import debug from 'debug';

const dlog = debug('brettski:join');

export default {
  data: new SlashCommandBuilder()
    .setName('lchannel')
    .setDescription('Testing channel shit')
    .setDMPermission(false),
  async execute(interaction) {
    // interaction.guild is the object representing the Guild in which the command was run
    dlog('is guild available? %o', interaction.guild.available);
    const currentGuildId = interaction.guild.id;
    const channels = await interaction.guild.channels.fetch();
    const names = [];
    channels.forEach(val => {
      names.push(`${val.name} (${val.type})`);
    });
    dlog('channels:\n%O', names);

    await interaction.reply(
      {
        content: `guildId: ${currentGuildId}, guild has ${channels.size} channels`,
        ephemeral: true,
      },
      // `This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`,
    );
  },
};

/**
 * Notes
 * CategoryChannel, type: 4
 * TextChannel, type: 0
 * VoiceChannel, type: 2
 *
 * Channel types:
 * https://discord-api-types.dev/api/discord-api-types-v10/enum/ChannelType
 *
 * Create Channel options:
 * https://old.discordjs.dev/#/docs/discord.js/main/typedef/CategoryCreateChannelOptions
 *
 */
