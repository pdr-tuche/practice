abstract interface class Garrafa { // como funciona isso de abstract interface class ?
  derramar(){
    print("PODE IMPLEMENTAR MESMO SENDO INTERFACE? 🤔"); // nao, nao pode
  }
  abrir();
}

class Coquinha implements Garrafa {
  String? _tamanho;
  String? _tipoLiquido;

  Coquinha(String? tamanho, String? tipoLiquido) {
    this._tamanho = tamanho;
    this._tipoLiquido = tipoLiquido;
  }

  abrir() {
    print("abrindo garrafa de coquinha");
  }

  derramar() {
    print("derramando coquinha");
  }

  set tamanho(String? tamanho) => this._tamanho = tamanho;
  String? get tamanho => this._tamanho;
  set tipoLiquido(String? tipoLiquido) => this._tipoLiquido = tipoLiquido;
  String? get tipoLiquido => this._tipoLiquido;
}


