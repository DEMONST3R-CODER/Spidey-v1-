/*

# Base By Devorsixcore
# Owner ? : t.me/imdevorsix
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['2349153596300']
global.ownMain = '2349153596300 '
global.NamaOwner = 'シ︎𝓚𝓲𝓷𝓰👑 ༒︎𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙༒︎💀' //gausah diganti
global.sessionName = 'sessionnya'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = 'Spidey v1' //ganti aj klo mau
global.author = 'qシ︎𝓚𝓲𝓷𝓰👑 ༒︎𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙༒︎💀 Himself' //ganti aj klo mau
global.packname = 'Spidey v1' //ganti aj klo mau
global.url1 = '' //gausah diganti
global.url2 = 'https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01' //gausah diganti
global.linkgc = 'https://chat.whatsapp.com/FFKYbOjrvGx2udsqJ6oYlc'
global.delayjpm = 3500

global.mess = { // Custom Sesuka Lu
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not シ︎𝓚𝓲𝓷𝓰👑 ༒︎𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙༒︎💀.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success Bang',
bugrespon: `Processs.....`
}

global.nick = { // Custom Sesuka Lu
aaa: "⭑̤⟅̊༑ 𝐓͜͡𝐝͜𝐗͡🚯⃟ꢵ 𝐓͜͡𝐑͡𝚫͜͡𝐒͜𑪋͜͝𝐇͡ 𝐃͜𝐢͡𝐕͜𝐢͡𝐒͜𝐢𝐎͜͡𝐍͡  ༑̴⟆̊⿻‏‎‏‎‏‎‏",
bbb: "🦠̂⃟꙳͙͡༑ᐧ 𝐃𝐄𝐕𝐎̸𝐑͙𝐒𝐢𝐗̸𝐂 - 𝐓𝐝𝐗 ᐧ ༑꙳͆⃟💚̺⃰",
ccc: "☠️⃟ ̊ ̥ ༚𐨁𝐃𝐄𝐕𝐎̸𝐑͙𝐒𝐢𝐗̸𝐂𝐎̊𝐑𝐄 ̥ ̊ ༚👻⃰ꢵ⭑𝐓𝐫𝐚𝐬𝐡𝐃𝐞𝐱 𝂼઼🏳️⃰͜🏴‍☠️🏳️͜★ 𝐓͙͡𝐝͢𝐗͙ ꢵ ✩ ‌‌‌‌‌‌‌‌‌‌‌",
ddd: "🩸⃰͜͡⭑𝐓𝐝͢𝐗⭑͜͡🩸⃰",
eee: "*👑༘⃰༡͜͡ⅅⅇ̄𝕧̷𝕠̤𝕣̵𝕤̊ⅈ͓߲𝕩𝕔𝕠̷̲𝕣ⅇ̈ 𑅆༏",
xxx: "► 𝐓.𝐝͢.𝐗 - 𝚵𝐗͢𝐏𝐋𝚫͢𝐍 ◄",
sss: "‐‣ 𝑫𝒆𝒗𝒐𝒓𝒔𝒊𝒙𝒄𝒐𝒓𝒆 - 𝒇𝒂𝒊𝒍 𝑩𝒆𝒕𝒂  ✨",
ttt: "𝖣𝖾𝗏𝗈𝗋𝗌𝗂𝗑𝖼𝗈𝗋𝖾 𝖡𝖾𝗍a - #1𝗌𝗍"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})