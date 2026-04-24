var posts=["2026/04/24/这是一篇日志/","2026/04/24/这是一篇新的博文/","2026/04/24/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };