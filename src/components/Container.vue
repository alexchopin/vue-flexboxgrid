<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    hero: { type: Boolean, default: false },
    fluid: { type: Boolean, default: false }
  },
  computed: {
    classes () {
      let c = this.fluid ? 'container-fluid ' : 'container '
      c += this.hero ? 'hero' : ''
      return c
    }
  }
}
</script>

<style>
.container-fluid, .container {
  margin-right: auto;
  margin-left: auto;
}

.container-fluid.hero, .container.hero {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-fluid {
  padding-right: 2rem;
  padding-left: 2rem;
}

@media only screen and (min-width: 48em) {

  .container {
    width: 49rem;
  }
}

@media only screen and (min-width: 64em) {

  .container {
    width: 65rem;
  }
}

@media only screen and (min-width: 75em) {

  .container {
    width: 76rem;
  }
}
</style>
