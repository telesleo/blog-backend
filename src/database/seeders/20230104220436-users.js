module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        email: 'cezar@email.email',
        username: 'cezar',
        name: 'Cezar A',
        password: '$2y$10$K0hLAILbILQZmeN4izk9A.JHUSApNTcG2vmGxmtfPeA7YKB6GMICK',
        // password: cezarpassword
        about: 'Hi, my name is Cezar and I am a blogger. I have always had a love for writing and have been fortunate enough to turn my passion into a career. When I\'m not sitting at my computer, you can find me exploring the outdoors or cuddled up with a good book. I specialize in lifestyle and personal development content, and my goal is to inspire and empower others to live their best lives. Thank you for visiting my blog and I hope you find value in the words I share.',
        created_at: '2023-01-06 15:20:05',
        updated_at: '2023-01-06 15:20:05',
      },
      {
        id: 2,
        email: 'julia@email.email',
        username: 'julia33',
        name: 'Julia C',
        password: '$2y$10$Cib9ZOoUNoTq5M8fpqAyLu.mFN/6gaBFjQQ2.NyOPU9JvHJvPbRZu',
        // password: juliapassword
        about: 'Hello, I am Julia and I\'m a writer. I have always had a love for storytelling and sharing my thoughts and experiences with others. When I\'m not typing away at my computer, you can find me traveling the world or trying out new recipes in the kitchen. My blog covers a variety of topics including travel, food, and personal growth. I hope to inspire and entertain my readers with my stories and insights.',
        created_at: '2023-01-06 18:11:40',
        updated_at: '2023-01-06 18:11:40',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
