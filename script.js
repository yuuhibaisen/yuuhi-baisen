
fetch('https://opensheet.elk.sh/1qNgdL6uao8QybUN95kA0Uz7VYRBncS06d4mI6JPaEaY/1')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('product-list');
    container.innerHTML = '';
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        ${item['圖片網址（可留空）'] ? `<img src="${item['圖片網址（可留空）']}" alt="${item['名稱']}">` : ''}
        <h2>${item['名稱']}</h2>
        <p>處理法：${item['處理法']}</p>
        <p>風味：${item['風味']}</p>
        <p>價格：${item['價格']}</p>
      `;
      container.appendChild(card);
    });
  });
