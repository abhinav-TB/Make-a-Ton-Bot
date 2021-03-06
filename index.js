const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
  console.log('The client is ready!')

  command(client, 'create_team', (message) => {
    const name = message.content.replace('%create_team ', '')
    const everyoneRole = message.guild.roles.cache.get(message.guild.id)
    let role = message.guild.roles.cache.find(r => r.name === "hacker");

    message.guild.channels.create(name, {
      type: 'text',userLimit:5
  
    })
    .then((channel) => {
      const categoryId = '766326100754169896'
      channel.setParent(categoryId)
      channel.overwritePermissions(
        [
          {
            id:role.id,
            deny:['VIEW_CHANNEL']
          },
          {
            id:message.author.id,
            allow:['VIEW_CHANNEL']
          }
        ]
      );
      
        
      })
    
      message.guild.channels.create(name, {
        type: 'voice',
    
      })
      .then((channel) => {
        const categoryId = '766326100754169896'
        channel.setParent(categoryId)
        channel.overwritePermissions(
          [
            {
              id:role.id,
              deny:['VIEW_CHANNEL']
            },
            {
              id:message.author.id,
              allow:['VIEW_CHANNEL']
            }
          ]
        );
        
          
        })
  
  
      
     message.channel.send("team formation succesfull")
  })

  command(client, 'website', (message) => {
    message.channel.send("https://makeaton.org/");
  })

  command(client, 'register', (message) => {
    message.channel.send("https://makeaton.org/");
  })

  command(client, 'add', (message) => {
    const id = message.content.replace('%add ', '');
    message.channel.updateOverwrite(
      id, { VIEW_CHANNEL: true }
    )
    .then((mssg)=>{
      message.channel.send("successfully added your team member")
    })
    .catch((err)=>{
      console.log(err);
      message.channel.send("invalid id")
    })
  })
  
  


    
})

client.login(config.token)