const { createRandomDate } = require('./utils');

const createNews = (size = 48) => {
  const list = Array.from({ length: size }, (_, i) => i + 1);

  const news = list.map((item) => ({
    id: item,
    name: `User ${item}`,
    title: `Work in company ${item}`,
    time: createRandomDate(new Date(2015, 0, 1), new Date()),
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Consequuntur, voluptate distinctio modi id nobis esse sapiente harum!
    `,
  }));

  return news;
};

module.exports = {
  createNews,
};
