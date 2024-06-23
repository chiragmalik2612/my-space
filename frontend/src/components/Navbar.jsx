import { useState } from "react";
import { Link } from "react-router-dom";

const Tabs = [
  { text: "Home 🏘️", link: "/" },
  { text: "MyTasks 📝", link: "/tasks" },
  { text: "MyMusic 🎵", link: "/music" },
  { text: "MyGallery 📷", link: "/gallery" },
  { text: "MyExpense💰", link: "/expense" },
  { text: "MyMovies 🎬", link: "/movies" },
  { text: "MyBooks 📚", link: "/books" },
];

export default function Navbar() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabsComponents = Tabs.map((text, i) => {
    return (
      <Link to={`${text.link}`} key={`tab-${i}`} >
        {" "}
        <button
          type="button"
          key={`tab-${text}`}
          onClick={() => setSelectedIndex(i)}
          style={{
            padding: "0.65rem 0.75rem",
            backgroundColor: "rgba(238, 238, 238)",
            border: 0,
            cursor: "pointer",
          }}
        >
          {text.text}

          {selectedIndex === i && (
            <div style={{ position: "relative", transform: "translateY(3px)" }}>
              <div id="underline" transition={{ type: "spring", bounce: 0.3 }}>
                <div
                  style={{
                    width: "100%",
                    height: "0.15rem",
                    backgroundColor: "black",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
          )}
        </button>
      </Link>
    );
  });

  return <div style={{ display: "flex", gap: "0.5rem" }} >{tabsComponents}</div>;
}
