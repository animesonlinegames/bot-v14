const { EmbedBuilder } = require("discord.js");

module.exports = async (client, interaction) => {
  if (interaction.isCommand()) {
    if (!client.slash.has(interaction.commandName)) return;
    if (!interaction.guild) return;
    const command = client.slash.get(interaction.commandName);
    try {
      if (command.permissions) {
        if (!interaction.member.permissions.has(command.permissions)) {
          const embed = new EmbedBuilder()
            .setTitle("Falta de permissão")
            .setDescription(
              `:x: Você precisa de \`${command.permissions}\` para usar este comando`
            )
            .setColor(client.cor)
            .setTimestamp();
          return interaction.reply({ embeds: [embed], ephemeral: true });
        }
      }
      if (command.devs) {
        if (interaction.member.id === "354233941550694400") {
          return interaction.reply({
            content: "Nananinanão! Apenas desenvolvedores podem acessar isto!",
            ephemeral: true,
          });
        }
      }
      command.run(interaction, client);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content:
          "Ocorreu um estranho erro no meu terminal para este comando...",
        ephemeral: true,
      });
    }
  }
  if (interaction.isSelectMenu()) {
    const path = "../events/interaction/selects/";
    if (interaction.customId === "cores")
      require(path + "cores")(client, interaction);
    if (interaction.customId === "generos")
      require(path + "generos")(client, interaction);
    if (interaction.customId === "idade")
      require(path + "idade")(client, interaction);
    if (interaction.customId === "sexualidade")
      require(path + "sexualidade")(client, interaction);
    if (interaction.customId === "pings")
      require(path + "pings")(client, interaction);
  }
};
