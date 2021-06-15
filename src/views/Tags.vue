<template>
  <div>
    <section class="findtag">
      <div class="max-width">
        <div class="container">
          <h3>Find Your Tags :</h3>
          <div class="line"></div>
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control"
              placeholder="Type Something"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>

        <div class="container">
          <h3>All Tags :</h3>
          <div class="line"></div>
          <div class="d-flex justify-content-center flex-wrap">
            <div
              v-for="item in 16"
              :key="`m-${item}`"
              class="col-6 col-md-4 col-lg-3"
            >
              <tags-box></tags-box>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TagsBox from "@/components/TagsBox";
export default {
  components: { TagsBox },
};
</script>

<style scoped>
.container {
  margin-top: 40px;
}
.line {
  margin-bottom: 0;
}
input {
  border: none;
}
</style>