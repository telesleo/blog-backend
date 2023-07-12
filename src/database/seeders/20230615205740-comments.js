module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('comments', [
      {
        id: 1,
        post_id: 1,
        user_id: 2,
        content: 'I found your tips really helpful! Making a to-do list and setting small goals have made a significant difference in my productivity. Thanks for sharing!',
        created_at: '2023-05-09 11:10:30',
        updated_at: '2023-05-09 11:10:30',
      },
      {
        id: 2,
        post_id: 2,
        user_id: 2,
        content: 'If you have any questions or need more information about any of the places mentioned, feel free to ask!',
        created_at: '2023-05-10 07:08:26',
        updated_at: '2023-05-10 07:08:26',
      },
      {
        id: 3,
        post_id: 2,
        user_id: 1,
        content: 'Wow, this post has made me incredibly hungry! The way you describe the food and drink specialties of each destination is mouthwatering. I\'ve added all these places to my foodie travel bucket list. Can\'t wait to embark on a culinary adventure around the world!',
        created_at: '2023-05-10 07:08:26',
        updated_at: '2023-05-10 07:08:26',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('comments', null, {});
  },
};
