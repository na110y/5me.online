<template>
<header>
  <div class="container">
        <div class="list-user">
          <div class="backgroud">
            <div class="backgroud-img"><img src="../imageHeader/backgroud.png" alt=" error" id="slideImg"> </div>
    
            <div class="Information">
              <ul class="slide-user">
                <li class="slide-user-img"><img src="../imageHeader/avataUser.svg" alt="error"></li>
                <li class="slide-user-Information">
                  <!-- txt-userName -->
                    <div class="Information-follow">
                        <div class="Information-txt-follow">
                            <div class="Information-txtName">Nguyễn Sỹ Đức Thịnh</div>
                            <div class="Information-imgTym"><img src="../imageHeader/tymUser.svg" alt="error"></div>
                            <div class="Information-imgTymm"><img src="../imageHeader/tymmobile.svg" alt="error"></div>
                        </div>
                        <div class="" @click="clicktheodoi">
                          <div class="Information_follow" v-if="isfollow"> + Theo dõi </div>
                          <div class="Information_follow" v-if="isunfollow">  Hủy theo dõi </div>
                        </div>
                    </div>
                    <!-- txt-parameter -->
                    <div class="Information-parameter">
                        <div class="price">50,000  <p>đ/h</p></div>
                        <!--parameter  -->
                        <div class="action">
                            <div class="action-user">
                              <button class="thue" @click="close">Thuê</button>
                              <button class="donate" @click="Donate">Donate</button>
                              <button class="nhantin" @click="closeMes" ><img src="../imageHeader/tinnhan.svg" alt="" > Nhắn tin</button>
                              
                            </div>
                            <div class="people-action">
                                <div class="people-followUp">
                                    <p class="followUp">Số người theo dõi</p>
                                    <p class="people-price">320</p>
                                </div>
                                <div class="people-hired">
                                    <p class="followUp">Số giờ được thuê</p>
                                    <p class="people-price">1862</p>
                                </div>
                                <div class="people-ratio">
                                  <p class="followUp">Tỷ lệ hoàn thành</p>
                                  <div class="tile">
                                      <div class="tile"><img src="../imageHeader/tile.svg" alt=""> </div>
                                      <div class="people-price">96%</div>
                                  </div>
                                </div>
                                <!-- thiet bị -->
                                <div class="people-device">
                                    <p class="followUp">Thiết bị</p>
                                    <div class="people-price">
                                      <img src="../imageHeader/camera.svg" alt="">
                                      <img src="../imageHeader/micro.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>
              </ul>

            </div>
          </div>
        
  </div>
    <div class="between">
        <ul class="left">
          <li class="list-head">
                  <div class="introduce">GIỚI THIỆU</div>
                  <div class="txt-introduce">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </div>
                  <div class="txt-introduce">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
                  <img src="../imageHeader/imgleft.png" alt=""> 
          </li>
          
          <li class="list-between">
                  <div class="introduce">TOP DONATE</div>
                  <ul class="listTopDontate">
                        <li class="peopleIcon">
                          <div class="img-icon">
                            <img src="../imageHeader/iconImg.svg" alt=""> 
                            <div class="user-people">Linh Trần</div>
                          </div>
                          <div class="user-price">350,000 đ</div>
                        </li>
                        <li class="peopleIcon">
                          <div class="img-icon">
                            <img src="../imageHeader/iconImg2.svg" alt=""> 
                            <div class="user-people">Toan Thien Tran</div>
                          </div>
                          <div class="user-price">240,000 đ</div>
                        </li>
                        <li class="peopleIcon">
                          <div class="img-icon">
                            <img src="../imageHeader/iconImg3.svg" alt=""> 
                            <div class="user-people">Hữu Long</div>
                          </div>
                          <div class="user-price">120,000 đ</div>
                        </li>
                        <li class="peopleIcon">
                          <div class="img-icon">
                            <img src="../imageHeader/iconImg4.svg" alt=""> 
                            <div class="user-people">Thùy Nguyễn</div>
                          </div>
                          <div class="user-price">64,000 đ</div>
                        </li>
                        <li class="peopleIcon">
                          <div class="img-icon">
                            <img src="../imageHeader/iconImg5.svg" alt=""> 
                            <div class="user-people">Duong Le</div>
                          </div>
                          <div class="user-price">8,000 đ</div>
                        </li>
                  </ul>
                  
          </li>
          <li class="list-firl">
              <div class="txt-danhgia">ĐÁNH GIÁ</div>
              <ul class="people-cmt">
                  <li class="img-img"><img src="../imageHeader/iconImg.svg" alt=""></li>
                  <li>
                    <div class="user-peoplee">
                       <div class="name-people">
                          <div class="people-name">Linh Trần</div>
                         <img src="../imageHeader/tymleft.svg" alt="">
                       </div>
                       <div class="date">
                          <div class="people-date">19/01/2021 - 20:32</div>
                          <div class="people-thuee">Thuê 2h</div>
                       </div>
                       <div class="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
                    </div>
                  </li>
              </ul>
                <ul class="people-cmt">
                  <li class="img-img"><img src="../imageHeader/iconImg2.svg" alt=""></li>
                  <li>
                    <div class="user-peoplee">
                       <div class="name-people">
                          <div class="people-name">Thiện Nguyễn</div>
                         <img src="../imageHeader/tymleft.svg" alt="">
                       </div>
                       <div class="date">
                          <div class="people-date">19/01/2021 - 20:32</div>
                          <div class="people-thuee">Thuê 2h</div>
                       </div>
                       <div class="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                  </li>
              </ul>
              <ul class="people-cmt">
                  <li class="img-img"><img src="../imageHeader/iconImg3.svg" alt=""></li>
                  <li>
                    <div class="user-peoplee">
                       <div class="name-people">
                          <div class="people-name">Jimmny Huỳnh</div>
                         <img src="../imageHeader/tymleft.svg" alt="">
                       </div>
                       <div class="date">
                          <div class="people-date">19/01/2021 - 20:32</div>
                          <div class="people-thuee">Thuê 2h</div>
                       </div>
                       <div class="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                  </li>
              </ul>
                <ul class="people-cmt">
                  <li class="img-img"><img src="../imageHeader/iconImg4.svg" alt=""></li>
                  <li>
                    <div class="user-peoplee">
                       <div class="name-people">
                          <div class="people-name">Trần Phú</div>
                         <img src="../imageHeader/tymleft.svg" alt="">
                       </div>
                       <div class="date">
                          <div class="people-date">19/01/2021 - 20:32</div>
                          <div class="people-thuee">Thuê 2h</div>
                       </div>
                       <div class="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                  </li>
              </ul>
              <ul class="people-cmt">
                  <li class="img-img"><img src="../imageHeader/iconImg5.svg" alt=""></li>
                  <li>
                    <div class="user-peoplee">
                       <div class="name-people">
                          <div class="people-name">Linh Trần</div>
                         <img src="../imageHeader/tymleft.svg" alt="">
                       </div>
                       <div class="date">
                          <div class="people-date">19/01/2021 - 20:32</div>
                          <div class="people-thuee">Thuê 2h</div>
                       </div>
                       <div class="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                  </li>
              </ul>
                <ul class="people-cmtt">
                  <li class="img-img"><img src="../imageHeader/iconImg.svg" alt=""></li>
                  <li>
                    <div class="user-peoplee">
                       <div class="name-people">
                          <div class="people-name">Khánh Duy</div>
                         <img src="../imageHeader/tymleft.svg" alt="">
                       </div>
                       <div class="date">
                          <div class="people-date">19/01/2021 - 20:32</div>
                          <div class="people-thuee">Thuê 2h</div>
                       </div>
                       <div class="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                  </li>

              </ul>
              <ul class="countthenumber">
                    <img src="../imageHeader/muiten.svg" alt="">
                    <div class="one">1</div>
                    <div class="two">2</div>
                    <div class="zxc">...</div>
                    <div class="there">8</div>

                    <img src="../imageHeader/muitenphai.svg" alt="">

              </ul>
          </li>
        </ul>
        <ul class="middle">
            <li class="list-head">
              <img src="../imageHeader/imgmiddole.svg" alt="">
              <input type="text" placeholder="Bạn đang nghĩ gì?">
            </li>
            <li class="list-midole">
              <div class="list-details">
                  <img src="../imageHeader/imgmiddole.svg" alt="">
                  <div class="people-list-txt">
                      <div class="name-txt">Nguyễn Sỹ Đức Thịnh</div>
                      <div class="date-txt">19/01/2021 - 20:32</div>
                  </div>
              </div>
              <div class="txt-details">   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
              <img src="../imageHeader/imgright.png" alt="">
              <div class="tymm">
                <img src="../imageHeader/tymbet.svg" alt="">
                <div class="people-like"><p>15</p> người thích bài viết này</div>
              </div>
                <div class="listtt">
                  <img src="../imageHeader/imgmiddole.svg" alt="">
                  <input type="text" placeholder="Viết bình luận...">
                </div>
              
            </li>

            <li class="list-midole">
              <div class="list-details">
                  <img src="../imageHeader/imgmiddole.svg" alt="">
                  <div class="people-list-txt">
                      <div class="name-txt">Nguyễn Sỹ Đức Thịnh</div>
                      <div class="date-txt">19/01/2021 - 20:32</div>
                  </div>
              </div>
              <div class="txt-details">   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
              <img src="../imageHeader/imgright3.png" alt="">
              <div class="tymm">
                <img src="../imageHeader/tymbet.svg" alt="">
                <div class="people-like"><p>15</p> người thích bài viết này</div>
              </div>
                <div class="listtt">
                  <img src="../imageHeader/imgmiddole.svg" alt="">
                  <input type="text" placeholder="Viết bình luận...">
                </div>
              
            </li>
            <li class="list-midole">
              <div class="list-details">
                  <img src="../imageHeader/imgmiddole.svg" alt="">
                  <div class="people-list-txt">
                      <div class="name-txt">Nguyễn Sỹ Đức Thịnh</div>
                      <div class="date-txt">19/01/2021 - 20:32</div>
                  </div>
              </div>
              <div class="txt-details">   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
              <img src="../imageHeader/imgright2.png" alt="">
              <div class="tymm">
                <img src="../imageHeader/tymbet.svg" alt="">
                <div class="people-like"><p>15</p> người thích bài viết này</div>
              </div>
                <div class="listtt">
                  <img src="../imageHeader/imgmiddole.svg" alt="">
                  <input type="text" placeholder="Viết bình luận...">
                </div>
              
            </li>
        </ul>


  </div>
  
  <!-- nhan tin -->
  <div class="mesginger" v-if="closeMess">
      <div class="mesHeader">
          <div class="mesUser">
              <div class="userImg">
                <img src="../imageHeader/iconImg4.svg" alt="">
                <div class="mesName">Nguyễn Thị Hạnh</div>  
              </div>
              <div class="mesClose">
                <img src="../imageHeader/mesClose.svg" alt="" @click="closeMes" >
              </div>
          </div>
      </div>
      <div class="mesBetween">
          <div class="mesbet">
              <div class="mesUser">
                  <div class="userImg">
                    <img src="../imageHeader/iconImg4.svg" alt="">
                    <div class="txtMes">
                        <div class="txtUserName">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div> 
                        <div class="userNameDate">22/10/2020 | 08:32</div>
                    </div>
                  </div>
              </div>

              <div class="mesUserr">
                  <div class="userImg">
                    <div class="txtMes">
                        <div class="txtUserName">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div> 
                        <div class="userNameDate">25/12/2020 | 10:55</div>
                    </div>
                    <img src="../imageHeader/iconImg5.svg" alt="">

                  </div>
              </div>
      </div>

      </div>
      <div class="mesFirl">
          <div class="firlmes">
                <div class="mesTxT">
                     <img src="../imageHeader/iconImg5.svg" alt="" >
                     <input type="text" placeholder="Nhập tin nhắn">
                </div>
                <div class="actionMes">
                     <img src="../imageHeader/mes1.svg" alt="" class="actionMes1">
                     <img src="../imageHeader/mes2.svg" alt="">
                </div>

          </div>
      </div>
  </div>


  <!-- end nhantin -->
  </div>


  <!-- thue -->
