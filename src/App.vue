<script lang="ts">
import Banner from './components/Banner.vue';
import ConteudoPrincipal from './components/ConteudoPrincipal.vue'
import SelecionarIngredientes from './components/SelecionarIngredientes.vue';

export default {
  components: {
    Banner: Banner,
    ConteudoPrincipal: ConteudoPrincipal,
    SelecionarIngredientes: SelecionarIngredientes
}
}
</script>

<template>
  <Banner />
  <ConteudoPrincipal />
  <SelecionarIngredientes />
</template>