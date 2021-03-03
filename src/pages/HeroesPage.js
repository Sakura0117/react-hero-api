
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'js-md5';
import Layout from '../components/Layout'
import HeroList from '../components/HeroList';
import Hero from '../components/Hero';

function HeroesPage() {
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    const main = async () => {
      try {
        const ts = Number(new Date())
        const hash = md5.create();
        hash.update(ts + process.env.REACT_APP_HERO_PRIVATE_KEY + process.env.REACT_APP_HERO_PUBLIC_KEY);

        const { data: { data: { results } } } = await axios.get("https://gateway.marvel.com/v1/public/characters", {
          params: {
            ts,
            apikey: process.env.REACT_APP_HERO_PUBLIC_KEY,
            hash: hash.hex(),
          }
        })

        console.log(results)

        setHeroes(results)
      } catch(e) {
        console.log(e)
      }
    }

    main()
  }, [])

  return (
    <Layout>
      <HeroList>
        {heroes.map(hero => (
          <Hero
          name={hero.name}
            title={hero.events.collectionURI}
            description={hero.description} // highlight-line
            img={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} // highlight-line
            modified={hero.modified}
            collectionURI={hero.comics.collectionURI}
          />
        ))}
      </HeroList>
    </Layout>
  );
}

export default HeroesPage