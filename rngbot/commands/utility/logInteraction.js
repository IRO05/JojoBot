const {SlashCommandBuilder} = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()
        .setName("loginteraction")
        .setDescription("logs all the information about the person who called this command to the terminal"),
    async execute(interaction){

        console.log(interaction)
        await interaction.reply("Done")

    }

}