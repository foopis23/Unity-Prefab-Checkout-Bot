require('dotenv').config()

if (process.env.DISCORD_TOKEN === undefined) {
	throw new Error('DISCORD_TOKEN environment variable is not set in .env file');
}

module.exports = {
	token: process.env.DISCORD_TOKEN,
}
