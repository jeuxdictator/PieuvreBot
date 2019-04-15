const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.login(process.env.TOKEN);


client.on("ready", () => {
    console.log("connected")
    //un petit message pour la console, pour indiquer que le bot est co
    client.user.setPresence({
        game: { 
            name: `Les modifications apportées (Démarrage !)`,
            type: 'WATCHING' 
        },
        status: 'dnd' 
    })
    //statut discord 
    setTimeout(function(){
        client.user.setPresence({
            game: { 
                name: `ne rien faire || dev : jéhèndé#3800`
            },
            status: 'dnd' 
        })},
    5000)
});