<form action="">
    <div class="thueUser" v-if="isWindowThue">
      <ul div class="list-thue">
        <li class="list-headerThue">
            <div class="txt-nameThue">Thuê</div>
            <div class="closeClick" @click="close" v-if="isWindowThue"><img src="../imageHeader/out.svg" alt=""></div>
        </li>
        <li class="background-user">
            <img src="../imageHeader/imgThue.svg" alt="">
            <div class="userName-thue">
                <div class="txt-thueName">Nguyễn Sỹ Đức Thịnh</div>
                <div class="txt-PriceThue">50,000 <p>VNĐ</p> </div>
            </div>
        </li>
        <li class="list-datePriceThue">
            <div class="txtdateThue">Số giờ muốn thuê</div>
            <div class="priceThue-user">
                <div class="onetwothere">
                    <div class="numberPrice">10 <p>Giờ</p></div>
                    <div class="thue-increasenumber">
                          <div class="minus"><img src="../imageHeader/tru.svg" alt=""></div>
                          <div class="increasenumber"><img src="../imageHeader/cong.svg" alt=""></div>
                    </div>
                </div>
                <div class="Thue-Price">200,000 <p>VNĐ</p></div>
                <div class="surplus">
                  <div class="">Số dư hiện tại</div>

                  <div class="tang">0 <p> VNĐ</p></div>
                </div>
            </div>
        </li>
        <li class="inputTxt">
          <input type="text" placeholder="Thêm lời nhắn">
        </li>
        <li class="buttonn">  <button type="submit">Thuê</button> </li>
      </ul>
  </div>
