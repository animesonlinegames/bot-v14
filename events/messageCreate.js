const discord = require("discord.js");
const Levels = require("discord-xp");

module.exports = async (client, message) => {
  if (message.channel.type === "news") {
    message.crosspost();
  }

  if (
    message.channel.id === "675436978510233667" ||
    message.channel.id === "945002180237201478"
  ) {
    message.react("❤️");
  }

  if (message.channel.id === "842151745383694356") {
    message.react("👍");
    message.react("👎");
  }

  if (message.author.bot) return 0;

  if (
    message.content.includes("http://") ||
    message.content.includes("HTTP://") ||
    message.content.includes("Http://")
  ) {
    if (message.member.permissions.has("BanMembers")) return 0;
    message.delete();
    message.reply({
      content:
        "Esses sites com protocolo http normalmente são perigosos e podem roubar dados, estaremos proibindo este tipo de 5s por aqui.",
    });
    const reason = "Site com Protocolo HTTP";
    client.db.Users.findOne({ _id: message.author.id }, function (err, doc) {
      if (doc) {
        doc.punishments.autobot.push(reason);
        doc.save();
      }
      if (!doc) {
        const docToSave = new client.db.Users({
          _id: message.author.id,
          punishments: { autobot: [reason] },
        });
        docToSave.save();
      }
    });
  }

  const convite =
    /((discord|invite)\.(gg|io|me|plus|5|io|gg|li)|discordapp\.com\/invite)\/.+/gi.test(
      message.content
    );

  if (convite === true && message.channel.id !== "998021891962970113") {
    if (message.member.permissions.has("BanMembers")) return 0;
    const inviteCodeRegexResult =
      /((discord|invite)\.(gg|io|me|plus|5|io|gg)|discordapp\.com\/invite)\/?([a-zA-Z0-9-]{2,32})/gi.exec(
        message.content
      );
    const code = inviteCodeRegexResult && inviteCodeRegexResult[4];
    const dosv = await message.guild.invites.fetch();
    if (code && dosv.has(code)) return 0;

    message.delete();
    message.channel.send({
      content: `<@${message.author.id}> O seu invite foi removido, aconselho a ler as <#675089976593088517> para evitar acontecer futuras punições!`,
    });
    const reason = "Invite de outro servidor!";
    client.db.Users.findOne({ _id: message.author.id }, function (err, doc) {
      if (doc) {
        doc.punishments.autobot.push(reason);
        doc.save();
      }
      if (!doc) {
        const docToSave = new client.db.Users({
          _id: message.author.id,
          punishments: { autobot: [reason] },
        });
        docToSave.save();
      }
    });
  }

  if (
    message.content.includes("animeyabu") ||
    message.content.includes("goyabu.com") ||
    message.content.includes("anitube") ||
    message.content.includes("animesorionoficial") ||
    message.content.includes("betteranime") ||
    message.content.includes("better anime") ||
    message.content.includes("animefire") ||
    message.content.includes("animesonline.cc") ||
    message.content.includes("meusanimes") ||
    message.content.includes("assistirhentai") ||
    message.content.includes("nhentai") ||
    message.content.includes("animesbrasil") ||
    message.content.includes("hentaitube")
  ) {
    message.reply({ content: "Mencionar isso não é permitido!" });
    message.delete();
    const reason = "Concorrência";
    const member = message.guild.member(message.author);
    client.db.Users.findOne({ _id: message.author.id }, function (err, doc) {
      if (doc) {
        doc.punishments.autobot.push(reason);
        doc.save();
        if (doc.punishments.autobot.length > 3) {
          member.ban({
            reason: "Punido por Watch Dogs, Sistema automático.",
            days: 1,
          });
        }
      }
      if (!doc) {
        const docToSave = new client.db.Users({
          _id: message.author.id,
          punishments: { autobot: [reason] },
        });
        docToSave.save();
      }
    });
  }

  if (message.channel.id === "900459492922249226") {
    if (message.member.permissions.has("BanMembers")) return 0;
    if (!message.content.includes("https://")) {
      return message
        .reply({
          content:
            "Faça o seu reporte mais preciso, é preciso um 5 para nossa equipe saber o problema, cumpra o exemplo enviado na primeira mensagem do canal.",
        })
        .then((msg) => {
          setTimeout(() => msg.delete(), 30000);
        });
    }
  }

  if (message.guild == null && message.author.id !== "911372921488953354") {
    client.channels.cache.get("960576668228014100").send({
      content: `<@${message.author.id}> ${
        message.author.id
      } DM - ${message.content.replace(/(@here|@everyone)/g, "")}`,
    });
  }

  Levels.setURL(
    `mongodb+srv://${process.env.db}:${process.env.db}@cluster0-ovyzb.gcp.mongodb.net/test?retryWrites=true&w=majority`
  );

  if (
    message.content.startsWith("boa tarde") ||
    message.content.startsWith("Boa tarde")
  ) {
    message.reply("Boa tarde");
  }

  if (
    message.content.startsWith("boa noite") ||
    message.content.startsWith("Boa noite")
  ) {
    message.reply("Boa noite");
  }

  if (
    message.content.startsWith("Bom dia") ||
    message.content.startsWith("bom dia")
  ) {
    message.reply("Bom dia");
  }

  if (
    message.content.startsWith("Te amo bot") ||
    message.content.startsWith("te amo bot")
  ) {
    message.reply("Também te amo seu gasoso");
  }
  if (message.content.startsWith("bot") || message.content.startsWith("Bot")) {
    if (message.content.includes("lindo")) {
      message.reply("Você é a minha beleza, meu bem!");
    }

    if (message.content.includes("gostoso")) {
      message.reply(
        "Quando você era bebê você era lindo e dengoso, agora que você já é um homem você é sexy e gostoso."
      );
    }

    if (message.content.includes("manda")) {
      message.reply("Claro que mando!");
    }

    if (message.content.includes("faz")) {
      message.reply("Claro que faço!");
    }

    if (message.content.includes("chato") || message.content.includes("lixo")) {
      message.reply(
        "<:urso_nervoso:837571596322996274> <:urso_nervoso:837571596322996274> <:urso_nervoso:837571596322996274> EU TENHO SENTIMENTOS TÁ???"
      );
    }
  }
  if (message.channel.id === "675097622008037392") {
    if (attachment.builders.size > 0) {
      const emojis = [
        "😀",
        "😃",
        "😄",
        "😁",
        "😆",
        "🤣",
        "☺️",
        "😊",
        "😇",
        "🙂",
        "🙃",
        "😉",
        "😌",
        "😍",
        "😘",
        "😗",
        "😙",
        "😚",
        "😋",
        "😜",
        "😝",
        "😛",
        "🤑",
        "🤗",
        "🤓",
        "😎",
        "🤡",
        "🤠",
        "😏",
        "😒",
        "😞",
        "😔",
        "😟",
        "😕",
        "🙁",
        "☹️",
        "😣",
        "😖",
        "😫",
        "😩",
        "😤",
        "😠",
        "😡",
        "😶",
        "😐",
        "😑",
        "😯",
        "😦",
        "😧",
        "😮",
        "😲",
        "😵",
        "😳",
        "😱",
        "😨",
        "😰",
        "😢",
        "😥",
        "🤤",
        "😭",
        "😓",
        "😪",
        "😴",
        "🙄",
        "🤔",
        "🤥",
        "😬",
        "🤐",
        "🤢",
        "🤧",
        "😷",
        "🤒",
        "🤕",
        "😈",
        "👿",
        "👹",
        "👺",
        "💩",
        "👐",
        "🙌",
        "👏",
        "🙏",
        "🤝",
        "👍",
        "👎",
        "👊",
        "✊",
        "🤛",
        "🤜",
        "🤞",
        "✌️",
        "🤘",
        "👌",
        "👈",
        "👉",
        "👆",
        "👇",
        "☝️",
        "✋",
        "🤚",
        "🖐",
        "👋",
        "🤙",
        "💪",
        "🖕",
        "👀",
        "💃",
        "👑",
      ];
      message.react(emojis[Math.floor(Math.random() * emojis.length)]);
    }
  }
  if (message.channel.id === "872219214033866782") {
    message.react("⭐");
  }

  if (message.channel.id === "675087693474168864") {
    if (message.content.length < 9) return 0;
    const randomXp =
      Math.floor(
        Math.random() * message.member.roles.cache.has("654435562295656478")
          ? 29
          : 19
      ) + 1;
    const hasLeveledUp = await Levels.appendXp(
      message.author.id,
      message.guild.id,
      randomXp
    );
    if (hasLeveledUp) {
      const user = await Levels.fetch(message.author.id, message.guild.id);
      let MembroUpouEmbed = new discord.EmbedBuilder()
        .setAuthor({
          name: `» Parabéns pelo seu novo nível! ${user.level - 1} ==> ${
            user.level
          }`,
          iconURL: "https://i.imgur.com/AwNWt0l.png",
        })
        .setImage("https://i.imgur.com/Mn2mWN5.png")
        .setColor(client.cor);
      let role;
      if (user.level === 10) {
        role = message.member.guild.roles.cache.find(
          (role) => role.id == "840702890234347550"
        );
        message.guild.members.cache.get(message.author.id).roles.add(role);
      }
      if (user.level === 20) {
        role = message.member.guild.roles.cache.find(
          (role) => role.id == "840703152528293901"
        );
        message.guild.members.cache.get(message.author.id).roles.add(role);
      }
      if (user.level === 30) {
        role = message.member.guild.roles.cache.find(
          (role) => role.id == "840703304186200065"
        );
        message.guild.members.cache.get(message.author.id).roles.add(role);
      }
      if (user.level === 40) {
        role = message.member.guild.roles.cache.find(
          (role) => role.id == "840703335706394654"
        );
        message.guild.members.cache.get(message.author.id).roles.add(role);
      }
      if (user.level === 50) {
        role = message.member.guild.roles.cache.find(
          (role) => role.id == "840703401444376626"
        );
        message.guild.members.cache.get(message.author.id).roles.add(role);
      }
      if (user.level === 60) {
        role = message.member.guild.roles.cache.find(
          (role) => role.id == "840703516238020619"
        );
        message.guild.members.cache.get(message.author.id).roles.add(role);
      }
      if (user.level === 70) {
        role = message.member.guild.roles.cache.find(
          (role) => role.id == "840703457539391488"
        );
        message.guild.members.cache.get(message.author.id).roles.add(role);
      }
      if (user.level === 80) {
        role = message.member.guild.roles.cache.find(
          (role) => role.id == "840704222386192444"
        );
        message.guild.members.cache.get(message.author.id).roles.add(role);
      }
      if (user.level === 90) {
        role = message.member.guild.roles.cache.find(
          (role) => role.id == "840701982565728288"
        );
        message.guild.members.cache.get(message.author.id).roles.add(role);
      }
      if (user.level === 100) {
        role = message.member.guild.roles.cache.find(
          (role) => role.id == "840704469222293535"
        );
        message.guild.members.cache.get(message.author.id).roles.add(role);
      }
      if (user.level === 150) {
        role = message.member.guild.roles.cache.find(
          (role) => role.id == "849764339081543710"
        );
        message.guild.members.cache.get(message.author.id).roles.add(role);
      }
      if (user.level === 155) {
        role = message.member.guild.roles.cache.find(
          (role) => role.id == "849769368027136041"
        );
        message.guild.members.cache.get(message.author.id).roles.add(role);
      }
      message.reply({ embeds: [MembroUpouEmbed] });
    }
  }

  if (!message.member.permissions.has("KickMembers")) return;

  const prefix = "a!";

  if (
    !message.content.startsWith(prefix) ||
    message.author.bot ||
    message.channel.type === "dm"
  ) {
    return;
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmda = args.shift().toLowerCase();
  const command =
    client.commands.get(cmda) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(cmda));
  if (!command) return;

  try {
    command.run(client, message, args);
  } catch (error) {
    message.reply({ content: "Houve um erro ao executar esse comando!" });
  }
};
