const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema(
  {
    clienteId: {
        type: mongoose.Schema.Types.ObjectId,
		ref: "cliente",
		require: true
    },
    produtos: [{
        produtoId:{
            type: mongoose.Schema.Types.ObjectId,
		    ref: "cardapio",
		    require: true
        },
        numeroDeItens: {
            type: Number,
            required: true
        }
    }],
    valorTotal: {
        type: Number,
        required: true
    },
    valorPago: {
        type: Number,
        required: true
    },
    taxaDeEntrega: {
        type: Number,
        required: true
    },
    litros: {
        type: Number,
        required: true
    },
    formaDePagamento: {
        type: String,
        required: true,
        enum: {
			values: ["Pix", "Dinheiro","Cartão", "Saldo em conta"],
			message: "Escolha um meio de pagamento válido"
		}
    },
    troco: {
        type: Number
    },
    situacao: {
        type: String,
        required: true,
        enum: {
            values: ["Pedido aceito", "Pedido a caminho", "Pedido entregue", "Cancelado"]
        }
    }
}, 
{
    timestamps: false,
    versionKey: false
  }
)

const pedido = mongoose.model('pedido', pedidoSchema);
module.exports = pedido;