var posts=["2026/04/24/Tic Tac Toe/","2026/04/24/Flappy Bird/","2026/04/24/Breakout/","2026/04/24/Tetris/","2026/04/24/Minesweeper/","2026/04/24/Snake Game/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };