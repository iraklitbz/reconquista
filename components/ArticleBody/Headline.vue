<script setup>
const props = defineProps({
    headlines: {
        type: Array,
        default: () => []
    },
    level: {
        type: Number,
        default: 3
    }
})
</script>

<template>
    <div v-for="(headline, index) in props.headlines" :key="index">
        <component
            :is="getHeadingTag(props.level)"
            class="font-semibold text-left font-display text-slate-900 mb-5 mt-10"
            :class="{
                'text-3xl': props.level === 1,
                'text-2xl': props.level === 2,
                'text-xl': props.level === 3,
                'text-lg': props.level === 4,
                'text-md': props.level === 5,
                'text-base': props.level === 6
            }"
        >
            {{ headline.text }}
        </component>
    </div>
</template>

<script>
function getHeadingTag(level) {
    switch (level) {
        case 1:
            return 'h1';
        case 2:
            return 'h2';
        case 3:
            return 'h3';
        case 4:
            return 'h4';
        case 5:
            return 'h5';
        case 6:
            return 'h6';
        default:
            return 'div';
    }
}
</script>
