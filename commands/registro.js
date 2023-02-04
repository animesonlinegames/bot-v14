const discord = require('discord.js')
const { MessageSelectMenu, ActionRowBuilder } = require('discord.js')

module.exports = {
	name: 'registro',
	run: async (client, message, args) => {
		message.delete()
		const RankEmbed = new discord.EmbedBuilder()
			.setAuthor({
				name: '» CARGOS DE RANK',
				iconURL: 'https://i.imgur.com/M9kH665.png'
			})
			.setDescription(
				'**Para conquistar cargos você terá que interagir no chat quanto mais conversar com membros mais pontos ganha!**\n\n<@&849769368027136041> Nível 155\n\n<@&849764339081543710> Nível 150\n\n<@&840704469222293535> Nível 100\n\n<@&840701982565728288> Nível 90\n\n<@&840704222386192444> Nível 80\n\n<@&840703457539391488> Nível 70\n\n<@&840703516238020619> Nível 60\n\n<@&840703401444376626> Nível 50\n\n<@&840703335706394654> Nível 40\n\n<@&840703304186200065> Nível 30\n\n<@&840703152528293901> Nível 20\n\n<@&840702890234347550> Nível 10\n\n**OBS: <@&840703335706394654> ganha permissão de anexar ficheiros no <#675087693474168864>**'
			)
			.setColor(client.cor)
		const row = new ActionRowBuilder().addComponents(new MessageSelectMenu()
			.setCustomId('generos')
			.setPlaceholder('Gêneros')
			.addOptions([
				{
					label: 'Homem',
					value: 'Homem'
				},
				{
					label: 'Mulher',
					value: 'Mulher'
				},
				{
					label: 'Não Binário',
					value: 'Não Binário'
				}
			]))
		const row2 = new ActionRowBuilder().addComponents(new MessageSelectMenu()
			.setCustomId('cores')
			.setPlaceholder('Cores')
			.addOptions([
				{
					label: 'Roxo',
					value: 'Roxo'
				},
				{
					label: 'Rosa Choque',
					value: 'Rosa Choque'
				},
				{
					label: 'Vermelho',
					value: 'Vermelho'
				},
				{
					label: 'Preto',
					value: 'Preto'
				},
				{
					label: 'Azul',
					value: 'Azul'
				}, {
					label: 'Ciano',
					value: 'Ciano'
				},
				{
					label: 'Amarelo',
					value: 'Amarelo'
				},
				{
					label: 'Verde',
					value: 'Verde'
				},
				{
					label: 'Carmesim',
					value: 'Carmesim'
				},
				{
					label: 'Laranja',
					value: 'Laranja'
				},
				{
					label: 'Verde Fosco',
					value: 'Verde Fosco'
				},
				{
					label: 'Azul Fosco',
					value: 'Azul Fosco'
				}, {
					label: 'Magenta',
					value: 'Magenta'
				},
				{
					label: 'Branco',
					value: 'Branco'
				}
			]))
		const row3 = new ActionRowBuilder().addComponents(new MessageSelectMenu()
			.setCustomId('sexualidade')
			.setPlaceholder('Sexualidade')
			.addOptions([
				{
					label: 'Hétero',
					value: 'Hétero'
				},
				{
					label: 'LGBTQ+',
					value: 'LGBTQ+'
				}
			]))
		const row4 = new ActionRowBuilder().addComponents(new MessageSelectMenu()
			.setCustomId('idade')
			.setPlaceholder('Idade')
			.addOptions([
				{
					label: '+18',
					value: '+18'
				},
				{
					label: '-18',
					value: '-18'
				}
			]))
		const row5 = new ActionRowBuilder().addComponents(new MessageSelectMenu()
			.setCustomId('pings')
			.setPlaceholder('Notificações')
			.addOptions([
				{
					label: 'Lançamentos Animes',
					value: 'Lançamentos Animes'
				},
				{
					label: 'Lançamentos Hentais',
					value: 'Lançamentos Hentais'
				},
				{
					label: 'Eventos do Servidor',
					value: 'Eventos do Servidor'
				},
				{
					label: 'Novas Parcerias',
					value: 'Novas Parcerias'
				}
			]))
		const embedregistro = new discord.EmbedBuilder()
			.setAuthor({
				name: '» REGISTRANDO-SE',
				iconURL: 'https://i.imgur.com/R3Xa1HX.png'
			})
			.setDescription('Vá em cada menu de acordo com seu registro!')
			.setImage('https://i.imgur.com/8FgkRJA.jpg')
			.setColor(client.cor)
		message.channel.send({
			embeds: [embedregistro],
			components: [row, row4, row3, row2, row5]
		})
		message.channel.send({ embeds: [RankEmbed] })
	}
}
