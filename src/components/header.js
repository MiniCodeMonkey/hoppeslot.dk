import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <div className="bg-red-600 pt-8 font-display">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Lej hoppeslotte, hoppeborge og hoppepuder</h1>
          <p className="leading-loose text-xl text-white mt-4">Danlej har et bredt udvalg af hoppeslotte i forskellige størrelser. Både til de små og til de større børn. Vi har over 34 års erfaring med udlejning af hoppeslotte i hele Danmark.</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E53E3E" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,181.3C672,181,768,139,864,133.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

      <a className="hover:text-red-600 max-w-lg mx-auto md:-mt-32 lg:-mt-64 block" href="https://www.danlej.dk/aktiviteter/nessie">
      <img className="rounded-lg shadow-lg" src="https://images.squarespace-cdn.com/content/v1/597bcbfb59cc681334431a76/1529353657815-7VBI7EHLA6P7WJ7OAV4T/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1255.jpg?format=2500w" alt="Hoppeslottet Nessie" />
      <h3 className="mt-1 text-xl uppercase">Nessie</h3>
      </a>
    </header>
  );
}

export default Header;
