export const itemsCounter = (data) => data.length;

const displayTvShownumbers = (data) => {
  const TvShowLink = document.querySelector('.tv-show-link');
  const counter = itemsCounter(data);
  TvShowLink.innerHTML = `Total Movies(${counter})`;
};

export default displayTvShownumbers;