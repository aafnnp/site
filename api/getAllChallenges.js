import { globby } from 'globby';

export const getAllChallenges = async () => {
  const challenges = await globby(['pages/challenges']);
  const challengesArr = [];
  for await (const challenge of challenges) {
    if (!challenge.endsWith('index.jsx')) {
      const arr = challenge.replace('.jsx', '').split('/');
      challengesArr.push({
        link: arr.slice(1).join('/'),
        title: arr.slice(-1),
        group: arr[2],
      });
    }
  }
  return challengesArr;
};
