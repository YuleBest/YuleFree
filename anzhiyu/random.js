var posts=["post14/","post3/","post15/","app/","post9/","lsp/","fadian/","post10/","film/001/","post7/","post8/","post6/","pinglun001/","quote/","post11/","post12/","post2/","post5/","post1/","post4/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };