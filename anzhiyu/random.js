var posts=["2026/04/22/My-New-Post/","2026/04/22/这是一篇新的博文/","2026/04/22/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };