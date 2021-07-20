var Discord = require('discord.js');
var auth = require('./auth.json');
const client = new Discord.Client();
var calculator =require('./functions/calculator')
var bless=require('./functions/gif')
var crit=require('./functions/critcalc')


client.on('ready',function(message){
    console.log('bot is up');

//     var checkminutes = 1440, checkthe_interval = checkminutes * 60 * 1000; //This checks every 10 minutes, change 10 to whatever minute you'd like
//     setInterval(function() {
//         var date=new Date();
//         checkDate=date.toLocaleDateString();
//         bday=functions.checkbday(checkDate);
//         if(bday[1]==1)
//         {
//             client.channels.cache.get('691695334815957045').send(bday[0]);
//                 }
// }, checkthe_interval);
})

client.on("message",function(message)
{
    if(message.author.bot)
    return;
    var prefix="!y"
    if(!message.content.startsWith(prefix))
    return;
   const commandBody = message.content.slice(prefix.length);
   const args = commandBody.split(' ');
   const command = args.shift().toLowerCase();
   if(command==='refresh')
   {
    var resin=calculator.execute(args);
    const Embed = new Discord.MessageEmbed() 
    Embed.setTitle("you have " +args + " resin") 
    Embed.description='your resin will refill in '+ resin[0] + " hours and "+resin[1]+" minutes\n OR in "+ resin[1]*60 +" minutes"
    message.channel.send(Embed)
     }
     else if(command==='blessme')
     {
        var gif=bless.execute()
        const Embed = new Discord.MessageEmbed() 
    Embed.setTitle("You have been blessed") 
    Embed.setImage(gif)
    message.channel.send(Embed)
     }
     else if(command==='crit')
     {
        crit.execute(args,message)
         
     }
     else 
     message.reply("not a valid command")

});
client.login(auth.token)