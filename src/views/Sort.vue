<template>
  <div>
    <section class="tagsort">
      <div class="max-width container flex-wrap">
        <h1>Sort By : <span>Coach</span></h1>
        <div class="common-box">
          <h4>Most Popular</h4>

          <!-- Topic list  วนv-forได้-->
          <div v-for="list in 5" :key="`m-${list}`">
            <topic-list></topic-list>
          </div>
        </div>
        <!-- end topic main -->

        <!-- start new topics -->
        <div class="left">
          <div class="common-box">
            <h4>Latest Webboards</h4>

            <div v-for="list in 3" :key="`m-${list}`">
              <topic-list></topic-list>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="common-box">
            <h4>Most Tags</h4>

            <div class="topic-list">
              <a href=""> <h5>#Lorem</h5></a>
            </div>

            <div class="line"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TopicList from "@/components/TopicList";
export default {
  components: { TopicList },
};
</script>

<style lang="scss" scoped>
h1 {
  padding-left: 0;
}
h1 span {
  font-weight: 300;
}
.left {
  width: 70%;
  float: left;
}
.right {
  width: 25%;
  float: right;
}
.right .topic-list {
  padding: 10px;
}
@media (max-width: 800px) {
  .left {
    width: 100%;
  }
  .right {
    width: 100%;
  }
}
</style>