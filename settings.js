//STARK SETTINGS


//PASTE YOUR SESSION ID HERE, LOYAL CITIZEN

const sessionId  = process.env.SESSION || 'NEIMAN-TECH-SESSION-ID;;;=>.eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVSTjhTRGY0YnJWbWtZbkNGbEZ6aFoxVkJxVEt6VHFUQkVWTkxyOWVsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiem1yN09oV2Y2OG1WS2xkQ1huT0xaWldKLzZGMzNRQ2U5T0lqR2p6OGZ4WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRG1vVkpuZE5qRWwxVnUrRFZqY2ZIUWJkazJpUnJZeWRRVExMM2RsTjB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJScElZSjc2cmhCcURvUFlGeWp6NWI1dDU4aXdKZlFjZTl5UnlIVk9TWW1JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFKYUl0bko1ak5DVVIwVUYrbXhDMkd1UEVHNm12V1h0aGxuTUM0MjJCbEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQrNXdtQUhyMmYwWHhyekJWM0VKN0Y1aVdmL1BsTzk4NjJOZzBrUFAzeTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZuazNyQnFkT1kvSm85a21kUllxNUtVUUlwWEZMd0hhQnhxQ2FEMk9WUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkdWTWIzZ2x2c21KMUxHMkpCdHFMcHBlbENoWlhWSndwRU5NdzIxbGwyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBYeE45a1FvOTdZYk1PRTd0ME5SbkFRUDh4Z2lybWhwNWdTb1ZrVTFiVUkwV0xlRENEd2o4dWtRT1VKV1lGRmcyNm44VERGWUY1UDVNM3F4YzBDOUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJsK0xFSVJtOGkveVRXaXAraktBU09hbWFKd3UxV0pZUkZXd3B6SFFSbzJRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJobmtSQktNeFNHMjY5WF9CUnRCSzFBIiwicGhvbmVJZCI6Ijg1YTE0MzAyLTdhZjgtNGRmMC1hZTY3LTBjNDMyMzA3M2I3NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXaE1MMXJrNkhGUlBGK2VOcWZVcVI1cWVJZzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXdYN1ZjeUhSNzVCWFdQaU5MTWJwK00yVVg4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlYyM0FNUEg2IiwibWUiOnsiaWQiOiIyNTQ3NDUyNDE3MDE6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJraXNoYXppIGh1cnUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pUYnZzY0JFTy9YN01BR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZ0Qlh0TWFidkNDbHNYL2duTldjMW9DWUxIbFk1M1pjV2ZCeitIazhCajA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InkwMEVXMC9jYVo1bmp1TzRhdFJLQVlwL1M3MkZaTmpnS2k0RkN3S3Q4N25YM1BBeHlwNUdRWEE2MUFPUG5yZGgrTDYyaXVwMmMwVHZ6TGdibVJWOUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFaEIxWnRNeTN6YVA5WDFHZStZV1U3WldmYjlWdFppRjAxZXltK1dQRVN4aUNqVm9MUVcyZG5wdGY5RXFHeWV4Nk05Zk1TbmdRZkcyYjlWTGZYMmhEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc0NTI0MTcwMTo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg3UVY3VEdtN3dncGJGLzRKelZuTmFBbUN4NVdPZDJYRm53Yy9oNVBBWTkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDY2MTExOTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSEszIn0='; 


const session = sessionId.replace('NEIMAN-TECH-SESSION-ID;;;=>.','');
const prefix = process.env.PREFIX || '%';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'kishazi';
const packname = process.env.PACKNAME || 'kishazi';
const dev = process.env.OWNER_NUMBER || '254745241701';
const fridayActive = process.env.FRIDAY || "true"; //you can always deactivate by typing (friday off)
const DevMarcus = dev.split(",");
const botname = process.env.BOTNAME || 'Sᴛᴀʀᴋ-ᴍᴅ';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || '';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://media-database-mcjv.onrender.com/media/images/a98e77ee75af1bf5d5d49fc6e840f123.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vb9EZIl60eBdl8fIY10p';
const reactemoji = process.env.EMOJI || '⚒️';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'false';
const anticallmsg = process.env.ANTICALL_MSG || '❌ This Residence Cannot Pick Your Call At This Time Please Leave A Message 😌';
const autobio = process.env.AUTOBIO || 'true';

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: true,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: true,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  botname,
  reactemoji,
  autobio,
  antilink: groupControl, 
  antibad: groupControl, 
  mode,
  prefix,
  anticall,
  autolike,
  anticallmsg,
  mycode,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  DevMarcus,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete,
  fridayActive
};
