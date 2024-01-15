<script setup>
    const props = defineProps({
        image: {
            type: Object,
            default: () => {}
        }
    })
</script>
<template>
    <figure
        class="my-10 w-full"
    >
        <img
            :src="props.image.url"
            :alt="props.image.alternativeText"
            class="w-full object-fill"
        />
    </figure>
</template>