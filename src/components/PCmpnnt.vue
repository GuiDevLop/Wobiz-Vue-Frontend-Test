<template>
  <p>{{ title }}</p>
</template>

<script>
export default {
  name: "PCmpnnt",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
p {
  position: absolute;
  top: 35px;
  right: 200px;
  font-size: 13px;
  font-family: Roboto, sans-serif;
}
</style>
