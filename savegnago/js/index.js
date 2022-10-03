/*
Parabéns, você conseguiu inspecionar a pagina até aqui, 
Só para descobrir o login e a senha. você é print("FODA")
*/

function Login() {
 
  var done = 0;
  var usuario = document.getElementsByName("usuario")[0].value;
  usuario = usuario.toLowerCase();
  var senha = document.getElementsByName("senha")[0].value;
  seha = senha.toLowerCase();

  if (usuario == "000.000.000-00" && senha == "0000") {
    window.location = "html/dashboard.html";
    done = 1;
  } else {
    alert("Login invalido, Tente novamente!");
    alert("Informe seus dados para continuar, caso não saiba, favor entrar em contato com o desenvolvedor do Site.");
  }
}

function mascara(i) {
  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";
}
