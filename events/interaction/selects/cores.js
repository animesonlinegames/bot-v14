module.exports = async (client, interaction) => {
  const member = interaction.member
  let role
  switch (interaction.values[0]) {
    case 'Roxo':
      role = interaction.guild.roles.cache.get('840723322764394537')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case 'Rosa Choque':
      role = interaction.guild.roles.cache.get('840723416931106856')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case 'Vermelho':
      role = interaction.guild.roles.cache.get('840723494144835588')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case 'Preto':
      role = interaction.guild.roles.cache.get('840723569088266270')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case 'Azul':
      role = interaction.guild.roles.cache.get('840723611110473749')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case 'Ciano':
      role = interaction.guild.roles.cache.get('840723858994626601')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case 'Amarelo':
      role = interaction.guild.roles.cache.get('840723801862963221')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case 'Verde':
      role = interaction.guild.roles.cache.get('840723709525360700')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case 'Carmesim':
      role = interaction.guild.roles.cache.get('840723938320318494')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case 'Laranja':
      role = interaction.guild.roles.cache.get('840724324147396629')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case 'Verde Fosco':
      role = interaction.guild.roles.cache.get('840724452605820969')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case 'Azul Fosco':
      role = interaction.guild.roles.cache.get('840724720596680704')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case 'Magenta':
      role = interaction.guild.roles.cache.get('840724928776634429')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case 'Branco':
      role = interaction.guild.roles.cache.get('840724965308760135')
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
  }
  interaction.reply({
    content: 'Operação realizada com sucesso.',
    ephemeral: true
  })
}
