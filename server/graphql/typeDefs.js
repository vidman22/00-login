const { buildSchema } = require('graphql');

const schema = buildSchema(`
	type Query {
		user(id: String! ): User
    }
    
	type AuthPayload {
  		token: String
  		expiresIn: Int
  		user: User
	}

	type User {
		id: Int
		email: String!
		username: String!
		password: String
		uuid: String!
		picture: String
	}

	type Mutation {
		signUp( username: String! , email: String!, password: String! ): AuthPayload
		login( email: String!, password: String! ) : AuthPayload
		oAuthSignIn(email: String!, username: String!, picture: String, uuid: String!, token: String!, expiresIn: String! ): AuthPayload
	}
`);

module.exports =  schema;
