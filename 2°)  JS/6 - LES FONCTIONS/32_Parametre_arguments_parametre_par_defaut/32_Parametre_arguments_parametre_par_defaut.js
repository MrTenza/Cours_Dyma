// Mettre param par defaut //
function func(param = "default") {
  // param = param || "default";
  if (param) {
    console.log(param.toUpperCase());
  }
}

func("param");
