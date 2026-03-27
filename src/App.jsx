import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
// import KnowledgeBase from './components/KnowledgeBase/KnowledgeBase';

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#f9fafb",
      }}
    >
      {/* Header sticks at top, full width */}
      <div
        style={{
          marginTop: 6,
          width: "99%",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1px solid #e5e7eb",
        }}
      >
        <Header />
      </div>

      {/* Below header: sidebar + main scroll together */}
      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          minHeight: 0,
        }}
      >
        <Sidebar activeItem="Knowledge Base" />
        {/* <KnowledgeBase /> */}
      </div>
    </div>
  );
}

export default App;
