import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Novità from "./components/Novità";
import NuoviEpisodi from "./components/NuoviEpisodi";
import NuoveUscite from "./components/NuoveUscite";
import ListaLink from "./components/ListaLink";
import MyFooter from "./components/MyFooter";
import AudioPlayer from "./components/audioPlayer";

function App() {
  return (
    <div style={{ backgroundColor: "#111111" }} className="min-vh-100">
      <header>
        <MyNavbar />
      </header>
      <main className="flex-grow-1 text-white main-content">
        <Novità />
        <NuoviEpisodi />
        <NuoveUscite />
        <ListaLink />
        <AudioPlayer/>
      </main>
      <footer
        className="mt-4"
        style={{
          backgroundColor: "#1c1c1e",
          borderTop: "0.5px solid rgba(255,255,255,0.1)",
          paddingBottom:"6.2em"
        }}
      >
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
