<template>
  <div id="app">
    <transition
      mode="out-in"
      enter-active-class="animated fadeIn fast"
      enter-leave-class="animated fadeOut fast"
    >
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss"></style>
