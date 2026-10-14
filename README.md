# ذهن‌آرا | Zehnara

<div dir="rtl">

ذهن‌آرا یک وب‌سایت دوزبانه برای تمرین استدلال تصویری، عددی و منطقی است. زبان پیش‌فرض فارسی است و می‌توان در هر مرحله به انگلیسی تغییر زبان داد. با ۲۰ پرسش در ۱۵ دقیقه، الگوها را پیدا کنید، نتیجه را ببینید و از توضیح پاسخ‌ها یاد بگیرید.

این پروژه فقط با **HTML، CSS و JavaScript** ساخته شده است؛ برای اجرای آن نیازی به فریم‌ورک، بک‌اند، پایگاه داده یا مرحله ساخت ندارید.

**امتیاز این آزمون برای تمرین است و ضریب هوشی استاندارد یا ارزیابی بالینی محسوب نمی‌شود.**

</div>

[راهنمای فارسی](#راهنمای-فارسی) · [English](#english)

## راهنمای فارسی

### امکانات

- رابط فارسی راست‌به‌چپ و انگلیسی چپ‌به‌راست؛ تغییر زبان بدون از دست رفتن پاسخ‌ها.
- یک معمای تعاملی در صفحه اصلی برای آشنایی با الگوها.
- ۲۰ پرسش چهارگزینه‌ای با امکان رفت‌وبرگشت، رد شدن از سوال و انتخاب مستقیم از فهرست پرسش‌ها.
- زمان‌سنج ۱۵ دقیقه‌ای و پایان آزمون پس از تمام شدن زمان هنگام حضور در آزمون یا بازگشت به آن.
- ذخیره پیشرفت، آخرین نتیجه و زبان انتخاب‌شده در مرورگر.
- نمایش تعداد پاسخ‌های درست، امتیاز درصدی، عملکرد هر مهارت و توضیح همه پاسخ‌ها.
- دریافت نتیجه و توضیح‌ها در یک فایل متنی، به زبان انتخاب‌شده.
- طراحی واکنش‌گرا، پیمایش با صفحه‌کلید، نمایش واضح فوکوس و پشتیبانی از تنظیم کاهش حرکت.
- قلم وزیرمتن همراه پروژه؛ بدون نیاز به دریافت قلم از سرویس خارجی هنگام اجرا.

### راه‌اندازی

برای اجرای ساده، فایل [index.html](index.html) را در یک مرورگر به‌روز باز کنید. همه فایل‌های مورد نیاز همراه پروژه هستند و برای استفاده از برنامه نیازی به نصب بسته ندارید.

برای توسعه، استفاده از یک سرور محلی پیشنهاد می‌شود. با نصب Node.js و pnpm، دستور زیر را در پوشه پروژه اجرا کنید:

```sh
pnpm dlx http-server . -p 3000 -c-1
```

سپس [http://localhost:3000](http://localhost:3000) را باز کنید. گزینه `-c-1` کش سرور را غیرفعال می‌کند تا تغییرات فایل‌ها هنگام توسعه دیده شوند. اجرای نخست این دستور ممکن است برای دریافت ابزار `http-server` به اینترنت نیاز داشته باشد.

### آزمون و امتیازدهی

| مهارت | تعداد پرسش | موضوع |
| --- | ---: | --- |
| استدلال تصویری | ۷ | دنباله شکل‌ها، چرخش و جدول الگوها |
| تفکر منطقی | ۵ | نتیجه‌گیری از سرنخ‌ها و روابط |
| استدلال عددی | ۸ | دنباله‌ها و الگوهای عددی |

هر پاسخ درست یک امتیاز دارد. پاسخ اشتباه و سوال بدون پاسخ، امتیازی ندارند و نمره منفی نیز در نظر گرفته نمی‌شود. امتیاز درصدی برابر است با تعداد پاسخ‌های درست تقسیم بر ۲۰، ضرب در ۱۰۰؛ برای مثال، ۱۵ پاسخ درست یعنی ۷۵٪.

پیش از پایان آزمون می‌توانید پاسخ‌ها را تغییر دهید. پس از ثبت نتیجه، پاسخ‌ها قابل تغییر نیستند، اما می‌توانید توضیح هر سوال را بررسی کنید یا آزمون تازه‌ای شروع کنید. پرسش‌ها و ترتیب آن‌ها در این نسخه ثابت‌اند؛ شروع دوباره، پاسخ‌ها و نتیجه قبلی را جایگزین می‌کند.

### زمان و ذخیره پیشرفت

زمان آزمون از لحظه شروع محاسبه می‌شود و با بازگشت به صفحه اصلی، بارگذاری مجدد یا بستن صفحه متوقف نمی‌شود. اگر پس از پایان زمان به آزمون برگردید، نتیجه بر اساس پاسخ‌های ثبت‌شده نمایش داده می‌شود.

پیشرفت در `localStorage` همان مرورگر و همان آدرس سایت نگهداری می‌شود. پاک کردن داده‌های سایت یا استفاده از مرورگر، دستگاه یا آدرس دیگری، پیشرفت قبلی را منتقل نمی‌کند. برای ادامه آزمون، از گزینه «ادامه آزمون قبلی» در صفحه اصلی استفاده کنید.

برنامه نام، ایمیل یا حساب کاربری نمی‌خواهد و پاسخ‌های آزمون را به سرور ارسال نمی‌کند. اگر ذخیره‌سازی مرورگر در دسترس نباشد، آزمون در صفحه باز قابل استفاده است؛ برای حفظ پاسخ‌ها آن را نبندید و دوباره بارگذاری نکنید.

### ساختار پروژه

```text
.
├── index.html              # ساختار صفحه و متن‌های فارسی
├── styles.css              # ظاهر، واکنش‌گرایی و چیدمان دو زبان
├── questions.js            # پرسش‌ها، گزینه‌ها و توضیح پاسخ‌ها
├── app.js                  # منطق آزمون، ترجمه، ذخیره‌سازی و نتایج
├── assets/
│   ├── favicon.svg         # آیکون سایت
│   ├── Vazirmatn.woff2     # قلم محلی
│   └── OFL.txt             # مجوز قلم
└── README.md
```

### تغییر محتوا و ظاهر

**پرسش‌ها:** بانک سوال در [questions.js](questions.js) قرار دارد. هر پرسش یک دسته، عنوان دوزبانه، چهار گزینه، شماره پاسخ درست و توضیح دوزبانه دارد. شماره گزینه‌ها از صفر شروع می‌شود؛ `answer: 2` یعنی گزینه سوم درست است.

نمونه یک پرسش عددی:

```js
{
  category: 'numbers',
  title: {
    fa: 'عدد بعدی این دنباله چیست؟',
    en: 'What is the next number in this sequence?'
  },
  prompt: { type: 'numbers', values: [2, 4, 6, 8] },
  options: [9, 10, 12, 16],
  answer: 1,
  explanation: {
    fa: 'هر بار ۲ به عدد قبلی اضافه می‌شود؛ پاسخ ۱۰ است.',
    en: 'Add 2 to the previous number at each step. The answer is 10.'
  }
}
```

دسته‌های پشتیبانی‌شده `visual`، `logic` و `numbers` هستند. برای نمایش الگوها، نوع `prompt` می‌تواند `numbers`، `sequence` یا `matrix` باشد. پرسش‌های متنی به `prompt` نیاز ندارند.

**ترجمه‌ها:** متن‌های فارسی صفحه اصلی در [index.html](index.html) و ترجمه انگلیسی آن‌ها در [app.js](app.js) قرار دارند. متن‌های مراحل آزمون و نتایج برای هر دو زبان در `app.js` تعریف شده‌اند. محتوای پرسش‌ها در `questions.js` است.

**ظاهر:** رنگ‌های اصلی در متغیرهای ابتدای [styles.css](styles.css) تعریف شده‌اند. چیدمان موبایل و حالت‌های راست‌به‌چپ و چپ‌به‌راست نیز در همین فایل قرار دارند.

**مدت و تعداد سوال‌ها:** مقدار `DURATION` در `app.js` زمان آزمون را بر حسب میلی‌ثانیه تعیین می‌کند. اگر زمان یا تعداد سوال‌ها را تغییر می‌دهید، متن‌های معرفی و مقادیر ثابت مرتبط در `index.html` و `app.js` را نیز هماهنگ کنید؛ برخی از آن‌ها برای آزمون ۲۰ سوالی تنظیم شده‌اند.

**ذخیره‌سازی:** کلید `zehnara.quiz.v1` برای وضعیت و نتیجه آزمون و کلید `zehnara.language` برای زبان انتخاب‌شده استفاده می‌شود. اگر ساختار یا ترتیب سوال‌ها را تغییر می‌دهید، نسخه و کلید ذخیره آزمون در `app.js` را نیز تغییر دهید تا پاسخ‌های قبلی به سوال‌های جدید نسبت داده نشوند.

### بررسی تغییرات

برای بررسی نحو فایل‌های JavaScript، با نصب Node.js اجرا کنید:

```sh
node --check app.js
node --check questions.js
```

این دستورها فقط نحو کد را بررسی می‌کنند. پس از تغییر رابط یا پرسش‌ها، شروع و ادامه آزمون، تغییر زبان، پایان زمان، امتیازدهی، توضیح پاسخ‌ها و دریافت فایل نتیجه را در مرورگر بررسی کنید. چیدمان فارسی و انگلیسی را در اندازه موبایل و دسکتاپ نیز ببینید.

### انتشار

پروژه را می‌توان روی هر سرویس میزبانی فایل‌های استاتیک منتشر کرد. فایل‌های `index.html`، `styles.css`، `questions.js`، `app.js` و پوشه `assets` را با همین ساختار در ریشه سایت قرار دهید. دستور ساخت، متغیر محیطی یا سرور برنامه لازم نیست.

### قلم

قلم [Vazirmatn](https://github.com/rastikerdar/vazirmatn) با مجوز SIL Open Font License 1.1 همراه پروژه است. متن مجوز در [assets/OFL.txt](assets/OFL.txt) قرار دارد؛ هنگام توزیع قلم، این فایل را نیز نگه دارید. این مجوز مربوط به قلم است.

## English

**Zehnara** is a Persian-first logic and IQ practice website built with plain HTML, CSS, and JavaScript. It includes 20 questions across visual reasoning, logical thinking, and numerical reasoning, with a 15-minute timer. Persian uses an RTL layout, English uses LTR, and switching languages preserves your answers.

### Quick start

Open `index.html` in a modern browser, or run the following from the project folder with Node.js and pnpm installed:

```sh
pnpm dlx http-server . -p 3000 -c-1
```

Visit [http://localhost:3000](http://localhost:3000). No application dependencies, backend, or build step are required. The optional preview server may need an internet connection on its first run.

### How it works

- Each correct answer earns one point; wrong and unanswered questions earn zero. There is no negative marking.
- Results include a percentage, a breakdown by skill, explanations for every answer, and a downloadable text summary.
- Progress and language preferences are stored in your browser. The timer continues after leaving or closing the page.
- Questions use a fixed order. Starting again replaces your previous answers and results.
- Fonts and assets are bundled locally. You can publish the application files and `assets` folder to any static host.

Edit `questions.js` for questions, `styles.css` for appearance, and `index.html` / `app.js` for interface copy. Keep both languages in sync. Update the saved-test version and storage key if you change the question structure or order.

The score is for practice and does not represent a standardized IQ measurement or clinical assessment. Vazirmatn is included under the SIL Open Font License; see [assets/OFL.txt](assets/OFL.txt).
