import i18n from '../lang/index'
import { showToast, showSuccessToast, showFailToast, showLoadingToast, closeToast, setToastDefaultOptions, resetToastDefaultOptions } from 'vant';
const { t } = i18n.global

// 全局设置
// setToastDefaultOptions({ duration: 2000 });
// setToastDefaultOptions('loading', { forbidClick: true });
// resetToastDefaultOptions();
// resetToastDefaultOptions('loading');

// https://vant-contrib.gitee.io/vant/#/zh-CN/toast

// 只封装常用状态 个性化自行页面单独引入
// type: toast success fail loading , loading 必须调用 closeToastFun 关闭loading
export const showToastFun = (type = 'toast', text = 'tip', icon?: string) => {
    switch (type) {
        case 'toast':
        case 'icon':
            showToast({
                message: text,
                icon: icon,
            });
            break;
        case 'success':
            showSuccessToast(text);
            break;
        case 'fail':
            showFailToast(text);
            break;
        case 'loading':
            showLoadingToast({
                message: text == 'tip' ? t('loadText') : text,
                duration: 0,
                forbidClick: true,
                overlay: true,
            })
            break
        default:
            showToast({
                message: text,
                icon: icon,
            });
            break;
            break;
    }
}

export const closeToastFun = () => {
    closeToast()
}