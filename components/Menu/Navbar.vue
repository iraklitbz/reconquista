<script setup>
const navbar = ref([
    {
        name: 'Inicio',
        url: '/'
    },
    {
        name: 'Sobre nosotros',
        url: '/sobre-nosotros'
    },
    {
        name: 'Blog',
        url: '/blog'
    },
    {
        name: 'Galleria',
        url: '/galleria'
    },
    {
        name: 'Revistas',
        url: '/revistas'
    },
    {
        name: 'Contacto',
        url: '/contacto'
    }

])
</script>
<template>
     <nav class="relative z-50 flex items-center justify-between w-full">
          <!-- Logo -->
          <div class="flex items-center shrink-0">
            <a
              href="index.html"
              aria-label="Home"
              class="flex items-center flex-shrink-0"
            >
              <img
                src="./images/logo.png"
                alt=""
                class="w-auto h-8 sm:h-9 md:hidden lg:block lg:h-10"
              />
              <img
                src="./images/logo-icon.png"
                alt=""
                class="hidden w-auto h-8 md:block lg:hidden"
              />
            </a>
          </div>

          <!-- Desktop navigation links -->
          <div class="items-center hidden md:flex md:space-x-6 lg:space-x-8">
            <nuxt-link
                v-for="item in navbar"
                :key="item.name"
                :to="item.url"
                class="relative duration-200 after:absolute after:left-1/2 after:-bottom-2.5 after:h-0.5 after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-slate-900 after:opacity-0 after:content-[&quot;&quot;] font-medium text-slate-700 hover:text-slate-900 hover:after:opacity-25"
            >
                {{ item.name }}
            </nuxt-link>
          </div>

          <div class="flex items-center">
            <!-- Call to action -->
            <nuxt-link
              class="text-slate-900 shadow-sm shadow-sky-100/50 ring-1 ring-slate-100 hover:bg-slate-200/60 hover:shadow-sky-100/50 bg-slate-100/80 inline-flex items-center rounded-full gap-2.5 justify-center px-7 py-3 text-md font-semibold leading-none outline-offset-2 transition-all duration-200 ease-in-out active:transition-none"
              to="/hazte-socio"
            >
              Hazte socio!
            </nuxt-link>

            <!-- Mobile menu button -->
            <MobileMenu 
                :navbar="navbar"
            />
          </div>
        </nav>
</template>