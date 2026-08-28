// گرفتن فرم از صفحه
const loginForm = document.querySelector("form");

// تعریف عملیات هنگام کلیک روی دکمه ورود
loginForm.addEventListener("submit", function (e) {
  // جلوگیری از رفرش شدن صفحه
  e.preventDefault();

  // پیام تستی
  alert("خوش آمدید! در حال ورود به دنیای اسباب‌بازی‌ها...");

  // جهت اضافه کردن کدهای اتصال به دیتابیس
  console.log("دکمه ورود زده شد!");
});
