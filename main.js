'use strict';
require('dotenv').config()
// import { PrintArrays } from "./items.mjs";
/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const League = require("./items.js");
const Discord = require('discord.js');
const token = process.env.BOT_TOKEN;
// Create an instance of a Discord client
const client = new Discord.Client();
let champion = "Champion";
// Choose the prefix used in the discord bot
const prefix = '!';

const image = 'https://i.imgur.com/wSTFkRM.png';
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
	console.log('I am ready!');
});
League.SortArrays();
League.PrintArrays();


// Create an event listener for messages
client.on('message', message => {
	if (message.content === `${prefix}ad`) { // ad
		message.channel.send(League.RandomItem("ad"));
	} else if (message.content === `${prefix}adMythic`) { // adMythic
		message.channel.send(League.RandomItem("adMythic"));
	} else if (message.content === `${prefix}ap`) { // ap
		message.channel.send(League.RandomItem("ap"));
	} else if (message.content === `${prefix}apMythic`) { // apMythic
		message.channel.send(League.RandomItem("apMythic"));
	} else if (message.content === `${prefix}apSupport`) { // apSupport
		message.channel.send(League.RandomItem("apSupport"));
	} else if (message.content === `${prefix}adSupport`) { // adSupport
		message.channel.send(League.RandomItem("adSupport"));
	} else if (message.content === `${prefix}miscStarter`) { // miscStarter
		message.channel.send(League.RandomItem("miscStarter"));
	} else if (message.content === `${prefix}apStarter`) { // apStarter
		message.channel.send(League.RandomItem("apStarter"));
	} else if (message.content === `${prefix}adStarter`) { // adStarter 
		message.channel.send(League.RandomItem("adStarter"));
	} else if (message.content === `${prefix}adSet`) { // adSet
		League.ItemSet('ad');

		message.channel.send(League.loadout[1].name);
		message.channel.send(new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(`${champion} AD build`)
			.setURL(image)
			//.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
			.setDescription('Items must be completed in the order posted, other than boots.')
			.setThumbnail('https://i.imgur.com/wSTFkRM.png')
			.addFields({
				name: League.loadout[0].name,
				value: League.loadout[0].emote
			}, {
				name: '\u200B',
				value: '\u200B'
			}, {
				name: League.loadout[1].name,
				value: League.loadout[1].emote,
				inline: true
			}, {
				name: League.loadout[2].name,
				value: League.loadout[2].emote,
				inline: true
			}, {
				name: League.loadout[3].name,
				value: League.loadout[3].emote,
				inline: true
			}, {
				name: League.loadout[4].name,
				value: League.loadout[4].emote,
				inline: true
			}, {
				name: League.loadout[5].name,
				value: League.loadout[5].emote,
				inline: true
			}, {
				name: League.loadout[6].name,
				value: League.loadout[6].emote,
				inline: true
			}, )
			.setTimestamp()
			.setFooter('Made with Discord.JS', 'https://i.imgur.com/wSTFkRM.png'));

	} else if (message.content === `${prefix}apSet`) { // adSet
		League.ItemSet('ap');
		message.channel.send(League.loadout[1].name);
		message.channel.send(new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(`${champion} AP build`)
			.setURL(image)
			//.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
			.setDescription('Items must be completed in the order posted, other than boots.')
			.setThumbnail('https://i.imgur.com/wSTFkRM.png')
			.addFields({
				name: League.loadout[0].name,
				value: League.loadout[0].emote
			}, {
				name: '\u200B',
				value: '\u200B'
			}, {
				name: League.loadout[1].name,
				value: League.loadout[1].emote,
				inline: true
			}, {
				name: League.loadout[2].name,
				value: League.loadout[2].emote,
				inline: true
			}, {
				name: League.loadout[3].name,
				value: League.loadout[3].emote,
				inline: true
			}, {
				name: League.loadout[4].name,
				value: League.loadout[4].emote,
				inline: true
			}, {
				name: League.loadout[5].name,
				value: League.loadout[5].emote,
				inline: true
			}, {
				name: League.loadout[6].name,
				value: League.loadout[6].emote,
				inline: true
			}, )
			.setTimestamp()
			.setFooter('Made with Discord.JS', 'https://i.imgur.com/wSTFkRM.png'));

	}
});

client.login(token); // Either use dotenv (npm install dotenv) and create a .env file with your token, or replace this with your token.