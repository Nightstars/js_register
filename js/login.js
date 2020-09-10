// JavaScript Document
function test(){
	var username=document.getElementById("userName");
	var password=document.getElementById("password");
	var confpwd=document.getElementById("confpwd");
	var email=document.getElementById("email");
	if(username.value=="") alert("用户名不能为空！");
	if(password.value=="") alert("密码不能为空！");
	if(password.length<6) alert("密码不能小于6位！");
	if(password.length>8) alert("密码不能大于8位！");
	if(confpwd.value=="") alert("确认密码不能为空！");
	if(password.valuue!=confpwd.value) alert("两次密码不一致！");
	/*var flag=false;
	for(var i=0;i<email.value.kength;I++){
		if(email.value.charAt(i)=='@'){
			flag=true;
			break;
		}
	}
	if(flag){
		alert("邮箱格式正确！");
	}else{
		alert("邮箱格式错误！");*/
}