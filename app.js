const Discord = require('discord.js');
// const schedule = require('node-schedule');
const CronJob = require('cron').CronJob;
require('dotenv').config();

const offtopic = "754527701573959790";
const announcement = "752336602570686554";


const client = new Discord.Client();  
client.login(process.env.BOT_TOKEN);

// Tuesday 3pm

// const tue3 = schedule.scheduleJob('0 15 * * 2', function(){
//     console.log("0 15 * * 2 | Tuesday 3pm");
//     client.channels.cache.get(offtopic).send(`0 15 * * 2 | Tuesday 3pm`);
// });

// Wednesday 12:30pm

// const wed1230 = schedule.scheduleJob('30 12 * * 3', function(){
//     console.log("30 12 * * 3 | Wednesday 12:30pm");
//     client.channels.cache.get(offtopic).send(`30 12 * * 3 | Wednesday 12:30pm`);
// });

// test Thursday 2:15pm

// const job = schedule.scheduleJob('21 14 * * 4', function(){
//     console.log("18 14 * * 4");
//     client.channels.cache.get(announcement).send(`21 14 * * 4 | Thursday 2:21pm`);
// });

client.on('ready', () => {
    console.log(`I am online, my name is ${client.user.username}`);

    client.user.setActivity('bit.ly/compscilinktree', { type: 'WATCHING' });

    // Tuesday 3pm
    var tue3 = new CronJob(
      '0 0 15 * * 2',
      function(){
          console.log("0 0 15 * * 2 | Tuesday 3pm");
          client.channels.cache.get(offtopic).send(`0 0 15 * * 2 | Tuesday 3pm`);
      },
      null,
      true,
      'America/Los_Angeles'
    );

    // Wednesday 12:30pm
    var wed1230 = new CronJob(
        '0 30 12 * * 3',
        function(){
            console.log("0 30 12 * * 3 | Wednesday 12:30pm");
            client.channels.cache.get(offtopic).send(`0 30 12 * * 3 | Wednesday 12:30pm`);
        },
        null,
        true,
        'America/Los_Angeles'
      );

    // test Thursday 2:40pm
    var job = new CronJob(
        '0 45 14 * * 4',
        function(){
            console.log("0 45 14 * * 4 | Thursday 2:45pm | Scheduled 10 mins ago");
            client.channels.cache.get(offtopic).send(`0 45 14 * * 4 | Thursday 2:45pm | Scheduled 10 mins ago`);
        },
        null,
        true,
        'America/Los_Angeles'
    );

    // tue3();
    // wed1230();
    // job();

    // // date stuff
    // var date = new Date();
    // var now = new Date(date.setTime(date.getTime() - (7 * 60 * 60 * 1000)));
    // // console.log(now.toLocaleString('en-US'));
    // // console.log(now.getDay())
    // // console.log(now.getHours())
    // // console.log(now.getMinutes())

    // if(now.getDay() == 2){ // tuesday
    //     if(now.getHours() == 15){ // 3pm
    //         if(now.getMinutes() == 0){ // 0mins
    //             console.log("tue 3:00pm")
    //             client.channels.cache.get(announcement).send("Hey @everyone,\n\n");
    //         }
    //     }
    // }

    // if(now.getDay() == 3){ // wednesday
    //     if(now.getHours() == 12){ // 12pm
    //         if(now.getMinutes() == 30){ // 30mins
    //             console.log("wed 12:30pm")
    //             client.channels.cache.get(announcement).send("@everyone Meeting in 5 minutes");
    //         }
    //     }
    // }

    // // boolean once = false;
    // if(now.getDay() == 3) {// && !once){
    //     if(now.getHours() == 13){
    //         if(now.getMinutes() == 46){
    //             console.log("wed 1:00")
    //             client.channels.cache.get(offtopic).send("its 140pm");
    //             setTimeout(1000);
    //             // once = true;
    //         }
    //     }
    // }
    

    // // specific channel
    // if(1 == 2){
    //     client.channels.cache.get(offtopic).send(`I am online, my name is ${client.user.username}`);
    // }

    // message embed
    // const embed = new Discord.MessageEmbed()
    // .setTitle('Test Title')
    // .setColor(0x69f0ae)
    // .setAuthor()
    // .setDescription('Test description');

    // client.channels.cache.get(offtopic).send("@ everyone Meeting in 5 minutes");

    // client.channels.cache.get(offtopic).send("Hello @everyone,\n", {embed: {
    //     content: "Hello @everyone,\n",
    //     color: "0x69f0ae",
    //     author: {
    //       name: "WHS Computer Science Club | Meeting 03/16/21",
    //       icon_url: "https://cdn.discordapp.com/icons/750556186247692369/cceaf85821f7fbc8af688a7e1b2f0ac4.png?size=256"
    //     },
    //     title: "Image Classification in ML",
    //     url: "http://google.com", // do we need this?
    //     description: "Hello @everyone, \nHIHIHII",
    //     fields: [{
    //         name: "Fields",
    //         value: "They can have different fields with small headlines."
    //       },
    //       {
    //         name: "Masked links",
    //         value: "You can put [masked links](http://google.com) inside of rich embeds."
    //       },
    //       {
    //         name: "Markdown",
    //         value: "You can put all the *usual* **__Markdown__** inside of them."
    //       }
    //     ],
    //     timestamp: new Date(),
    //     footer: {
    //     //   icon_url: client.user.avatarURL,
    //       text: "Linktree",
    //     }
    //   }
    // });
    // client.channels.cache.get(offtopic).send(embed);
});


