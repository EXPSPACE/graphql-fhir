const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary Immunization Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Immunization_Input',
	description: 'Base StructureDefinition for Immunization Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Immunization_Enum_input',
					values: { Immunization: { value: 'Immunization' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description: 'A unique identifier assigned to this immunization record.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'Indicates the current status of the vaccination event.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-admin-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the current status of the vaccination event.',
		},
		_date: {
			type: require('./element.input.js'),
			description: 'Date vaccine administered or was to be administered.',
		},
		date: {
			type: DateTimeScalar,
			description: 'Date vaccine administered or was to be administered.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/vaccine-code
		vaccineCode: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description: 'Vaccine that was administered or was to be administered.',
		},
		patient: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The patient who either received or did not receive the immunization.',
		},
		_wasNotGiven: {
			type: require('./element.input.js'),
			description: 'Indicates if the vaccination was or was not given.',
		},
		wasNotGiven: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'Indicates if the vaccination was or was not given.',
		},
		_reported: {
			type: require('./element.input.js'),
			description:
				'True if this administration was reported rather than directly administered.',
		},
		reported: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'True if this administration was reported rather than directly administered.',
		},
		performer: {
			type: GraphQLString,
			description: 'Clinician who administered the vaccine.',
		},
		requester: {
			type: GraphQLString,
			description: 'Clinician who ordered the vaccination.',
		},
		encounter: {
			type: GraphQLString,
			description:
				'The visit or admission or other contact between patient and health care provider the immunization was performed as part of.',
		},
		manufacturer: {
			type: GraphQLString,
			description: 'Name of vaccine manufacturer.',
		},
		location: {
			type: GraphQLString,
			description:
				'The service delivery location where the vaccine administration occurred.',
		},
		_lotNumber: {
			type: require('./element.input.js'),
			description: 'Lot number of the  vaccine product.',
		},
		lotNumber: {
			type: GraphQLString,
			description: 'Lot number of the  vaccine product.',
		},
		_expirationDate: {
			type: require('./element.input.js'),
			description: 'Date vaccine batch expires.',
		},
		expirationDate: {
			type: DateScalar,
			description: 'Date vaccine batch expires.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/immunization-site
		site: {
			type: require('./codeableconcept.input.js'),
			description: 'Body site where vaccine was administered.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/immunization-route
		route: {
			type: require('./codeableconcept.input.js'),
			description:
				'The path by which the vaccine product is taken into the body.',
		},
		doseQuantity: {
			type: require('./quantity.input.js'),
			description: 'The quantity of vaccine product that was administered.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Extra information about the immunization that is not conveyed by the other attributes.',
		},
		explanation: {
			type: require('./immunizationexplanation.input.js'),
			description: 'Reasons why a vaccine was or was not administered.',
		},
		reaction: {
			type: new GraphQLList(require('./immunizationreaction.input.js')),
			description:
				'Categorical data indicating that an adverse event is associated in time to an immunization.',
		},
		vaccinationProtocol: {
			type: new GraphQLList(
				require('./immunizationvaccinationprotocol.input.js'),
			),
			description:
				'Contains information about the protocol(s) under which the vaccine was administered.',
		},
	}),
});
