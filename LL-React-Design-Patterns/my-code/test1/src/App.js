import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({name}) => {
    return <h1>Hello {name}</h1>
}
const RightHandComponent = () => {
    return <p>Right!</p>
}

function App() {
  return (
    <SplitScreen>
        <LeftHandComponent name="Cansin" />
        <RightHandComponent />
    </SplitScreen>
  );
}

export default App;
