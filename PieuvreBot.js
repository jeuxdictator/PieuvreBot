const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "!"

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

/*

---------------------------------------------------------------------------------------------

*/


client.on(`message`, message =>{
    if(message.author.id === client.user.id) return 
    if(message.channel.id === "567285310065475584"){
        if(message.content === "j'accèpte" || message.content === "j'accepte" || message.content === "J'accepte" ||message.content === "J'accèpte" ) {

            message.delete()

            let role = message.guild.roles.find(m => m.id === "567284985917210625");
            if(!role) return console.log("Le rôle n'existe pas !");

            let user = message.guild.member(message.author);
            user.removeRole(role).catch(err => {
                message.channel.send(err).then(message => setTimeout(function(){message.delete()}, 5000))
            }).then(a =>{
                user.addRole(message.guild.roles.find(m => m.id === "567250702578090013")).catch(err => {
                    GuildMember.send(err).catch(O_o => {}).then(message => setTimeout(function(){message.delete().catch(O_o => {})}, 5000))
                })
            })
            message.reply(`**Bravo, tu as accepté le règlement**`).then(message => setTimeout(function(){message.delete()}, 2000));
            
        }else{
            message.delete()
            message.reply("Veuillez envoyé `j'accèpte` dans le salon, et non autre chose").then(message => setTimeout(function(){message.delete()}, 3000))
        }
    }else{

        if(message.content.startsWith(prefix + "mute")) {
            if(!message.author.id === "244874298714619904" || !message.author.id === "471669236859928586"){
                if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(fryourperm);
            }
            if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send(frmyperm);

            if(message.mentions.users.size === 0) {
                return message.reply("Tu dois mentionner quelqu'un pour faire cette commande");
            }
            var mute = message.guild.member(message.mentions.users.first());
            if(!mute) {
                return message.reply("Je n'ai pas trouvé l'utilisateur ou il n'existe pas !");
            }
            if(message.content.substr(prefix.length + 4) === " <@515891064721244162>"){
                return message.reply("Je ne peux pas me mute !");
            }

            message.guild.members.get(mute.id).addRole('567647657951232002').then(member => {
                message.channel.send(`${mute.user.username} a été mute par ${message.author.username} !`);
            })
        }

        if(message.content.startsWith(prefix + "unmute")) {
            if(!message.author.id === "244874298714619904" || !message.author.id === "471669236859928586"){
                if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("**Hey ...**Vous n'avez pas la permissions d'éxécuter cela !");
            }
            if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");

            if(message.mentions.users.size === 0) {
                return message.reply("Tu dois mentionner quelqu'un pour faire cette commande");
            }
            var mute = message.guild.member(message.mentions.users.first());
            if(!mute) {
                return message.reply("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
            }
            if(message.content.substr(prefix.length + 6) === " <@515891064721244162>"){
                return message.reply("Je ne peux pas me unmute !")
            }
    
            message.guild.members.get(mute.id).removeRole('567647657951232002').then(member => {
                message.channel.send(`${mute.user.username} a été unmute par ${message.author.username} !`);
            })
        }
    }

});
client.on(`guildMemberAdd`, GuildMember =>{
    let user = GuildMember.guild.member(GuildMember);
    user.addRole(GuildMember.guild.roles.find(m => m.id === "567284985917210625")).catch(err => {
        GuildMember.send(err).catch(O_o => {}).then(message => setTimeout(function(){message.delete().catch(O_o => {})}, 5000))
    });
    GuildMember.guild.channels.filter(c => c.name === "nouveau" || c.name === "nouveaux").map(e => e.send(`**${GuildMember}** a rejoint le serveur !`))
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
