<template>
  <input
    :type="typeInput"
    :placeholder="phInput"
    :value="dataInput"
    @change="updateData"
  />
</template>

<script>
export default {
  name: "InputCmpnnt",
  props: {
    typeInput: {
      type: String,
      required: true
    },
    dataInput: {
      type: String,
      requied: true
    },
    phInput: {
      type: String,
      required: true
    }
  },
  methods: {
    updateData(data) {
      this.$emit("dataInput", data.target.value);
    }
  }
};
</script>

<style lang="css" scoped>
input {
  border: 1px solid #ced4da;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-clip: padding-box;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  width: 25vw;
}
input:focus {
    outline: none !important;
    box-shadow: 0 0 6px #1bb8e3;
}
.loginInput {
  margin: 5px 15px;
  cursor: text;
  height: 38px;
}
@media only screen and (max-width: 990px) {
  input {
    width: 40vw;
  }
}
@media only screen and (max-width: 770px) {
  input {
    width: 80vw;
  }
}
</style>
