<script lang="ts" setup>
// const { page } = useContent();

const throwError = () => {
  // alert("erro");
  throw createError("could not update");
};
</script>
<template lang="pug">
main.bg-yellow-400
  pre.label [...slug.vue]
  .white-bg.rounded.p-8.grid.grid-cols-3.gap-4
    //- pre {{ page }}
    //- The fastest way to query and display your content.
    //- https://content.nuxtjs.org/api/components/content-doc
    
    //- pre {{ doc }}
    //- The default slot can be used to render the content via v-slot="{ data }" syntax:
    //- <ContentDoc v-slot="{ doc }">
    article.bg-blue-300.col-span-2
      ContentDoc.prose
        template(#default="{doc}")
          template(v-if="doc")
            h1.text-3xl.my-3.font-bold {{ doc.title }}
            p.text-lg {{ doc.description ?? 'doc.description;'}}
            template(v-if="doc.hero?.images?.length > 0")
              .aspect-video
                img.bg-cover.w-full(:src="doc.hero.images[0].src",width="300")
            //- pre {{ doc }}
            //- ContentRenderer.prose(:value="doc")
        //- template(#empty)
        //-   h1.text-2xl.font-bold.my-4 Page Empty
        template(#not-found)
          h1.text-2xl.font-bold.my-4 Page Not Found
    aside.bg-blue-300
      //- ContentList(path="/business" v-slot="{ list }")
      //-   div(v-for="(article,index) in list.slice(0,9)" :key="article._path")
      //-       NuxtLink(:href="article._path")
      //-           h2 {{index}}:{{ article.title }}
      //-           p {{ article.description }}
    
    
      
//- .debug 
//-   h1.text-2xl.font-bold.my-4 category;{{ $route.params.category }}:route;{{ $route.params.slug }}
//-   button(@click="throwError",class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded") throwerror


  //- template(v-if="page")
  //-   pre page;{{ page }}
  //- template(v-else)
  //-   pre no page
</template>
