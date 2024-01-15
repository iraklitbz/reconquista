<script setup>
const config = useRuntimeConfig()
const CMS_URL = config.public.CMS_URL
const props = defineProps({
    entrada: {
        type: Object,
        required: true
    }
})
const handleTruncate = (word, length) => {
    if (word.length > length) {
        return word.substring(0, 70) + '...'
    }
    return word
}
const handleDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('es-ES', options)
}
</script>
<template>
     <article
         class="flex flex-col items-start justify-between shadow-sm rounded-2xl bg-slate-50 shadow-sky-100/50 ring-1 ring-slate-100"
       >
         <!-- Image -->
         <div class="w-full px-4 pt-4">
           <nuxt-link
            :to="`/blog/articulo/${entrada.attributes.slug}`"
             class="relative block w-full overflow-hidden group aspect-w-16 aspect-h-9 rounded-xl md:aspect-w-3 md:aspect-h-2"
           >
             <figure
                class="h-52"
             >
                <img
                    :src="CMS_URL + entrada.attributes.destacado.data.attributes.url"
                    alt=""
                    class="object-cover w-full transition duration-300 rounded-xl bg-slate-100 group-hover:scale-105"
                />
             </figure>
           </nuxt-link>
         </div>

         <!-- Content -->
         <div
           class="relative flex flex-col flex-1 px-5 pt-8 pb-10 group xl:px-7"
         >
           <nuxt-link
                v-if="entrada.attributes.categoria"
                to="#0"
                class="relative z-10 flex items-center gap-2.5 text-md text-sky-700 transition duration-200 ease-in-out hover:text-sky-600"
           >
                <nuxt-icon
                    name="arrow"
                    class="icon icon-stroke text-lg relative"
                />
             {{
                entrada.attributes.categoria
            }}
           </nuxt-link>
           <div class="flex-1">
             <h3
               class="mt-4 text-xl font-medium leading-normal transition duration-200 ease-in-out font-display text-slate-900 decoration-slate-400 group-hover:text-sky-900"
             >
                <nuxt-link 
                    :to="`/blog/articulo/${entrada.attributes.slug}`"
                >
                 <span class="absolute inset-0"></span>
                 {{
                    entrada.attributes.titulo
                 }}
               </nuxt-link>
             </h3>
             <p class="mt-3.5 text-md leading-7 text-slate-700 line-clamp-3">
               {{
                    handleTruncate(entrada.attributes.entradilla)
               }}
             </p>
           </div>
           <div class="flex items-center gap-3 mt-8 text-sm text-slate-500">
             <span class="flex items-center gap-1.5">
                <nuxt-icon
                    name="calender"
                    class="icon icon-stroke text-lg relative"
                />
               <time :datetime="entrada.attributes.fecha">
                    {{
                        handleDate(entrada.attributes.fecha)
                    }}
               </time>
             </span>
           </div>
         </div>
       </article>
</template>