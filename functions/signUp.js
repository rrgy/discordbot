const Discord = require('discord.js')

let demonHunters = []
let deathKnights = []
let druids = []
let hunters = []
let mages = []
let monks = []
let paladins = []
let priests = []
let shamans = []
let rogues = []
let warlocks = []
let warriors = []
let late = []
let maybe = []
let absent = []

module.exports = {
    confirm: (emoji, raid1, react) => {
        const oldEmbd = raid1.embeds[0]
        const guildMembers = react.message.guild.members.cache

        switch(emoji){
            case '😄':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if (userId === e.id){
                                const guildMember = e.nickname
                                if(!demonHunters.includes(guildMember)){
                                    demonHunters.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === 'RSVPS:'){
                        el.value++
                    }
                    if(el.name === '😄 Demon Hunters'){
                        el.value = demonHunters
                    }
                })
                break

            case '💩':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!deathKnights.includes(guildMember)){
                                    deathKnights.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === 'RSVPS:'){
                        el.value++
                    }
                    if(el.name === '💩 Death Knights'){
                        el.value = deathKnights
                    }
                })
                break

            case '😡':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!druids.includes(guildMember)){
                                    druids.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === 'RSVPS:'){
                        el.value++
                    }
                    if(el.name === '😡 Druids'){
                        el.value = druids
                    }
                })
                break

            case '💀':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!hunters.includes(guildMember)){
                                    hunters.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === 'RSVPS:'){
                        el.value++
                    }
                    if(el.name === '💀 Hunters'){
                        el.value = hunters
                    }
                })
                break

            case '😻':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!mages.includes(guildMember)){
                                    mages.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === 'RSVPS:'){
                        el.value++
                    }
                    if(el.name === '😻 Mages'){
                        el.value = mages
                    }
                })
                break

            case '🤡':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!monks.includes(guildMember)){
                                    monks.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === 'RSVPS:'){
                        el.value++
                    }
                    if(el.name === '🤡 Monks'){
                        el.value = monks
                    }
                })
                break

            case '👿':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!paladins.includes(guildMember)){
                                    paladins.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === 'RSVPS:'){
                        el.value++
                    }
                    if(el.name === '👿 Paladins'){
                        el.value = paladins
                    }
                })
                break

            case '👽':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!priests.includes(guildMember)){
                                    priests.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === 'RSVPS:'){
                        el.value++
                    }
                    if(el.name === '👽 Priests'){
                        el.value = priests
                    }
                })
                break

            case '🐶':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!shamans.includes(guildMember)){
                                    shamans.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === 'RSVPS:'){
                        el.value++
                    }
                    if(el.name === '🐶 Shamans'){
                        el.value = shamans
                    }
                })
                break

            case '🍉':
                react.users.cache.map(el =>{
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!rogues.includes(guildMember)){
                                    rogues.push(guildMember)
                                }
                            }
                        })
                    }
                }) 
                oldEmbd.fields.map(el => {
                    if(el.name === 'RSVPS:'){
                        el.value++
                    }
                    if(el.name === '🍉 Rogues'){
                        el.value = rogues
                    }
                })
                break

            case '👍':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!warlocks.includes(guildMember)){
                                    warlocks.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === 'RSVPS:'){
                        el.value++
                    }
                    if(el.name === '👍 Warlocks'){
                        el.value = warlocks
                    }
                })
                break

            case '😱':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!warriors.includes(guildMember)){
                                    warriors.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === 'RSVPS:'){
                        el.value++
                    }
                    if(el.name === '😱 Warriors'){
                        el.value = warriors
                    }
                })
                break

            case '👁️':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!late.includes(guildMember)){
                                    late.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '👁️ Late'){
                        el.value = late
                    }
                })
                break

            case '🐷':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!maybe.includes(guildMember)){
                                    maybe.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '🐷 Maybe'){
                        el.value = maybe
                    }
                })
                break

            case '❄️':
                react.users.cache.map(el => {
                    if(el.bot === false){
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!absent.includes(guildMember)){
                                    absent.push(guildMember)
                                }
                            }
                        })
                    }
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '❄️ Absent'){
                        el.value = absent
                    }
                })
                break
        }

        const newEmbd = new Discord.MessageEmbed(oldEmbd)
            .setThumbnail('attachment://image1.png')
        raid1.edit(newEmbd)
    }
}