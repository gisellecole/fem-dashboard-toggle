export class OverviewGenerator {
  // Data for generating the overview cards
  overviewData = {
    1: ["Page Views", "facebook", "Facebook", "87", "up", "3"],
    2: ["Likes", "facebook", "Facebook", "52", "down", "2"],
    3: ["Likes", "instagram", "Instagram", "5462", "up", "2257"],
    4: ["Profile Views", "instagram", "Instagram", "52k", "up", "1375"],
    5: ["Retweets", "twitter", "Twitter", "117", "up", "303"],
    6: ["Likes", "twitter", "Twitter", "507", "up", "553"],
    7: ["Likes", "youtube", "Youtube", "107", "down", "19"],
    8: ["Total Views", "youtube", "Youtube", "1407", "down", "12"],
  };
  // Generate an individual overview card
  getOverviewCard = ({ title, social, network, count, sign, perc }) => {
    const card = document.createElement("div");
    card.classList.add("card", "card-grid");
    card.innerHTML = `
      <div class="card__subtitle">${title}</div>
      <img class="" src="./src/images/icon-${social}.svg" alt="${network}" />
      <div class="card__count card__count--small">${count}</div>
      <div class="card__change card__change--${sign}">
        <img src="./src/images/icon-${sign}.svg" alt="${sign} arrow" />
        <div class="card__number">${perc}%</div>
      </div>
    `;
    return card;
  };
  // Set the content of the overview section
  setOverviewsContent = () => {
    const overviewList = document.querySelector("#overview-list");
    for (const key in this.overviewData) {
      const [title, social, network, count, sign, perc] =
        this.overviewData[key];
      const overviewCard = this.getOverviewCard({
        title,
        social,
        network,
        count,
        sign,
        perc,
      });
      overviewList.appendChild(overviewCard);
    }
  };
}
