$("#formulario").validate({
	rules : {
		nome : {
			required : true,
			minleght : 3
		},
		email : {
			required : true
		},	
		endereco : {
			required : true,
			minleght : 10,
			maxleght : 35
		},
		telefone : {
			required : true,
			minleght : 13,
			maxleght : 13
		},
		cpf : {
			required : true
		},
		idade : {
			required : true,
			maxleght : 4
		},
		cep : {
			required : true,
			minleght : 8
		},
		estados : {
			required : true
		}
	},
	messages : {
		nome : {
			required : "Por favor, informe o nome!",
			minleght : "Insira no campo nome, pelo menos 3 letras!"
		},
		email : {
			required : "Por favor, informe o e-mail",
			email : "Informe um e-mail válido: lll@ll.ll"
		}
	}
});