import { URLSearchParams } from "url";
import { Telegram } from "./web-app";
import { TelegramWebAppData } from "../models";

export const webAppHandler =
  typeof window !== 'undefined' && window?.Telegram?.WebApp
    ? window.Telegram.WebApp
    : null;


/**
 * @returns TelegramWebAppData
 */
export const loadTelegramWebAppData = (): TelegramWebAppData => {
    if (webAppHandler === null) {
        return loadFromHash();
    }

    return loadFromTelegramLib();
}

export const loadFromTelegramLib = (): TelegramWebAppData => {
    if (webAppHandler === null) {
        throw new Error('Telegram WebApp is not loaded.');
    }

    const initData = webAppHandler.initDataUnsafe;
    return { ...initData, platform: webAppHandler.platform };
}

export const loadFromHash = (): TelegramWebAppData => {
    const documentHash = document.location.hash;

    if (documentHash === '') {
        throw new Error('Telegram WebApp is not loaded.');
    }

    const hash = decodeURIComponent(decodeURIComponent(document.location.hash.substring(1)));
    const urlParams = new URLSearchParams(hash);

    return {
        user: urlParams.get('user') ? JSON.parse(urlParams.get('user') as string) : undefined,
        chat_type: urlParams.get('chat_type') as Telegram.InitData['chat_type'],
        chat_instance: urlParams.get('chat_instance') || undefined,
        platform: urlParams.get('tgWebAppPlatform') || 'unknown',
        auth_date: urlParams.get('auth_date') ? parseInt(urlParams.get('auth_date') as string) : 0,
        hash: urlParams.get('hash') || '',
        start_param: urlParams.get('start_param') || undefined,
    };
}