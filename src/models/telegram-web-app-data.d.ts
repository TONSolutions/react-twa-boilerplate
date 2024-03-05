import { Telegram } from "./telegram";

export type TelegramWebAppData = Telegram.InitData & {
    platform: string; 
};