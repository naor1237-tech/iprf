# עידו מסיבות בריכה — אתר תדמית

אתר סטטי (HTML/CSS/JS, ללא build) למתחם הבריכה הפרטי של עידו בפדיה.
מתחם לנשים בלבד: מסיבות רווקות, בת מצווה, ימי גיבוש וימי הולדת.

* **טלפון / וואטסאפ:** 050-530-5186
* **כתובת:** פדיה 13
* **פייסבוק:** https://www.facebook.com/parttipol
* **כתובת מתוכננת:** https://parttipol.netlify.app

## מבנה הפרויקט

```
index.html            # עמוד הבית (כולל SEO + JSON-LD)
accessibility.html    # הצהרת נגישות (דרישת חוק)
404.html              # עמוד שגיאה
robots.txt / sitemap.xml
netlify.toml          # הגדרות פריסה + headers + cache
site.webmanifest, favicon.*, *.png   # אייקונים ומיתוג
assets/css/styles.css # עיצוב
assets/js/main.js     # תפריט נייד + גלריית lightbox
assets/img/*          # תמונות מאופטמות
```

## פיתוח מקומי

אין צורך בכלים — זה אתר סטטי. להרצה מקומית:

```bash
python3 -m http.server 8000
# פתחו http://localhost:8000
```

## פריסה ל-Netlify (חינמי)

1. היכנסו ל-[Netlify](https://app.netlify.com) → **Add new site → Import an existing project** → בחרו את ה-repository ואת הענף.
2. הגדרות build:
   * **Build command:** ריק
   * **Publish directory:** `.`
3. לאחר הפריסה: **Site configuration → Change site name** → הקלידו `parttipol` כדי לקבל `https://parttipol.netlify.app`.
   אם השם תפוס, נסו: `ido-pool-parties`, `ido-bareicha`, `masibot-breicha`.

## קידום בגוגל (לאחר העלייה)

1. **Google Search Console** — אמתו את האתר והגישו את `sitemap.xml`.
2. **Google Business Profile** — פתחו/עדכנו פרופיל עסקי (שם, כתובת פדיה 13, טלפון, תמונות, קישור לאתר). קריטי לחיפוש מקומי ולמפות.
3. עדכנו את קישור האתר בדף הפייסבוק.

## עדכון תוכן

* טלפון/וואטסאפ — חיפוש והחלפה של `972505305186` ו-`050-530-5186`.
* תמונות — להוסיף/להחליף ב-`assets/img/` ולעדכן את הגלריה ב-`index.html` (כולל `alt`).
* טקסטים, שאלות נפוצות, יתרונות — ישירות ב-`index.html`.

## הערות

* **נגישות:** האתר נבנה לפי WCAG 2.0 AA + הצהרת נגישות. לעמידה מלאה מומלץ בהמשך גם תוסף נגישות מוסמך (למשל EqualWeb / "נגיש בקליק").
* כל כפתורי הפעולה מובילים לוואטסאפ או לשיחה — אין טופס ששומר מידע אישי.
