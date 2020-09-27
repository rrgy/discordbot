const Discord = require('discord.js');
const signUp = require('../functions/signUp2');
 
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
                { name: '<:Users:748964996494524477> RSVPS: ', value: 0, inline: true },
                { name: '<:DeathKnight:632727774896848906> Death Knights', value: '\u200B', inline: true },
                { name: '<:DemonHunter:632727839065505832> Demon Hunters', value: '\u200B', inline: true },
                { name: '<:Druid:632727877678530630> Druids', value: '\u200B', inline: true },
                { name: '<:Hunter:632727911543209984> Hunters', value: '\u200B', inline: true },
                { name: '<:Mage:632727944091140176> Mages', value: '\u200B', inline: true },
                { name: '<:Monk:632727980497567754> Monks', value: '\u200B', inline: true },
                { name: '<:Paladin:632728009224224768> Paladins', value: '\u200B', inline: true },
                { name: '<:Priest:632728049804378119> Priests', value: '\u200B', inline: true },
                { name: '<:Shaman:632728116531560458> Shamans', value: '\u200B', inline: true },
                { name: '<:Rogue:632728083178455051> Rogues', value: '\u200B', inline: true },
                { name: '<:Warlock:632728163130015754> Warlocks', value: '\u200B', inline: true },
                { name: '<:Warrior:632728189197746177> Warriors', value: '\u200B', inline: true },
                { name: '\u200B', value:'\u200B', inline: true },
                { name: '\u200B', value:'\u200B', inline: true },
                { name: '\u200B', value:'\u200B', inline: true },
                { name: '<:Late:748951530983522465> Late', value: '\u200B', inline: true },
                { name: '<:Maybe:748952451754754109> Maybe', value: '\u200B', inline: true },
                { name: '<:Absent:748952405869330614> Absent', value: '\u200B', inline: true }
            )
            .attachFiles([image])
            .setTimestamp()
            .setFooter('Powered by the Kinda Serious Bot | Created by Zerkyn', 'attachment://image1.png');
 
module.exports = {
    name: 'raid2',
    description: "This is Raid 2 command!",
    execute(message, args){
        const deathknight = message.guild.emojis.cache.find(emoji => emoji.name === 'DeathKnight');
        const demonhunter = message.guild.emojis.cache.find(emoji => emoji.name === 'DemonHunter');
        const druid = message.guild.emojis.cache.find(emoji => emoji.name === 'Druid');
        const hunter = message.guild.emojis.cache.find(emoji => emoji.name === 'Hunter');
        const mage = message.guild.emojis.cache.find(emoji => emoji.name === 'Mage');
        const monk = message.guild.emojis.cache.find(emoji => emoji.name === 'Monk');
        const paladin = message.guild.emojis.cache.find(emoji => emoji.name === 'Paladin');
        const priest = message.guild.emojis.cache.find(emoji => emoji.name === 'Priest');
        const shaman = message.guild.emojis.cache.find(emoji => emoji.name === 'Shaman');
        const rogue = message.guild.emojis.cache.find(emoji => emoji.name === 'Rogue');
        const warlock = message.guild.emojis.cache.find(emoji => emoji.name === 'Warlock');
        const warrior = message.guild.emojis.cache.find(emoji => emoji.name === 'Warrior');
        const late = message.guild.emojis.cache.find(emoji => emoji.name === 'Late');
        const maybe = message.guild.emojis.cache.find(emoji => emoji.name === 'Maybe');
        const absent = message.guild.emojis.cache.find(emoji => emoji.name === 'Absent');
 
        
        const filter = (reaction) => {
            return [
                'DeathKnight','DemonHunter','Druid','Hunter','Mage','Monk','Paladin','Priest','Shaman','Rogue','Warlock','Warrior','Late','Maybe','Absent',          
            ].includes(reaction.emoji.name) //&& user.id === message.author.id
        }
        
        message.channel.send(raid1).then(raid1 => {
            raid1.react(deathknight)
            raid1.react(demonhunter)
            raid1.react(druid)
            raid1.react(hunter)
            raid1.react(mage)
            raid1.react(monk)
            raid1.react(paladin)
            raid1.react(priest)
            raid1.react(shaman)
            raid1.react(rogue)
            raid1.react(warlock)
            raid1.react(warrior)
            raid1.react(late)
            raid1.react(maybe)
            raid1.react(absent)
            
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