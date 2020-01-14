import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Udlejning af hoppeslotte i hele Danmark"
      />

      <div className="text-center p-4 my-8 mx-auto max-w-2xl bg-blue-800 rounded-lg">
        <h2 className="text-lg text-white">Kontakt os for et uforpligtende tilbud på <a className="font-bold" href="tel://40856510">40 85 65 10</a> eller <a className="font-bold" href="mailto:d@nlej.dk">d@nlej.dk</a></h2>
      </div>

      <section className="flex flex-wrap justify-center">
        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/hsthop">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a00c037f9619a0f51542179/1566762246603/" />
          <h3 className="mt-1 text-xl uppercase">Høsthop</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/minions-hoppeborg">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5aeb701d8a922d150e2b17ab/1553087063913/" />
          <h3 className="mt-1 text-xl uppercase">Minions hoppeborg</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/rumskibet">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a00bdc2c830259e39226f52/1529327934052/" />
          <h3 className="mt-1 text-xl uppercase">Rumskibet</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/snow-world">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a00be90e2c483c0cd128633/1536512029168/" />
          <h3 className="mt-1 text-xl uppercase">Snow World</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/slide-for-brn">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a00bf53c830259e3922da0d/1510170481076/" />
          <h3 className="mt-1 text-xl uppercase">Slide For Børn</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/fire-slide">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a00c5cf419202ebc02aedc5/1566761568650/" />
          <h3 className="mt-1 text-xl uppercase">Cirkus-Slide</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/pow-patrol-hoppeborge">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a1c54229140b7c306578eed/1572944588161/IMG_0949.jpeg" />
          <h3 className="mt-1 text-xl uppercase">Paw Patrol hoppeborge</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/rumstationen">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a00c0a9e4966bde44af168c/1571684390168/" />
          <h3 className="mt-1 text-xl uppercase">Rumstationen</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/forhindringsbanen">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a00c16ae4966bde44af48cc/1571684390161/" />
          <h3 className="mt-1 text-xl uppercase">Forhindringsbanen</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/brandstationen">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a00cb809140b785dda4665f/1571684390166/" />
          <h3 className="mt-1 text-xl uppercase">Brandstationen</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/around-the-world">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a00cc0de4966b6353044151/1571684390494/" />
          <h3 className="mt-1 text-xl uppercase">Around the World</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/brandbilen">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a00cbc60d9297abc49703aa/1571684390510/" />
          <h3 className="mt-1 text-xl uppercase">Brandbilen</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/amazonia">
          <img className="h-64 rounded-lg" src="https://images.squarespace-cdn.com/content/v1/597bcbfb59cc681334431a76/1510001779436-LG6OA7TSXOW5RTRTDZW8/ke17ZwdGBToddI8pDm48kMRSugIw4aSF4TojHPIpZ01Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFtxajXRd49b1WqMb3whL1LffMw74oYl1FRNnv_WMvYFzoLOl8au5Wf3pcLtEQ3sXo/amazonia_1.jpg" />
          <h3 className="mt-1 text-xl uppercase">Amazonia</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/jungleborgen">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a00bff50852292b92924437/1571684391248/" />
          <h3 className="mt-1 text-xl uppercase">Jungleborgen</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/western-huset">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a0368910d929769e70ffbf1/1578877387612/" />
          <h3 className="mt-1 text-xl uppercase">Western Huset</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/cirkus-hoppeslot">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a04b30ff9619a4a2c5efc4c/1571684392070/" />
          <h3 className="mt-1 text-xl uppercase">Cirkus Hoppeslot</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/home-sweet-home">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a04b3d3e4966b26d6d2c186/1571684392132/" />
          <h3 className="mt-1 text-xl uppercase">Home Sweet Home</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/hoppepude">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a04b4e7e4966b26d6d31b7d/1571684392160/" />
          <h3 className="mt-1 text-xl uppercase">Hoppepude</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/mini-hoppe-bil">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a04b55853450a8ac0ebcf5d/1571684392301/" />
          <h3 className="mt-1 text-xl uppercase">Mini Hoppe Bil</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/piraten">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a04b645652dea6fc97a898a/1578877046209/" />
          <h3 className="mt-1 text-xl uppercase">Piraten</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/sea-world">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a05bd19ec212dd543e99146/1571684392513/" />
          <h3 className="mt-1 text-xl uppercase">Sea World</h3>
        </a>

        <a className="m-4 hover:text-red-600" href="https://www.danlej.dk/aktiviteter/skatteen">
          <img className="h-64 rounded-lg" src="https://static1.squarespace.com/static/597bcbfb59cc681334431a76/5a00bd5f24a6941aaaa28933/5a05f77d53450aff0200e96d/1578877057939/" />
          <h3 className="mt-1 text-xl uppercase">Skatteøen</h3>
        </a>
      </section>

      <div className="text-center p-4 my-8 mx-auto max-w-2xl bg-blue-800 rounded-lg">
        <h2 className="text-lg text-white">Kontakt os for et uforpligtende tilbud på <a className="font-bold" href="tel://40856510">40 85 65 10</a> eller <a className="font-bold" href="mailto:d@nlej.dk">d@nlej.dk</a></h2>
      </div>
    </Layout>
  );
}

export default IndexPage;
