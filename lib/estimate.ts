const DEFAULT_DAILY_LIMIT = 190;

function resolveDailyLimit(dailyLimit: number | undefined): number {
  if (
    dailyLimit === undefined ||
    !Number.isFinite(dailyLimit) ||
    dailyLimit <= 0
  ) {
    return DEFAULT_DAILY_LIMIT;
  }
  return dailyLimit;
}

export function estimateMigrationDays(
  writeOperations: number,
  dailyLimit?: number
): number {
  const ops = writeOperations < 0 ? 0 : writeOperations;
  if (ops === 0) return 0;
  const limit = resolveDailyLimit(dailyLimit);
  return Math.ceil(ops / limit);
}

export function estimateSubscriptionMigrationDays(
  subscriptionCount: number,
  dailyLimit?: number
): number {
  return estimateMigrationDays(subscriptionCount, dailyLimit);
}
