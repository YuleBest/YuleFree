var posts=["post14/","post3/","app/","post9/","fadian/","post8/","post10/","post6/","post7/","quote/","pinglun001/","post12/","post2/","post11/","post5/","post4/","film/001/","post1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };