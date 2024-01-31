const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "Yaaaayyyyyyyyyy ! See you tomorrow Sugar!!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  noBtn.remove();

  const dateIdeas = [
    "Cook a romantic dinner together",
    "Go for a moonlit walk on the beach",
    "Have a picnic in the park",
    "Stargaze in the backyard",
    "Explore a botanical garden",
    "Attend a live outdoor concert",
    "Visit an art gallery",
    "Go on a weekend getaway to a cozy cabin",
    "Attend a cooking class together",
    "Plan a movie marathon night at home",
    "Take a scenic train ride",
    "Go horseback riding",
    "Visit a local winery for a wine tasting",
    "Go kayaking or canoeing",
    "Attend a comedy show",
    "Take a scenic hike and have a picnic",
    "Go on a sunrise or sunset photo shoot",
    "Attend a local farmers' market",
    "Explore a historic neighborhood",
    "Take a dance lesson together",
    "Have a DIY spa night at home",
    "Go on a bike ride together",
    "Plan a themed dinner night at home",
    "Attend a live theater performance",
    "Go on a scenic drive",
    "Visit a local chocolate or dessert shop",
    "Take a pottery or ceramics class",
    "Attend a local sports game",
    "Plan a day trip to a nearby city",
    "Have a karaoke night at home or at a local venue",
    "Attend a local festival or fair",
    "Go on a scenic boat tour",
    "Visit a local bookstore and pick out books for each other",
    "Have a picnic in a local park",
    "Take a photography workshop together",
    "Explore a new hiking trail",
    "Attend a wine and paint night",
    "Visit a nearby beach or lake",
    "Plan a game night with board games or card games",
    "Take a pottery or ceramics class",
    "Attend a trivia night at a local bar",
    "Go on a hot air balloon ride",
    "Take a scenic train ride",
    "Plan a movie night with your favorite films",
    "Go on a helicopter tour",
    "Attend a live outdoor concert",
    "Visit a local art gallery",
    "Go on a brewery tour",
    "Take a scenic drive through the countryside",
    "Attend a live comedy show",
    "Visit a local botanical garden",
    "Have a picnic in a vineyard",
    "Take a cooking class together",
    "Go on a river cruise",
    "Plan a weekend getaway to a cozy cabin",
    "Attend a dance class together",
    "Take a day trip to a nearby national park",
    "Go on a bike ride along a scenic trail",
    "Visit a local museum",
    "Have a DIY spa day at home",
    "Attend a live theater performance",
    "Go on a scenic hike and have a picnic",
    "Go horseback riding",
    "Have a themed dinner night at home",
    "Attend a local sports game",
    "Plan a day trip to a nearby city",
    "Have a karaoke night at home or at a local venue",
    "Attend a wine and cheese tasting",
    "Visit a local chocolate or dessert shop",
    "Take a pottery or ceramics class",
    "Attend a live music performance",
    "Go on a boat tour",
    "Visit a local bookstore and pick out books for each other",
    "Take a photography workshop together",
    "Explore a new hiking trail",
    "Attend a wine and paint night",
    "Visit a nearby beach or lake",
    "Plan a game night with board games or card games",
    "Take a pottery or ceramics class",
    "Attend a trivia night at a local bar",
    "Go on a hot air balloon ride",
    "Take a scenic train ride",
    "Plan a movie night with your favorite films",
    "Attend a live outdoor concert",
    "Visit a local art gallery",
    "Go on a brewery tour",
    "Attend a live comedy show",
    "Visit a local botanical garden",
    "Have a picnic in a vineyard",
    "Take a cooking class together",
    "Go on a river cruise",
    "Plan a weekend getaway to a cozy cabin",

  ];

  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn");
  letsGoBtn.style.position = "absolute";

  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px";

  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];

    alert(`How about this romantic date idea: ${selectedDateIdea}`);
  });

  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
