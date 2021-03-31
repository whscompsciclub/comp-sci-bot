const Discord = require('discord.js');
const CronJob = require('cron').CronJob;
require('dotenv').config();

const announcement = "752336602570686554";

const client = new Discord.Client();  
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    client.user.setActivity('bit.ly/compscilinktree', { type: 'WATCHING' });

    // Tuesday 3:30pm
    // var tue330 = new CronJob(
    //   '0 30 15 * * 2',
    //   function(){
    //       client.channels.cache.get(announcement).send(`Hello @everyone,\n\nMeeting at lunch (12:35) tomorrow! We will be using Python to create algorithms to beat other bots in a rock paper scissors round-robin tournament.\n\nZoom Link: https://bit.ly/whscompscizoom\nPassword: **compsci**\n\nSee you there!`);
    //   },
    //   null,
    //   true,
    //   'America/Los_Angeles'
    // );

    // Wednesday 12:30pm
    var wed1230 = new CronJob(
        '0 30 12 * * 3',
        function(){
            client.channels.cache.get(announcement).send(`@everyone Meeting in 5 minutes!`);
        },
        null,
        true,
        'America/Los_Angeles'
      );

    // USACO start
    // client.channels.cache.get(announcement).send(`@everyone US Open has opened ...`);
    // USACO channel closure message
    // client.channels.cache.get("752339796340244602").send(`Channel Locked 🔒`);
});


