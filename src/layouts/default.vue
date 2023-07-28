<script lang="ts" setup></script>
<template lang="pug">
#layout__oursc.min-h-screen.bg-slate-50.debug
    pre.label default.vue
    
    main.bg-red-400(class="min-h-[32rem]")
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
