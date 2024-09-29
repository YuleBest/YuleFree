var posts=["post3/","app/","post9/","post7/","fadian/","post10/","post8/","quote/","post6/","post11/","post2/","post5/","post12/","post4/","post1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };