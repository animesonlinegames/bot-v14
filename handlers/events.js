const fs = require('fs')

module.exports = (client) => {
  const eventFiles = fs.readdirSync('./events/').filter((file) => file.endsWith('.js'))

  for (const file of eventFiles) {
    try {
      const event = require(`../events/${file}`)
      event.event = event.event || file.replace('.js', '')
      client.on(file.split('.')[0], (...args) => event(client, ...args))
      client.logger.log(`> ➕ • Evento ${file.replace('.js', '')} foram carregados.`, 'event')
    } catch (err) {
      client.logger.log('Erro enquanto carregava', 'warn')
      client.logger.log(err, 'error')
    }
  }
  client.logger.log('> ✅ • Carregado com sucesso [EVENTO]', 'success')
}
