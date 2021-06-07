 const Discord = require('discord.js');
const ayar = require('../ayarlar.json');//

exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setDescription(`:sparkles: **İrongard Yardım Menüsü** :sparkles:
**› g.ip** <\`Sunucunun İP Sini Atar.(Spam Atmayın Lütfen)\`>
**› g.site** <\`Sunucuya Ait Siteyi Atar. (Spam Atmayın Lütfen)\`>
**› g.helper** <\`.helper Yazarak Yazarak Destek Alabilirsiniz. (Sadece Ticket kanalında Kullanın Lütfen) \`>




`)
.setImage("https://cdn.discordapp.com/attachments/835658124995854349/848294959698411530/standard_8.gif")
.setFooter("© 2021 Play.İrongard.Org Tüm Haklar Saklıdır.")//Embedin Altı
message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['help'],
    permLevel: 0,  
  };
  
  exports.help = {
    name: 'yardım',
    description: 'Yardım Komutu',
    usage: 'prefix + yardım ',
  };