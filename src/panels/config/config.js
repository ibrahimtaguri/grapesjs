define(function () {
	var crc = 'create-comp';
	var mvc = 'move-comp';
	var swv = 'sw-visibility';
	var expt = 'export-template';
	var osm = 'open-sm';
	var ola = 'open-layers';
	var obl = 'open-blocks';
	var ful = 'fullscreen';
	var prv = 'preview';

	return {
		stylePrefix: 'pn-',

		// Default panels fa-sliders for features
		defaults: [{
			id: 'commands',
			buttons: [{
				id: crc,
				command: crc,
				className: 'fa fa-pencil-square-o',
				attributes: { title	: 'Create element' },
				stopDefaultCommand: 1,
			},{
				id: mvc,
				command: mvc,
				className: 'fa fa-arrows',
				attributes: { title: 'Move elements' },
				stopDefaultCommand: 1,
			}],
		},{
			id: 'options',
			buttons: [{
				active: true,
				id: swv,
				className: 'fa fa-square-o',
				command: swv,
				context: swv,
				attributes: { title: 'View components' },
			},{
				id: prv,
				className: 'fa fa-eye',
				command: prv,
				context: prv,
				stopDefaultCommand: 1,
				attributes: { title: 'Preview' },
			},{
				id: ful,
				className: 'fa fa-arrows-alt',
				command: ful,
				context: ful,
				attributes: { title: 'Fullscreen' },
			},{
				id: expt,
				className: 'fa fa-code',
				command: expt,
				attributes: { title: 'View code' },
			}],
		},{
			id: 'views',
			buttons	: [{
				id: osm,
				className: 'fa fa-paint-brush',
				command: osm,
				active: true,
				attributes: { title: 'Open Style Manager' },
			},{
				id: ola,
				className: 'fa fa-bars',
				command: ola,
				attributes	: { title: 'Open Layer Manager' },
			},{
				id: obl,
				className: 'fa fa-th-large',
				command: obl,
				attributes  : { title: 'Open Blocks' },
			}],
		}],

		// Editor model
		em : null,

		// Delay before show children buttons (in milliseconds)
		delayBtnsShow	: 300,
	};
});