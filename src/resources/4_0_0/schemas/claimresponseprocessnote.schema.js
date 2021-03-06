const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ClaimResponseprocessNote Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseprocessNote',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_number: {
			type: require('./element.schema.js'),
			description: 'A number to uniquely identify a note entry.',
		},
		number: {
			type: PositiveIntScalar,
			description: 'A number to uniquely identify a note entry.',
		},
		_type: {
			type: require('./element.schema.js'),
			description: 'The business purpose of the note text.',
		},
		type: {
			type: CodeScalar,
			description: 'The business purpose of the note text.',
		},
		_text: {
			type: require('./element.schema.js'),
			description:
				'The explanation or description associated with the processing.',
		},
		text: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The explanation or description associated with the processing.',
		},
		language: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A code to define the language used in the text of the note.',
		},
	}),
});
