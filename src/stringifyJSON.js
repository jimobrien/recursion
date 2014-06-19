// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  //console.log(obj);
  	var sfier = new Stringifier();

  	window.strif = Stringifier;

	function Stringifier () {
		this.stringified = '';
	}

	Stringifier.prototype.stringify = function (token) {
		var type = typeof token;
		this.token = token;

		if (token === null) {
			this.stringified += null;
		}

		if (type === 'boolean') {
			this.stringifyBool();
		}
		if (type === 'string') {
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

	Stringifier.prototype.stringifyBool = function () {
		this.stringified += this.token;
	};

	Stringifier.prototype.stringifyStr = function () {
		this.stringified += "\"" + this.token + "\"";
	};

	Stringifier.prototype.stringifyNum = function () {
		this.stringified += this.token;
	};

	Stringifier.prototype.stringifyArr = function () {
		var open = "[";
		var close = "]";
		var self = this;

		var inner = this.token.map(function (item) {
			var sfier = new Stringifier();
			return sfier.stringify(item);
		}).join();

		this.stringified = open + inner + close;
	};

	Stringifier.prototype.stringifyObj = function () {

	};


	// var Stringifier = {
	// 	token: null,
	// 	stringified: '',
	// 	stringify: function (token) {
	// 		var type = typeof token;
	// 		this.token = token;

	// 		if (token === null) {
	// 			this.stringified += null;
	// 		}

	// 		if (type === 'boolean') {
	// 			this.stringifyBool();
	// 		}
	// 		if (type === 'string') {
	// 			this.stringifyStr();

	// 		} else if (type === 'number') {
	// 			this.stringifyNum();

	// 		} else if (token instanceof Array) {
	// 			this.stringifyArr();

	// 		} else if (type === 'object') {
	// 			this.stringifyObj();
	// 		}

			
	// 		return this.stringified;

	// 	},

	// 	stringifyBool: function () {
	// 		this.stringified += this.token;
	// 	},

	// 	stringifyStr: function () {
	// 		this.stringified += "\"" + this.token + "\"";
	// 	},

	// 	stringifyNum: function () {
	// 		this.stringified += this.token;
			
	// 	},

	// 	stringifyArr: function () {
	// 		var open = "[";
	// 		var close = "]";
	// 		var self = this;

	// 		var inner = this.token.map(function (item) {
	// 			return self.stringify(item);
	// 		}).join();
			
	// 		console.log(this.stringified + '====' + inner);

	// 		this.stringified = open + inner + close;
	// 	},

	// 	stringifyObj: function () {

	// 	}

	// };

	return sfier.stringify(obj);
  
	
};
