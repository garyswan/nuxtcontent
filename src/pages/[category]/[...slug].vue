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

  .prose
    //- pre {{ page }}
    //- The fastest way to query and display your content.
    //- https://content.nuxtjs.org/api/components/content-doc
    
    //- pre {{ doc }}
    //- The default slot can be used to render the content via v-slot="{ data }" syntax:
    //- <ContentDoc v-slot="{ doc }">
    ContentDoc
      //- template(v-if="doc")
      //-   p here
      template(#not-found)
        h1.text-2xl.font-bold.my-4 not found?
      template(#empty)
        h1.text-2xl.font-bold.my-4 Page is empty
    //- ContentDoc(v-slot="{ doc }")
    //-   h1.text-4xl.font-bold.my-4 doc.title;{{ doc.title }}
    //-   template(#not-found)
    //-     h1 Document not found
      //- template(v-if="doc")
      //-   ContentRenderer(:value="doc")
      
.debug 
  h1.text-2xl.font-bold.my-4 category;{{ $route.params.category }}:route;{{ $route.params.slug }}
  button(@click="throwError",class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded") throwerror


  //- template(v-if="page")
  //-   pre page;{{ page }}
  //- template(v-else)
  //-   pre no page
</template>
