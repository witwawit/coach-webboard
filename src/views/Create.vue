<template>
  <div>
    <section class="createnew">
      <div class="max-width container">
        <h1>Create New Webboard</h1>
        <div class="common-box d-flex flex-column">
          <div class="input-group mb-3">
            <h3>Title :</h3>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <div class="line"></div>

          <div class="input-group mb-3">
            <h3>Tags :</h3>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <div class="line"></div>

          <h3>Detail :</h3>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style="height: 500px"
            ></textarea>
            <label for="floatingTextarea2">Write Something</label>
          </div>

          <div class="line"></div>

          <div class="tool-bars d-flex justify-content-center flex-wrap">
            <div class="tool d-flex flex-column">
              <i class="bx bxs-image align-self-end"></i>
            </div>

            <div class="but d-flex flex-column">
              <button type="button" class="btn align-self-end">Create</button>
            </div>
          </div>
        </div>

        <div class="text">
          <h2>Rules</h2>
          <p>
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            aspernatur dolores, eveniet nemo incidunt maiores minima facere
            magnam iusto minus.
          </p>
          <p>
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            autem? Voluptate cupiditate veritatis, tenetur asperiores eum in
            aspernatur nostrum rerum nesciunt dolores expedita quas amet maxime
            quasi nulla laborum, facilis consequatur! Impedit sit ex laboriosam
            hic libero saepe omnis ullam earum veritatis aperiam iusto ducimus
            odio, et consequuntur nulla ipsam.
          </p>
          <p>
            3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
            ex eum distinctio quaerat voluptas hic exercitationem vel harum at
            adipisci!
          </p>
          <p>
            4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            dolore nihil distinctio sunt beatae, eum nostrum deserunt? Alias, ex
            quod, tempora eum minima iusto quas eaque quisquam voluptatum nulla
            expedita!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  padding-left: 0;
}
h3 {
  color: #9c9c9c;
  font-weight: 300;
  font-size: 20px;
  margin-right: 20px;
}
.form-floating {
  margin-top: 20px;
}
label {
  font-style: italic;
  color: #9c9c9c;
}
.btn {
  background: $primary-color;
  color: white;
  transition: 0.3s ease;
  /* float: right; */
  /* margin-bottom: 20px; */
}
.btn:hover {
  background: #eb5757;
  // transform: scale(1.1);
  color: white;
}

.text {
  color: black;
  margin-bottom: 50px;
  padding: 40px;
}
h2 {
  margin-bottom: 10px;
}

.tool-bars {
  width: 100%;
}
.tool {
  width: 90%;
}
.tool i {
  font-size: 40px;
  color: #bdbdbd;
  transition: 0.3s ease;
}
.tool i:hover {
  cursor: pointer;
  color: #828282;
}
.but {
  width: 10%;
}
</style>
