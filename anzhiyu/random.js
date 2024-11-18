var posts=["post14/","post15/","app/","post3/","fadian/","film/001/","post9/","post8/","post7/","pinglun001/","post6/","quote/","post11/","post12/","post10/","post2/","post5/","post4/","post1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };