<script setup>
const props = defineProps({
    articulo: {
        type: Array,
        default: () => []
    }
})
</script>
<template>
    <div
        v-for="(content, index) in props.articulo"
    >
        <Parraf 
            v-if="content.type === 'paragraph'"
            :parrafs="content.children"
        />
        <List 
            v-if="content.type === 'list'"
            :lists="content.children"
            :format="content.format"
        />
        <Headline
            v-if="content.type === 'heading'"
            :headlines="content.children"
            :level="content.level"
        />
        <Image
            v-if="content.type === 'image'"
            :image="content.image"
        />
    </div>
</template>