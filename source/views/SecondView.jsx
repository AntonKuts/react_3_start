import React from 'react';
import Icon from '../components/Icon/Icon';

// const ggg
let ddd ='';
// let fff = function fff(){
//   return 'Вася';
// };
//
//
// console.log(fff());


let Page = function (){
fetch('http://api.themoviedb.org/3/movie/popular?api_key=49a5dbae3f8c8632aba8f07513a7cbb2&language=eu-EU&page=1')
.then(
  function(response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
      response.status);
      return;
    }

    response.json().then(function(data) {
      ddd = data.results[0].id;
      console.log(ddd);
      // finish(ddd)
    });
  }
)
.catch(function(err) {
  console.log('Fetch Error :-S', err);
});

  console.log(ddd);
  // let finish = function finish(ddd) {
  return (
  <div>
      <p>
        Loding .....
      </p>
  </div>
  );
}

// const Page = () =>
//
//
//   <div>
//     <p>
//
//       ddd
//
//     </p>
//   </div>
// ;
// Page.getInitialProps = async () => {
  // const res = fetch('https://api.github.com/repos/zeit/next.js')
  // console.log("!!!!!!!!!!!!!!!!");
  // console.log(res);
  // const json = response.json()
  // console.log(json);
  // return { stars: json.stargazers_count }
  // const stars = json.stargazers_count;
// }


// fetch('https://api.github.com/repos/zeit/next.js')
export default Page;
