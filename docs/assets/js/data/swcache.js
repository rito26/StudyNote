const resource = [

  /* --- CSS --- */
  '/StudyNote/assets/css/style.css',

  /* --- JavaScripts --- */
  
  '/StudyNote/assets/js/dist/home.min.js',
  '/StudyNote/assets/js/dist/page.min.js',
  '/StudyNote/assets/js/dist/post.min.js',
  '/StudyNote/assets/js/dist/categories.min.js',
  '/StudyNote/assets/js/data/search.json',
  '/StudyNote/app.js',
  '/StudyNote/sw.js',

  /* --- HTML --- */
  '/StudyNote/index.html',
  '/StudyNote/404.html',
  
    '/StudyNote/tabs/categories/',
  
    '/StudyNote/tabs/tags/',
  
    '/StudyNote/tabs/archives/',
  
    '/StudyNote/tabs/about/',
  

  /* --- Favicons --- */
  

  '/StudyNote/assets/img/favicons/android-chrome-192x192.png',
  '/StudyNote/assets/img/favicons/android-chrome-512x512.png',
  '/StudyNote/assets/img/favicons/apple-touch-icon.png',
  '/StudyNote/assets/img/favicons/favicon-16x16.png',
  '/StudyNote/assets/img/favicons/favicon-32x32.png',
  '/StudyNote/assets/img/favicons/favicon.ico',
  '/StudyNote/assets/img/favicons/mstile-150x150.png',
  '/StudyNote/assets/img/favicons/site.webmanifest',
  '/StudyNote/assets/img/favicons/browserconfig.xml'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'rito26.github.io',

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

