import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header";
import About from "./About";


console.log(blogData);


function App() {
  return (
    <div className="App">
      <Header className="App header"username={blogData.name} />
       <About logo={blogData.image}  about={blogData.about} />
      <ArticleList posts={blogData.posts}/>
     
    </div>
   
  );
}

export default App;
