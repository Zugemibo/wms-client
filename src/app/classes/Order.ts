export class Order {

    constructor(
        public orderNumber: string,
        public customerNick: string,
        public orderDate: string,
        public status: string,
        public username: string,
        public orderLines: OrderLine[]
    ) { }

}

export class OrderLine {

    constructor(
        public productName: string,
        public orderNumber: string,
        public quantity: number,
    ) { }

}