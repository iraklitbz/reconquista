<script setup>
import { capitalLetter } from '~/utils/capital-util'
const props = defineProps({
    parrafs: {
        type: Object,
        default: () => {}
    }
});
</script>

<template>
    <div>
        <p
            class="text-left text-slate-600 font-normal text-lg mb-5"
            v-html="capitalLetter(props.parrafs.text)"
        >
        </p>
    </div>
</template>