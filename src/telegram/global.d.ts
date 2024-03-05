import { Telegram } from "@twa-dev/types"

declare global {
    interface Window {
        Telegram: Telegram & {
            WebView: {
                isIframe: boolean
            }
        };
    }
}