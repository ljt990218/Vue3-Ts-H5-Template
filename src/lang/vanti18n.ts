import { Locale, useCurrentLang } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';
import zhCN from 'vant/es/locale/lang/zh-CN';

// https://vant-contrib.gitee.io/vant/#/zh-CN/locale

export const chageLanguage = (lang: string) => {
    const currentLang = useCurrentLang();

    switch (lang) {
        case 'enUS':
            Locale.use('en-US', enUS);
            break;
        case 'zhCN':
            Locale.use('en-US', zhCN);
            break;
        default:
            break;
    }
}