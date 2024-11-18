var posts=["post14/","post3/","app/","post15/","film/001/","fadian/","post9/","post7/","post8/","post10/","post6/","post11/","pinglun001/","post12/","quote/","post2/","post5/","post1/","post4/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };