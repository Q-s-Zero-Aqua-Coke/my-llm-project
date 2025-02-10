async function main() {
  async function handRecommand(event) {
    event.preventDefault();

    const url = 'http://127.0.0.1:3000';
    const formValues = new FormData(document.querySelector('#recommendForm'));
    const inputText = formValues.get('recommendText');
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        inputText,
      }),
      headers: {
        'Content-Type': 'Application/json',
      },
    });
    const responseJson = await response.json();

    document.querySelector('#box').textContent = JSON.stringify(responseJson);
  }

  document.querySelector('#recommendForm').addEventListener('submit', handRecommand);
}

document.addEventListener('DOMContentLoaded', main);
