import reactImage from "../assets/react-core-concepts.png"

const container = ['Core', 'Crucial', 'Fundatmental']

function genRandomInt(num){
    return Math.floor(Math.random() * (num))
  };
  
  export default function Header() {
    const description = container[genRandomInt(2)]
    return (
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  };