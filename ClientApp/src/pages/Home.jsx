import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <main className="hero">
        <h1 class="appHeading">Mural Pass</h1>
        <h2 class="tagline">Discover the cities best murals!</h2>
        {/* add a call to action link/button to map */}
        <Link to="/map" class="callToAction">
          Discover Murals
        </Link>
      </main>
      <section class="aboutUs">
        <h3 class="aboutUsHeading">About Mural Pass</h3>
        <p>
          Have you ever been wandering around a city and stubble across an
          amazing mural on the side of a building? Then thought "I wish I had a
          map to find all the other stunning works of art this city has to
          offer"... Thats why we brought to life Mural Pass! A fun interactive
          way to go out an explore the city. Discovering amazing works of art,
          collecting stamps for visited murals! Not to mention mural history and
          the ability to discover and connect with artists.
        </p>
        {/* add a carousel of mural images... about 2/3 the width of the how it works bubbles */}
      </section>
      {/* have an image of the map that when you click it it take you to the interactive map page */}
      {/* maybe somehow turn these three things into a carousel? to shorten page */}
      <section class="howItWorks">
        <h3>How it Works</h3>
        <section class="list">
          <h4>Create a Profile</h4>
          <p>
            So you can keep track of murals you've already discovered. Plus be
            able to favorite murals to find in the future!
          </p>
        </section>
        <section class="list">
          <h4>Go Discover</h4>
          <p>
            Use our interactive map to hunt down some of the cities coolest
            murals. Additionally connect with your favorite artist's social
            medias.
          </p>
        </section>
        <section class="list">
          <h4>Collect Stamps</h4>
          <p>
            Every time you visit a new mural you'll be given the ability to
            collect that murals passport stamp to log to your ever growing
            collection.
          </p>
        </section>
      </section>
      <footer>
        <section class="footerName">Mural Pass</section>
        <section>Get out and Discover!</section>
        <section class="socialMedia">**smaller app logo here**</section>
      </footer>
    </>
  )
}
