module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('posts', [
      {
        id: 1,
        title: '5 Simple Habits to Boost Your Productivity',
        description: 'In this post, I share five simple habits that have helped me boost my productivity and get more done in a day. These habits include making a to-do list, setting small goals, taking breaks, limiting distractions, and finding my most productive time of day.',
        authorId: 1,
        content: `Hi everyone!

Today, I wanted to share with you some simple habits that have helped me boost my productivity and get more done in a day. These habits are easy to incorporate into your routine, and they can make a big difference in your ability to focus and get things done.

Make a to-do list. At the start of each day, take a few minutes to write down the tasks you need to complete. This will help you stay organized and focused, and it will give you a sense of accomplishment as you check items off your list.

Set small, achievable goals. Instead of trying to tackle a huge project all at once, break it down into smaller, more manageable goals. This will make it easier to stay motivated and avoid feeling overwhelmed.

Take breaks. It's important to give your brain a chance to rest and recharge. Take a short break every hour or so to stretch, walk around, or do something else that helps you relax.

Limit distractions. Turn off notifications on your phone and close unnecessary tabs on your computer. This will help you stay focused on the task at hand.

Find your most productive time of day. Everyone has a time of day when they are most productive. Figure out when that is for you and try to schedule your most important tasks during that time.

I hope these habits help you boost your productivity and get more done in your day. Let me know in the comments if you have any other tips for staying focused and getting things done!

Thanks for reading.

Cezar`,
        created_at: '2023-01-07 11:34:12',
        updated_at: '2023-01-07 11:34:12',
      },
      {
        id: 2,
        title: '10 Must-Visit Foodie Destinations Around the World',
        description: 'In this post, I share 10 must-visit foodie destinations that I think everyone should visit at least once. These destinations include Tokyo, New Orleans, Barcelona, Bologna, and more. I highlight the unique food and drink specialties of each destination and offer recommendations for places to visit.',
        authorId: 2,
        content: `As a food lover and travel enthusiast, I am always on the lookout for new and exciting places to eat and drink. In this post, I wanted to share with you some of my top foodie destinations around the world that I think everyone should visit at least once.

Tokyo, Japan: From the bustling streets of Tsukiji fish market to the Michelin-starred sushi restaurants, Tokyo is a paradise for foodies. Don't miss the chance to try out some of the city's famous street food, like takoyaki (octopus balls) and okonomiyaki (savory pancakes).

New Orleans, USA: The Big Easy is known for its delicious Creole and Cajun cuisine, with dishes like gumbo, jambalaya, and beignets. Don't miss a visit to the French Quarter, where you'll find some of the city's best restaurants and bars.

Barcelona, Spain: From tapas bars to molecular gastronomy restaurants, Barcelona has something for every foodie. Be sure to try some of the city's famous paella and sangria, and don't miss a visit to La Boqueria market to sample some of the freshest produce and seafood in the city.

Bologna, Italy: The capital of Italy's Emilia-Romagna region, Bologna is known for its delicious cured meats, cheeses, and pastas. Don't miss a chance to try some of the city's famous mortadella and bolognese`,
        created_at: '2023-01-11 06:40:15',
        updated_at: '2023-01-11 06:40:15',
      },
      {
        id: 3,
        title: '5 Tips for Staying Motivated and Productive While Working from Home',
        description: 'In this post, I share my personal tips for staying motivated and productive while working from home. I recommend creating a dedicated workspace, setting boundaries, taking breaks, setting goals and priorities, and finding a routine that works for you. These strategies have helped me stay focused and avoid distractions while working from home.',
        authorId: 2,
        content: `As someone who works from home, I know firsthand how challenging it can be to stay motivated and productive. It's easy to get distracted by household chores, social media, and other distractions, and it can be hard to find a balance between work and leisure.

In this post, I wanted to share with you some tips that have helped me stay motivated and productive while working from home.

Create a dedicated workspace. It's important to have a designated space for work to help you stay focused and avoid distractions. This could be a home office, a corner of a room, or even a small desk.

Set boundaries. It's important to set boundaries with friends, family, and others to make it clear when you are working and when you are not. This will help you avoid interruptions and distractions.

Take breaks. It's important to take breaks to rest and recharge. Take a short walk, do some stretching, or do something else that helps you relax.

Set goals and priorities. Make a list of tasks you need to complete and prioritize them based on importance. This will help you stay focused and avoid feeling overwhelmed.

Find a routine that works for you. Everyone has a different work style, so it's important to find a routine that works for you. Experiment with different schedules and routines to see what works best for you.`,
        created_at: '2023-01-12 07:10:06',
        updated_at: '2023-01-12 07:10:06',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('posts', null, {});
  },
};
