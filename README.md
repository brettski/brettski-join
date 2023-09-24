# brettski-join

A POC for a Discord bot which can add and remove voice channels through webhook requests.

Assuming a bot with the needed functionality is needed first, followed by a webhook to interact with the bot

If all that works, hopefully there's a way to wrap some type of security around all of this.

## Bot installation

### Permissions

#### Scopes

- applications.commands
- bot

#### Bot Permissions

- Manage Channels
- Send Messages
-

### URL

[https://discord.com/api/oauth2/authorize?client_id=1154150851305287860&permissions=17602923464720&scope=applications.commands%20bot](https://discord.com/api/oauth2/authorize?client_id=1154150851305287860&permissions=17602923464720&scope=applications.commands%20bot)

## Future Thoughts

- Instant invites
- Validate user from IdP
- Add/Manage events

## Thank You

- [Discord.js](https://www.npmjs.com/package/discord.js) npm package
