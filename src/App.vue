<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Search</router-link>
    </div>
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
