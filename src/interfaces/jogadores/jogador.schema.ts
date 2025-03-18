import * as mongoose from 'mongoose';

export const jogadorSchema = new mongoose.Schema({
        telefoneCelular: { type: String },
        email: { type: String, unique: true},
        nome: String,
        ranking: String,
        posicaoRanking: Number,
        urlFotoJOgador: String
}, {timestamps: true, collection: 'jogadores'})