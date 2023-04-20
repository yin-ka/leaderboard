import myScore from './myScore.js';

const displayScore = async (tbody, url) => {
  const leaderboardData = await myScore(url);
  tbody.innerHTML = '';
  leaderboardData.result.forEach((data) => {
    const scoreLists = ` <tr class="text-success">
    <td scope="row">${data.user}:</td>
         <td>${data.score}</td>
    </tr>`;
    tbody.innerHTML += scoreLists;
  });
};
export default displayScore;