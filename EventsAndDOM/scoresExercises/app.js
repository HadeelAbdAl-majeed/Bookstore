const names = ['Ben', 'Joel', 'Judy', 'Anne'];
const scores = [88, 98, 77, 88];

const $ = id => document.getElementById(id);

window.onload = function() {
  $('scoreName').focus();

  $('addScoreBtn').onclick = addScore;
  $('displayResultsBtn').onclick = displayResults;
  $('displayScoresBtn').onclick = displayScores;
};

function addScore() {
  const name = $('scoreName').value.trim();
  const score = parseFloat($('scoreVal').value);

  // Validation (Point 6)
  if (!name || isNaN(score) || score < 0 || score > 100) {
    alert('You must enter a name and a valid score');
    return;
  }

  names.push(name);
  scores.push(score);

  $('scoreName').value = '';
  $('scoreVal').value = '';$('scoreName').focus();
}

function displayResults() {
  if (scores.length === 0) return;

  let sum = 0;
  let maxScore = scores[0];
  let maxIndex = 0;

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      maxIndex = i;
    }
  }

  const avg = (sum / scores.length).toFixed(0);

  const resultsDiv = $('results');
  resultsDiv.innerHTML = `
    <h2>Results</h2>
    <p>Average score = ${avg}</p>
    <p>High score = ${names[maxIndex]} with a score of ${maxScore}</p>
  `;
}

function displayScores() {
  const table = $('scores_table');
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  `;

  for (let i = 0; i < names.length; i++) {
    table.innerHTML += `
      <tr>
        <td>${names[i]}</td>
        <td>${scores[i]}</td>
      </tr>
    `;
  }
}