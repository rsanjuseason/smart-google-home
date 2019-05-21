const BASE_URL = "";
const DYNAMIC_URL = "";
const VERSION = Date.now();

const MAIL_FROM = 'Vodafone Health <mitulp.mobio@gmail.com>';
const MAIL_FROM_AUTH = 'mitulp.mobio@gmail.com';
const MAIL_PASSWORD = 'mitulp@123';
const MAIL_HOST = 'smtp.gmail.com';
const MAIL_PORT = '465';
const MAIL_METHOD = 'SMTP';
const MAIL_SECURE = true;
const SKILL_NAME = 'Beer Pub';
const HELP_MESSAGE = 'You can say please fetch me a hero, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Enjoy the day...Goodbye!';
const MORE_MESSAGE = 'How May I assist you?'
const TRY_AGAIN = 'Please Try Again'
const WANT_MORE = 'Want more?'
const PAUSE = '<break time="0.3s" />'
const WHISPER = '<amazon:effect name="whispered"/>'
module.exports = {
    BASE_URL: BASE_URL,
    DYNAMIC_URL: DYNAMIC_URL,
    VERSION: VERSION,
    MAIL_FROM: MAIL_FROM,
    MAIL_FROM_AUTH: MAIL_FROM_AUTH,
    MAIL_PASSWORD: MAIL_PASSWORD,
    MAIL_HOST: MAIL_HOST,
    MAIL_PORT: MAIL_PORT,
    MAIL_METHOD: MAIL_METHOD,
    MAIL_SECURE: MAIL_SECURE,
    SKILL_NAME: SKILL_NAME,
    PAUSE: PAUSE,
    MORE_MESSAGE: MORE_MESSAGE,
    WHISPER: WHISPER,
    HELP_MESSAGE: HELP_MESSAGE,
    HELP_REPROMPT: HELP_REPROMPT,
    STOP_MESSAGE: STOP_MESSAGE,
    TRY_AGAIN: TRY_AGAIN,
    WANT_MORE: WANT_MORE
};