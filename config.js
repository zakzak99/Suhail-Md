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
global.caption = process.env.CAPTION || global.caption || "NOXY" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212617486161";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_01_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgODksXG4gICAgICAgIDk5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDAsXG4gICAgICAgIDMwLFxuICAgICAgICA0MixcbiAgICAgICAgMjI0LFxuICAgICAgICA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDY4LFxuICAgICAgICA0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDUyLFxuICAgICAgICA4MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjExLFxuICBcImFkdlNlY3JldEtleVwiOiBcImV2MW1WSkNzVS90alFvMEE4M3VXU2JyL1RIc0ZweW9KQk8vSmtEejhOK2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNKTUc4TDJKUWRlNDNCNGx5aU40ckFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTg2NmE2NDAtOWQyZC00Y2VmLWIzYWMtMTI5Mjk1ODE4MGEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI4LFxuICAgICAgNjAsXG4gICAgICA5MSxcbiAgICAgIDE0NixcbiAgICAgIDIzMSxcbiAgICAgIDI1MixcbiAgICAgIDE0LFxuICAgICAgMTg2LFxuICAgICAgMTU2LFxuICAgICAgOTIsXG4gICAgICA0MCxcbiAgICAgIDExMCxcbiAgICAgIDE4MSxcbiAgICAgIDQxLFxuICAgICAgMjQ5LFxuICAgICAgNzEsXG4gICAgICAyNDksXG4gICAgICAxNjAsXG4gICAgICAxNjUsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICA5NCxcbiAgICAgIDIyMyxcbiAgICAgIDE4NSxcbiAgICAgIDQ1LFxuICAgICAgMjA4LFxuICAgICAgMTQsXG4gICAgICAxNDYsXG4gICAgICAyMTUsXG4gICAgICAzNixcbiAgICAgIDY2LFxuICAgICAgNzMsXG4gICAgICAzMCxcbiAgICAgIDk2LFxuICAgICAgMjE5LFxuICAgICAgMjI2LFxuICAgICAgMTIxLFxuICAgICAgMjIxLFxuICAgICAgMTQ1LFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllBRk4xMjNUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMTI2MTc0ODYxNjE6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOT1hZXCIsXG4gICAgXCJsaWRcIjogXCIxMzgzNDEyMzIxOTEwMjozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcWY3THdIRUxiL21yVUdHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVYSmhSR0NESmdIRWh1TTM0RVBEcm9BczZmZ0o3cE43M0h2aHV6dXY5QkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY3VxRzRjNk9BWUJWOHpDUVI4VnpkZ0V5S1lvRDRVMzVTZktEUE1haTFJblFubTZXMmVrdHUyWEY5bGpUQUNVRTBMYzVmWGNjZmZGUytNOS81bmRsQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTG5iT2VPMDJBaEU4alIxYnNpVlQ1RFdldzhjWCtsWG1FSVdHQVJob2pvK1A1bCtRS0RBY1R6a1VXY0l5aEVWTXM2RXhRTVY4MmdGRHBvOXhHRXBNQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNjE3NDg2MTYxOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjIwNDA5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBhZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGFlLmpzb24iOiAie1wia2V5RGF0YVwiOlwib0tGV0JTVlJwcFVlck5kMUJ1YXFUZGlOVklvSW5OU2ZSVGFiR1l4dCs3ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA2NjUwODc0LFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTBdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public ",
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
