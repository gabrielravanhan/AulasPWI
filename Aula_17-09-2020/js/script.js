$('#fundoPrimary').click(function () {
    $('body').addClass('bg-primary');
});

$('#fundoSecondary').click(function () {
    $('body').addClass('bg-secondary');
});

$('#fundoSuccess').click(function () {
    $('body').addClass('bg-success');
});

$('#fundoInfo').click(function () {
    $('body').addClass('bg-info');
});

$('#fundoWarning').click(function () {
    $('body').addClass('bg-warning');
});

$('#fundoDanger').click(function () {
    $('body').addClass('bg-danger');
});

$('#fundoLight').click(function () {
    $('body').addClass('bg-light');
});

$('#fundoDark').click(function () {
    $('body').addClass('bg-dark');
});

$('#ocultarFilmes').click(function () {
    $('#filmes').hide();
});

$('#exibirFilmes').click(function () {
    $('#filmes').show();
});

$('#ocultarSeries').click(function () {
    $('#series').hide();
});

$('#exibirSeries').click(function () {
    $('#series').show();
});

$('#ocultarDesenhos').click(function () {
    $('#desenhos').hide();
});

$('#exibirDesenhos').click(function () {
    $('#desenhos').show();
});

$('#enviar').click(function(){
    alert("Nome: " + $('#nome').val() +"\nE-mail: " + $('#email').val() +"\nMensagem: " + $('#mensagem').val());
}); 