const Discord = require('discord.js')
const client = new Discord.Client()

client.config = require('./config.json')

const prefix = '%'

const fs = require('fs')


client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('beep boop')
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if (command === 'raid1'){
        client.commands.get('raid1').execute(message, args)      
    } 
    else if (command === 'raid2'){
        client.commands.get('raid2').execute(message, args)
    }
})


client.login(client.config.token)
