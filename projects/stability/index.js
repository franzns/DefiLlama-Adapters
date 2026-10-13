// Stability Platform was deprecated in January 2026.
//
// The remaining reported TVL was phantom value: the "Stability USDC Silo 112" strategy
// on Sonic reports its Silo share balance converted with the market's exchange rate.
// That market has zero liquidity (maxWithdraw == 0, ~0 USDC held) while interest keeps
// accruing on unpayable debt, so the exchange rate inflates forever and TVL grew without
// any real assets backing it. Freeze the adapter instead.

const chains = ['polygon', 'base', 'real', 'sonic']

module.exports = {
  deadFrom: '2026-01-01',
  hallmarks: [
    ['2026-01-01', 'Protocol deprecated'],
  ],
}

chains.forEach(chain => {
  module.exports[chain] = { tvl: () => ({}) }
})
