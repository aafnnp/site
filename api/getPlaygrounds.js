import { globby } from 'globby';

export const getPlaygrounds = async () => {
  const playgrounds = await globby(['_playground']);
  return playgrounds.reduce((acc, playground) => {
    const arr = playground
      .replace('.jsx', '')
      .replace(/^_playground\//, '')
      .split('/');
    acc.push({
      params: {
        slug: arr,
      },
    });
    return acc;
  }, []);
};
