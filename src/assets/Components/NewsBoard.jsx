import { useEffect, useState } from "react"
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({category}) => {
    const[articles, setArticles]= useState([]);

    useEffect(()=>{
        let url = `https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_API_KEY}&q=${category}&country=in`
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=>setArticles(data.results));
    },[category])
  return (
    <div>
        <h1 class="font-sans font-bold text-center m-3 text-2xl text-gray-800">Latest News</h1>
        <div class='flex flex-wrap justify-evenly'>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.image_url} url={news.link}/> 
        })}</div>
    </div>
  )
}
