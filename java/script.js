function sendCode() {
  var input = document.getElementById("emailInput").value.trim();

  if (input === "") {
    alert("من فضلك أدخل البريد الإلكتروني أو رقم الهاتف");
    return;
  }

  alert("تم إرسال رمز التحقق بنجاح ✅");
}

// تغيير لون الـ select لما المستخدم يختار
document.getElementById("accountType").addEventListener("change", function () {
  if (this.value !== "") {
    this.style.color = "#1a2d4e";
  }
});
