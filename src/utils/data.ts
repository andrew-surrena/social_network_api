const usernames = [
    'AaranZechariah',
    'ZeekZhen',
    'EmilyZubair',
    'ChrisZeid',
    'BrianZeeshan',
  ];

  const emails = [
    'AaranZechariah@email.com',
    'ZeekZhen@email.com',
    'EmilyZubair@email.com',
    'ChrisZeid@email.com',
    'BrianZeeshan@email.com',
  ]
  
  const reactionBodies = [
    'How to disagree with someone',
    'iPhone review',
    'how-to video',
    'video essay on the history of video games',
    'How to make money on the App Store',
    'Learn NextJS in five minutes (Not clickbate)',
    'Movie trailer',
    'Hello world',
    'Another possible solution to the algorithm',
    'Apology video',
    'Submission for startup pitch',
  ];
  
  const possibleThoughts = [
    'I disagree!',
    'I tried your algorithm, here were the results',
    'This was awesome',
    'Thank you for the great content',
    'Please check out my video response',
    'Like and subscribe to my channel please',
    'Reply: The side effects of in app purchases on digital marketplaces',
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
//   const getRandomName = () =>
//     `${getRandomArrItem(names)}${getRandomArrItem(names)}`;
  

// const getRandomUser = () => getRandomArrItem(usernames)

  // Function to generate random users that we can add to the database. Includes thoughts.
  const getRandomThought = (int: number) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtext: getRandomArrItem(possibleThoughts),
        username: getRandomArrItem(usernames),
        reactions: [...getThoughtReactions(3)],
      });
    }
    return results;
  };
  
  // Create the responses that will be added to each video
  const getThoughtReactions = (int: number) => {
    if (int === 1) {
      return getRandomArrItem(reactionBodies);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reactionBodies),
        username: getRandomArrItem(usernames),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  export { usernames, emails, getRandomThought, getThoughtReactions };
  