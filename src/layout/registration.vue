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
        <div class="header-login"> Đăng ký </div>
        <img src="../image/header-form.svg" alt="" class="form-logo">

        <form action="">
        <div class="form">
          <div class="form-tk">Bạn đã có tài khoản?</div>
          <a href="/login"  class="form-footer">Đăng nhập</a>
        </div>

        <div class="form-dn">
          <label for="dangnhap" class="dangnhap">Tên đăng nhập</label>
          <input type="text" id="dangnhap" placeholder="toan.thien@example.com">
        </div>

          <div class="form-mk">
            <label for="matkhau" class="matkhau">Mật khẩu</label>
            <input :type="showPassword ? 'text' : 'password'" id="matkhau" >
            <div >
              <img src="../image/mat.svg" alt="" class="clickme"  @click="clickkkkkk">
            </div>
        </div>

        <div class="form-mk">
            <label for="matkhau" class="matkhau">Nhập lại Mật khẩu</label>
            <input :type="showPassword ? 'text' : 'password'" id="matkhau" >
            <div >
              <img src="../image/mat.svg" alt="" class="clickme"  @click="clickkkkkk">
            </div>
        </div>
        
        <div class="form-dn codeEmail">
          <label for="dangnhap" class="dangnhap">Email</label>
          <input type="text" id="dangnhap" class="" placeholder="toan.thien@example.com">
          <div class=""><p class="layma">Lấy mã</p></div>
        </div>

        <div class="form-code">
			<label class="form-txt" for="codeTxt">Mã xác thực </label>
			<input type="text" name="" id="codeTxt" placeholder="Nhập mã xác nhận từ email đã nhập" >
		</div>

        <button type="submit" class="clickdn">Tạo tài khoản</button>
        </form>

     </div>

   </main>

	<footer>
		<div class="footer">
			Copyright 5me.onl. All Reserved
		</div>
	</footer>
	<router-view />
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
