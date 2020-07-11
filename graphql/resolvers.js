 
 const mollang = {
     name : "mollang",
     age : 30,
     gender: 'male'
 };

 const resolvers = {
    Query: {
        person: () => mollang
    }
}

export default resolvers;