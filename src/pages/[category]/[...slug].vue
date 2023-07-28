<script lang="ts" setup>
const { page } = useContent();

const throwError = () => {
  // alert("erro");
  throw createError("could not update");
};
</script>
<template lang="pug">
main.bg-yellow-400
  pre.label [...slug.vue]
  h1.text-4xl.font-bold.my-4 category;{{ $route.params.category }}:route;{{ $route.params.slug }}
  button(@click="throwError",class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded") throwerror

  .prose
    //- pre {{ page }}
    ContentDoc(:key="page.contentId" :value="page")
  //- template(v-if="page")
  //-   pre page;{{ page }}
  //- template(v-else)
  //-   pre no page
</template>
