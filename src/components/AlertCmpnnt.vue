<template>
  <div class="alertTxt">
    <p>{{ alert }}</p>
  </div>
</template>

<script>
export default {
  name: "AlertCmpnnt",
  props: {
    alert: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
.alertTxt {
  background-color: #e85837;
  border: none;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 0.25rem;
  font-family: Roboto, sans-serif;
  font-size: 11px;
  margin: 5px 15px;
  width: 26.5vw;
  height: 35px;
  font-weight: bold;
}

p {
  padding: 0;
  margin: 0 10px;
}

@media only screen and (max-width: 990px) {
  .alert-txt {
    width: 43vw;
  }
}
@media only screen and (max-width: 770px) {
  .alert-txt {
    width: 84.5vw;
  }
}
</style>
