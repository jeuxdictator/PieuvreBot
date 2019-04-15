const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.login(process.env.TOKEN);


client.on("ready", () => {
    console.log(`connecté : ${client.user.tag}!`)
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
                name: `tester || dev : jéhèndé#3800`
            },
            status: 'dnd' 
        })},
    5000)
});

const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

client.on('raw', async event => {
	if (!events.hasOwnProperty(event.t)) return;

	const { d: data } = event;
	const user = client.users.get(data.user_id);
	const channel = client.channels.get(data.channel_id) || await user.createDM();

	if (channel.messages.has(data.message_id)) return;

	const message = await channel.fetchMessage(data.message_id);
	const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
	let reaction = message.reactions.get(emojiKey);

	if (!reaction) {
		const emoji = new Discord.Emoji(client.guilds.get(data.guild_id), data.emoji);
		reaction = new Discord.MessageReaction(message, emoji, 1, data.user_id === client.user.id);
	}

	client.emit(events[event.t], reaction, user);
});
client.on(`messageReactionAdd`, (reaction, user) => {
    if(reaction.message.id === "567296722389303306"){
        if(reaction.emoji.name === "1⃣"){
            if(client.guilds.get(reaction.message.guild.id).members.get(user.id).roles.some(z => z.id === "567253288639135753")){
                client.guilds.get(reaction.message.guild.id).members.get(user.id).removeRole(reaction.message.guild.roles.find(m => m.id === "567253288639135753"))
                reaction.message.channel.send("<@" + user.id + ">, rôle retiré").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }else{
                client.guilds.get(reaction.message.guild.id).members.get(user.id).addRole(reaction.message.guild.roles.find(m => m.id === "567253288639135753"))
                reaction.message.channel.send("<@" + user.id + ">, rôle ajouté").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }
        }
        if(reaction.emoji.name === "2⃣"){
            if(client.guilds.get(reaction.message.guild.id).members.get(user.id).roles.some(z => z.id === "567253365877374977")){
                client.guilds.get(reaction.message.guild.id).members.get(user.id).removeRole(reaction.message.guild.roles.find(m => m.id === "567253365877374977"))
                reaction.message.channel.send("<@" + user.id + ">, rôle retiré").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }else{
                client.guilds.get(reaction.message.guild.id).members.get(user.id).addRole(reaction.message.guild.roles.find(m => m.id === "567253365877374977"))
                reaction.message.channel.send("<@" + user.id + ">, rôle ajouté").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }
        } 
        if(reaction.emoji.name === "3⃣"){
            if(client.guilds.get(reaction.message.guild.id).members.get(user.id).roles.some(z => z.id === "567253444524638225")){
                client.guilds.get(reaction.message.guild.id).members.get(user.id).removeRole(reaction.message.guild.roles.find(m => m.id === "567253444524638225"))
                reaction.message.channel.send("<@" + user.id + ">, rôle retiré").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }else{
                client.guilds.get(reaction.message.guild.id).members.get(user.id).addRole(reaction.message.guild.roles.find(m => m.id === "567253444524638225"))
                reaction.message.channel.send("<@" + user.id + ">, rôle ajouté").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }
        }
        if(reaction.emoji.name === "4⃣"){
            if(client.guilds.get(reaction.message.guild.id).members.get(user.id).roles.some(z => z.id === "567253522035507211")){
                client.guilds.get(reaction.message.guild.id).members.get(user.id).removeRole(reaction.message.guild.roles.find(m => m.id === "567253522035507211"))
                reaction.message.channel.send("<@" + user.id + ">, rôle retiré").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }else{
                client.guilds.get(reaction.message.guild.id).members.get(user.id).addRole(reaction.message.guild.roles.find(m => m.id === "567253522035507211"))
                reaction.message.channel.send("<@" + user.id + ">, rôle ajouté").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }
        } 
        reaction.remove(user)
    }else if(reaction.message.id === "567422550095953921"){
        if(reaction.emoji.name === "1⃣"){
            if(client.guilds.get(reaction.message.guild.id).members.get(user.id).roles.some(z => z.id === "567252225123155969")){
                client.guilds.get(reaction.message.guild.id).members.get(user.id).removeRole(reaction.message.guild.roles.find(m => m.id === "567252225123155969"))
                reaction.message.channel.send("<@" + user.id + ">, rôle retiré").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }else{
                client.guilds.get(reaction.message.guild.id).members.get(user.id).addRole(reaction.message.guild.roles.find(m => m.id === "567252225123155969"))
                reaction.message.channel.send("<@" + user.id + ">, rôle ajouté").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }
        }
        if(reaction.emoji.name === "2⃣"){
            if(client.guilds.get(reaction.message.guild.id).members.get(user.id).roles.some(z => z.id === "567252052728610816")){
                client.guilds.get(reaction.message.guild.id).members.get(user.id).removeRole(reaction.message.guild.roles.find(m => m.id === "567252052728610816"))
                reaction.message.channel.send("<@" + user.id + ">, rôle retiré").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }else{
                client.guilds.get(reaction.message.guild.id).members.get(user.id).addRole(reaction.message.guild.roles.find(m => m.id === "567252052728610816"))
                reaction.message.channel.send("<@" + user.id + ">, rôle ajouté").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }
        } 
        if(reaction.emoji.name === "3⃣"){
            if(client.guilds.get(reaction.message.guild.id).members.get(user.id).roles.some(z => z.id === "567252524562644993")){
                client.guilds.get(reaction.message.guild.id).members.get(user.id).removeRole(reaction.message.guild.roles.find(m => m.id === "567252524562644993"))
                reaction.message.channel.send("<@" + user.id + ">, rôle retiré").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }else{
                client.guilds.get(reaction.message.guild.id).members.get(user.id).addRole(reaction.message.guild.roles.find(m => m.id === "567252524562644993"))
                reaction.message.channel.send("<@" + user.id + ">, rôle ajouté").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }
        }
        if(reaction.emoji.name === "4⃣"){
            if(client.guilds.get(reaction.message.guild.id).members.get(user.id).roles.some(z => z.id === "567252828037316628")){
                client.guilds.get(reaction.message.guild.id).members.get(user.id).removeRole(reaction.message.guild.roles.find(m => m.id === "567252828037316628"))
                reaction.message.channel.send("<@" + user.id + ">, rôle retiré").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }else{
                client.guilds.get(reaction.message.guild.id).members.get(user.id).addRole(reaction.message.guild.roles.find(m => m.id === "567252828037316628"))
                reaction.message.channel.send("<@" + user.id + ">, rôle ajouté").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }
        } 
        if(reaction.emoji.name === "5⃣"){
            if(client.guilds.get(reaction.message.guild.id).members.get(user.id).roles.some(z => z.id === "567253093238964225")){
                client.guilds.get(reaction.message.guild.id).members.get(user.id).removeRole(reaction.message.guild.roles.find(m => m.id === "567253093238964225"))
                reaction.message.channel.send("<@" + user.id + ">, rôle retiré").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }else{
                client.guilds.get(reaction.message.guild.id).members.get(user.id).addRole(reaction.message.guild.roles.find(m => m.id === "567253093238964225"))
                reaction.message.channel.send("<@" + user.id + ">, rôle ajouté").then(z => setTimeout(function(){z.delete().catch(O_o => {})}, 5000))
            }
        } 
        reaction.remove(user)
    }
});
