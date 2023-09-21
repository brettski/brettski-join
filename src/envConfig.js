function configMissing(configKey) {
  throw new Error(`missing required .env setting for ${configKey}`);
}

const requiredConfig = () => ({
  discord: {
    botToken:
      process.env.DISCORD_BOT_TOKEN ?? configMissing('DISCORD_BOT_TOKEN'),
    appId:
      process.env.DISCORD_BOT_APP_ID ?? configMissing('DISCORD_BOT_APP_ID'),
    permissionInt: 2147552272,
  },
});

export default requiredConfig();
