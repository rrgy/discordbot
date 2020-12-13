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


const updateEmbed = (oldEmbd) => {
    let count = deathKnights.length + demonHunters.length + druids.length + hunters.length + mages.length + monks.length + paladins.length + priests.length + shamans.length + rogues.length + warlocks.length + warriors.length
    console.log(count)
    

    oldEmbd.fields.map(el => {
        if(el.name === '<:Users:748964996494524477> RSVPS:'){
            el.value = count
        }
    })
}

const checkNull = (x) => {
    switch(x){
        case 'dk':
            for(let i = 0; i < deathKnights.length; i++){
                if(deathKnights[i] === null){
                    deathKnights.splice(i, 1)
                }
            }
            break
        case 'dh':
            for(let i = 0; i < demonHunters.length; i++){
                if(demonHunters[i] === null){
                    demonHunters.splice(i, 1)
                }
            }
            break
        case 'druid':
            for(let i = 0; i < druids.length; i++){
                if(druids[i] === null) {
                    druids.splice(i, 1)
                }
            }
            break
        case 'hunt':
            for(let i = 0; i < hunters.length; i++){
                if(hunters[i] === null){
                    hunters.splice(i, 1)
                }
            }
            break
        case 'mage':
            for(let i = 0; i < mages.length; i++){
                if(mages[i] === null){
                    mages.splice(i, 1)
                }
            }
            break
        case 'monk':
            for(let i = 0; i < monks.length; i++){
                if(monks[i] === null){
                    monks.splice(i, 1)
                }
            }
            break
        case 'paladin':
            for(let i = 0; i < paladins.length; i++){
                if(paladins[i] === null){
                    paladins.splice(i, 1)
                }
            }
            break
        case 'priest':
            for(let i = 0; i < priests.length; i++){
                if(priests[i] === null){
                    priests.splice(i, 1)
                }
            }
            break
        case 'sham':
            for(let i = 0; i < shamans.length; i++){
                if(shamans[i] === null){
                    shamans.splice(i, 1)
                }
            }
            break
        case 'rogue':
            for(let i = 0; i < rogues.length; i++){
                if(rogues[i] === null){
                    rogues.splice(i, 1)
                }
            }
            break
        case 'lock':
            for(let i = 0; i < warlocks.length; i++){
                if(warlocks[i] === null){
                    warlocks.splice(i, 1)
                }
            }
            break
        case 'war':
            for(let i = 0; i < warriors.length; i++){
                if(warriors[i] === null){
                    warriors.splice(i,1)
                }
            }
            break
    } 
}
 
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
                                checkNull('dk')
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:DeathKnight:632727774896848906> Death Knights'){
                        el.value = deathKnights
                    }
                })
                updateEmbed(oldEmbd)
            break

            case 'DemonHunter':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!demonHunters.includes(guildMember)){
                                demonHunters.push(guildMember)
                                checkNull('dh')
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:DemonHunter:632727839065505832> Demon Hunters'){
                        el.value = demonHunters
                    }
                })
                updateEmbed(oldEmbd)
            break

            case 'Druid':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!druids.includes(guildMember)){
                                druids.push(guildMember)
                                checkNull('druid')
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:Druid:632727877678530630> Druids'){
                        el.value = druids
                    }
                })
                updateEmbed(oldEmbd)
            break

            case 'Hunter':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!hunters.includes(guildMember)){
                                hunters.push(guildMember)
                                checkNull('hunt')
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:Hunter:632727911543209984> Hunters'){
                        el.value = hunters
                    }
                })
                updateEmbed(oldEmbd)
            break

            case 'Mage':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!mages.includes(guildMember)){
                                mages.push(guildMember)
                                checkNull('mage')
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:Mage:632727944091140176> Mages'){
                        el.value = mages
                    }
                })
                updateEmbed(oldEmbd)
            break

            case 'Monk':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!monks.includes(guildMember)){
                                monks.push(guildMember)
                                checkNull('monk')
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:Monk:632727980497567754> Monks'){
                        el.value = monks
                    }
                })
                updateEmbed(oldEmbd)
            break

            case 'Paladin':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!paladins.includes(guildMember)){
                                paladins.push(guildMember)
                                checkNull('paladin')
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:Paladin:632728009224224768> Paladins'){
                        el.value = paladins
                    }
                })
                updateEmbed(oldEmbd)
            break

            case 'Priest':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!priests.includes(guildMember)){
                                priests.push(guildMember)
                                checkNull('priest')
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:Priest:632728049804378119> Priests'){
                        el.value = priests
                    }
                })
                updateEmbed(oldEmbd)
            break

            case 'Shaman':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!shamans.includes(guildMember)){
                                shamans.push(guildMember)
                                checkNull('sham')
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:Shaman:632728116531560458> Shamans'){
                        el.value = shamans
                    }
                })
                updateEmbed(oldEmbd)
            break

            case 'Rogue':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!rogues.includes(guildMember)){
                                rogues.push(guildMember)
                                checkNull('rogue')
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:Rogue:632728083178455051> Rogues'){
                        el.value = rogues
                    }
                })
                updateEmbed(oldEmbd)
            break

            case 'Warlock':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!warlocks.includes(guildMember)){
                                warlocks.push(guildMember)
                                checkNull('lock')
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:Warlock:632728163130015754> Warlocks'){
                        el.value = warlocks
                    }
                })
                updateEmbed(oldEmbd)
            break

            case 'Warrior':
                react.users.cache.map(el => {
                    const userId = el.id
                    guildMembers.map(e => {
                        if(userId === e.id){
                            const guildMember = e.nickname
                            if(!warriors.includes(guildMember)){
                                warriors.push(guildMember)
                                checkNull('war')
                            }
                        }
                    })
                })
                oldEmbd.fields.map(el => {
                    if(el.name === '<:Warrior:632728189197746177> Warriors'){
                        el.value = warriors
                    }
                })
                updateEmbed(oldEmbd)
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
                updateEmbed(oldEmbd)
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
                updateEmbed(oldEmbd)
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
                updateEmbed(oldEmbd)
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
                                    if(deathKnights[i] === guildMember){
                                        deathKnights.splice(i, 1)
                                    }
                                }
                            }
                            if(demonHunters.includes(guildMember)){
                                for(let i = 0; i < demonHunters.length; i++){
                                    if(demonHunters[i] === guildMember){
                                        demonHunters.splice(i, 1)
                                    }
                                }
                            }
                            if (druids.includes(guildMember)){
                                for (let i = 0; i < druids.length; i++){
                                    if(druids[i] === guildMember){
                                        druids.splice(i, 1)
                                    }
                                }
                            }
                            if(hunters.includes(guildMember)){
                                for (let i = 0; i < hunters.length; i++){
                                    if(hunters[i] === guildMember){
                                        hunters.splice(i, 1)
                                    }
                                }
                            }
                            if(mages.includes(guildMember)){
                                for (let i = 0; i < mages.length; i++){
                                    if(mages[i] === guildMember){
                                        mages.splice(i, 1)
                                    }
                                }
                            }
                            if(monks.includes(guildMember)){
                                for (let i = 0; i < monks.length; i++){
                                    if(monks[i] === guildMember){
                                        monks.splice(i, 1)
                                    }
                                }
                            }
                            if(paladins.includes(guildMember)){
                                for (let i = 0; i < paladins.length; i++){
                                    if(paladins[i] === guildMember){
                                        paladins.splice(i, 1)
                                    }
                                }
                            }
                            if(priests.includes(guildMember)){
                                for (let i = 0; i < priests.length; i++){
                                    if(priests[i] === guildMember){
                                        priests.splice(i, 1)
                                    }
                                }
                            }
                            if(shamans.includes(guildMember)){
                                for (let i = 0; i < shamans.length; i++){
                                    if(shamans[i] === guildMember){
                                        shamans.splice(i, 1)
                                    }
                                }
                            }
                            if(rogues.includes(guildMember)){
                                for (let i = 0; i < rogues.length; i++){
                                    if(rogues[i] === guildMember){
                                        rogues.splice(i, 1)
                                    }
                                }
                            }
                            if(warlocks.includes(guildMember)){
                                for (let i = 0; i < warlocks.length; i++){
                                    if(warlocks[i] === guildMember){
                                        warlocks.splice(i, 1)
                                    }
                                }
                            }
                            if(warriors.includes(guildMember)){
                                for (let i = 0; i < warriors.length; i++){
                                    if(warriors[i] === guildMember){
                                        warriors.splice(i, 1)
                                    }
                                }
                            }
                            if(late.includes(guildMember)){
                                for (let i = 0; i < late.length; i++){
                                    if(late[i] === guildMember){
                                        late.splice(i, 1)
                                    }
                                }
                            }
                            if(maybe.includes(guildMember)){
                                for (let i = 0; i < maybe.length; i++){
                                    if(maybe[i] === guildMember){
                                        maybe.splice(i, 1)
                                    }
                                }
                            }
                            if(absent.includes(guildMember)){
                                for (let i = 0; i < absent.length; i++){
                                    if(absent[i] === guildMember){
                                        absent.splice(i, 1)
                                    }
                                }
                            }
                        }
                    })
                })

                oldEmbd.fields.map(el => {
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