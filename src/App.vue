<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  height 100%
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-family: 'Roboto', 'Noto Sans JP', sans-serif

.ripple
  display block
  position absolute
  border-radius 50%
  transform scale(0)
  z-index 1
  animation ripple 0.4s linear

@keyframes ripple {
  to {
    opacity 0
    transform scale(2.5)
  }
}

.fade-enter-active, .fade-leave-active
  will-change opacity
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

.fade-enter, .fade-leave-to
  opacity: 0
</style>