</form>
  <!-- end thue -->

  <!-- donate -->
  <form action="">
    <div class="thueUser" v-if="isWindowdonate">
      <ul div class="list-thue">
        <li class="list-headerThue">
            <div class="txt-nameThue">Donate</div>
            <div class="closeClick" @click="Donate" v-if="isWindowdonate"><img src="../imageHeader/out.svg" alt=""></div>
        </li>
        <li class="background-user">
            <img src="../imageHeader/imgThue.svg" alt="">
            <div class="userName-thue">
                <div class="txt-thueName">Nguyễn Sỹ Đức Thịnh</div>
                <div class="txt-PriceThue">50,000 <p>VNĐ</p> </div>
            </div>
        </li>
        <li class="list-datePriceThue">
            <div class="txtdateThue">Số tiền muốn Donate</div>
            <div class="priceThue-user">
                <div class="Thue-Price">150,000 <p>VNĐ</p></div>
                <div class="surplus">
                  <div class="">Số dư hiện tại</div>
                  <div class="tang">0 <p> VNĐ</p></div>
                </div>
            </div>
        </li>
        <li class="inputTxt">
          <input type="text" placeholder="Thêm lời nhắn">
        </li>
        <li class="buttonn">  <button type="submit">Donate</button> </li>
      </ul>
  </div>
</form>
  <!-- end Donate -->


</header>



</template>

<script>
export default {
  name: "chitiet",
  props:[],
data() {
	return {
	isfollow:true,
  isunfollow:false,
  isWindowThue:false,
  isWindowdonate:false,
  closeMess:false,
	}
},
methods: {
  clicktheodoi () {
    this.isfollow = ! this.isfollow
    this.isunfollow = !this.isunfollow
  },
  close() {
    this.isWindowThue = ! this.isWindowThue
  },
  Donate() {
    this.isWindowdonate = ! this.isWindowdonate
  },
  closeMes () {
    this.closeMess = ! this.closeMess

  }
}

}
</script>

<style lang="scss">
	@import "../chitiet/app.scss";
</style>