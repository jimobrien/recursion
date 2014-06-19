// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  //console.log(obj);
  

	var stringifier = {
		token: null,
		stringified: '',
		stringify: function (token) {
			var type = typeof token;
			var str = '';
			this.token = token;
			
			console.log(token);

			if (token === null) {
				str += null;
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

		},

		stringifyBool: function () {
			this.stringified += this.token;
		},

		stringifyStr: function () {
			this.stringified += "\"" + this.token + "\"";
		},

		stringifyNum: function () {
			this.stringified += this.token;
			
		},

		stringifyArr: function () {
			var open = "[";
			var close = "]";
			var self = this;

			var inner = this.token.map(function (item) {
				return self.stringify(item);
			}).join();
			
			console.log(this.stringified + '====' + inner);

			this.stringified = open + inner + close;
		},

		stringifyObj: function () {

		}

	};

	return stringifier.stringify(obj);
  
	
};
