<template>
  <div>
    <section class="login">
      <div class="max-width container">
        <div class="common-box d-flex flex-wrap">
          <div class="block-left">
            <h2>Welcome !</h2>
            <h3>Please login to create webboards</h3>

            <h4>Username:</h4>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
            <h4>Password:</h4>
            <input
              type="password"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />

            <div class="regis d-flex flex-column">
                <p>Don't have an account ? <a href=""><span>Sign up.</span></a></p>
            </div>
          </div>

          <div class="block-right"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.block-left,
.block-right {
  width: 50%;
}
.block-left {
  float: left;
  padding: 40px;
  border-right: 2px solid $secondary-color;
}
.block-right {
  float: right;
}
h2,
h3,
h4,
p {
  color: $font-color;
}
span{
    font-weight: 500;
    color: $primary-color;
}
span:hover{
    cursor: pointer;
}
h2 {
  font-size: 40px;
}
h3 {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
}
h4{
    font-size: 15px;
    font-weight: 400;
}
h4,input{
    margin-bottom: 20px;
}
</style>