<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import HelloWord from '@/components/HelloWord.vue'

const { t } = useI18n()

const router = useRouter()
const route = useRoute()

const counter = useCounterStore()
const { count } = storeToRefs(counter)
</script>
<template>
    <HelloWord :msg="$t('helloWord')" />

    <div class="title">{{ t('about') }}</div>

    <div class="flex_center_center">
        <div class="count">count: {{ count }}</div>
        <van-button
            style="margin-left: 20px"
            type="primary"
            size="small"
            @click="counter.increment"
        >
            count ++
        </van-button>
    </div>

    <van-button class="navBtn" type="primary" :block="true" to="/">
        {{ t('goToHome') }}
    </van-button>
</template>
<style lang="scss" scoped>
.title {
    font-size: 32px;
    text-align: center;
}
.count {
    font-size: 18px;
    text-align: center;
}
.navBtn {
    width: 100px;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
