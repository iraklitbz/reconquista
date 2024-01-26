<script setup>
const props = defineProps({
    parrafs: {
        type: Array,
        default: () => []
    }
});

const formatContent = (parrafs) => {
    let formattedContent = '';
    parrafs.forEach(parraf => {
        if (parraf.type === 'text') {
            formattedContent += `${parraf.text}`;
        }
        if (parraf.type === 'link') {
            formattedContent += `<a href="${parraf.url}" target="_blank" class="font-normal text-sky-700 hover:text-sky-600">${parraf.children[0].text}</a>`;
        }
        if (parraf.bold) {
            formattedContent = formattedContent.replace(parraf.text, `<b>${parraf.text}</b>`);
        }
        if (parraf.italic) {
            formattedContent = formattedContent.replace(parraf.text, `<em>${parraf.text}</em>`);
        }
        if (parraf.underline) {
            formattedContent = formattedContent.replace(parraf.text, `<u>${parraf.text}</u>`);
        }
    });
    return formattedContent;
};
</script>

<template>
    <div>
        <p
            class="text-left text-slate-600 font-normal text-lg mb-5"
            v-html="formatContent(props.parrafs)"
        >
        </p>
    </div>
</template>