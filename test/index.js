var should = require('should'),
	through = require('through'),
	transform = require('../index'),
	rip = Function.prototype.bind.bind(Function.prototype.call),
	uppercase = rip(String.prototype.toUpperCase);

describe('transform',function(){
		it('should apply transformation functions',function(done){

			var s1 = through(),
				s2 = transform(uppercase);
				
			s1.pipe(s2);
			
			s2.on('data',function(data){
				data.should.equal('BEEP');
				done();
			});

			s1.write('beep');

		});
		it('should apply values',function(done){
			var s1 = through(),
				s2 = transform('boop');
			s1.pipe(s2);
			s2.on('data',function(data){
				data.should.equal('boop');
				done();
			});
			s1.write('beep');
		});
		it('should pass through the data if null is passed',function(done){
			var s1 = through(),
				s2 = transform();
			s1.pipe(s2);
			s2.on('data',function(data){
				data.should.equal('beep');
				done();
			});
			s1.write('beep');
		});
});