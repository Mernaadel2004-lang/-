function sendCode() {
  var input = document.getElementById("emailInput").value.trim();

  // التحقق من إن الحقل مش فاضي
  if (input === "") {
    showError("من فضلك أدخل البريد الإلكتروني أو رقم الهاتف");
    return;
  }

  // تحقق من الإيميل
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // تحقق من رقم الهاتف المصري
  var phonePattern = /^(010|011|012|015)\d{8}$/;

  if (!emailPattern.test(input) && !phonePattern.test(input)) {
    showError("من فضلك أدخل إيميل صحيح أو رقم هاتف مصري صحيح");
    return;
  }

  // لو كل حاجة تمام
  hideError();
  alert("تم إرسال رمز التحقق بنجاح ✅");
}

// دالة لإظهار رسالة الخطأ
function showError(message) {
  var errorMsg = document.getElementById("errorMsg");
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
}

// دالة لإخفاء رسالة الخطأ
function hideError() {
  var errorMsg = document.getElementById("errorMsg");
  errorMsg.style.display = "none";
}

// تغيير لون الـ select لما المستخدم يختار
document.getElementById("accountType").addEventListener("change", function () {
  if (this.value !== "") {
    this.style.color = "#1a2d4e";
  }
});

// إخفاء رسالة الخطأ لما المستخدم يبدأ يكتب
document.getElementById("emailInput").addEventListener("input", function () {
  hideError();
});