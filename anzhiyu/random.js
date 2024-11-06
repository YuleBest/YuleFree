var posts=["post14/","post3/","post15/","app/","post9/","fadian/","film/001/","post10/","post8/","post7/","post6/","pinglun001/","quote/","post11/","post2/","post12/","post5/","post4/","post1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };