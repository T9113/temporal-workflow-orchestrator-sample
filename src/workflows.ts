import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

const { chargePayment, provisionResource, sendConfirmation } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
  retry: { maximumAttempts: 5 }
});

export async function orderFulfillmentWorkflow(orderId: string): Promise<string> {
  await chargePayment(orderId);
  await provisionResource(orderId);
  await sendConfirmation(orderId);
  return `Order ${orderId} successfully fulfilled`;
}
