import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Developer’s Morning",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      title: "Coffee Time",
      content:
        "I told my computer I needed a break, and now it won’t stop sending me KitKat ads.",
    },
    {
      id: 3,
      title: "Debugging Life",
      content:
        "Debugging is like being the detective in a crime movie where you are also the murderer.",
    },
    {
      id: 4,
      title: "AI Humor",
      content: "Why did the AI go to therapy? It had too many neural issues.",
    },
    {
      id: 5,
      title: "Wi-Fi Woes",
      content: "My Wi-Fi isn’t bad. It’s just on airplane mode… permanently.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
