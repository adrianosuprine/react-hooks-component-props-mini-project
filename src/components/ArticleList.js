import React from "react";
import Article from  "./Article";
function ArticleList({posts}){
    console.log(posts);
    return (
        <main>
            {posts.map((post) =>(
             <Article key={post.id} title={post.title}  preview={post.preview}  
             date={post.date} />
            )
            
            )}
        </main>
    );
}

export default ArticleList;