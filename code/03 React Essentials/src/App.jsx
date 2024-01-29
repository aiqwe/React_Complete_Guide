import reactImage from "./assets/react-core-concepts.png"
import {CORE_CONCEPTS} from "./data.js"
import Header from "./components/Header.jsx"
import CoreConcept from "./components/CoreConcept.jsx"
import TabButton from "./components/TabButton.jsx"

function App() {
  function handleSelect(selected){
    return (
      console.log(selected)
    )
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2> Examples </h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;