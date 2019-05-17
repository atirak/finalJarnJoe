
function check1(){
    var name = document.getElementById("name").value;
    if(name != ""){
        return true;
    }else{
        alert("กรุณาใส่ชื่อจริงของท่านหรือรอกข้อมูลเป็นตัวอักษร");
    }
   
}

function check2(){
    var lastname = document.getElementById("lastname").value;
    if(lastname != ""){
        return true;
    }else{
        alert("กรุณาใส่นามสกุลของท่าน");
    }
}
function check3(){
    var sex = document.getElementById("gender").value;
    if(sex !=""){
         return true;
    }
    else{
       alert("กรุณาระบุเพศ");
    }
}
function check4(){
    var data = document.getElementById("birth").value;
    if(data !=""){
        return true;
    }else{
        alert("กรุณากรอกวันเดือนปีเกิด");
    }    
}
function check5(){
    var card = document.getElementById("cardID").value;
    if(card.length == 13){
        return true;
    }else{
        alert("หมายเลขประจำตัวประชาชนต้องมี 13 หลัก");
    }    
}
function check6(){
    var address = document.getElementById("address").value;
    if(address != ""){
          return true;
    }else  {
      alert("กรุณากรอกที่อยู่");
    }
}
function check7(){
    var phone = document.getElementById("phonenumber").value;
    if(phone.length == 10){
        return true;
    }else  {
        alert("โทรศัพท์มือถือต้องมี 10 หลัก");
    }
}
function check8(){
    var type = document.getElementById("typeCustomer").value;
    if(type != ""){
        return true;
    }else{
        alert("กรุณาระบบประเภทลูกค้า");
    }    
}


function checkAll(){
    if(check1()&&check2()&&check3()&&check4()&&check5()&&check6()&&check7()&&check8()){
        alert("ข้อมูลครบ")  
         document.getElementById("form").submit();
    }
    
}