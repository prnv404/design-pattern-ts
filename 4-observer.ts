class PaymentSystem {
	private subsciber: Studnets[];
	private name: string;

	constructor(name: string) {
		this.name = name;
		this.subsciber = [];
	}

	public subscribe(sub: Studnets) {
		this.subsciber.push(sub);
	}

	public unSubscribe(sub: Studnets) {
		this.subsciber = this.subsciber.filter((student) => student !== sub);
		console.log(`${sub.name} has unsubscribe from rent payment `);
	}

	public notify(event: string) {
		for (const sub of this.subsciber) {
			sub.sendNotification(this.name, event);
		}
	}
}

abstract class Subscirbe {
	abstract sendNotification(name: string, event: string): void;
}

class Studnets implements Subscirbe {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	sendNotification(name: string, event: string): void {
		console.log(`${this.name} ${name} ${event}`);
	}
}

const payment = new PaymentSystem("BROTOTYPE RENT PAYMENT SYSTEM");

const pranav = new Studnets("PRANAV");

const ajay = new Studnets("AJAY");

payment.subscribe(pranav);

payment.subscribe(ajay);

payment.notify("Has sended 4000rs invoice to your email");

payment.unSubscribe(ajay);

payment.notify("Has sended 4000rs invoice to your email");
