const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Casablanca,Morocco."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212617486161";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_34_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNyxcbiAgICAgICAgMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTksXG4gICAgICAgIDY2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDYzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDksXG4gICAgICAgIDQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4LFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMixcbiAgICAgICAgMTE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzksXG4gICAgICAgIDUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDMxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQxLFxuICAgICAgICA0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICA3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMixcbiAgICAgICAgMTIzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic0xZVkRpTFp1TXRQTmh4ZGI0UmM1SUoxQlpyQzlmc2J4SmNMeThhdURrWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYXZMQ2xGdjVRbGVvWEhoTlg5NDJ3d1wiLFxuICBcInBob25lSWRcIjogXCJhOTQzZGEzYS00NmRiLTRmNzMtOWJhZC0zNWFlMDUwYzU5ZDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDE0MixcbiAgICAgIDE0LFxuICAgICAgMTk3LFxuICAgICAgMTgzLFxuICAgICAgMTYzLFxuICAgICAgMjE2LFxuICAgICAgMTM4LFxuICAgICAgNixcbiAgICAgIDEyNSxcbiAgICAgIDIyMCxcbiAgICAgIDE3OCxcbiAgICAgIDEzOCxcbiAgICAgIDE2MyxcbiAgICAgIDEyOSxcbiAgICAgIDIwNyxcbiAgICAgIDExOSxcbiAgICAgIDE0MixcbiAgICAgIDEzLFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMzAsXG4gICAgICA3NyxcbiAgICAgIDEwMSxcbiAgICAgIDc4LFxuICAgICAgNjgsXG4gICAgICAxODgsXG4gICAgICAxNDAsXG4gICAgICAxMTcsXG4gICAgICA1NCxcbiAgICAgIDI0MCxcbiAgICAgIDgwLFxuICAgICAgNTYsXG4gICAgICAyMzUsXG4gICAgICAyMjQsXG4gICAgICAyMTcsXG4gICAgICAxMDgsXG4gICAgICAyNTUsXG4gICAgICAxMzUsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlI4MTZNS1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjYxNzQ4NjE2MTozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk5PWFlcIixcbiAgICBcImxpZFwiOiBcIjEzODM0MTIzMjE5MTAyOjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BxZjdMd0hFT3p5bXJVR0dBd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRVhKaFJHQ0RKZ0hFaHVNMzRFUERyb0FzNmZnSjdwTjczSHZodXp1djlCRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxSlM2ZGRWaHdTNXVuMXA2eUdDbmlxREZHQ2RDKzRhZm5KejZMVVlreit6VC83Uk9VUzJ4WjBhZUZVdGZkZ0tEWjcvcHVUSXFFTTlsQ2VpZ0NWVXBBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6QkxOZGFJWGVtU2VJNklZdW94eG9zR0p3OUV6eWZydkJmc24rSmF5TEIzRFNrN1RBVVB5dHJRYXVBZ215L29FNWE1VElTYm0yV0VXWFhaVW1kUXBBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI2MTc0ODYxNjE6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjAyNDc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGFlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQYWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvS0ZXQlNWUnBwVWVyTmQxQnVhcVRkaU5WSW9Jbk5TZlJUYWJHWXh0Kzc0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDY2NTA4NzQsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMCwxMF19LFwidGltZXN0YW1wXCI6XCIxNzIyMjAyMzcwNjg0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "NOXY",
  packname: process.env.PACK_NAME || "NOXY",
  botname : process.env.BOT_NAME  || "NOXY",
  ownername:process.env.OWNER_NAME|| "NOXY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
