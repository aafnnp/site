function importAll(r) {
  return r.keys().map((item) => {
    if (item !== './index.jsx') {
      const arr = item.replace('.jsx', "").split("/");
      return {
        link: `/challenges/${arr.slice(1).join("/")}`,
        title: arr.slice(-1),
        group: arr.slice(1, 2)
      }
    }
  })
}

export const challenges = () => {
  return new Promise(resolve => {
    const data = importAll(require.context('./pages/challenges/', true, /\.jsx$/));
    resolve(data.filter(Boolean))
  })
}
