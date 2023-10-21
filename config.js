import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['5493573469639', 'Aza 2', true],
  ['5493573469639']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['50489079501', '573143917092']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Senna┃ᴮᴼᵀ' 
global.author = '@Aza' 

//--info FG
global.botName = 'Senna'
global.fgig = 'https://www.instagram.com/azarias_baro' 
global.fgsc = 'https://github.com/Azarias23X/senna-bot' 
global.fgyt = 'https://youtube.com/@azariasss'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.fgcanal = 'https://chat.whatsapp.com/EHGIWJbPbUcLE1C4UTocTF'
global.bgp = 'https://chat.whatsapp.com/EHGIWJbPbUcLE1C4UTocTF'
global.bgp2 = 'https://chat.whatsapp.com/EHGIWJbPbUcLE1C4UTocTF'
global.bgp3 = 'https://chat.whatsapp.com/EHGIWJbPbUcLE1C4UTocTF'

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
