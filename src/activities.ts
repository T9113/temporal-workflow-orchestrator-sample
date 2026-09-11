export async function chargePayment(orderId: string): Promise<void> {
  console.log(`Charged payment for order ${orderId}`);
}
export async function provisionResource(orderId: string): Promise<void> {
  console.log(`Provisioned infrastructure for order ${orderId}`);
}
export async function sendConfirmation(orderId: string): Promise<void> {
  console.log(`Confirmation sent for order ${orderId}`);
}
