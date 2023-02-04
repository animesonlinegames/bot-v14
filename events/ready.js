const schedule = require("node-schedule");
const superagent = require("superagent");
const discord = require("discord.js");
const webhookClient = new discord.WebhookClient({
  url: process.env.webhook,
});

module.exports = async (client) => {
  client.user.setActivity("Envie DM para suporte", {
    type: "WATCHING",
  });
  const activities = [
    client.games,
    client.orion,
    client.hd,
    client.sh,
    client.goyabu,
  ];
  let i = 0;
  setInterval(() => {
    client.user.setPresence(
      activities[i++ % activities.length]
        .replace("https://", "")
        .replace("/", ""),
      {
        type: 3,
      }
    );
  }, 15000);
  client.logger.log("> ✅ • Carregado com sucesso [DISCORD]", "success");
  schedulers();

  schedule.scheduleJob("0 12 1 * *", async function () {
    let sv = client.guilds.cache.get("531574473644703744");
    sv.bans
      .fetch()
      .then((bans) => {
        if (bans.size == 0) {
          throw 0;
        }
        bans.forEach((ban) => {
          sv.members.unban(ban.user.id);
        });
      })
      .then(() => 0)
      .catch((e) => console.log(e));
  });

  async function schedulers() {
    client.db.Guilds.findOne(
      { _id: "531574473644703744" },
      function (err, not) {
        not.repschedule.forEach((reps) => {
          schedule.scheduleJob(reps.schedule, async function () {
            webhookClient.send({
              content: `**[ATUALIZAÇÃO]** | Você pode dar uma nova reputação. ||<@${reps._id}>||`,
              username: "Mestre das Reputação",
              avatarURL: "https://i.imgur.com/06Ahjgz.jpeg",
            });
            not.repschedule.pull({ _id: reps._id });
            await not.save();
          });
        });
        not.dailyschedule.forEach((daily) => {
          schedule.scheduleJob(daily.schedule, async function () {
            webhookClient.send({
              content: `**[ATUALIZAÇÃO]** | Você pode resgatar o seu daily e depois me dá-lo, lembre-se você ainda me deve 5000 animecoins. ||<@${daily._id}>||`,
              username: "Jiraiya",
              avatarURL: "https://i.imgur.com/BMHyycM.jpeg",
            });
            not.dailyschedule.pull({ _id: daily._id });
            await not.save();
          });
        });
        not.robschedule.forEach((robs) => {
          schedule.scheduleJob(robs.schedule, async function () {
            webhookClient.send({
              content: `**[ATUALIZAÇÃO]** | Eaí novato, bora assaltar algo ae namoral. ||<@${robs._id}>||`,
              username: "Kazuma Satou",
              avatarURL: "https://i.imgur.com/wUmDQCL.jpeg",
            });
            not.robschedule.pull({ _id: robs._id });
            await not.save();
          });
        });
        not.workschedule.forEach((work) => {
          schedule.scheduleJob(work.schedule, async function () {
            webhookClient.send({
              content: `**[ATUALIZAÇÃO]** | Bó trabalhar? ||<@${work._id}>||`,
              username: "Majime Mitsuya",
              avatarURL: "https://i.imgur.com/BVsBVTR.png",
            });
            not.workschedule.pull({ _id: work._id });
            await not.save();
          });
        });
        not.crimeschedule.forEach((crimes) => {
          schedule.scheduleJob(crimes.schedule, async function () {
            webhookClient.send({
              content: `**[ATUALIZAÇÃO]** | Eaí, tá na hora de fazer uns crimes. ||<@${crimes._id}>||`,
              username: "Danjuro Tobita",
              avatarURL: "https://i.imgur.com/ZJqo64P.jpeg",
            });
            not.crimeschedule.pull({ _id: crimes._id });
            await not.save();
          });
        });
      }
    );
  }
};
