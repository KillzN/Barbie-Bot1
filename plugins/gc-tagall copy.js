const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎 💋:* ${pesan}`;
  let teks = `*🎀 𝗕𝗮𝗿𝗯𝗶𝗲 𝘃𝘀 𝗺𝗮𝗹𝗮𝘀 𝘆 𝗮𝘀𝗶́..*\n\n ${oi}\n\n➥ _*𝗕𝗮𝗿𝗯𝗶𝗰𝗶𝘁𝗮 𝗶𝗻𝘃𝗼𝗰𝗮𝗻𝗱𝗼 𝗮 𝗹@𝘀 𝗳𝗹𝗼𝗷@𝘀 𝗹𝗲𝘃𝗮𝗻𝘁𝗲𝗻 𝗰𝘂𝗹𝗼𝘀 𝘃𝗮𝗴𝗼𝘀:*_\n`;
  for (const mem of participants) {
    teks += `🌙 ⇝ @${mem.id.split('@')[0]}\n`;
  }
  teks += `└ * 𝙱ᴀʀʙɪᴇ𝙱ᴏᴛ ★ ɪɢ : @xʙᴀʀʙɪᴄɪᴛᴀ.7*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall1|invocar1|invocacion1|todos1|invocación1)$/i;
handler.admin = true;
handler.group = true;
export default handler;