import "./App.css";
import Button from "./components/Atoms/Button/Button";
import Checkbox from "./components/Atoms/Checkbox/Checkbox";
import Radio from "./components/Atoms/Radio/Radio";
import Select from "./components/Atoms/Select/Select";
import Toggle from "./components/Atoms/Toggle/Toggle";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="title">Rodbit Studios Design Language System</h1>
        <div className="button-list">
          <Button>Enter</Button>
          <Button variant="outline">Exit</Button>
        </div>
        <div className="checkbox-list">
          <Checkbox label="Checkbox 1" />
          <Checkbox label="Checkbox 2" />
        </div>
        <div className="radio-list">
          <Radio label="Radio 1" />
          <Radio label="Radio 2" />
        </div>
        <div className="toggle-list">
          <Toggle label="Toggle 1" />
          <Toggle label="Toggle 2" />
        </div>
        <div className="select-list">
          <Select label="Select 1" options={[{ label: "Option 1", value: "option1" }, { label: "Option 2", value: "option2" },]} />
          <Select label="Select 2" options={[{ label: "Option 2", value: "option2" }, { label: "Option 3", value: "option3" },]} />
        </div>
      </div>
    </div>
  );
}

export default App;
