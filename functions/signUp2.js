const Discord = require('discord.js')
 
let deathKnights = []
let demonHunters = []
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
            case 'DeathKnight':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!deathKnights.includes(guildMember)){
                                deathKnights.push(guildMember)
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:Users:748964996494524477> RSVPS:'){
                        el.value++
                    }
                    if(el.name === '<:DeathKnight:632727774896848906> Death Knights'){
                        el.value = deathKnights
                    }
                })
                break


            case 'DemonHunter':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!demonHunters.includes(guildMember)){
                                demonHunters.push(guildMember)
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:Users:748964996494524477> RSVPS:'){
                        el.value++
                    }
                    if(el.name === '<:DemonHunter:632727839065505832> Demon Hunters'){
                        el.value = demonHunters
                    }
                })
                break


            case 'Druid':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!druids.includes(guildMember)){
                                druids.push(guildMember)
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:Users:748964996494524477> RSVPS:'){
                        el.value++
                    }
                    if(el.name === '<:Druid:632727877678530630> Druids'){
                        el.value = druids
                    }
                })
                break


            case 'Hunter':
                    react.users.cache.map(el => {
                        const userId = el.id
                        guildMembers.map(e => {
                            if(userId === e.id){
                                const guildMember = e.nickname
                                if(!hunters.includes(guildMember)){
                                    hunters.push(guildMember)
                                }
                            }
                        })
                    })
                    oldEmbd.fields.map(el => {
                        if(el.name === '<:Users:748964996494524477> RSVPS:'){
                            el.value++
                        }
                        if(el.name === '<:Hunter:632727911543209984> Hunters'){
                            el.value = hunters
                        }
                    })
                    break


                case 'Mage':
                        react.users.cache.map(el => {
                            const userId = el.id
                            guildMembers.map(e => {
                                if(userId === e.id){
                                    const guildMember = e.nickname
                                    if(!mages.includes(guildMember)){
                                        mages.push(guildMember)
                                    }
                                }
                            })
                        })
                        oldEmbd.fields.map(el => {
                            if(el.name === '<:Users:748964996494524477> RSVPS:'){
                                el.value++
                            }
                            if(el.name === '<:Mage:632727944091140176> Mages'){
                                el.value = mages
                            }
                        })
                        break


                    case 'Monk':
                        react.users.cache.map(el => {
                            const userId = el.id
                            guildMembers.map(e => {
                                if(userId === e.id){
                                    const guildMember = e.nickname
                                    if(!monks.includes(guildMember)){
                                        monks.push(guildMember)
                                    }
                                }
                            })
                        })
                        oldEmbd.fields.map(el => {
                            if(el.name === '<:Users:748964996494524477> RSVPS:'){
                                el.value++
                            }
                            if(el.name === '<:Monk:632727980497567754> Monks'){
                                el.value = monks
                            }
                        })
                        break


                    case 'Paladin':
                        react.users.cache.map(el => {
                            const userId = el.id
                            guildMembers.map(e => {
                                if(userId === e.id){
                                    const guildMember = e.nickname
                                    if(!paladins.includes(guildMember)){
                                        paladins.push(guildMember)
                                    }
                                }
                            })
                        })
                        oldEmbd.fields.map(el => {
                            if(el.name === '<:Users:748964996494524477> RSVPS:'){
                                el.value++
                            }
                            if(el.name === '<:Paladin:632728009224224768> Paladins'){
                                el.value = paladins
                            }
                        })
                        break


                    case 'Priest':
                        react.users.cache.map(el => {
                            const userId = el.id
                            guildMembers.map(e => {
                                if(userId === e.id){
                                    const guildMember = e.nickname
                                    if(!priests.includes(guildMember)){
                                        priests.push(guildMember)
                                    }
                                }
                            })
                        })
                        oldEmbd.fields.map(el => {
                            if(el.name === '<:Users:748964996494524477> RSVPS:'){
                                el.value++
                            }
                            if(el.name === '<:Priest:632728049804378119> Priests'){
                                el.value = priests
                            }
                        })
                        break


                    case 'Shaman':
                        react.users.cache.map(el => {
                            const userId = el.id
                            guildMembers.map(e => {
                                if(userId === e.id){
                                    const guildMember = e.nickname
                                    if(!shamans.includes(guildMember)){
                                        shamans.push(guildMember)
                                    }
                                }
                            })
                        })
                        oldEmbd.fields.map(el => {
                            if(el.name === '<:Users:748964996494524477> RSVPS:'){
                                el.value++
                            }
                            if(el.name === '<:Shaman:632728116531560458> Shamans'){
                                el.value = shamans
                            }
                        })
                        break


                    case 'Rogue':
                        react.users.cache.map(el => {
                            const userId = el.id
                            guildMembers.map(e => {
                                if(userId === e.id){
                                    const guildMember = e.nickname
                                    if(!rogues.includes(guildMember)){
                                        rogues.push(guildMember)
                                    }
                                }
                            })
                        })
                        oldEmbd.fields.map(el => {
                            if(el.name === '<:Users:748964996494524477> RSVPS:'){
                                el.value++
                            }
                            if(el.name === '<:Rogue:632728083178455051> Rogues'){
                                el.value = rogues
                            }
                        })
                        break


                    case 'Warlock':
                        react.users.cache.map(el => {
                            const userId = el.id
                            guildMembers.map(e => {
                                if(userId === e.id){
                                    const guildMember = e.nickname
                                    if(!warlocks.includes(guildMember)){
                                        warlocks.push(guildMember)
                                    }
                                }
                            })
                        })
                        oldEmbd.fields.map(el => {
                            if(el.name === '<:Users:748964996494524477> RSVPS:'){
                                el.value++
                            }
                            if(el.name === '<:Warlock:632728163130015754> Warlocks'){
                                el.value = warlocks
                            }
                        })
                        break


                    case 'Warrior':
                        react.users.cache.map(el => {
                            const userId = el.id
                            guildMembers.map(e => {
                                if(userId === e.id){
                                    const guildMember = e.nickname
                                    if(!warriors.includes(guildMember)){
                                        warriors.push(guildMember)
                                    }
                                }
                            })
                        })
                        oldEmbd.fields.map(el => {
                            if(el.name === '<:Users:748964996494524477> RSVPS:'){
                                el.value++
                            }
                            if(el.name === '<:Warrior:632728189197746177> Warriors'){
                                el.value = warriors
                            }
                        })
                        break


                    case 'Late':
                        react.users.cache.map(el => {
                            const userId = el.id
                            guildMembers.map(e => {
                                if(userId === e.id){
                                    const guildMember = e.nickname
                                    if(!late.includes(guildMember)){
                                        late.push(guildMember)
                                    }
                                }
                            })
                        })
                        oldEmbd.fields.map(el => {
                            if(el.name === '<:Late:748951530983522465> Late'){
                                el.value = late
                            }
                        })
                        break   


                    case 'Maybe':
                        react.users.cache.map(el => {
                            const userId = el.id
                            guildMembers.map(e => {
                                if(userId === e.id){
                                    const guildMember = e.nickname
                                    if(!maybe.includes(guildMember)){
                                        maybe.push(guildMember)
                                    }
                                }
                            })
                        })
                        oldEmbd.fields.map(el => {
                            if(el.name === '<:Maybe:748952451754754109> Maybe'){
                                el.value = maybe
                            }
                        })
                        break


                    case 'Absent':
                        react.users.cache.map(el => {
                            const userId = el.id
                            guildMembers.map(e => {
                                if(userId === e.id){
                                    const guildMember = e.nickname
                                    if(!absent.includes(guildMember)){
                                        absent.push(guildMember)
                                    }
                                }
                            })
                        })
                        oldEmbd.fields.map(el => {
                            if(el.name === '<:Absent:748952405869330614> Absent'){
                                el.value = absent
                            }
                        })
                        break
        }
    
        const newEmbd = new Discord.MessageEmbed(oldEmbd)
            .setThumbnail('attachment://image1.png')
        raid1.edit(newEmbd);
    },

    remove: (raid1, react) => {
        const oldEmbd = raid1.embeds[0]
        const guildMembers = react.message.guild.members.cache

                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(el => {
                        if(userId === el.id){
                            const guildMember = el.nickname

                            if(deathKnights.includes(guildMember)){
                                for(let i = 0; i < deathKnights.length; i++){
                                    deathKnights.splice(i, 1)
                                }
                            }
                            if(demonHunters.includes(guildMember)){
                                for(let i = 0; i < demonHunters.length; i++){
                                    demonHunters.splice(i, 1)
                                }
                            }
                            if (druids.includes(guildMember)){
                                for (let i = 0; i < druids.length; i++){
                                    druids.splice(i, 1)
                                }
                            }
                            if(hunters.includes(guildMember)){
                                for (let i = 0; i < hunters.length; i++){
                                    hunters.splice(i, 1)
                                }
                            }
                            if(mages.includes(guildMember)){
                                for (let i = 0; i < mages.length; i++){
                                    mages.splice(i, 1)
                                }
                            }
                            if(monks.includes(guildMember)){
                                for (let i = 0; i < monks.length; i++){
                                    monks.splice(i, 1)
                                }
                            }
                            if(paladins.includes(guildMember)){
                                for (let i = 0; i < paladins.length; i++){
                                    paladins.splice(i, 1)
                                }
                            }
                            if(priests.includes(guildMember)){
                                for (let i = 0; i < priests.length; i++){
                                    priests.splice(i, 1)
                                }
                            }
                            if(shamans.includes(guildMember)){
                                for (let i = 0; i < shamans.length; i++){
                                    shamans.splice(i, 1)
                                }
                            }
                            if(rogues.includes(guildMember)){
                                for (let i = 0; i < rogues.length; i++){
                                    rogues.splice(i, 1)
                                }
                            }
                            if(warlocks.includes(guildMember)){
                                for (let i = 0; i < warlocks.length; i++){
                                    warlocks.splice(i, 1)
                                }
                            }
                            if(warriors.includes(guildMember)){
                                for (let i = 0; i < warriors.length; i++){
                                    warriors.splice(i, 1)
                                }
                            }
                            if(late.includes(guildMember)){
                                for (let i = 0; i < late.length; i++){
                                    late.splice(i, 1)
                                }
                            }
                            if(maybe.includes(guildMember)){
                                for (let i = 0; i < maybe.length; i++){
                                    maybe.splice(i, 1)
                                }
                            }
                            if(absent.includes(guildMember)){
                                for (let i = 0; i < absent.length; i++){
                                    absent.splice(i, 1)
                                }
                            }
                        }
                    })
                })

                oldEmbd.fields.map(el => {
                    if(el.name === '<:Users:748964996494524477> RSVPS:'){
                        el.value--
                        if(el.value < 0){
                            el.value = 0
                        }
                    }
                    if(el.name === '<:DeathKnight:632727774896848906> Death Knights'){
                        if(deathKnights.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = deathKnights}
                    }
                    if(el.name === '<:DemonHunter:632727839065505832> Demon Hunters'){
                        if(demonHunters.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = demonHunters}
                    }
                    if(el.name === '<:Druid:632727877678530630> Druids'){
                        if(druids.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = druids}
                    }
                    if(el.name === '<:Hunter:632727911543209984> Hunters'){
                        if(hunters.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = hunters}
                    }
                    if(el.name === '<:Mage:632727944091140176> Mages'){
                        if(mages.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = mages}
                    }
                    if(el.name === '<:Monk:632727980497567754> Monks'){
                        if(monks.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = monks}
                    }
                    if(el.name === '<:Paladin:632728009224224768> Paladins'){
                        if(paladins.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = paladins}
                    }
                    if(el.name === '<:Priest:632728049804378119> Priests'){
                        if(priests.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = priests}
                    }
                    if(el.name === '<:Shaman:632728116531560458> Shamans'){
                        if(shamans.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = shamans}
                    }
                    if(el.name === '<:Rogue:632728083178455051> Rogues'){
                        if(rogues.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = rogues}
                    }
                    if(el.name === '<:Warlock:632728163130015754> Warlocks'){
                        if(warlocks.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = warlocks}
                    }
                    if(el.name === '<:Warrior:632728189197746177> Warriors'){
                        if(warriors.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = warriors}
                    }
                    if(el.name === '<:Late:748951530983522465> Late'){
                        if(late.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = late}
                    }
                    if(el.name === '<:Maybe:748952451754754109> Maybe'){
                        if(maybe.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = maybe}
                    }
                    if(el.name === '<:Absent:748952405869330614> Absent'){
                        if(absent.length < 1){
                            el.value = '\u200B'
                        }
                        else {el.value = absent}
                    }
                })          
    }
}