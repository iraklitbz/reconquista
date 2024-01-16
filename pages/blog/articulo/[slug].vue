<script setup>
  import { dataQueryEntrada } from '~/graphql/queries/entrada.query.gql'
  import { apiCall } from '~/composables/apiCall'
  const config = useRuntimeConfig()
  const CMS_URL = config.public.CMS_URL
  const route = useRoute()
  const variables = { slug: route.params.slug }
  const data = await apiCall(dataQueryEntrada, '', variables)
  const articulo = ref(data.entradas.data[0])
  const handleDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('es-ES', options)
  }
  console.log(articulo.value)
</script>
<template>
    <section>
        <article
          class="pb-10"
          
        >
        <!-- Article header -->
          <header class="relative bg-slate-50 py-10 sm:pt-16">
            <div class="absolute inset-x-0 bottom-0 bg-white h-1/4"></div>
            <div
              class="relative max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8"
            >
              <h1
                class="mt-6 text-4xl font-semibold leading-tight text-center font-display text-slate-900 sm:text-5xl sm:leading-tight"
              >
                {{
                  articulo.attributes.titulo
                }}
              </h1>
              <p
                class="max-w-2xl mx-auto mt-6 text-lg leading-8 text-center text-slate-700"
              >
                {{
                  articulo.attributes.entradilla
                }}
              </p>
              <div
                class="flex items-center justify-center gap-4 mt-8 text-md text-slate-500"
              >
                <span class="flex items-center gap-2">
                    <nuxt-icon
                        name="calender"
                        class="icon icon-stroke text-lg relative"
                    />
                    <time :datetime="articulo.attributes.fecha">
                        {{
                            handleDate(articulo.attributes.fecha)
                        }}
                    </time>
                </span>
              </div>
              <div class="w-full max-w-4xl mx-auto mt-16">
                <div
                  class="relative block w-full overflow-hidden shadow-lg aspect-w-16 aspect-h-9 rounded-3xl shadow-sky-100/50 md:aspect-w-3 md:aspect-h-2"
                >
                  <figure>
                      <img
                          :src="CMS_URL + articulo.attributes.destacado.data.attributes.url"
                          alt=""
                          class="object-cover w-full rounded-3xl bg-slate-100"
                      />
                  </figure>
                  
                  
                </div>
              </div>
            </div>
          </header>

          <div class="px-4 bg-white sm:px-6 lg:px-8">
            <!-- Article body -->
            <article
              class="max-w-2xl mx-auto prose prose-lg"
            >
              <ArticleBody 
                  :articulo="articulo.attributes.contenido"
              />
              <Video 
                v-if="articulo.attributes.video"
                :video="articulo.attributes.video"
              />
              <MiniGallery 
                v-if="articulo.attributes.galeria.data.length > 0"
                class="mt-10"
                :galleries="articulo.attributes.galeria.data"
              />
            </article>

            <!-- Article footer -->
            <footer class="max-w-2xl mx-auto">
              <hr class="w-full h-px pb-6 mt-14 text-slate-300/75 sm:pb-4" />
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <p
                  class="pl-0.5 text-lg font-semibold tracking-wide text-slate-900 sm:pl-0"
                >
                 Compartir artículo
                </p>

                <!-- Social share buttons -->
                <div class="mt-2.5 flex gap-3 sm:mt-0 sm:gap-4">
                  <button
                    class="flex items-center justify-center h-10 gap-3 px-6 text-sm font-medium duration-200 ease-in-out border rounded-full group border-slate-200 text-slate-600 hover:bg-slate-50"
                  >
                    <nuxt-icon
                      name="copy"
                      class="icon icon-stroke text-md relative"
                    />
                    Copy link
                  </button>
                  <a
                    href="https://twitter.com"
                    class="flex items-center justify-center w-10 h-10 duration-200 border rounded-full border-slate-200 hover:bg-slate-50"
                    aria-label="Share on Twitter"
                    target="_blank"
                  >
                    <nuxt-icon
                        name="whatsapp"
                        class="icon icon-fill text-2xl relative text-gray-700"
                    />
                  </a>
                </div>
              </div>
            </footer>
          </div>
      </article>
    </section>
</template>