function Article({title,preview,date,mins}){
    return (
        <div>
            <article>
                <h3>{title}</h3>
                <small>{date || 'January 1, 1970'} . {mins}minutes read</small>
                <p>{preview}</p>
            </article>
           
        </div>
    )
}
export default Article;