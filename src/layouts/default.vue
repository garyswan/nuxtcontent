<script lang="ts" setup>
const { navigation } = useContent();
const navItems = computed(() => {
  return navigation.value;
});
</script>
<template lang="pug">
#layout__oursc.min-h-screen.bg-slate-50.debug
    pre.label default.vue
    //- navigation
    .debug.flex.bg-blue-50.my-8
        pre.label default.vue
        template(v-for="item in navItems")
            div.p-4.border.rounded.h-12.flex.items-center
                //- pre item;{{ item }}
                NuxtLink(:to="item._path") {{ item.title }}
    
    main.bg-red-400(class="min-h-[32rem]")
        //- slot
        slot
        //- (o )
            


        //- pre navigation;{{ navigation }}

    //- sublinks


    //- .container.mx-auto
    //-     pre insert navigation
    //-     h1.text-red-400(class="text-3xl font-bold underline") title;default
    //-     slot(:key="$route.path")

</template>
