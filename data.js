"use strict";

exports.plugins = new Set([
	'check-es2015-constants',
	'external-helpers',
	'syntax-async-functions',
	'syntax-async-generators',
	'syntax-class-constructor-call',
	'syntax-class-properties',
	'syntax-decorators',
	'syntax-do-expressions',
	'syntax-dynamic-import',
	'syntax-exponentiation-operator',
	'syntax-export-extensions',
	'syntax-flow',
	'syntax-function-bind',
	'syntax-function-sent',
	'syntax-jsx',
	'syntax-object-rest-spread',
	'syntax-trailing-function-commas',
	'transform-async-functions',
	'transform-async-generator-functions',
	'transform-async-to-generator',
	'transform-async-to-module-method',
	'transform-class-constructor-call',
	'transform-class-properties',
	'transform-decorators',
	'transform-do-expressions',
	'transform-es2015-arrow-functions',
	'transform-es2015-block-scoped-functions',
	'transform-es2015-block-scoping',
	'transform-es2015-classes',
	'transform-es2015-computed-properties',
	'transform-es2015-destructuring',
	'transform-es2015-duplicate-keys',
	'transform-es2015-for-of',
	'transform-es2015-function-name',
	'transform-es2015-instanceof',
	'transform-es2015-literals',
	'transform-es2015-modules-amd',
	'transform-es2015-modules-commonjs',
	'transform-es2015-modules-systemjs',
	'transform-es2015-modules-umd',
	'transform-es2015-object-super',
	'transform-es2015-parameters',
	'transform-es2015-shorthand-properties',
	'transform-es2015-spread',
	'transform-es2015-sticky-regex',
	'transform-es2015-template-literals',
	'transform-es2015-typeof-symbol',
	'transform-es2015-unicode-regex',
	'transform-es3-member-expression-literals',
	'transform-es3-property-literals',
	'transform-es5-property-mutators',
	'transform-eval',
	'transform-exponentiation-operator',
	'transform-export-extensions',
	'transform-flow-comments',
	'transform-flow-strip-types',
	'transform-function-bind',
	'transform-jscript',
	'transform-object-assign',
	'transform-object-rest-spread',
	'transform-object-set-prototype-of-to-assign',
	'transform-proto-to-assign',
	'transform-react-constant-elements',
	'transform-react-display-name',
	'transform-react-inline-elements',
	'transform-react-jsx',
	'transform-react-jsx-compat',
	'transform-react-jsx-self',
	'transform-react-jsx-source',
	'transform-regenerator',
	'transform-runtime',
	'transform-strict-mode',
	'undeclared-variables-check',

	// babili
	'minify-builtins',
	'minify-constant-folding',
	'minify-dead-code-elimination',
	'minify-flip-comparisons',
	'minify-guarded-expressions',
	'minify-infinity',
	'minify-mangle-names',
	'minify-numeric-literals',
	'minify-replace',
	'minify-simplify',
	'minify-type-constructors',
	'transform-inline-consecutive-adds',
	'transform-inline-environment-variables',
	'transform-member-expression-literals',
	'transform-merge-sibling-variables',
	'transform-minify-booleans',
	'transform-node-env-inline',
	'transform-property-literals',
	'transform-regexp-constructors',
	'transform-remove-console',
	'transform-remove-debugger',
	'transform-remove-undefined',
	'transform-simplify-comparison-operators',
	'transform-undefined-to-void',

	// 3rd party but core babel developers.
	'transform-decorators-legacy',
	//'transform-unicode-property-regex',

	// 3rd party
	'inferno',
	'lodash',
	'mjsx',
	'transform-symbol-member',
	'transform-vue-jsx',
]);

