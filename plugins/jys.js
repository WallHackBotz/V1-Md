/**
* jangan ganti ya kakak kakak sekalian
* ini cuma buat ninggalin credit gw doang :)
**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { command }) => {
bear = "Source Code"
ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai Sayangku ${ye} Lagi Nyari Sc Botku Ya:v

Nih Link Sc Nya Dibawah :
Tahap Pengerjaan Ya kakek

_*Sabar Yak Ajg Lagi Gw kerjain Yak!!!*_`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: esce,
           locationMessage: { 
           jpegThumbnail: await (await fetch(fla + bear)).buffer() },           
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '𝙶𝙴𝚃 𝙱𝙾𝚃',
               url: `${ApiiKey}`
             }

           },
               {
             quickReplyButton: {
               displayText: '𝙱𝙰𝙲𝙺 𝚃𝙾 𝙼𝙴𝙽𝚄',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler


