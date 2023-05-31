document.getElementById('promptForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const question1 = document.getElementById('question1').value;
  const question2 = document.getElementById('question2').value;
  const question3 = document.getElementById('question3').value;
  const question4 = document.getElementById('question4').value;
  const question5 = document.getElementById('question5').value;

  const generatedPrompt = `Hi, act as a counselor and have a meaningful conversation with me. I believe this conversation can provide some insights. My name is ${question1}, I'm ${question2} and I'm seeking counseling to ${question3}. My support system includes ${question4}. If you want to ask anything, please ask one question at a time. I would like to have a conversation in ${question5} language`;

  localStorage.setItem('generatedPrompt', generatedPrompt);
  window.location.href = 'result.html';
});