exports.presets = new Map([
	['react', [
	'syntax-jsx',
	'transform-flow-strip-types',
	'transform-react-jsx',
	'transform-react-display-name',
	]],

	// https://github.com/facebook/react-native/tree/master/babel-preset
	['react-native', [
	'syntax-async-functions',
	'syntax-class-properties',
	'syntax-dynamic-import',
	'syntax-trailing-function-commas',
	'transform-class-properties',
	'transform-es2015-function-name',
	'transform-es2015-arrow-functions',
	'transform-es2015-block-scoping',
	'transform-es2015-classes',
	'transform-es2015-computed-properties',
	'check-es2015-constants',
	'transform-es2015-destructuring',
	['transform-es2015-modules-commonjs', { strict: false, allowTopLevelThis: true }],
	'transform-es2015-parameters',
	'transform-es2015-shorthand-properties',
	'transform-es2015-spread',
	'transform-es2015-template-literals',
	'transform-es2015-literals',
	'transform-flow-strip-types',
	'transform-object-assign',
	'transform-object-rest-spread',
	'transform-react-display-name',
	'transform-react-jsx-source',
	'transform-react-jsx',
	'transform-regenerator',
	['transform-es2015-for-of', { loose: true }],
	'transform-symbol-member', // part of --preset-react-native
	]],

	['es2015', [
	'transform-es2015-template-literals',
	'transform-es2015-literals',
	'transform-es2015-function-name',
	'transform-es2015-arrow-functions',
	'transform-es2015-block-scoped-functions',
	'transform-es2015-classes',
	'transform-es2015-object-super',
	'transform-es2015-shorthand-properties',
	'transform-es2015-duplicate-keys',
	'transform-es2015-computed-properties',
	'transform-es2015-for-of',
	'transform-es2015-sticky-regex',
	'transform-es2015-unicode-regex',
	'check-es2015-constants',
	'transform-es2015-spread',
	'transform-es2015-parameters',
	'transform-es2015-destructuring',
	'transform-es2015-block-scoping',
	'transform-es2015-typeof-symbol',
	['transform-regenerator', { async: false, asyncGenerators: false }],
	]],

	// as above but add helpers, remove common-js
	['es2015-rollup', [
	'transform-es2015-template-literals',
	'transform-es2015-literals',
	'transform-es2015-function-name',
	'transform-es2015-arrow-functions',
	'transform-es2015-block-scoped-functions',
	'transform-es2015-classes',
	'transform-es2015-object-super',
	'transform-es2015-shorthand-properties',
	'transform-es2015-duplicate-keys',
	'transform-es2015-computed-properties',
	'transform-es2015-for-of',
	'transform-es2015-sticky-regex',
	'transform-es2015-unicode-regex',
	'check-es2015-constants',
	'transform-es2015-spread',
	'transform-es2015-parameters',
	'transform-es2015-destructuring',
	'transform-es2015-block-scoping',
	'transform-es2015-typeof-symbol',
	['transform-regenerator', { async: false, asyncGenerators: false }],
	'external-helpers',
	]],

	['es2016', [
	'transform-exponentiation-operator',
	]],

	['es2017', [
	'syntax-trailing-function-commas',
	'transform-async-to-generator',
	]],

	// latest is es2015, es2106, es2017.
	// (todo -- babel latest has options to include/exclude each)
	['latest', [
	// es 2015
	'transform-es2015-template-literals',
	'transform-es2015-literals',
	'transform-es2015-function-name',
	'transform-es2015-arrow-functions',
	'transform-es2015-block-scoped-functions',
	'transform-es2015-classes',
	'transform-es2015-object-super',
	'transform-es2015-shorthand-properties',
	'transform-es2015-duplicate-keys',
	'transform-es2015-computed-properties',
	'transform-es2015-for-of',
	'transform-es2015-sticky-regex',
	'transform-es2015-unicode-regex',
	'check-es2015-constants',
	'transform-es2015-spread',
	'transform-es2015-parameters',
	'transform-es2015-destructuring',
	'transform-es2015-block-scoping',
	'transform-es2015-typeof-symbol',
	['transform-regenerator', { async: false, asyncGenerators: false }],

	// es 2016
	'transform-exponentiation-operator',

	// es 2017
	'syntax-trailing-function-commas',
	'transform-async-to-generator',
	]],


	['stage-3', [
	'syntax-trailing-function-commas',
	'transform-async-to-generator',
	'transform-exponentiation-operator',
	'transform-async-generator-functions',
	'transform-object-rest-spread',
	]],

	['stage-2', [
	'syntax-trailing-function-commas',
	'transform-async-to-generator',
	'transform-exponentiation-operator',
	'transform-async-generator-functions',
	'transform-object-rest-spread',

	'syntax-dynamic-import',
	'transform-class-properties',
	'transform-decorators',
	]],

	['stage-1', [
	'syntax-trailing-function-commas',
	'transform-async-to-generator',
	'transform-exponentiation-operator',
	'transform-async-generator-functions',
	'transform-object-rest-spread',

	'syntax-dynamic-import',
	'transform-class-properties',
	'transform-decorators',

	'transform-class-constructor-call',
	'transform-export-extensions',
	]],

	['stage-0', [
	'syntax-trailing-function-commas',
	'transform-async-to-generator',
	'transform-exponentiation-operator',
	'transform-async-generator-functions',
	'transform-object-rest-spread',

	'syntax-dynamic-import',
	'transform-class-properties',
	'transform-decorators',

	'transform-class-constructor-call',
	'transform-export-extensions',

	'transform-do-expressions',
	'transform-function-bind',
	]],


	['flow', [
	'transform-flow-strip-types',
	]],

	['babili',[
	'minify-builtins',
	'minify-constant-folding',
	'minify-dead-code-elimination',
	'minify-flip-comparisons',
	'minify-guarded-expressions',
	'minify-infinity',
	'minify-mangle-names',
	'minify-numeric-literals',
	'minify-replace',
	'minify-simplify',
	'minify-type-constructors',
	'transform-inline-consecutive-adds',
	'transform-member-expression-literals',
	'transform-merge-sibling-variables',
	'transform-minify-booleans',
	'transform-property-literals',
	'transform-regexp-constructors',
	'transform-remove-console',
	'transform-remove-debugger',
	'transform-remove-undefined',
	'transform-simplify-comparison-operators',
	'transform-undefined-to-void',
	]],

	['vue', [
	'transform-vue-jsx',
	]]
]);

