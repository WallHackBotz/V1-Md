const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Rrsszxx;;;'
                    + 'FN:Rrsszxx\n' // full name
                    + 'ORG:Owner RrsszxxBot;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=62895328255152:+62895328255152\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Rrsszxx', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler