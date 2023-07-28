<script lang="ts" setup>
// const { surround, page, navigation } = useContent();
// //- navigation
// const navItems = computed(() => {
//   return navigation.value;
// });

// get query of category page
const resetError = (error: any) => {
  error.value = null;
};
</script>
<template lang="pug">
//- pre navigation;{{ navItems }}
.debug.flex.bg-red-400.my-8
    pre.label default.vue
    //- template(v-for="item in navItems")
    //- div.p-4.border.rounded.h-12.flex.items-center
    //-     ContentList(path="/" v-slot="{ list }")
    //-         pre list;{{list}}
    //-     //- pre item;{{ item }}
    //-     //- template(v-if="item._path")
    //-         //- NuxtLink(:to="item._path", :prefetch="false") {{ item.title }}
    //-     //- template(v-else)
    //-     //-     pre no link

.debug
    //- pre page;{{ page }}

pre.label [category].vue
.debug.mt-8.flex.space-x-6
    div.w-64.bg-red-400.prose.shrink-0.p-4
        pre TODO: insert ContentList
        //- ContentList(:path="$route.params.category" v-slot="{ list }")
        //-     pre ContentList;
        //-     div(v-for="article in list.splice(0,5)" :key="article._path")
        //-         NuxtLink(:to="article._path")
        //-             h2 {{ article.title }}
        //-             p {{ article.description }}
        //- ul.list-disc
        //-     li insert files
        //- pre {{surround}}
        //- template(v-for="item in surround")
        //-     template(v-if="item?._path")
        //-         li
        //-             a(:href="item._path || '#'") {{ item.title }}
    div.bg-red-500.grow.flex.flex-col.space-y-8
        //- h1.text-xl page.title;{{ page.title }}
        //- h1.text-xl.text-white-500 page.title;{{ page?.title || 'nothing here' }}
        //- pre page;{{ page }}
        //- ContentDoc(value="/business")
        
        div.prose.bg-yellow-50
            NuxtErrorBoundary
                NuxtPage
                template(#error="{ error}") 
                    div.bg-white.p-4.rounded
                        //- ErrorBoundary
                        h1.text-2xl Page not found
                        p NuxtErrorBoundary .. NuxtPage
                        div
                            code {{ error }}
                        
                        button(@click="resetError(error)",class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded") reset error

</template>
