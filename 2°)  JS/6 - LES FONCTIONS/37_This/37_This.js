console.log(this);

function func() {
  console.log(this);
}

const obj = {
  a: 1,
  func() {
    console.log(this);
  },
};

function func2(cb) {
  cb();
}

func2(obj.func);

//obj.func();

// Mode restrain //

("use strict");
x = 1;
