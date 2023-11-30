<template>
    <div class="msg">{{ props.msg }}</div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
    msg: String,
})
</script>
<style scoped lang="scss">
.msg {
    text-align: center;
}
</style>
