<script lang="ts" setup></script>
<template lang="pug">
#layout__oursc.min-h-screen.bg-slate-100s.debug
    //- pre.label default.vue
    header
        pre insert navigation 
        .flex 
            NuxtLink.p-4.rounded.border(to="/",prefetch=false) Home
            NuxtLink.p-4.rounded.border(to="/business",prefetch=false) Business
            NuxtLink.p-4.rounded.border(to="/business/10-million-expansion-shows-confidence-in-sunshine-coast",prefetch=false) Business - Real Page
            NuxtLink.p-4.rounded.border(to="/business/10-million-expansion-shows-confidence-in-sunshine-coast-NOT",prefetch=false) Business - NOT Real Page
            NuxtLink.p-4.rounded.border(to="/council",prefetch=false) Council

    main.bg-red-200(class="min-h-[32rem]")
        //- slot
        slot(:key="$route.path")
        //- (o )
            
        //- pre navigation;{{ navigation }}

    //- sublinks


    //- .container.mx-auto
    //-     pre insert navigation
    //-     h1.text-red-400(class="text-3xl font-bold underline") title;default
    //-     slot(:key="$route.path")

</template>
