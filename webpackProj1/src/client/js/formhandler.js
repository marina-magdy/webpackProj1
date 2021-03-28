
async function handleSubmit(event) {
  event.preventDefault();
  let Text = document.getElementById("url").value;
  if (Client.checkURL(Text)) {
    try {
      let subBTN = document.getElementById("subBTN");
     let label1 = document.getElementById("label1");
     
      subBTN.disabled = true;
      
      label1.innerText = "Working...";
      
      const api_fetch = await fetch(`http://localhost:8081/check/${Text}`);
      const api_get = await api_fetch.json();
      
      document.getElementById("SentTable").innerHTML = `<table>
      <tr><td>Sentiment</td><td>Result</td></tr>
      <tr><td>Agreement:</td><td>${api_get.agreement.toLowerCase()}</td></tr>
      <tr><td>Subjectivity:</td><td>${api_get.subjectivity.toLowerCase()}</td></tr>
      <tr><td>Confidence:</td><td>${api_get.confidence}</td></tr>
      <tr><td>Irony:</td><td>${api_get.irony.toLowerCase()}</td></tr>
      <tr><td>Score tag:</td><td>${api_get.score_tag.toLowerCase()}</td></tr>
      </table>`;
     
      subBTN.disabled = false;
    } catch (err) {
      
      subBTN.disabled = false;
     
      console.log(err.message);
      
     label1.innerText = "fetch error";
    }
  } else {
    
    alert("url not valid try again");
    
   label1.innerText =  "url not valid try a working one";
  }
}

export { handleSubmit };