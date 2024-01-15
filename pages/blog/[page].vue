<script setup>
  import { dataQueryEntradas } from '~/graphql/queries/entradas.query.gql'
  import { apiCall } from '~/composables/apiCall'
  const route = useRoute()
  const currentPage = ref(parseInt(route.params.page) || 1)
  const articlesPerPage = ref(3)
  const variables = { page: currentPage.value, pageSize: articlesPerPage.value }
  const data = await apiCall(dataQueryEntradas, '', variables)
  const entradas = ref(data.entradas)
  const totalPages = computed(() => {
    return Math.ceil(entradas.value.meta.pagination.total / articlesPerPage.value)
  })
</script>
<template>
    <section
   id="articles"
   class="py-16 overflow-hidden bg-white sm:py-24 lg:py-28"
 >
   <!-- Container -->
   <div class="max-w-screen-xl px-5 mx-auto sm:px-6 lg:px-8">
     <h2
       class="text-4xl font-semibold text-center font-display text-slate-900 sm:text-5xl"
     >
       Últimas noticias
     </h2>

     <!-- Tabs -->
    <!-- <Tabs /> -->

     <!-- Articles list -->
     <div
       class="grid max-w-lg gap-8 mx-auto mt-14 sm:mt-16 md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-y-6 lg:gap-x-5 xl:gap-x-6 xl:gap-y-8"
     >
       <!-- 1st Article -->
      <Article 
        v-for="(entrada, index) in entradas.data"
        :key="index"
        :entrada="entrada"
      />
     </div>

     <!-- Pagination -->
      <Pagination
        v-if="totalPages > 1"
        :totalPages="totalPages"
        :currentPage="currentPage"
      />
   </div>
 </section>
</template>