<template>
  <div class="layout-container">
    <header>
      <transition name="component-fade">
        <slot name="header"></slot>
      </transition>
    </header>
    <main>
      <transition name="component-fade">
        <slot></slot>
      </transition>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "base-layout"
}
</script>

<style scoped>
.layout-container{
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.6s ease;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 0.6s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}

</style>