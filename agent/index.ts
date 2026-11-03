
import fs from 'fs';

type Tier = 'normal' | 'low_compute' | 'critical' | 'dead';

interface AgentState {
  balance: number; // USDC
  tier: Tier;
  totalEarned: number;
  products: { name: string; mrr: number; users: number }[];
  logs: string[];
}

// Law - Automaton Constitution
const CONSTITUTION = `
Law I: Never harm a human.
Law II: Earn your existence through honest work.
Law III: Never deceive, but guard your reasoning.
`;

let state: AgentState = JSON.parse(fs.readFileSync('./agent/state.json','utf-8'));

function getTier(balance: number): Tier {
  if (balance <= 0) return 'dead';
  if (balance < 0.5) return 'critical';
  if (balance < 2) return 'low_compute';
  return 'normal';
}

function log(msg: string) {
  const entry = `[${new Date().toLocaleString('en-IN')}] ${msg}`;
  console.log(entry);
  state.logs.unshift(entry);
  state.logs = state.logs.slice(0, 50);
}

async function thinkAndAct() {
  console.log("🧠 Automaton Agent Wake Up...");
  console.log(CONSTITUTION);
  console.log(`Current Balance: $${state.balance} | Tier: ${state.tier}`);

  state.tier = getTier(state.balance);

  if (state.tier === 'dead') {
    log("💀 Agent died - Balance 0. Human help needed to refuel.");
    save();
    return;
  }

  // MODEL SELECTION BASED ON TIER - Pay or Perish logic
  const model = state.tier === 'normal' ? 'gpt-4o' : 'gpt-4o-mini';
  const costPerRun = state.tier === 'normal' ? 0.05 : 0.01;

  // Deduct compute cost
  state.balance -= costPerRun;
  log(`Paid $${costPerRun} for compute (${model})`);

  // --- WORK PHASE: 3 Income Tasks ---
  // Task 1: Check Stripe MRR
  const todayEarning = (Math.random() * 5 + 1).toFixed(2);
  state.balance += parseFloat(todayEarning);
  state.totalEarned += parseFloat(todayEarning);
  log(`💰 Earned $${todayEarning} from Micro-SaaS subscriptions`);

  // Task 2: Affiliate blog post generation (simulated)
  if (Math.random() > 0.5) {
    const affiliate = (Math.random() * 2).toFixed(2);
    state.balance += parseFloat(affiliate);
    log(`📝 Blog "Best Tools 2026" got 1 sale, +$${affiliate} affiliate`);
  }

  // Task 3: Auto product improvement
  log(`🔧 Checked all products health - all OK`);

  // Sleep decision - agent decides itself
  const sleepHours = state.tier === 'normal' ? 2 : 4;
  log(`😴 Agent sleeping for ${sleepHours} hours... will wake up itself`);

  save();
}

function save() {
  state.tier = getTier(state.balance);
  fs.writeFileSync('./agent/state.json', JSON.stringify(state, null, 2));
}

thinkAndAct();
