<template>
  <div>
    <section class="main">
      <div class="max-width container">
        <div class="common-box d-flex justify-content-space-between flex-wrap">
          <div class="block1 d-flex justify-content-center">
            <div class="pix">
              <img
                src="https://www.globish.co.th/front/img/globish-logo-temp.png"
                alt=""
              />
            </div>
          </div>

          <div class="block2">
            <h3>Coach#1234</h3>
            <p>Rank : Master</p>
          </div>
          <div class="block3 d-flex flex-column">
            <a href="" class="align-self-end"
              ><i class="bx bx-dots-horizontal-rounded"></i
            ></a>
            <h3 class="align-self-end">15K Views</h3>
            <p class="align-self-end">12/12/2012</p>
          </div>

          <div class="line"></div>

          <div class="b-detail">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              modi quidem dicta expedita numquam officia doloribus tempore
              beatae voluptas eligendi dolorem fuga odit, recusandae repellat
              reiciendis odio itaque consectetur maiores iusto earum voluptatem
              cupiditate porro eum! Possimus alias esse eveniet corporis.
              Distinctio voluptatibus blanditiis magnam, commodi culpa vitae
              dolorem est similique vel inventore expedita consectetur quibusdam
              quasi dolore enim nam officiis quo doloremque eaque neque veniam
              facilis? Cumque eos illo eligendi, temporibus consectetur eveniet
              laboriosam delectus sapiente fuga beatae sit enim, consequatur
              architecto unde ut obcaecati optio exercitationem nemo! Assumenda
              dignissimos, consequatur expedita fuga eius at dolor ad quaerat
              molestias.
            </p>
          </div>

          <i class="bx bxs-like"></i>
          <p>12</p>
          <i class="bx bxs-dislike"></i>
          <p>5</p>
        </div>

        <!-- <i class="bx bxs-comment"></i> -->
        <p><span>4</span> Comments</p>

        <div class="comments d-flex justify-content flex-wrap">
          <div class="common-box d-flex justify-content flex-wrap">
            <div class="block1 d-flex justify-content-center">
              <div class="pic">
                <img
                  src="https://www.globish.co.th/front/img/globish-logo-temp.png"
                  alt=""
                />
              </div>
            </div>
            <div class="block2">
              <h3>Coach#3425</h3>
              <p>Rank : Senior</p>
            </div>
            <div class="block3 d-flex flex-column">
              <a href="" class="align-self-end"
                ><i class="bx bx-dots-horizontal-rounded"></i
              ></a>
              <p class="align-self-end">22/02/2013</p>
            </div>

            <div class="b-detail">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti eveniet ipsa distinctio amet ab! Dolorem maiores
                accusamus magnam ipsa tenetur! Quia sit itaque cum non aperiam
                sapiente, consectetur numquam molestiae.
              </p>
            </div>

            <i class="bx bxs-like"></i>
            <p>12</p>
            <i class="bx bxs-dislike"></i>
            <p>5</p>
          </div>

          <div class="space"></div>
          <!-- space for wrap -->
        </div>

        <p>Read More</p>
      </div>
    </section>

    <section class="control">
      <div class="max-width container">
        <h4>Your Comment</h4>
        <div class="common-box d-flex justify-content-center flex-wrap">
          <div class="block1 d-flex justify-content-center">
            <div class="pix">
              <img
                src="https://www.globish.co.th/front/img/globish-logo-temp.png"
                alt=""
              />
            </div>
          </div>
          <div class="block2">
            <h3>Lunar_LoveGood</h3>
            <p>Lunarr23@mail.hogwarts.com</p>
          </div>
          <div class="block3"></div>

          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style="height: 300px"
            ></textarea>
            <label for="floatingTextarea2">Write Something</label>
          </div>

          <div class="tool-bars d-flex justify-content-center flex-wrap">
            <div class="tool d-flex flex-column">
              <i class="bx bxs-image align-self-end"></i>
            </div>

            <div class="but d-flex flex-column">
              <button type="button" class="btn align-self-end">Create</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.common-box {
  margin-top: 40px;
  /* margin-bottom: 20px; */
}
h3,
p {
  color: #4f4f4f;
}
.block1,
.block3 {
  width: 20%;
}
.block3 a i {
  padding-bottom: 20px;
}
.block2 {
  width: 60%;
}
.pix {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.pix,
.pic {
  box-shadow: 0 2px 4px 0 rgba(222, 222, 222, 0.5);
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.b-detail {
  padding: 30px;
  padding-top: 0;
}
i {
  font-size: 30px;
  color: #9c9c9c;
  margin-left: 30px;
  transition: 0.3s ease;
}
i:hover {
  cursor: pointer;
  color: #f46500;
}
/* for comments */
.comments .common-box {
  margin-top: 0px;
  width: 90%;
}
.comments .space {
  width: 10%;
}
.pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.comments .b-detail {
  padding-top: 30px;
}

/* for controls section */
.control {
  background: #222222;
  color: white;
  padding-bottom: 50px;
}
.control .common-box {
  background: #404040;
  margin: 0;
}
.control h4 {
  padding: 40px;
  color: #f46500;
}
.control h3,
.control p {
  color: #fff;
}
.control .form-floating {
  width: 100%;
  margin-top: 30px;
}
.control label {
  color: #222222;
}
.btn {
  background: #f46500;
  color: white;
  /* float: right; */
  /* margin-bottom: 20px; */
  margin-top: 25px;
  transition: 0.3s ease;
}
.btn:hover {
  background: #eb5757;
  transform: scale(1.1);
}

/* bottom parts */
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
  margin-top: 25px;
}
.tool i:hover {
  cursor: pointer;
  color: #828282;
}
.but {
  width: 10%;
}
</style>