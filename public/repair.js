function checkName(){
    var data = document.getElementById("name").value;
    if(data.length != "" && data.length < 20){
        return true;
    }else{
        alert("กรุณากรอกชื่อ และ ไม่เกิน 20 ตัวอักษร");
    } 
}
function checkLastname(){
    var data = document.getElementById("lastname").value;
    if(data.length != "" && data.length < 20){
        return true;
    }else{
        alert("กรุณากรอกนามสกุล และ ไม่เกิน 20 ตัวอักษร");
    } 
}

function checkSelect(){
    var data1 = document.getElementById("birth").value;
    var data2 = document.getElementById("gender").value;
    var data3 = document.getElementById("typeCustomer").value;
    
    if(data1==""){
        alert("กรุณาเลือกวันเกิด");
    }
    else if(data2==""){
        alert("กรุณาเลือกเพศ");
    }
    else if(data3==""){
        alert("กรุณาประเภทของลูกค้า");
    }else{
        return true;
    }

}

function checkCardID(){
    var data = document.getElementById("cardID").value;
    if(data.length == 13){
        return true;
    }else{
        alert("หมายเลขประจำตัวประชาชนต้องมี 13 หลัก");
    } 
}

function checkPhonenumber(){
    var data = document.getElementById("phonenumber").value;
    if(data.length != 10){
        alert("โทรศัพท์มือถือต้องมี 10 หลัก")
    }else  {
        return true;
    }
}

function checkAddress(){
    var data = document.getElementById("address").value;
    if(data.length != ""){
        return true;
    }else{
        alert("กรุณากรอกที่อยู่");
    } 
}
function checkType(){
    var data = document.getElementById("address").value;
    if(data.length != ""){
        return true;
    }else{
        alert("กรุณากรอกประเภทของลูกค้า");
    } 
}
function checkAllCusRe(){
    if(checkName()&&checkLastname()&&checkSelect()&&checkCardID()&&checkPhonenumber()&& checkAddress()&& checkType()){
        alert("ข้อมูลถูกต้อง")
        document.getElementById("saveDataCusRe").submit();
    }
}
//--------------------End Check All SaveCustomerRepair ------------------------------------------------------------------

function checkBrand(){
    var data = document.getElementById("brand").value;
    if(data.length != "" && data.length < 20){
        return true;
    }else{
        alert("กรุณากรอกยี่ห้อ และ ไม่เกิน 20 ตัวอักษร");
    } 
}
function checkGeneration(){
    var data = document.getElementById("generation").value;
    if(data.length != "" && data.length < 20){
        return true;
    }else{
        alert("กรุณากรอกรุ่นรถ และ ไม่เกิน 20 ตัวอักษร");
    } 
}
function checkSelectDataRe(){
    var data4 = document.getElementById("date").value;
    var data5 = document.getElementById("color").value;
    var data6 = document.getElementById("status").value;
    
    if(data4==""){
        alert("กรุณาเลือกวันที่รับรถ");
    }
    else if(data5==""){
        alert("กรุณาเลือกสีรถ");
    }
    else if(data6==""){
        alert("กรุณาเลือกสถานะการซ่อม");
    }else{
        return true;
    }

}
function checkLicensePlate(){
    var data = document.getElementById("licensePlate").value;
    if(data.length != "" && data.length == 6){
        return true;
    }else{
        alert("กรุณากรอกเลขทะเบียน 6 ตัวอักษร ตัวอย่างเช่น (กก1234)");
    } 
}
function checkPrice(){
    var data = document.getElementById("price").value;
    if(data.length != "" && data.length < 7){
        return true;
    }else{
        alert("กรุณากรอกราคาซ่อม");
    } 
}
function checkEmployee(){
    var data = document.getElementById("employee").value;
    if(data.length != "" && data.length < 20){
        return true;
    }else{
        alert("กรุณากรอกชื่อพนักงานซ่อม");
    } 
}
function checkProblem(){
    var data = document.getElementById("problem").value;
    if(data.length != "" && data.length < 20){
        return true;
    }else{
        alert("กรุณากรอกปัญหา/สาเหตุการซ่อม");
    } 
}

function checkAllDataRe(){
    if(checkBrand()&&checkGeneration()&&checkLicensePlate()&&checkPrice()&&checkEmployee()&& checkProblem()&&checkSelectDataRe()){
        alert("ข้อมูลถูกต้อง")
        document.getElementById("saveDataRe").submit();
    }
}