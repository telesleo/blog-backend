module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('likes', [
      {
        user_id: 2,
        post_id: 1,
        created_at: '2023-05-08 10:12:10',
        updated_at: '2023-05-08 10:12:10',
      },
      {
        user_id: 2,
        post_id: 2,
        created_at: '2023-05-09 11:07:25',
        updated_at: '2023-05-09 11:07:25',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('likes', null, {});
  },
};
