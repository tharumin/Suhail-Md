const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sadiyamin7:26hZRQsKJealefqk@anya.ikwalvb.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94779062397" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94768211853";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94779062397";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94779062397,94768211853";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_38_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4LFxuICAgICAgICA1NixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTczLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDgzLFxuICAgICAgICA0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzLFxuICAgICAgICA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQwLFxuICAgICAgICA0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL3NtVzNkY3ZvUXJxOEdVN1ovaDV4dHZtTVRINXNBUGVlQXVDendZM3F0WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSkxZMjF5RnRTTXFHMHdmcFlsM1h6UVwiLFxuICBcInBob25lSWRcIjogXCI3NGM2ZmJlNS03ZDY5LTRiMmItODkzNi1iZmNhNTc3ZTZlNzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgMjA3LFxuICAgICAgMjA3LFxuICAgICAgNDIsXG4gICAgICAxMzgsXG4gICAgICA1MCxcbiAgICAgIDI1MSxcbiAgICAgIDk5LFxuICAgICAgMTkzLFxuICAgICAgMTU5LFxuICAgICAgMTc4LFxuICAgICAgMjExLFxuICAgICAgMTMsXG4gICAgICAxODQsXG4gICAgICA3MSxcbiAgICAgIDY5LFxuICAgICAgMTI4LFxuICAgICAgMjE0LFxuICAgICAgMTgzLFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDEwNyxcbiAgICAgIDg2LFxuICAgICAgMjEyLFxuICAgICAgMTUyLFxuICAgICAgMTI3LFxuICAgICAgMjE1LFxuICAgICAgMTU4LFxuICAgICAgMTY4LFxuICAgICAgNjAsXG4gICAgICAxMTAsXG4gICAgICA4MyxcbiAgICAgIDU3LFxuICAgICAgMTI2LFxuICAgICAgMTY2LFxuICAgICAgMTU4LFxuICAgICAgMixcbiAgICAgIDExLFxuICAgICAgMTYzLFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5QkYzTURENFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzkwNjIzOTc6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NDgxMzgxODAzMjM3Njo2NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdUh5ZmdFRU9LVjZMSUdHQkVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVYMVg0UEVRWm1odnRPU0hicnk0aExOb1ZxQTk1aGpjWW8rWmVCT2toR2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRFVoRnlTU2tvb2ZkSkt4ZE1mOGpZSFJKNXhVd2pXL0VJajZWQ0Z5YmJMY0VUYlRMTVhCM2pqbnVTSnU5b2w1ci9KdWUrcnRmR1RuUXdnOWFiWE00RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTGphNDRKWmhtL1A5UmRwY0JaSGd2WWFpV0dWV01WYjJJa0lUZkdYQ1oxSEkvTG1MWmJ5dmFHaUh5SlRLR0VRbWdHcVJVRUx3MjdSTC8rWkN5bWRBakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzkwNjIzOTc6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzE3NzA3NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA1OVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDU5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRXJkNktmdS9BTGlXdHNVaDhqbWdIL1RmeHJ5K2RQMVd0cHJnM0x6cTByVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzI2NTk3MDAzLFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzExLDAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
