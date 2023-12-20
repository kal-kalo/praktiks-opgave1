"use client"

import Image from "next/image";

export const updateList = async function(urlParameter){ $
  console.log('+++>>>>>',urlParameter)
    const res = await fetch(`https://dinmaegler.onrender.com/homes?type_eq=${urlParameter}`);
    const homes = await res.json();
    return (
        <>
          {homes.map((home) => (
            <div key={home.id} className="card">
              <Image
                src={home.images[0].url}
                alt=""
                width={500}
                height={300}
                //placeholder="blur"
                //quality={100}
              />
              <p>{home.adress1}</p>
              <p>
                {home.postalcode} {home.city}
              </p>
              <p>
                {home.type} • <small>Ejerugift: {home.cost}</small>
              </p>
            </div>
          ))}
         
        </>
      );
}




