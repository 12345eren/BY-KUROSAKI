const dir = [
  '', 
  '',     
  '', 
  '',     
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '', 
  '', 
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '*⎔↞┃صـور مـانـهـوا🀄┃*', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['صور مانهوا', 'dados'] 
export default handler
