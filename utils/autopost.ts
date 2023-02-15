// async function getAccessToken() {
//   const response = await fetch('https://api.medium.com/v1/tokens', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: new URLSearchParams({
//       'grant_type': 'password',
//       'username': MEDIUM_USERNAME,
//       'password': MEDIUM_PASSWORD,
//       'client_id': MEDIUM_CLIENT_ID,
//       'client_secret': MEDIUM_CLIENT_SECRET,
//     }),
//   });

//   const data = await response.json();

//   if (data.errors) {
//     throw new Error(data.errors[0].message);
//   }

//   return data.access_token;
// }

export function publishToDevTo({title,content}) {
  return fetch('https://dev.to/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.NEXT_PUBLIC_DEVTO_TOKEN,
    },
    body: JSON.stringify({
      article: {
        title,
        body_markdown: content,
      },
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Article published to dev.to:', data.url);
    });
}

export async function publishToHashnode({title,content,cover}) {
  const response = await fetch('https://api.hashnode.com/v1/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HASHNODE_TOKEN}`,
    },
    body: JSON.stringify({
      title: title,
      content,
      coverImage: cover, // 可选参数
    }),
  });

  const data = await response.json();

  console.log('Article published to Hashnode:', data.data.url);
}

// export async function publishToMedium(content) {
//   const response = await fetch('https://api.medium.com/v1/users/me/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${MEDIUM_ACCESS_TOKEN}`,
//     },
//     body: JSON.stringify({
//       title: 'Your Article Title',
//       contentFormat: 'markdown',
//       content,
//       canonicalUrl: 'https://your-canonical-url-here.com', // 可选参数
//     }),
//   });

//   const data = await response.json();

//   console.log('Article published to Medium:', data.data.url);
// }


