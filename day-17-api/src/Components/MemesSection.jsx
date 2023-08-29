import { useEffect, useState } from "react";

const Memes = () => {
  const [memes, setMemes] = useState([]);

  async function fetchMemes() {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const info = await res.json();
    // checking what obj was fetched
    // console.log(info);
    setMemes(info.data.memes);
  }

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <>
      <h2 className="heading">Memes</h2>
      <p className="text">
        Here's an API to fetch random memes:
        <a href="https://api.imgflip.com/get_memes"></a>
      </p>
      <div className="container">
        {memes.map((meme, id) => (
          <div key={id}>
            <img src={meme.url}></img>
          </div>
        ))}
      </div>
    </>
  );
};

export { Memes };
