export declare namespace Telegram {
    interface User {
        id: number;
        first_name: string;
        last_name?: string;
        username?: string;
        is_premium: boolean;
        allows_write_to_pm?: boolean;
        added_to_attachment_menu?: boolean;
        photo_url?: string;
        language_code?: string;
    };    

    interface InitData {
        query_id?: string;
        user?: User;
        chat_type?: 'private' | 'group' | 'supergroup' | 'channel';
        chat_instance?: string;
        start_param?: string;
        auth_date: number;
        hash: string;
    }

    interface WebApp {
        initData: string;
        initDataUnsafe: InitData;
        platform: string;
    }
}