const Discord = require('discord.js')
const signUp = require('../functions/signUp')

const image = new Discord.MessageAttachment('./image1.png')

const raid1 = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Raid Sign-Ups')
    .setURL('https://raider.io/guilds/us/lightbringer/Kinda%20Serious')
    .setAuthor('Kinda Serious', 'attachment://image1.png', '')
    .setDescription('sign-up with your class below!')
    .setThumbnail('attachment://image1.png')
    .addFields(
        { name: 'Tuesday 8pm EST!', value: 'Invites go out @ 7:45pm! Ensure your gear is gemmed/enchanted. Food & Flasks will be provided!' },
        { name: '<:Calendar:748964967352631427> TUESDAY', value:'\u200B', inline: true },
        { name: '<:Clock:748965177248186448> 8pm EST',  value:'\u200B', inline: true },
        { name: 'RSVPS:', value: 0, inline: true },
        { name: '💩 Death Knights', value: '\u200B', inline: true },
        { name: '😄 Demon Hunters', value: '\u200B', inline: true },
        { name: '😡 Druids', value: '\u200B', inline: true },
        { name: '💀 Hunters', value: '\u200B', inline: true },
        { name: '😻 Mages', value: '\u200B', inline: true },
        { name: '🤡 Monks', value: '\u200B', inline: true },
        { name: '👿 Paladins', value: '\u200B', inline: true },
        { name: '👽 Priests', value: '\u200B', inline: true },
        { name: '🐶 Shamans', value: '\u200B', inline: true },
        { name: '🍉 Rogues', value: '\u200B', inline: true },
        { name: '👍 Warlocks', value: '\u200B', inline: true },
        { name: '😱 Warriors', value: '\u200B', inline: true },
        { name: '\u200B', value:'\u200B', inline: true },
        { name: '\u200B', value:'\u200B', inline: true },
        { name: '\u200B', value:'\u200B', inline: true },
        { name: '👁️ Late', value: '\u200B', inline: true },
        { name: '🐷 Maybe', value: '\u200B', inline: true },
        { name: '❄️ Absent', value: '\u200B', inline: true }
    )
    .attachFiles([image])
    .setTimestamp()
    .setFooter('Powered by the Kinda Serious Bot | Created by Steroids', 'attachment://image1.png');
  
module.exports = {
    name: 'raid1',
    description: 'raid command',
    execute(message){

        const filter = (reaction, user) => {
            return ['😄', '💩', '😡', '💀', '😻', '🤡', '👿', '👽', '🐶', '🍉', '👍', '😱', '👁️', '🐷', '❄️']
                .includes(reaction.emoji.name) && user.id === message.author.id
        }

        message.channel.send(raid1).then(raid1 => {
            // const classes = ['😄', '💩', '😡', '💀', '😻', '🤡', '👿', '👽', '🐶', '🍉', '👍', '😱', '👁️', '🐷', '❄️']
            // for(i = 0; i < classes.length; i++){
            //     raid1.react(classes[i])
            // }
            raid1.react('😄')
            raid1.react('💩')
            raid1.react('😡')
            raid1.react('💀')
            raid1.react('😻')
            raid1.react('🤡')
            raid1.react('👿')
            raid1.react('👽')
            raid1.react('🐶')
            raid1.react('🍉')
            raid1.react('👍')
            raid1.react('😱')
            raid1.react('👁️')
            raid1.react('🐷')
            raid1.react('❄️')

            let users = []
            let collector = raid1.createReactionCollector(filter)
            collector.on('collect', (reaction, user) => {
                const react = reaction
                react.users.cache.map(el => {
                    if(el.bot === false){
                        if (!users.includes(user.tag)){
                            signUp.confirm(reaction.emoji.name, raid1, react)
                            users.push(user.tag)
                        }
                        else if(users.includes(user.tag)){
                            signUp.remove(raid1, react)
                            signUp.confirm(reaction.emoji.name, raid1, react)
                        }
                    }
                })
            })

            collector.on('end', collected => {
                console.log(`collected ${collected.size} reactions`)
            })
        })
    }
}