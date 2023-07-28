<script lang="ts" setup></script>
<template lang="pug">
#layout__oursc.min-h-screen.bg-slate-100s.debug
    //- pre.label default.vue
    header
        pre insert navigation 
        .flex 
            NuxtLink.p-4.rounded.border(to="/") Home
            NuxtLink.p-4.rounded.border(to="/business") Business
            NuxtLink.p-4.rounded.border(to="/business/10-million-expansion-shows-confidence-in-sunshine-coast") Business - Real Page
            NuxtLink.p-4.rounded.border(to="/business/10-million-expansion-shows-confidence-in-sunshine-coast-NOT") Business - NOT Real Page
            NuxtLink.p-4.rounded.border(to="/council") Council

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
