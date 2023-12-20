/* 
  let authToken
  fetch("https://dinmaegler.onrender.com/auth/local", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: "carsten@mail.dk",
      password: "654321",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      authToken = data.jwt
    })
    .catch((error) => {
      console.error("Authentication failed:", error);
    });
*/

import Image from "next/image";

export default async function Home() {
  //const [selectedOption, setSelectedOption] = useState('');
  const res = await fetch(`https://dinmaegler.onrender.com/homes`);
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
