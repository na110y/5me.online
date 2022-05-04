<template>
 <header>
   <div class="header">
     <div class="container">
       <ul class="menu">
		   <a class="logo" href="/homeee">
			   <img src="../imageHeader/logo.svg" alt="" class="logoIcon">
			   <img src="../imagee/home/logo-mobile.svg" alt="" class="logo-mobile_svg">
		   </a>
		   <li class="menu-list " >
			   <a href="/homeee"  ><div class="list-item" @click="clickme" :class=" { active : isActive ? 'active' : ''}" >Trang chủ</div></a>
			   <a href="#" > <div class="list-item" >Thuê người chơi</div></a>
			   <a href="#" ><div class="list-item" >Đang theo dõi</div></a>
		   </li>	
		   <li class="menu-icon">
			   <a class="list-icon" href="#"><img src="../imageHeader/search.svg" alt=""></a>
			   <a class="list-icon" href="#"><img src="../imageHeader/mess.svg" alt="" ></a>
			   <a class="list-icon" href="#"><img src="../imageHeader/chuong.svg" alt="" ></a>
				<!-- icon-mobile  -->
			   <a href="#"><img src="../imagee/home/speach-mobile.svg" alt="" id="icon-mobile"></a>
			   <a  href="#"><img src="../imagee/home/mess-mobile.svg" alt="" id="icon-mobile " class="mess-mobile"></a>
			   <a  href="#"><img src="../imagee/home/chuong-mobile.svg" alt="" id="icon-mobile "  class="chuongg-mobile"></a>
			   	<div class="menu-user" @click="toggleUser">
					<img src="../imageHeader/imgicon.svg" alt="" class="user-img">
					<div class="user-list" >
						<div class="user-name">HoangNguyen</div>
						<div class="user-price">15,000 <p class="price">₫</p></div>
			   		</div>
					 <ul class="list-clone" v-if="isUserToggle">
						 <a href="#"><li class="clone-item">Nạp tiền</li></a>
						 <a href="#"><li class="clone-item">Rút tiền</li></a>
						 <a href="#"><li class="clone-item">Lịch sử giao dịch</li></a>
						 <a href="#"><li class="clone-item">Cài đặt tài khoản</li></a>
						 <a href="#"><li class="clone-item">Đăng xuất</li></a>
					 </ul>
		  		</div>
				 <div class="clickMenuActive">
					 <a href="/menumobile">
					 <i class="fa-solid fa-bars menu-moile" v-if="isMenuu"  @click="ismenuClick"></i></a>
					 <a href="/homeee"><i class="fa-solid fa-x menu-moile" v-if="ismenuActive"></i></a>
				 </div>



		   </li>
       </ul>
     </div>
   </div>
 </header>

</template>

<script>
export default {
  name: "Home",
  data() {
	  return {
		  isActive:false,
		  isUserToggle:false,
		  isMenuu:true,
		  ismenuActive :false,
	  }
  },
  methods:{
		clickme(){
			this.isActive = !this.isActive
		},
		toggleUser() {
			this.isUserToggle = !this.isUserToggle;
		},
		ismenuClick() {
			this.isMenuu = false;

		}


  },
  computed:{


  },
};
</script>
	
<style lang="scss">
	@import "../user/app.scss";
</style>