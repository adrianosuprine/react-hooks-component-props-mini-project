function Article({title,preview,mins,date}){
    return (
        <div>
            <article>
                <h3>{title}</h3>
                <small>{date} . {mins}min read</small>
                <p>{preview}</p>
            </article>
           
        </div>
    )
}
export default Article;