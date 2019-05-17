function checkRegis() {
    var gender = document.getElementById("gender").value;
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var birth = document.getElementById("birth").value;
    var phone = document.getElementById("phone").value;
    var type = document.getElementById("type").value;
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if (name == "") {
        alert("กรุณากรอก ชื่อ")
    } else if (lastname == "") {
        alert("กรุณากรอก นามสกุล")
    } else if (gender == "เลือก...") {
        alert("กรุณาเลือก เพศ")
    } else if (birth == "") {
        alert("กรุณาเลือก วัน-เดือน-ปีเกิด")
    } else if (phone == "") {
        alert("กรุณากรอกเบอร์โทร")
    } else if (type == "เลือก...") {
        alert("กรุณาเลือก ตำแหน่ง")
    } else if (user == "") {
        alert("กรุณากรอก ชื่อผู้ใช้")
    } else if (password == "") {
        alert("กรุณากรอก รหัสผ่าน")
    } else if (checkTelnumber() == 0) {
        alert("เบอร์โทรต้องเป็นตัวเลขเท่านั้นและความยาวไม่เกิน 10 ตัวอักษร)")
    } else if (checkEmployeeID() == 0) {
        alert("ชื่อผู้ใช้ต้องมีความยาวระหว่าง 8 - 15 ตัวอักษร")
    } else if (checkEmployeePassword() == 0) {
        alert("รหัสผ่านต้องมีความยาวระหว่าง 8 - 15 ตัวอักษร")
    }else{
        document.getElementById("addEmployee").submit()
    }
}

    function checkTelnumber() {
        var emp_telnumber = document.getElementById("phone").value;

        if (emp_telnumber != parseInt(emp_telnumber) || emp_telnumber.length != 10) {
            document.getElementById('phone').value = "";
            return 0;
        } else {
            return 1;
        }
    }

    function checkEmployeePassword() {
        var password = document.getElementById("password").value;

        if (password.length < 8 || password.length > 15) {
            document.getElementById('password').value = "";
            return 0;
        } else {
            return 1;
        }
    }

    function checkEmployeeID() {
        var user = document.getElementById("user").value;

        if (user.length < 8 || user.length > 15) {
            document.getElementById('user').value = "";
            return 0;
        } else {
            return 1;
        }
    }

    function checkInputName() {
        var data = document.getElementById("name").value;
        if (data.charAt(data.length - 1) == parseInt(data.charAt(data.length - 1))) {
            document.getElementById("name").value = data.substring(0, data.length - 1);
        }
    }

    function checkInputFname() {
        var data = document.getElementById("lastname").value;
        if (data.charAt(data.length - 1) == parseInt(data.charAt(data.length - 1))) {
            document.getElementById("lastname").value = data.substring(0, data.length - 1);
        }
    }

    function checkInputTel() {
        var data = document.getElementById("phone").value;
        if (data.charAt(data.length - 1) != parseInt(data.charAt(data.length - 1))) {
            document.getElementById("phone").value = data.substring(0, data.length - 1);
        }
    }

