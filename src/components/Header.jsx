import logo from '../assets/logo.png';

// const HeaderStyle = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2rem;
//   margin-bottom: 2rem;

//   & img {
//     object-fit: contain;
//     margin-bottom: 2rem;
//     width: 11rem;
//     height: 11rem;
//   }
  
//   & h1 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     letter-spacing: 0.4em;
//     text-align: center;
//     text-transform: uppercase;
//     color: #9a3412;
//     font-family: 'Pacifico', cursive;
//     margin: 0;
//   }
  
//   & p {
//     text-align: center;
//     color: #a39191;
//     margin: 0;
//   }
  
//   @media (min-width: 768px) {
//     margin-bottom: 4rem;
//     & h1 {
//       font-size: 2.25rem;
//     }
//   }
//   `

export default function Header() {
  return (
    <header className="flex my-2 items-center flex-col">
      <img src={logo} alt="A canvas" className="w-52 h-52 object-contain mb-8 mt-8 md:mb-16" />
      <h1 className="text-xl md:text-4xl font-semibold tracking-wide text-amber-700 uppercase font-title">ReactArt</h1>
      <p className="text-lg text-stone-400 font-medium">A community of artists and art-lovers.</p>
    </header>
  );
}
