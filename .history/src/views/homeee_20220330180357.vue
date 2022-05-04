<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="showview">
          <!-- trái -->
        <div class="topdaigia">
					<p class="topRickk" @click="toggleUser">TOP Đại Gia</p>
				<div class="rickkit" v-if="isUserToggle">
				          <ul class="topdaigiatuan rickkitMobile1" >
                      <li class="listdaigia">{{title}}</li>
                      <li class="list-daigia_img">
                           <img src="../imagee/home/tuan2.svg" alt="" class="rick rick1">
                          <img src="../imagee/home/tuan2.svg" alt="" class="rick">
                          <img src="../imagee/home/tuan3.svg" alt="" class="rick">
                          <img src="../imagee/home/top.svg" alt="" class="rick rick3">
                          <img src="../imagee/home/top4.svg" alt="" class="rick rick4">
                      </li>
                </ul>

                <ul class="topdaigiatuan rickkitMobile2">
                      <li class="listdaigia">{{titleThang}}</li>
                      <li class="list-daigia_img">
                          <img src="../imagee/home/thang1.svg" alt="" class="rick rick1">
                          <img src="../imagee/home/thang2.svg" alt="" class="rick">
                          <img src="../imagee/home/thang3.svg" alt="" class="rick">
                          <img src="../imagee/home/top.svg" alt="" class="rick rick3">
                          <img src="../imagee/home/top4.svg" alt="" class="rick rick4">
                      </li>
                </ul>

                  <ul class="topdaigiatuan rickkitMobile3">
                      <li class="listdaigia">{{titleTop}}</li>
                      <li class="list-daigia_img">
                          <img src="../imagee/home/top1.svg" alt="" class="rick rick1">
                          <img src="../imagee/home/top2.svg" alt="" class="rick">
                          <img src="../imagee/home/top3.svg" alt="" class="rick">
                          <img src="../imagee/home/top.svg" alt="" class="rick rick3">
                          <img src="../imagee/home/top4.svg" alt="" class="rick rick4">
                      </li>
                </ul>
				</div>

            </div>
            <!-- end trái -->

            <!-- giữa between -->
            <div class="show">
                          
            <div class="showbetween" v-for=" item in fetchdata " :key="item.id">
				<div class="user-img">
					<img src="../imagee/home/icon.svg" alt="">
					<div class="user">
						<div class="user-name">{{item.title}}</div>
						<div class="user-datime">{{item.partime}}</div>
                </div>
				</div>

                <div class="user-txt">{{item.txt}}</div>
                <img src="../imagee/home/img1.png" alt="" class="imgnen">
                <div class="user-cmt">
                  <img src="../imagee/home/tym.svg" alt="">
                  <div class="user-cmt_txt">  {{item.like}}  </div>
                </div>
                <div class="user-footer">
                    <img src="../imagee/home/icon.svg" alt="">
                    <input type="text" placeholder="Viết bình luận..." class="input-txt">
                </div>
            </div>

             <div class="showbetween" v-for=" item in fetchdata " :key="item.id">
				<div class="user-img">
					<img src="../imagee/home/icon.svg" alt="">
					<div class="user">
						<div class="user-name">Nguyễn Đình Trần Thiện</div>
						<div class="user-datime">{{item.partime}}</div>
                </div>
				</div>
                <div class="user-txt">{{item.txt}}</div>
      		    <img src="../imagee/home/img2.png" alt="" class="imgnen">

                <div class="user-cmt">
                  <img src="../imagee/home/tym.svg" alt="">
                  <div class="user-cmt_txt"> {{item.like}} </div>
                </div>
                <div class="user-footer">
                    <img src="../imagee/home/icon.svg" alt="">
                    <input type="text" placeholder="Viết bình luận..." class="input-txt">
                </div>
            </div>
            </div>
            <!--end giữa -->

            <!-- phải right-->
            <div class="showright">
              <div class="cmt" @click="toggleConversation" >TRÒ CHUYỆN</div>
              <div class="list-cmt" v-if="isConversation">
                
                  <ul class="cmt-user">
                    <li><img src="../imagee/home/txt1.svg" alt="" ></li>
                  <li class="cmtt-user">
                      <div class="cmt-user_txt">
                          <div class="user_date">
                          <div class="date-user">LinhTranDang</div>
                          <div class="date-time">12 phút trước</div>
                          </div>
                          <div class="user_cmtt"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore tempor incididunt ut labore</div>
                      </div>
                  </li>
                  </ul>
                    
                  <ul class="cmt-user">
                        <li><img src="../imagee/home/txt2.svg" alt="" ></li>
                      <li class="cmtt-user">
                          <div class="cmt-user_txt">
                              <div class="user_date">
                              <div class="date-user">LinhTranDang</div>
                              <div class="date-time">8 phút trước</div>
                              </div>
                              <div class="user_cmtt"> Lorem ipsum dolor sit amet, consectetur </div>
                          </div>
                      </li>
                  </ul>

                  <ul class="cmt-user">
                        <li><img src="../imagee/home/txt3.svg" alt="" ></li>
                      <li class="cmtt-user">
                          <div class="cmt-user_txt">
                              <div class="user_date">
                              <div class="date-user">LinhTranDang</div>
                              <div class="date-time">8 phút trước</div>
                              </div>
                              <div class="user_cmtt">Lorem ipsum dolor sit amet, consectetur </div>
                          </div>
                      </li>
                  </ul>

                  <ul class="cmt-user">
                      
                        <li><img src="../imagee/home/txt4.svg" alt="" ></li>
                      <li class="cmtt-user">
                          <div class="cmt-user_txt">
                              <div class="user_date">
                              <div class="date-user">LinhTranDang</div>
                              <div class="date-time">8 phút trước</div>
                              </div>
                              <div class="user_cmtt"> Lorem ipsum dolor sit amet, consectetur </div>
                          </div>
                      </li>
                  </ul>
                            
                  <div class="showright-footer">
                      <input type="text" placeholder="Nhập tin nhắn..." id="input-footer">
                      <img src="../imagee/home/BTN.svg" alt="" class="submittt">
                  </div>
              </div>

      </div>
            <!-- end phải -->



        </div>
        
            <!-- mobile list danh sách người chơi đã thuê -->
            <div class="listPlaysDual">
              <ul class="list-playsDual">
                  <li class="people-plays">
                      <div class="txt-PlaysDual">Người chơi đã thuê</div>
                      <div class="txt-NewPlays"> <img src="../imageHeader/lammoi.svg" alt="error" class="lammoi">   Làm mới  </div>
                  </li>



                  <li class="user-PlaysDual" v-for=" (item,index) in ProductUser" :key="index.id">
                    <div class="iconAvata-User" >
                      <img :src=" item.imageAvata " alt="error" class="iconAvata">
                    </div>
                      <div class="listicon-Information">
                          <div class="txtUserAvata"><p>{{ item.titleAvata }}</p></div>
                          <div class="tymUserAvata"> <img :src="item.tymAvata" alt="error">   </div>
                          <div class="iconGame"> <img :src="item.iconAvataGame" alt="error"> </div>
                          <div class="priceAvata"> {{item.price}} <p>{{item.priceProduct}}</p> </div>
                      </div>
                  </li>

              </ul>
            </div>
            <!-- end list danh sach -->
      </div>
    
    </div>
  </footer>
</template>

<script>
export default {
data() {
	return {
	isUserToggle:true,
  isConversation: true,
	title:'TOP ĐẠI GIA TUẦN',
	titleThang:'TOP ĐẠI GIA THÁNG',
	titleTop:' ĐẠI GIA',
	listImg:[
		{   
			id:1,
			title:'Nguyễn Sỹ Đức Thịnh',
			txt:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
			partime:'08/08/2001 - 20:32',
			like:'15 người thích bài viết này '
		}
	],
	}
},
methods :{
  		toggleUser() {
			this.isUserToggle = !this.isUserToggle
		},
      toggleConversation() {
			this.isConversation = !this.isConversation
		},



    
},
computed: {
	fetchdata(){
			return this.listImg;
    },
    
    ProductUser() {
          return this.$store.getters.iconAvata;
    },
    productAvata() {
	    let index = this.$store.getters.selectProdup;
	    return this.$store.getters.iconAvata[index];
    }

}
}


</script>

<style lang="scss">
	@import "../scsshome/app.scss";
</style>