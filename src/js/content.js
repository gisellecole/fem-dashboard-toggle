export class ContentGenerator {
  // Data for generating the contents cards
  profiles = {
    1: ["facebook", "Facebook", "@nathanf", "1987", "Followers", "up", "12"],
    2: ["twitter", "Twitter", "@nathanf", "1044", "Followers", "up", "99"],
    3: [
      "instagram",
      "Instagram",
      "@realnathanf",
      "11k",
      "Followers",
      "up",
      "1099",
    ],
    4: ["youtube", "Youtube", "Nathan F", "8239", "Subscribers", "down", "144"],
  };
  // Generate an individual content card
  getProfileFormat = ({
    platform,
    social,
    username,
    followers,
    label,
    sign,
    number,
  }) => {
    const card = document.createElement("div");
    card.classList.add("card", `card--${platform}`);
    card.innerHTML = `
      <div class="card__platform">
        <img class="card__icon" src="/images/icon-${platform}.svg" alt=${social} />
        <div class="card__username">${username}</div>
      </div>
      <div class="card__followers">
        <div class="card__count card__count--big">${followers}</div>
        <div class="card__label">${label}</div>
      </div>
      <div class="card__change card__change--${sign}">
        <img src="/images/icon-${sign}.svg" alt="${sign} arrow" />
        <div class="card__number">${number} Today</div>
      </div>
    `;
    return card;
  };
  // Set the content of the profiles section
  setPageContent = () => {
    const profilesList = document.querySelector("#profiles-list");
    for (const key in this.profiles) {
      const [platform, social, username, followers, label, sign, number] =
        this.profiles[key];

      const profileCard = this.getProfileFormat({
        platform,
        social,
        username,
        followers,
        label,
        sign,
        number,
      });
      profilesList.appendChild(profileCard);
    }
  };
}
