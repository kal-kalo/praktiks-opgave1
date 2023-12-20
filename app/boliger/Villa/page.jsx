//"use client"
import Image from "next/image";
import getHomes from "../getHomes";


export default async function Home() {

  const homes = await getHomes()
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
  )
}
