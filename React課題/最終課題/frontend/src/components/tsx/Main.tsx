import React, { useState, useEffect } from 'react';
import "../css/Header.css";
import "../css/Main.css";

const Main: React.FC = () => {
  /* 
  新着順(TOP): https://hacker-news.firebaseio.com/v0/newstories.json
  人気順(NEW): https://hacker-news.firebaseio.com/v0/topstories.json
  ベスト順(BEST): https://hacker-news.firebaseio.com/v0/beststories.json
  */

  const [news, setNews] = useState([] as any); // useStateで配列を格納
  const [category, setCategory] = useState('newstories'); // 初期値はTOPカテゴリ

  // ボタン押下でニュースカテゴリーを切り替える。
  const changeCategory = (val: any) => {
    const categories = ["newstories", "topstories", "beststories"];
    setCategory(categories[val]);
  }
  
  useEffect(() => {
    // 配列の中身をリセット
    setNews([]);

    // ニュースIDを配列で取得
    fetch(`https://hacker-news.firebaseio.com/v0/${category}.json`)
     .then(resp => resp.json())
     .then(datas => {
      // ニュースID配列を基に記事データ取得(数が多いので20件まで <= ※今回はページング機能はなしで)
      for (let i=0; i<20; i++) {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${datas[i]}.json?print=pretty`)
        .then(resp => resp.json())
        .then(items => {
          console.log(items);
          // ニュース記事データを配列に追加
          setNews((news: any)=>[...news, items]);
        })
      }
     })
     .catch(error => {
      console.log(error);
     });
   }, [category]);

  return (
    <>
     <header className='header'>
        <div className='header-logo'>
            <h1><a href=''>Hacker News</a></h1>
        </div>
        <nav className='header-nav'>
          <ul>
            <li><a href='' onClick={() => changeCategory(0)}>TOP</a></li>
            <li><a href='' onClick={() => changeCategory(1)}>NEW</a></li>
            <li><a href='' onClick={() => changeCategory(2)}>BEST</a></li>
          </ul>         
        </nav>
      </header>

      <main>
        <div className='news'>
          <div className='news-list'>
            <ul>
              {news.map((item: any) => {
                return (
                  <li>
                    <div className='news-block'>
                      <p>{item.by}</p>
                      <h2><a href={item.url}>{item.title}</a></h2>
                    </div>
                  </li>
                )
              })} 
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;