<script setup>
const props = defineProps({
    lists: {
        type: Array,
        default: () => []
    },
    format: {
        type: String,
        default: 'unordered'
    }
})
const formatContent = (lists) => {
    let formattedContent = '';
    lists.forEach(list => {
        if (list.type === 'text') {
            formattedContent += `${list.text}`;
        }
        if (list.type === 'link') {
            formattedContent += `<a href="${list.url}" target="_blank" class="font-normal text-sky-700 hover:text-sky-600">${list.children[0].text}</a>`;
        }
        if (list.bold) {
            formattedContent = formattedContent.replace(list.text, `<b>${list.text}</b>`);
        }
        if (list.italic) {
            formattedContent = formattedContent.replace(list.text, `<em>${list.text}</em>`);
        }
        if (list.underline) {
            formattedContent = formattedContent.replace(list.text, `<u>${list.text}</u>`);
        }
    });
    return formattedContent;
}
</script>
<template>
    <ul
        v-if="props.format === 'unordered'"
        class="list-disc list-inside text-left text-slate-900 font-normal font-body mt-5 pl-5"
    >
        <li
            v-for="(list, index) in props.lists"
            :key="index"
            class="mb-2"
            v-html="formatContent(list.children)"
        >
        </li>
    </ul>
    <ol
        v-if="props.format === 'ordered'"
        class="list-decimal list-inside text-left text-slate-900 font-normal font-body mt-5 pl-5"
    >
        <li
            v-for="(list, index) in props.lists"
            :key="index"
            class="mb-2"
            v-html="formatContent(list.children)"
        >
        </li>
    </ol>
</template>