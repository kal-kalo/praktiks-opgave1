export default async function UseHomes(req) {
  const currentURL = req.url;
  const url = UseUrl();
  const parts = url.split("/");
  const lastWord = parts.pop();
  console.log(lastWord);
  const res = await fetch(
    `https://dinmaegler.onrender.com/homes?type_eq=${lastWord}`
  );
  const homes = await res.json();
  return homes;
}
