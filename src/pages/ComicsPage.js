
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'js-md5';
import Layout from '../components/Layout'
import ComicList from '../components/ComicList';
import Comic from '../components/Comic';

function ComicsPage() {
  const [comics, setComics] = useState([])

  useEffect(() => {
    const main = async () => {
      try {
        const ts = Number(new Date())
        const hash = md5.create();
        hash.update(ts + process.env.REACT_APP_HERO_PRIVATE_KEY + process.env.REACT_APP_HERO_PUBLIC_KEY);

        const { data: { data: { results } } } = await axios.get("https://gateway.marvel.com/v1/public/comics", {
          params: {
            ts,
            apikey: process.env.REACT_APP_HERO_PUBLIC_KEY,
            hash: hash.hex(),
          }
        })

        console.log(results)

        setComics(results)
      } catch(e) {
        console.log(e)
      }
    }

    main()
  }, [])

  return (
    <Layout>
      <ComicList>
        {comics.map(comic => (
          <Comic
            id={comic.id}
            modified={comic.modified}
            name={comic.series.name}
            collectionURI={comic.characters.collectionURI}
            description={comic.description} // highlight-line
            img={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} // highlight-line
            pageCount={comic.pageCount}
          />
        ))}
      </ComicList>
    </Layout>
  );
}

export default ComicsPage