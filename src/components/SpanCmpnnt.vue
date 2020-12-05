<template>
  <span>{{ title }}</span>
</template>

<script>
export default {
  name: "SpanCmpnnt",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
span {
  margin: 5px 15px;
  font-size: 12px;
  font-weight: bold;
  font-family: Roboto, sans-serif;
}
</style>
