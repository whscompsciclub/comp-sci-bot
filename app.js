const Discord = require('discord.js');
const CronJob = require('cron').CronJob;
require('dotenv').config();

const announcement = "752336602570686554";

const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    // activity status
    client.user.setActivity('bit.ly/compscilinktree', { type: 'WATCHING' });


    // client.channels.cache.get("868644512757604372").send(`?`);


    // new member
    client.on('guildMemberAdd', async member => {
        console.log("howdy")
        client.channels.cache.get("868644512757604372").send(`Welcome`);
    });
    

    // Adding reaction-role function
    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == '868641180559233064') {
            if (reaction.emoji.name === '🐦') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('752606031988785192');
            }
            if (reaction.emoji.name === '1️⃣') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('753687984091693067');
            }
            if (reaction.emoji.name === '2️⃣') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('753688089959989259');
            }
            if (reaction.emoji.name === '3️⃣') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('753688141252001812');
            }
            if (reaction.emoji.name === '📷') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('764607752554938378');
            }
            if (reaction.emoji.name === '🕘') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('771150360425398302');
            }
            if (reaction.emoji.name === '🕙') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('771150352107044865');
            }
            if (reaction.emoji.name === '🕚') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('771150354166710292');
            }
            if (reaction.emoji.name === '🕛') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('771150358164668436');
            }
            if (reaction.emoji.name === '🧠') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add('791333902123139143');
            }
        } else return;
    });

    // Removing reaction roles
    client.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == '868641180559233064') {
            if (reaction.emoji.name === '🐦') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('752606031988785192');
            }
            if (reaction.emoji.name === '1️⃣') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('753687984091693067');
            }
            if (reaction.emoji.name === '2️⃣') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('753688089959989259');
            }
            if (reaction.emoji.name === '3️⃣') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('753688141252001812');
            }
            if (reaction.emoji.name === '📷') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('764607752554938378');
            }
            if (reaction.emoji.name === '🕘') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('771150360425398302');
            }
            if (reaction.emoji.name === '🕙') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('771150352107044865');
            }
            if (reaction.emoji.name === '🕚') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('771150354166710292');
            }
            if (reaction.emoji.name === '🕛') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('771150358164668436');
            }
            if (reaction.emoji.name === '🧠') {
                await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove('791333902123139143');
            }
        } else return;
    });


    // Tuesday 3:30pm
    // var tue330 = new CronJob(
    //   '0 30 15 * * 2',
    //   function(){
    //       client.channels.cache.get(announcement).send(`Hello @everyone,\n\nMeeting at lunch (12:35) tomorrow! We will be going over the past 2021 US Open then finishing our Rock Paper Scissor Competition.\n\nZoom Link: https://bit.ly/whscompscizoom\nPassword: **compsci**\n\nSee you there!`);
    //   },
    //   null,
    //   true,
    //   'America/Los_Angeles'
    // );

    // // Wednesday 12:30pm
    // var wed1230 = new CronJob(
    //     '0 30 12 * * 3',
    //     function(){
    //         client.channels.cache.get(announcement).send(`@everyone Meeting in 5 minutes!`);
    //     },
    //     null,
    //     true,
    //     'America/Los_Angeles'
    //   );

    // USACO start
    // client.channels.cache.get(announcement).send(`**<@&791333902123139143> returns on Friday! (TOMORROW)**: last comp of this *season*\n\nThe 2021 USACO Open contest will begin this Friday. Competitors will have **five hours** to solve three problems; high scorers will receive promotions to the next division, with perfect scorers being promoted in-contest and earning the right to take the next division's contest within the Open competition period. More info here: <http://usaco.org>\n\nAs a reminder, **no discussion** of the problems or the contest is allowed.\n\n<#752339796340244602> has been locked\n\nIf you have questions about the contest, contact the organizers at the email address listed on the website in the contest rules or message an officer.\n\nBest of Luck!!! :cow:`);
    // USACO channel closure message
    // client.channels.cache.get("752339796340244602").send(`:lock:`);



});


