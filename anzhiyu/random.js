var posts=["post14/","app/","post3/","post9/","post10/","post7/","fadian/","film/001/","post8/","post11/","post6/","quote/","pinglun001/","post12/","post2/","post5/","post4/","post1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };