const discord = require("discord.js");

module.exports = {
  name: "banco",
  description: "Veja a sua carteira",
  category: "economia",
  run: async (interaction, client) => {
    interaction.reply({
      content:
        "Este bot atualmente está obtendo comandos limitados.\n\nPorém você pode jogar uma economia parecida e até de forma melhorada em [.gg/foryou](https://discord.com/servers/for-you-856873114926972929)",
      ephemeral: true,
    });
  },
};
