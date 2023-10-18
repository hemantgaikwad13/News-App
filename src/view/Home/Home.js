// 0e6185a48ea94c35978d28f4b38f8750
import React, { useEffect, useState } from 'react'
import axios from "axios"
import NewsArticle from '../../Component/Newsarticle/newsarticle';
import "./Home.css"

function Home() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("pune")

  const loadNews = async () => {
    try {
      const respopnse = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-10-16&to=2023-10-16&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);

      setNews(respopnse.data.article)
    }
    catch (error) {
      console.log(Error)
    }
  }

  useEffect(() => {
    loadNews()
  }, [])

  useEffect(() => {
    loadNews()
  }, [searchQuery])

  return (
    <div>
      <h1>News App</h1>

      <input className='search-input'
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }} />
      <div className='news-container'>
        {
          news.map((newsArticle, index) => {
            const { author, title, description, url, urlToImage, publishedAt } = newsArticle

            return (<NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} key={index}/>)
          })
        }
      </div>
    </div>
  )
}

export default Home
