import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main className="container mx-auto mt-8">
        {children}
      </main>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E53E3E" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,208C960,213,1056,235,1152,240C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="bg-red-600">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white">Hvad koster det at leje et hoppeslot?</h2>
          <p className="text-lg text-white mt-2">Prisen afhænger af hvor henne i landet dit arrangement finder sted, størrelsen på hoppeslotte samt om du ønsker levering, opsætning og opsyn. Kontakt os for et uforpligtende tilbud på <strong>40 85 65 10</strong>.</p>

          <h2 className="text-3xl font-bold text-white mt-8">Hvor meget plads kræver et hoppeslot?</h2>
          <p className="text-lg text-white mt-2">Vores mindste hoppeslot skal bruge 4,5m x 4,5m og 3 meter i højden. Større hoppeslotte kan kræve op til 8m x 8m plads og aktiviteter såsom <a href="https://www.danlej.dk/aktiviteter/fire-slide">cirkus-sliden</a> kræver 7,3m plads i højden.</p>

          <h2 className="text-3xl font-bold text-white mt-8">Hvor meget strøm bruger hoppeslottene?</h2>
          <p className="text-lg text-white mt-2">De fleste hoppeslotte kræver blot adgang til 1x 230v (2000W). Vi kommer selv med kabeltromle som kan nå de fleste distancer. Kontakt os venligst først hvis der er ekstra langt til strømudtag.</p>

          <h2 className="text-3xl font-bold text-white mt-8">Er hoppeslottene sikre at bruge?</h2>
          <p className="text-lg text-white mt-2">Hos Danlej er sikkerhed i højsædet. Vores aktiviteter synes hvert år af <a href="http://www.forcetechnology.com/da/" target="_blank">FORCE Technology</a> og inspiceres før og efter hver udlejning. Vores aktiviteter opdateres og udskiftes løbende, så du kan være sikker på at kvaliteten og sikkerheden er i top.</p>
        </div>
      </div>

      <footer className="bg-red-600 pt-16">
        <nav className="flex justify-between container mx-auto py-4 md:py-8 text-sm">
          <p className="text-white">
            Copyright &copy;
            {' '}
            <a
              className="font-bold no-underline text-white"
              href="https://danlej.dk"
            >
              Danlej
            </a>
            {' '}
            1986-{new Date().getFullYear()}
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
