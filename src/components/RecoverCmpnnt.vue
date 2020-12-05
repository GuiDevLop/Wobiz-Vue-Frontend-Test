<template>
  <a class="rePass" href="https://admin.wobiz.com.ar/recovery">{{ title }}</a>
</template>

<script>
export default {
  name: "RecoverCmpnnt",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="css" scoped>
.rePass {
  margin-left: 15px;
  font-size: 14px;
}
</style>
