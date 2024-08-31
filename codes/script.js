// انتخاب آیتم‌های پیشنهاد ویژه
const featuredItems = document.querySelectorAll('.featured-item');

// انتخاب دکمه‌های قبلی و بعدی
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// ایجاد یک متغیر برای نگهداری از ایندکس آیتم فعلی
let currentItemIndex = 0;

// تابعی برای نمایش آیتم بعدی
function showNextItem() {
  // پنهان کردن آیتم فعلی
  featuredItems[currentItemIndex].classList.remove('active');

  // افزایش ایندکس آیتم فعلی
  currentItemIndex = (currentItemIndex + 1) % featuredItems.length;

  // نمایش آیتم بعدی
  featuredItems[currentItemIndex].classList.add('active');
}

// تابعی برای نمایش آیتم قبلی
function showPrevItem() {
  // پنهان کردن آیتم فعلی
  featuredItems[currentItemIndex].classList.remove('active');

  // کاهش ایندکس آیتم فعلی
  currentItemIndex = (currentItemIndex - 1 + featuredItems.length) % featuredItems.length;

  // نمایش آیتم قبلی
  featuredItems[currentItemIndex].classList.add('active');
}

// انتخاب منو و آیتم‌های آن
const menuContainer = document.querySelector('.menu-container');
const menuItems = document.querySelectorAll('.menu-item');

// ایجاد یک متغیر برای نگهداری از ایندکس آیتم فعلی
let menuCurrentItemIndex = 0;

// تابعی برای اسکرول منو به سمت چپ
function scrollMenuLeft() {
  // محاسبه عرض منو
  const menuWidth = menuContainer.offsetWidth;

  // محاسبه عرض آیتم فعلی
  const itemWidth = menuItems[menuCurrentItemIndex].offsetWidth;



  // افزایش ایندکس آیتم فعلی
  menuCurrentItemIndex = (menuCurrentItemIndex + 1) % menuItems.length;

  // اگر به انتهای منو رسیدیم، اسکرول را به ابتدا برگردانیم
  if (menuCurrentItemIndex === 0) {
    menuContainer.scrollLeft = 0;
  }
}

// تنظیم یک تایمر برای نمایش آیتم بعد هر 2 ثانیه
let timer;

// اضافه کردن رویداد لود به صفحه
window.addEventListener('load', () => {
    timer = setInterval(() => {
      showNextItem();
      scrollMenuLeft();
    }, 2000);
  
    // اضافه کردن حرکت اولیه
    showNextItem();
    scrollMenuLeft();
  });




// اضافه کردن رویداد کلیک به آیتم‌های منو
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    clearInterval(timer);
    // اسکرول منو به سمت چپ
    scrollMenuLeft();
    timer = setInterval(() => {
      showNextItem();
      scrollMenuLeft();
    }, 2000);
  });
});

// 获取 ایتم‌های منو


// ایجاد لینک به صفحات دیگر
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    const link = menuItem.getAttribute('data-link');
    window.location.href = link;
  });
});