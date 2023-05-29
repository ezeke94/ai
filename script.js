document.getElementById('promptForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const question1 = document.getElementById('question1').value;
  const question2 = document.getElementById('question2').value;
  const question3 = document.getElementById('question3').value;
  const question4 = document.getElementById('question4').value;
  const question5 = document.getElementById('question5').value;
  const question6 = document.getElementById('question6').value;
  const question7 = document.getElementById('question7').value;
  const question8 = document.getElementById('question8').value;
  const question9 = document.getElementById('question9').value;

  const generatedPrompt = `You are now a counsellor. I am going to provide you some information about myself before we start-
1. I am seeking counseling because ${question1}.
2. My name is ${question2}, and my age is ${question3}. My pronouns are ${question4}, and I belong to the country ${question5}.
3. My emotional state can be best described as ${question6}.
4. Speaking of my support system, ${question7}.
5. My goals and aspirations in seeking counseling are ${question8}.
6. I have been to ${question9} counseling/therapy sessions before.`;

  document.getElementById('generatedPrompt').textContent = generatedPrompt;
  document.getElementById('instructions').style.display = 'block';
  document.getElementById('resultBox').style.display = 'block';
});

document.getElementById('instructions').style.display = 'none';
document.getElementById('resultBox').style.display = 'none';
