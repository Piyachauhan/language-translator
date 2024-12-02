const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const buttonTranslate = document.getElementById('btn-translate');
const sourceLanguageSelect = document.getElementById('source-language-select');
const targetLanguageSelect = document.getElementById('target-language-select');

buttonTranslate.addEventListener('click', async () => {
    console.log("this is the log")
    const text = inputText.value;
    const sourceLanguage = sourceLanguageSelect.value;
    const targetLanguage = targetLanguageSelect.value;

    if (!text) {
        alert('Please enter text to translate');
        return;
    }

    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': 'ab89734ademsh6669897c2a2fe6ep113744jsnc0aeb2d96612',
        'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip'
      },
      body: new URLSearchParams({
        q: text,
        target: targetLanguage,
        source: sourceLanguage
      })
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      let data= result.toString();
      const len= data.length
      const output = data.slice(44, len-5);
      document.getElementById('output-text').innerHTML=output;
    } catch (error) {
      console.error(error);
    }
})





