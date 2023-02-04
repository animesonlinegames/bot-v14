const discord = require('discord.js')

module.exports = {
  name: 'requisitos',
  run: async (client, message, args) => {
    message.delete()
    const RankEmbed = new discord.EmbedBuilder()
      .setAuthor({
        name: '» REQUISITOS PARA PARCERIA',
        iconURL: 'https://i.imgur.com/YeKK1Ia.png'
      })
      .setDescription(
        '<a:shipship:825197452428312617> Para fechar uma parceria confira se seu servidor segue os requisitos, se sim marque <@&998021957662539808> no <#998022628386295820>.\n\n<a:rainbowleft:840243723958222868> Ter mais de 300 membros\n<a:rainbowleft:840243723958222868> Ping ou Everyone/Here\n<a:rainbowleft:840243723958222868> Representante\n<a:rainbowleft:840243723958222868> Canal para parcerias\n<a:rainbowleft:840243723958222868> Respeitar a [TOS](https://discord.com/terms)\n\n`Não aceitamos servidores de rewards/store, caso você saia sua parceria será anulada.`'
      )
			.setImage("https://i.imgur.com/6LQf9L9.png")
      .setColor(client.cor)
    message.channel.send({ embeds: [RankEmbed] })
  }
}
