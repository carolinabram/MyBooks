import * as GRAPHQL from 'graphql';
import { CategoryType } from './categories';
import Category from '../../schemas/categories';

export const BookType = new GRAPHQL.GraphQLObjectType({
    name: 'Books',
    description: 'Types of Books',
    fields : () => ({
        _id:{
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        name : {
            type : GRAPHQL.GraphQLString
        },
        year: {
            type: GRAPHQL.GraphQLString
        },
        author: {
            type: GRAPHQL.GraphQLString
        },
        rank: {
            type: GRAPHQL.GraphQLList(GRAPHQL.GraphQLFloat)
        },
        description : {
            type: GRAPHQL.GraphQLString
        },
        pages: {
            type: GRAPHQL.GraphQLString
        },
        image: {
            type: GRAPHQL.GraphQLString
        },
        category: {
            type: CategoryType,
            resolve(book){
                const {category} = book
                return Category.findById(category).exec()
            }
        }

        
    })
})
export const BookInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'AddBooks',
    description: 'Types of Books',
    fields : () => ({
        name : {
            type : GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        },
        year: {
            type: GRAPHQL.GraphQLString
        },
        author: {
            type: GRAPHQL.GraphQLString
        },
        pages: {
            type: GRAPHQL.GraphQLString
        },
        image: {
            type: GRAPHQL.GraphQLString
        },
        rating: {
            type: GRAPHQL.GraphQLString
        },
        category: {
            type: GRAPHQL.GraphQLString
        }
        
    })
})

export const RankBookType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addRank',
    description: 'Add rank to Book',
    fields: () =>({
        rank:{
            type:GRAPHQL.GraphQLFloat
        }
    })
})
