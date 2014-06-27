
# map-through

  create a through stream and pass it a transform operation

# why

I think it is tidier than writing 
    
    var mystream = through(function write(data){ 
      this.queue(doSomethingSyncToTheData(data));
    });

every time I just want to do a map operation.  most times I do not want anything special to happen on 'end', I just want a read/write stream to push my data through the pipe.

## Installation

  Install with [component(1)](http://component.io):

    $ component install matchdav/map-through

  Install with [npm(1)](http://npmjs.org):

    $ npm install map-through

## API

```

var through = require('through'),
    transform = require('map-through'),
    rip = Function.prototype.bind.bind(Function.prototype.call),
    uppercase = rip(String.prototype.toUpperCase),
    stream1 = through(),
    stream2 = transform(uppercase);
    stream1.write('beep');
    stream2.on('data',function(data){
      console.log(data) //'BEEP'
    });


```

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.