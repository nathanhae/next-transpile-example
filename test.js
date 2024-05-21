const { GetServerSideProps } = require('next');
const fart = (...args) => {
  console.log(...args);
  console.log(GetServerSideProps);
  const neeb = {args};
  return {...args, foo:'bar'};
};
