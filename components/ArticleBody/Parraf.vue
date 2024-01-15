<script setup>
const props = defineProps({
    parrafs: {
        type: Array,
        default: () => []
    }
})
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
}
</script>
<template>
    <div
    >
        <p
            class="text-left text-slate-900 font-normal font-body mb-5"
            v-html="formatContent(props.parrafs)"
        >
        </p>
    </div>
</template>

0: {type: 'text', text: 'Al contrario del '}
1: {type: 'link', url: 'https://www.google.com/', children: Array(1)}
2: {type: 'text', text: ' popular, el '}
3: {type: 'text', text: 'texto', bold: true}
4: {type: 'text', text: ' de '}
5: {type: 'text', text: 'Lorem Ipsum no es simplemente', italic: true}
6: {type: 'text', text: ' texto aleatorio. '}
7: {type: 'text', text: 'Tiene sus raices en una', underline: true}
8: {type: 'text', text: ' pieza cl´sica de la literatura del Latin, que dat…amet..", viene de una linea en la sección 1.10.32'}