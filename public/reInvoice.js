
function checkName(){
    var data = document.getElementById("name").value;
    if(data.length != ""){
        return true;
    }else{
        alert("กรุณากรอกชื่อ");
    } 
}
function checkLastname(){
    var data = document.getElementById("lastname").value;
    if(data.length != ""){
        return true;
    }else{
        alert("กรุณากรอกนามสกุล");
    } 
}

function checkBrand(){
    var data = document.getElementById("brand").value;
    if(data.length != ""){
        return true;
    }else{
        alert("กรุณากรอกยี่ห้อ");
    } 
}

function checkSelectDataRe(){
    
    var data5 = document.getElementById("color").value;
   
    
    
    if(data5==""){
        alert("กรุณาเลือกสีรถ");
    }else{
        return true;
    }

}
function checkLicensePlate(){
    var data = document.getElementById("licensePlate").value;
    if(data.length != ""){
        return true;
    }else{
        alert("กรุณากรอกเลขทะเบียน");
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
function checkOil() {
    var data = document.getElementById("oil").value;
    var data2 = document.getElementById("machine").value;
    var data3 = document.getElementById("air").value;
    var data4 = document.getElementById("brake").value;
    var data5 = document.getElementById("grease").value;
    var data6 = document.getElementById("change").value;
    var data7 = document.getElementById("reAir").value;
    var data8 = document.getElementById("blade").value;
    var data9 = document.getElementById("gasket").value;


    if(data.length != "" || data2.length != "" || data3.length != "" || data4.length != "" || data5.length != "" || data6.length != "" || data7.length != "" || data8.length != "" || data9.length != ""){
        return true;
    }
    else{
        return false;
        alert("กรุณาเลือกอย่างน้อย 1 ช้อย");
    } 
}

function checkAllDataRe(){
    if(checkLicensePlate() && checkSelectDataRe() && checkBrand() && checkName() && checkLastname() && checkProblem() &&  checkOil()){
        alert("ข้อมูลถูกต้อง")
        document.getElementById("repairInvoice").submit();
    }
}