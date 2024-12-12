<template>
    <div class="layout-footer">
        <img :src="czb_logo" alt="Logo" height="20" class="mr-2" />
        Developed By
        <span class="font-medium ml-2">ICT Division</span>
    </div>
</template>

<script setup>
// import { useLayout } from '@/layout/composables/layout';
// import { computed } from 'vue';
import czb_logo from '../assets/czb-logo.svg';
// const { layoutConfig } = useLayout();

// const logoUrl = computed(() => {
//     return `layout/images/${layoutConfig.darkTheme.value ? 'czb-logo' : 'czb-logo'}.svg`;
// });
</script>
<style lang="scss" scoped></style>
