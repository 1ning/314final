import moment from 'moment'

export function postrequest(item)
{
  var hh=moment().format('hh:mm:ss DD/MM/YYYY'); 
  var z=item;
  z.time=hh;
  delete z.level;
  delete z.topic;
  delete z.turnOfftime;
  delete z.turnOntime;
  fetch('http://127.0.0.1:4000/', {
    method: 'POST',
    body: JSON.stringify(
      z
   ),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    }, 
  })
    .then((res) => res.json())
    .then(data=>JSON.parse(data))
    .catch((err) => {
       console.log(err.message);
    });
}

export function postrequest2(item)
{
  var hh=moment().format('hh:mm:ss DD/MM/YYYY'); 
  var z=item;
  z.time=hh;

  fetch('http://127.0.0.1:4000/global', {
    method: 'POST',
    body: JSON.stringify(
      z
   ),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    }, 
  })
    .then((res) => res.json())
    .then(data=>JSON.parse(data))
    .catch((err) => {
       console.log(err.message);
    });
}
