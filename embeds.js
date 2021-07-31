const League = require("./items.js");
const Discord = require('discord.js');
let loadoutTemplate;
function fillLoadoutTemplate() {
	loadoutTemplate = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: League.loadout[0].name, value: League.loadout[0].emote, inline: true },
		{ name: League.loadout[1].name, value: League.loadout[1].emote, inline: true },
		{ name: League.loadout[2].name, value: League.loadout[2].emote, inline: true },
		{ name: League.loadout[3].name, value: League.loadout[3].emote, inline: true },
		{ name: League.loadout[4].name, value: League.loadout[4].emote, inline: true },
		{ name: League.loadout[5].name, value: League.loadout[5].emote, inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
}

exports.loadoutTemplate = loadoutTemplate;
exports.fillLoadoutTemplate = fillLoadoutTemplate;