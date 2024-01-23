<script setup>
    import { dataQueryGaleria } from '~/graphql/queries/galerias.query.gql'
    import { apiCall } from '~/composables/apiCall'
    const config = useRuntimeConfig()
    const CMS_URL = config.public.CMS_URL
    const route = useRoute()
    const variables = { id: route.params.id }
    const data = await apiCall(dataQueryGaleria, '', variables)
    const galeria = ref(data.galeria)
    const handleDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('es-ES', options)
    }
</script>
<template>
    <section class="py-16 overflow-hidden bg-slate-50 sm:py-24 lg:py-28 xl:py-32">
        <div
            class="mb-14 flex flex-col items-center justify-center gap-4"
        >
            <h2
            class="text-4xl font-semibold text-center font-display text-slate-900 md:text-5xl"
            >
            {{ galeria.data.attributes.titulo }}
            </h2>
            <time 
                :datetime="galeria.data.attributes.fecha"
                class="text-center w-full"
            >
                    {{
                        handleDate(galeria.data.attributes.fecha)
                    }}
            </time>
        </div>
      <div class="max-w-screen-xl px-5 mx-auto sm:px-6 lg:px-8">
        <!-- Gallery -->
        <div class="grid max-w-lg gap-8 mx-auto sm:max-w-2xl sm:grid-cols-2 lg:mx-0 lg:max-w-none">
          <!-- 1st image -->
            <div 
                v-for="(imagen, index) in galeria.data.attributes.galleria.data"
                :key="index"
                class="w-full overflow-hidden aspect-w-3 aspect-h-2 sm:aspect-w-4 sm:aspect-h-3"
            >
            <img 
                :src="CMS_URL + imagen.attributes.url"
                :alt="imagen.attributes.name" 
                class="object-cover object-center w-full rounded-3xl bg-slate-100"
            >
          </div>
        </div>
      </div>
    </section>
</template>