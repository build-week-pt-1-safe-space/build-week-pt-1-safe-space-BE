
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        { 
          id: 1, 
          user_id: 1, 
          body: 'Hello World', 
          created_at: '12:12', 
          send_time: '12:15'
        },
        { 
          id: 2, 
          user_id: 1, 
          body: 'Hello World 2', 
          created_at: '12:02', 
          send_time: '12:25'
        },
        { 
          id: 3, 
          user_id: 1, 
          body: 'Hello World 3', 
          created_at: '12:16', 
          send_time: '12:19'
        },
        

        { 
          id: 4, 
          user_id: 2, 
          body: 'Backend Devs Arent Creative', 
          created_at: '03:12', 
          send_time: '09:15'
        },
        { 
          id: 5, 
          user_id: 2, 
          body: 'Backend Devs Arent Creative 2', 
          created_at: '09:12', 
          send_time: '10:15'
        },
        { 
          id: 6, 
          user_id: 2, 
          body: 'Backend Devs Arent Creative 3', 
          created_at: '02:11', 
          send_time: '04:15'
        },

        { 
          id: 7, 
          user_id: 3, 
          body: 'Backend Devs Arent Creative 4', 
          created_at: '02:11', 
          send_time: '04:15'
        },

        { 
          id: 8, 
          user_id: 4, 
          body: 'Backend Devs Arent Creative 5', 
          created_at: '02:11', 
          send_time: '04:15'
        },
      ]);
    });
};
