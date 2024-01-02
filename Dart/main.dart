import 'classes/classes.dart';

void main() {
  var coquinha = Coquinha("600ml", "refrigerante");
    coquinha.abrir();
    coquinha.derramar();
    print(coquinha.tamanho);
    print(coquinha.tipoLiquido);
}