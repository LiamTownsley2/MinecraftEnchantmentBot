require('dotenv').config();

const { Client } = require('discord.js');
const bot = new Client;

const { tominecraft, fromminecraft } = require('./useful')

bot.on('ready', () => {
    console.log(`${bot.user.tag} (${bot.user.id}) is now ready with ${bot.guilds.cache.size} guilds and ${bot.users.cache.size} users.`)
    bot.user.setActivity('enchantment books. Use !tominecraft or !fromminecraft to use it!.', { type: 'WATCHING' })
});

bot.on('message', (message) => {
    if(message.author.bot) return;

    const converted = (message.content.startsWith('!tominecraft')) ? tominecraft(message.content.slice(13)) : fromminecraft(message.content.slice(15));
    if(message.content.startsWith('!tominecraft ')) {
        return message.reply(converted);
    }
    if(message.content.startsWith('!fromminecraft ')) {
        return message.reply(converted);
    }
});

bot.login();
