const Discord = require('discord.js');
const CronJob = require('cron').CronJob;
require('dotenv').config();

const announcement = "868640718791536700";

const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    // activity status
    client.user.setActivity('bit.ly/compscilinktree', { type: 'LISTENING' });

    // new member
    client.on('guildMemberAdd', member => {
        client.channels.cache.get("868644512757604372").send(`Welcome ${member}, check out <#868640851578998845>, <#752336985250725888>, <#868641180559233064>, and change your nickname to your real name!`);
        member.roles.add("752342157200719894");
        member.roles.add("752677539243098224");
    });
    
    client.on('guildMemberRemove', member => {
        // client.channels.cache.get("754527701573959790").send(`${member} dipped`);
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



    // var tue330 = new CronJob(
    //     '0 5 23 * * 1',
    //     function(){
    //         // client.channels.cache.get(announcement).send(`Hello <@&752342157200719894>,\n\nMeeting at lunch (12:35) tomorrow! We will be going over the past 2021 US Open then finishing our Rock Paper Scissor Competition.\n\nZoom Link: https://bit.ly/whscompscizoom\nPassword: **compsci**\n\nSee you there!`);
    //         client.channels.cache.get(announcement).send(`<@&752342157200719894> Meeting today at lunch! (if you missed our email, we're switching to Tues instead of Thurs)`);
    //     },
    //     null,
    //     true,
    //     'America/Los_Angeles'
    // );


    var wed1230 = new CronJob(
        '0 0 6 * * 2',
        function(){
            // client.channels.cache.get(announcement).send(`<@&752342157200719894> We're going to be moving our Tue lunch meetings -> **zoom at Sunday 7pm** starting this week! Look out for the link on Sunday`);
            // client.channels.cache.get(announcement).send(`Hi @everyone! **Wear dark colors today and go to the Peforming Arts Center at the start of lunch for club pictures!**`);
        },
        null,
        true,
        'America/Los_Angeles'
    );

    var sun = new CronJob(
        '0 45 11 * * 2', // 0 0 19 * * 0
        function(){
            
            client.channels.cache.get(announcement).send(`Hi @everyone! **Sorry NO Meeting today** a(Mr. Blackford's not here). Happy Holidays! See you next year!!!`);
        },
        null,
        true,
        'America/Los_Angeles'
    );

    // client.channels.cache.get("752334786260893697").send(`Our first meeting will be during Lunch tomorrow (Thursday 9/9) in room F1 (Blackford). See you there!`)

    // USACO start
    // client.channels.cache.get(announcement).send(`**<@&791333902123139143> returns on Friday! (TOMORROW)**: last comp of this *season*\n\nThe 2021 USACO Open contest will begin this Friday. Competitors will have **five hours** to solve three problems; high scorers will receive promotions to the next division, with perfect scorers being promoted in-contest and earning the right to take the next division's contest within the Open competition period. More info here: <http://usaco.org>\n\nAs a reminder, **no discussion** of the problems or the contest is allowed.\n\n<#752339796340244602> has been locked\n\nIf you have questions about the contest, contact the organizers at the email address listed on the website in the contest rules or message an officer.\n\nBest of Luck!!! :cow:`);
    // USACO channel closure message
    // client.channels.cache.get("752339796340244602").send(`:lock:`);



});


