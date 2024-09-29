var posts=["post3/","post9/","fadian/","post10/","post7/","post8/","post6/","quote/","post11/","post12/","post2/","post5/","post4/","post1/","app/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };