export const itemsCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');

const displayTvShownumbers = (data) => {
  const TvShowLink = document.querySelector('.tv-show-link');
  const counter = itemsCounter(data);
  console.log(counter);
  TvShowLink.innerHTML = `TvShows(${counter})`;
  console.log(TvShowLink);
};

export default displayTvShownumbers;