import { useState } from "react";
import "./style.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("");

  function handleSend() {
    if (email.trim() === "") {
      alert("من فضلك أدخل البريد الإلكتروني أو رقم الهاتف");
      return;
    }
    alert("تم إرسال رمز التحقق بنجاح ✅");
  }

  return (
    <div>
      <div className="container">

        {/* الجانب الأيسر */}
        <div className="left-panel">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Coat_of_arms_of_Egypt.svg"
              alt="شعار مصر"
              width="48"
            />
            <div>
              <h2>نظام الكارت الطبي الذكي</h2>
              <p>صحة المواطن.. مسئوليتنا جميعاً</p>
            </div>
          </div>

          <h1>إعادة تعيين كلمة المرور</h1>
          <p className="subtitle">
            لا تقلق، سنساعدك في استعادة الوصول إلى حسابك بخطوات بسيطة وآمنة
          </p>

          <div className="features">
            <div className="feature-item">
              <div className="icon">🔒</div>
              <div>
                <strong>أمن وسري</strong>
                <p>نضمن حماية بياناتك ومعلوماتك الشخصية بأعلى معايير الأمان.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="icon">✉️</div>
              <div>
                <strong>خطوات سهلة</strong>
                <p>عملية إعادة تعيين كلمة المرور سريعة وبسيطة</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="icon">🛡️</div>
              <div>
                <strong>حسابك محمي</strong>
                <p>نستخدم تقنيات متقدمة لحماية حسابك من الوصول غير المصرح.</p>
              </div>
            </div>
          </div>
        </div>

        {/* الجانب الأيمن */}
        <div className="right-panel">

          <div className="lock-icon">🔒</div>

          <h2>نسيت كلمة المرور؟</h2>
          <p className="form-subtitle">
            أدخل البريد الإلكتروني أو رقم الهاتف المرتبط بحسابك
            وسنرسل لك رمز التحقق لإعادة تعيين كلمة المرور
          </p>

          {/* الخطوات */}
          <div className="steps">
            <div className="step active">
              <div className="step-circle">1</div>
              <span>إدخال البيانات</span>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-circle">2</div>
              <span>التحقق</span>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-circle">3</div>
              <span>إعادة تعيين</span>
            </div>
          </div>

          {/* الفورم */}
          <div className="form-group">
            <label>البريد الإلكتروني أو رقم الهاتف</label>
            <div className="input-wrapper">
              <span className="input-icon">✉️</span>
              <input
                type="text"
                placeholder="أدخل بريدك الإلكتروني أو رقم هاتفك"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <small>أدخل البريد الإلكتروني أو رقم الهاتف الذي استخدمته عند إنشاء الحساب</small>
          </div>

          <div className="form-group">
            <label>
              نوع الحساب <span className="optional">(اختياري)</span>
            </label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              style={{ color: accountType ? "#1a2d4e" : "#a0b4cc" }}
            >
              <option value="">اختر نوع الحساب</option>
              <option value="citizen">مواطن</option>
              <option value="doctor">طبيب</option>
              <option value="hospital">مستشفى</option>
              <option value="pharmacy">صيدلية</option>
            </select>
          </div>

          <button className="send-btn" onClick={handleSend}>
            📨 إرسال رمز التحقق
          </button>

          <div className="info-box">
            <span>ℹ️</span>
            <div>
              <p>ستصلك رسالة تحتوي على رمز التحقق لإعادة تعيين كلمة المرور</p>
              <small>قد تستغرق الرسالة بضع دقائق لتصل إليك</small>
            </div>
          </div>

          <div className="links">
            <a href="#">تذكرت كلمة المرور؟</a>
            <a href="#">← العودة إلى تسجيل الدخول</a>
          </div>

        </div>
      </div>

      {/* الفوتر */}
      <div className="footer">
        <div className="footer-item">🔒 <span><strong>خصوصية تامة</strong> — نحترم خصوصيتك ولا نشارك بياناتك</span></div>
        <div className="footer-item">🎧 <span><strong>مساعدة فنية</strong> — تحتاج مساعدة؟ اتصل بنا على 15344</span></div>
        <div className="footer-item">🛡️ <span><strong>حماية وأمان</strong> — بياناتك محمية بأعلى معايير للأمان</span></div>
      </div>
    </div>
  );
}
