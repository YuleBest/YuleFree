var posts=["post14/","post3/","post15/","app/","post9/","lsp/","post10/","post7/","post8/","fadian/","post6/","pinglun001/","quote/","post11/","film/001/","post12/","post2/","post5/","post1/","post4/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };