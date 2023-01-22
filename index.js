//Tính lương nhân viên 
var tienluong = document.querySelector(".tienluong");
var tongluong = document.querySelector(".tongluong");
tienluong.onclick = function () {
  var ngay = document.querySelector("#ngay").value;
  var tongluongthang = ngay * 100000;
  tongluong.innerHTML = "Tổng lương là :" + tongluongthang + " VNĐ";
};

// Tính giá trị trung bình
var sothuc = document.querySelector(".sothuc");
var trungbinhsothuc = document.querySelector(".trungbinhsothuc");
sothuc.onclick = function () {
  var so1 = parseInt(document.getElementById("so1").value);
  var so2 = parseInt(document.getElementById("so2").value);
  var so3 = parseInt(document.getElementById("so3").value);
  var so4 = parseInt(document.getElementById("so4").value);
  var so5 = parseInt(document.getElementById("so5").value);
  var trungbinh = (so1 + so2 + so3 + so4 + so5) / 5;
  // var lamtron=trungbinh.toFixed(2)

  trungbinhsothuc.innerHTML = "Kết qua trung bình năm số thực " + trungbinh;
};


// Quy đổi tiền
var toVNĐ = document.querySelector(".toVNĐ");
var VNĐ = document.querySelector(".VNĐ");
toVNĐ.onclick = function () {
  var tienVNĐ = document.querySelector("#tienVNĐ").value;
  var doitien = tienVNĐ * 235000;
  VNĐ.innerHTML = "Tiền Việt Nam là :" + doitien + "VNĐ";
};

// Tính diện tích chu vi hình chữ nhật
var ketqua = document.querySelector(".ketqua");
var dientich = document.querySelector(".dientich");
var chuvi = document.querySelector(".chuvi");
ketqua.onclick = function () {
  var chieudai = parseInt(document.getElementById("chieudai").value);
  var chieurong =parseInt( document.getElementById("chieurong").value);
  var dientichhinhchunhat = chieudai * chieurong;
  var chuvihinhchunhat =((chieudai+chieurong)*2)
  console.log(dientichhinhchunhat);
  dientich.innerHTML = "Diện tích hình chữ nhật là  : " + dientichhinhchunhat;
  chuvi.innerHTML = "Chu vi hình chữ nhật là  : " + chuvihinhchunhat;

};

// Tính tổng hai ký số
var tinhtong = document.querySelector(".tinhtong");
var KQ = document.querySelector(".KQ");
tinhtong.onclick = function () {
  var tong = parseInt(document.querySelector("#tong").value);
  var tonghaichuso=(tong%10)+(Math.floor(tong/10))
  KQ.innerHTML = "Tổng của số có hai chữ số là:" + tonghaichuso.toFixed(0)
};
