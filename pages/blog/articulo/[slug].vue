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
          <header class="relative bg-slate-50 py-10 sm:pt-16"">
            <div class="absolute inset-x-0 bottom-0 bg-white h-1/4"></div>
            <div
              class="relative max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8"
            >
              <nuxt-link
                to="#0"
                class="group inline-flex items-center justify-center gap-3.5 text-base leading-5 tracking-wide text-sky-700 transition duration-200 ease-in-out hover:text-sky-600 sm:text-lg"
              >
                <nuxt-icon
                    name="arrow"
                    class="icon icon-stroke text-lg relative"
                />

                  {{
                    articulo.attributes.categoria
                  }}
              </nuxt-link>
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
                  <div
                    class="absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/10"
                  >
                      AQUI EKL CODIGO
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div class="px-4 bg-white sm:px-6 lg:px-8">
            <!-- Article body -->
            <div class="max-w-2xl mx-auto prose prose-lg"></div>

            <!-- Article footer -->
            <footer class="max-w-2xl mx-auto">
              <hr class="w-full h-px pb-6 mt-14 text-slate-300/75 sm:pb-4" />
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <p
                  class="pl-0.5 text-lg font-semibold tracking-wide text-slate-900 sm:pl-0"
                >
                  Share article
                </p>

                <!-- Social share buttons -->
                <div class="mt-2.5 flex gap-3 sm:mt-0 sm:gap-4">
                  <button
                    class="flex items-center justify-center h-10 gap-3 px-6 text-sm font-medium duration-200 ease-in-out border rounded-full group border-slate-200 text-slate-600 hover:bg-slate-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      class="h-3.5 w-3.5 text-slate-500 transition duration-200 ease-in-out group-hover:text-slate-600"
                    >
                      <g
                        stroke-width="1.25"
                        fill="none"
                        stroke="currentCOlor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect x="2.5" y="3.5" width="10" height="12"></rect>

                        <polyline
                          points="4.5,0.5 15.5,0.5 15.5,13.5 "
                          stroke="currentCOlor"
                        ></polyline>

                        <line x1="5.5" y1="6.5" x2="9.5" y2="6.5"></line>

                        <line x1="5.5" y1="9.5" x2="9.5" y2="9.5"></line>

                        <line x1="5.5" y1="12.5" x2="9.5" y2="12.5"></line>
                      </g>
                    </svg>
                    Copy link
                  </button>

                  <!-- LinkedIn icon -->
                  <a
                    href="https://linkedin.com"
                    class="flex items-center justify-center w-10 h-10 duration-200 border rounded-full border-slate-200 hover:bg-slate-50"
                    aria-label="Share on LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="currentColor"
                      class="h-3.5 w-3.5 fill-slate-500 transition group-hover:fill-slate-600"
                    >
                      <path
                        d="M16.5128 0H0.717949C0.287179 0 0 0.266667 0 0.666667V15.3333C0 15.7333 0.287179 16 0.717949 16H16.5128C16.9436 16 17.2308 15.7333 17.2308 15.3333V0.666667C17.2308 0.266667 16.9436 0 16.5128 0ZM5.09744 13.6667H2.58462V6H5.16923V13.6667H5.09744ZM3.80513 4.93333C3.01538 4.93333 2.29744 4.33333 2.29744 3.53333C2.29744 2.8 2.94359 2.13333 3.80513 2.13333C4.59487 2.13333 5.31282 2.73333 5.31282 3.53333C5.31282 4.33333 4.66667 4.93333 3.80513 4.93333ZM14.7179 13.6667H12.1333V9.93333C12.1333 9.06667 12.1333 7.93333 10.841 7.93333C9.47692 7.93333 9.33333 8.86667 9.33333 9.86667V13.6667H6.74872V6H9.18974V7.06667C9.54872 6.46667 10.3385 5.86667 11.6308 5.86667C14.2154 5.86667 14.7179 7.46667 14.7179 9.53333V13.6667Z"
                      />
                    </svg>
                  </a>

                  <!-- Instagram icon -->
                  <a
                    href="https://instagram.com"
                    class="flex items-center justify-center w-10 h-10 duration-200 border rounded-full border-slate-200 hover:bg-slate-50"
                    aria-label="Share on Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-3.5 w-3.5 fill-slate-500 transition group-hover:fill-slate-600"
                    >
                      <g>
                        <path
                          d="M12,2.982c2.937,0,3.285.011,4.445.064a6.072,6.072,0,0,1,2.042.379,3.4,3.4,0,0,1,1.265.823,3.4,3.4,0,0,1,.823,1.265,6.072,6.072,0,0,1,.379,2.042c.053,1.16.064,1.508.064,4.445s-.011,3.285-.064,4.445a6.072,6.072,0,0,1-.379,2.042,3.644,3.644,0,0,1-2.088,2.088,6.072,6.072,0,0,1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.072,6.072,0,0,1-2.042-.379,3.4,3.4,0,0,1-1.265-.823,3.4,3.4,0,0,1-.823-1.265,6.072,6.072,0,0,1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.072,6.072,0,0,1,.379-2.042,3.4,3.4,0,0,1,.823-1.265,3.4,3.4,0,0,1,1.265-.823,6.072,6.072,0,0,1,2.042-.379c1.16-.053,1.508-.064,4.445-.064M12,1c-2.987,0-3.362.013-4.535.066a8.108,8.108,0,0,0-2.67.511A5.625,5.625,0,0,0,1.577,4.8a8.108,8.108,0,0,0-.511,2.67C1.013,8.638,1,9.013,1,12s.013,3.362.066,4.535a8.108,8.108,0,0,0,.511,2.67A5.625,5.625,0,0,0,4.8,22.423a8.108,8.108,0,0,0,2.67.511C8.638,22.987,9.013,23,12,23s3.362-.013,4.535-.066a8.108,8.108,0,0,0,2.67-.511A5.625,5.625,0,0,0,22.423,19.2a8.108,8.108,0,0,0,.511-2.67C22.987,15.362,23,14.987,23,12s-.013-3.362-.066-4.535a8.108,8.108,0,0,0-.511-2.67A5.625,5.625,0,0,0,19.2,1.577a8.108,8.108,0,0,0-2.67-.511C15.362,1.013,14.987,1,12,1Z"
                        ></path>
                        <path
                          d="M12,6.351A5.649,5.649,0,1,0,17.649,12,5.649,5.649,0,0,0,12,6.351Zm0,9.316A3.667,3.667,0,1,1,15.667,12,3.667,3.667,0,0,1,12,15.667Z"
                        ></path>
                        <circle cx="17.872" cy="6.128" r="1.32"></circle>
                      </g>
                    </svg>
                  </a>

                  <!-- Twitter icon -->
                  <a
                    href="https://twitter.com"
                    class="flex items-center justify-center w-10 h-10 duration-200 border rounded-full border-slate-200 hover:bg-slate-50"
                    aria-label="Share on Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-3.5 w-3.5 fill-slate-500 transition group-hover:fill-slate-600"
                    >
                      <g>
                        <path
                          d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </footer>
          </div>
      </article>
    </section>
</template>