const Form = document.querySelector('form');
const postScore = async (url) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: Form.name.value,
        score: Form.score.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    Form.name.value = '';
    Form.score.value = '';
    return res.json();
  } catch (error) {
    return false;
  }
};

const fetchScores = async () => {
  const res = await fetch('/scores');
  return res.json();
};

const renderScores = (scores) => {
  const scoresList = document.querySelector('#scores-list');
  scoresList.innerHTML = '';
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.textContent = `${score.user}: ${score.score}`;
    scoresList.appendChild(li);
  });
};

const refreshButton = document.querySelector('#refresh');
refreshButton.addEventListener('click', async () => {
  const scores = await fetchScores();
  renderScores(scores);
});

export default postScore;