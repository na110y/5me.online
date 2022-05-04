<template>
 <div class="warpper">

   <header class="header">
     <div class="container">
      <div class="menu">
          <div class="logo">
            <img src="../image/logo.svg" alt="">
          </div>
          <div class="menu-list">
              <div class="menu-item menu-item1">
                <img src="../image/phone.svg" alt="" class="item1">
                <div class="item">(+1) 514 697 4413</div>
              </div>
              <div class="menu-item menu-item1">
                <img src="../image/mes.svg" alt="" class="item2">
                <div class="item">contact@newgenpharma.com</div>
              </div>
              <div class="menu-item item-mobile">
                  <div class="item item-item  "> |</div>
                <a href="https://www.facebook.com/"><img src="../image/fb.svg" alt="" class="item3"></a>
                
              </div>
          </div>
        </div>
     </div>
   </header>


   <main>

     <div class="form-login">
        <div class="header-login"> Đăng nhập </div>
        <img src="../image/header-form.svg" alt="" class="form-logo">

        <form action="">
            <div class="form">
              <div class="form-tk">Bạn chưa có tài khoản?</div>
              <a href="/registration"  class="form-footer">Tạo tài khoản</a>
            </div>

            <div class="form-dn">
              <label for="dangnhap" class="dangnhap">Email / Tên đăng nhập</label>
              <input type="text" id="dangnhap" placeholder="toan.thien@example.com">
            </div>

              <div class="form-mk">
                <label for="matkhau" class="matkhau">Mật khẩu</label>
                <input :type="showPassword ? 'text' : 'password'" id="matkhau" >
                <div >
                  <img src="../image/mat.svg" alt="" class="clickme"  @click="clickkkkkk">
                </div>
            </div>
            <div class="form-luu">
              <div class="form-check">
                <input type="checkbox"> 
                <div class="form-luu-txt"> Lưu lại </div>
              </div>
              <div class="form-quenmk">Quện mật khẩu?</div>
            </div>
            <button type="submit" class="clickdn">Đăng nhập</button>
        </form>
        <div class="form-end">
          <div class="firl-end"> 
            <div class="form-end1">Hoặc</div>  
            <!-- <div class="form-firl1"></div>   -->
          </div>  
        </div>
        <div class="form-footerr">
		  <div class="formm">
			<a href="https://www.facebook.com/" class="linkclick">
			 <img src="../image/fbb.svg" alt="">
			<p class="footer-dn">Đăng nhập bằng Facebook</p>
			</a>
		  </div>
        </div>
     </div>

   </main>

	<footer>
		<div class="footer">
			Copyright 5me.onl. All Reserved
		</div>
	</footer>
 </div>
</template>

<script>
export default {
data() {
	return {
		showPassword:false,

	}
},
methods : {
	clickkkkkk() {
		this.showPassword = !this.showPassword;
	
	}
},


}
</script>
	
<style lang="scss"  >
@import "../scss/app.scss";
</style>
