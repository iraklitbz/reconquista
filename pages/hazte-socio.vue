<script setup>
const parrafs = ref([
        "Estimados amigos:",
        "Han pasado más de 40 años, desde que comenzamos nuestra andadura por las sendas del fomento cultural y la promoción de nuestro JADRAQUE",
        "En estos años hemos conseguido, gracias siempre a vosotros, realizar diversos actos anualmente como son: “Las Migas, Pregón de Navidad, Cabalgata de reyes, Carnaval, Cena de san Juan, etc…”",
        "El motivo de nuestra asociación es implicar cada vez a más gente, niños, jóvenes y mayores.",
        "Como cualquier asociación la pertenencia a ella es VOLUNTARIA y la cuota anual para ser socio es de 18 EUROS. Por lo que necesitamos de vuestra colaboración, para poder seguir realizando todas las actividades.",
        "Por eso desde estas líneas deseamos explicaros que esto es un proyecto en el cual hay cabida para todo tipo de personas e ideas.",
        "Gracias por querer formar parte de esta gran familia."
    ])
</script>
<template>
     <main class="relative overflow-hidden">
      <!-- Container -->
      <div class="max-w-screen-xl mx-auto">
        <div class="lg:columns-2 lg:gap-8">
          <!-- Content -->
          <div
            class="relative bg-slate-50 py-16 px-5 sm:py-24 sm:px-6 lg:col-span-6 lg:rounded-br-[64px] lg:px-8 lg:pt-32 2xl:pl-0"
          >
            <!-- Background to cover left portion of large screens -->
            <div
              class="absolute inset-y-0 hidden w-full -left-full bg-slate-50 lg:block"
            ></div>

            <div class="relative max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
              <h2
                class="font-display text-4xl font-semibold leading-tight text-slate-900 sm:leading-tight lg:leading-tight lg:text-4xl xl:leading-tight"
              >
                Para fomentar nuestra asociación solo tienes que tener ganas de colaborar y disfruta
                <span class="ml-4 sm:ml-6">👋</span>
              </h2>

              <div class="mt-12 aspect-w-3 aspect-h-2 sm:mt-16">
                <!-- <img
                  src="/img/jadraque.jpg"
                  alt=""
                  class="object-cover w-full h-full rounded-3xl xl:left-16"
                /> -->
              </div>
             
              <div
              class="max-w-4xl m-auto mt-10"
            >
                <p
                  v-for="(parraf, index) in parrafs"
                  :key="index"
                  class="text-md mb-2 text-gray-700"
                >
                  {{ parraf }}
                </p>
            </div>
             
            </div>
          </div>

          <!-- Contact form container -->
          <div
            class="px-5 py-16 sm:py-24 sm:px-6 lg:col-span-6 lg:pl-0 lg:pr-8 lg:pt-32 xl:col-span-5 xl:col-start-8 2xl:pr-0"
          >
            <div class="max-w-lg mx-auto lg:mr-0">
              <h3 class="text-3xl font-semibold font-display text-slate-900">
                Rellena este formulario y hazte de la reconquista!
              </h3>
              <Registration />
            </div>
          </div>
        </div>
      </div>
    </main>
</template>