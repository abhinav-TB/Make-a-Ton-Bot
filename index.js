
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  else if(msg.content === '%website'){
    msg.channel.send('https://makeaton.org/');
  }
  else if(msg.content === '%register'){
    msg.channel.send('register @ https://makeaton.org/registration.html')
  }
  else if(msg.content ==="%checkin"){
      msg.channel.send('check in is opening soon')
      
  }
  else if(msg.content ==="%rules"){
      const package=new MessageEmbed ()
      .setTitle('Rules')
      
      
      msg.channel.send(package);
  }
  
});

client.login('NzY1ODgzNDExMDMzODgyNjQ0.X4bSgg.Vky7sREvaulSShTMI4jkbAXAzkI');