
function check1(){
    var brand = document.getElementById("brand").value;
    if(brand != ""){
        return true;
    }else{
        alert("กรุณากรอกยี่ห้อรถ");
    }
}
function check2(){
    var date = document.getElementById("datereceive").value; 
    if(date != ""){
       return true;
    }else{
         alert("กรุณากรอกวันเดือนปีรับรถ");
    }
   
}
function check3(){
    var gen = document.getElementById("generation").value;
    if(gen != ""){
        return true;
    }else{
        alert("กรุณาระบุรุ่นของรถ");
    }    
}

function check4(){
    var col = document.getElementById("color").value;
    if(col != ""){
        return true;
    }
    else{
        alert("กรุณาระบุสี");
    
    }

}
function check5(){
    var lic = document.getElementById("licensePlate").value;

    if(lic != ""){
        return true;
    }
    else{
        alert("กรุณาระบุเลขทะเบียนของรถ");
    
    }

}
function check6(){
    var year = document.getElementById("yearofcar").value;

    if(year != ""){
        return true;
    }
    else{
        alert("กรุณาระบุปีของรถ");
    
    }

}
function check7(){
    var price = document.getElementById("price").value;

    if(price != ""){
        return true;
    }
    else{
        alert("กรุณาระบุราคาของรถ");
    
    }

}

function checkAll(){
    if(check1()&&check2()&&check3()&&check4()&&check5()&&check6()&&check7()){
        alert("ข้อมูลครบ")  
         document.getElementById("form").submit();
    }
    
}