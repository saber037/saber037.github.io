var posts=["2026/04/24/Tetris/","2026/04/24/Minesweeper/","2026/04/24/Snake Game/","2026/04/24/Source Puzzle Game/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };