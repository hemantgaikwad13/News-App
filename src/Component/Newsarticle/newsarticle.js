import React from 'react'

function Newsarticle(author, title, description, url, urlToImage, publishedAt) {
    return (
        <div>
            <div className='news-article-card' key={index}>
                <img src={urlToImage} alt="" classname="news-article-img" />
                <h1 className='article-title'>{title}</h1>

                <div className='article-info'>
                    <p className='article-author'>{author}</p>
                    <p className='article-publishedat'>{publishedAt}</p>
                </div>

                <p className='article-description'>{description}</p>
                
                <a href={url} target="blank" className='btn-readmore'>Read More</a>
            </div>
        </div>
    )
}

export default Newsarticle
