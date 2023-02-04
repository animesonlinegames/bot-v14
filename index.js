const discord = require('discord.js')
require('dotenv').config()

const client = new discord.Client({
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  intents: 3276799,
  cacheWithLimits: {
    MessageManager: {
      sweepInterval: 300,
      sweepFilter: discord.Sweepers.filterByLifetime({
        lifetime: 60,
        getComparisonTimestamp: (m) => m.editedTimestamp ?? m.createdTimestamp
      })
    }
  }
})

client.db = require('./database.js');
client.cor = '#27AE60'
client.games = 'https://animesonline.games/'
client.orion = 'https://animesorionvip.com/'
client.hd = 'https://myanimelist.vip/'
client.goyabu = 'https://goyabuvip.com/'
client.sh = 'https://superhentaisvip.net/'
client.ok = 'https://i.imgur.com/01u54sR.png'
client.warn = 'https://i.imgur.com/8gktqyJ.png'
client.err = 'https://i.imgur.com/NGy07fZ.png'
client.welcome = '675087693474168864'
client.logger = require('./Utils/logger')
client.commands = new discord.Collection()
client.aliases = new discord.Collection()
client.slash = new discord.Collection()
client.msg = {
  content: {
    invalid: "4lg0 deu errad0 n0 meu s1stema, b1p-bup!"
  }
}
const Levels = require('discord-xp')
Levels.setURL(
  `mongodb+srv://${process.env.db}:${process.env.db}@cluster0-ovyzb.gcp.mongodb.net/test?retryWrites=true&w=majority`
)

require('./handlers/commands')(client)
require('./handlers/events')(client)
require('./handlers/slash')(client)
require('./slash')

client.on('error', (error) => client.logger.log(error, 'error'))
client.on('warn', (info) => client.logger.log(info, 'warn'))
process.on('unhandledRejection', error => console.log(error));
process.on('uncaughtException', error => {
    console.log(error);
}); 

client.on("rateLimit", data => {
  if (data.timeout > 1000) process.kill(1)
})

client.login(process.env.token).catch(() => {
  client.logger.log('Token Inválido!', 'warn')
})
