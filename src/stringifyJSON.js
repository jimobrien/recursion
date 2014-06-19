// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here

	var stringifier = new Stringifier();

	window.strif = Stringifier;

	function Stringifier () {
		this.stringified = '';
		this.token = '';
	}

	Stringifier.prototype.stringify = function (token) {
		var type = typeof token;
		this.token = token;

		if (token === null) {
			this.stringifyNull();

		} else if (type === 'boolean') {
			this.stringifyBool();

		} else if (type === 'string') {
			this.stringifyStr();

		} else if (type === 'number') {
			this.stringifyNum();

		} else if (token instanceof Array) {
			this.stringifyArr();

		} else if (type === 'object') {
			this.stringifyObj();

		}

		return this.stringified;
	};

	Stringifier.prototype.stringifyNull = function () {
		this.stringified = this.token + '';
	};

	Stringifier.prototype.stringifyBool = function () {
		this.stringified = this.token + '';
	};

	Stringifier.prototype.stringifyStr = function () {
		this.stringified = "\"" + this.token + "\"";
	};

	Stringifier.prototype.stringifyNum = function () {
		this.stringified = this.token + '';
	};

	Stringifier.prototype.stringifyArr = function () {
		var open = "[";
		var close = "]";

		var inner = this.token.map(function (item) {
			var stringifier = new Stringifier();
			return stringifier.stringify(item);
		}).join();

		this.stringified = open + inner + close;
	};

	Stringifier.prototype.stringifyObj = function () {
		var open = "{";
		var close = "}";
		var self = this;
		
		var inner = Object.keys(this.token).map(function (item) {
			var stringifier = new Stringifier();
			var key;
			var val;

			if (self.token[item] !== undefined && typeof self.token[item] != 'function') { // check for undefined or functions
				key = stringifier.stringify(item);
				val = stringifier.stringify(self.token[item]);
				return key + ':' + val;
			}

		});

		if (inner.indexOf(undefined) >-1) { // if undefined values are found, set inner to blank
			inner = '';
		} else {
			inner = inner.join(); // otherwise join the array
		}

		this.stringified = open + inner + close;
	};

	return stringifier.stringify(obj);
  
	
};
