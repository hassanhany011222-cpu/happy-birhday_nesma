# موقع عيد ميلاد أختي 🎁

## تعديل المحتوى (كله من script.js → CONFIG)
- الصور: حطها في assets/images/ بأسماء 1.jpg, 2.jpg ... وعدّل التعليقات في CONFIG.photos. لإضافة صورة جديدة انسخ سطر وغيّر الاسم.
  (يفضّل صور عمودية 4:5، حجم أقل من 500KB للواحدة)
- الأغنية: حط ملف MP3 في assets/music/ باسم song.mp3 (أو غيّر الاسم في CONFIG.song).
- الرسالة: CONFIG.letter  |  التاريخ: CONFIG.birthday  |  الألوان: أول style.css

## الرفع على GitHub Pages
1. ادخل github.com وسجّل دخول > New repository > الاسم مثلاً: birthday > Public > Create.
2. اضغط "uploading an existing file" وارفع كل محتويات المجلد (index.html, style.css, script.js, assets) مباشرة، مش المجلد نفسه.
3. اضغط Commit changes.
4. Settings > Pages > Source: Deploy from a branch > Branch: main / (root) > Save.
5. استنى دقيقة-دقيقتين والرابط هيظهر: https://USERNAME.github.io/birthday/
6. افتحه من موبايلك قبل ما تبعته، وجرّب الأغنية.
