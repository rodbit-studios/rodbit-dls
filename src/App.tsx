import "./App.css";
import { Button, Alert, Badge, Checkbox, Input, Radio, Toggle, Select, Skeleton, Tabs, Textarea } from "./components/";


function App() {
  return (
    <div className="App">
      <div>
        <h1 className="title">Rodbit Studios Design Language System</h1>
        <div className="spacing-list">
          <Button>Enter</Button>
          <Button variant="outline">Exit</Button>
        </div>
        <div className="alert-list">
          <Alert title="Alert" body="This is an alert" />
        </div>
        <div className="spacing-list">
          <Badge label="Badge" />
          <Badge label="Badge" variant="outline" />
        </div>
        <div className="spacing-list">
          <Checkbox label="Checkbox 1" />
          <Checkbox label="Checkbox 2" />
        </div>
        <div className="spacing-list">
          <Input label="Input 1" />
          <Input label="Input 2" variant="filled" />
        </div>
        <div className="spacing-list">
          <Radio label="Radio 1" />
          <Radio label="Radio 2" />
        </div>
        <div className="spacing-list">
          <Toggle label="Toggle 1" />
          <Toggle label="Toggle 2" />
        </div>
        <div className="spacing-list">
          <Select label="Select 1" options={[{ label: "Option 1", value: "option1" }, { label: "Option 2", value: "option2" },]} />
          <Select label="Select 2" options={[{ label: "Option 2", value: "option2" }, { label: "Option 3", value: "option3" },]} />
        </div>
        <div className="spacing-list">
          <Skeleton variant="circular" animation="wave" width="50px" height="50px" />
          <Skeleton animation="wave" width="88%" height="50px" />
        </div>
        <div className="tabs-list">
          <Tabs tabs={[{ label: "Tab 1", content: "tab1" }, { label: "Tab 2", content: "tab2" }, { label: "Tab 3", content: "tab3" },]} />
        </div>
        <div className="textarea-list">
          <Textarea label="Textarea Example" />
          <Textarea label="Textarea Disabled" disabled />
        </div>
      </div>
    </div>
  );
}

export default App;
