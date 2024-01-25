<script setup>
    import { dataQueryJuntas } from '~/graphql/queries/juntas.query.gql'
    import { apiCall } from '~/composables/apiCall'
    const data = await apiCall(dataQueryJuntas, '', {})
    const juntas = ref(data.juntas)
    const config = useRuntimeConfig()
    const CMS_URL = config.public.CMS_URL
    
</script>
<template>
    <section class="pb-16 overflow-hidden bg-white sm:pb-20 lg:pb-28">
      <div class="relative block w-full overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-5 md:aspect-h-2 mb-20">
        <img 
            :src="CMS_URL + '/uploads/about_357fb4d989.webp'" 
            alt="San Jaun Jadraque" 
            class="object-cover w-full bg-slate-100"
        >
      </div>
      <div class="grid max-w-lg px-5 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-6xl lg:grid-cols-10 lg:px-8 xl:px-12">
        <!-- Details -->
        <div class="order-2 pt-8 mt-8 border-t border-slate-200 lg:order-1 lg:col-span-3 lg:mt-0 lg:border-0 lg:pt-0 lg:pr-8">
          <!-- Details list -->
          <ul class="space-y-8">
            <!-- 1st detail -->
            <li
                v-for="(junta, index) in juntas.data"
            >
              <h6 class="text-xl font-medium font-display text-slate-800">
                {{ junta.attributes.nombre }}
              </h6>
                <span class="block mt-1 text-base text-slate-600">
                    {{ junta.attributes.cargo }}
                </span>
                <span v-if="junta.attributes.email" class="block mt-2 text-base text-slate-600">
                    Contacto: 
                </span>
                <a :href="'mailto:' + junta.attributes.email" class="text-blue-500 block">
                    {{ junta.attributes.email }}
                </a>
                <ul
                    class="flex gap-2"
                >
                    <li v-if="junta.attributes.instagram" class="block mt-3 text-base text-instagram opacity-80 hover:opacity-100 transition-opacity ease-in-out delay-200">
                        <a :href="junta.attributes.instagram" target="_blank">
                            <nuxt-icon
                                name="instagram"
                                class="icon icon-fill text-4xl relative"
                            />
                        </a>
                    </li>
                    <li v-if="junta.attributes.facebook" class="block mt-3 text-base text-facebook opacity-80 hover:opacity-100 transition-opacity ease-in-out delay-200">
                        <a :href="junta.attributes.facebook" target="_blank">
                            <nuxt-icon
                                name="facebook"
                                class="icon icon-fill text-4xl relative"
                            />
                        </a>
                    </li>
                    <li v-if="junta.attributes.whatsapp" class="block mt-3 text-base text-whatsapp opacity-80 hover:opacity-100 transition-opacity ease-in-out delay-200">
                        <a :href="junta.attributes.whatsapp" target="_blank">
                            <nuxt-icon
                                name="whatsapp"
                                class="icon icon-fill text-4xl relative"
                            />
                        </a>
                    </li>
                </ul>
            </li>
          </ul>

          <!-- Action -->
          <nuxt-link to="/contacto" class="font-gothic bg-slate-900 text-white hover:bg-sky-800 inline-flex items-center rounded-full gap-2.5 justify-center px-7 py-3 text-xl leading-none outline-offset-2 transition-all duration-200 ease-in-out active:transition-none mt-14 font-medium">
            Contacto
          </nuxt-link>
        </div>

        <!-- Description -->
        <div class="order-1 lg:order-2 lg:col-span-7 lg:pl-16">
          <h3 class="text-xl font-medium leading-8 font-display text-slate-900 sm:text-2xl sm:leading-10">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.
          </h3>

          <!-- Content -->
          <div class="mt-6 prose sm:prose-lg sm:mt-8">
            <p>
              I collaborated with Horizons in Perspective, a prestigious
              bi-annual journal focused on the frontiers of innovation and
              creativity, to elevate their brand and digital presence. My
              involvement encompassed crafting a fresh and modern branding
              identity, designing an immersive and user-friendly website
              experience, and developing a visually appealing product design for
              their bi-annual journal publication.
            </p>
            <p
                class="mt-3"
            >
              By conducting thorough research and understanding their target
              audience, I was able to establish a cohesive visual language that
              effectively communicates the journal's core values and mission.
            </p>

            <p
                class="mt-3"
            >
              Noteworthy accomplishments include implementing responsive design,
              optimizing the website's navigation, and increasing overall user
              engagement.
            </p>

            <p>
              Through our partnership, Horizons in Perspective now boasts a
              distinctive and memorable brand, with a seamless online experience
              that resonates with their readers and bolsters their position as a
              thought leader in the realm of innovation and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
</template>


<style lang="scss" scoped>
   .font-gothic {
        font-family: "ferryman", sans-serif;
        font-weight: 500;
        font-style: normal;
   }
</style>