class PaymentSystem {
    // 静态成员 - 类级别共享
    static DEFAULT_CURRENCY = 'USD';
    static #processorAPIKey = 'secret_key_123'; // 静态私有字段
    
    // 私有字段 - 实例级别私有
    #userToken;
    #paymentHistory = [];
    
    constructor(userToken) {
        this.#userToken = userToken;
    }
    
    // 静态方法
    static configureProcessor(apiKey) {
        this.#processorAPIKey = apiKey; // 修改静态私有字段
    }
    
    // 实例方法
    makePayment(amount) {
        const transaction = {
            token: this.#userToken,
            amount,
            currency: PaymentSystem.DEFAULT_CURRENCY,
            timestamp: Date.now()
        };
        
        // 调用内部私有方法
        this.#processTransaction(transaction);
        return transaction;
    }
    
    // 私有方法（通过字段+箭头函数实现）
    #processTransaction = (tx) => {
        const authKey = PaymentSystem.#processorAPIKey;
        console.log(`Processing $${tx.amount} with token ${tx.token}`);
        this.#paymentHistory.push(tx);
    }
    
    // 公共方法访问私有字段
    get paymentCount() {
        return this.#paymentHistory.length;
    }
}

// 使用静态成员
console.log(PaymentSystem.DEFAULT_CURRENCY); // "USD"
PaymentSystem.configureProcessor('new_key_456');

// 创建实例
const userPayment = new PaymentSystem('user_token_789');
const tx1 = userPayment.makePayment(100);
const tx2 = userPayment.makePayment(50);

console.log(userPayment.paymentCount); // 2
console.log(userPayment.userToken); // undefined
console.log(userPayment.#paymentHistory); // SyntaxError
// console.log(PaymentSystem.#processorAPIKey); // SyntaxError

// 创建另一个实例
const anotherUser = new PaymentSystem('another_token');
console.log(anotherUser.paymentCount); // 0 (独立维护自己的状态)