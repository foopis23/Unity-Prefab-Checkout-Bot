require('dotenv').config()

if (process.env.DISCORD_TOKEN === undefined) {
	throw new Error('DISCORD_TOKEN environment variable is not set in .env file');
}

module.exports = {
	token: process.env.DISCORD_TOKEN,
	clientId: process.env.DISCORD_CLIENT_ID,
	devGuildId: process.env.DISCORD_DEV_GUILD_ID,
}
