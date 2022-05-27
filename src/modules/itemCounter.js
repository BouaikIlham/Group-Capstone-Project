export const itemsCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');

const displayTvShownumbers = (data) => {
  const TvShowLink = document.querySelector('.tv-show-link');
  const counter = itemsCounter(data);
  TvShowLink.innerHTML = `Total Movies(${counter})`;
};

export default displayTvShownumbers;