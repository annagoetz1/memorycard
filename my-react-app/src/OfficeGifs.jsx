
import React, {useState} from 'react';

const gifUrls = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWI1dGxwemNtYnN5bnl1emxud2l1a3R2dXpkdmRxa3IxcGVpd3hlZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cB5Qmn71awbrPy20bm/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3E1a3lqOWgybGlreTN3amV5aWdveHVpOGVpdm5mdXJmd3NtaHVqaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wqbAfFwjU8laXMWZ09/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWl3dmVra2dncTIwcWoybTZiam84ODVnNnEyazQzeDd6bDVnbmViaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TPqLijJJis1DecqpPD/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3c4bWN6amR0OXNrc3VzbWtieG91ZzVudDRrNmowYXNkbG41Z3NxOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GS9pfaxQj5hPKFGGp8/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXlla2lubzl2dHV2azJmZWp5eGQwYmZyb3hxZHRuM2l3N2swcmVxZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hjvinhl1pUrb1gdzlV/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXMydWNjc2JueXBpeHc2amVqZXhrb2lqaTBlbG1uanIwNG16cWtiNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oooX87pROnnPMxjcZ/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmxsZ3I1cXo0bXpscm56YnpnZjB3Y3Q5M2Rvenp5MjM2bzR2bTY2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/G6UY0lGl5VR5Xun1Kg/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGhsZ25zbGZ6c3g4dmEyZDNvcHZxY2F4Zzg4b2kxOWE5MTA0cjVhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHIxamtrZG92czNuZGo2eXMxajFjaXJkMGFhdjN3eDdncTQ2ZmVqNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uSsHdoen1Eesl1Scoj/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXE0emtsNnhvdjcweWd1ZDM5Z2llOGlmdWsya2MyOWhnd2I5dHcyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WHPpeCbJksNKt8AYwk/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmkwb2F6OWY3ZGNsOXBzMm45MGxwd214cWNmbXFlM2t3aG80MnpvMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zofQ8v6hTDh1aIT4Hp/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnBvMnU4c254bGFydGdoeTR6YTJwYW1mc3oxZTg5bm5lcjkxbTMzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zz2a5ctsXTzkidQVSM/giphy.gif"
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function FavoriteGifs() {
  const [counter, setCounter] = useState(0);

  function handleClick () {
setCounter(counter + 1);
console.log(counter);
  }
  return (
    <>
    <p>Score: {counter}</p>
      {gifUrls.map((url, i) => (
        <img
          key={i}
          src={url}
          alt={`favorite gif ${i + 1}`}
          style={{ maxWidth: "300px", height: "auto", margin: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"}}
          onClick={handleClick}
        />
        
      ))}
    </>
  );
}
