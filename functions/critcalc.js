var Discord = require('discord.js');
const client = new Discord.Client();


function execute(args,message)
{
    first=args[0].split('/');
    second=args[1].split('/');
    ratio1=1+(first[0]*first[1])
    ratio2=1+(second[0]*second[1])
    ratio=0,chk=0;
    if(ratio1>ratio2)
    {
        ratio=(ratio1-ratio2)/ratio1;
        chk=0
    }
    else if(ratio2>ratio1)
    {
        ratio=(ratio2-ratio1)/ratio2;
        chk=1
    }
    else
    {
        message.channel.send("Both ratios are equal")
        return
    }
    ratio=ratio*100;
    const rounded=Math.round(ratio*100)/100;
    if(chk=1)
         {
            better=args[0];
            worse=args[1]
         }
     
    else
         {
            better=args[1]
            worse=args[0]
         }
    const Embed = new Discord.MessageEmbed() 
      Embed.setTitle(better+" is better than "+worse+" by " + rounded+"%") 
      Embed.setColor('#AD9FB4')
      message.channel.send(Embed)
    
}
module.exports={execute}