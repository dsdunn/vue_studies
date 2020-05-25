const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const { GraphQLDate } = require('graphql-iso-date');

const mongo = require('mongoose');
const { Schema } = mongo;

const studySchema = new Schema({
  studyName: String,
  creationDate: GraphQLDate,
  numCompletes: Number,
}) 

const Study = mongo.model('Study', studySchema);

const StudyType = new GraphQLObjectType({
  name: 'StudyType',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    studyName: {
      type: GraphQLString
    },
    creationDate: {
      type: GraphQLDate
    },
    numCompletes: {
      type: GraphQLInt
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    study: {
      type: StudyType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return Study.findById(args.id);
      }
    },
    studies: {
      type: new GraphQLList(StudyType),
      resolve(parent, args) {
        return Study.find({});
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addStudy: {
      type: StudyType,
      args: {
        studyName: {
          type: new GraphQLNonNull(
            GraphQLString)
        }
      },
      resolve(parent, args) {
        let study = new Study({
          studyName: args.studyName,
          numCompletes: 0,
          creationDate: Date.now(),
        });
        return study.save();
      }
    },
    updateStudy: {
      type: StudyType,
      args: {
        id: {
          type: new GraphQLNonNull(
            GraphQLID)
        },
        studyName: {
          type: new GraphQLNonNull(
            GraphQLString)
        },
        numCompletes: {
          type: new GraphQLNonNull(
            GraphQLInt)
        }
      },
      async resolve(parent, args) {
        let study = await Study.findById(args.id)

        study.studyName = args.studyName;
        study.numCompletes = args.numCompletes;
        return study.save();
      }
    },
    deleteStudy: {
      type: StudyType,
      args: {
        id: {
          type: new GraphQLNonNull(
            GraphQLID)
        }
      },
      async resolve(parent, args) {
        let study = await Study.findById(args.id)

        return study.delete();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});






