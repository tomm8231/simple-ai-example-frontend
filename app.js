const URL = "http://localhost:8080/api/question"
init()

function init() {
    document.querySelector("#btn-submit").addEventListener("click", askQuestion)
}

async function askQuestion() {

    console.log("check")
    let questionRequest = {}
        questionRequest.question = document.querySelector("#question-input").value    

        console.log(questionRequest.question)


    const postOptions = {}
        postOptions.method = "POST"
        postOptions.headers = { "Content-type": "application/json" };
        postOptions.body = JSON.stringify(questionRequest)


try {
const response = await fetch(URL, postOptions).then(handleHttpErrors)

document.querySelector("#answer").innerHTML = response.choices[0].text
}catch (err) {
    console.log(err)
}

}

async function handleHttpErrors(res) {
    if (!res.ok) {
      const errorResponse = await res.json();
      const error = new Error(errorResponse.message);
      error.apiError = errorResponse;
      throw error;
    }
    return res.json();
  }



