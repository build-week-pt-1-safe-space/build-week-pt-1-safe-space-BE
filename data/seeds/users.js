
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
            {  
              id: 1, 
              email: 'me@gmail.com', 
              first_name: 'Me', 
              last_name: 'Me', 
              password: 'asDASDasdas', 
              phone: "15555555555", 
              profile_pic: 'link', 
              gender: 'M'
            },

            {  
              id: 2, 
              email: 'alsome@gmail.com', 
              first_name: 'Also', 
              last_name: 'Me', 
              password: 'asDASDasdas', 
              phone: "15555555555", 
              profile_pic: 'link', 
              gender: 'N/A'
            },

          {  id: 3, 
              email: 'You@gmail.com', 
              first_name: 'You', 
              last_name: 'Me', 
              password: 'asDASDasdas', 
              phone: "15555555555", 
              profile_pic: 'link', 
              gender: 'F'
          },

          {  
            id: 4, 
              email: 'another@gmail.com', 
              first_name: 'another', 
              last_name: 'person', 
              password: 'asDASDasdas', 
              phone: "15555555555", 
              profile_pic: 'link', 
              gender: 'F'
          },

          {  
            id: 5, 
            email: 'someone@gmail.com', 
            first_name: 'someone', 
            last_name: 'else', 
            password: 'asDASDasdas', 
            phone: "15555555555", 
            profile_pic: 'link', 
            gender: 'M'
          },
      ]);
    });
};
