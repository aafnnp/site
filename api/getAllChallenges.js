import { globby } from 'globby';

export const getAllChallenges = async () => {
  const challenges = await globby(['_challenges']);
  return challenges.reduce((acc, playground) => {
    const arr = playground
      .replace('.jsx', '')
      .replace(/^_challenges\//, '')
      .split('/');
    console.log(arr);
    acc.push({
      params: {
        slug: arr,
      },
    });
    return acc;
  }, []);
};
