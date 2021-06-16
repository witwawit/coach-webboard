<template>
  <div>
    <div class="topic-list">
      <a href="">
        <h5>
          <span>1. </span>Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aspernatur, alias!
        </h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p></a
      >
    </div>

    <div class="line"></div>
  </div>
</template>

<style lang="scss" scoped>
h4,
h5,
p {
  color: #4f4f4f;
}
h4 {
  margin-bottom: 40px;
}
h5 {
  font-weight: 500;
}
.topic-list {
  padding: 20px;
  background: none;
  transition: 0.5s ease;
}
.topic-list:hover {
  background: $secondary-color;
}
.line {
  margin: 0;
}
</style>