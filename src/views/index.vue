<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import HelloWord from '@/components/HelloWord.vue'
import { showDialog, showLoadingToast } from 'vant'
import { chageLanguage } from '@/lang/vanti18n'

const { t, locale } = useI18n()

const counter = useCounterStore()
const { count } = storeToRefs(counter)
const router = useRouter()
const goToAbout = () => {
    router.push('/about')
}

const showDialogFun = () => {
    showDialog({
        title: '标题',
        message: '代码是写出来给人看的，附带能在机器上运行。',
    }).then(() => {
        console.log('on close')
    })

    // showLoadingToast({
    //     message: '加载中...',
    //     duration: 0,
    //     forbidClick: true,
    // })
}
// showDialogFun()

// 切换语言
const changeLang = () => {
    locale.value = locale.value == 'zhCN' ? 'enUS' : 'zhCN'
    // 设置 vant语言
    chageLanguage(locale.value)
    localStorage.setItem('currentLang', locale.value)
}
</script>

<template>
    <van-button class="langChangeBtn" size="small" type="default" @click="changeLang">
        {{ locale == 'zhCN' ? '中文' : 'En' }}
    </van-button>

    <HelloWord :msg="$t('helloWord')" />

    <div class="title">{{ t('home') }}</div>

    <div class="flex_center_center">
        <div class="count">{{ t('count') }}: {{ count }}</div>
        <van-button
            style="margin-left: 20px"
            type="primary"
            size="small"
            @click="counter.increment"
        >
            count ++
        </van-button>
    </div>

    <van-button class="navBtn" type="primary" @click="goToAbout" :block="true">
        {{ t('goToAbout') }}
    </van-button>
</template>

<style lang="scss" scoped>
.langChangeBtn {
    position: fixed;
    top: 2px;
    right: 2px;
}
.title {
    font-size: 32px;
    text-align: center;
}
.navBtn {
    width: 100px;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}
.count {
    font-size: 18px;
    text-align: center;
}
</style>
@/lang/vanti18n
