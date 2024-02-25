///////////////////////////////////////////////////////////Promises
// fetch('https://randomuser.me/api')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fetch(
//   'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=Europe%2FLondon'
// )
//   .then((response) => response.json())
//   .then((data) => renderWeather(data))
//   .catch((err) => err);

// function renderWeather(weather) {
//   console.log(weather);
//   console.log(weather.latitude);

//   const { temperature_2m_max, temperature_2m_min, rain_sum } = weather.daily;
//   console.log(temperature_2m_max);

//   const rootDiv = document.querySelector('#root');
//   const maxTemp = document.createElement('div');
//   maxTemp.textContent = temperature_2m_max[0];
//   const minTemp = document.createElement('div');
//   minTemp.textContent = temperature_2m_min[0];
//   minTemp.style.color = `${minTemp.textContent > 0 ? 'green' : 'blue'}`;
//   maxTemp.style.color = `${minTemp.textContent > 0 ? 'green' : 'blue'}`;

//   rootDiv.append(maxTemp);
//   rootDiv.append(minTemp);
// }
///////////////////////////////////////Promise practice
// const sredCat = new Promise((res, rej) => {
//   if (Math.random() > 0.5) {
//     res('Your cat is alive');
//   } else {
//     rej('Your cat is meow');
//   }
// });

// sredCat
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });
/////////////////////////////////////////промисифікувати setTimeout

function delay(ms) {
  return new Promise((res, rej) => {
    if (ms < 0) {
      rej(new RangeError('delay must be posititve number'));
    }
    setTimeout(res, ms);
  });
}

delay(-1000)
  .then(() => console.log('1s was passed'))
  .catch((e) => console.log(e));
//////////////////////////////////////////////////////////////////

///////////////////////

const src =
  'https://static.vecteezy.com/system/resources/thumbnails/025/181/412/small/picture-a-captivating-scenel-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg';

// loadImage(src);
// function loadImage(src) {
//   const img = document.createElement('img');
//   img.src = src;
//   img.onload = function (e) {
//     document.body.append(img);
//   };
//   img.onerror = function () {
//     img.src =
//       'https://media.istockphoto.com/id/1634136910/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%B0-%D0%B2-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D1%96.jpg?s=612x612&w=is&k=20&c=d8NefmnAYydHznlHKBip2nEJvUsTOL5asCTSGgWtAO4=';
//   };
// }

loadImage(src)
  .then((img) => {
    document.body.append(img);
  })
  .catch((e) => {
    console.log(e);
  });

function loadImage(src) {
  return new Promise((res, rej) => {
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => {
      res(img);
    };
    img.onerror = () => {
      img.src =
        'https://media.istockphoto.com/id/1634136910/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%B0-%D0%B2-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D1%96.jpg?s=612x612&w=is&k=20&c=d8NefmnAYydHznlHKBip2nEJvUsTOL5asCTSGgWtAO4=';
      rej(new Error('Img was not load'));
    };
  });
}
