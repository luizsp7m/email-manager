export async function Tracker({ code }) {
  const result = await fetch('https://correios.contrateumdev.com.br/api/rastreio', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code: code,
      type: 'LS'
    })
  });

  const data = await result.json();

  return `${data.objeto[0].evento[0].descricao}`;
}