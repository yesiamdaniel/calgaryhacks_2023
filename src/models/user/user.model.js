
const userModel = {
    name: '',
    createdAt: new Date(),
    email: '', 
    stocks: [
        { ticker: '', shares: 0, purchasePrice: 0.0, purchaseDate: new Date() }
    ],
    dollarsEarned: 0
};


export default {userModel};