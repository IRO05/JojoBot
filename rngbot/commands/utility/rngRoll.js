const { SlashCommandBuilder } = require('discord.js');
const charObjects = require("../characters/charNames.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rngroll')
		.setDescription('rolls a random character!'),
	async execute(interaction) {
        let roll = charObjects[Math.floor(Math.random() * charObjects.length)];
        
		await interaction.reply(roll.name);
	},
};