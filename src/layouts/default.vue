<script lang="ts" setup>
const navigation = [
  { text: "Business", href: "/business" },
  {
    text: "Community",
    href: "/community",
    children: [
      { text: "Arts", href: "/arts" },
      { text: "Events", href: "/events" },
      { text: "Heritage", href: "/heritage" },
      { text: "Education", href: "/education" },
    ],
  },
  { text: "Council", href: "/council" },
  { text: "Environment", href: "/environment" },
  {
    text: "Lifestyle",
    href: "/lifestyle",
    children: [
      { text: "Gardening", href: "/gardening" },
      { text: "Adventure Sunshine Coast", href: "/adventure-sunshine-coast" },
      { text: "Health", href: "/health" },
    ],
  },
  { text: "Podcasts", href: "/podcasts" },
];
</script>
<template lang="pug">
#layout__oursc.min-h-screen.bg-slate-100s.debug
    //- pre.label default.vue
    header.block
        .flex.gap-4
            div
                NuxtLink.p-4.rounded.border(to="/",prefetchedClass="is-fetched") Home
                //- //- NuxtLink.p-4.rounded.border(to="/business",prefetchedClass="is-fetched") Business
                //- //- NuxtLink.p-4.rounded.border(to="/business/10-million-expansion-shows-confidence-in-sunshine-coast",prefetchedClass="is-fetched") Business - Real Page
            template(v-for="item in navigation")
                div.h-12.bg-blue-400
                    NuxtLink.p-4.rounded.border(:to="item.href",prefetchedClass="is-fetched") {{ item.text }}
                    //- template(v-if="item.children?.length > 0")
                    //-     template(v-for="child in item.children")
                    //-         div.h-12
                    //-             NuxtLink.p-4.rounded.border(:to="${item.href}${child.href}",prefetchedClass="is-fetched") {{ child.text }}
        

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
