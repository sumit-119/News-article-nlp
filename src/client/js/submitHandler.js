function submitHandler(event) {
  event.preventDefault();
  const input = document.getElementById("input").value;
  if (!input) return;
  let endpoint = Client.validUrl(input) ? 'newsArticleTest' : 'textTest';
  fetch(`/${endpoint}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: input
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById("polarity").innerHTML = data.polarity;
      document.getElementById("subjectivity").innerHTML = data.subjectivity;
      document.getElementById("polarity_confidence").innerHTML =
        data.polarity_confidence;
      document.getElementById("subjectivity_confidence").innerHTML =
        data.subjectivity_confidence;
    });
}

module.exports = submitHandler;