const axios = require('axios');

async function bootstrap() {
  const [, , n, type] = process.argv;
  const url = 'http://localhost:8081';

  if (!['parallel', 'serial'].includes(type)) {
    throw new Error('You should type "parallel" or "serial" type');
  }

  const iterable = Array(Number(n)).fill('');

  if (type === 'parallel') {
    iterable.forEach(() => {
      axios.get(url)
        .then(({ data }) => console.log(data))
    })
  } else {
    for (const i of iterable) {
      const { data } = await axios.get(url)
      console.log(data);
    }
  }
}

bootstrap();