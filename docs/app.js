async function main() {
  async function handRecommand(event) {
    event.preventDefault();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner-border');
    document.querySelector('#box').appendChild(spinner);

    const url = 'https://roomy-certain-perigee.glitch.me';
    // const url = 'http://127.0.0.1:3000';
    const formValues = new FormData(document.querySelector('#recommendForm'));
    const text = formValues.get('recommendText');
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        text,
      }),
      headers: {
        'Content-Type': 'Application/json',
      },
    });
    const responseJson = await response.json();

    spinner.remove();

    const { image, desc } = responseJson;
    const box = document.querySelector('#box');
    box.innerHTML = '';

    const imageTag = document.createElement('img');
    imageTag.classList.add('img-fluid');
    imageTag.src = image; // image - link
    box.appendChild(imageTag);

    const descTag = document.createElement('p');
    descTag.textContent = desc;
    box.appendChild(descTag);
  }

  document.querySelector('#recommendForm').addEventListener('submit', handRecommand);
}

document.addEventListener('DOMContentLoaded', main);
