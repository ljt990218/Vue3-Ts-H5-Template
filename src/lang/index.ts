import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN'
import enUS from './en-US'

// 设置 vant语言 方法
import { chageLanguage } from '@/lang/vanti18n'

// 语言库
const messages = {
    zhCN: zhCN,
    enUS: enUS,
}

// 设置默认语言
var currentLang = localStorage.getItem('currentLang')
if (!currentLang) {
    currentLang = 'zhCN'
    localStorage.setItem('currentLang', 'zhCN')
}

//设置 vant语言
chageLanguage(currentLang)

const i18n = createI18n({
    legacy: false,
    locale: currentLang,
    messages,
})

export default i18n