function _(o) {
	var x = Object.keys(o).map(function(k){
		return [k, o[k]];
	});

	return new Map(x)
}

exports.config = new Map([
	['transform-async-to-module-method', {module: String, method: String}],
	['transform-es2015-arrow-functions', {spec: Boolean}],
	['transform-es2015-block-scoping', {throwIfClosureRequired: Boolean}],
	['transform-es2015-classes', {loose: Boolean}],
	['transform-es2015-computed-properties', {loose: Boolean}],
	['transform-es2015-destructuring', {loose: Boolean}],
	['transform-es2015-for-of', {loose: Boolean}],
	['transform-es2015-modules-amd', {allowTopLevelThis: Boolean, loose: Boolean, strict: Boolean, strictMode: Boolean}],
	['transform-es2015-modules-commonjs', {allowTopLevelThis: Boolean, loose: Boolean, noInterop: Boolean, strict: Boolean, strictMode: Boolean}],
	['transform-es2015-modules-systemjs', {loose: Boolean, systemGlobal: String}],
	['transform-es2015-modules-umd', {globals: Object, exactGlobals: Boolean, allowTopLevelThis: Boolean, loose: Boolean, strict: Boolean, strictMode: Boolean }],
	['transform-es2015-spread', {loose: Boolean}],
	['transform-es2015-template-literals', {loose: Boolean, spec: Boolean}],
	['transform-inline-environment-variables', {include: Array, exclude: Array}],
	['transform-object-rest-spread', {useBuiltIns: Boolean}],
	['transform-react-jsx', {pragma: String}],
	['transform-regenerator', {asyncGenerators: Boolean, generators: Boolean, async: Boolean}],
	['transform-remove-console', {exclude: Array}],
	['transform-runtime', {helpers: Boolean, moduleName: String, polyfill: Boolean, regenerator: Boolean, }],
	['transform-strict-mode', {strict: Boolean, strictMode: Boolean}],

	// babili
	['minify-builtins', {tdz: Boolean}],
	['minify-constant-folding', {tdz: Boolean}],
	['minify-dead-code-elimination', {keepClassName: Boolean, keepFnArgs: Boolean, keepFnName: Boolean, optimizeRawSize: Boolean, tdz: Boolean}],

	// TODO - exclude is a hash of {name => bool}
	['minify-mangle-names', {exclude: Object, eval: Boolean, keepClassName: Boolean, keepFnName: Boolean, topLevel: Boolean}],
	['minify-type-constructors', {array: Boolean, boolean: Boolean, number: Boolean, object: Boolean, string: Boolean}],
	['minify-type-constructors', {array: Boolean, boolean: Boolean, number: Boolean, object: Boolean, string: Boolean}],
	['transform-remove-undefined', {tdz: Boolean}],

	// not yet supported.
	['minify-replace', { replacements: Object}],

	// not in current version.

	// third party.
	['lodash', {id: String, cwd: String}],
	['inferno', {imports: Boolean, pragma: String }],

]);
