import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [isTabOn, setIsTabOn] = useState(true);
  const handleActiveTab = (id) => {
    setActiveTab(id);
  };
  return (
    <div>
      {isTabOn ? (
        <div className="tab">
          <h1>Tab Component : starter file</h1>
          <div className="tab__header">
            {tabData.map((data) => (
              <button
                key={data.id}
                className={activeTab == data.id ? "active" : ""}
                onClick={() => handleActiveTab(data.id)}
              >
                <span>{data.title}</span>
                <span className="tab-indicator"></span>
              </button>
            ))}
          </div>
          <div className="tab__content">{tabData[activeTab - 1].content}</div>
        </div>
      ) : (
        <div>
          <p>tab is off now</p>
        </div>
      )}
      <button onClick={() => setIsTabOn(!isTabOn)}>TabOFF</button>
    </div>
  );
}

export default App;
