<script lang="ts" setup></script>
<template lang="pug">
#layout__oursc.min-h-screen.bg-slate-100s.debug
    //- pre.label default.vue
    header
        pre insert navigation 
        .flex 
            NuxtLink.p-4.rounded.border(to="/",prefetchedClass="is-fetched") Home
            NuxtLink.p-4.rounded.border(to="/business",prefetchedClass="is-fetched") Business
            NuxtLink.p-4.rounded.border(to="/business/10-million-expansion-shows-confidence-in-sunshine-coast",prefetchedClass="is-fetched") Business - Real Page
            //- NuxtLink.p-4.rounded.border(to="/business/10-million-expansion-shows-confidence-in-sunshine-coast-NOT",noPrefetch,prefetchedClass="is-fetched") Business - NOT Real Page
            NuxtLink.p-4.rounded.border(to="/council",prefetchedClass="is-fetched") Council

    .w-full.bg-red-200(class="min-h-[32rem]")
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
<style lang="css">
.is-fetched {
  background: blueviolet !important;
}
.router-link-active {
  color: chartreuse !important;
}
</style>
