const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});





  
 client.on("ready", () => {
console.log('Code');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'Programmer & Coder',
     details: `Mr DaHoM`,
     url: 'http://twitch.tv/M3roof',
     state: `Simo Network`,
    application_id: '377479790195769345',
     assets: {
        large_image: `377480353259978752`,
        large_text: `DaHoM` }

  }
    });
});

const adminprefix = "//";
const developers = ['487727064192122880'];

console.log("DaHoM");

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}By : DaHoM`)
})

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`تم تغيير البلاينق الى   ${argresult}`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`تَم تغيير الواتشينق الى   ${argresult}`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`تَم تغيير الليسينينق الى   ${argresult}`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Randy");
      message.channel.send(`تم تغييرك حالتك بالتويتش الى   ${argresult}`)
  }
  if (message.content.startsWith(adminprefix + 'sn')) {
  client.user.setUsername(argresult).then
      message.channel.send(`جاري تغيير الأسم لـ ..${argresult} `)
} else
if (message.content.startsWith(adminprefix + 'sa')) {
  client.user.setAvatar(argresult);
    message.channel.send(`جاري تغيير الأفتار... : `);
}
});

  


client.on('guildMemberAdd', member => {
const YossiF = member.guild.channels.get("515275185314856964");//ايدي الشات
if(!YossiF) return;
if(YossiF) {
YossiF.send(`** .# Welcome To Simo Network , :black_heart: **`);          
}
});

client.on('guildMemberAdd', member => {
const YossiF = member.guild.channels.get("514832735676923934");//ايدي الشات
if(!YossiF) return;
if(YossiF) {
YossiF.send(`** .# Welcome To Codes Server , :black_heart: **`);          
}
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('```وعليكم السلام ورحمه الله وبركاته```');
  }
});



client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('```ولكم حياك الله```');
  }
});




client.login(process.env.BOT_TOKEN);
