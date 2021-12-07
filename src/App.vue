<template>
    <base-layout>
      <template v-slot:header>
        <my-navigation/>
      </template>

      <template v-slot:default>
          <router-view />
      </template>

      <template v-slot:footer>
        <the-footer/>
      </template>

    </base-layout>
</template>

<script>
import MyNavigation from "@/components/TheNavigation";
import BaseLayout from "@/layout/TheBaseLayot";
import TheFooter from "@/layout/ThaFooter";

export default {
  components: {TheFooter, BaseLayout, MyNavigation},
}
</script>

<style lang="scss">

</style>
