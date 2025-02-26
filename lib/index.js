const { Transaction, PublicKey } = require("@solana/web3.js");
var Lm = Object.create;
var oo = Object.defineProperty,
  Om = Object.defineProperties,
  Mm = Object.getOwnPropertyDescriptor,
  Nm = Object.getOwnPropertyDescriptors,
  vm = Object.getOwnPropertyNames,
  rr = Object.getOwnPropertySymbols,
  _m = Object.getPrototypeOf,
  Fs = Object.prototype.hasOwnProperty,
  nc = Object.prototype.propertyIsEnumerable;
var tc = (i, e, t) =>
    e in i
      ? oo(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  N = (i, e) => {
    for (var t in e || (e = {})) Fs.call(e, t) && tc(i, t, e[t]);
    if (rr) for (var t of rr(e)) nc.call(e, t) && tc(i, t, e[t]);
    return i;
  },
  X = (i, e) => Om(i, Nm(e));
var He = (i, e) => {
  var t = {};
  for (var n in i) Fs.call(i, n) && e.indexOf(n) < 0 && (t[n] = i[n]);
  if (i != null && rr)
    for (var n of rr(i)) e.indexOf(n) < 0 && nc.call(i, n) && (t[n] = i[n]);
  return t;
};
var Vm = (i, e) => {
    for (var t in e) oo(i, t, { get: e[t], enumerable: !0 });
  },
  ic = (i, e, t, n) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let o of vm(e))
        !Fs.call(i, o) &&
          o !== t &&
          oo(i, o, {
            get: () => e[o],
            enumerable: !(n = Mm(e, o)) || n.enumerable,
          });
    return i;
  };
var be = (i, e, t) => (
    (t = i != null ? Lm(_m(i)) : {}),
    ic(
      e || !i || !i.__esModule
        ? oo(t, "default", { value: i, enumerable: !0 })
        : t,
      i,
    )
  ),
  Em = (i) => ic(oo({}, "__esModule", { value: !0 }), i);
var Py = {};
Vm(Py, {
  ACCOUNT_TYPE_SIZE: () => Dm,
  ALL_PROGRAM_ID: () => ht,
  AMM_CONFIG_SEED: () => El,
  AMM_STABLE: () => Gc,
  AMM_V4: () => Ai,
  ANAMint: () => Qd,
  API_URLS: () => st,
  AccountType: () => sc,
  Api: () => To,
  BIT_PRECISION: () => Ja,
  BNDivCeil: () => Yt,
  BNLayout: () => qn,
  BN_100: () => lp,
  BN_1000: () => mp,
  BN_10000: () => dp,
  BN_FIVE: () => cp,
  BN_ONE: () => oa,
  BN_TEN: () => vn,
  BN_THREE: () => up,
  BN_TWO: () => ap,
  BN_ZERO: () => Xe,
  BitStructure: () => Rp,
  Blob: () => xa,
  CLMM_LOCK_AUTH_ID: () => wi,
  CLMM_LOCK_PROGRAM_ID: () => ni,
  CLMM_PROGRAM_ID: () => hn,
  CLOCK_PROGRAM_ID: () => kr,
  CREATE_CPMM_POOL_AUTH: () => Rr,
  CREATE_CPMM_POOL_FEE_ACC: () => jc,
  CREATE_CPMM_POOL_PROGRAM: () => Pi,
  Clmm: () => Hi,
  ClmmConfigLayout: () => gu,
  ClmmInstrument: () => Re,
  ConstantProductCurve: () => Xo,
  CpmmConfigInfoLayout: () => qu,
  CpmmFee: () => zo,
  CpmmPoolInfoLayout: () => Zo,
  Currency: () => yi,
  CurrencyAmount: () => Nn,
  CurveCalculator: () => Yo,
  DEVNET_PROGRAM_ID: () => hp,
  DEV_API_URLS: () => Ip,
  DEV_CREATE_CPMM_POOL_AUTH: () => $c,
  DEV_CREATE_CPMM_POOL_FEE_ACC: () => Jc,
  DEV_CREATE_CPMM_POOL_PROGRAM: () => Zc,
  DEV_LOCK_CPMM_AUTH: () => tl,
  DEV_LOCK_CPMM_PROGRAM: () => el,
  DataElement: () => sm,
  ETHMint: () => Yd,
  EXTENSION_TICKARRAY_BITMAP_SIZE: () => bs,
  FARM_LOCK_MINT: () => Da,
  FARM_LOCK_VAULT: () => Wa,
  FARM_PROGRAM_ID_V3: () => Sr,
  FARM_PROGRAM_ID_V4: () => fa,
  FARM_PROGRAM_ID_V5: () => Kr,
  FARM_PROGRAM_ID_V6: () => ti,
  FARM_PROGRAM_TO_VERSION: () => Ft,
  FARM_VERSION_TO_LEDGER_LAYOUT: () => Ua,
  FARM_VERSION_TO_STATE_LAYOUT: () => qa,
  FEE_DESTINATION_ID: () => ya,
  FEE_RATE_DENOMINATOR: () => vo,
  FEE_RATE_DENOMINATOR_VALUE: () => Rs,
  FETCH_TICKARRAY_COUNT: () => Ql,
  Fee: () => Vl,
  Fraction: () => ce,
  IDO_ALL_PROGRAM: () => Ti,
  IDO_PROGRAM_ID_V1: () => zc,
  IDO_PROGRAM_ID_V2: () => Qc,
  IDO_PROGRAM_ID_V3: () => Yc,
  IDO_PROGRAM_ID_V4: () => Hc,
  INSTRUCTION_PROGRAM_ID: () => mo,
  InstructionType: () => U,
  JupTokenType: () => ba,
  LIQUIDITY_FEES_DENOMINATOR: () => Fo,
  LIQUIDITY_FEES_NUMERATOR: () => As,
  LIQUIDITY_POOL_PROGRAM_ID_V5_MODEL: () => wo,
  LIQUIDITY_VERSION_TO_SERUM_VERSION: () => im,
  LIQUIDITY_VERSION_TO_STATE_LAYOUT: () => qf,
  LOCK_CPMM_AUTH: () => hi,
  LOCK_CPMM_PROGRAM: () => ki,
  LOCK_LIQUIDITY_SEED: () => hm,
  LOG_B_2_X32: () => eu,
  LOG_B_P_ERR_MARGIN_LOWER_X64: () => tu,
  LOG_B_P_ERR_MARGIN_UPPER_X64: () => nu,
  LOOKUP_TABLE_CACHE: () => Po,
  Layout: () => Bi,
  LiquidityMath: () => we,
  LockClPositionLayoutV2: () => vf,
  LockPositionLayout: () => Nf,
  LogLevel: () => oc,
  Logger: () => sr,
  MARKET_STATE_LAYOUT_V2: () => Ks,
  MARKET_STATE_LAYOUT_V3: () => Ms,
  MARKET_VERSION_TO_STATE_LAYOUT: () => Xu,
  MAX_BASE64_SIZE: () => la,
  MAX_SQRT_PRICE_X64: () => qt,
  MAX_SQRT_PRICE_X64_SUB_ONE: () => No,
  MAX_TICK: () => It,
  MEMO_PROGRAM_ID: () => lo,
  MEMO_PROGRAM_ID2: () => tn,
  METADATA_PROGRAM_ID: () => cn,
  MIN_SQRT_PRICE_X64: () => Wt,
  MIN_SQRT_PRICE_X64_ADD_ONE: () => Mo,
  MIN_TICK: () => bt,
  MODEL_DATA_PUBKEY: () => ui,
  Market: () => Jo,
  MathUtil: () => ae,
  MaxU64: () => ls,
  MaxUint128: () => $a,
  NEGATIVE_ONE: () => bn,
  NRVMint: () => zd,
  OBSERVATION_SEED: () => Xl,
  ONE: () => vt,
  OPEN_BOOK_PROGRAM: () => Cr,
  OPERATION_SEED: () => Ul,
  ObservationInfoLayout: () => Au,
  ObservationLayout: () => Hl,
  OperationLayout: () => wu,
  OptionLayout: () => qr,
  Owner: () => Qt,
  PAIMint: () => Fd,
  POOL_LOCK_ID_SEED: () => mu,
  POOL_REWARD_VAULT_SEED: () => Wl,
  POOL_SEED: () => Fl,
  POOL_TICK_ARRAY_BITMAP_SEED: () => Gl,
  POOL_VAULT_SEED: () => Dl,
  POSITION_SEED: () => au,
  Percent: () => Ee,
  PoolFetchType: () => ga,
  PoolInfoLayout: () => zn,
  PoolUtils: () => Oe,
  PositionInfoLayout: () => Wi,
  PositionRewardInfoLayout: () => Zl,
  PositionUtils: () => Ei,
  Price: () => rt,
  ProtocolPositionLayout: () => Mf,
  Q128: () => Oo,
  Q64: () => _t,
  RAYMint: () => Ed,
  RENT_PROGRAM_ID: () => ot,
  Raydium: () => or,
  RewardInfo: () => jl,
  RoundDirection: () => Lu,
  Rounding: () => yr,
  Router: () => Xc,
  SERUM_PROGRAMID_TO_VERSION: () => Uu,
  SERUM_PROGRAM_ID_V3: () => Ao,
  SERUM_VERSION_TO_PROGRAMID: () => Gu,
  SESSION_KEY: () => Aa,
  SOLMint: () => it,
  SOL_INFO: () => en,
  SPL_MINT_LAYOUT: () => _f,
  SRMMint: () => Dd,
  STORAGE_KEY: () => Mr,
  SUPPORT_MINT_SEED: () => zl,
  SYSTEM_PROGRAM_ID: () => po,
  SqrtPriceMath: () => re,
  StableLayout: () => ai,
  Structure: () => Ur,
  SwapMath: () => Xn,
  TICK_ARRAY_BITMAP_SIZE: () => Gn,
  TICK_ARRAY_SEED: () => ql,
  TICK_ARRAY_SIZE: () => et,
  TICK_SPACINGS: () => Bf,
  TOKEN_WSOL: () => nt,
  TickArrayBitmap: () => gn,
  TickArrayBitmapExtensionLayout: () => yu,
  TickArrayBitmapExtensionUtils: () => Di,
  TickArrayLayout: () => Fi,
  TickLayout: () => $l,
  TickMath: () => Qn,
  TickQuery: () => Pe,
  TickUtils: () => Z,
  Token: () => Be,
  TokenAmount: () => ke,
  TxBuilder: () => ko,
  TxVersion: () => Vn,
  U64Resolution: () => Ni,
  U64_IGNORE_RANGE: () => Sf,
  UInt: () => Er,
  USDCMint: () => Wd,
  USDHMint: () => Xd,
  USDTMint: () => qd,
  UTIL1216: () => Uc,
  Union: () => Gr,
  Voter: () => Ea,
  VoterDepositEntry: () => Sl,
  VoterLockup: () => xl,
  VoterRegistrar: () => Va,
  VoterVotingMintConfig: () => Bl,
  WSOLMint: () => $,
  WideBits: () => Bo,
  WrappedLayout: () => pn,
  ZERO: () => ge,
  _100_PERCENT: () => ea,
  accountMeta: () => A,
  add: () => rp,
  addComputeBudget: () => yo,
  addLiquidityLayout: () => hs,
  array: () => df,
  associatedLedgerAccountLayout: () => Qr,
  bits: () => Dr,
  blob: () => Te,
  bool: () => _e,
  calFarmRewardAmount: () => ss,
  ceilDiv: () => Pm,
  checkLegacyTxSize: () => bi,
  checkV0TxSize: () => gi,
  chunkArray: () => ar,
  claimLayout: () => Ji,
  clmmComputeInfoToApiInfo: () => fu,
  closeAccountInstruction: () => fn,
  collectCpFeeInstruction: () => Wu,
  commonSystemAccountMeta: () => Ar,
  confirmTransaction: () => bo,
  cpmmLockPositionInstruction: () => Tm,
  createAssociatedLedgerAccountInstruction: () => Ri,
  createLogger: () => ye,
  createPoolFeeLayout: () => ku,
  createPoolV4InstructionV2: () => Bs,
  createPoolV4Layout: () => Wf,
  createWSolAccountInstructions: () => yn,
  cstr: () => rf,
  currencyEquals: () => Hd,
  decimalToFraction: () => vc,
  decodeBool: () => yl,
  div: () => tp,
  divCeil: () => fo,
  dwLayout: () => Tt,
  encodeBool: () => bl,
  endlessRetry: () => Bp,
  eq: () => Rc,
  f32: () => Jp,
  f32be: () => ef,
  f64: () => tf,
  f64be: () => nf,
  farmAddRewardLayout: () => Zr,
  farmLedgerLayoutV3_1: () => gf,
  farmLedgerLayoutV3_2: () => Ki,
  farmLedgerLayoutV5_1: () => Af,
  farmLedgerLayoutV5_2: () => va,
  farmLedgerLayoutV6_1: () => _a,
  farmRewardInfoToConfig: () => Xa,
  farmRewardLayout: () => Hr,
  farmRewardRestartLayout: () => jr,
  farmRewardTimeInfoLayout: () => Il,
  farmStateV3Layout: () => Ma,
  farmStateV5Layout: () => Na,
  farmStateV6Layout: () => Si,
  fetchMultipleFarmInfoAndUpdate: () => wf,
  fetchMultipleInfo: () => ey,
  fetchMultipleMintInfos: () => Jn,
  findProgramAddress: () => le,
  fixedSwapInLayout: () => ws,
  fixedSwapOutLayout: () => Ps,
  floorDiv: () => Ou,
  forecastTransactionSize: () => go,
  formatLayout: () => lm,
  generatePubKey: () => De,
  getATAAddress: () => oe,
  getAssociatedAuthority: () => Ga,
  getAssociatedConfigId: () => Wo,
  getAssociatedLedgerAccount: () => yt,
  getAssociatedLedgerPoolAccount: () => Ci,
  getAssociatedOpenOrders: () => Am,
  getAssociatedPoolKeys: () => Ss,
  getCpLockPda: () => Ho,
  getCpmmPdaAmmConfigId: () => cy,
  getCpmmPdaPoolId: () => Os,
  getCreatePoolKeys: () => vu,
  getDate: () => aa,
  getDepositEntryIndex: () => as,
  getDxByDyBaseIn: () => Iu,
  getDyByDxBaseIn: () => Tu,
  getEpochInfo: () => Pp,
  getFarmLedgerLayout: () => ri,
  getFarmStateLayout: () => Kl,
  getLiquidityAssociatedAuthority: () => xs,
  getLiquidityAssociatedId: () => Yn,
  getLiquidityFromAmounts: () => Lf,
  getMax: () => op,
  getMultipleAccountsInfo: () => zt,
  getMultipleAccountsInfoWithCustomFlags: () => je,
  getMultipleLookupTableInfo: () => Lr,
  getPdaAmmConfigId: () => Rf,
  getPdaExBitmapAccount: () => We,
  getPdaLockClPositionIdV2: () => Vi,
  getPdaLockPositionId: () => fs,
  getPdaLpMint: () => km,
  getPdaMetadataKey: () => Un,
  getPdaMintExAccount: () => ys,
  getPdaObservationAccount: () => lu,
  getPdaObservationId: () => $i,
  getPdaOperationAccount: () => _i,
  getPdaPersonalPositionAddress: () => Bt,
  getPdaPoolAuthority: () => li,
  getPdaPoolId: () => uu,
  getPdaPoolRewardVaulId: () => cu,
  getPdaPoolVaultId: () => ps,
  getPdaProtocolPositionAddress: () => jt,
  getPdaTickArrayAddress: () => Ae,
  getPdaVault: () => Nu,
  getRecentBlockHash: () => ei,
  getRegistrarAddress: () => es,
  getSessionKey: () => il,
  getStablePrice: () => Bu,
  getTime: () => Vc,
  getTimestamp: () => sp,
  getTokenOwnerRecordAddress: () => rs,
  getTransferAmountFee: () => Tp,
  getTransferAmountFeeV2: () => he,
  getVoterAddress: () => is,
  getVoterWeightRecordAddress: () => os,
  getVotingMintAuthority: () => ns,
  getVotingTokenMint: () => ts,
  governanceCreateTokenOwnerRecord: () => Ml,
  greedy: () => Lp,
  gt: () => Cc,
  gte: () => ep,
  i128: () => Ra,
  i16ToBytes: () => Kf,
  i32ToBytes: () => _o,
  i64: () => ii,
  i8: () => Ca,
  initPoolLayout: () => ks,
  initTokenAccountInstruction: () => zr,
  initializeMarket: () => wm,
  intersection: () => gp,
  isDateAfter: () => ca,
  isDateBefore: () => ua,
  isDecimal: () => _c,
  isMeaningfulNumber: () => ip,
  isNumber: () => sa,
  isValidFarmVersion: () => $r,
  isZero: () => vi,
  jsonInfo2PoolKeys: () => Me,
  judgeFarmType: () => Pf,
  leadingZeros: () => ms,
  leastSignificantBit: () => su,
  liquidityStateV4Layout: () => Ui,
  liquidityStateV5Layout: () => om,
  lt: () => $d,
  lte: () => Jd,
  mSOLMint: () => Ud,
  makeAMMSwapInstruction: () => Do,
  makeAddLiquidityInstruction: () => xu,
  makeAddNewRewardInstruction: () => cs,
  makeClaimInstruction: () => nr,
  makeClaimInstructionV4: () => Vs,
  makeCpmmLockInstruction: () => Du,
  makeCreateCpmmPoolInInstruction: () => _u,
  makeCreateFarmInstruction: () => za,
  makeCreateMarketInstruction: () => Uo,
  makeCreatorWithdrawFarmRewardInstruction: () => Qa,
  makeDepositCpmmInInstruction: () => Vu,
  makeDepositInstructionV3: () => Ha,
  makeDepositInstructionV5: () => ja,
  makeDepositInstructionV6: () => Za,
  makeDepositTokenInstruction: () => hf,
  makeDepositWithdrawInstruction: () => If,
  makeInitPoolInstructionV4: () => $f,
  makePurchaseInstruction: () => gy,
  makeRestartRewardInstruction: () => us,
  makeSimulatePoolInfoInstruction: () => Su,
  makeSwapCpmmBaseInInstruction: () => jo,
  makeSwapCpmmBaseOutInstruction: () => Fu,
  makeSwapFixedInInstruction: () => dm,
  makeSwapFixedOutInstruction: () => pm,
  makeSwapInstruction: () => Yu,
  makeTransferInstruction: () => Oa,
  makeWithdrawCpmmInInstruction: () => Eu,
  makeWithdrawInstructionV3: () => Mi,
  makeWithdrawInstructionV4: () => Ya,
  makeWithdrawInstructionV5: () => Oi,
  makeWithdrawInstructionV6: () => Li,
  makeWithdrawTokenInstruction: () => Tf,
  minExpirationTime: () => Ht,
  mockCreatePoolInfo: () => xf,
  mockV3CreatePoolInfo: () => iu,
  modelDataInfoLayout: () => am,
  mostSignificantBit: () => ru,
  mul: () => Ir,
  notInnerObject: () => Br,
  ns64: () => zp,
  ns64be: () => $p,
  nu64: () => Sa,
  nu64be: () => Dp,
  offset: () => Wr,
  offsetDateTime: () => bp,
  option: () => af,
  parseBigNumberish: () => J,
  parseNumberInfo: () => _n,
  parseSimulateLogToJson: () => da,
  parseSimulateValue: () => ln,
  parseTokenAccountResp: () => La,
  parseTokenInfo: () => Vf,
  poolTypeV6: () => In,
  printSimulate: () => En,
  publicKey: () => M,
  purchaseLayout: () => vs,
  realFarmStateV3Layout: () => kl,
  realFarmStateV5Layout: () => hl,
  realFarmV6Layout: () => Tl,
  recursivelyDecimalToFraction: () => ia,
  removeLiquidityInstruction: () => Is,
  removeLiquidityLayout: () => Ts,
  route1Instruction: () => py,
  route2Instruction: () => fy,
  routeInstruction: () => Im,
  rustEnum: () => mf,
  s16: () => qp,
  s16be: () => Qp,
  s24: () => Up,
  s24be: () => Yp,
  s32: () => Ne,
  s32be: () => Hp,
  s40: () => Gp,
  s40be: () => jp,
  s48: () => Xp,
  s48be: () => Zp,
  s8: () => Wp,
  seq: () => j,
  setLoggerLevel: () => Fm,
  shakeFractionDecimal: () => Mc,
  simulateMultipleInstruction: () => ma,
  simulatePoolInfoInstruction: () => Zf,
  simulateTransaction: () => Fc,
  sleep: () => ta,
  solToWSol: () => pt,
  solToWSolToken: () => Ff,
  splAccountLayout: () => Tn,
  splitNumber: () => js,
  stSOLMint: () => Gd,
  str: () => lf,
  struct: () => V,
  sub: () => np,
  swapBaseInAutoAccount: () => yy,
  swapBaseOutAutoAccount: () => by,
  tagged: () => cf,
  tenExponential: () => Tr,
  toAmmComputePoolInfo: () => qo,
  toApiV3Token: () => gt,
  toBN: () => Nc,
  toBuffer: () => pa,
  toFeeConfig: () => Bn,
  toFraction: () => ra,
  toFractionWithDecimals: () => Zd,
  toPercent: () => pp,
  toToken: () => Eo,
  toTokenAmount: () => qi,
  toTokenInfo: () => Ef,
  toTokenPrice: () => fp,
  toTotalPrice: () => yp,
  toUsdCurrency: () => na,
  trailingZeros: () => ds,
  transformTxToBase64: () => kp,
  tryParsePublicKey: () => Pr,
  txToBase64: () => Dc,
  u128: () => ne,
  u16: () => dn,
  u16ToBytes: () => ou,
  u16be: () => vp,
  u24: () => Op,
  u24be: () => _p,
  u32: () => ct,
  u32ToBytes: () => Cf,
  u32be: () => Vp,
  u40: () => Mp,
  u40be: () => Ep,
  u48: () => Np,
  u48be: () => Fp,
  u64: () => k,
  u8: () => G,
  union: () => pf,
  unionArr: () => wy,
  unionLayoutDiscriminator: () => of,
  uniq: () => wp,
  updateFarmPoolInfo: () => Cl,
  updateReqHistory: () => ho,
  utf8: () => sf,
  validateAndParsePublicKey: () => wr,
  validateFarmRewards: () => Jr,
  vec: () => uf,
  vecU8: () => gl,
  voterStakeRegistryCreateDepositEntry: () => vl,
  voterStakeRegistryCreateVoter: () => Nl,
  voterStakeRegistryDeposit: () => Rl,
  voterStakeRegistryUpdateVoterWeightRecord: () => Ll,
  voterStakeRegistryWithdraw: () => Ol,
  wSolToSolToken: () => Df,
  withdrawRewardLayout: () => Yr,
  xor: () => Ap,
  zeros: () => ff,
});
module.exports = Em(Py);
var Pa = be(require("axios"));
var qs = require("@solana/web3.js");
var $n = require("lodash"),
  oc = ((o) => (
    (o[(o.Error = 0)] = "Error"),
    (o[(o.Warning = 1)] = "Warning"),
    (o[(o.Info = 2)] = "Info"),
    (o[(o.Debug = 3)] = "Debug"),
    o
  ))(oc || {}),
  sr = class {
    constructor(e) {
      (this.logLevel = e.logLevel !== void 0 ? e.logLevel : 0),
        (this.name = e.name);
    }
    set level(e) {
      this.logLevel = e;
    }
    get time() {
      return Date.now().toString();
    }
    get moduleName() {
      return this.name;
    }
    isLogLevel(e) {
      return e <= this.logLevel;
    }
    error(...e) {
      return this.isLogLevel(0)
        ? (console.error(this.time, this.name, "sdk logger error", ...e), this)
        : this;
    }
    logWithError(...e) {
      let t = e
        .map((n) => (typeof n == "object" ? JSON.stringify(n) : n))
        .join(", ");
      throw new Error(t);
    }
    warning(...e) {
      return this.isLogLevel(1)
        ? (console.warn(this.time, this.name, "sdk logger warning", ...e), this)
        : this;
    }
    info(...e) {
      return this.isLogLevel(2)
        ? (console.info(this.time, this.name, "sdk logger info", ...e), this)
        : this;
    }
    debug(...e) {
      return this.isLogLevel(3)
        ? (console.debug(this.time, this.name, "sdk logger debug", ...e), this)
        : this;
    }
  },
  Ds = {},
  rc = {};
function ye(i) {
  let e = (0, $n.get)(Ds, i);
  if (!e) {
    let t = (0, $n.get)(rc, i);
    (e = new sr({ name: i, logLevel: t })), (0, $n.set)(Ds, i, e);
  }
  return e;
}
function Fm(i, e) {
  (0, $n.set)(rc, i, e);
  let t = (0, $n.get)(Ds, i);
  t && (t.level = e);
}
var Cn = require("@solana/spl-token"),
  Ws = ye("Raydium_accountInfo_util");
async function zt(i, e, t) {
  let {
      batchRequest: n,
      commitment: o = "confirmed",
      chunkCount: r = 100,
    } = N({ batchRequest: !1 }, t),
    s = ar(e, r),
    a = new Array(s.length).fill([]);
  if (n) {
    let c = s.map((m) => {
        let d = i._buildArgs([m.map((p) => p.toBase58())], o, "base64");
        return { methodName: "getMultipleAccounts", args: d };
      }),
      u = ar(c, 10);
    a = (
      await (
        await Promise.all(u.map(async (m) => await i._rpcBatchRequest(m)))
      ).flat()
    ).map(
      (m) => (
        m.error &&
          Ws.logWithError(
            `failed to get info for multiple accounts, RPC_ERROR, ${m.error.message}`,
          ),
        m.result.value.map((d) => {
          if (d) {
            let {
              data: p,
              executable: y,
              lamports: f,
              owner: b,
              rentEpoch: g,
            } = d;
            return (
              p.length !== 2 &&
                p[1] !== "base64" &&
                Ws.logWithError("info must be base64 encoded, RPC_ERROR"),
              {
                data: Buffer.from(p[0], "base64"),
                executable: y,
                lamports: f,
                owner: new qs.PublicKey(b),
                rentEpoch: g,
              }
            );
          }
          return null;
        })
      ),
    );
  } else
    try {
      a = await Promise.all(s.map((c) => i.getMultipleAccountsInfo(c, o)));
    } catch (c) {
      c instanceof Error &&
        Ws.logWithError(
          `failed to get info for multiple accounts, RPC_ERROR, ${c.message}`,
        );
    }
  return a.flat();
}
async function je(i, e, t) {
  let n = await zt(
    i,
    e.map((o) => o.pubkey),
    t,
  );
  return e.map((o, r) => X(N({}, o), { accountInfo: n[r] }));
}
var sc = ((n) => (
    (n[(n.Uninitialized = 0)] = "Uninitialized"),
    (n[(n.Mint = 1)] = "Mint"),
    (n[(n.Account = 2)] = "Account"),
    n
  ))(sc || {}),
  Dm = 1;
async function Jn({ connection: i, mints: e, config: t }) {
  var r, s, a;
  if (e.length === 0) return {};
  let n = await je(
      i,
      e.map((c) => ({ pubkey: pt(c) })),
      t,
    ),
    o = {};
  for (let c of n) {
    if (!c.accountInfo || c.accountInfo.data.length < Cn.MINT_SIZE) {
      console.log("invalid mint account", c.pubkey.toBase58());
      continue;
    }
    let u = (0, Cn.unpackMint)(
      c.pubkey,
      c.accountInfo,
      (r = c.accountInfo) == null ? void 0 : r.owner,
    );
    o[c.pubkey.toString()] = X(N({}, u), {
      programId:
        ((s = c.accountInfo) == null ? void 0 : s.owner) || Cn.TOKEN_PROGRAM_ID,
      feeConfig: (a = (0, Cn.getTransferFeeConfig)(u)) != null ? a : void 0,
    });
  }
  return (o[qs.PublicKey.default.toBase58()] = o[$.toBase58()]), o;
}
var ze = be(require("bn.js"));
var di = 9e15,
  Mn = 1e9,
  Us = "0123456789abcdef",
  cr =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  lr =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  Gs = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -di,
    maxE: di,
    crypto: !1,
  },
  lc,
  wn,
  ue = !0,
  dr = "[DecimalError] ",
  On = dr + "Invalid argument: ",
  mc = dr + "Precision limit exceeded",
  dc = dr + "crypto unavailable",
  pc = "[object Decimal]",
  kt = Math.floor,
  tt = Math.pow,
  Wm = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  qm = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  Um = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  fc = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Jt = 1e7,
  se = 7,
  Gm = 9007199254740991,
  Xm = cr.length - 1,
  Xs = lr.length - 1,
  q = { toStringTag: pc };
q.absoluteValue = q.abs = function () {
  var i = new this.constructor(this);
  return i.s < 0 && (i.s = 1), ie(i);
};
q.ceil = function () {
  return ie(new this.constructor(this), this.e + 1, 2);
};
q.clampedTo = q.clamp = function (i, e) {
  var t,
    n = this,
    o = n.constructor;
  if (((i = new o(i)), (e = new o(e)), !i.s || !e.s)) return new o(NaN);
  if (i.gt(e)) throw Error(On + e);
  return (t = n.cmp(i)), t < 0 ? i : n.cmp(e) > 0 ? e : new o(n);
};
q.comparedTo = q.cmp = function (i) {
  var e,
    t,
    n,
    o,
    r = this,
    s = r.d,
    a = (i = new r.constructor(i)).d,
    c = r.s,
    u = i.s;
  if (!s || !a)
    return !c || !u ? NaN : c !== u ? c : s === a ? 0 : !s ^ (c < 0) ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? c : a[0] ? -u : 0;
  if (c !== u) return c;
  if (r.e !== i.e) return (r.e > i.e) ^ (c < 0) ? 1 : -1;
  for (n = s.length, o = a.length, e = 0, t = n < o ? n : o; e < t; ++e)
    if (s[e] !== a[e]) return (s[e] > a[e]) ^ (c < 0) ? 1 : -1;
  return n === o ? 0 : (n > o) ^ (c < 0) ? 1 : -1;
};
q.cosine = q.cos = function () {
  var i,
    e,
    t = this,
    n = t.constructor;
  return t.d
    ? t.d[0]
      ? ((i = n.precision),
        (e = n.rounding),
        (n.precision = i + Math.max(t.e, t.sd()) + se),
        (n.rounding = 1),
        (t = zm(n, wc(n, t))),
        (n.precision = i),
        (n.rounding = e),
        ie(wn == 2 || wn == 3 ? t.neg() : t, i, e, !0))
      : new n(1)
    : new n(NaN);
};
q.cubeRoot = q.cbrt = function () {
  var i,
    e,
    t,
    n,
    o,
    r,
    s,
    a,
    c,
    u,
    l = this,
    m = l.constructor;
  if (!l.isFinite() || l.isZero()) return new m(l);
  for (
    ue = !1,
      r = l.s * tt(l.s * l, 1 / 3),
      !r || Math.abs(r) == 1 / 0
        ? ((t = ft(l.d)),
          (i = l.e),
          (r = (i - t.length + 1) % 3) && (t += r == 1 || r == -2 ? "0" : "00"),
          (r = tt(t, 1 / 3)),
          (i = kt((i + 1) / 3) - (i % 3 == (i < 0 ? -1 : 2))),
          r == 1 / 0
            ? (t = "5e" + i)
            : ((t = r.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + i)),
          (n = new m(t)),
          (n.s = l.s))
        : (n = new m(r.toString())),
      s = (i = m.precision) + 3;
    ;

  )
    if (
      ((a = n),
      (c = a.times(a).times(a)),
      (u = c.plus(l)),
      (n = Le(u.plus(l).times(a), u.plus(c), s + 2, 1)),
      ft(a.d).slice(0, s) === (t = ft(n.d)).slice(0, s))
    )
      if (((t = t.slice(s - 3, s + 1)), t == "9999" || (!o && t == "4999"))) {
        if (!o && (ie(a, i + 1, 0), a.times(a).times(a).eq(l))) {
          n = a;
          break;
        }
        (s += 4), (o = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == "5")) &&
          (ie(n, i + 1, 1), (e = !n.times(n).times(n).eq(l)));
        break;
      }
  return (ue = !0), ie(n, i, m.rounding, e);
};
q.decimalPlaces = q.dp = function () {
  var i,
    e = this.d,
    t = NaN;
  if (e) {
    if (((i = e.length - 1), (t = (i - kt(this.e / se)) * se), (i = e[i]), i))
      for (; i % 10 == 0; i /= 10) t--;
    t < 0 && (t = 0);
  }
  return t;
};
q.dividedBy = q.div = function (i) {
  return Le(this, new this.constructor(i));
};
q.dividedToIntegerBy = q.divToInt = function (i) {
  var e = this,
    t = e.constructor;
  return ie(Le(e, new t(i), 0, 1, 1), t.precision, t.rounding);
};
q.equals = q.eq = function (i) {
  return this.cmp(i) === 0;
};
q.floor = function () {
  return ie(new this.constructor(this), this.e + 1, 3);
};
q.greaterThan = q.gt = function (i) {
  return this.cmp(i) > 0;
};
q.greaterThanOrEqualTo = q.gte = function (i) {
  var e = this.cmp(i);
  return e == 1 || e === 0;
};
q.hyperbolicCosine = q.cosh = function () {
  var i,
    e,
    t,
    n,
    o,
    r = this,
    s = r.constructor,
    a = new s(1);
  if (!r.isFinite()) return new s(r.s ? 1 / 0 : NaN);
  if (r.isZero()) return a;
  (t = s.precision),
    (n = s.rounding),
    (s.precision = t + Math.max(r.e, r.sd()) + 4),
    (s.rounding = 1),
    (o = r.d.length),
    o < 32
      ? ((i = Math.ceil(o / 3)), (e = (1 / fr(4, i)).toString()))
      : ((i = 16), (e = "2.3283064365386962890625e-10")),
    (r = pi(s, 1, r.times(e), new s(1), !0));
  for (var c, u = i, l = new s(8); u--; )
    (c = r.times(r)), (r = a.minus(c.times(l.minus(c.times(l)))));
  return ie(r, (s.precision = t), (s.rounding = n), !0);
};
q.hyperbolicSine = q.sinh = function () {
  var i,
    e,
    t,
    n,
    o = this,
    r = o.constructor;
  if (!o.isFinite() || o.isZero()) return new r(o);
  if (
    ((e = r.precision),
    (t = r.rounding),
    (r.precision = e + Math.max(o.e, o.sd()) + 4),
    (r.rounding = 1),
    (n = o.d.length),
    n < 3)
  )
    o = pi(r, 2, o, o, !0);
  else {
    (i = 1.4 * Math.sqrt(n)),
      (i = i > 16 ? 16 : i | 0),
      (o = o.times(1 / fr(5, i))),
      (o = pi(r, 2, o, o, !0));
    for (var s, a = new r(5), c = new r(16), u = new r(20); i--; )
      (s = o.times(o)), (o = o.times(a.plus(s.times(c.times(s).plus(u)))));
  }
  return (r.precision = e), (r.rounding = t), ie(o, e, t, !0);
};
q.hyperbolicTangent = q.tanh = function () {
  var i,
    e,
    t = this,
    n = t.constructor;
  return t.isFinite()
    ? t.isZero()
      ? new n(t)
      : ((i = n.precision),
        (e = n.rounding),
        (n.precision = i + 7),
        (n.rounding = 1),
        Le(t.sinh(), t.cosh(), (n.precision = i), (n.rounding = e)))
    : new n(t.s);
};
q.inverseCosine = q.acos = function () {
  var i,
    e = this,
    t = e.constructor,
    n = e.abs().cmp(1),
    o = t.precision,
    r = t.rounding;
  return n !== -1
    ? n === 0
      ? e.isNeg()
        ? $t(t, o, r)
        : new t(0)
      : new t(NaN)
    : e.isZero()
      ? $t(t, o + 4, r).times(0.5)
      : ((t.precision = o + 6),
        (t.rounding = 1),
        (e = e.asin()),
        (i = $t(t, o + 4, r).times(0.5)),
        (t.precision = o),
        (t.rounding = r),
        i.minus(e));
};
q.inverseHyperbolicCosine = q.acosh = function () {
  var i,
    e,
    t = this,
    n = t.constructor;
  return t.lte(1)
    ? new n(t.eq(1) ? 0 : NaN)
    : t.isFinite()
      ? ((i = n.precision),
        (e = n.rounding),
        (n.precision = i + Math.max(Math.abs(t.e), t.sd()) + 4),
        (n.rounding = 1),
        (ue = !1),
        (t = t.times(t).minus(1).sqrt().plus(t)),
        (ue = !0),
        (n.precision = i),
        (n.rounding = e),
        t.ln())
      : new n(t);
};
q.inverseHyperbolicSine = q.asinh = function () {
  var i,
    e,
    t = this,
    n = t.constructor;
  return !t.isFinite() || t.isZero()
    ? new n(t)
    : ((i = n.precision),
      (e = n.rounding),
      (n.precision = i + 2 * Math.max(Math.abs(t.e), t.sd()) + 6),
      (n.rounding = 1),
      (ue = !1),
      (t = t.times(t).plus(1).sqrt().plus(t)),
      (ue = !0),
      (n.precision = i),
      (n.rounding = e),
      t.ln());
};
q.inverseHyperbolicTangent = q.atanh = function () {
  var i,
    e,
    t,
    n,
    o = this,
    r = o.constructor;
  return o.isFinite()
    ? o.e >= 0
      ? new r(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN)
      : ((i = r.precision),
        (e = r.rounding),
        (n = o.sd()),
        Math.max(n, i) < 2 * -o.e - 1
          ? ie(new r(o), i, e, !0)
          : ((r.precision = t = n - o.e),
            (o = Le(o.plus(1), new r(1).minus(o), t + i, 1)),
            (r.precision = i + 4),
            (r.rounding = 1),
            (o = o.ln()),
            (r.precision = i),
            (r.rounding = e),
            o.times(0.5)))
    : new r(NaN);
};
q.inverseSine = q.asin = function () {
  var i,
    e,
    t,
    n,
    o = this,
    r = o.constructor;
  return o.isZero()
    ? new r(o)
    : ((e = o.abs().cmp(1)),
      (t = r.precision),
      (n = r.rounding),
      e !== -1
        ? e === 0
          ? ((i = $t(r, t + 4, n).times(0.5)), (i.s = o.s), i)
          : new r(NaN)
        : ((r.precision = t + 6),
          (r.rounding = 1),
          (o = o.div(new r(1).minus(o.times(o)).sqrt().plus(1)).atan()),
          (r.precision = t),
          (r.rounding = n),
          o.times(2)));
};
q.inverseTangent = q.atan = function () {
  var i,
    e,
    t,
    n,
    o,
    r,
    s,
    a,
    c,
    u = this,
    l = u.constructor,
    m = l.precision,
    d = l.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new l(u);
    if (u.abs().eq(1) && m + 4 <= Xs)
      return (s = $t(l, m + 4, d).times(0.25)), (s.s = u.s), s;
  } else {
    if (!u.s) return new l(NaN);
    if (m + 4 <= Xs) return (s = $t(l, m + 4, d).times(0.5)), (s.s = u.s), s;
  }
  for (
    l.precision = a = m + 10,
      l.rounding = 1,
      t = Math.min(28, (a / se + 2) | 0),
      i = t;
    i;
    --i
  )
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (
    ue = !1, e = Math.ceil(a / se), n = 1, c = u.times(u), s = new l(u), o = u;
    i !== -1;

  )
    if (
      ((o = o.times(c)),
      (r = s.minus(o.div((n += 2)))),
      (o = o.times(c)),
      (s = r.plus(o.div((n += 2)))),
      s.d[e] !== void 0)
    )
      for (i = e; s.d[i] === r.d[i] && i--; );
  return (
    t && (s = s.times(2 << (t - 1))),
    (ue = !0),
    ie(s, (l.precision = m), (l.rounding = d), !0)
  );
};
q.isFinite = function () {
  return !!this.d;
};
q.isInteger = q.isInt = function () {
  return !!this.d && kt(this.e / se) > this.d.length - 2;
};
q.isNaN = function () {
  return !this.s;
};
q.isNegative = q.isNeg = function () {
  return this.s < 0;
};
q.isPositive = q.isPos = function () {
  return this.s > 0;
};
q.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
q.lessThan = q.lt = function (i) {
  return this.cmp(i) < 0;
};
q.lessThanOrEqualTo = q.lte = function (i) {
  return this.cmp(i) < 1;
};
q.logarithm = q.log = function (i) {
  var e,
    t,
    n,
    o,
    r,
    s,
    a,
    c,
    u = this,
    l = u.constructor,
    m = l.precision,
    d = l.rounding,
    p = 5;
  if (i == null) (i = new l(10)), (e = !0);
  else {
    if (((i = new l(i)), (t = i.d), i.s < 0 || !t || !t[0] || i.eq(1)))
      return new l(NaN);
    e = i.eq(10);
  }
  if (((t = u.d), u.s < 0 || !t || !t[0] || u.eq(1)))
    return new l(t && !t[0] ? -1 / 0 : u.s != 1 ? NaN : t ? 0 : 1 / 0);
  if (e)
    if (t.length > 1) r = !0;
    else {
      for (o = t[0]; o % 10 === 0; ) o /= 10;
      r = o !== 1;
    }
  if (
    ((ue = !1),
    (a = m + p),
    (s = Ln(u, a)),
    (n = e ? mr(l, a + 10) : Ln(i, a)),
    (c = Le(s, n, a, 1)),
    ro(c.d, (o = m), d))
  )
    do
      if (
        ((a += 10),
        (s = Ln(u, a)),
        (n = e ? mr(l, a + 10) : Ln(i, a)),
        (c = Le(s, n, a, 1)),
        !r)
      ) {
        +ft(c.d).slice(o + 1, o + 15) + 1 == 1e14 && (c = ie(c, m + 1, 0));
        break;
      }
    while (ro(c.d, (o += 10), d));
  return (ue = !0), ie(c, m, d);
};
q.minus = q.sub = function (i) {
  var e,
    t,
    n,
    o,
    r,
    s,
    a,
    c,
    u,
    l,
    m,
    d,
    p = this,
    y = p.constructor;
  if (((i = new y(i)), !p.d || !i.d))
    return (
      !p.s || !i.s
        ? (i = new y(NaN))
        : p.d
          ? (i.s = -i.s)
          : (i = new y(i.d || p.s !== i.s ? p : NaN)),
      i
    );
  if (p.s != i.s) return (i.s = -i.s), p.plus(i);
  if (
    ((u = p.d), (d = i.d), (a = y.precision), (c = y.rounding), !u[0] || !d[0])
  ) {
    if (d[0]) i.s = -i.s;
    else if (u[0]) i = new y(p);
    else return new y(c === 3 ? -0 : 0);
    return ue ? ie(i, a, c) : i;
  }
  if (
    ((t = kt(i.e / se)), (l = kt(p.e / se)), (u = u.slice()), (r = l - t), r)
  ) {
    for (
      m = r < 0,
        m
          ? ((e = u), (r = -r), (s = d.length))
          : ((e = d), (t = l), (s = u.length)),
        n = Math.max(Math.ceil(a / se), s) + 2,
        r > n && ((r = n), (e.length = 1)),
        e.reverse(),
        n = r;
      n--;

    )
      e.push(0);
    e.reverse();
  } else {
    for (n = u.length, s = d.length, m = n < s, m && (s = n), n = 0; n < s; n++)
      if (u[n] != d[n]) {
        m = u[n] < d[n];
        break;
      }
    r = 0;
  }
  for (
    m && ((e = u), (u = d), (d = e), (i.s = -i.s)),
      s = u.length,
      n = d.length - s;
    n > 0;
    --n
  )
    u[s++] = 0;
  for (n = d.length; n > r; ) {
    if (u[--n] < d[n]) {
      for (o = n; o && u[--o] === 0; ) u[o] = Jt - 1;
      --u[o], (u[n] += Jt);
    }
    u[n] -= d[n];
  }
  for (; u[--s] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --t;
  return u[0]
    ? ((i.d = u), (i.e = pr(u, t)), ue ? ie(i, a, c) : i)
    : new y(c === 3 ? -0 : 0);
};
q.modulo = q.mod = function (i) {
  var e,
    t = this,
    n = t.constructor;
  return (
    (i = new n(i)),
    !t.d || !i.s || (i.d && !i.d[0])
      ? new n(NaN)
      : !i.d || (t.d && !t.d[0])
        ? ie(new n(t), n.precision, n.rounding)
        : ((ue = !1),
          n.modulo == 9
            ? ((e = Le(t, i.abs(), 0, 3, 1)), (e.s *= i.s))
            : (e = Le(t, i, 0, n.modulo, 1)),
          (e = e.times(i)),
          (ue = !0),
          t.minus(e))
  );
};
q.naturalExponential = q.exp = function () {
  return zs(this);
};
q.naturalLogarithm = q.ln = function () {
  return Ln(this);
};
q.negated = q.neg = function () {
  var i = new this.constructor(this);
  return (i.s = -i.s), ie(i);
};
q.plus = q.add = function (i) {
  var e,
    t,
    n,
    o,
    r,
    s,
    a,
    c,
    u,
    l,
    m = this,
    d = m.constructor;
  if (((i = new d(i)), !m.d || !i.d))
    return (
      !m.s || !i.s
        ? (i = new d(NaN))
        : m.d || (i = new d(i.d || m.s === i.s ? m : NaN)),
      i
    );
  if (m.s != i.s) return (i.s = -i.s), m.minus(i);
  if (
    ((u = m.d), (l = i.d), (a = d.precision), (c = d.rounding), !u[0] || !l[0])
  )
    return l[0] || (i = new d(m)), ue ? ie(i, a, c) : i;
  if (
    ((r = kt(m.e / se)), (n = kt(i.e / se)), (u = u.slice()), (o = r - n), o)
  ) {
    for (
      o < 0
        ? ((t = u), (o = -o), (s = l.length))
        : ((t = l), (n = r), (s = u.length)),
        r = Math.ceil(a / se),
        s = r > s ? r + 1 : s + 1,
        o > s && ((o = s), (t.length = 1)),
        t.reverse();
      o--;

    )
      t.push(0);
    t.reverse();
  }
  for (
    s = u.length,
      o = l.length,
      s - o < 0 && ((o = s), (t = l), (l = u), (u = t)),
      e = 0;
    o;

  )
    (e = ((u[--o] = u[o] + l[o] + e) / Jt) | 0), (u[o] %= Jt);
  for (e && (u.unshift(e), ++n), s = u.length; u[--s] == 0; ) u.pop();
  return (i.d = u), (i.e = pr(u, n)), ue ? ie(i, a, c) : i;
};
q.precision = q.sd = function (i) {
  var e,
    t = this;
  if (i !== void 0 && i !== !!i && i !== 1 && i !== 0) throw Error(On + i);
  return (
    t.d ? ((e = yc(t.d)), i && t.e + 1 > e && (e = t.e + 1)) : (e = NaN), e
  );
};
q.round = function () {
  var i = this,
    e = i.constructor;
  return ie(new e(i), i.e + 1, e.rounding);
};
q.sine = q.sin = function () {
  var i,
    e,
    t = this,
    n = t.constructor;
  return t.isFinite()
    ? t.isZero()
      ? new n(t)
      : ((i = n.precision),
        (e = n.rounding),
        (n.precision = i + Math.max(t.e, t.sd()) + se),
        (n.rounding = 1),
        (t = Ym(n, wc(n, t))),
        (n.precision = i),
        (n.rounding = e),
        ie(wn > 2 ? t.neg() : t, i, e, !0))
    : new n(NaN);
};
q.squareRoot = q.sqrt = function () {
  var i,
    e,
    t,
    n,
    o,
    r,
    s = this,
    a = s.d,
    c = s.e,
    u = s.s,
    l = s.constructor;
  if (u !== 1 || !a || !a[0])
    return new l(!u || (u < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0);
  for (
    ue = !1,
      u = Math.sqrt(+s),
      u == 0 || u == 1 / 0
        ? ((e = ft(a)),
          (e.length + c) % 2 == 0 && (e += "0"),
          (u = Math.sqrt(e)),
          (c = kt((c + 1) / 2) - (c < 0 || c % 2)),
          u == 1 / 0
            ? (e = "5e" + c)
            : ((e = u.toExponential()),
              (e = e.slice(0, e.indexOf("e") + 1) + c)),
          (n = new l(e)))
        : (n = new l(u.toString())),
      t = (c = l.precision) + 3;
    ;

  )
    if (
      ((r = n),
      (n = r.plus(Le(s, r, t + 2, 1)).times(0.5)),
      ft(r.d).slice(0, t) === (e = ft(n.d)).slice(0, t))
    )
      if (((e = e.slice(t - 3, t + 1)), e == "9999" || (!o && e == "4999"))) {
        if (!o && (ie(r, c + 1, 0), r.times(r).eq(s))) {
          n = r;
          break;
        }
        (t += 4), (o = 1);
      } else {
        (!+e || (!+e.slice(1) && e.charAt(0) == "5")) &&
          (ie(n, c + 1, 1), (i = !n.times(n).eq(s)));
        break;
      }
  return (ue = !0), ie(n, c, l.rounding, i);
};
q.tangent = q.tan = function () {
  var i,
    e,
    t = this,
    n = t.constructor;
  return t.isFinite()
    ? t.isZero()
      ? new n(t)
      : ((i = n.precision),
        (e = n.rounding),
        (n.precision = i + 10),
        (n.rounding = 1),
        (t = t.sin()),
        (t.s = 1),
        (t = Le(t, new n(1).minus(t.times(t)).sqrt(), i + 10, 0)),
        (n.precision = i),
        (n.rounding = e),
        ie(wn == 2 || wn == 4 ? t.neg() : t, i, e, !0))
    : new n(NaN);
};
q.times = q.mul = function (i) {
  var e,
    t,
    n,
    o,
    r,
    s,
    a,
    c,
    u,
    l = this,
    m = l.constructor,
    d = l.d,
    p = (i = new m(i)).d;
  if (((i.s *= l.s), !d || !d[0] || !p || !p[0]))
    return new m(
      !i.s || (d && !d[0] && !p) || (p && !p[0] && !d)
        ? NaN
        : !d || !p
          ? i.s / 0
          : i.s * 0,
    );
  for (
    t = kt(l.e / se) + kt(i.e / se),
      c = d.length,
      u = p.length,
      c < u && ((r = d), (d = p), (p = r), (s = c), (c = u), (u = s)),
      r = [],
      s = c + u,
      n = s;
    n--;

  )
    r.push(0);
  for (n = u; --n >= 0; ) {
    for (e = 0, o = c + n; o > n; )
      (a = r[o] + p[n] * d[o - n - 1] + e),
        (r[o--] = a % Jt | 0),
        (e = (a / Jt) | 0);
    r[o] = (r[o] + e) % Jt | 0;
  }
  for (; !r[--s]; ) r.pop();
  return (
    e ? ++t : r.shift(),
    (i.d = r),
    (i.e = pr(r, t)),
    ue ? ie(i, m.precision, m.rounding) : i
  );
};
q.toBinary = function (i, e) {
  return Ys(this, 2, i, e);
};
q.toDecimalPlaces = q.toDP = function (i, e) {
  var t = this,
    n = t.constructor;
  return (
    (t = new n(t)),
    i === void 0
      ? t
      : (Nt(i, 0, Mn),
        e === void 0 ? (e = n.rounding) : Nt(e, 0, 8),
        ie(t, i + t.e + 1, e))
  );
};
q.toExponential = function (i, e) {
  var t,
    n = this,
    o = n.constructor;
  return (
    i === void 0
      ? (t = un(n, !0))
      : (Nt(i, 0, Mn),
        e === void 0 ? (e = o.rounding) : Nt(e, 0, 8),
        (n = ie(new o(n), i + 1, e)),
        (t = un(n, !0, i + 1))),
    n.isNeg() && !n.isZero() ? "-" + t : t
  );
};
q.toFixed = function (i, e) {
  var t,
    n,
    o = this,
    r = o.constructor;
  return (
    i === void 0
      ? (t = un(o))
      : (Nt(i, 0, Mn),
        e === void 0 ? (e = r.rounding) : Nt(e, 0, 8),
        (n = ie(new r(o), i + o.e + 1, e)),
        (t = un(n, !1, i + n.e + 1))),
    o.isNeg() && !o.isZero() ? "-" + t : t
  );
};
q.toFraction = function (i) {
  var e,
    t,
    n,
    o,
    r,
    s,
    a,
    c,
    u,
    l,
    m,
    d,
    p = this,
    y = p.d,
    f = p.constructor;
  if (!y) return new f(p);
  if (
    ((u = t = new f(1)),
    (n = c = new f(0)),
    (e = new f(n)),
    (r = e.e = yc(y) - p.e - 1),
    (s = r % se),
    (e.d[0] = tt(10, s < 0 ? se + s : s)),
    i == null)
  )
    i = r > 0 ? e : u;
  else {
    if (((a = new f(i)), !a.isInt() || a.lt(u))) throw Error(On + a);
    i = a.gt(e) ? (r > 0 ? e : u) : a;
  }
  for (
    ue = !1,
      a = new f(ft(y)),
      l = f.precision,
      f.precision = r = y.length * se * 2;
    (m = Le(a, e, 0, 1, 1)), (o = t.plus(m.times(n))), o.cmp(i) != 1;

  )
    (t = n),
      (n = o),
      (o = u),
      (u = c.plus(m.times(o))),
      (c = o),
      (o = e),
      (e = a.minus(m.times(o))),
      (a = o);
  return (
    (o = Le(i.minus(t), n, 0, 1, 1)),
    (c = c.plus(o.times(u))),
    (t = t.plus(o.times(n))),
    (c.s = u.s = p.s),
    (d =
      Le(u, n, r, 1)
        .minus(p)
        .abs()
        .cmp(Le(c, t, r, 1).minus(p).abs()) < 1
        ? [u, n]
        : [c, t]),
    (f.precision = l),
    (ue = !0),
    d
  );
};
q.toHexadecimal = q.toHex = function (i, e) {
  return Ys(this, 16, i, e);
};
q.toNearest = function (i, e) {
  var t = this,
    n = t.constructor;
  if (((t = new n(t)), i == null)) {
    if (!t.d) return t;
    (i = new n(1)), (e = n.rounding);
  } else {
    if (((i = new n(i)), e === void 0 ? (e = n.rounding) : Nt(e, 0, 8), !t.d))
      return i.s ? t : i;
    if (!i.d) return i.s && (i.s = t.s), i;
  }
  return (
    i.d[0]
      ? ((ue = !1), (t = Le(t, i, 0, e, 1).times(i)), (ue = !0), ie(t))
      : ((i.s = t.s), (t = i)),
    t
  );
};
q.toNumber = function () {
  return +this;
};
q.toOctal = function (i, e) {
  return Ys(this, 8, i, e);
};
q.toPower = q.pow = function (i) {
  var e,
    t,
    n,
    o,
    r,
    s,
    a = this,
    c = a.constructor,
    u = +(i = new c(i));
  if (!a.d || !i.d || !a.d[0] || !i.d[0]) return new c(tt(+a, u));
  if (((a = new c(a)), a.eq(1))) return a;
  if (((n = c.precision), (r = c.rounding), i.eq(1))) return ie(a, n, r);
  if (((e = kt(i.e / se)), e >= i.d.length - 1 && (t = u < 0 ? -u : u) <= Gm))
    return (o = bc(c, a, t, n)), i.s < 0 ? new c(1).div(o) : ie(o, n, r);
  if (((s = a.s), s < 0)) {
    if (e < i.d.length - 1) return new c(NaN);
    if (
      ((i.d[e] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
    )
      return (a.s = s), a;
  }
  return (
    (t = tt(+a, u)),
    (e =
      t == 0 || !isFinite(t)
        ? kt(u * (Math.log("0." + ft(a.d)) / Math.LN10 + a.e + 1))
        : new c(t + "").e),
    e > c.maxE + 1 || e < c.minE - 1
      ? new c(e > 0 ? s / 0 : 0)
      : ((ue = !1),
        (c.rounding = a.s = 1),
        (t = Math.min(12, (e + "").length)),
        (o = zs(i.times(Ln(a, n + t)), n)),
        o.d &&
          ((o = ie(o, n + 5, 1)),
          ro(o.d, n, r) &&
            ((e = n + 10),
            (o = ie(zs(i.times(Ln(a, e + t)), e), e + 5, 1)),
            +ft(o.d).slice(n + 1, n + 15) + 1 == 1e14 &&
              (o = ie(o, n + 1, 0)))),
        (o.s = s),
        (ue = !0),
        (c.rounding = r),
        ie(o, n, r))
  );
};
q.toPrecision = function (i, e) {
  var t,
    n = this,
    o = n.constructor;
  return (
    i === void 0
      ? (t = un(n, n.e <= o.toExpNeg || n.e >= o.toExpPos))
      : (Nt(i, 1, Mn),
        e === void 0 ? (e = o.rounding) : Nt(e, 0, 8),
        (n = ie(new o(n), i, e)),
        (t = un(n, i <= n.e || n.e <= o.toExpNeg, i))),
    n.isNeg() && !n.isZero() ? "-" + t : t
  );
};
q.toSignificantDigits = q.toSD = function (i, e) {
  var t = this,
    n = t.constructor;
  return (
    i === void 0
      ? ((i = n.precision), (e = n.rounding))
      : (Nt(i, 1, Mn), e === void 0 ? (e = n.rounding) : Nt(e, 0, 8)),
    ie(new n(t), i, e)
  );
};
q.toString = function () {
  var i = this,
    e = i.constructor,
    t = un(i, i.e <= e.toExpNeg || i.e >= e.toExpPos);
  return i.isNeg() && !i.isZero() ? "-" + t : t;
};
q.truncated = q.trunc = function () {
  return ie(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function () {
  var i = this,
    e = i.constructor,
    t = un(i, i.e <= e.toExpNeg || i.e >= e.toExpPos);
  return i.isNeg() ? "-" + t : t;
};
function ft(i) {
  var e,
    t,
    n,
    o = i.length - 1,
    r = "",
    s = i[0];
  if (o > 0) {
    for (r += s, e = 1; e < o; e++)
      (n = i[e] + ""), (t = se - n.length), t && (r += Rn(t)), (r += n);
    (s = i[e]), (n = s + ""), (t = se - n.length), t && (r += Rn(t));
  } else if (s === 0) return "0";
  for (; s % 10 === 0; ) s /= 10;
  return r + s;
}
function Nt(i, e, t) {
  if (i !== ~~i || i < e || i > t) throw Error(On + i);
}
function ro(i, e, t, n) {
  var o, r, s, a;
  for (r = i[0]; r >= 10; r /= 10) --e;
  return (
    --e < 0 ? ((e += se), (o = 0)) : ((o = Math.ceil((e + 1) / se)), (e %= se)),
    (r = tt(10, se - e)),
    (a = i[o] % r | 0),
    n == null
      ? e < 3
        ? (e == 0 ? (a = (a / 100) | 0) : e == 1 && (a = (a / 10) | 0),
          (s =
            (t < 4 && a == 99999) ||
            (t > 3 && a == 49999) ||
            a == 5e4 ||
            a == 0))
        : (s =
            (((t < 4 && a + 1 == r) || (t > 3 && a + 1 == r / 2)) &&
              ((i[o + 1] / r / 100) | 0) == tt(10, e - 2) - 1) ||
            ((a == r / 2 || a == 0) && ((i[o + 1] / r / 100) | 0) == 0))
      : e < 4
        ? (e == 0
            ? (a = (a / 1e3) | 0)
            : e == 1
              ? (a = (a / 100) | 0)
              : e == 2 && (a = (a / 10) | 0),
          (s = ((n || t < 4) && a == 9999) || (!n && t > 3 && a == 4999)))
        : (s =
            (((n || t < 4) && a + 1 == r) || (!n && t > 3 && a + 1 == r / 2)) &&
            ((i[o + 1] / r / 1e3) | 0) == tt(10, e - 3) - 1),
    s
  );
}
function ur(i, e, t) {
  for (var n, o = [0], r, s = 0, a = i.length; s < a; ) {
    for (r = o.length; r--; ) o[r] *= e;
    for (o[0] += Us.indexOf(i.charAt(s++)), n = 0; n < o.length; n++)
      o[n] > t - 1 &&
        (o[n + 1] === void 0 && (o[n + 1] = 0),
        (o[n + 1] += (o[n] / t) | 0),
        (o[n] %= t));
  }
  return o.reverse();
}
function zm(i, e) {
  var t, n, o;
  if (e.isZero()) return e;
  (n = e.d.length),
    n < 32
      ? ((t = Math.ceil(n / 3)), (o = (1 / fr(4, t)).toString()))
      : ((t = 16), (o = "2.3283064365386962890625e-10")),
    (i.precision += t),
    (e = pi(i, 1, e.times(o), new i(1)));
  for (var r = t; r--; ) {
    var s = e.times(e);
    e = s.times(s).minus(s).times(8).plus(1);
  }
  return (i.precision -= t), e;
}
var Le = (function () {
  function i(n, o, r) {
    var s,
      a = 0,
      c = n.length;
    for (n = n.slice(); c--; )
      (s = n[c] * o + a), (n[c] = s % r | 0), (a = (s / r) | 0);
    return a && n.unshift(a), n;
  }
  function e(n, o, r, s) {
    var a, c;
    if (r != s) c = r > s ? 1 : -1;
    else
      for (a = c = 0; a < r; a++)
        if (n[a] != o[a]) {
          c = n[a] > o[a] ? 1 : -1;
          break;
        }
    return c;
  }
  function t(n, o, r, s) {
    for (var a = 0; r--; )
      (n[r] -= a), (a = n[r] < o[r] ? 1 : 0), (n[r] = a * s + n[r] - o[r]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, o, r, s, a, c) {
    var u,
      l,
      m,
      d,
      p,
      y,
      f,
      b,
      g,
      w,
      P,
      T,
      B,
      h,
      x,
      S,
      K,
      I,
      C,
      L,
      O = n.constructor,
      F = n.s == o.s ? 1 : -1,
      W = n.d,
      D = o.d;
    if (!W || !W[0] || !D || !D[0])
      return new O(
        !n.s || !o.s || (W ? D && W[0] == D[0] : !D)
          ? NaN
          : (W && W[0] == 0) || !D
            ? F * 0
            : F / 0,
      );
    for (
      c
        ? ((p = 1), (l = n.e - o.e))
        : ((c = Jt), (p = se), (l = kt(n.e / p) - kt(o.e / p))),
        C = D.length,
        K = W.length,
        g = new O(F),
        w = g.d = [],
        m = 0;
      D[m] == (W[m] || 0);
      m++
    );
    if (
      (D[m] > (W[m] || 0) && l--,
      r == null
        ? ((h = r = O.precision), (s = O.rounding))
        : a
          ? (h = r + (n.e - o.e) + 1)
          : (h = r),
      h < 0)
    )
      w.push(1), (y = !0);
    else {
      if (((h = (h / p + 2) | 0), (m = 0), C == 1)) {
        for (d = 0, D = D[0], h++; (m < K || d) && h--; m++)
          (x = d * c + (W[m] || 0)), (w[m] = (x / D) | 0), (d = x % D | 0);
        y = d || m < K;
      } else {
        for (
          d = (c / (D[0] + 1)) | 0,
            d > 1 &&
              ((D = i(D, d, c)),
              (W = i(W, d, c)),
              (C = D.length),
              (K = W.length)),
            S = C,
            P = W.slice(0, C),
            T = P.length;
          T < C;

        )
          P[T++] = 0;
        (L = D.slice()), L.unshift(0), (I = D[0]), D[1] >= c / 2 && ++I;
        do
          (d = 0),
            (u = e(D, P, C, T)),
            u < 0
              ? ((B = P[0]),
                C != T && (B = B * c + (P[1] || 0)),
                (d = (B / I) | 0),
                d > 1
                  ? (d >= c && (d = c - 1),
                    (f = i(D, d, c)),
                    (b = f.length),
                    (T = P.length),
                    (u = e(f, P, b, T)),
                    u == 1 && (d--, t(f, C < b ? L : D, b, c)))
                  : (d == 0 && (u = d = 1), (f = D.slice())),
                (b = f.length),
                b < T && f.unshift(0),
                t(P, f, T, c),
                u == -1 &&
                  ((T = P.length),
                  (u = e(D, P, C, T)),
                  u < 1 && (d++, t(P, C < T ? L : D, T, c))),
                (T = P.length))
              : u === 0 && (d++, (P = [0])),
            (w[m++] = d),
            u && P[0] ? (P[T++] = W[S] || 0) : ((P = [W[S]]), (T = 1));
        while ((S++ < K || P[0] !== void 0) && h--);
        y = P[0] !== void 0;
      }
      w[0] || w.shift();
    }
    if (p == 1) (g.e = l), (lc = y);
    else {
      for (m = 1, d = w[0]; d >= 10; d /= 10) m++;
      (g.e = m + l * p - 1), ie(g, a ? r + g.e + 1 : r, s, y);
    }
    return g;
  };
})();
function ie(i, e, t, n) {
  var o,
    r,
    s,
    a,
    c,
    u,
    l,
    m,
    d,
    p = i.constructor;
  e: if (e != null) {
    if (((m = i.d), !m)) return i;
    for (o = 1, a = m[0]; a >= 10; a /= 10) o++;
    if (((r = e - o), r < 0))
      (r += se),
        (s = e),
        (l = m[(d = 0)]),
        (c = (l / tt(10, o - s - 1)) % 10 | 0);
    else if (((d = Math.ceil((r + 1) / se)), (a = m.length), d >= a))
      if (n) {
        for (; a++ <= d; ) m.push(0);
        (l = c = 0), (o = 1), (r %= se), (s = r - se + 1);
      } else break e;
    else {
      for (l = a = m[d], o = 1; a >= 10; a /= 10) o++;
      (r %= se),
        (s = r - se + o),
        (c = s < 0 ? 0 : (l / tt(10, o - s - 1)) % 10 | 0);
    }
    if (
      ((n =
        n ||
        e < 0 ||
        m[d + 1] !== void 0 ||
        (s < 0 ? l : l % tt(10, o - s - 1))),
      (u =
        t < 4
          ? (c || n) && (t == 0 || t == (i.s < 0 ? 3 : 2))
          : c > 5 ||
            (c == 5 &&
              (t == 4 ||
                n ||
                (t == 6 &&
                  (r > 0 ? (s > 0 ? l / tt(10, o - s) : 0) : m[d - 1]) % 10 &
                    1) ||
                t == (i.s < 0 ? 8 : 7)))),
      e < 1 || !m[0])
    )
      return (
        (m.length = 0),
        u
          ? ((e -= i.e + 1),
            (m[0] = tt(10, (se - (e % se)) % se)),
            (i.e = -e || 0))
          : (m[0] = i.e = 0),
        i
      );
    if (
      (r == 0
        ? ((m.length = d), (a = 1), d--)
        : ((m.length = d + 1),
          (a = tt(10, se - r)),
          (m[d] = s > 0 ? ((l / tt(10, o - s)) % tt(10, s) | 0) * a : 0)),
      u)
    )
      for (;;)
        if (d == 0) {
          for (r = 1, s = m[0]; s >= 10; s /= 10) r++;
          for (s = m[0] += a, a = 1; s >= 10; s /= 10) a++;
          r != a && (i.e++, m[0] == Jt && (m[0] = 1));
          break;
        } else {
          if (((m[d] += a), m[d] != Jt)) break;
          (m[d--] = 0), (a = 1);
        }
    for (r = m.length; m[--r] === 0; ) m.pop();
  }
  return (
    ue &&
      (i.e > p.maxE
        ? ((i.d = null), (i.e = NaN))
        : i.e < p.minE && ((i.e = 0), (i.d = [0]))),
    i
  );
}
function un(i, e, t) {
  if (!i.isFinite()) return Ac(i);
  var n,
    o = i.e,
    r = ft(i.d),
    s = r.length;
  return (
    e
      ? (t && (n = t - s) > 0
          ? (r = r.charAt(0) + "." + r.slice(1) + Rn(n))
          : s > 1 && (r = r.charAt(0) + "." + r.slice(1)),
        (r = r + (i.e < 0 ? "e" : "e+") + i.e))
      : o < 0
        ? ((r = "0." + Rn(-o - 1) + r), t && (n = t - s) > 0 && (r += Rn(n)))
        : o >= s
          ? ((r += Rn(o + 1 - s)),
            t && (n = t - o - 1) > 0 && (r = r + "." + Rn(n)))
          : ((n = o + 1) < s && (r = r.slice(0, n) + "." + r.slice(n)),
            t && (n = t - s) > 0 && (o + 1 === s && (r += "."), (r += Rn(n)))),
    r
  );
}
function pr(i, e) {
  var t = i[0];
  for (e *= se; t >= 10; t /= 10) e++;
  return e;
}
function mr(i, e, t) {
  if (e > Xm) throw ((ue = !0), t && (i.precision = t), Error(mc));
  return ie(new i(cr), e, 1, !0);
}
function $t(i, e, t) {
  if (e > Xs) throw Error(mc);
  return ie(new i(lr), e, t, !0);
}
function yc(i) {
  var e = i.length - 1,
    t = e * se + 1;
  if (((e = i[e]), e)) {
    for (; e % 10 == 0; e /= 10) t--;
    for (e = i[0]; e >= 10; e /= 10) t++;
  }
  return t;
}
function Rn(i) {
  for (var e = ""; i--; ) e += "0";
  return e;
}
function bc(i, e, t, n) {
  var o,
    r = new i(1),
    s = Math.ceil(n / se + 4);
  for (ue = !1; ; ) {
    if (
      (t % 2 && ((r = r.times(e)), uc(r.d, s) && (o = !0)),
      (t = kt(t / 2)),
      t === 0)
    ) {
      (t = r.d.length - 1), o && r.d[t] === 0 && ++r.d[t];
      break;
    }
    (e = e.times(e)), uc(e.d, s);
  }
  return (ue = !0), r;
}
function ac(i) {
  return i.d[i.d.length - 1] & 1;
}
function gc(i, e, t) {
  for (var n, o = new i(e[0]), r = 0; ++r < e.length; )
    if (((n = new i(e[r])), n.s)) o[t](n) && (o = n);
    else {
      o = n;
      break;
    }
  return o;
}
function zs(i, e) {
  var t,
    n,
    o,
    r,
    s,
    a,
    c,
    u = 0,
    l = 0,
    m = 0,
    d = i.constructor,
    p = d.rounding,
    y = d.precision;
  if (!i.d || !i.d[0] || i.e > 17)
    return new d(
      i.d
        ? i.d[0]
          ? i.s < 0
            ? 0
            : 1 / 0
          : 1
        : i.s
          ? i.s < 0
            ? 0
            : i
          : 0 / 0,
    );
  for (
    e == null ? ((ue = !1), (c = y)) : (c = e), a = new d(0.03125);
    i.e > -2;

  )
    (i = i.times(a)), (m += 5);
  for (
    n = ((Math.log(tt(2, m)) / Math.LN10) * 2 + 5) | 0,
      c += n,
      t = r = s = new d(1),
      d.precision = c;
    ;

  ) {
    if (
      ((r = ie(r.times(i), c, 1)),
      (t = t.times(++l)),
      (a = s.plus(Le(r, t, c, 1))),
      ft(a.d).slice(0, c) === ft(s.d).slice(0, c))
    ) {
      for (o = m; o--; ) s = ie(s.times(s), c, 1);
      if (e == null)
        if (u < 3 && ro(s.d, c - n, p, u))
          (d.precision = c += 10), (t = r = a = new d(1)), (l = 0), u++;
        else return ie(s, (d.precision = y), p, (ue = !0));
      else return (d.precision = y), s;
    }
    s = a;
  }
}
function Ln(i, e) {
  var t,
    n,
    o,
    r,
    s,
    a,
    c,
    u,
    l,
    m,
    d,
    p = 1,
    y = 10,
    f = i,
    b = f.d,
    g = f.constructor,
    w = g.rounding,
    P = g.precision;
  if (f.s < 0 || !b || !b[0] || (!f.e && b[0] == 1 && b.length == 1))
    return new g(b && !b[0] ? -1 / 0 : f.s != 1 ? NaN : b ? 0 : f);
  if (
    (e == null ? ((ue = !1), (l = P)) : (l = e),
    (g.precision = l += y),
    (t = ft(b)),
    (n = t.charAt(0)),
    Math.abs((r = f.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && t.charAt(1) > 3); )
      (f = f.times(i)), (t = ft(f.d)), (n = t.charAt(0)), p++;
    (r = f.e),
      n > 1 ? ((f = new g("0." + t)), r++) : (f = new g(n + "." + t.slice(1)));
  } else
    return (
      (u = mr(g, l + 2, P).times(r + "")),
      (f = Ln(new g(n + "." + t.slice(1)), l - y).plus(u)),
      (g.precision = P),
      e == null ? ie(f, P, w, (ue = !0)) : f
    );
  for (
    m = f,
      c = s = f = Le(f.minus(1), f.plus(1), l, 1),
      d = ie(f.times(f), l, 1),
      o = 3;
    ;

  ) {
    if (
      ((s = ie(s.times(d), l, 1)),
      (u = c.plus(Le(s, new g(o), l, 1))),
      ft(u.d).slice(0, l) === ft(c.d).slice(0, l))
    )
      if (
        ((c = c.times(2)),
        r !== 0 && (c = c.plus(mr(g, l + 2, P).times(r + ""))),
        (c = Le(c, new g(p), l, 1)),
        e == null)
      )
        if (ro(c.d, l - y, w, a))
          (g.precision = l += y),
            (u = s = f = Le(m.minus(1), m.plus(1), l, 1)),
            (d = ie(f.times(f), l, 1)),
            (o = a = 1);
        else return ie(c, (g.precision = P), w, (ue = !0));
      else return (g.precision = P), c;
    (c = u), (o += 2);
  }
}
function Ac(i) {
  return String((i.s * i.s) / 0);
}
function Qs(i, e) {
  var t, n, o;
  for (
    (t = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
      (n = e.search(/e/i)) > 0
        ? (t < 0 && (t = n), (t += +e.slice(n + 1)), (e = e.substring(0, n)))
        : t < 0 && (t = e.length),
      n = 0;
    e.charCodeAt(n) === 48;
    n++
  );
  for (o = e.length; e.charCodeAt(o - 1) === 48; --o);
  if (((e = e.slice(n, o)), e)) {
    if (
      ((o -= n),
      (i.e = t = t - n - 1),
      (i.d = []),
      (n = (t + 1) % se),
      t < 0 && (n += se),
      n < o)
    ) {
      for (n && i.d.push(+e.slice(0, n)), o -= se; n < o; )
        i.d.push(+e.slice(n, (n += se)));
      (e = e.slice(n)), (n = se - e.length);
    } else n -= o;
    for (; n--; ) e += "0";
    i.d.push(+e),
      ue &&
        (i.e > i.constructor.maxE
          ? ((i.d = null), (i.e = NaN))
          : i.e < i.constructor.minE && ((i.e = 0), (i.d = [0])));
  } else (i.e = 0), (i.d = [0]);
  return i;
}
function Qm(i, e) {
  var t, n, o, r, s, a, c, u, l;
  if (e.indexOf("_") > -1) {
    if (((e = e.replace(/(\d)_(?=\d)/g, "$1")), fc.test(e))) return Qs(i, e);
  } else if (e === "Infinity" || e === "NaN")
    return +e || (i.s = NaN), (i.e = NaN), (i.d = null), i;
  if (qm.test(e)) (t = 16), (e = e.toLowerCase());
  else if (Wm.test(e)) t = 2;
  else if (Um.test(e)) t = 8;
  else throw Error(On + e);
  for (
    r = e.search(/p/i),
      r > 0
        ? ((c = +e.slice(r + 1)), (e = e.substring(2, r)))
        : (e = e.slice(2)),
      r = e.indexOf("."),
      s = r >= 0,
      n = i.constructor,
      s &&
        ((e = e.replace(".", "")),
        (a = e.length),
        (r = a - r),
        (o = bc(n, new n(t), r, r * 2))),
      u = ur(e, t, Jt),
      l = u.length - 1,
      r = l;
    u[r] === 0;
    --r
  )
    u.pop();
  return r < 0
    ? new n(i.s * 0)
    : ((i.e = pr(u, l)),
      (i.d = u),
      (ue = !1),
      s && (i = Le(i, o, a * 4)),
      c && (i = i.times(Math.abs(c) < 54 ? tt(2, c) : so.pow(2, c))),
      (ue = !0),
      i);
}
function Ym(i, e) {
  var t,
    n = e.d.length;
  if (n < 3) return e.isZero() ? e : pi(i, 2, e, e);
  (t = 1.4 * Math.sqrt(n)),
    (t = t > 16 ? 16 : t | 0),
    (e = e.times(1 / fr(5, t))),
    (e = pi(i, 2, e, e));
  for (var o, r = new i(5), s = new i(16), a = new i(20); t--; )
    (o = e.times(e)), (e = e.times(r.plus(o.times(s.times(o).minus(a)))));
  return e;
}
function pi(i, e, t, n, o) {
  var r,
    s,
    a,
    c,
    u = 1,
    l = i.precision,
    m = Math.ceil(l / se);
  for (ue = !1, c = t.times(t), a = new i(n); ; ) {
    if (
      ((s = Le(a.times(c), new i(e++ * e++), l, 1)),
      (a = o ? n.plus(s) : n.minus(s)),
      (n = Le(s.times(c), new i(e++ * e++), l, 1)),
      (s = a.plus(n)),
      s.d[m] !== void 0)
    ) {
      for (r = m; s.d[r] === a.d[r] && r--; );
      if (r == -1) break;
    }
    (r = a), (a = n), (n = s), (s = r), u++;
  }
  return (ue = !0), (s.d.length = m + 1), s;
}
function fr(i, e) {
  for (var t = i; --e; ) t *= i;
  return t;
}
function wc(i, e) {
  var t,
    n = e.s < 0,
    o = $t(i, i.precision, 1),
    r = o.times(0.5);
  if (((e = e.abs()), e.lte(r))) return (wn = n ? 4 : 1), e;
  if (((t = e.divToInt(o)), t.isZero())) wn = n ? 3 : 2;
  else {
    if (((e = e.minus(t.times(o))), e.lte(r)))
      return (wn = ac(t) ? (n ? 2 : 3) : n ? 4 : 1), e;
    wn = ac(t) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return e.minus(o).abs();
}
function Ys(i, e, t, n) {
  var o,
    r,
    s,
    a,
    c,
    u,
    l,
    m,
    d,
    p = i.constructor,
    y = t !== void 0;
  if (
    (y
      ? (Nt(t, 1, Mn), n === void 0 ? (n = p.rounding) : Nt(n, 0, 8))
      : ((t = p.precision), (n = p.rounding)),
    !i.isFinite())
  )
    l = Ac(i);
  else {
    for (
      l = un(i),
        s = l.indexOf("."),
        y
          ? ((o = 2), e == 16 ? (t = t * 4 - 3) : e == 8 && (t = t * 3 - 2))
          : (o = e),
        s >= 0 &&
          ((l = l.replace(".", "")),
          (d = new p(1)),
          (d.e = l.length - s),
          (d.d = ur(un(d), 10, o)),
          (d.e = d.d.length)),
        m = ur(l, 10, o),
        r = c = m.length;
      m[--c] == 0;

    )
      m.pop();
    if (!m[0]) l = y ? "0p+0" : "0";
    else {
      if (
        (s < 0
          ? r--
          : ((i = new p(i)),
            (i.d = m),
            (i.e = r),
            (i = Le(i, d, t, n, 0, o)),
            (m = i.d),
            (r = i.e),
            (u = lc)),
        (s = m[t]),
        (a = o / 2),
        (u = u || m[t + 1] !== void 0),
        (u =
          n < 4
            ? (s !== void 0 || u) && (n === 0 || n === (i.s < 0 ? 3 : 2))
            : s > a ||
              (s === a &&
                (n === 4 ||
                  u ||
                  (n === 6 && m[t - 1] & 1) ||
                  n === (i.s < 0 ? 8 : 7)))),
        (m.length = t),
        u)
      )
        for (; ++m[--t] > o - 1; ) (m[t] = 0), t || (++r, m.unshift(1));
      for (c = m.length; !m[c - 1]; --c);
      for (s = 0, l = ""; s < c; s++) l += Us.charAt(m[s]);
      if (y) {
        if (c > 1)
          if (e == 16 || e == 8) {
            for (s = e == 16 ? 4 : 3, --c; c % s; c++) l += "0";
            for (m = ur(l, o, e), c = m.length; !m[c - 1]; --c);
            for (s = 1, l = "1."; s < c; s++) l += Us.charAt(m[s]);
          } else l = l.charAt(0) + "." + l.slice(1);
        l = l + (r < 0 ? "p" : "p+") + r;
      } else if (r < 0) {
        for (; ++r; ) l = "0" + l;
        l = "0." + l;
      } else if (++r > c) for (r -= c; r--; ) l += "0";
      else r < c && (l = l.slice(0, r) + "." + l.slice(r));
    }
    l = (e == 16 ? "0x" : e == 2 ? "0b" : e == 8 ? "0o" : "") + l;
  }
  return i.s < 0 ? "-" + l : l;
}
function uc(i, e) {
  if (i.length > e) return (i.length = e), !0;
}
function Hm(i) {
  return new this(i).abs();
}
function jm(i) {
  return new this(i).acos();
}
function Zm(i) {
  return new this(i).acosh();
}
function $m(i, e) {
  return new this(i).plus(e);
}
function Jm(i) {
  return new this(i).asin();
}
function ed(i) {
  return new this(i).asinh();
}
function td(i) {
  return new this(i).atan();
}
function nd(i) {
  return new this(i).atanh();
}
function id(i, e) {
  (i = new this(i)), (e = new this(e));
  var t,
    n = this.precision,
    o = this.rounding,
    r = n + 4;
  return (
    !i.s || !e.s
      ? (t = new this(NaN))
      : !i.d && !e.d
        ? ((t = $t(this, r, 1).times(e.s > 0 ? 0.25 : 0.75)), (t.s = i.s))
        : !e.d || i.isZero()
          ? ((t = e.s < 0 ? $t(this, n, o) : new this(0)), (t.s = i.s))
          : !i.d || e.isZero()
            ? ((t = $t(this, r, 1).times(0.5)), (t.s = i.s))
            : e.s < 0
              ? ((this.precision = r),
                (this.rounding = 1),
                (t = this.atan(Le(i, e, r, 1))),
                (e = $t(this, r, 1)),
                (this.precision = n),
                (this.rounding = o),
                (t = i.s < 0 ? t.minus(e) : t.plus(e)))
              : (t = this.atan(Le(i, e, r, 1))),
    t
  );
}
function od(i) {
  return new this(i).cbrt();
}
function rd(i) {
  return ie((i = new this(i)), i.e + 1, 2);
}
function sd(i, e, t) {
  return new this(i).clamp(e, t);
}
function ad(i) {
  if (!i || typeof i != "object") throw Error(dr + "Object expected");
  var e,
    t,
    n,
    o = i.defaults === !0,
    r = [
      "precision",
      1,
      Mn,
      "rounding",
      0,
      8,
      "toExpNeg",
      -di,
      0,
      "toExpPos",
      0,
      di,
      "maxE",
      0,
      di,
      "minE",
      -di,
      0,
      "modulo",
      0,
      9,
    ];
  for (e = 0; e < r.length; e += 3)
    if (((t = r[e]), o && (this[t] = Gs[t]), (n = i[t]) !== void 0))
      if (kt(n) === n && n >= r[e + 1] && n <= r[e + 2]) this[t] = n;
      else throw Error(On + t + ": " + n);
  if (((t = "crypto"), o && (this[t] = Gs[t]), (n = i[t]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto < "u" &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[t] = !0;
        else throw Error(dc);
      else this[t] = !1;
    else throw Error(On + t + ": " + n);
  return this;
}
function ud(i) {
  return new this(i).cos();
}
function cd(i) {
  return new this(i).cosh();
}
function Pc(i) {
  var e, t, n;
  function o(r) {
    var s,
      a,
      c,
      u = this;
    if (!(u instanceof o)) return new o(r);
    if (((u.constructor = o), cc(r))) {
      (u.s = r.s),
        ue
          ? !r.d || r.e > o.maxE
            ? ((u.e = NaN), (u.d = null))
            : r.e < o.minE
              ? ((u.e = 0), (u.d = [0]))
              : ((u.e = r.e), (u.d = r.d.slice()))
          : ((u.e = r.e), (u.d = r.d ? r.d.slice() : r.d));
      return;
    }
    if (((c = typeof r), c === "number")) {
      if (r === 0) {
        (u.s = 1 / r < 0 ? -1 : 1), (u.e = 0), (u.d = [0]);
        return;
      }
      if ((r < 0 ? ((r = -r), (u.s = -1)) : (u.s = 1), r === ~~r && r < 1e7)) {
        for (s = 0, a = r; a >= 10; a /= 10) s++;
        ue
          ? s > o.maxE
            ? ((u.e = NaN), (u.d = null))
            : s < o.minE
              ? ((u.e = 0), (u.d = [0]))
              : ((u.e = s), (u.d = [r]))
          : ((u.e = s), (u.d = [r]));
        return;
      } else if (r * 0 !== 0) {
        r || (u.s = NaN), (u.e = NaN), (u.d = null);
        return;
      }
      return Qs(u, r.toString());
    } else if (c !== "string") throw Error(On + r);
    return (
      (a = r.charCodeAt(0)) === 45
        ? ((r = r.slice(1)), (u.s = -1))
        : (a === 43 && (r = r.slice(1)), (u.s = 1)),
      fc.test(r) ? Qs(u, r) : Qm(u, r)
    );
  }
  if (
    ((o.prototype = q),
    (o.ROUND_UP = 0),
    (o.ROUND_DOWN = 1),
    (o.ROUND_CEIL = 2),
    (o.ROUND_FLOOR = 3),
    (o.ROUND_HALF_UP = 4),
    (o.ROUND_HALF_DOWN = 5),
    (o.ROUND_HALF_EVEN = 6),
    (o.ROUND_HALF_CEIL = 7),
    (o.ROUND_HALF_FLOOR = 8),
    (o.EUCLID = 9),
    (o.config = o.set = ad),
    (o.clone = Pc),
    (o.isDecimal = cc),
    (o.abs = Hm),
    (o.acos = jm),
    (o.acosh = Zm),
    (o.add = $m),
    (o.asin = Jm),
    (o.asinh = ed),
    (o.atan = td),
    (o.atanh = nd),
    (o.atan2 = id),
    (o.cbrt = od),
    (o.ceil = rd),
    (o.clamp = sd),
    (o.cos = ud),
    (o.cosh = cd),
    (o.div = ld),
    (o.exp = md),
    (o.floor = dd),
    (o.hypot = pd),
    (o.ln = fd),
    (o.log = yd),
    (o.log10 = gd),
    (o.log2 = bd),
    (o.max = Ad),
    (o.min = wd),
    (o.mod = Pd),
    (o.mul = kd),
    (o.pow = hd),
    (o.random = Td),
    (o.round = Id),
    (o.sign = Bd),
    (o.sin = xd),
    (o.sinh = Sd),
    (o.sqrt = Kd),
    (o.sub = Cd),
    (o.sum = Rd),
    (o.tan = Ld),
    (o.tanh = Od),
    (o.trunc = Md),
    i === void 0 && (i = {}),
    i && i.defaults !== !0)
  )
    for (
      n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ],
        e = 0;
      e < n.length;

    )
      i.hasOwnProperty((t = n[e++])) || (i[t] = this[t]);
  return o.config(i), o;
}
function ld(i, e) {
  return new this(i).div(e);
}
function md(i) {
  return new this(i).exp();
}
function dd(i) {
  return ie((i = new this(i)), i.e + 1, 3);
}
function pd() {
  var i,
    e,
    t = new this(0);
  for (ue = !1, i = 0; i < arguments.length; )
    if (((e = new this(arguments[i++])), e.d)) t.d && (t = t.plus(e.times(e)));
    else {
      if (e.s) return (ue = !0), new this(1 / 0);
      t = e;
    }
  return (ue = !0), t.sqrt();
}
function cc(i) {
  return i instanceof so || (i && i.toStringTag === pc) || !1;
}
function fd(i) {
  return new this(i).ln();
}
function yd(i, e) {
  return new this(i).log(e);
}
function bd(i) {
  return new this(i).log(2);
}
function gd(i) {
  return new this(i).log(10);
}
function Ad() {
  return gc(this, arguments, "lt");
}
function wd() {
  return gc(this, arguments, "gt");
}
function Pd(i, e) {
  return new this(i).mod(e);
}
function kd(i, e) {
  return new this(i).mul(e);
}
function hd(i, e) {
  return new this(i).pow(e);
}
function Td(i) {
  var e,
    t,
    n,
    o,
    r = 0,
    s = new this(1),
    a = [];
  if (
    (i === void 0 ? (i = this.precision) : Nt(i, 1, Mn),
    (n = Math.ceil(i / se)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (e = crypto.getRandomValues(new Uint32Array(n)); r < n; )
        (o = e[r]),
          o >= 429e7
            ? (e[r] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (a[r++] = o % 1e7);
    else if (crypto.randomBytes) {
      for (e = crypto.randomBytes((n *= 4)); r < n; )
        (o =
          e[r] + (e[r + 1] << 8) + (e[r + 2] << 16) + ((e[r + 3] & 127) << 24)),
          o >= 214e7
            ? crypto.randomBytes(4).copy(e, r)
            : (a.push(o % 1e7), (r += 4));
      r = n / 4;
    } else throw Error(dc);
  else for (; r < n; ) a[r++] = (Math.random() * 1e7) | 0;
  for (
    n = a[--r],
      i %= se,
      n && i && ((o = tt(10, se - i)), (a[r] = ((n / o) | 0) * o));
    a[r] === 0;
    r--
  )
    a.pop();
  if (r < 0) (t = 0), (a = [0]);
  else {
    for (t = -1; a[0] === 0; t -= se) a.shift();
    for (n = 1, o = a[0]; o >= 10; o /= 10) n++;
    n < se && (t -= se - n);
  }
  return (s.e = t), (s.d = a), s;
}
function Id(i) {
  return ie((i = new this(i)), i.e + 1, this.rounding);
}
function Bd(i) {
  return (i = new this(i)), i.d ? (i.d[0] ? i.s : 0 * i.s) : i.s || NaN;
}
function xd(i) {
  return new this(i).sin();
}
function Sd(i) {
  return new this(i).sinh();
}
function Kd(i) {
  return new this(i).sqrt();
}
function Cd(i, e) {
  return new this(i).sub(e);
}
function Rd() {
  var i = 0,
    e = arguments,
    t = new this(e[i]);
  for (ue = !1; t.s && ++i < e.length; ) t = t.plus(e[i]);
  return (ue = !0), ie(t, this.precision, this.rounding);
}
function Ld(i) {
  return new this(i).tan();
}
function Od(i) {
  return new this(i).tanh();
}
function Md(i) {
  return ie((i = new this(i)), i.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var so = (q.constructor = Pc(Gs));
cr = new so(cr);
lr = new so(lr);
var _ = so;
var Bc = be(require("big.js")),
  Pn = be(require("bn.js"));
var kc = be(require("toformat")),
  Nd = kc.default,
  ao = Nd;
var uo = be(require("big.js")),
  Tc = be(require("bn.js")),
  Ic = be(require("decimal.js-light"));
var fi = be(require("bn.js"));
var yr = ((n) => (
    (n[(n.ROUND_DOWN = 0)] = "ROUND_DOWN"),
    (n[(n.ROUND_HALF_UP = 1)] = "ROUND_HALF_UP"),
    (n[(n.ROUND_UP = 2)] = "ROUND_UP"),
    n
  ))(yr || {}),
  hc = 9007199254740991;
function J(i) {
  let e = ye("Raydium_parseBigNumberish");
  if (i instanceof fi.default) return i;
  if (typeof i == "string") {
    if (i.match(/^-?[0-9]+$/)) return new fi.default(i);
    e.logWithError(`invalid BigNumberish string: ${i}`);
  }
  return typeof i == "number"
    ? (i % 1 && e.logWithError(`BigNumberish number underflow: ${i}`),
      (i >= hc || i <= -hc) &&
        e.logWithError(`BigNumberish number overflow: ${i}`),
      new fi.default(String(i)))
    : typeof i == "bigint"
      ? new fi.default(i.toString())
      : (e.error(`invalid BigNumberish value: ${i}`), new fi.default(0));
}
var br = ye("module/fraction"),
  Hs = ao(uo.default),
  co = ao(Ic.default),
  vd = { [0]: co.ROUND_DOWN, [1]: co.ROUND_HALF_UP, [2]: co.ROUND_UP },
  _d = {
    [0]: uo.default.roundDown,
    [1]: uo.default.roundHalfUp,
    [2]: uo.default.roundUp,
  },
  ce = class {
    constructor(e, t = new Tc.default(1)) {
      (this.numerator = J(e)), (this.denominator = J(t));
    }
    get quotient() {
      return this.numerator.div(this.denominator);
    }
    invert() {
      return new ce(this.denominator, this.numerator);
    }
    add(e) {
      let t = e instanceof ce ? e : new ce(J(e));
      return this.denominator.eq(t.denominator)
        ? new ce(this.numerator.add(t.numerator), this.denominator)
        : new ce(
            this.numerator
              .mul(t.denominator)
              .add(t.numerator.mul(this.denominator)),
            this.denominator.mul(t.denominator),
          );
    }
    sub(e) {
      let t = e instanceof ce ? e : new ce(J(e));
      return this.denominator.eq(t.denominator)
        ? new ce(this.numerator.sub(t.numerator), this.denominator)
        : new ce(
            this.numerator
              .mul(t.denominator)
              .sub(t.numerator.mul(this.denominator)),
            this.denominator.mul(t.denominator),
          );
    }
    mul(e) {
      let t = e instanceof ce ? e : new ce(J(e));
      return new ce(
        this.numerator.mul(t.numerator),
        this.denominator.mul(t.denominator),
      );
    }
    div(e) {
      let t = e instanceof ce ? e : new ce(J(e));
      return new ce(
        this.numerator.mul(t.denominator),
        this.denominator.mul(t.numerator),
      );
    }
    toSignificant(e, t = { groupSeparator: "" }, n = 1) {
      Number.isInteger(e) || br.logWithError(`${e} is not an integer.`),
        e <= 0 && br.logWithError(`${e} is not positive.`),
        co.set({ precision: e + 1, rounding: vd[n] });
      let o = new co(this.numerator.toString())
        .div(this.denominator.toString())
        .toSignificantDigits(e);
      return o.toFormat(o.decimalPlaces(), t);
    }
    toFixed(e, t = { groupSeparator: "" }, n = 1) {
      return (
        Number.isInteger(e) || br.logWithError(`${e} is not an integer.`),
        e < 0 && br.logWithError(`${e} is negative.`),
        (Hs.DP = e),
        (Hs.RM = _d[n] || 1),
        new Hs(this.numerator.toString())
          .div(this.denominator.toString())
          .toFormat(e, t)
      );
    }
    isZero() {
      return this.numerator.isZero();
    }
  };
var Vd = ye("Raydium_amount"),
  gr = ao(Bc.default);
function js(i, e) {
  let t = "0",
    n = "0";
  if (i.includes(".")) {
    let o = i.split(".");
    o.length === 2
      ? (([t, n] = o), (n = n.padEnd(e, "0")))
      : Vd.logWithError(`invalid number string, num: ${i}`);
  } else t = i;
  return [t, n.slice(0, e) || n];
}
var ke = class extends ce {
    constructor(t, n, o = !0, r) {
      let s = new Pn.default(0),
        a = vn.pow(new Pn.default(t.decimals));
      if (o) s = J(n);
      else {
        let c = new Pn.default(0),
          u = new Pn.default(0);
        if (
          typeof n == "string" ||
          typeof n == "number" ||
          typeof n == "bigint"
        ) {
          let [l, m] = js(n.toString(), t.decimals);
          (c = J(l)), (u = J(m));
        }
        (c = c.mul(a)), (s = c.add(u));
      }
      super(s, a);
      (this.logger = ye(r || "TokenAmount")), (this.token = t);
    }
    get raw() {
      return this.numerator;
    }
    isZero() {
      return this.raw.isZero();
    }
    gt(t) {
      return (
        this.token.equals(t.token) ||
          this.logger.logWithError("gt token not equals"),
        this.raw.gt(t.raw)
      );
    }
    lt(t) {
      return (
        this.token.equals(t.token) ||
          this.logger.logWithError("lt token not equals"),
        this.raw.lt(t.raw)
      );
    }
    add(t) {
      return (
        this.token.equals(t.token) ||
          this.logger.logWithError("add token not equals"),
        new ke(this.token, this.raw.add(t.raw))
      );
    }
    subtract(t) {
      return (
        this.token.equals(t.token) ||
          this.logger.logWithError("sub token not equals"),
        new ke(this.token, this.raw.sub(t.raw))
      );
    }
    toSignificant(t = this.token.decimals, n, o = 0) {
      return super.toSignificant(t, n, o);
    }
    toFixed(t = this.token.decimals, n, o = 0) {
      return (
        t > this.token.decimals &&
          this.logger.logWithError("decimals overflow"),
        super.toFixed(t, n, o)
      );
    }
    toExact(t = { groupSeparator: "" }) {
      return (
        (gr.DP = this.token.decimals),
        new gr(this.numerator.toString())
          .div(this.denominator.toString())
          .toFormat(t)
      );
    }
  },
  Nn = class extends ce {
    constructor(t, n, o = !0, r) {
      let s = new Pn.default(0),
        a = vn.pow(new Pn.default(t.decimals));
      if (o) s = J(n);
      else {
        let c = new Pn.default(0),
          u = new Pn.default(0);
        if (
          typeof n == "string" ||
          typeof n == "number" ||
          typeof n == "bigint"
        ) {
          let [l, m] = js(n.toString(), t.decimals);
          (c = J(l)), (u = J(m));
        }
        (c = c.mul(a)), (s = c.add(u));
      }
      super(s, a);
      (this.logger = ye(r || "TokenAmount")), (this.currency = t);
    }
    get raw() {
      return this.numerator;
    }
    isZero() {
      return this.raw.isZero();
    }
    gt(t) {
      return (
        this.currency.equals(t.currency) ||
          this.logger.logWithError("gt currency not equals"),
        this.raw.gt(t.raw)
      );
    }
    lt(t) {
      return (
        this.currency.equals(t.currency) ||
          this.logger.logWithError("lt currency not equals"),
        this.raw.lt(t.raw)
      );
    }
    add(t) {
      return (
        this.currency.equals(t.currency) ||
          this.logger.logWithError("add currency not equals"),
        new Nn(this.currency, this.raw.add(t.raw))
      );
    }
    sub(t) {
      return (
        this.currency.equals(t.currency) ||
          this.logger.logWithError("sub currency not equals"),
        new Nn(this.currency, this.raw.sub(t.raw))
      );
    }
    toSignificant(t = this.currency.decimals, n, o = 0) {
      return super.toSignificant(t, n, o);
    }
    toFixed(t = this.currency.decimals, n, o = 0) {
      return (
        t > this.currency.decimals &&
          this.logger.logWithError("decimals overflow"),
        super.toFixed(t, n, o)
      );
    }
    toExact(t = { groupSeparator: "" }) {
      return (
        (gr.DP = this.currency.decimals),
        new gr(this.numerator.toString())
          .div(this.denominator.toString())
          .toFormat(t)
      );
    }
  };
var xc = require("@solana/web3.js"),
  Zs = require("@solana/spl-token"),
  en = {
    chainId: 101,
    address: xc.PublicKey.default.toBase58(),
    programId: Zs.TOKEN_PROGRAM_ID.toBase58(),
    decimals: 9,
    symbol: "SOL",
    name: "solana",
    logoURI:
      "https://img-v1.raydium.io/icon/So11111111111111111111111111111111111111112.png",
    tags: [],
    priority: 2,
    type: "raydium",
    extensions: { coingeckoId: "solana" },
  },
  nt = {
    chainId: 101,
    address: "So11111111111111111111111111111111111111112",
    programId: Zs.TOKEN_PROGRAM_ID.toBase58(),
    decimals: 9,
    symbol: "WSOL",
    name: "Wrapped SOL",
    logoURI:
      "https://img-v1.raydium.io/icon/So11111111111111111111111111111111111111112.png",
    tags: [],
    priority: 2,
    type: "raydium",
    extensions: { coingeckoId: "solana" },
  };
var hr = require("@solana/web3.js");
var Ce = require("@solana/web3.js"),
  Sc = require("@solana/spl-token");
function A({ pubkey: i, isSigner: e = !1, isWritable: t = !0 }) {
  return { pubkey: i, isWritable: t, isSigner: e };
}
var Ar = [
  A({ pubkey: Sc.TOKEN_PROGRAM_ID, isWritable: !1 }),
  A({ pubkey: Ce.SystemProgram.programId, isWritable: !1 }),
  A({ pubkey: Ce.SYSVAR_RENT_PUBKEY, isWritable: !1 }),
];
function wr({ publicKey: i, transformSol: e }) {
  let t = Pr(i.toString());
  if (t instanceof Ce.PublicKey) return e && t.equals(it) ? $ : t;
  if (e && t.toString() === it.toBase58()) return $;
  if (typeof t == "string") {
    if (t === Ce.PublicKey.default.toBase58()) return Ce.PublicKey.default;
    try {
      return new Ce.PublicKey(t);
    } catch {
      throw new Error("invalid public key");
    }
  }
  throw new Error("invalid public key");
}
function Pr(i) {
  try {
    return new Ce.PublicKey(i);
  } catch {
    return i;
  }
}
var lo = new Ce.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
  tn = new Ce.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
  ot = new Ce.PublicKey("SysvarRent111111111111111111111111111111111"),
  kr = new Ce.PublicKey("SysvarC1ock11111111111111111111111111111111"),
  cn = new Ce.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),
  mo = new Ce.PublicKey("Sysvar1nstructions1111111111111111111111111"),
  po = Ce.SystemProgram.programId,
  Ed = new Ce.PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
  Fd = new Ce.PublicKey("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS"),
  Dd = new Ce.PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),
  Wd = new Ce.PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
  qd = new Ce.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),
  Ud = new Ce.PublicKey("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),
  Gd = new Ce.PublicKey("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"),
  Xd = new Ce.PublicKey("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX"),
  zd = new Ce.PublicKey("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa"),
  Qd = new Ce.PublicKey("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo"),
  Yd = new Ce.PublicKey("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"),
  $ = new Ce.PublicKey("So11111111111111111111111111111111111111112"),
  it = Ce.PublicKey.default;
function pt(i) {
  return wr({ publicKey: i, transformSol: !0 });
}
var $s = class {
    constructor({
      mint: e,
      decimals: t,
      symbol: n,
      name: o,
      skipMint: r = !1,
      isToken2022: s = !1,
    }) {
      if (e === it.toBase58() || (e instanceof hr.PublicKey && it.equals(e))) {
        (this.decimals = nt.decimals),
          (this.symbol = nt.symbol),
          (this.name = nt.name),
          (this.mint = new hr.PublicKey(nt.address)),
          (this.isToken2022 = !1);
        return;
      }
      (this.decimals = t),
        (this.symbol = n || e.toString().substring(0, 6)),
        (this.name = o || e.toString().substring(0, 6)),
        (this.mint = r ? hr.PublicKey.default : wr({ publicKey: e })),
        (this.isToken2022 = s);
    }
    equals(e) {
      return this === e ? !0 : this.mint.equals(e.mint);
    }
  },
  Be = $s;
Be.WSOL = new $s(X(N({}, nt), { mint: nt.address }));
var Js = class {
    constructor({ decimals: e, symbol: t = "UNKNOWN", name: n = "UNKNOWN" }) {
      (this.decimals = e), (this.symbol = t), (this.name = n);
    }
    equals(e) {
      return this === e;
    }
  },
  yi = Js;
yi.SOL = new Js(en);
function Hd(i, e) {
  return i instanceof Be && e instanceof Be
    ? i.equals(e)
    : i instanceof Be || e instanceof Be
      ? !1
      : i === e;
}
var Kc = be(require("bn.js"));
var ea = new ce(new Kc.default(100)),
  Ee = class extends ce {
    toSignificant(e = 5, t, n) {
      return this.mul(ea).toSignificant(e, t, n);
    }
    toFixed(e = 2, t, n) {
      return this.mul(ea).toFixed(e, t, n);
    }
  };
var jd = ye("Raydium_price"),
  rt = class extends ce {
    constructor(t) {
      let { baseToken: n, quoteToken: o, numerator: r, denominator: s } = t;
      super(r, s);
      (this.baseToken = n),
        (this.quoteToken = o),
        (this.scalar = new ce(Tr(n.decimals), Tr(o.decimals)));
    }
    get raw() {
      return new ce(this.numerator, this.denominator);
    }
    get adjusted() {
      return super.mul(this.scalar);
    }
    invert() {
      return new rt({
        baseToken: this.quoteToken,
        quoteToken: this.baseToken,
        denominator: this.numerator,
        numerator: this.denominator,
      });
    }
    mul(t) {
      this.quoteToken !== t.baseToken &&
        jd.logWithError("mul token not equals");
      let n = super.mul(t);
      return new rt({
        baseToken: this.baseToken,
        quoteToken: t.quoteToken,
        denominator: n.denominator,
        numerator: n.numerator,
      });
    }
    toSignificant(t = this.quoteToken.decimals, n, o) {
      return this.adjusted.toSignificant(t, n, o);
    }
    toFixed(t = this.quoteToken.decimals, n, o) {
      return this.adjusted.toFixed(t, n, o);
    }
  };
function Ze(i) {
  if (i instanceof Ee) return new ce(i.numerator, i.denominator);
  if (i instanceof rt) return i.adjusted;
  if (i instanceof ke)
    try {
      return Ze(i.toExact());
    } catch {
      return new ce(Xe);
    }
  if (i instanceof ce) return i;
  let e = String(i),
    t = _n(e);
  return new ce(t.numerator, t.denominator);
}
function Zd(i) {
  var n;
  if (i instanceof Ee) return { fr: new ce(i.numerator, i.denominator) };
  if (i instanceof rt) return { fr: i.adjusted };
  if (i instanceof ke)
    return { fr: Ze(i.toExact()), decimals: i.token.decimals };
  if (i instanceof ce) return { fr: i };
  let e = String(i),
    t = _n(e);
  return {
    fr: new ce(t.numerator, t.denominator),
    decimals: (n = t.dec) == null ? void 0 : n.length,
  };
}
function $d(i, e) {
  if (i == null || e == null) return !1;
  let t = Ze(i),
    n = Ze(e);
  return t.sub(n).numerator, t.sub(n).numerator.lt(Xe);
}
function Cc(i, e) {
  if (i == null || e == null) return !1;
  let t = Ze(i),
    n = Ze(e);
  return t.sub(n).numerator.gt(Xe);
}
function Jd(i, e) {
  if (i == null || e == null) return !1;
  let t = Ze(i),
    n = Ze(e);
  return t.sub(n).numerator.lte(Xe);
}
function ep(i, e) {
  if (i == null || e == null) return !1;
  let t = Ze(i),
    n = Ze(e);
  return t.sub(n).numerator.gte(Xe);
}
function Rc(i, e) {
  if (i == null || e == null) return !1;
  let t = Ze(i),
    n = Ze(e);
  return t.sub(n).numerator.eq(Xe);
}
function tp(i, e) {
  if (i == null || e == null) return;
  let t = Ze(i),
    n = Ze(e);
  try {
    return t.div(n);
  } catch {
    return t;
  }
}
function np(i, e) {
  if (i == null || e == null) return;
  let t = Ze(i),
    n = Ze(e);
  return t.sub(n);
}
function ip(i) {
  return i == null ? !1 : !Rc(i, 0);
}
function op(i, e) {
  return Cc(e, i) ? e : i;
}
function Ir(i, e) {
  if (i == null || e == null) return;
  let t = Ze(i),
    n = Ze(e);
  return t.mul(n);
}
function rp(i, e) {
  if (i == null || e == null) return;
  let t = Ze(i),
    n = Ze(e);
  return t.add(n);
}
var Lc = require("@solana/web3.js"),
  Oc = be(require("bn.js"));
async function ta(i) {
  new Promise((e) => setTimeout(e, i));
}
function sp() {
  return new Date().getTime();
}
function Br(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    ![Be, ke, Lc.PublicKey, ce, Oc.default, rt, Ee].some(
      (e) => typeof e == "object" && i instanceof e,
    )
  );
}
function Me(i) {
  return typeof i == "string"
    ? Pr(i)
    : Array.isArray(i)
      ? i.map((e) => Me(e))
      : Br(i)
        ? Object.fromEntries(Object.entries(i).map(([e, t]) => [e, Me(t)]))
        : i;
}
var Xe = new ze.default(0),
  oa = new ze.default(1),
  ap = new ze.default(2),
  up = new ze.default(3),
  cp = new ze.default(5),
  vn = new ze.default(10),
  lp = new ze.default(100),
  mp = new ze.default(1e3),
  dp = new ze.default(1e4);
function Tr(i) {
  return vn.pow(J(i));
}
function _n(i) {
  var a;
  if (i === void 0) return { denominator: "1", numerator: "0" };
  if (i instanceof ze.default)
    return { numerator: i.toString(), denominator: "1" };
  if (i instanceof ce)
    return {
      denominator: i.denominator.toString(),
      numerator: i.numerator.toString(),
    };
  let e = String(i),
    [, t = "", n = "", o = ""] =
      (a = e.replace(",", "").match(/(-?)(\d*)\.?(\d*)/)) != null ? a : [],
    r = "1" + "0".repeat(o.length),
    s = t + (n === "0" ? "" : n) + o || "0";
  return { denominator: r, numerator: s, sign: t, int: n, dec: o };
}
function fo(i, e) {
  let t = i.divmod(e);
  return t.mod.isZero()
    ? t.div
    : t.div.isNeg()
      ? t.div.isubn(1)
      : t.div.iaddn(1);
}
function Mc(i) {
  var n;
  let [, e = "", t = ""] =
    (n = i.toFixed(2).match(/(-?)(\d*)\.?(\d*)/)) != null ? n : [];
  return `${e}${t}`;
}
function Nc(i, e = 0) {
  return i instanceof ze.default
    ? i
    : new ze.default(Mc(ra(i).mul(vn.pow(new ze.default(String(e))))));
}
function ra(i) {
  if (i instanceof Ee) return new ce(i.numerator, i.denominator);
  if (i instanceof rt) return i.adjusted;
  if (i instanceof ke)
    try {
      return ra(i.toExact());
    } catch {
      return new ce(Xe);
    }
  if (i instanceof ce) return i;
  let e = String(i),
    t = _n(e);
  return new ce(t.numerator, t.denominator);
}
function pp(i, e) {
  let { numerator: t, denominator: n } = _n(i);
  return new Ee(
    new ze.default(t),
    new ze.default(n).mul(
      e != null && e.alreadyDecimaled ? new ze.default(100) : new ze.default(1),
    ),
  );
}
function fp(i) {
  let { token: e, numberPrice: t, decimalDone: n } = i,
    o = new Be({
      mint: "",
      decimals: 6,
      symbol: "usd",
      name: "usd",
      skipMint: !0,
    }),
    { numerator: r, denominator: s } = _n(t),
    a = n ? new ze.default(r).mul(vn.pow(new ze.default(e.decimals))) : r,
    c = new ze.default(s).mul(vn.pow(new ze.default(o.decimals)));
  return new rt({
    baseToken: o,
    denominator: c.toString(),
    quoteToken: new Be(X(N({}, e), { skipMint: !0, mint: "" })),
    numerator: a.toString(),
  });
}
function na(i) {
  let e = new yi({ decimals: 6, symbol: "usd", name: "usd" }),
    t = Nc(Ir(i, 10 ** e.decimals));
  return new Nn(e, t);
}
function yp(i, e) {
  return na(!e || !i ? 0 : Ir(i, e));
}
function vc(i) {
  if (i == null) return;
  let { numerator: e, denominator: t } = _n(i.toString());
  return new ce(e, t);
}
function _c(i) {
  return i instanceof _;
}
function ia(i) {
  return _c(i)
    ? vc(i)
    : Array.isArray(i)
      ? i.map((e) => ia(e))
      : Br(i)
        ? Object.fromEntries(Object.entries(i).map(([e, t]) => [e, ia(t)]))
        : i;
}
var sa = (i) => typeof i == "number",
  aa = (i) => (i ? new Date(i) : new Date()),
  Vc = (i) => aa(i).getTime();
function ua(i, e, t) {
  let n = sa(e) ? e * ((t == null ? void 0 : t.unit) === "s" ? 1e3 : 1) : e;
  return new Date(i).getTime() <= n;
}
function ca(i, e, t) {
  let n = sa(e) ? e * ((t == null ? void 0 : t.unit) === "s" ? 1e3 : 1) : e;
  return new Date(i).getTime() > n;
}
function bp(i, e) {
  let n =
    Vc(i) +
    (e.days ? e.days * 24 * 60 * 60 * 1e3 : 0) +
    (e.hours ? e.hours * 60 * 60 * 1e3 : 0) +
    (e.minutes ? e.minutes * 60 * 1e3 : 0) +
    (e.seconds ? e.seconds * 1e3 : 0) +
    (e.milliseconds ? e.milliseconds : 0);
  return aa(n);
}
function ar(i, e = 1, t = []) {
  let n = [...i];
  if (e <= 0) return t;
  for (; n.length; ) t.push(n.splice(0, e));
  return t;
}
function gp(i, ...e) {
  return i.filter((t) => e.every((n) => n.includes(t)));
}
function Ap(i, ...e) {
  return i.filter((t) => e.every((n) => !n.includes(t)));
}
function wp(i) {
  return [...new Set(i)];
}
var Qt = class {
  constructor(e) {
    this._owner = e;
  }
  get publicKey() {
    return Qt.isKeyPair(this._owner) ? this._owner.publicKey : this._owner;
  }
  get signer() {
    return Qt.isKeyPair(this._owner) ? this._owner : void 0;
  }
  get isKeyPair() {
    return Qt.isKeyPair(this._owner);
  }
  get isPublicKey() {
    return Qt.isPublicKey(this._owner);
  }
  static isKeyPair(e) {
    return e.secretKey !== void 0;
  }
  static isPublicKey(e) {
    return !Qt.isKeyPair(e);
  }
};
var Wc = require("@solana/web3.js"),
  qc = require("@solana/spl-token");
var Je = require("@solana/web3.js");
var Vn = ((t) => ((t[(t.V0 = 0)] = "V0"), (t[(t.LEGACY = 1)] = "LEGACY"), t))(
    Vn || {},
  ),
  U = {
    CreateAccount: "CreateAccount",
    InitAccount: "InitAccount",
    CreateATA: "CreateATA",
    CloseAccount: "CloseAccount",
    TransferAmount: "TransferAmount",
    InitMint: "InitMint",
    MintTo: "MintTo",
    InitMarket: "InitMarket",
    Util1216OwnerClaim: "Util1216OwnerClaim",
    SetComputeUnitPrice: "SetComputeUnitPrice",
    SetComputeUnitLimit: "SetComputeUnitLimit",
    ClmmCreatePool: "ClmmCreatePool",
    ClmmOpenPosition: "ClmmOpenPosition",
    ClmmIncreasePosition: "ClmmIncreasePosition",
    ClmmDecreasePosition: "ClmmDecreasePosition",
    ClmmClosePosition: "ClmmClosePosition",
    ClmmSwapBaseIn: "ClmmSwapBaseIn",
    ClmmSwapBaseOut: "ClmmSwapBaseOut",
    ClmmInitReward: "ClmmInitReward",
    ClmmSetReward: "ClmmSetReward",
    ClmmCollectReward: "ClmmCollectReward",
    ClmmLockPosition: "ClmmLockPosition",
    ClmmHarvestLockPosition: "ClmmHarvestLockPosition",
    AmmV4Swap: "AmmV4Swap",
    AmmV4AddLiquidity: "AmmV4AddLiquidity",
    AmmV4RemoveLiquidity: "AmmV4RemoveLiquidity",
    AmmV4SimulatePoolInfo: "AmmV4SimulatePoolInfo",
    AmmV4SwapBaseIn: "AmmV4SwapBaseIn",
    AmmV4SwapBaseOut: "AmmV4SwapBaseOut",
    AmmV4CreatePool: "AmmV4CreatePool",
    AmmV4InitPool: "AmmV4InitPool",
    AmmV5AddLiquidity: "AmmV5AddLiquidity",
    AmmV5RemoveLiquidity: "AmmV5RemoveLiquidity",
    AmmV5SimulatePoolInfo: "AmmV5SimulatePoolInfo",
    AmmV5SwapBaseIn: "AmmV5SwapBaseIn",
    AmmV5SwapBaseOut: "AmmV5SwapBaseOut",
    RouteSwap: "RouteSwap",
    RouteSwap1: "RouteSwap1",
    RouteSwap2: "RouteSwap2",
    FarmV3Deposit: "FarmV3Deposit",
    FarmV3Withdraw: "FarmV3Withdraw",
    FarmV3CreateLedger: "FarmV3CreateLedger",
    FarmV4Withdraw: "FarmV4Withdraw",
    FarmV5Deposit: "FarmV5Deposit",
    FarmV5Withdraw: "FarmV5Withdraw",
    FarmV5CreateLedger: "FarmV5CreateLedger",
    FarmV6Deposit: "FarmV6Deposit",
    FarmV6Withdraw: "FarmV6Withdraw",
    FarmV6Create: "FarmV6Create",
    FarmV6Restart: "FarmV6Restart",
    FarmV6CreatorAddReward: "FarmV6CreatorAddReward",
    FarmV6CreatorWithdraw: "FarmV6CreatorWithdraw",
    CpmmCreatePool: "CpmmCreatePool",
    CpmmAddLiquidity: "CpmmAddLiquidity",
    CpmmWithdrawLiquidity: "CpmmWithdrawLiquidity",
    CpmmSwapBaseIn: "CpmmSwapBaseIn",
    CpmmSwapBaseOut: "CpmmSwapBaseOut",
    CpmmLockLp: "CpmmLockLp",
    CpmmCollectLockFee: "CpmmCollectLockFee",
    TransferTip: "TransferTip",
  };
var Ec = require("@solana/spl-token"),
  kn = ye("Raydium_txUtil"),
  la = 1644;
function yo(i) {
  let e = [],
    t = [];
  return (
    i.microLamports &&
      (e.push(
        Je.ComputeBudgetProgram.setComputeUnitPrice({
          microLamports: i.microLamports,
        }),
      ),
      t.push(U.SetComputeUnitPrice)),
    i.units &&
      (e.push(Je.ComputeBudgetProgram.setComputeUnitLimit({ units: i.units })),
      t.push(U.SetComputeUnitLimit)),
    { instructions: e, instructionTypes: t }
  );
}
async function ei(i, e) {
  var n, o;
  let t = e != null ? e : "confirmed";
  return (o = await ((n = i.getLatestBlockhash) == null
    ? void 0
    : n.call(i, { commitment: t }))) == null
    ? void 0
    : o.blockhash;
}
async function bo(i, e) {
  return (
    i.getSignatureStatuses([e]),
    new Promise((t, n) => {
      let o = setTimeout(n, 6e4);
      i.onSignature(
        e,
        (r) => {
          if ((clearTimeout(o), !r.err)) {
            t("");
            return;
          }
          n(Object.assign(r.err, { txId: e }));
        },
        "confirmed",
      );
    })
  );
}
function go(i, e) {
  i.length < 1 && kn.logWithError(`no instructions provided: ${i.toString()}`),
    e.length < 1 && kn.logWithError(`no signers provided:, ${e.toString()}`);
  let t = new Je.Transaction();
  (t.recentBlockhash = "11111111111111111111111111111111"),
    (t.feePayer = e[0]),
    t.add(...i);
  try {
    return (
      Buffer.from(t.serialize({ verifySignatures: !1 })).toString("base64")
        .length < la
    );
  } catch {
    return !1;
  }
}
async function ma(i, e, t, n = !0) {
  let o = new Je.PublicKey("RaydiumSimuLateTransaction11111111111111111"),
    r = [],
    s = new Je.Transaction();
  s.feePayer = o;
  for (let u of e)
    go([...s.instructions, u], [o]) ||
      (r.push(s), (s = new Je.Transaction()), (s.feePayer = o)),
      s.add(u);
  s.instructions.length > 0 && r.push(s);
  let a = [];
  try {
    if (((a = await Fc(i, r, n)), a.find((u) => u.err !== null)))
      throw Error("rpc simulateTransaction error");
  } catch (u) {
    u instanceof Error &&
      kn.logWithError("failed to simulate for instructions", "RPC_ERROR", {
        message: u.message,
      });
  }
  let c = [];
  for (let u of a)
    if ((kn.debug("simulate result:", u), u.logs)) {
      let l = u.logs.filter((m) => m && m.includes(t));
      kn.debug("filteredLog:", c),
        l.length ||
          kn.logWithError("simulate log not match keyword", "keyword", t),
        c.push(...l);
    }
  return c;
}
function da(i, e) {
  let t = i.match(/{["\w:,]+}/g);
  return !t || t.length !== 1
    ? kn.logWithError(`simulate log fail to match json, keyword: ${e}`)
    : t[0];
}
function ln(i, e) {
  let n = new RegExp(`"${e}":(\\d+)`, "g").exec(i);
  return !n || n.length !== 2
    ? kn.logWithError(`simulate log fail to match key", key: ${e}`)
    : n[1];
}
function le(i, e) {
  let [t, n] = Je.PublicKey.findProgramAddressSync(i, e);
  return { publicKey: t, nonce: n };
}
async function Fc(i, e, t) {
  let n = [];
  if (t) {
    let o = await i.getLatestBlockhash(),
      r = [];
    for (let u of e) {
      (u.recentBlockhash = o.blockhash),
        (u.lastValidBlockHeight = o.lastValidBlockHeight);
      let m = u._compile().serialize(),
        p = u._serialize(m).toString("base64");
      r.push(p);
    }
    let s = r.map((u) => {
        let l = i._buildArgs([u], void 0, "base64");
        return { methodName: "simulateTransaction", args: l };
      }),
      a = [],
      c = 20;
    for (let u = 0; u < Math.ceil(s.length / c); u++)
      a.push(s.slice(u * c, (u + 1) * c));
    n = await (
      await Promise.all(
        a.map(async (u) =>
          (await i._rpcBatchRequest(u)).map((l) => l.result.value),
        ),
      )
    ).flat();
  } else
    try {
      n = await Promise.all(
        e.map(async (o) => await (await i.simulateTransaction(o)).value),
      );
    } catch (o) {
      o instanceof Error &&
        kn.logWithError(
          "failed to get info for multiple accounts",
          "RPC_ERROR",
          { message: o.message },
        );
    }
  return n;
}
function bi({ instructions: i, payer: e, signers: t }) {
  return go(i, [e, ...t]);
}
function gi({
  instructions: i,
  payer: e,
  lookupTableAddressAccount: t,
  recentBlockhash: n = Je.Keypair.generate().publicKey.toString(),
}) {
  let r = new Je.TransactionMessage({
    payerKey: e,
    recentBlockhash: n,
    instructions: i,
  }).compileToV0Message(Object.values(t != null ? t : {}));
  try {
    return (
      Buffer.from(new Je.VersionedTransaction(r).serialize()).toString("base64")
        .length < la
    );
  } catch {
    return !1;
  }
}
var xr = { time: 0, data: void 0 };
async function Pp(i) {
  if (!xr.data || (Date.now() - xr.time) / 1e3 > 30) {
    let e = await i.getEpochInfo();
    return (xr = { time: Date.now(), data: e }), e;
  } else return xr.data;
}
var pa = (i) =>
    Buffer.isBuffer(i)
      ? i
      : i instanceof Uint8Array
        ? Buffer.from(i.buffer, i.byteOffset, i.byteLength)
        : Buffer.from(i),
  Dc = (i) => {
    let e = i.serialize({ requireAllSignatures: !1, verifySignatures: !1 });
    i instanceof Je.VersionedTransaction && (e = pa(e));
    try {
      return e instanceof Buffer
        ? e.toString("base64")
        : Buffer.from(e).toString("base64");
    } catch {
      return e.toString("base64");
    }
  };
function En(i) {
  let e = [];
  return (
    i.forEach((t) => {
      t instanceof Je.Transaction &&
        (t.recentBlockhash ||
          (t.recentBlockhash = Ec.TOKEN_PROGRAM_ID.toBase58()),
        t.feePayer || (t.feePayer = Je.Keypair.generate().publicKey)),
        e.push(Dc(t));
    }),
    console.log("simulate tx string:", e),
    e
  );
}
function kp(i) {
  let e = i.serialize({ requireAllSignatures: !1, verifySignatures: !1 });
  return (
    i instanceof Je.VersionedTransaction && (e = pa(e)), e.toString("base64")
  );
}
function oe(i, e, t) {
  return le(
    [
      i.toBuffer(),
      (t != null ? t : qc.TOKEN_PROGRAM_ID).toBuffer(),
      e.toBuffer(),
    ],
    new Wc.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),
  );
}
var de = require("@solana/web3.js"),
  Sr = new de.PublicKey("EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q"),
  fa = new de.PublicKey("CBuCnLe26faBpcBP2fktp4rp8abpcAnTWft6ZrP5Q4T"),
  Kr = new de.PublicKey("9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z"),
  ti = new de.PublicKey("FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG"),
  Uc = new de.PublicKey("CLaimxFqjHzgTJtAGHU47NPhg6qrc5sCnpC4tBLyABQS"),
  Cr = new de.PublicKey("srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX"),
  Ao = new de.PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"),
  Ai = new de.PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"),
  Gc = new de.PublicKey("5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h"),
  wo = new de.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"),
  hn = new de.PublicKey("CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"),
  ni = new de.PublicKey("LockrWmn6K5twhz3y9w1dQERbmgSaRkfnTeTKbpofwE"),
  wi = new de.PublicKey("kN1kEznaF5Xbd8LYuqtEFcxzWSBk5Fv6ygX6SqEGJVy"),
  Xc = new de.PublicKey("routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS"),
  ya = new de.PublicKey("7YttLkHDoNj9wyDur5pM1ejNaAvT9X4eqaYcHQqtj2G5"),
  zc = new de.PublicKey("6FJon3QE27qgPVggARueB22hLvoh22VzJpXv4rBEoSLF"),
  Qc = new de.PublicKey("CC12se5To1CdEuw7fDS27B7Geo5jJyL7t5UK2B44NgiH"),
  Yc = new de.PublicKey("9HzJyW1qZsEiSfMUf6L2jo3CcTKAyBmSyKdwQeYisHrC"),
  Hc = new de.PublicKey("DropEU8AvevN3UrXWXTMuz3rqnMczQVNjq3kcSdW2SQi"),
  Pi = new de.PublicKey("CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C"),
  Rr = new de.PublicKey("GpMZbSM2GgvTKHJirzeGfMFoaZ8UR2X7F4v8vHTvxFbL"),
  jc = new de.PublicKey("DNXgeM9EiiaAbaWvwjHj9fQQLAX5ZsfHyvmYUNRAdNC8"),
  Zc = new de.PublicKey("CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"),
  $c = new de.PublicKey("7rQ1QFNosMkUCuh7Z7fPbTHvh73b68sQYdirycEzJVuw"),
  Jc = new de.PublicKey("G11FKBRaAkHAKuLCgLM6K6NUc9rTjPAznRCjZifrTQe2"),
  ki = new de.PublicKey("LockrWmn6K5twhz3y9w1dQERbmgSaRkfnTeTKbpofwE"),
  el = new de.PublicKey("DLockwT7X7sxtLmGH9g5kmfcjaBtncdbUmi738m5bvQC"),
  hi = new de.PublicKey("3f7GcQFG397GAaEnv51zR6tsTVihYRydnydDD1cXekxH"),
  tl = new de.PublicKey("7AFUeLVRjBfzqK3tTGw8hN48KLQWSk6DTE8xprWdPqix"),
  Ti = {
    IDO_PROGRAM_ID_V1: zc,
    IDO_PROGRAM_ID_V2: Qc,
    IDO_PROGRAM_ID_V3: Yc,
    IDO_PROGRAM_ID_V4: Hc,
  },
  ht = {
    AMM_V4: Ai,
    AMM_STABLE: Gc,
    CLMM_PROGRAM_ID: hn,
    CLMM_LOCK_PROGRAM_ID: ni,
    CLMM_LOCK_AUTH_ID: wi,
    FARM_PROGRAM_ID_V3: Sr,
    FARM_PROGRAM_ID_V5: Kr,
    FARM_PROGRAM_ID_V6: ti,
    OPEN_BOOK_PROGRAM: Cr,
    SERUM_PROGRAM_ID_V3: Ao,
    UTIL1216: Uc,
    Router: Xc,
    CREATE_CPMM_POOL_PROGRAM: Pi,
    CREATE_CPMM_POOL_AUTH: Rr,
    CREATE_CPMM_POOL_FEE_ACC: jc,
    LOCK_CPMM_PROGRAM: ki,
    LOCK_CPMM_AUTH: hi,
  },
  hp = {
    SERUM_MARKET: de.PublicKey.default,
    OPENBOOK_MARKET: new de.PublicKey(
      "EoTcMgcDRTJVZDMZWBoU6rhYHZfkNTVEAfz3uUJRcYGj",
    ),
    UTIL1216: de.PublicKey.default,
    FarmV3: new de.PublicKey("85BFyr98MbCUU9MVTEgzx1nbhWACbJqLzho6zd6DZcWL"),
    FarmV5: new de.PublicKey("EcLzTrNg9V7qhcdyXDe2qjtPkiGzDM2UbdRaeaadU5r2"),
    FarmV6: new de.PublicKey("Farm2hJLcqPtPg8M4rR6DMrsRNc5TPm5Cs4bVQrMe2T7"),
    AmmV4: new de.PublicKey("HWy1jotHpo6UqeQxx49dpYYdQB8wj9Qk9MdxwjLvDHB8"),
    AmmStable: new de.PublicKey("DDg4VmQaJV9ogWce7LpcjBA9bv22wRp5uaTPa5pGjijF"),
    CLMM: new de.PublicKey("devi51mZmdwUJGU9hjN27vEz64Gps7uUefqxg27EAtH"),
    CLMM_LOCK_PROGRAM_ID: new de.PublicKey(
      "DLockwT7X7sxtLmGH9g5kmfcjaBtncdbUmi738m5bvQC",
    ),
    CLMM_LOCK_AUTH_ID: new de.PublicKey(
      "8qmHNvu2Kr2C7U8mJL4Vz1vTDxMhVuXKREwU7TNoaVEo",
    ),
    Router: new de.PublicKey("BVChZ3XFEwTMUk1o9i3HAf91H6mFxSwa5X2wFAWhYPhU"),
    CREATE_CPMM_POOL_PROGRAM: Zc,
    CREATE_CPMM_POOL_AUTH: $c,
    CREATE_CPMM_POOL_FEE_ACC: Jc,
    FEE_DESTINATION_ID: new de.PublicKey(
      "3XMrhbv989VxAMi3DErLV9eJht1pHppW5LbKxe9fkEFR",
    ),
    LOCK_CPMM_PROGRAM: el,
    LCOK_CPMM_AUTH: tl,
  };
var $e = be(require("bn.js")),
  mn = 1e4;
function Tp(i, e, t, n) {
  if (e === void 0) return { amount: i, fee: void 0, expirationTime: void 0 };
  let o =
      t.epoch < e.newerTransferFee.epoch
        ? e.olderTransferFee
        : e.newerTransferFee,
    r = new $e.default(o.maximumFee.toString()),
    s =
      t.epoch < e.newerTransferFee.epoch
        ? ((Number(e.newerTransferFee.epoch) * t.slotsInEpoch -
            t.absoluteSlot) *
            400) /
          1e3
        : void 0;
  if (n)
    if (o.transferFeeBasisPoints === mn) {
      let a = new $e.default(o.maximumFee.toString());
      return { amount: i.add(a), fee: a, expirationTime: s };
    } else {
      let a = Yt(
          i.mul(new $e.default(mn)),
          new $e.default(mn - o.transferFeeBasisPoints),
        ),
        c = new $e.default(o.maximumFee.toString()),
        u = a.sub(i).gt(c) ? i.add(c) : a,
        l = Yt(
          u.mul(new $e.default(o.transferFeeBasisPoints)),
          new $e.default(mn),
        ),
        m = l.gt(r) ? r : l;
      return { amount: u, fee: m, expirationTime: s };
    }
  else {
    let a = Yt(
        i.mul(new $e.default(o.transferFeeBasisPoints)),
        new $e.default(mn),
      ),
      c = a.gt(r) ? r : a;
    return { amount: i, fee: c, expirationTime: s };
  }
}
function he(i, e, t, n) {
  if (e === void 0) return { amount: i, fee: void 0, expirationTime: void 0 };
  let o = X(N({}, e), {
      olderTransferFee: {
        epoch: BigInt(e.olderTransferFee.epoch),
        maximumFee: BigInt(e.olderTransferFee.maximumFee),
        transferFeeBasisPoints: e.olderTransferFee.transferFeeBasisPoints,
      },
      newerTransferFee: {
        epoch: BigInt(e.newerTransferFee.epoch),
        maximumFee: BigInt(e.newerTransferFee.maximumFee),
        transferFeeBasisPoints: e.newerTransferFee.transferFeeBasisPoints,
      },
    }),
    r =
      t.epoch < o.newerTransferFee.epoch
        ? o.olderTransferFee
        : o.newerTransferFee,
    s = new $e.default(r.maximumFee.toString()),
    a =
      t.epoch < o.newerTransferFee.epoch
        ? ((Number(o.newerTransferFee.epoch) * t.slotsInEpoch -
            t.absoluteSlot) *
            400) /
          1e3
        : void 0;
  if (n)
    if (r.transferFeeBasisPoints === mn) {
      let c = new $e.default(r.maximumFee.toString());
      return { amount: i.add(c), fee: c, expirationTime: a };
    } else {
      let c = Yt(
          i.mul(new $e.default(mn)),
          new $e.default(mn - r.transferFeeBasisPoints),
        ),
        u = new $e.default(r.maximumFee.toString()),
        l = c.sub(i).gt(u) ? i.add(u) : c,
        m = Yt(
          l.mul(new $e.default(r.transferFeeBasisPoints)),
          new $e.default(mn),
        ),
        d = m.gt(s) ? s : m;
      return { amount: l, fee: d, expirationTime: a };
    }
  else {
    let c = Yt(
        i.mul(new $e.default(r.transferFeeBasisPoints)),
        new $e.default(mn),
      ),
      u = c.gt(s) ? s : c;
    return { amount: i, fee: u, expirationTime: a };
  }
}
function Ht(i, e) {
  return i === void 0 ? e : e === void 0 ? i : Math.min(i, e);
}
function Yt(i, e) {
  let { div: t, mod: n } = i.divmod(e);
  return n.gt(new $e.default(0)) ? t.add(new $e.default(1)) : t;
}
var Fn = require("@solana/web3.js");
async function Lr({ connection: i, address: e }) {
  let t = await zt(
      i,
      [...new Set(e.map((o) => o.toString()))].map((o) => new Fn.PublicKey(o)),
    ),
    n = {};
  for (let o = 0; o < e.length; o++) {
    let r = t[o],
      s = e[o];
    if (!r) continue;
    let a = new Fn.AddressLookupTableAccount({
      key: s,
      state: Fn.AddressLookupTableAccount.deserialize(r.data),
    });
    (n[s.toString()] = a), (Po[s.toString()] = a);
  }
  return n;
}
var Po = {
  "2immgwYNHBbyVQKVGCEkgWpi53bLwWNRMB5G2nbgYV17":
    new Fn.AddressLookupTableAccount({
      key: new Fn.PublicKey("2immgwYNHBbyVQKVGCEkgWpi53bLwWNRMB5G2nbgYV17"),
      state: Fn.AddressLookupTableAccount.deserialize(
        Buffer.from(
          "AQAAAP//////////d49+DAAAAAAAAQZMWvw7GUNJdaccNBVnb57OKakxL2BHLYvhRwVILRsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMGRm/lIRcy/+ytunLDm+e8jOW7xfcSayxDmzpAAAAABt324ddloZPZy+FGzut5rBy0he1fWzeROoz1hX7/AKkG3fbh7nWP3hhCXbzkbM3athr8TYO5DSf+vfko2KGL/AVKU1D4XciC1hSlVnJ4iilt3x6rq9CmBniISTL07vagBqfVFxksXFEhjMlMPUrxf1ja7gibof1E49vZigAAAAAGp9UXGMd0yShWY5hpHV62i164o5tLbVxzVVshAAAAAIyXJY9OJInxuz0QKRSODYMLWhOZ2v8QhASOe9jb6fhZC3BlsePRfEU4nVJ/awTDzVi4bHMaoP21SbbRvAP4KUbIScv+6Yw2LHF/6K0ZjUPibbSWXCirYPGuuVl7zT789IUPLW4CpHr4JNCatp3ELXDLKMv6JJ+37le50lbBJ2LvDQdRqCgtphMF/imcN7mY5YRx2xE1A3MQ+L4QRaYK9u4GRfZP3LsAd00a+IkCpA22UNQMKdq5BFbJuwuOLqc8zxCTDlqxBG8J0HcxtfogQHDK06ukzfaXiNDKAob1MqBHS9lJxDYCwz8gd5DtFqNSTKG5l1zxIaKpDP/sffi2is1H9aKveyXSu5StXElYRl9SD5As0DHE4N0GLnf84/siiKXVyp4Ez121kLcUui/jLLFZEz/BwZK3Ilf9B9OcsEAeDMKAy2vjGSxQODgBz0QwGA+eP4ZjIjrIAQaXENv31QfLlOdXSRCkaybRniDHF4C8YcwhcvsqrOVuTP4B2Na+9wLdtrB31uz2rtlFI5kahdsnp/d1SrASDInYCtTYtdoke4kX+hoKWcEWM4Tle8pTUkUVv4BxS6fje/EzKBE4Qu9N9LMnrw/JNO0hqMVB4rk/2ou4AB1loQ7FZoPwut2o4KZB+0p9xnbrQKw038qjpHar+PyDwvxBRcu5hpHw3dguezeWv+IwvgW5icu8EGkhGa9AkFPPJT7VMSFb8xowveU=",
          "base64",
        ),
      ),
    }),
};
var xe = require("@solana/web3.js"),
  nl = be(require("axios"));
var Or = 2e3,
  ko = class {
    constructor(e) {
      this.instructions = [];
      this.endInstructions = [];
      this.lookupTableAddress = [];
      this.signers = [];
      this.instructionTypes = [];
      this.endInstructionTypes = [];
      (this.connection = e.connection),
        (this.feePayer = e.feePayer),
        (this.signAllTransactions = e.signAllTransactions),
        (this.owner = e.owner),
        (this.cluster = e.cluster),
        (this.blockhashCommitment = e.blockhashCommitment),
        (this.loopMultiTxStatus = !!e.loopMultiTxStatus);
    }
    get AllTxData() {
      return {
        instructions: this.instructions,
        endInstructions: this.endInstructions,
        signers: this.signers,
        instructionTypes: this.instructionTypes,
        endInstructionTypes: this.endInstructionTypes,
        lookupTableAddress: this.lookupTableAddress,
      };
    }
    get allInstructions() {
      return [...this.instructions, ...this.endInstructions];
    }
    async getComputeBudgetConfig() {
      var n;
      let e = (
          await nl.default.get(
            `https://solanacompass.com/api/fees?cacheFreshTime=${3e5}`,
          )
        ).data,
        { avg: t } = (n = e == null ? void 0 : e[15]) != null ? n : {};
      if (!!t)
        return {
          units: 6e5,
          microLamports: Math.min(Math.ceil((t * 1e6) / 6e5), 25e3),
        };
    }
    addCustomComputeBudget(e) {
      if (e) {
        let { instructions: t, instructionTypes: n } = yo(e);
        return (
          this.instructions.unshift(...t),
          this.instructionTypes.unshift(...n),
          !0
        );
      }
      return !1;
    }
    addTipInstruction(e) {
      var t;
      return e
        ? (this.endInstructions.push(
            xe.SystemProgram.transfer({
              fromPubkey: (t = e.feePayer) != null ? t : this.feePayer,
              toPubkey: new xe.PublicKey(e.address),
              lamports: BigInt(e.amount.toString()),
            }),
          ),
          this.endInstructionTypes.push(U.TransferTip),
          !0)
        : !1;
    }
    async calComputeBudget({ config: e, defaultIns: t }) {
      try {
        let n = e || (await this.getComputeBudgetConfig());
        if (this.addCustomComputeBudget(n)) return;
        t && this.instructions.unshift(...t);
      } catch {
        t && this.instructions.unshift(...t);
      }
    }
    addInstruction({
      instructions: e = [],
      endInstructions: t = [],
      signers: n = [],
      instructionTypes: o = [],
      endInstructionTypes: r = [],
      lookupTableAddress: s = [],
    }) {
      return (
        this.instructions.push(...e),
        this.endInstructions.push(...t),
        this.signers.push(...n),
        this.instructionTypes.push(...o),
        this.endInstructionTypes.push(...r),
        this.lookupTableAddress.push(
          ...s.filter((a) => a !== xe.PublicKey.default.toString()),
        ),
        this
      );
    }
    async versionBuild({ txVersion: e, extInfo: t }) {
      return e === 0 ? await this.buildV0(N({}, t || {})) : this.build(t);
    }
    build(e) {
      var n;
      let t = new xe.Transaction();
      return (
        this.allInstructions.length && t.add(...this.allInstructions),
        (t.feePayer = this.feePayer),
        ((n = this.owner) == null ? void 0 : n.signer) &&
          !this.signers.some((o) => o.publicKey.equals(this.owner.publicKey)) &&
          this.signers.push(this.owner.signer),
        {
          builder: this,
          transaction: t,
          signers: this.signers,
          instructionTypes: [
            ...this.instructionTypes,
            ...this.endInstructionTypes,
          ],
          execute: async (o) => {
            var u;
            let {
                recentBlockHash: r,
                skipPreflight: s = !0,
                sendAndConfirm: a,
              } = o || {},
              c =
                r != null
                  ? r
                  : await ei(this.connection, this.blockhashCommitment);
            if (
              ((t.recentBlockhash = c),
              this.signers.length && t.sign(...this.signers),
              En([t]),
              (u = this.owner) != null && u.isKeyPair)
            )
              return {
                txId: a
                  ? await (0, xe.sendAndConfirmTransaction)(
                      this.connection,
                      t,
                      this.signers.find((m) =>
                        m.publicKey.equals(this.owner.publicKey),
                      )
                        ? this.signers
                        : [...this.signers, this.owner.signer],
                      { skipPreflight: s },
                    )
                  : await this.connection.sendRawTransaction(t.serialize(), {
                      skipPreflight: s,
                    }),
                signedTx: t,
              };
            if (this.signAllTransactions) {
              let l = await this.signAllTransactions([t]);
              if (this.signers.length)
                for (let m of l)
                  try {
                    m.sign(...this.signers);
                  } catch {}
              return {
                txId: await this.connection.sendRawTransaction(
                  l[0].serialize(),
                  { skipPreflight: s },
                ),
                signedTx: l[0],
              };
            }
            throw new Error(
              "please provide owner in keypair format or signAllTransactions function",
            );
          },
          extInfo: e || {},
        }
      );
    }
    buildMultiTx(e) {
      var u;
      let { extraPreBuildData: t = [], extInfo: n } = e,
        { transaction: o } = this.build(n),
        r = t.filter((l) => l.transaction.instructions.length > 0),
        s = [o, ...r.map((l) => l.transaction)],
        a = [this.signers, ...r.map((l) => l.signers)],
        c = [
          ...this.instructionTypes,
          ...r.map((l) => l.instructionTypes).flat(),
        ];
      return (
        (u = this.owner) != null &&
          u.signer &&
          a.forEach((l) => {
            l.some((m) => m.publicKey.equals(this.owner.publicKey)) ||
              this.signers.push(this.owner.signer);
          }),
        {
          builder: this,
          transactions: s,
          signers: a,
          instructionTypes: c,
          execute: async (l) => {
            var g;
            let {
                sequentially: m,
                onTxUpdate: d,
                skipTxCount: p = 0,
                recentBlockHash: y,
                skipPreflight: f = !0,
              } = l || {},
              b =
                y != null
                  ? y
                  : await ei(this.connection, this.blockhashCommitment);
            if ((g = this.owner) != null && g.isKeyPair) {
              if (m) {
                let w = [],
                  P = 0;
                for (let T of s) {
                  if ((++P, P <= p)) continue;
                  let B = await (0, xe.sendAndConfirmTransaction)(
                    this.connection,
                    T,
                    this.signers.find((h) =>
                      h.publicKey.equals(this.owner.publicKey),
                    )
                      ? this.signers
                      : [...this.signers, this.owner.signer],
                    { skipPreflight: f },
                  );
                  w.push(B);
                }
                return { txIds: w, signedTxs: s };
              }
              return {
                txIds: await await Promise.all(
                  s.map(
                    async (w) => (
                      (w.recentBlockhash = b),
                      await this.connection.sendRawTransaction(w.serialize(), {
                        skipPreflight: f,
                      })
                    ),
                  ),
                ),
                signedTxs: s,
              };
            }
            if (this.signAllTransactions) {
              let w = s.map(
                (T, B) => (
                  (T.recentBlockhash = b), a[B].length && T.sign(...a[B]), T
                ),
              );
              En(w);
              let P = await this.signAllTransactions(w);
              if (m) {
                let T = 0,
                  B = [],
                  h = async () => {
                    if (!P[T]) return;
                    let x = await this.connection.sendRawTransaction(
                      P[T].serialize(),
                      { skipPreflight: f },
                    );
                    B.push({ txId: x, status: "sent", signedTx: P[T] }),
                      d == null || d([...B]),
                      T++;
                    let S = !1,
                      K = null,
                      I = null,
                      C = (L) => {
                        K !== null && clearInterval(K),
                          I !== null &&
                            this.connection.removeSignatureListener(I);
                        let O = B.findIndex((F) => F.txId === x);
                        if (O > -1) {
                          if (
                            B[O].status === "error" ||
                            B[O].status === "success"
                          )
                            return;
                          B[O].status = L.err ? "error" : "success";
                        }
                        d == null || d([...B]), L.err || h();
                      };
                    this.loopMultiTxStatus &&
                      (K = setInterval(async () => {
                        var L;
                        if (S) {
                          clearInterval(K);
                          return;
                        }
                        try {
                          let O = await this.connection.getTransaction(x, {
                            commitment: "confirmed",
                            maxSupportedTransactionVersion: 0,
                          });
                          O &&
                            ((S = !0),
                            clearInterval(K),
                            C({
                              err:
                                ((L = O.meta) == null ? void 0 : L.err) || null,
                            }),
                            console.log("tx status from getTransaction:", x));
                        } catch (O) {
                          (S = !0),
                            clearInterval(K),
                            console.error("getTransaction timeout:", O, x);
                        }
                      }, Or)),
                      (I = this.connection.onSignature(
                        x,
                        (L) => {
                          if (S) {
                            this.connection.removeSignatureListener(I);
                            return;
                          }
                          (S = !0), C(L);
                        },
                        "confirmed",
                      )),
                      this.connection.getSignatureStatus(x);
                  };
                return await h(), { txIds: B.map((x) => x.txId), signedTxs: P };
              } else {
                let T = [];
                for (let B = 0; B < P.length; B += 1) {
                  let h = await this.connection.sendRawTransaction(
                    P[B].serialize(),
                    { skipPreflight: f },
                  );
                  T.push(h);
                }
                return { txIds: T, signedTxs: P };
              }
            }
            throw new Error(
              "please provide owner in keypair format or signAllTransactions function",
            );
          },
          extInfo: n || {},
        }
      );
    }
    async versionMultiBuild({
      extraPreBuildData: e,
      txVersion: t,
      extInfo: n,
    }) {
      return t === 0
        ? await this.buildV0MultiTx({
            extraPreBuildData: e,
            buildProps: n || {},
          })
        : this.buildMultiTx({ extraPreBuildData: e, extInfo: n });
    }
    async buildV0(e) {
      var f;
      let y = e || {},
        {
          lookupTableCache: t = {},
          lookupTableAddress: n = [],
          forerunCreate: o,
          recentBlockhash: r,
        } = y,
        s = He(y, [
          "lookupTableCache",
          "lookupTableAddress",
          "forerunCreate",
          "recentBlockhash",
        ]),
        a = N(N({}, this.cluster === "devnet" ? {} : Po), t),
        c = Array.from(new Set([...n, ...this.lookupTableAddress])),
        u = [];
      for (let b of c) a[b] === void 0 && u.push(new xe.PublicKey(b));
      let l = await Lr({ connection: this.connection, address: u });
      for (let [b, g] of Object.entries(l)) a[b] = g;
      let m = o
          ? xe.PublicKey.default.toBase58()
          : r != null
            ? r
            : await ei(this.connection, this.blockhashCommitment),
        d = new xe.TransactionMessage({
          payerKey: this.feePayer,
          recentBlockhash: m,
          instructions: [...this.allInstructions],
        }).compileToV0Message(Object.values(a));
      ((f = this.owner) == null ? void 0 : f.signer) &&
        !this.signers.some((b) => b.publicKey.equals(this.owner.publicKey)) &&
        this.signers.push(this.owner.signer);
      let p = new xe.VersionedTransaction(d);
      return (
        p.sign(this.signers),
        {
          builder: this,
          transaction: p,
          signers: this.signers,
          instructionTypes: [
            ...this.instructionTypes,
            ...this.endInstructionTypes,
          ],
          execute: async (b) => {
            var P;
            let { skipPreflight: g = !0, sendAndConfirm: w } = b || {};
            if ((En([p]), (P = this.owner) != null && P.isKeyPair)) {
              let T = await this.connection.sendTransaction(p, {
                skipPreflight: g,
              });
              return (
                w && (await bo(this.connection, T)), { txId: T, signedTx: p }
              );
            }
            if (this.signAllTransactions) {
              let T = await this.signAllTransactions([p]);
              if (this.signers.length)
                for (let B of T)
                  try {
                    B.sign(this.signers);
                  } catch {}
              return {
                txId: await this.connection.sendTransaction(T[0], {
                  skipPreflight: g,
                }),
                signedTx: T[0],
              };
            }
            throw new Error(
              "please provide owner in keypair format or signAllTransactions function",
            );
          },
          extInfo: s || {},
        }
      );
    }
    async buildV0MultiTx(e) {
      var u;
      let { extraPreBuildData: t = [], buildProps: n } = e,
        { transaction: o } = await this.buildV0(n),
        r = t.filter((l) => l.builder.instructions.length > 0),
        s = [o, ...r.map((l) => l.transaction)],
        a = [this.signers, ...r.map((l) => l.signers)],
        c = [
          ...this.instructionTypes,
          ...r.map((l) => l.instructionTypes).flat(),
        ];
      return (
        (u = this.owner) != null &&
          u.signer &&
          a.forEach((l) => {
            l.some((m) => m.publicKey.equals(this.owner.publicKey)) ||
              this.signers.push(this.owner.signer);
          }),
        s.forEach(async (l, m) => {
          l.sign(a[m]);
        }),
        {
          builder: this,
          transactions: s,
          signers: a,
          instructionTypes: c,
          buildProps: n,
          execute: async (l) => {
            var f;
            let {
              sequentially: m,
              onTxUpdate: d,
              recentBlockHash: p,
              skipPreflight: y = !0,
            } = l || {};
            if (
              (p && s.forEach((b) => (b.message.recentBlockhash = p)),
              En(s),
              (f = this.owner) != null && f.isKeyPair)
            ) {
              if (m) {
                let b = [];
                for (let g of s) {
                  let w = await this.connection.sendTransaction(g, {
                    skipPreflight: y,
                  });
                  await bo(this.connection, w), b.push(w);
                }
                return { txIds: b, signedTxs: s };
              }
              return {
                txIds: await Promise.all(
                  s.map(
                    async (b) =>
                      await this.connection.sendTransaction(b, {
                        skipPreflight: y,
                      }),
                  ),
                ),
                signedTxs: s,
              };
            }
            if (this.signAllTransactions) {
              let b = await this.signAllTransactions(s);
              if (m) {
                let g = 0,
                  w = [],
                  P = async () => {
                    if (!b[g]) return;
                    let T = await this.connection.sendTransaction(b[g], {
                      skipPreflight: y,
                    });
                    w.push({ txId: T, status: "sent", signedTx: b[g] }),
                      d == null || d([...w]),
                      g++;
                    let B = !1,
                      h = null,
                      x = null,
                      S = (K) => {
                        h !== null && clearInterval(h),
                          x !== null &&
                            this.connection.removeSignatureListener(x);
                        let I = w.findIndex((C) => C.txId === T);
                        if (I > -1) {
                          if (
                            w[I].status === "error" ||
                            w[I].status === "success"
                          )
                            return;
                          w[I].status = K.err ? "error" : "success";
                        }
                        d == null || d([...w]), K.err || P();
                      };
                    this.loopMultiTxStatus &&
                      (h = setInterval(async () => {
                        var K;
                        if (B) {
                          clearInterval(h);
                          return;
                        }
                        try {
                          let I = await this.connection.getTransaction(T, {
                            commitment: "confirmed",
                            maxSupportedTransactionVersion: 0,
                          });
                          I &&
                            ((B = !0),
                            clearInterval(h),
                            S({
                              err:
                                ((K = I.meta) == null ? void 0 : K.err) || null,
                            }),
                            console.log("tx status from getTransaction:", T));
                        } catch (I) {
                          (B = !0),
                            clearInterval(h),
                            console.error("getTransaction timeout:", I, T);
                        }
                      }, Or)),
                      (x = this.connection.onSignature(
                        T,
                        (K) => {
                          if (B) {
                            this.connection.removeSignatureListener(x);
                            return;
                          }
                          (B = !0), S(K);
                        },
                        "confirmed",
                      )),
                      this.connection.getSignatureStatus(T);
                  };
                return P(), { txIds: [], signedTxs: b };
              } else {
                let g = [];
                for (let w = 0; w < b.length; w += 1) {
                  let P = await this.connection.sendTransaction(b[w], {
                    skipPreflight: y,
                  });
                  g.push(P);
                }
                return { txIds: g, signedTxs: b };
              }
            }
            throw new Error(
              "please provide owner in keypair format or signAllTransactions function",
            );
          },
          extInfo: n || {},
        }
      );
    }
    async sizeCheckBuild(e) {
      var d;
      let m = e || {},
        { splitIns: t = [], computeBudgetConfig: n } = m,
        o = He(m, ["splitIns", "computeBudgetConfig"]),
        r = n ? yo(n) : { instructions: [], instructionTypes: [] },
        s = this.signers.reduce(
          (p, y) => X(N({}, p), { [y.publicKey.toBase58()]: y }),
          {},
        ),
        a = [],
        c = [],
        u = [],
        l = 0;
      if (
        (this.allInstructions.forEach((p) => {
          let y = [...u, p],
            f = n ? [...r.instructions, ...y] : y,
            g = [
              ...new Set(
                y
                  .map((w) =>
                    w.keys
                      .filter((P) => P.isSigner)
                      .map((P) => P.pubkey.toString()),
                  )
                  .flat(),
              ).values(),
            ].map((w) => new xe.PublicKey(w));
          if (
            p !== t[l] &&
            u.length < 12 &&
            (bi({ instructions: f, payer: this.feePayer, signers: g }) ||
              bi({ instructions: y, payer: this.feePayer, signers: g }))
          )
            u.push(p);
          else {
            if (u.length === 0) throw Error("item ins too big");
            (l += p === t[l] ? 1 : 0),
              bi({
                instructions: n ? [...r.instructions, ...u] : [...u],
                payer: this.feePayer,
                signers: g,
              })
                ? a.push(new xe.Transaction().add(...r.instructions, ...u))
                : a.push(new xe.Transaction().add(...u)),
              c.push(
                Array.from(
                  new Set(
                    u
                      .map((w) =>
                        w.keys
                          .filter((P) => P.isSigner)
                          .map((P) => P.pubkey.toString()),
                      )
                      .flat(),
                  ),
                )
                  .map((w) => s[w])
                  .filter((w) => w !== void 0),
              ),
              (u = [p]);
          }
        }),
        u.length > 0)
      ) {
        let y = [
          ...new Set(
            u
              .map((f) =>
                f.keys
                  .filter((b) => b.isSigner)
                  .map((b) => b.pubkey.toString()),
              )
              .flat(),
          ).values(),
        ]
          .map((f) => s[f])
          .filter((f) => f !== void 0);
        bi({
          instructions: n ? [...r.instructions, ...u] : [...u],
          payer: this.feePayer,
          signers: y.map((f) => f.publicKey),
        })
          ? a.push(new xe.Transaction().add(...r.instructions, ...u))
          : a.push(new xe.Transaction().add(...u)),
          c.push(y);
      }
      return (
        a.forEach((p) => (p.feePayer = this.feePayer)),
        (d = this.owner) != null &&
          d.signer &&
          c.forEach((p) => {
            p.some((y) => y.publicKey.equals(this.owner.publicKey)) ||
              p.push(this.owner.signer);
          }),
        {
          builder: this,
          transactions: a,
          signers: c,
          instructionTypes: this.instructionTypes,
          execute: async (p) => {
            var T;
            let {
                sequentially: y,
                onTxUpdate: f,
                skipTxCount: b = 0,
                recentBlockHash: g,
                skipPreflight: w = !0,
              } = p || {},
              P =
                g != null
                  ? g
                  : await ei(this.connection, this.blockhashCommitment);
            if (
              (a.forEach(async (B, h) => {
                (B.recentBlockhash = P), c[h].length && B.sign(...c[h]);
              }),
              En(a),
              (T = this.owner) != null && T.isKeyPair)
            ) {
              if (y) {
                let B = 0,
                  h = [];
                for (let x of a) {
                  if ((++B, B <= b)) {
                    h.push("tx skipped");
                    continue;
                  }
                  let S = await (0, xe.sendAndConfirmTransaction)(
                    this.connection,
                    x,
                    this.signers.find((K) =>
                      K.publicKey.equals(this.owner.publicKey),
                    )
                      ? this.signers
                      : [...this.signers, this.owner.signer],
                    { skipPreflight: w },
                  );
                  h.push(S);
                }
                return { txIds: h, signedTxs: a };
              }
              return {
                txIds: await Promise.all(
                  a.map(
                    async (B) =>
                      await this.connection.sendRawTransaction(B.serialize(), {
                        skipPreflight: w,
                      }),
                  ),
                ),
                signedTxs: a,
              };
            }
            if (this.signAllTransactions) {
              let B = await this.signAllTransactions(a.slice(b, a.length)),
                h = [...a.slice(0, b), ...B];
              if (y) {
                let x = 0,
                  S = [],
                  K = async () => {
                    if (!h[x]) return;
                    x < b &&
                      (S.push({ txId: "", status: "success", signedTx: h[x] }),
                      f == null || f([...S]),
                      x++,
                      K());
                    let I = await this.connection.sendRawTransaction(
                      h[x].serialize(),
                      { skipPreflight: w },
                    );
                    S.push({ txId: I, status: "sent", signedTx: h[x] }),
                      f == null || f([...S]),
                      x++;
                    let C = !1,
                      L = null,
                      O = null,
                      F = (W) => {
                        L !== null && clearInterval(L),
                          O !== null &&
                            this.connection.removeSignatureListener(O);
                        let D = S.findIndex((ee) => ee.txId === I);
                        if (D > -1) {
                          if (
                            S[D].status === "error" ||
                            S[D].status === "success"
                          )
                            return;
                          S[D].status = W.err ? "error" : "success";
                        }
                        f == null || f([...S]), W.err || K();
                      };
                    this.loopMultiTxStatus &&
                      (L = setInterval(async () => {
                        var W;
                        if (C) {
                          clearInterval(L);
                          return;
                        }
                        try {
                          let D = await this.connection.getTransaction(I, {
                            commitment: "confirmed",
                            maxSupportedTransactionVersion: 0,
                          });
                          D &&
                            ((C = !0),
                            clearInterval(L),
                            F({
                              err:
                                ((W = D.meta) == null ? void 0 : W.err) || null,
                            }),
                            console.log("tx status from getTransaction:", I));
                        } catch (D) {
                          (C = !0),
                            clearInterval(L),
                            console.error("getTransaction timeout:", D, I);
                        }
                      }, Or)),
                      (O = this.connection.onSignature(
                        I,
                        (W) => {
                          if (C) {
                            this.connection.removeSignatureListener(O);
                            return;
                          }
                          (C = !0), F(W);
                        },
                        "confirmed",
                      )),
                      this.connection.getSignatureStatus(I);
                  };
                return await K(), { txIds: S.map((I) => I.txId), signedTxs: h };
              } else {
                let x = [];
                for (let S = 0; S < h.length; S += 1) {
                  let K = await this.connection.sendRawTransaction(
                    h[S].serialize(),
                    { skipPreflight: w },
                  );
                  x.push(K);
                }
                return { txIds: x, signedTxs: h };
              }
            }
            throw new Error(
              "please provide owner in keypair format or signAllTransactions function",
            );
          },
          extInfo: o || {},
        }
      );
    }
    async sizeCheckBuildV0(e) {
      var P;
      let w = e || {},
        {
          computeBudgetConfig: t,
          splitIns: n = [],
          lookupTableCache: o = {},
          lookupTableAddress: r = [],
        } = w,
        s = He(w, [
          "computeBudgetConfig",
          "splitIns",
          "lookupTableCache",
          "lookupTableAddress",
        ]),
        a = N(N({}, this.cluster === "devnet" ? {} : Po), o),
        c = Array.from(new Set([...this.lookupTableAddress, ...r])),
        u = [];
      for (let T of c) a[T] === void 0 && u.push(new xe.PublicKey(T));
      let l = await Lr({ connection: this.connection, address: u });
      for (let [T, B] of Object.entries(l)) a[T] = B;
      let m = t ? yo(t) : { instructions: [], instructionTypes: [] },
        d = await ei(this.connection, this.blockhashCommitment),
        p = this.signers.reduce(
          (T, B) => X(N({}, T), { [B.publicKey.toBase58()]: B }),
          {},
        ),
        y = [],
        f = [],
        b = [],
        g = 0;
      if (
        (this.allInstructions.forEach((T) => {
          let B = [...b, T],
            h = t ? [...m.instructions, ...B] : B;
          if (
            T !== n[g] &&
            b.length < 12 &&
            (gi({
              instructions: h,
              payer: this.feePayer,
              lookupTableAddressAccount: a,
            }) ||
              gi({
                instructions: B,
                payer: this.feePayer,
                lookupTableAddressAccount: a,
              }))
          )
            b.push(T);
          else {
            if (b.length === 0) throw Error("item ins too big");
            g += T === n[g] ? 1 : 0;
            let x = {};
            for (let S of [...new Set(c)]) a[S] !== void 0 && (x[S] = a[S]);
            if (
              t &&
              gi({
                instructions: [...m.instructions, ...b],
                payer: this.feePayer,
                lookupTableAddressAccount: a,
                recentBlockhash: d,
              })
            ) {
              let S = new xe.TransactionMessage({
                payerKey: this.feePayer,
                recentBlockhash: d,
                instructions: [...m.instructions, ...b],
              }).compileToV0Message(Object.values(a));
              y.push(new xe.VersionedTransaction(S));
            } else {
              let S = new xe.TransactionMessage({
                payerKey: this.feePayer,
                recentBlockhash: d,
                instructions: [...b],
              }).compileToV0Message(Object.values(a));
              y.push(new xe.VersionedTransaction(S));
            }
            f.push(
              Array.from(
                new Set(
                  b
                    .map((S) =>
                      S.keys
                        .filter((K) => K.isSigner)
                        .map((K) => K.pubkey.toString()),
                    )
                    .flat(),
                ),
              )
                .map((S) => p[S])
                .filter((S) => S !== void 0),
            ),
              (b = [T]);
          }
        }),
        b.length > 0)
      ) {
        let B = [
          ...new Set(
            b
              .map((h) =>
                h.keys
                  .filter((x) => x.isSigner)
                  .map((x) => x.pubkey.toString()),
              )
              .flat(),
          ).values(),
        ]
          .map((h) => p[h])
          .filter((h) => h !== void 0);
        if (
          t &&
          gi({
            instructions: [...m.instructions, ...b],
            payer: this.feePayer,
            lookupTableAddressAccount: a,
            recentBlockhash: d,
          })
        ) {
          let h = new xe.TransactionMessage({
            payerKey: this.feePayer,
            recentBlockhash: d,
            instructions: [...m.instructions, ...b],
          }).compileToV0Message(Object.values(a));
          y.push(new xe.VersionedTransaction(h));
        } else {
          let h = new xe.TransactionMessage({
            payerKey: this.feePayer,
            recentBlockhash: d,
            instructions: [...b],
          }).compileToV0Message(Object.values(a));
          y.push(new xe.VersionedTransaction(h));
        }
        f.push(B);
      }
      return (
        (P = this.owner) != null &&
          P.signer &&
          f.forEach((T) => {
            T.some((B) => B.publicKey.equals(this.owner.publicKey)) ||
              T.push(this.owner.signer);
          }),
        {
          builder: this,
          transactions: y,
          buildProps: e,
          signers: f,
          instructionTypes: this.instructionTypes,
          execute: async (T) => {
            var I;
            let {
              sequentially: B,
              onTxUpdate: h,
              skipTxCount: x = 0,
              recentBlockHash: S,
              skipPreflight: K = !0,
            } = T || {};
            if (
              (y.map(async (C, L) => {
                f[L].length && C.sign(f[L]),
                  S && (C.message.recentBlockhash = S);
              }),
              En(y),
              (I = this.owner) != null && I.isKeyPair)
            ) {
              if (B) {
                let C = 0,
                  L = [];
                for (let O of y) {
                  if ((++C, C <= x)) {
                    console.log("skip tx: ", C), L.push("tx skipped");
                    continue;
                  }
                  let F = await this.connection.sendTransaction(O, {
                    skipPreflight: K,
                  });
                  await bo(this.connection, F), L.push(F);
                }
                return { txIds: L, signedTxs: y };
              }
              return {
                txIds: await Promise.all(
                  y.map(
                    async (C) =>
                      await this.connection.sendTransaction(C, {
                        skipPreflight: K,
                      }),
                  ),
                ),
                signedTxs: y,
              };
            }
            if (this.signAllTransactions) {
              let C = await this.signAllTransactions(y.slice(x, y.length)),
                L = [...y.slice(0, x), ...C];
              if (B) {
                let O = 0,
                  F = [],
                  W = async () => {
                    if (!L[O]) return;
                    if (O < x) {
                      F.push({ txId: "", status: "success", signedTx: L[O] }),
                        h == null || h([...F]),
                        O++,
                        W();
                      return;
                    }
                    let D = await this.connection.sendTransaction(L[O], {
                      skipPreflight: K,
                    });
                    F.push({ txId: D, status: "sent", signedTx: L[O] }),
                      h == null || h([...F]),
                      O++;
                    let ee = !1,
                      fe = null,
                      Ue = null,
                      wt = (Ke) => {
                        fe !== null && clearInterval(fe),
                          Ue !== null &&
                            this.connection.removeSignatureListener(Ue);
                        let Ge = F.findIndex((Ct) => Ct.txId === D);
                        if (Ge > -1) {
                          if (
                            F[Ge].status === "error" ||
                            F[Ge].status === "success"
                          )
                            return;
                          F[Ge].status = Ke.err ? "error" : "success";
                        }
                        h == null || h([...F]), Ke.err || W();
                      };
                    this.loopMultiTxStatus &&
                      (fe = setInterval(async () => {
                        var Ke;
                        if (ee) {
                          clearInterval(fe);
                          return;
                        }
                        try {
                          let Ge = await this.connection.getTransaction(D, {
                            commitment: "confirmed",
                            maxSupportedTransactionVersion: 0,
                          });
                          Ge &&
                            ((ee = !0),
                            clearInterval(fe),
                            wt({
                              err:
                                ((Ke = Ge.meta) == null ? void 0 : Ke.err) ||
                                null,
                            }),
                            console.log("tx status from getTransaction:", D));
                        } catch (Ge) {
                          (ee = !0),
                            clearInterval(fe),
                            console.error("getTransaction timeout:", Ge, D);
                        }
                      }, Or)),
                      (Ue = this.connection.onSignature(
                        D,
                        (Ke) => {
                          if (ee) {
                            this.connection.removeSignatureListener(Ue);
                            return;
                          }
                          (ee = !0), wt(Ke);
                        },
                        "confirmed",
                      )),
                      this.connection.getSignatureStatus(D);
                  };
                return W(), { txIds: [], signedTxs: L };
              } else {
                let O = [];
                for (let F = 0; F < L.length; F += 1) {
                  let W = await this.connection.sendTransaction(L[F], {
                    skipPreflight: K,
                  });
                  O.push(W);
                }
                return { txIds: O, signedTxs: L };
              }
            }
            throw new Error(
              "please provide owner in keypair format or signAllTransactions function",
            );
          },
          extInfo: s || {},
        }
      );
    }
  };
var ba = ((t) => ((t.ALL = "all"), (t.Strict = "strict"), t))(ba || {}),
  ga = ((s) => (
    (s.All = "all"),
    (s.Standard = "standard"),
    (s.Concentrated = "concentrated"),
    (s.AllFarm = "allFarm"),
    (s.StandardFarm = "standardFarm"),
    (s.ConcentratedFarm = "concentratedFarm"),
    s
  ))(ga || {});
var st = {
    BASE_HOST: "https://api-v3.raydium.io",
    OWNER_BASE_HOST: "https://owner-v1.raydium.io",
    SERVICE_BASE_HOST: "https://service.raydium.io",
    MONITOR_BASE_HOST: "https://monitor.raydium.io",
    SERVICE_1_BASE_HOST: "https://service-v1.raydium.io",
    SEND_TRANSACTION: "/send-transaction",
    FARM_ARP: "/main/farm/info",
    FARM_ARP_LINE: "/main/farm-apr-tv",
    CLMM_CONFIG: "/main/clmm-config",
    CPMM_CONFIG: "/main/cpmm-config",
    VERSION: "/main/version",
    CHECK_AVAILABILITY: "/v3/main/AvailabilityCheckAPI",
    RPCS: "/main/rpcs",
    INFO: "/main/info",
    STAKE_POOLS: "/main/stake-pools",
    CHAIN_TIME: "/main/chain-time",
    TOKEN_LIST: "/mint/list",
    MINT_INFO_ID: "/mint/ids",
    JUP_TOKEN_LIST: "https://tokens.jup.ag/tokens?tags=lst,community",
    POOL_LIST: "/pools/info/list",
    POOL_SEARCH_BY_ID: "/pools/info/ids",
    POOL_SEARCH_MINT: "/pools/info/mint",
    POOL_SEARCH_LP: "/pools/info/lps",
    POOL_KEY_BY_ID: "/pools/key/ids",
    POOL_LIQUIDITY_LINE: "/pools/line/liquidity",
    POOL_POSITION_LINE: "/pools/line/position",
    FARM_INFO: "/farms/info/ids",
    FARM_LP_INFO: "/farms/info/lp",
    FARM_KEYS: "/farms/key/ids",
    OWNER_CREATED_FARM: "/create-pool/{owner}",
    OWNER_IDO: "/main/ido/{owner}",
    OWNER_STAKE_FARMS: "/position/stake/{owner}",
    OWNER_LOCK_POSITION: "/position/clmm-lock/{owner}",
    IDO_KEYS: "/ido/key/ids",
    SWAP_HOST: "https://transaction-v1.raydium.io",
    SWAP_COMPUTE: "/compute/",
    SWAP_TX: "/transaction/",
    MINT_PRICE: "/mint/price",
    MIGRATE_CONFIG: "/main/migrate-lp",
    PRIORITY_FEE: "/main/auto-fee",
    CPMM_LOCK: "https://dynamic-ipfs.raydium.io/lock/cpmm/position",
  },
  Ip = N({}, st);
var Aa = "ray_tab_hash",
  Mr = "ray_req_hash",
  il = () => {
    if (typeof window === void 0) return "";
    let i = sessionStorage.getItem(Aa);
    return i || ((i = `ray-${Date.now()}`), sessionStorage.setItem(Aa, i)), i;
  },
  ho = async (n) => {
    var o = n,
      { logCount: i = 1e3, removeLastLog: e } = o,
      t = He(o, ["logCount", "removeLastLog"]);
    if (typeof window === void 0) return new Promise((s) => s());
    let r = JSON.parse(localStorage.getItem(Mr) || "[]").slice(0, i - 1);
    e && r.pop(),
      new Blob([JSON.stringify(t.data)]).size > 1024 &&
        (t.data = JSON.stringify(t.data).substring(0, 200) + "..."),
      r.unshift(X(N({}, t), { time: Date.now(), session: il() }));
    try {
      localStorage.setItem(Mr, JSON.stringify(r));
    } catch {
      if (e) {
        let s = !1,
          a = JSON.stringify(t.data).substring(0, 100);
        for (r[0].data = a + (a.length > 100 ? "..." : ""); !s; ) {
          r.pop();
          let c = JSON.stringify(t.data).substring(0, 100);
          r[0].data = c + (c.length > 100 ? "..." : "");
          try {
            localStorage.setItem(Mr, JSON.stringify(r)), (s = !0);
          } catch {
            s = !1;
          }
        }
        return new Promise((c) => c());
      }
      return ho(X(N({}, t), { logCount: i, removeLastLog: !0 }));
    }
  };
var Ii = ye("Raydium_Api"),
  wa = new Map();
async function Bp(i, e, t = 1e3) {
  let n;
  for (; n == null; )
    try {
      Ii.debug(`Request ${i} through endlessRetry`), (n = await e());
    } catch (o) {
      Ii.error(`Request ${i} failed, retry after ${t} ms`, o), await ta(t);
    }
  return n;
}
var To = class {
  constructor({
    cluster: e,
    timeout: t,
    logRequests: n,
    logCount: o,
    urlConfigs: r,
  }) {
    (this.cluster = e),
      (this.urlConfigs = r || {}),
      (this.logCount = o || 1e3),
      (this.api = Pa.default.create({
        baseURL: this.urlConfigs.BASE_HOST || st.BASE_HOST,
        timeout: t,
      })),
      this.api.interceptors.request.use(
        (s) => {
          let { method: a, baseURL: c, url: u } = s;
          return (
            Ii.debug(`${a == null ? void 0 : a.toUpperCase()} ${c}${u}`), s
          );
        },
        (s) => (Ii.error("Request failed"), Promise.reject(s)),
      ),
      this.api.interceptors.response.use(
        (s) => {
          let { config: a, data: c, status: u } = s,
            { method: l, baseURL: m, url: d } = a;
          return (
            n &&
              ho({
                status: u,
                url: `${m}${d}`,
                params: a.params,
                data: c,
                logCount: this.logCount,
              }),
            Ii.debug(`${l == null ? void 0 : l.toUpperCase()} ${m}${d}  ${u}`),
            c
          );
        },
        (s) => {
          let { config: a, response: c = {} } = s,
            { status: u } = c,
            { method: l, baseURL: m, url: d } = a;
          return (
            n &&
              ho({
                status: u,
                url: `${m}${d}`,
                params: a.params,
                data: s.message,
                logCount: this.logCount,
              }),
            Ii.error(`${l.toUpperCase()} ${m}${d} ${u || s.message}`),
            Promise.reject(s)
          );
        },
      );
  }
  async getClmmConfigs() {
    return (await this.api.get(this.urlConfigs.CLMM_CONFIG || st.CLMM_CONFIG))
      .data;
  }
  async getCpmmConfigs() {
    return (await this.api.get(this.urlConfigs.CPMM_CONFIG || st.CPMM_CONFIG))
      .data;
  }
  async getClmmPoolLines(e) {
    return (
      await this.api.get(
        `${this.urlConfigs.POOL_LIQUIDITY_LINE || st.POOL_LIQUIDITY_LINE}?pool_id=${e}`,
      )
    ).data;
  }
  async getBlockSlotCountForSecond(e) {
    if (!e) return 2;
    let n = (
      await Pa.default.post(e, {
        id: "getRecentPerformanceSamples",
        jsonrpc: "2.0",
        method: "getRecentPerformanceSamples",
        params: [4],
      })
    ).result.map((o) => o.numSlots);
    return n.reduce((o, r) => o + r, 0) / n.length / 60;
  }
  async getChainTimeOffset() {
    return (await this.api.get(this.urlConfigs.CHAIN_TIME || st.CHAIN_TIME))
      .data;
  }
  async getRpcs() {
    return this.api.get(this.urlConfigs.RPCS || st.RPCS);
  }
  async getTokenList() {
    return (await this.api.get(this.urlConfigs.TOKEN_LIST || st.TOKEN_LIST))
      .data;
  }
  async getJupTokenList() {
    return this.api.get("", {
      baseURL: this.urlConfigs.JUP_TOKEN_LIST || st.JUP_TOKEN_LIST,
    });
  }
  async getTokenInfo(e) {
    return (
      await this.api.get(
        (this.urlConfigs.MINT_INFO_ID || st.MINT_INFO_ID) +
          `?mints=${e.map((n) => n.toString()).join(",")}`,
      )
    ).data;
  }
  async getPoolList(e = {}) {
    let {
      type: t = "all",
      sort: n = "liquidity",
      order: o = "desc",
      page: r = 0,
      pageSize: s = 100,
    } = e;
    return (
      await this.api.get(
        (this.urlConfigs.POOL_LIST || st.POOL_LIST) +
          `?poolType=${t}&poolSortField=${n}&sortType=${o}&page=${r}&pageSize=${s}`,
      )
    ).data;
  }
  async fetchPoolById(e) {
    let { ids: t } = e;
    return (
      await this.api.get(
        (this.urlConfigs.POOL_SEARCH_BY_ID || st.POOL_SEARCH_BY_ID) +
          `?ids=${t}`,
      )
    ).data;
  }
  async fetchPoolKeysById(e) {
    let { idList: t } = e,
      n = [],
      o = t.filter((s) => (wa.has(s) ? (n.push(wa.get(s)), !1) : !0)),
      r = [];
    return (
      o.length &&
        ((r = (
          await this.api.get(
            (this.urlConfigs.POOL_KEY_BY_ID || st.POOL_KEY_BY_ID) +
              `?ids=${o.join(",")}`,
          )
        ).data.filter(Boolean)),
        r.forEach((a) => {
          wa.set(a.id, a);
        })),
      n.concat(r)
    );
  }
  async fetchPoolByMints(e) {
    let {
        mint1: t,
        mint2: n,
        type: o = "all",
        sort: r = "default",
        order: s = "desc",
        page: a = 1,
      } = e,
      [c, u] = [
        t && pt(t).toBase58(),
        n && n !== "undefined" ? pt(n).toBase58() : "",
      ],
      [l, m] = u && c > u ? [u, c] : [c, u];
    return (
      await this.api.get(
        (this.urlConfigs.POOL_SEARCH_MINT || st.POOL_SEARCH_MINT) +
          `?mint1=${l}&mint2=${m}&poolType=${o}&poolSortField=${r}&sortType=${s}&pageSize=100&page=${a}`,
      )
    ).data;
  }
  async fetchFarmInfoById(e) {
    let { ids: t } = e;
    return (
      await this.api.get(
        (this.urlConfigs.FARM_INFO || st.FARM_INFO) + `?ids=${t}`,
      )
    ).data;
  }
  async fetchFarmKeysById(e) {
    let { ids: t } = e;
    return (
      await this.api.get(
        (this.urlConfigs.FARM_KEYS || st.FARM_KEYS) + `?ids=${t}`,
      )
    ).data;
  }
  async fetchAvailabilityStatus() {
    return (
      await this.api.get(
        this.urlConfigs.CHECK_AVAILABILITY || st.CHECK_AVAILABILITY,
      )
    ).data;
  }
};
var Sm = require("lodash");
var Nr =
    "please provide owner in load() initialization or you can set by calling raydium.setOwner(owner)",
  ol =
    "please provide connection in load() initialization or set it by raydium.setConnection(connection)";
var oi = require("@solana/web3.js");
var Qe = require("@solana/spl-token");
var ka = (...i) =>
    i
      .map((e) => {
        try {
          return typeof e == "object" ? JSON.stringify(e) : e;
        } catch {
          return e;
        }
      })
      .join(", "),
  Fe = class {
    constructor({ scope: e, moduleName: t }) {
      this.disabled = !1;
      (this.scope = e), (this.logger = ye(t));
    }
    createTxBuilder(e) {
      return (
        this.scope.checkOwner(),
        new ko({
          connection: this.scope.connection,
          feePayer: e || this.scope.ownerPubKey,
          cluster: this.scope.cluster,
          owner: this.scope.owner,
          blockhashCommitment: this.scope.blockhashCommitment,
          loopMultiTxStatus: this.scope.loopMultiTxStatus,
          api: this.scope.api,
          signAllTransactions: this.scope.signAllTransactions,
        })
      );
    }
    logDebug(...e) {
      this.logger.debug(ka(e));
    }
    logInfo(...e) {
      this.logger.info(ka(e));
    }
    logAndCreateError(...e) {
      let t = ka(e);
      throw new Error(t);
    }
    checkDisabled() {
      (this.disabled || !this.scope) &&
        this.logAndCreateError("module not working");
    }
  };
var Xr = require("@solana/web3.js"),
  Pl = be(require("bn.js"));
var Et = require("@solana/spl-token");
var xo = require("@solana/web3.js"),
  Al = be(require("bn.js"));
var wl = require("@solana/spl-token");
function xp(i) {
  return (
    i instanceof Uint8Array ||
    (i != null && typeof i == "object" && i.constructor.name === "Uint8Array")
  );
}
function ha(i, ...e) {
  if (!xp(i)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(i.length))
    throw new Error(
      `Uint8Array expected of length ${e}, not of length=${i.length}`,
    );
}
function Ta(i, e = !0) {
  if (i.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && i.finished) throw new Error("Hash#digest() has already been called");
}
function rl(i, e) {
  ha(i);
  let t = e.outputLen;
  if (i.length < t)
    throw new Error(
      `digestInto() expects output buffer of length at least ${t}`,
    );
}
var _r = (i) => new DataView(i.buffer, i.byteOffset, i.byteLength),
  nn = (i, e) => (i << (32 - e)) | (i >>> e);
var uA = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Sp(i) {
  if (typeof i != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof i}`);
  return new Uint8Array(new TextEncoder().encode(i));
}
function Ia(i) {
  return typeof i == "string" && (i = Sp(i)), ha(i), i;
}
var vr = class {
    clone() {
      return this._cloneInto();
    }
  },
  cA = {}.toString;
function sl(i) {
  let e = (n) => i().update(Ia(n)).digest(),
    t = i();
  return (
    (e.outputLen = t.outputLen),
    (e.blockLen = t.blockLen),
    (e.create = () => i()),
    e
  );
}
function Kp(i, e, t, n) {
  if (typeof i.setBigUint64 == "function") return i.setBigUint64(e, t, n);
  let o = BigInt(32),
    r = BigInt(4294967295),
    s = Number((t >> o) & r),
    a = Number(t & r),
    c = n ? 4 : 0,
    u = n ? 0 : 4;
  i.setUint32(e + c, s, n), i.setUint32(e + u, a, n);
}
var al = (i, e, t) => (i & e) ^ (~i & t),
  ul = (i, e, t) => (i & e) ^ (i & t) ^ (e & t),
  Vr = class extends vr {
    constructor(e, t, n, o) {
      super(),
        (this.blockLen = e),
        (this.outputLen = t),
        (this.padOffset = n),
        (this.isLE = o),
        (this.finished = !1),
        (this.length = 0),
        (this.pos = 0),
        (this.destroyed = !1),
        (this.buffer = new Uint8Array(e)),
        (this.view = _r(this.buffer));
    }
    update(e) {
      Ta(this);
      let { view: t, buffer: n, blockLen: o } = this;
      e = Ia(e);
      let r = e.length;
      for (let s = 0; s < r; ) {
        let a = Math.min(o - this.pos, r - s);
        if (a === o) {
          let c = _r(e);
          for (; o <= r - s; s += o) this.process(c, s);
          continue;
        }
        n.set(e.subarray(s, s + a), this.pos),
          (this.pos += a),
          (s += a),
          this.pos === o && (this.process(t, 0), (this.pos = 0));
      }
      return (this.length += e.length), this.roundClean(), this;
    }
    digestInto(e) {
      Ta(this), rl(e, this), (this.finished = !0);
      let { buffer: t, view: n, blockLen: o, isLE: r } = this,
        { pos: s } = this;
      (t[s++] = 128),
        this.buffer.subarray(s).fill(0),
        this.padOffset > o - s && (this.process(n, 0), (s = 0));
      for (let m = s; m < o; m++) t[m] = 0;
      Kp(n, o - 8, BigInt(this.length * 8), r), this.process(n, 0);
      let a = _r(e),
        c = this.outputLen;
      if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      let u = c / 4,
        l = this.get();
      if (u > l.length) throw new Error("_sha2: outputLen bigger than state");
      for (let m = 0; m < u; m++) a.setUint32(4 * m, l[m], r);
    }
    digest() {
      let { buffer: e, outputLen: t } = this;
      this.digestInto(e);
      let n = e.slice(0, t);
      return this.destroy(), n;
    }
    _cloneInto(e) {
      e || (e = new this.constructor()), e.set(...this.get());
      let {
        blockLen: t,
        buffer: n,
        length: o,
        finished: r,
        destroyed: s,
        pos: a,
      } = this;
      return (
        (e.length = o),
        (e.pos = a),
        (e.finished = r),
        (e.destroyed = s),
        o % t && e.buffer.set(n),
        e
      );
    }
  };
var Cp = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Dn = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  Wn = new Uint32Array(64),
  Ba = class extends Vr {
    constructor() {
      super(64, 32, 8, !1),
        (this.A = Dn[0] | 0),
        (this.B = Dn[1] | 0),
        (this.C = Dn[2] | 0),
        (this.D = Dn[3] | 0),
        (this.E = Dn[4] | 0),
        (this.F = Dn[5] | 0),
        (this.G = Dn[6] | 0),
        (this.H = Dn[7] | 0);
    }
    get() {
      let { A: e, B: t, C: n, D: o, E: r, F: s, G: a, H: c } = this;
      return [e, t, n, o, r, s, a, c];
    }
    set(e, t, n, o, r, s, a, c) {
      (this.A = e | 0),
        (this.B = t | 0),
        (this.C = n | 0),
        (this.D = o | 0),
        (this.E = r | 0),
        (this.F = s | 0),
        (this.G = a | 0),
        (this.H = c | 0);
    }
    process(e, t) {
      for (let m = 0; m < 16; m++, t += 4) Wn[m] = e.getUint32(t, !1);
      for (let m = 16; m < 64; m++) {
        let d = Wn[m - 15],
          p = Wn[m - 2],
          y = nn(d, 7) ^ nn(d, 18) ^ (d >>> 3),
          f = nn(p, 17) ^ nn(p, 19) ^ (p >>> 10);
        Wn[m] = (f + Wn[m - 7] + y + Wn[m - 16]) | 0;
      }
      let { A: n, B: o, C: r, D: s, E: a, F: c, G: u, H: l } = this;
      for (let m = 0; m < 64; m++) {
        let d = nn(a, 6) ^ nn(a, 11) ^ nn(a, 25),
          p = (l + d + al(a, c, u) + Cp[m] + Wn[m]) | 0,
          f = ((nn(n, 2) ^ nn(n, 13) ^ nn(n, 22)) + ul(n, o, r)) | 0;
        (l = u),
          (u = c),
          (c = a),
          (a = (s + p) | 0),
          (s = r),
          (r = o),
          (o = n),
          (n = (p + f) | 0);
      }
      (n = (n + this.A) | 0),
        (o = (o + this.B) | 0),
        (r = (r + this.C) | 0),
        (s = (s + this.D) | 0),
        (a = (a + this.E) | 0),
        (c = (c + this.F) | 0),
        (u = (u + this.G) | 0),
        (l = (l + this.H) | 0),
        this.set(n, o, r, s, a, c, u, l);
    }
    roundClean() {
      Wn.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  };
var cl = sl(() => new Ba());
var fl = require("@solana/web3.js"),
  xi = be(require("bn.js"));
var z = require("@solana/buffer-layout"),
  Bi = z.Layout,
  ll = z.Structure,
  ml = z.Union,
  Rp = z.BitStructure,
  Er = z.UInt,
  xa = z.Blob,
  Lp = z.greedy,
  Fr = z.u8,
  dn = z.u16,
  Op = z.u24,
  Io = z.u32,
  Mp = z.u40,
  Np = z.u48,
  Sa = z.nu64,
  vp = z.u16be,
  _p = z.u24be,
  Vp = z.u32be,
  Ep = z.u40be,
  Fp = z.u48be,
  Dp = z.nu64be,
  Wp = z.s8,
  qp = z.s16,
  Up = z.s24,
  Ne = z.s32,
  Gp = z.s40,
  Xp = z.s48,
  zp = z.ns64,
  Qp = z.s16be,
  Yp = z.s24be,
  Hp = z.s32be,
  jp = z.s40be,
  Zp = z.s48be,
  $p = z.ns64be,
  Jp = z.f32,
  ef = z.f32be,
  tf = z.f64,
  nf = z.f64be;
var dl = z.seq,
  pl = z.union,
  of = z.unionLayoutDiscriminator,
  Te = z.blob,
  rf = z.cstr,
  sf = z.utf8,
  Dr = z.bits,
  Wr = z.offset;
var qn = class extends Bi {
    constructor(t, n, o) {
      super(t, o);
      (this.blob = Te(t)), (this.signed = n);
    }
    decode(t, n = 0) {
      let o = new xi.default(this.blob.decode(t, n), 10, "le");
      return this.signed ? o.fromTwos(this.span * 8).clone() : o;
    }
    encode(t, n, o = 0) {
      return (
        typeof t == "number" && (t = new xi.default(t)),
        this.signed && (t = t.toTwos(this.span * 8)),
        this.blob.encode(t.toArrayLike(Buffer, "le", this.span), n, o)
      );
    }
  },
  Bo = class extends Bi {
    constructor(t) {
      super(8, t);
      (this._lower = Dr(Io(), !1)), (this._upper = Dr(Io(), !1));
    }
    addBoolean(t) {
      this._lower.fields.length < 32
        ? this._lower.addBoolean(t)
        : this._upper.addBoolean(t);
    }
    decode(t, n = 0) {
      let o = this._lower.decode(t, n),
        r = this._upper.decode(t, n + this._lower.span);
      return N(N({}, o), r);
    }
    encode(t, n, o = 0) {
      return (
        this._lower.encode(t, n, o) +
        this._upper.encode(t, n, o + this._lower.span)
      );
    }
  };
function G(i) {
  return new Er(1, i);
}
function ct(i) {
  return new Er(4, i);
}
function k(i) {
  return new qn(8, !1, i);
}
function ne(i) {
  return new qn(16, !1, i);
}
function Ca(i) {
  return new qn(1, !0, i);
}
function ii(i) {
  return new qn(8, !0, i);
}
function Ra(i) {
  return new qn(16, !0, i);
}
var pn = class extends Bi {
  constructor(t, n, o, r) {
    super(t.span, r);
    (this.layout = t), (this.decoder = n), (this.encoder = o);
  }
  decode(t, n) {
    return this.decoder(this.layout.decode(t, n));
  }
  encode(t, n, o) {
    return this.layout.encode(this.encoder(t), n, o);
  }
  getSpan(t, n) {
    return this.layout.getSpan(t, n);
  }
};
function M(i) {
  return new pn(
    Te(32),
    (e) => new fl.PublicKey(e),
    (e) => e.toBuffer(),
    i,
  );
}
var qr = class extends Bi {
  constructor(t, n) {
    super(-1, n);
    (this.layout = t), (this.discriminator = Fr());
  }
  encode(t, n, o = 0) {
    return t == null
      ? this.discriminator.encode(0, n, o)
      : (this.discriminator.encode(1, n, o),
        this.layout.encode(t, n, o + 1) + 1);
  }
  decode(t, n = 0) {
    let o = this.discriminator.decode(t, n);
    if (o === 0) return null;
    if (o === 1) return this.layout.decode(t, n + 1);
    throw new Error("Invalid option " + this.property);
  }
  getSpan(t, n = 0) {
    let o = this.discriminator.decode(t, n);
    if (o === 0) return 1;
    if (o === 1) return this.layout.getSpan(t, n + 1) + 1;
    throw new Error("Invalid option " + this.property);
  }
};
function af(i, e) {
  return new qr(i, e);
}
function _e(i) {
  return new pn(Fr(), yl, bl, i);
}
function yl(i) {
  if (i === 0) return !1;
  if (i === 1) return !0;
  throw new Error("Invalid bool: " + i);
}
function bl(i) {
  return i ? 1 : 0;
}
function uf(i, e) {
  let t = Io("length"),
    n = V([t, j(i, Wr(t, -t.span), "values")]);
  return new pn(
    n,
    ({ values: o }) => o,
    (o) => ({ values: o }),
    e,
  );
}
function cf(i, e, t) {
  let n = V([k("tag"), e.replicate("data")]);
  function o({ tag: r, data: s }) {
    if (!r.eq(i))
      throw new Error(
        "Invalid tag, expected: " +
          i.toString("hex") +
          ", got: " +
          r.toString("hex"),
      );
    return s;
  }
  return new pn(n, o, (r) => ({ tag: i, data: r }), t);
}
function gl(i) {
  let e = Io("length"),
    t = V([e, Te(Wr(e, -e.span), "data")]);
  return new pn(
    t,
    ({ data: n }) => n,
    (n) => ({ data: n }),
    i,
  );
}
function lf(i) {
  return new pn(
    gl(),
    (e) => e.toString("utf-8"),
    (e) => Buffer.from(e, "utf-8"),
    i,
  );
}
function mf(i, e) {
  let t = pl(Fr(), e);
  return i.forEach((n, o) => t.addVariant(o, n, n.property)), t;
}
function df(i, e, t) {
  let n = V([j(i, e, "values")]);
  return new pn(
    n,
    ({ values: o }) => o,
    (o) => ({ values: o }),
    t,
  );
}
var Ur = class extends ll {
  decode(e, t) {
    return super.decode(e, t);
  }
};
function V(i, e, t) {
  return new Ur(i, e, t);
}
var Gr = class extends ml {
  encodeInstruction(e) {
    let t = Math.max(...Object.values(this.registry).map((o) => o.span)),
      n = Buffer.alloc(t);
    return n.slice(0, this.encode(e, n));
  }
  decodeInstruction(e) {
    return this.decode(e);
  }
};
function pf(i, e, t) {
  return new Gr(i, e, t);
}
var Ka = class extends xa {
  decode(e, t) {
    let n = super.decode(e, t);
    if (!n.every((o) => o === 0)) throw new Error("nonzero padding bytes");
    return n;
  }
};
function ff(i) {
  return new Ka(i);
}
function j(i, e, t) {
  let n,
    o =
      typeof e == "number"
        ? e
        : (0, xi.isBN)(e)
          ? e.toNumber()
          : new Proxy(e, {
              get(r, s) {
                if (!n) {
                  let a = Reflect.get(r, "count");
                  (n = (0, xi.isBN)(a) ? a.toNumber() : a),
                    Reflect.set(r, "count", n);
                }
                return Reflect.get(r, s);
              },
              set(r, s, a) {
                return s === "count" && (n = a), Reflect.set(r, s, a);
              },
            });
  return dl(i, o, t);
}
var Tn = V([
  M("mint"),
  M("owner"),
  k("amount"),
  ct("delegateOption"),
  M("delegate"),
  G("state"),
  ct("isNativeOption"),
  k("isNative"),
  k("delegatedAmount"),
  ct("closeAuthorityOption"),
  M("closeAuthority"),
]);
var CA = ye("Raydium_Util");
function La({ owner: i, solAccountResp: e, tokenAccountResp: t }) {
  let n = [],
    o = [];
  for (let { pubkey: r, account: s } of t.value) {
    let a = Tn.decode(s.data),
      { mint: c, amount: u } = a;
    n.push({
      publicKey: r,
      mint: c,
      amount: u,
      isAssociated: oe(i, c, s.owner).publicKey.equals(r),
      isNative: !1,
      programId: s.owner,
    }),
      o.push({ pubkey: r, accountInfo: a, programId: s.owner });
  }
  return (
    e &&
      n.push({
        mint: xo.PublicKey.default,
        amount: new Al.default(String(e.lamports)),
        isNative: !0,
        programId: e.owner,
      }),
    { tokenAccounts: n, tokenAccountRawInfos: o }
  );
}
function De({
  fromPublicKey: i,
  programId: e = wl.TOKEN_PROGRAM_ID,
  assignSeed: t,
}) {
  let n = t
    ? btoa(t).slice(0, 32)
    : xo.Keypair.generate().publicKey.toBase58().slice(0, 32);
  return { publicKey: yf(i, n, e), seed: n };
}
function yf(i, e, t) {
  let n = Buffer.concat([i.toBuffer(), Buffer.from(e), t.toBuffer()]),
    o = cl(n);
  return new xo.PublicKey(o);
}
function zr(i) {
  let {
    mint: e,
    tokenAccount: t,
    owner: n,
    programId: o = Et.TOKEN_PROGRAM_ID,
  } = i;
  return (0, Et.createInitializeAccountInstruction)(t, e, n, o);
}
function fn(i) {
  let {
    tokenAccount: e,
    payer: t,
    multiSigners: n = [],
    owner: o,
    programId: r = Et.TOKEN_PROGRAM_ID,
  } = i;
  return (0, Et.createCloseAccountInstruction)(e, t, o, n, r);
}
async function yn(i) {
  let {
      connection: e,
      amount: t,
      commitment: n,
      payer: o,
      owner: r,
      skipCloseAccount: s,
    } = i,
    a = await e.getMinimumBalanceForRentExemption(Tn.span, n),
    c = J(t).add(new Pl.default(a)),
    u = De({ fromPublicKey: o, programId: Et.TOKEN_PROGRAM_ID });
  return {
    addresses: { newAccount: u.publicKey },
    signers: [],
    instructions: [
      Xr.SystemProgram.createAccountWithSeed({
        fromPubkey: o,
        basePubkey: o,
        seed: u.seed,
        newAccountPubkey: u.publicKey,
        lamports: c.toNumber(),
        space: Tn.span,
        programId: Et.TOKEN_PROGRAM_ID,
      }),
      zr({
        mint: new Xr.PublicKey(nt.address),
        tokenAccount: u.publicKey,
        owner: r,
        programId: Et.TOKEN_PROGRAM_ID,
      }),
    ],
    instructionTypes: [U.CreateAccount, U.InitAccount],
    endInstructionTypes: s ? [] : [U.CloseAccount],
    endInstructions: s
      ? []
      : [fn({ tokenAccount: u.publicKey, payer: o, owner: r })],
  };
}
function Oa({
  source: i,
  destination: e,
  owner: t,
  amount: n,
  multiSigners: o = [],
  tokenProgram: r = Et.TOKEN_PROGRAM_ID,
}) {
  return (0, Et.createTransferInstruction)(i, e, t, BigInt(String(n)), o, r);
}
var So = class extends Fe {
  constructor(t) {
    super(t);
    this._tokenAccounts = [];
    this._tokenAccountRawInfos = [];
    this._accountListener = [];
    this._clientOwnedToken = !1;
    this._notSubscribeAccountChange = !1;
    this._accountFetchTime = 0;
    let {
      tokenAccounts: n,
      tokenAccountRawInfos: o,
      notSubscribeAccountChange: r,
    } = t;
    (this._tokenAccounts = n || []),
      (this._tokenAccountRawInfos = o || []),
      (this._notSubscribeAccountChange = r != null ? r : !0),
      (this._clientOwnedToken = !!(n || o));
  }
  get tokenAccounts() {
    return this._tokenAccounts;
  }
  get tokenAccountRawInfos() {
    return this._tokenAccountRawInfos;
  }
  set notSubscribeAccountChange(t) {
    this._notSubscribeAccountChange = t;
  }
  updateTokenAccount({ tokenAccounts: t, tokenAccountRawInfos: n }) {
    return (
      t && (this._tokenAccounts = t),
      n && (this._tokenAccountRawInfos = n),
      this._accountChangeListenerId &&
        this.scope.connection.removeAccountChangeListener(
          this._accountChangeListenerId,
        ),
      (this._accountChangeListenerId = void 0),
      (this._clientOwnedToken = !0),
      this
    );
  }
  addAccountChangeListener(t) {
    return this._accountListener.push(t), this;
  }
  removeAccountChangeListener(t) {
    return (
      (this._accountListener = this._accountListener.filter((n) => n !== t)),
      this
    );
  }
  getAssociatedTokenAccount(t, n) {
    return oe(this.scope.ownerPubKey, t, n).publicKey;
  }
  resetTokenAccounts() {
    this._clientOwnedToken ||
      ((this._tokenAccounts = []), (this._tokenAccountRawInfos = []));
  }
  async fetchWalletTokenAccounts(t) {
    if (
      this._clientOwnedToken ||
      (!(t != null && t.forceUpdate) &&
        this._tokenAccounts.length &&
        Date.now() - this._accountFetchTime <
          (this._notSubscribeAccountChange ? 1e3 * 5 : 1e3 * 60 * 3))
    )
      return {
        tokenAccounts: this._tokenAccounts,
        tokenAccountRawInfos: this._tokenAccountRawInfos,
      };
    this.scope.checkOwner();
    let o = N(N({}, {}), t),
      [r, s, a] = await Promise.all([
        this.scope.connection.getAccountInfo(
          this.scope.ownerPubKey,
          o.commitment,
        ),
        this.scope.connection.getTokenAccountsByOwner(
          this.scope.ownerPubKey,
          { programId: Qe.TOKEN_PROGRAM_ID },
          o.commitment,
        ),
        this.scope.connection.getTokenAccountsByOwner(
          this.scope.ownerPubKey,
          { programId: Qe.TOKEN_2022_PROGRAM_ID },
          o.commitment,
        ),
      ]),
      { tokenAccounts: c, tokenAccountRawInfos: u } = La({
        owner: this.scope.ownerPubKey,
        solAccountResp: r,
        tokenAccountResp: {
          context: s.context,
          value: [...s.value, ...a.value],
        },
      });
    return (
      (this._tokenAccounts = c),
      (this._tokenAccountRawInfos = u),
      (this._accountFetchTime = Date.now()),
      this._notSubscribeAccountChange ||
        (this._accountChangeListenerId &&
          this.scope.connection.removeAccountChangeListener(
            this._accountChangeListenerId,
          ),
        (this._accountChangeListenerId = this.scope.connection.onAccountChange(
          this.scope.ownerPubKey,
          () => {
            this.fetchWalletTokenAccounts({ forceUpdate: !0 }),
              this._accountListener.forEach((l) =>
                l({
                  tokenAccounts: this._tokenAccounts,
                  tokenAccountRawInfos: this._tokenAccountRawInfos,
                }),
              );
          },
          { commitment: t == null ? void 0 : t.commitment },
        ))),
      { tokenAccounts: c, tokenAccountRawInfos: u }
    );
  }
  clearAccountChangeCkb() {
    this._accountChangeListenerId !== void 0 &&
      this.scope.connection.removeAccountChangeListener(
        this._accountChangeListenerId,
      );
  }
  async getCreatedTokenAccount({
    mint: t,
    programId: n = Qe.TOKEN_PROGRAM_ID,
    associatedOnly: o = !0,
  }) {
    await this.fetchWalletTokenAccounts();
    let r = this._tokenAccounts
        .filter(({ mint: a }) => (a == null ? void 0 : a.equals(t)))
        .sort((a, c) => (a.amount.lt(c.amount) ? 1 : -1)),
      s = this.getAssociatedTokenAccount(t, n);
    for (let a of r) {
      let { publicKey: c } = a;
      if (c && (!o || (o && s.equals(c)))) return c;
    }
  }
  async getOrCreateTokenAccount(t) {
    var f, b, g, w;
    await this.fetchWalletTokenAccounts();
    let {
        mint: n,
        createInfo: o,
        associatedOnly: r,
        owner: s,
        notUseTokenAccount: a = !1,
        skipCloseAccount: c = !1,
        checkCreateATAOwner: u = !1,
        assignSeed: l,
      } = t,
      m = new oi.PublicKey(t.tokenProgram || Qe.TOKEN_PROGRAM_ID),
      d = this.getAssociatedTokenAccount(n, new oi.PublicKey(m)),
      p = (a ? [] : this.tokenAccountRawInfos)
        .filter(
          (P) => P.accountInfo.mint.equals(n) && (!r || P.pubkey.equals(d)),
        )
        .sort((P, T) =>
          P.accountInfo.amount.lt(T.accountInfo.amount) ? 1 : -1,
        );
    if (o === void 0 || p.length > 0)
      return p.length > 0 ? { account: p[0].pubkey } : {};
    let y = {
      instructions: [],
      endInstructions: [],
      signers: [],
      instructionTypes: [],
      endInstructionTypes: [],
    };
    if (r) {
      let P = (0, Qe.createAssociatedTokenAccountInstruction)(s, d, s, n, m),
        T = this.tokenAccountRawInfos.find((B) => B.pubkey.equals(d));
      if (u) {
        let B = await this.scope.connection.getAccountInfo(d);
        if (B === null)
          (f = y.instructions) == null || f.push(P),
            y.instructionTypes.push(U.CreateATA);
        else if (
          !(
            B.owner.equals(m) &&
            Qe.AccountLayout.decode(B.data).mint.equals(n) &&
            Qe.AccountLayout.decode(B.data).owner.equals(s)
          )
        )
          throw Error(
            `create ata check error -> mint: ${n.toString()}, ata: ${d.toString()}`,
          );
      } else
        T === void 0 &&
          (y.instructions.push(P), y.instructionTypes.push(U.CreateATA));
      if (n.equals($) && o.amount) {
        let B = await yn({
          connection: this.scope.connection,
          owner: this.scope.ownerPubKey,
          payer: o.payer || this.scope.ownerPubKey,
          amount: (b = o.amount) != null ? b : 0,
          skipCloseAccount: c,
        });
        y.instructions.push(...(B.instructions || [])),
          y.endInstructions.push(...(B.endInstructions || [])),
          y.instructionTypes.push(...(B.instructionTypes || [])),
          y.endInstructionTypes.push(...(B.endInstructionTypes || [])),
          o.amount &&
            (y.instructions.push(
              Oa({
                source: B.addresses.newAccount,
                destination: d,
                owner: this.scope.ownerPubKey,
                amount: o.amount,
                tokenProgram: Qe.TOKEN_PROGRAM_ID,
              }),
            ),
            y.instructionTypes.push(U.TransferAmount));
      }
      return (
        !c &&
          T === void 0 &&
          (y.endInstructions.push(
            fn({
              owner: s,
              payer: o.payer || s,
              tokenAccount: d,
              programId: m,
            }),
          ),
          y.endInstructionTypes.push(U.CloseAccount)),
        { account: d, instructionParams: y }
      );
    } else {
      let P = De({ fromPublicKey: s, programId: m, assignSeed: l }),
        T = await this.scope.connection.getMinimumBalanceForRentExemption(
          Qe.AccountLayout.span,
        ),
        B = oi.SystemProgram.createAccountWithSeed({
          fromPubkey: s,
          basePubkey: s,
          seed: P.seed,
          newAccountPubkey: P.publicKey,
          lamports:
            T +
            Number(
              (w = (g = o.amount) == null ? void 0 : g.toString()) != null
                ? w
                : 0,
            ),
          space: Qe.AccountLayout.span,
          programId: m,
        });
      return (
        y.instructions.push(
          B,
          zr({
            mint: n,
            tokenAccount: P.publicKey,
            owner: this.scope.ownerPubKey,
            programId: m,
          }),
        ),
        y.instructionTypes.push(U.CreateAccount),
        y.instructionTypes.push(U.InitAccount),
        c ||
          (y.endInstructions.push(
            fn({
              owner: s,
              payer: o.payer || s,
              tokenAccount: P.publicKey,
              programId: m,
            }),
          ),
          y.endInstructionTypes.push(U.CloseAccount)),
        { account: P.publicKey, instructionParams: y }
      );
    }
  }
  async checkOrCreateAta({
    mint: t,
    programId: n = Qe.TOKEN_PROGRAM_ID,
    autoUnwrapWSOLToSOL: o,
  }) {
    var c;
    await this.fetchWalletTokenAccounts();
    let r =
        (c = this.scope.account.tokenAccounts.find(
          ({ mint: u }) => (u == null ? void 0 : u.toBase58()) === t.toBase58(),
        )) == null
          ? void 0
          : c.publicKey,
      s = this.scope.ownerPubKey,
      a = {};
    if (!r) {
      let u = this.getAssociatedTokenAccount(t, n),
        l = await (0, Qe.createAssociatedTokenAccountInstruction)(
          s,
          u,
          s,
          t,
          n,
        );
      (a.instructions = [l]), (a.instructionTypes = [U.CreateATA]), (r = u);
    }
    return (
      o &&
        $.toBase58() === t.toBase58() &&
        ((a.endInstructions = [
          fn({ owner: s, payer: s, tokenAccount: r, programId: n }),
        ]),
        (a.endInstructionTypes = [U.CloseAccount])),
      { pubKey: r, newInstructions: a }
    );
  }
  async handleTokenAccount(t) {
    let {
        side: n,
        amount: o,
        mint: r,
        programId: s = Qe.TOKEN_PROGRAM_ID,
        tokenAccount: a,
        payer: c = this.scope.ownerPubKey,
        bypassAssociatedCheck: u,
        skipCloseAccount: l,
        checkCreateATAOwner: m,
      } = t,
      d = this.getAssociatedTokenAccount(r, s);
    if (new oi.PublicKey($).equals(r)) {
      let p = await yn({
        connection: this.scope.connection,
        owner: this.scope.ownerPubKey,
        payer: c,
        amount: o,
        skipCloseAccount: l,
      });
      return N({ tokenAccount: p.addresses.newAccount }, p);
    } else if (!a || (n === "out" && !d.equals(a) && !u)) {
      let p = [],
        y = (0, Qe.createAssociatedTokenAccountInstruction)(
          this.scope.ownerPubKey,
          d,
          this.scope.ownerPubKey,
          r,
          s,
        );
      if (m) {
        let f = await this.scope.connection.getAccountInfo(d);
        if (f === null) p.push(y);
        else if (
          !(
            f.owner.equals(Qe.TOKEN_PROGRAM_ID) &&
            Qe.AccountLayout.decode(f.data).mint.equals(r) &&
            Qe.AccountLayout.decode(f.data).owner.equals(this.scope.ownerPubKey)
          )
        )
          throw Error(
            `create ata check error -> mint: ${r.toString()}, ata: ${d.toString()}`,
          );
      } else p.push(y);
      return {
        tokenAccount: d,
        instructions: p,
        instructionTypes: [U.CreateATA],
      };
    }
    return { tokenAccount: a };
  }
  async processTokenAccount(t) {
    let {
        mint: n,
        programId: o = Qe.TOKEN_PROGRAM_ID,
        amount: r,
        useSOLBalance: s,
        handleTokenAccount: a,
        feePayer: c,
      } = t,
      u,
      l = this.createTxBuilder(c);
    if (n.equals(new oi.PublicKey($)) && s) {
      let m = await this.handleTokenAccount({
          side: "in",
          amount: r || 0,
          mint: n,
          bypassAssociatedCheck: !0,
          programId: o,
        }),
        { tokenAccount: p } = m,
        y = He(m, ["tokenAccount"]);
      (u = p), l.addInstruction(y);
    } else if (
      ((u = await this.getCreatedTokenAccount({
        mint: n,
        associatedOnly: !1,
        programId: o,
      })),
      !u && a)
    ) {
      let d = await this.scope.account.handleTokenAccount({
          side: "in",
          amount: 0,
          mint: n,
          bypassAssociatedCheck: !0,
          programId: o,
        }),
        { tokenAccount: p } = d,
        y = He(d, ["tokenAccount"]);
      (u = p), l.addInstruction(y);
    }
    return N({ tokenAccount: u }, l.AllTxData);
  }
};
var Ie = require("@solana/web3.js"),
  _l = require("@solana/spl-token");
var Fa = require("@solana/web3.js");
var Qr = V([G("instruction")]),
  Yr = V([G("instruction")]),
  bf = V([
    k("rewardState"),
    k("rewardOpenTime"),
    k("rewardEndTime"),
    k("rewardLastUpdateTime"),
    k("totalReward"),
    k("totalRewardEmissioned"),
    k("rewardClaimed"),
    k("rewardPerSecond"),
    ne("accRewardPerShare"),
    M("rewardVault"),
    M("rewardMint"),
    M("rewardSender"),
    k("rewardType"),
    j(k(), 15, "padding"),
  ]),
  kl = V([
    k("state"),
    k("nonce"),
    M("lpVault"),
    M("rewardVault"),
    M(),
    M(),
    k(),
    k(),
    k("totalReward"),
    ne("perShareReward"),
    k("lastSlot"),
    k("perSlotReward"),
  ]),
  hl = V([
    k("state"),
    k("nonce"),
    M("lpVault"),
    M("rewardVaultA"),
    k("totalRewardA"),
    ne("perShareRewardA"),
    k("perSlotRewardA"),
    G("option"),
    M("rewardVaultB"),
    Te(7),
    k("totalRewardB"),
    ne("perShareRewardB"),
    k("perSlotRewardB"),
    k("lastSlot"),
    M(),
  ]),
  Tl = V([
    k(),
    k("state"),
    k("nonce"),
    k("validRewardTokenNum"),
    ne("rewardMultiplier"),
    k("rewardPeriodMax"),
    k("rewardPeriodMin"),
    k("rewardPeriodExtend"),
    M("lpMint"),
    M("lpVault"),
    j(bf, 5, "rewardInfos"),
    M("creator"),
    M(),
    j(k(), 32, "padding"),
  ]),
  Ma = new Proxy(kl, {
    get(i, e, t) {
      return e === "decode"
        ? (...n) => {
            let o = i.decode(...n);
            return X(N({}, o), {
              version: 3,
              rewardInfos: [
                {
                  rewardVault: o.rewardVault,
                  totalReward: o.totalReward,
                  perSlotReward: o.perSlotReward,
                  perShareReward: o.perShareReward,
                },
              ],
            });
          }
        : Reflect.get(i, e, t);
    },
  }),
  Na = new Proxy(hl, {
    get(i, e, t) {
      return e === "decode"
        ? (...n) => {
            let o = i.decode(...n);
            return X(N({}, o), {
              version: 5,
              rewardInfos: [
                {
                  rewardVault: o.rewardVaultA,
                  totalReward: o.totalRewardA,
                  perSlotReward: o.perSlotRewardA,
                  perShareReward: o.perShareRewardA,
                },
                {
                  rewardVault: o.rewardVaultB,
                  totalReward: o.totalRewardB,
                  perSlotReward: o.perSlotRewardB,
                  perShareReward: o.perShareRewardB,
                },
              ],
            });
          }
        : Reflect.get(i, e, t);
    },
  }),
  Si = new Proxy(Tl, {
    get(i, e, t) {
      return e === "decode"
        ? (...n) => {
            let o = i.decode(...n);
            return X(N({}, o), {
              version: 6,
              rewardInfos: o.rewardInfos.map((r) => {
                var s;
                return X(N({}, r), {
                  rewardType: ((s = Object.entries(In).find(
                    (a) => String(a[1]) === r.rewardType.toString(),
                  )) != null
                    ? s
                    : ["Standard SPL"])[0],
                });
              }),
            });
          }
        : Reflect.get(i, e, t);
    },
  }),
  Il = V([
    k("isSet"),
    k("rewardPerSecond"),
    k("rewardOpenTime"),
    k("rewardEndTime"),
    k("rewardType"),
  ]),
  Hr = V([G("instruction"), k("nonce"), j(Il, 5, "rewardTimeInfo")]),
  jr = V([
    G("instruction"),
    k("rewardReopenTime"),
    k("rewardEndTime"),
    k("rewardPerSecond"),
  ]),
  Zr = V([
    G("instruction"),
    k("isSet"),
    k("rewardPerSecond"),
    k("rewardOpenTime"),
    k("rewardEndTime"),
    k("rewardType"),
  ]),
  gf = V([
    k("state"),
    M("id"),
    M("owner"),
    k("deposited"),
    j(k(), 1, "rewardDebts"),
  ]),
  Ki = V([
    k("state"),
    M("id"),
    M("owner"),
    k("deposited"),
    j(ne(), 1, "rewardDebts"),
    k(""),
    k("voteLockedBalance"),
    j(k(), 15),
  ]),
  Af = V([
    k("state"),
    M("id"),
    M("owner"),
    k("deposited"),
    j(k(), 2, "rewardDebts"),
  ]),
  va = V([
    k("state"),
    M("id"),
    M("owner"),
    k("deposited"),
    j(ne(), 2, "rewardDebts"),
    j(k(), 17),
  ]),
  _a = V([
    k(),
    k("state"),
    M("id"),
    M("owner"),
    k("deposited"),
    j(ne(), 5, "rewardDebts"),
    j(k(), 16),
  ]),
  Tt = V([G("instruction"), k("amount")]),
  Bl = V([
    M("mint"),
    M("grantAuthority"),
    k("baselineVoteWeightScaledFactor"),
    k("maxExtraLockupVoteWeightScaledFactor"),
    k("lockupSaturationSecs"),
    Ca("digitShift"),
    j(G(), 7, "reserved1"),
    j(k(), 7, "reserved2"),
  ]),
  Va = V([
    Te(8),
    M("governanceProgramId"),
    M("realm"),
    M("realmGoverningTokenMint"),
    M("realmAuthority"),
    j(G(), 32, "reserved1"),
    j(Bl, 4, "votingMints"),
    ii("timeOffset"),
    G("bump"),
    j(G(), 7, "reserved2"),
    j(k(), 11, "reserved3"),
  ]),
  xl = V([ii("startTime"), ii("endTime"), G("kind"), j(G(), 15, "reserved")]),
  Sl = V([
    j(xl, 1, "lockup"),
    k("amountDeposited_native"),
    k("amountInitiallyLockedNative"),
    _e("isUsed"),
    _e("allowClawback"),
    G("votingMintConfigIdx"),
    j(G(), 29, "reserved"),
  ]),
  Ea = V([
    Te(8),
    M("voterAuthority"),
    M("registrar"),
    j(Sl, 32, "deposits"),
    G("voterBump"),
    G("voterWweightRecordBump"),
    j(G(), 94, "reserved"),
  ]);
var uw = ye("Raydium_farm_config"),
  Da = new Fa.PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
  Wa = new Fa.PublicKey("FrspKwj8i3pNmKwXreTveC4fu7KL5ZbGeXdZBe2XViu1"),
  qa = { 3: Ma, 5: Na, 6: Si },
  Ua = { 3: Ki, 5: va, 6: _a },
  $r = (i) => [3, 4, 5, 6].indexOf(i) !== -1,
  Jr = (i) => {
    var s;
    let { version: e, rewardInfos: t, rewardTokenAccountsPublicKeys: n } = i,
      o = `rewardInfo:${JSON.stringify(t)}, rewardAccount:${JSON.stringify(n)}`,
      r = {
        3: () => {
          if (t.length !== 1 || n.length !== 1)
            return `rewardInfos or rewardTokenAccounts lengths not equal 1: ${o}`;
        },
        5: () => {
          if (t.length !== n.length)
            return `rewardInfos and rewardTokenAccounts lengths not equal: ${o}`;
        },
        6: () => {
          if (!n.length || t.length !== n.length)
            return `no rewardTokenAccounts or rewardInfos and rewardTokenAccounts lengths not equal: ${o}`;
        },
      };
    return (s = r[e]) == null ? void 0 : s.call(r);
  },
  In = { "Standard SPL": 0, "Option tokens": 1 },
  Ft = {
    [Sr.toString()]: 3,
    [fa.toString()]: 4,
    [Kr.toString()]: 5,
    [ti.toString()]: 6,
  };
var Q = require("@solana/web3.js"),
  Co = be(require("bn.js")),
  at = require("@solana/spl-token");
function es(i, e, t) {
  return le([e.toBuffer(), Buffer.from("registrar", "utf8"), t.toBuffer()], i);
}
function ts(i, e) {
  return le([e.toBuffer(), Buffer.from("voting_mint_seed", "utf8")], i);
}
function ns(i, e) {
  return le([e.toBuffer()], i);
}
function is(i, e, t) {
  return le([e.toBuffer(), Buffer.from("voter", "utf8"), t.toBuffer()], i);
}
function os(i, e, t) {
  return le(
    [e.toBuffer(), Buffer.from("voter-weight-record", "utf8"), t.toBuffer()],
    i,
  );
}
function rs(i, e, t, n) {
  return le(
    [
      Buffer.from("governance", "utf8"),
      e.toBuffer(),
      t.toBuffer(),
      n.toBuffer(),
    ],
    i,
  );
}
var Rt = be(require("bn.js"));
var Ko = ye("Raydium.farm.util");
function Ci({ programId: i, poolId: e, mint: t, type: n }) {
  let { publicKey: o } = le(
    [
      e.toBuffer(),
      t.toBuffer(),
      Buffer.from(
        n === "lpVault"
          ? "lp_vault_associated_seed"
          : n === "rewardVault"
            ? "reward_vault_associated_seed"
            : "",
        "utf-8",
      ),
    ],
    i,
  );
  return o;
}
function yt({ programId: i, poolId: e, owner: t, version: n }) {
  let { publicKey: o } = le(
    [
      e.toBuffer(),
      t.toBuffer(),
      Buffer.from(
        n === 6
          ? "farmer_info_associated_seed"
          : "staker_info_v2_associated_seed",
        "utf-8",
      ),
    ],
    i,
  );
  return o;
}
var Ga = ({ programId: i, poolId: e }) => le([e.toBuffer()], i);
function Xa(i) {
  return {
    isSet: new Rt.default(1),
    rewardPerSecond: J(i.perSecond),
    rewardOpenTime: J(i.openTime),
    rewardEndTime: J(i.endTime),
    rewardType: J(In[i.rewardType]),
  };
}
function ss(i) {
  return J(i.endTime).sub(J(i.openTime)).mul(J(i.perSecond));
}
function ri(i) {
  let e = Ua[i];
  return e || Ko.logWithError("invalid version", i), e;
}
function Kl(i) {
  let e = qa[i];
  return e || Ko.logWithError("invalid version", i), e;
}
function Cl(i, e, t, n) {
  if (i.version === 3 || i.version === 5) {
    if (i.lastSlot.gte(new Rt.default(t))) return i;
    let o = new Rt.default(t).sub(i.lastSlot);
    i.lastSlot = new Rt.default(t);
    for (let r of i.rewardInfos) {
      if (e.amount.eq(new Rt.default(0))) continue;
      let s = r.perSlotReward.mul(o);
      (r.perShareReward = r.perShareReward.add(
        s
          .mul(new Rt.default(10).pow(new Rt.default(i.version === 3 ? 9 : 15)))
          .div(e.amount),
      )),
        (r.totalReward = r.totalReward.add(s));
    }
  } else if (i.version === 6)
    for (let o of i.rewardInfos) {
      if (o.rewardState.eq(new Rt.default(0))) continue;
      let r = Rt.default.min(new Rt.default(n), o.rewardEndTime);
      if (o.rewardOpenTime.gte(r)) continue;
      let a = r.sub(o.rewardLastUpdateTime).mul(o.rewardPerSecond),
        c = o.totalReward.sub(o.totalRewardEmissioned);
      c.lt(a)
        ? ((a = c),
          (o.rewardLastUpdateTime = o.rewardLastUpdateTime.add(
            c.div(o.rewardPerSecond),
          )))
        : (o.rewardLastUpdateTime = r),
        !e.amount.eq(new Rt.default(0)) &&
          ((o.accRewardPerShare = o.accRewardPerShare.add(
            a.mul(i.rewardMultiplier).div(e.amount),
          )),
          (o.totalRewardEmissioned = o.totalRewardEmissioned.add(a)));
    }
  return i;
}
async function wf({
  connection: i,
  farmPools: e,
  owner: t,
  config: n,
  chainTime: o,
}) {
  let r = !1,
    s = !1,
    a = new Rt.default(10),
    c = [];
  for (let d of e) {
    let p = Me(d);
    p.version === 6 ? (s = !0) : (r = !0),
      c.push(
        { pubkey: p.id, version: p.version, key: "state", poolId: p.id },
        { pubkey: p.lpVault, version: p.version, key: "lpVault", poolId: p.id },
      ),
      t &&
        c.push({
          pubkey: yt({
            programId: p.programId,
            poolId: p.id,
            owner: t,
            version: d.version,
          }),
          version: p.version,
          key: "ledger",
          poolId: p.id,
        });
  }
  let u = {},
    l = await je(i, c, n);
  for (let { pubkey: d, version: p, key: y, poolId: f, accountInfo: b } of l) {
    let g = f.toBase58();
    if (((u[g] = N({}, u[g])), y === "state")) {
      let w = Kl(p);
      (!b || !b.data || b.data.length !== w.span) &&
        Ko.logWithError(`invalid farm state account info, pools.id, ${d}`),
        (u[g].state = w.decode(b.data));
    } else if (y === "lpVault")
      (!b || !b.data || b.data.length !== Tn.span) &&
        Ko.logWithError(
          `invalid farm lp vault account info, pools.lpVault, ${d}`,
        ),
        (u[g].lpVault = Tn.decode(b.data));
    else if (y === "ledger") {
      let w = ri(p);
      b &&
        b.data &&
        (b.data.length !== w.span &&
          Ko.logWithError(`invalid farm ledger account info, ledger, ${d}`),
        (u[g].ledger = w.decode(b.data)));
    }
  }
  let m = s || r ? await i.getSlot() : 0;
  for (let d of Object.keys(u))
    u[d] !== void 0 && (u[d].state = Cl(u[d].state, u[d].lpVault, m, o));
  for (let [d, { state: p, ledger: y }] of Object.entries(u))
    if (y) {
      let f =
          p.version === 6
            ? p.rewardMultiplier
            : p.rewardInfos.length === 1
              ? a.pow(new Rt.default(9))
              : a.pow(new Rt.default(15)),
        b = p.rewardInfos.map((g, w) => {
          let P = y.rewardDebts[w];
          return y.deposited
            .mul(p.version === 6 ? g.accRewardPerShare : g.perShareReward)
            .div(f)
            .sub(P);
        });
      u[d].wrapped = X(N({}, u[d].wrapped), { pendingRewards: b });
    }
  return u;
}
function Pf(i, e = Date.now()) {
  if (i.version === 6) {
    let t = i.state.rewardInfos;
    if (t.every(({ rewardOpenTime: n }) => ua(e, n.toNumber(), { unit: "s" })))
      return "upcoming pool";
    if (t.every(({ rewardEndTime: n }) => ca(e, n.toNumber(), { unit: "s" })))
      return "closed pool";
  } else {
    let t = i.state.rewardInfos.map(({ perSlotReward: n }) => n);
    if (t.length === 2) {
      if (String(t[0]) === "0" && String(t[1]) !== "0")
        return "normal fusion pool";
      if (String(t[0]) !== "0" && String(t[1]) !== "0")
        return "dual fusion pool";
      if (String(t[0]) === "0" && String(t[1]) === "0") return "closed pool";
    } else if (t.length === 1 && String(t[0]) === "0") return "closed pool";
  }
}
async function as(i, e, t, n) {
  let o = await i.getAccountInfo(e);
  if (o === null) throw Error("registrar info check error");
  let s = Va.decode(o.data).votingMints.findIndex((l) => l.mint.equals(n));
  if (s === -1) throw Error("find voter mint error");
  let a = await i.getAccountInfo(t);
  if (a === null) return { index: s, isInit: !1 };
  let u = Ea.decode(a.data).deposits.findIndex(
    (l) => l.isUsed && l.votingMintConfigIdx === s,
  );
  return u === -1 ? { index: s, isInit: !1 } : { index: u, isInit: !0 };
}
var kf = ye("Raydium_farm_instruction"),
  Ro = {
    voterStakeRegistryCreateVoter: Buffer.from([
      6, 24, 245, 52, 243, 255, 148, 25,
    ]),
    voterStakeRegistryCreateDepositEntry: Buffer.from([
      185, 131, 167, 186, 159, 125, 19, 67,
    ]),
    voterStakeRegistryDeposit: Buffer.from([
      242, 35, 198, 137, 82, 225, 242, 182,
    ]),
    voterStakeRegistryWithdraw: Buffer.from([
      183, 18, 70, 156, 148, 109, 161, 34,
    ]),
    voterStakeRegistryUpdateVoterWeightRecord: Buffer.from([
      45, 185, 3, 36, 109, 190, 115, 169,
    ]),
  };
function Ri(i) {
  let { version: e, id: t, ledger: n, programId: o, owner: r } = i,
    s = { 3: 9, 5: 10 }[e];
  s || kf.logWithError(`invalid farm pool version: ${e}`);
  let a = Buffer.alloc(Qr.span);
  Qr.encode({ instruction: s }, a);
  let c = [
    A({ pubkey: t }),
    A({ pubkey: n }),
    A({ pubkey: r, isWritable: !1 }),
    A({ pubkey: Q.SystemProgram.programId, isWritable: !1 }),
    A({ pubkey: Q.SYSVAR_RENT_PUBKEY, isWritable: !1 }),
  ];
  return {
    instruction: new Q.TransactionInstruction({
      programId: o,
      keys: c,
      data: a,
    }),
    instructionType: U.FarmV3CreateLedger,
  };
}
function za(i) {
  var n;
  let e = Buffer.alloc(Hr.span);
  Hr.encode(
    {
      instruction: 0,
      nonce: new Co.default(i.nonce),
      rewardTimeInfo: i.rewardInfoConfig,
    },
    e,
  );
  let t = [
    ...Ar,
    A({ pubkey: i.farmId }),
    A({ pubkey: i.farmAuthority, isWritable: !1 }),
    A({ pubkey: i.lpVault }),
    A({ pubkey: i.lpMint, isWritable: !1 }),
    A({ pubkey: i.lockVault }),
    A({ pubkey: i.lockMint, isWritable: !1 }),
    A({ pubkey: (n = i.lockUserAccount) != null ? n : it }),
    A({ pubkey: i.owner, isWritable: !1, isSigner: !0 }),
  ];
  for (let o of i.rewardInfo)
    t.push(
      A({ pubkey: o.rewardMint, isWritable: !1 }),
      A({ pubkey: o.rewardVault }),
      A({ pubkey: o.userRewardToken }),
    );
  return {
    instruction: new Q.TransactionInstruction({
      programId: i.programId,
      keys: t,
      data: e,
    }),
    instructionType: U.FarmV6Create,
  };
}
function Qa(i) {
  let e = Buffer.alloc(Yr.span);
  Yr.encode({ instruction: 5 }, e);
  let t = [
    A({ pubkey: at.TOKEN_PROGRAM_ID, isWritable: !1 }),
    A({ pubkey: i.id }),
    A({ pubkey: i.authority, isWritable: !1 }),
    A({ pubkey: i.lpVault, isWritable: !1 }),
    A({ pubkey: i.rewardVault }),
    A({ pubkey: i.userRewardToken }),
    A({ pubkey: i.owner, isWritable: !1, isSigner: !0 }),
  ];
  return {
    instruction: new Q.TransactionInstruction({
      programId: i.programId,
      keys: t,
      data: e,
    }),
    instructionType: U.FarmV6CreatorWithdraw,
  };
}
function Rl(i, e, t, n, o, r, s, a, c, u, l, m, d) {
  let p = V([G("depositEntryIndex"), k("amount")]),
    y = [
      { pubkey: e, isSigner: !1, isWritable: !1 },
      { pubkey: t, isSigner: !1, isWritable: !0 },
      { pubkey: n, isSigner: !1, isWritable: !0 },
      { pubkey: o, isSigner: !1, isWritable: !0 },
      { pubkey: r, isSigner: !1, isWritable: !1 },
      { pubkey: at.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: s, isSigner: !1, isWritable: !0 },
      { pubkey: a, isSigner: !1, isWritable: !1 },
      { pubkey: c, isSigner: !1, isWritable: !0 },
      { pubkey: u, isSigner: !1, isWritable: !1 },
      { pubkey: l, isSigner: !1, isWritable: !1 },
      { pubkey: mo, isSigner: !1, isWritable: !1 },
    ],
    f = Buffer.alloc(p.span);
  p.encode({ depositEntryIndex: m, amount: d }, f);
  let b = Buffer.from([...Ro.voterStakeRegistryDeposit, ...f]);
  return new Q.TransactionInstruction({ keys: y, programId: i, data: b });
}
function Ll(i, e, t, n) {
  let o = V([]),
    r = [
      { pubkey: e, isSigner: !1, isWritable: !1 },
      { pubkey: t, isSigner: !1, isWritable: !1 },
      { pubkey: n, isSigner: !1, isWritable: !0 },
      { pubkey: Q.SystemProgram.programId, isSigner: !1, isWritable: !1 },
    ],
    s = Buffer.alloc(o.span);
  o.encode({}, s);
  let a = Buffer.from([...Ro.voterStakeRegistryUpdateVoterWeightRecord, ...s]);
  return new Q.TransactionInstruction({ keys: r, programId: i, data: a });
}
function Ol(i, e, t, n, o, r, s, a, c, u, l, m, d, p, y) {
  let f = V([G("depositEntryIndex"), k("amount")]),
    b = [
      { pubkey: e, isSigner: !1, isWritable: !1 },
      { pubkey: t, isSigner: !1, isWritable: !0 },
      { pubkey: n, isSigner: !0, isWritable: !1 },
      { pubkey: o, isSigner: !1, isWritable: !1 },
      { pubkey: r, isSigner: !1, isWritable: !0 },
      { pubkey: s, isSigner: !1, isWritable: !0 },
      { pubkey: a, isSigner: !1, isWritable: !0 },
      { pubkey: at.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: c, isSigner: !1, isWritable: !0 },
      { pubkey: u, isSigner: !1, isWritable: !1 },
      { pubkey: l, isSigner: !1, isWritable: !0 },
      { pubkey: m, isSigner: !1, isWritable: !1 },
      { pubkey: d, isSigner: !1, isWritable: !1 },
      { pubkey: mo, isSigner: !1, isWritable: !1 },
    ],
    g = Buffer.alloc(f.span);
  f.encode({ depositEntryIndex: p, amount: y }, g);
  let w = Buffer.from([...Ro.voterStakeRegistryWithdraw, ...g]);
  return new Q.TransactionInstruction({ keys: b, programId: i, data: w });
}
function Ml(i, e, t, n, o, r) {
  let s = V([G("ins")]),
    a = [
      { pubkey: e, isSigner: !1, isWritable: !1 },
      { pubkey: t, isSigner: !1, isWritable: !1 },
      { pubkey: r, isSigner: !1, isWritable: !0 },
      { pubkey: n, isSigner: !1, isWritable: !1 },
      { pubkey: o, isSigner: !0, isWritable: !0 },
      { pubkey: Q.SystemProgram.programId, isSigner: !1, isWritable: !1 },
    ],
    c = Buffer.alloc(s.span);
  return (
    s.encode({ ins: 23 }, c),
    new Q.TransactionInstruction({ keys: a, programId: i, data: c })
  );
}
function Nl(i, e, t, n, o, r, s, a) {
  let c = V([G("voterBump"), G("voterWeightRecordBump")]),
    u = [
      { pubkey: e, isSigner: !1, isWritable: !1 },
      { pubkey: t, isSigner: !1, isWritable: !0 },
      { pubkey: o, isSigner: !0, isWritable: !1 },
      { pubkey: n, isSigner: !1, isWritable: !0 },
      { pubkey: r, isSigner: !0, isWritable: !0 },
      { pubkey: Q.SystemProgram.programId, isSigner: !1, isWritable: !1 },
      { pubkey: ot, isSigner: !1, isWritable: !1 },
      { pubkey: mo, isSigner: !1, isWritable: !1 },
    ],
    l = Buffer.alloc(c.span);
  c.encode({ voterBump: s, voterWeightRecordBump: a }, l);
  let m = Buffer.from([...Ro.voterStakeRegistryCreateVoter, ...l]);
  return new Q.TransactionInstruction({ keys: u, programId: i, data: m });
}
function vl(i, e, t, n, o, r, s, a, c, u, l, m) {
  let d = V([
      G("depositEntryIndex"),
      G("kind"),
      G("option"),
      k("startTs"),
      ct("periods"),
      _e("allowClawback"),
    ]),
    p = [
      { pubkey: e, isSigner: !1, isWritable: !1 },
      { pubkey: t, isSigner: !1, isWritable: !0 },
      { pubkey: n, isSigner: !1, isWritable: !0 },
      { pubkey: o, isSigner: !0, isWritable: !1 },
      { pubkey: r, isSigner: !0, isWritable: !0 },
      { pubkey: s, isSigner: !1, isWritable: !1 },
      { pubkey: Q.SystemProgram.programId, isSigner: !1, isWritable: !1 },
      { pubkey: at.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: at.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: ot, isSigner: !1, isWritable: !1 },
    ],
    y = Buffer.alloc(d.span);
  d.encode(
    {
      depositEntryIndex: a,
      kind: c,
      option: u === void 0 ? 0 : 1,
      startTs: u,
      periods: l,
      allowClawback: m,
    },
    y,
  );
  let f = Buffer.from([...Ro.voterStakeRegistryCreateDepositEntry, ...y]);
  return new Q.TransactionInstruction({ keys: p, programId: i, data: f });
}
async function hf({
  connection: i,
  programId: e,
  governanceProgramId: t,
  voteWeightAddinProgramId: n,
  realm: o,
  communityTokenMint: r,
  owner: s,
  poolId: a,
  tokenProgram: c,
}) {
  let u = es(n, o, r).publicKey,
    l = yt({ programId: e, poolId: a, owner: s, version: 3 }),
    m = await i.getAccountInfo(l);
  if (m === null) throw Error("user is not staker");
  let d = Ki.decode(m.data),
    p = d.deposited.sub(d.voteLockedBalance);
  if ((console.log("amount", p.toString()), p.eq(new Co.default(0))))
    throw Error("user do not has new stake amount");
  let y = ts(e, a).publicKey,
    f = ns(e, a).publicKey,
    { publicKey: b, nonce: g } = is(n, u, s),
    w = oe(b, y, c).publicKey,
    { publicKey: P, nonce: T } = os(n, u, s),
    B = rs(t, o, r, s).publicKey,
    h = [],
    x = oe(s, y, c).publicKey;
  if (
    ((await i.getAccountInfo(x)) === null &&
      h.push((0, at.createAssociatedTokenAccountInstruction)(s, x, s, y)),
    (await i.getAccountInfo(b)) === null)
  ) {
    let L = Ml(t, o, s, r, s, B);
    h.push(L, Nl(n, u, b, P, s, s, g, T));
  }
  let { index: I, isInit: C } = await as(i, u, b, y);
  return (
    C || h.push(vl(n, u, b, w, s, s, y, I, 0, void 0, 0, !1)),
    h.push(Rl(n, u, b, w, x, s, l, a, y, f, e, I, p), Ll(n, u, b, P)),
    h
  );
}
async function Tf({
  connection: i,
  programId: e,
  governanceProgramId: t,
  voteWeightAddinProgramId: n,
  realm: o,
  communityTokenMint: r,
  owner: s,
  poolId: a,
  tokenProgram: c,
}) {
  let u = es(n, o, r).publicKey,
    l = yt({ programId: e, poolId: a, owner: s, version: 3 }),
    m = await i.getAccountInfo(l);
  if (m === null) throw Error("user is not staker");
  let d = Ki.decode(m.data);
  if (d.voteLockedBalance.eq(new Co.default(0)))
    throw Error("user has vote locked balance = 0");
  let p = ts(e, a).publicKey,
    y = ns(e, a).publicKey,
    { publicKey: f } = is(n, u, s),
    b = oe(f, p, c).publicKey,
    { publicKey: g } = os(n, u, s),
    w = rs(t, o, r, s).publicKey,
    P = [],
    { index: T, isInit: B } = await as(i, u, f, p);
  if (!B) throw Error("deposit entry index check error");
  return (
    P.push(
      Ol(
        n,
        u,
        f,
        s,
        w,
        g,
        b,
        oe(s, p, c).publicKey,
        l,
        a,
        p,
        y,
        e,
        T,
        d.voteLockedBalance,
      ),
    ),
    P
  );
}
function us({
  payer: i,
  rewardVault: e,
  userRewardTokenPub: t,
  farmKeys: n,
  rewardInfo: o,
}) {
  let r = Buffer.alloc(jr.span);
  jr.encode(
    {
      instruction: 3,
      rewardReopenTime: J(o.openTime),
      rewardEndTime: J(o.endTime),
      rewardPerSecond: J(o.perSecond),
    },
    r,
  );
  let s = [
    A({ pubkey: at.TOKEN_PROGRAM_ID, isWritable: !1 }),
    A({ pubkey: n.id }),
    A({ pubkey: n.lpVault, isWritable: !1 }),
    A({ pubkey: e }),
    A({ pubkey: t }),
    A({ pubkey: i, isWritable: !1, isSigner: !0 }),
  ];
  return new Q.TransactionInstruction({
    programId: n.programId,
    keys: s,
    data: r,
  });
}
function cs({
  payer: i,
  userRewardTokenPub: e,
  farmKeys: t,
  rewardVault: n,
  rewardInfo: o,
}) {
  let r = Buffer.alloc(Zr.span);
  Zr.encode(
    {
      instruction: 4,
      isSet: new Co.default(1),
      rewardPerSecond: J(o.perSecond),
      rewardOpenTime: J(o.openTime),
      rewardEndTime: J(o.endTime),
      rewardType: J(In[o.rewardType]),
    },
    r,
  );
  let s = [
    ...Ar,
    A({ pubkey: t.id }),
    A({ pubkey: t.authority, isWritable: !1 }),
    A({ pubkey: o.mint, isWritable: !1 }),
    A({ pubkey: n }),
    A({ pubkey: e }),
    A({ pubkey: i, isWritable: !1, isSigner: !0 }),
  ];
  return new Q.TransactionInstruction({
    programId: t.programId,
    keys: s,
    data: r,
  });
}
function If(i) {
  let {
      farmInfo: e,
      farmKeys: t,
      version: n,
      lpAccount: o,
      rewardAccounts: r,
      owner: s,
      instruction: a,
      amount: c,
      deposit: u,
    } = i,
    [l, m] = [new Q.PublicKey(e.programId), new Q.PublicKey(e.id)],
    d = yt({ programId: l, poolId: m, owner: s, version: n }),
    p = Buffer.alloc(Tt.span);
  Tt.encode({ instruction: a, amount: c }, p);
  let y =
    n === 6
      ? [
          A({ pubkey: at.TOKEN_PROGRAM_ID, isWritable: !1 }),
          ...(u
            ? [A({ pubkey: Q.SystemProgram.programId, isWritable: !1 })]
            : []),
          A({ pubkey: m }),
          A({ pubkey: new Q.PublicKey(t.authority), isWritable: !1 }),
          A({ pubkey: new Q.PublicKey(t.lpVault) }),
          A({ pubkey: d }),
          A({ pubkey: s, isWritable: !1, isSigner: !0 }),
          A({ pubkey: o }),
        ]
      : [
          A({ pubkey: m }),
          A({ pubkey: new Q.PublicKey(t.authority), isWritable: !1 }),
          A({ pubkey: d }),
          A({ pubkey: s, isWritable: !1, isSigner: !0 }),
          A({ pubkey: o }),
          A({ pubkey: new Q.PublicKey(t.lpVault) }),
          A({ pubkey: r[0] }),
          A({ pubkey: new Q.PublicKey(t.rewardInfos[0].vault) }),
          A({ pubkey: Q.SYSVAR_CLOCK_PUBKEY, isWritable: !1 }),
          A({ pubkey: at.TOKEN_PROGRAM_ID, isWritable: !1 }),
        ];
  if (n === 5)
    for (let f = 1; f < t.rewardInfos.length; f++)
      y.push(A({ pubkey: r[f] })),
        y.push(A({ pubkey: new Q.PublicKey(t.rewardInfos[f].vault) }));
  if (n === 6)
    for (let f = 0; f < t.rewardInfos.length; f++)
      y.push(A({ pubkey: new Q.PublicKey(t.rewardInfos[f].vault) })),
        y.push(A({ pubkey: r[f] }));
  return new Q.TransactionInstruction({ programId: l, keys: y, data: p });
}
function Li(i) {
  let {
      farmInfo: e,
      farmKeys: t,
      lpAccount: n,
      rewardAccounts: o,
      owner: r,
      amount: s,
    } = i,
    [a, c] = [new Q.PublicKey(e.programId), new Q.PublicKey(e.id)],
    u = yt({ programId: a, poolId: c, owner: r, version: 6 }),
    l = Buffer.alloc(Tt.span);
  Tt.encode({ instruction: 2, amount: J(s) }, l);
  let m = [
    A({ pubkey: at.TOKEN_PROGRAM_ID, isWritable: !1 }),
    A({ pubkey: c }),
    A({ pubkey: new Q.PublicKey(t.authority), isWritable: !1 }),
    A({ pubkey: new Q.PublicKey(t.lpVault) }),
    A({ pubkey: u }),
    A({ pubkey: r, isWritable: !1, isSigner: !0 }),
    A({ pubkey: n }),
  ];
  for (let d = 0; d < t.rewardInfos.length; d++)
    m.push(A({ pubkey: new Q.PublicKey(t.rewardInfos[d].vault) })),
      m.push(A({ pubkey: o[d] }));
  return new Q.TransactionInstruction({ programId: a, keys: m, data: l });
}
function Oi(i) {
  let {
      farmInfo: e,
      farmKeys: t,
      lpAccount: n,
      rewardAccounts: o,
      owner: r,
      amount: s,
      userAuxiliaryLedgers: a,
    } = i,
    [c, u] = [new Q.PublicKey(e.programId), new Q.PublicKey(e.id)],
    l = yt({ programId: c, poolId: u, owner: r, version: 5 }),
    m = Buffer.alloc(Tt.span);
  Tt.encode({ instruction: 12, amount: J(s) }, m);
  let d = [
    A({ pubkey: u }),
    A({ pubkey: new Q.PublicKey(t.authority), isWritable: !1 }),
    A({ pubkey: l }),
    A({ pubkey: r, isWritable: !1, isSigner: !0 }),
    A({ pubkey: n }),
    A({ pubkey: new Q.PublicKey(t.lpVault) }),
    A({ pubkey: o[0] }),
    A({ pubkey: new Q.PublicKey(t.rewardInfos[0].vault) }),
    A({ pubkey: Q.SYSVAR_CLOCK_PUBKEY, isWritable: !1 }),
    A({ pubkey: at.TOKEN_PROGRAM_ID, isWritable: !1 }),
  ];
  for (let p = 1; p < t.rewardInfos.length; p++)
    d.push(A({ pubkey: o[p] })),
      d.push(A({ pubkey: new Q.PublicKey(t.rewardInfos[p].vault) }));
  if (a) for (let p of a) d.push(A({ pubkey: p }));
  return new Q.TransactionInstruction({ programId: c, keys: d, data: m });
}
function Ya(i) {
  let {
      farmInfo: e,
      farmKeys: t,
      lpAccount: n,
      rewardAccounts: o,
      owner: r,
      amount: s,
      userAuxiliaryLedgers: a,
    } = i,
    [c, u] = [new Q.PublicKey(e.programId), new Q.PublicKey(e.id)],
    l = V([G("instruction"), k("amount")]),
    m = [
      A({ pubkey: u }),
      A({ pubkey: new Q.PublicKey(t.authority), isWritable: !1 }),
      A({ pubkey: a[0] }),
      A({ pubkey: r, isSigner: !0, isWritable: !1 }),
      A({ pubkey: n }),
      A({ pubkey: new Q.PublicKey(t.lpVault) }),
      A({ pubkey: o[0] }),
      A({ pubkey: new Q.PublicKey(t.rewardInfos[0].vault) }),
      A({ pubkey: Q.SYSVAR_CLOCK_PUBKEY, isWritable: !1 }),
      A({ pubkey: at.TOKEN_PROGRAM_ID, isWritable: !1 }),
      A({ pubkey: o[1] }),
      A({ pubkey: new Q.PublicKey(t.rewardInfos[1].vault) }),
    ],
    d = Buffer.alloc(l.span);
  return (
    l.encode({ instruction: 2, amount: s }, d),
    new Q.TransactionInstruction({ keys: m, programId: c, data: d })
  );
}
function Mi(i) {
  let {
      farmInfo: e,
      farmKeys: t,
      lpAccount: n,
      rewardAccounts: o,
      owner: r,
      amount: s,
      userAuxiliaryLedgers: a,
    } = i,
    [c, u] = [new Q.PublicKey(e.programId), new Q.PublicKey(e.id)],
    l = yt({ programId: c, poolId: u, owner: r, version: 3 }),
    m = Buffer.alloc(Tt.span);
  Tt.encode({ instruction: 11, amount: J(s) }, m);
  let d = [
    A({ pubkey: u }),
    A({ pubkey: new Q.PublicKey(t.authority), isWritable: !1 }),
    A({ pubkey: l }),
    A({ pubkey: r, isWritable: !1, isSigner: !0 }),
    A({ pubkey: n }),
    A({ pubkey: new Q.PublicKey(t.lpVault) }),
    A({ pubkey: o[0] }),
    A({ pubkey: new Q.PublicKey(t.rewardInfos[0].vault) }),
    A({ pubkey: Q.SYSVAR_CLOCK_PUBKEY, isWritable: !1 }),
    A({ pubkey: at.TOKEN_PROGRAM_ID, isWritable: !1 }),
  ];
  if (a) for (let p of a) d.push(A({ pubkey: p }));
  return new Q.TransactionInstruction({ programId: c, keys: d, data: m });
}
function Ha(i) {
  let {
      farmInfo: e,
      farmKeys: t,
      lpAccount: n,
      rewardAccounts: o,
      owner: r,
      amount: s,
      userAuxiliaryLedgers: a,
    } = i,
    [c, u] = [new Q.PublicKey(e.programId), new Q.PublicKey(e.id)],
    l = yt({ programId: c, poolId: u, owner: r, version: 3 }),
    m = Buffer.alloc(Tt.span);
  Tt.encode({ instruction: 10, amount: J(s) }, m);
  let d = [
    A({ pubkey: u }),
    A({ pubkey: new Q.PublicKey(t.authority), isWritable: !1 }),
    A({ pubkey: l }),
    A({ pubkey: r, isWritable: !1, isSigner: !0 }),
    A({ pubkey: n }),
    A({ pubkey: new Q.PublicKey(t.lpVault) }),
    A({ pubkey: o[0] }),
    A({ pubkey: new Q.PublicKey(t.rewardInfos[0].vault) }),
    A({ pubkey: Q.SYSVAR_CLOCK_PUBKEY, isWritable: !1 }),
    A({ pubkey: at.TOKEN_PROGRAM_ID, isWritable: !1 }),
  ];
  if (a) for (let p of a) d.push(A({ pubkey: p }));
  return new Q.TransactionInstruction({ programId: c, keys: d, data: m });
}
function ja(i) {
  let {
      farmInfo: e,
      farmKeys: t,
      lpAccount: n,
      rewardAccounts: o,
      owner: r,
      amount: s,
      userAuxiliaryLedgers: a,
    } = i,
    [c, u] = [new Q.PublicKey(e.programId), new Q.PublicKey(e.id)],
    l = yt({ programId: c, poolId: u, owner: r, version: 5 }),
    m = Buffer.alloc(Tt.span);
  Tt.encode({ instruction: 11, amount: J(s) }, m);
  let d = [
    A({ pubkey: u }),
    A({ pubkey: new Q.PublicKey(t.authority), isWritable: !1 }),
    A({ pubkey: l }),
    A({ pubkey: r, isWritable: !1, isSigner: !0 }),
    A({ pubkey: n }),
    A({ pubkey: new Q.PublicKey(t.lpVault) }),
    A({ pubkey: o[0] }),
    A({ pubkey: new Q.PublicKey(t.rewardInfos[0].vault) }),
    A({ pubkey: Q.SYSVAR_CLOCK_PUBKEY, isWritable: !1 }),
    A({ pubkey: at.TOKEN_PROGRAM_ID, isWritable: !1 }),
  ];
  for (let p = 1; p < t.rewardInfos.length; p++)
    d.push(A({ pubkey: o[p] })),
      d.push(A({ pubkey: new Q.PublicKey(t.rewardInfos[p].vault) }));
  if (a) for (let p of a) d.push(A({ pubkey: p }));
  return new Q.TransactionInstruction({ programId: c, keys: d, data: m });
}
function Za(i) {
  let {
      farmInfo: e,
      farmKeys: t,
      lpAccount: n,
      rewardAccounts: o,
      owner: r,
      amount: s,
    } = i,
    [a, c] = [new Q.PublicKey(e.programId), new Q.PublicKey(e.id)],
    u = yt({ programId: a, poolId: c, owner: r, version: 6 }),
    l = Buffer.alloc(Tt.span);
  Tt.encode({ instruction: 1, amount: J(s) }, l);
  let m = [
    A({ pubkey: at.TOKEN_PROGRAM_ID, isWritable: !1 }),
    A({ pubkey: Q.SystemProgram.programId, isWritable: !1 }),
    A({ pubkey: c }),
    A({ pubkey: new Q.PublicKey(t.authority), isWritable: !1 }),
    A({ pubkey: new Q.PublicKey(t.lpVault) }),
    A({ pubkey: u }),
    A({ pubkey: r, isWritable: !1, isSigner: !0 }),
    A({ pubkey: n }),
  ];
  for (let d = 0; d < t.rewardInfos.length; d++)
    m.push(A({ pubkey: new Q.PublicKey(t.rewardInfos[d].vault) })),
      m.push(A({ pubkey: o[d] }));
  return new Q.TransactionInstruction({ programId: a, keys: m, data: l });
}
var Lo = class extends Fe {
  async _getUserRewardInfo({ payer: e, rewardInfo: t }) {
    if (t.mint.equals(it)) {
      let n = await yn({
        connection: this.scope.connection,
        owner: this.scope.ownerPubKey,
        payer: e,
        amount: ss(
          X(N({}, t), {
            openTime: t.openTime.toString(),
            endTime: t.endTime.toString(),
          }),
        ),
      });
      return { rewardPubKey: n.addresses.newAccount, newInstruction: n };
    }
    return {
      rewardPubKey: await this.scope.account.getCreatedTokenAccount({
        mint: t.mint,
        associatedOnly: !1,
      }),
    };
  }
  async create({
    poolInfo: e,
    rewardInfos: t,
    payer: n,
    programId: o = ti,
    txVersion: r,
    feePayer: s,
  }) {
    this.checkDisabled(), this.scope.checkOwner();
    let c = {
        lpMint: new Ie.PublicKey(e.lpMint.address),
        lockInfo: { lockMint: Da, lockVault: Wa },
        version: 6,
        rewardInfos: t,
        programId: o,
      },
      u = this.createTxBuilder(s),
      l = n != null ? n : this.scope.ownerPubKey,
      m = De({ fromPublicKey: l, programId: c.programId }),
      d = await this.scope.connection.getMinimumBalanceForRentExemption(
        Si.span,
      );
    u.addInstruction({
      instructions: [
        Ie.SystemProgram.createAccountWithSeed({
          fromPubkey: l,
          basePubkey: l,
          seed: m.seed,
          newAccountPubkey: m.publicKey,
          lamports: d,
          space: Si.span,
          programId: c.programId,
        }),
      ],
    });
    let { publicKey: p, nonce: y } = Ga({
        programId: new Ie.PublicKey(c.programId),
        poolId: m.publicKey,
      }),
      f = Ci({
        programId: c.programId,
        poolId: m.publicKey,
        mint: c.lpMint,
        type: "lpVault",
      }),
      b = [],
      g = [];
    for (let h of c.rewardInfos) {
      h.openTime >= h.endTime &&
        this.logAndCreateError(
          "start time error",
          "rewardInfo.rewardOpenTime",
          h.openTime.toString(),
        ),
        isNaN(In[h.rewardType]) &&
          this.logAndCreateError("rewardType error", h.rewardType),
        Number(h.perSecond) <= 0 &&
          this.logAndCreateError("rewardPerSecond error", h.perSecond),
        b.push(Xa(h));
      let { rewardPubKey: x, newInstruction: S } =
        await this._getUserRewardInfo({ rewardInfo: h, payer: l });
      S && u.addInstruction(S),
        x ||
          this.logAndCreateError(
            "cannot found target token accounts",
            this.scope.account.tokenAccounts,
          );
      let K = h.mint.equals(it) ? new Ie.PublicKey(nt.address) : h.mint;
      g.push({
        rewardMint: K,
        rewardVault: Ci({
          programId: c.programId,
          poolId: m.publicKey,
          mint: K,
          type: "rewardVault",
        }),
        userRewardToken: x,
      });
    }
    let { account: w, instructionParams: P } =
      await this.scope.account.getOrCreateTokenAccount({
        mint: new Ie.PublicKey(c.lockInfo.lockMint),
        owner: this.scope.ownerPubKey,
        skipCloseAccount: !1,
        createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
        associatedOnly: !1,
      });
    P && u.addInstruction(P),
      w ||
        this.logAndCreateError(
          "cannot found lock vault",
          "tokenAccounts",
          this.scope.account.tokenAccounts,
        );
    let { instruction: T, instructionType: B } = za({
      farmId: m.publicKey,
      owner: this.scope.ownerPubKey,
      farmAuthority: p,
      lpVault: f,
      lpMint: c.lpMint,
      lockVault: c.lockInfo.lockVault,
      lockMint: c.lockInfo.lockMint,
      lockUserAccount: w,
      programId: c.programId,
      rewardInfo: g,
      rewardInfoConfig: b,
      nonce: y,
    });
    return u
      .addInstruction({ instructions: [T], instructionTypes: [B] })
      .versionBuild({
        txVersion: r,
        extInfo: {
          farmId: m.publicKey,
          farmAuthority: p,
          lpVault: f,
          lockUserAccount: w,
          nonce: y,
        },
      });
  }
  async restartReward({
    farmInfo: e,
    payer: t,
    newRewardInfo: n,
    txVersion: o,
    feePayer: r,
  }) {
    var g;
    let s = Ft[e.programId];
    s !== 6 && this.logAndCreateError("invalid farm version ", s);
    let a = Me((await this.scope.api.fetchFarmKeysById({ ids: e.id }))[0]),
      c = {
        id: a.id,
        rewardInfos: e.rewardInfos,
        lpVault: a.lpVault,
        programId: a.programId,
      };
    n.openTime >= n.endTime &&
      this.logAndCreateError("start time error", "newRewardInfo", n);
    let u = t || this.scope.ownerPubKey,
      l = n.mint.equals(it) ? new Ie.PublicKey(nt.address) : n.mint,
      m = c.rewardInfos.findIndex((w) =>
        new Ie.PublicKey(w.mint.address).equals(l),
      ),
      d = a.rewardInfos[m];
    d ||
      this.logAndCreateError("configuration does not exist", "rewardMint", l);
    let p = (g = d.vault) != null ? g : it,
      y = this.createTxBuilder(r),
      { rewardPubKey: f, newInstruction: b } = await this._getUserRewardInfo({
        rewardInfo: n,
        payer: u,
      });
    return (
      b && y.addInstruction(b),
      f ||
        this.logAndCreateError(
          "cannot found target token accounts",
          this.scope.account.tokenAccounts,
        ),
      y
        .addInstruction({
          instructions: [
            us({
              payer: this.scope.ownerPubKey,
              rewardVault: p,
              userRewardTokenPub: f,
              farmKeys: c,
              rewardInfo: n,
            }),
          ],
          instructionTypes: [U.FarmV6Restart],
        })
        .versionBuild({ txVersion: o })
    );
  }
  async restartRewards({
    farmInfo: e,
    payer: t,
    newRewardInfos: n,
    txVersion: o,
    feePayer: r,
  }) {
    var m;
    let s = Ft[e.programId];
    s !== 6 && this.logAndCreateError("invalid farm version ", s);
    let a = Me((await this.scope.api.fetchFarmKeysById({ ids: e.id }))[0]),
      c = {
        id: a.id,
        rewardInfos: e.rewardInfos,
        lpVault: a.lpVault,
        programId: a.programId,
      };
    n.forEach((d) => {
      d.openTime >= d.endTime &&
        this.logAndCreateError("start time error", "newRewardInfo", d);
    });
    let u = t || this.scope.ownerPubKey,
      l = this.createTxBuilder(r);
    for (let d of n) {
      let p = d.mint.equals(it) ? new Ie.PublicKey(nt.address) : d.mint,
        y = c.rewardInfos.findIndex((T) =>
          new Ie.PublicKey(T.mint.address).equals(p),
        ),
        f = a.rewardInfos[y];
      f ||
        this.logAndCreateError("configuration does not exist", "rewardMint", p);
      let b = (m = f.vault) != null ? m : it,
        { rewardPubKey: g, newInstruction: w } = await this._getUserRewardInfo({
          rewardInfo: d,
          payer: u,
        });
      w && l.addInstruction(w),
        g ||
          this.logAndCreateError(
            "cannot found target token accounts",
            this.scope.account.tokenAccounts,
          );
      let P = us({
        payer: this.scope.ownerPubKey,
        rewardVault: b,
        userRewardTokenPub: g,
        farmKeys: c,
        rewardInfo: d,
      });
      l.addInstruction({
        instructions: [P],
        instructionTypes: [U.FarmV6Restart],
      });
    }
    return l.versionBuild({ txVersion: o });
  }
  async addNewRewardToken(e) {
    let {
        txVersion: t,
        farmInfo: n,
        newRewardInfo: o,
        payer: r,
        feePayer: s,
      } = e,
      a = Ft[n.programId];
    a !== 6 && this.logAndCreateError("invalid farm version ", a);
    let c = Me((await this.scope.api.fetchFarmKeysById({ ids: n.id }))[0]),
      u = r != null ? r : this.scope.ownerPubKey,
      l = this.createTxBuilder(s),
      m = o.mint.equals(it) ? new Ie.PublicKey(nt.address) : o.mint,
      d = Ci({
        programId: new Ie.PublicKey(n.programId),
        poolId: new Ie.PublicKey(n.id),
        mint: m,
        type: "rewardVault",
      }),
      { rewardPubKey: p, newInstruction: y } = await this._getUserRewardInfo({
        rewardInfo: o,
        payer: u,
      });
    return (
      y && l.addInstruction(y),
      p ||
        this.logAndCreateError(
          "annot found target token accounts",
          this.scope.account.tokenAccounts,
        ),
      (o.mint = m),
      l
        .addInstruction({
          instructions: [
            cs({
              payer: this.scope.ownerPubKey,
              userRewardTokenPub: p,
              farmKeys: c,
              rewardVault: d,
              rewardInfo: o,
            }),
          ],
          instructionTypes: [U.FarmV6CreatorAddReward],
        })
        .versionBuild({ txVersion: t })
    );
  }
  async addNewRewardsToken(e) {
    let {
        txVersion: t,
        farmInfo: n,
        newRewardInfos: o,
        payer: r,
        feePayer: s,
      } = e,
      a = Ft[n.programId];
    a !== 6 && this.logAndCreateError("invalid farm version ", a);
    let c = Me((await this.scope.api.fetchFarmKeysById({ ids: n.id }))[0]),
      u = r != null ? r : this.scope.ownerPubKey,
      l = this.createTxBuilder(s);
    for (let m of o) {
      let d = m.mint.equals(it) ? new Ie.PublicKey(nt.address) : m.mint,
        p = Ci({
          programId: new Ie.PublicKey(n.programId),
          poolId: new Ie.PublicKey(n.id),
          mint: d,
          type: "rewardVault",
        }),
        { rewardPubKey: y, newInstruction: f } = await this._getUserRewardInfo({
          rewardInfo: m,
          payer: u,
        });
      f && l.addInstruction(f),
        y ||
          this.logAndCreateError(
            "cannot found target token accounts",
            this.scope.account.tokenAccounts,
          );
      let b = cs({
        payer: this.scope.ownerPubKey,
        userRewardTokenPub: y,
        farmKeys: c,
        rewardVault: p,
        rewardInfo: X(N({}, m), { mint: d }),
      });
      l.addInstruction({
        instructions: [b],
        instructionTypes: [U.FarmV6CreatorAddReward],
      });
    }
    return l.versionBuild({ txVersion: t });
  }
  async deposit(e) {
    let {
      txVersion: t,
      farmInfo: n,
      amount: o,
      feePayer: r,
      useSOLBalance: s,
      associatedOnly: a = !0,
      checkCreateATAOwner: c = !1,
      userAuxiliaryLedgers: u,
      computeBudgetConfig: l,
      txTipConfig: m,
    } = e;
    this.scope.availability.addFarm === !1 &&
      this.logAndCreateError("farm deposit feature disabled in your region");
    let { rewardInfos: d, programId: p } = n,
      y = Ft[p];
    y === 4 &&
      this.logAndCreateError("V4 has suspended deposits:", n.programId),
      $r(y) || this.logAndCreateError("invalid farm program:", n.programId);
    let [f, b] = [new Ie.PublicKey(n.programId), new Ie.PublicKey(n.id)],
      g = (await this.scope.api.fetchFarmKeysById({ ids: n.id }))[0],
      w = yt({
        programId: f,
        poolId: b,
        owner: this.scope.ownerPubKey,
        version: y,
      }),
      P = this.createTxBuilder(r);
    P.addCustomComputeBudget(l), P.addTipInstruction(m);
    let T = {};
    for (let F of this.scope.account.tokenAccounts)
      if (a) {
        let W = oe(this.scope.ownerPubKey, F.mint, F.programId).publicKey;
        F.publicKey &&
          W.equals(F.publicKey) &&
          (T[F.mint.toString()] = F.publicKey);
      } else T[F.mint.toString()] = F.publicKey;
    let B = g.lpMint,
      h = T[B.address];
    h || this.logAndCreateError("you don't have any lp", "lp zero", T);
    let x = [];
    for (let F of d) {
      let W = s && F.mint.address === $.toString(),
        D = T[F.mint.address];
      if (!D) {
        let { account: ee, instructionParams: fe } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: F.mint.programId,
            mint: new Ie.PublicKey(F.mint.address),
            notUseTokenAccount: W,
            createInfo: { payer: r || this.scope.ownerPubKey, amount: 0 },
            owner: this.scope.ownerPubKey,
            skipCloseAccount: !W,
            associatedOnly: W ? !1 : a,
            checkCreateATAOwner: c,
          });
        (D = ee), fe && P.addInstruction(fe);
      }
      (T[F.mint.address] = D), x.push(D);
    }
    let S,
      K = await this.scope.connection.getAccountInfo(w);
    if (
      (K && (S = ri(y).decode(K.data)), n.programId !== ti.toString() && !S)
    ) {
      let { instruction: F, instructionType: W } = Ri({
        id: b,
        programId: f,
        version: y,
        ledger: w,
        owner: this.scope.ownerPubKey,
      });
      P.addInstruction({ instructions: [F], instructionTypes: [W] });
    }
    let I = Jr({
      version: y,
      rewardInfos: d,
      rewardTokenAccountsPublicKeys: x,
    });
    I && this.logAndCreateError(I);
    let C = {
        amount: J(o),
        owner: this.scope.ownerPubKey,
        farmInfo: n,
        farmKeys: g,
        lpAccount: h,
        rewardAccounts: x,
        userAuxiliaryLedgers:
          u == null ? void 0 : u.map((F) => new Ie.PublicKey(F)),
      },
      L = y === 6 ? Za(C) : y === 5 ? ja(C) : Ha(C),
      O = { 3: U.FarmV3Deposit, 5: U.FarmV5Deposit, 6: U.FarmV6Deposit };
    return P.addInstruction({
      instructions: [L],
      instructionTypes: [O[y]],
    }).versionBuild({ txVersion: t });
  }
  async withdraw(e) {
    let {
        txVersion: t,
        farmInfo: n,
        amount: o,
        deposited: r,
        useSOLBalance: s,
        feePayer: a,
        associatedOnly: c = !0,
        checkCreateATAOwner: u = !1,
        userAuxiliaryLedgers: l,
        computeBudgetConfig: m,
        txTipConfig: d,
      } = e,
      { rewardInfos: p } = n;
    this.scope.availability.removeFarm === !1 &&
      this.logAndCreateError("farm withdraw feature disabled in your region");
    let y = Ft[n.programId];
    $r(y) || this.logAndCreateError("invalid farm program:", n.programId);
    let f = (await this.scope.api.fetchFarmKeysById({ ids: n.id }))[0],
      b = this.createTxBuilder(a);
    b.addCustomComputeBudget(m), b.addTipInstruction(d);
    let g = {};
    for (let I of this.scope.account.tokenAccounts)
      if (c) {
        let C = oe(this.scope.ownerPubKey, I.mint).publicKey;
        I.publicKey &&
          C.equals(I.publicKey) &&
          (g[I.mint.toString()] = I.publicKey);
      } else g[I.mint.toString()] = I.publicKey;
    if (y !== 4) {
      let I = yt({
          programId: new Ie.PublicKey(n.programId),
          poolId: new Ie.PublicKey(n.id),
          owner: this.scope.ownerPubKey,
          version: y,
        }),
        C = await this.scope.connection.getAccountInfo(I);
      if (C)
        ri(y).decode(C.data).deposited.isZero() &&
          this.logAndCreateError("no deposited lp", { farmId: n.id });
      else if (y !== 6) {
        let { instruction: L, instructionType: O } = Ri({
          id: new Ie.PublicKey(f.id),
          programId: new Ie.PublicKey(f.programId),
          version: y,
          ledger: I,
          owner: this.scope.ownerPubKey,
        });
        b.addInstruction({ instructions: [L], instructionTypes: [O] });
      }
    }
    r &&
      r.isZero() &&
      !(l || []).length &&
      this.logAndCreateError("no deposited lp", { farmId: n.id });
    let w = f.lpMint.address,
      P = s && w === $.toString(),
      T = g[w.toString()];
    if (!T) {
      let { account: I, instructionParams: C } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: f.lpMint.programId,
          mint: new Ie.PublicKey(w),
          notUseTokenAccount: P,
          createInfo: { payer: a || this.scope.ownerPubKey, amount: 0 },
          owner: this.scope.ownerPubKey,
          skipCloseAccount: !0,
          associatedOnly: P ? !1 : c,
          checkCreateATAOwner: u,
        });
      (T = I), C && b.addInstruction(C);
    }
    g[w.toString()] = T;
    let B = [];
    for (let I of p) {
      let C = s && I.mint.address === $.toString(),
        L = g[I.mint.address];
      if (!L) {
        let { account: O, instructionParams: F } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: I.mint.programId,
            mint: new Ie.PublicKey(I.mint.address),
            notUseTokenAccount: C,
            createInfo: { payer: a || this.scope.ownerPubKey, amount: 0 },
            owner: this.scope.ownerPubKey,
            skipCloseAccount: !C,
            associatedOnly: C ? !1 : c,
            checkCreateATAOwner: u,
          });
        (L = O), F && b.addInstruction(F);
      }
      (g[I.mint.address] = L), B.push(L);
    }
    let h = Jr({
      version: y,
      rewardInfos: p,
      rewardTokenAccountsPublicKeys: B,
    });
    h && this.logAndCreateError(h);
    let x = {
        amount: J(o),
        owner: this.scope.ownerPubKey,
        farmInfo: n,
        farmKeys: f,
        lpAccount: T,
        rewardAccounts: B,
        userAuxiliaryLedgers:
          l == null ? void 0 : l.map((I) => new Ie.PublicKey(I)),
      },
      S = y === 6 ? Li(x) : y === 5 ? Oi(x) : y === 4 ? Ya(x) : Mi(x),
      K = {
        3: U.FarmV3Withdraw,
        4: U.FarmV4Withdraw,
        5: U.FarmV5Withdraw,
        6: U.FarmV6Withdraw,
      };
    return b
      .addInstruction({ instructions: [S], instructionTypes: [K[y]] })
      .versionBuild({ txVersion: t });
  }
  async withdrawFarmReward({
    farmInfo: e,
    withdrawMint: t,
    txVersion: n,
    computeBudgetConfig: o,
    txTipConfig: r,
    feePayer: s,
  }) {
    var f;
    this.scope.checkOwner();
    let a = Me((await this.scope.api.fetchFarmKeysById({ ids: e.id }))[0]),
      c = Ft[e.programId];
    c !== 6 && this.logAndCreateError("invalid farm version", c);
    let u = a.rewardInfos.find((b) => pt(b.mint.address).equals(pt(t)));
    u || this.logAndCreateError("withdraw mint error", "rewardInfos", e);
    let l = (f = u == null ? void 0 : u.vault) != null ? f : it,
      m = this.createTxBuilder(s),
      d;
    if (t.equals(it) || t.equals(Ie.PublicKey.default)) {
      let b = await yn({
        connection: this.scope.connection,
        owner: this.scope.ownerPubKey,
        payer: this.scope.ownerPubKey,
        amount: ss(
          X(N({}, u), {
            openTime: u.openTime,
            endTime: u.endTime,
            perSecond: new _(u.perSecond).mul(10 ** u.mint.decimals).toString(),
          }),
        ),
      });
      (d = b.addresses.newAccount), m.addInstruction(b);
    } else {
      let b = await this.scope.account.getCreatedTokenAccount({ mint: t });
      b === null
        ? ((d = await this.scope.account.getAssociatedTokenAccount(t)),
          m.addInstruction({
            instructions: [
              (0, _l.createAssociatedTokenAccountInstruction)(
                this.scope.ownerPubKey,
                d,
                this.scope.ownerPubKey,
                t,
              ),
            ],
            instructionTypes: [U.CreateATA],
          }))
        : (d = b);
    }
    let { instruction: p, instructionType: y } = Qa({
      programId: a.programId,
      id: a.id,
      authority: a.authority,
      lpVault: a.lpVault,
      rewardVault: l,
      userRewardToken: d,
      owner: this.scope.ownerPubKey,
    });
    return (
      m.addCustomComputeBudget(o),
      m.addTipInstruction(r),
      m
        .addInstruction({ instructions: [p], instructionTypes: [y] })
        .versionBuild({ txVersion: n })
    );
  }
  async harvestAllRewards(e) {
    let {
        farmInfoList: t,
        useSOLBalance: n,
        feePayer: o,
        associatedOnly: r = !0,
        checkCreateATAOwner: s = !1,
        userAuxiliaryLedgers: a,
        txVersion: c,
        computeBudgetConfig: u,
      } = e,
      l = this.createTxBuilder(o),
      m = {};
    for (let y of this.scope.account.tokenAccounts)
      if (r) {
        let f = oe(this.scope.ownerPubKey, y.mint).publicKey;
        y.publicKey &&
          f.equals(y.publicKey) &&
          (m[y.mint.toString()] = y.publicKey);
      } else m[y.mint.toString()] = y.publicKey;
    let p = (
      await this.scope.api.fetchFarmKeysById({
        ids: Object.values(t)
          .map((y) => y.id)
          .join(","),
      })
    ).reduce((y, f) => X(N({}, y), { [f.id]: f }), {});
    for (let y of Object.values(t)) {
      let { programId: f, lpMint: b, rewardInfos: g, id: w } = y,
        P = Ft[f],
        T = b.address,
        B = n && T === $.toString(),
        h = m[T];
      if (!h) {
        let { account: L, instructionParams: O } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: b.programId,
            mint: new Ie.PublicKey(T),
            notUseTokenAccount: B,
            createInfo: { payer: o || this.scope.ownerPubKey, amount: 0 },
            owner: this.scope.ownerPubKey,
            skipCloseAccount: !0,
            associatedOnly: B ? !1 : r,
            checkCreateATAOwner: s,
          });
        (h = L), O && l.addInstruction(O);
      }
      m[T.toString()] = h;
      let x = [];
      for (let L of g) {
        let O = n && L.mint.address === $.toString(),
          F = m[L.mint.address];
        if (!F) {
          let { account: W, instructionParams: D } =
            await this.scope.account.getOrCreateTokenAccount({
              tokenProgram: L.mint.programId,
              mint: new Ie.PublicKey(L.mint.address),
              notUseTokenAccount: O,
              createInfo: { payer: o || this.scope.ownerPubKey, amount: 0 },
              owner: this.scope.ownerPubKey,
              skipCloseAccount: !O,
              associatedOnly: O ? !1 : r,
              checkCreateATAOwner: s,
            });
          (F = W), D && l.addInstruction(D);
        }
        (m[L.mint.address] = F), x.push(F);
      }
      let S = p[w],
        K = {
          amount: Xe,
          owner: this.scope.ownerPubKey,
          farmInfo: y,
          farmKeys: S,
          lpAccount: h,
          rewardAccounts: x,
          userAuxiliaryLedgers:
            a == null ? void 0 : a.map((L) => new Ie.PublicKey(L)),
        },
        I = P === 6 ? Li(K) : P === 5 ? Oi(K) : Mi(K),
        C = { 3: U.FarmV3Withdraw, 5: U.FarmV5Withdraw, 6: U.FarmV6Withdraw };
      l.addInstruction({ instructions: [I], instructionTypes: [C[P]] });
    }
    return c === 1
      ? l.sizeCheckBuild({ computeBudgetConfig: u })
      : l.sizeCheckBuildV0({ computeBudgetConfig: u });
  }
};
var Ye = require("@solana/web3.js"),
  xt = require("@solana/spl-token");
var v = require("@solana/web3.js"),
  gs = be(require("bn.js"));
var te = require("@solana/spl-token");
var Yl = be(require("bn.js"));
var Dt = be(require("bn.js")),
  ge = new Dt.default(0),
  vt = new Dt.default(1),
  bn = new Dt.default(-1),
  _t = new Dt.default(1).shln(64),
  Oo = new Dt.default(1).shln(128),
  ls = _t.sub(vt),
  Ni = 64,
  $a = Oo.subn(1),
  bt = -443636,
  It = -bt,
  Wt = new Dt.default("4295048016"),
  qt = new Dt.default("79226673521066979257578248091"),
  Mo = new Dt.default("4295048017"),
  No = new Dt.default("79226673521066979257578248090"),
  Ja = 16,
  eu = "59543866431248",
  tu = "184467440737095516",
  nu = "15793534762490258745",
  vo = new Dt.default(10).pow(new Dt.default(6)),
  Vl = ((n) => (
    (n[(n.rate_500 = 500)] = "rate_500"),
    (n[(n.rate_3000 = 3e3)] = "rate_3000"),
    (n[(n.rate_10000 = 1e4)] = "rate_10000"),
    n
  ))(Vl || {}),
  Bf = { [500]: 10, [3e3]: 60, [1e4]: 200 },
  xf = {
    version: 6,
    liquidity: ge,
    tickCurrent: 0,
    feeGrowthGlobalX64A: ge,
    feeGrowthGlobalX64B: ge,
    protocolFeesTokenA: ge,
    protocolFeesTokenB: ge,
    swapInAmountTokenA: ge,
    swapOutAmountTokenB: ge,
    swapInAmountTokenB: ge,
    swapOutAmountTokenA: ge,
    tickArrayBitmap: [],
    rewardInfos: [],
    day: {
      volume: 0,
      volumeFee: 0,
      feeA: 0,
      feeB: 0,
      feeApr: 0,
      rewardApr: { A: 0, B: 0, C: 0 },
      apr: 0,
      priceMax: 0,
      priceMin: 0,
    },
    week: {
      volume: 0,
      volumeFee: 0,
      feeA: 0,
      feeB: 0,
      feeApr: 0,
      rewardApr: { A: 0, B: 0, C: 0 },
      apr: 0,
      priceMax: 0,
      priceMin: 0,
    },
    month: {
      volume: 0,
      volumeFee: 0,
      feeA: 0,
      feeB: 0,
      feeApr: 0,
      rewardApr: { A: 0, B: 0, C: 0 },
      apr: 0,
      priceMax: 0,
      priceMin: 0,
    },
    tvl: 0,
  },
  iu = {
    tvl: 0,
    volumeQuote: 0,
    mintAmountA: 0,
    mintAmountB: 0,
    rewardDefaultInfos: [],
    farmUpcomingCount: 0,
    farmOngoingCount: 0,
    farmFinishedCount: 0,
    day: {
      volume: 0,
      volumeQuote: 0,
      volumeFee: 0,
      apr: 0,
      feeApr: 0,
      priceMin: 0,
      priceMax: 0,
      rewardApr: [0],
    },
    week: {
      volume: 0,
      volumeQuote: 0,
      volumeFee: 0,
      apr: 0,
      feeApr: 0,
      priceMin: 0,
      priceMax: 0,
      rewardApr: [0],
    },
    month: {
      volume: 0,
      volumeQuote: 0,
      volumeFee: 0,
      apr: 0,
      feeApr: 0,
      priceMin: 0,
      priceMax: 0,
      rewardApr: [0],
    },
    pooltype: [],
  },
  Sf = new Dt.default("18446744073700000000");
var pe = be(require("bn.js"));
function ou(i) {
  let e = new ArrayBuffer(2);
  return new DataView(e).setUint16(0, i, !1), new Uint8Array(e);
}
function Kf(i) {
  let e = new ArrayBuffer(2);
  return new DataView(e).setInt16(0, i, !1), new Uint8Array(e);
}
function Cf(i) {
  let e = new ArrayBuffer(4);
  return new DataView(e).setUint32(0, i, !1), new Uint8Array(e);
}
function _o(i) {
  let e = new ArrayBuffer(4);
  return new DataView(e).setInt32(0, i, !1), new Uint8Array(e);
}
function ms(i, e) {
  let t = 0;
  for (let n = i - 1; n >= 0 && !e.testn(n); n--) t++;
  return t;
}
function ds(i, e) {
  let t = 0;
  for (let n = 0; n < i && !e.testn(n); n++) t++;
  return t;
}
function vi(i, e) {
  for (let t = 0; t < i; t++) if (e.testn(t)) return !1;
  return !0;
}
function ru(i, e) {
  return vi(i, e) ? null : ms(i, e);
}
function su(i, e) {
  return vi(i, e) ? null : ds(i, e);
}
var El = Buffer.from("amm_config", "utf8"),
  Fl = Buffer.from("pool", "utf8"),
  Dl = Buffer.from("pool_vault", "utf8"),
  Wl = Buffer.from("pool_reward_vault", "utf8"),
  au = Buffer.from("position", "utf8"),
  ql = Buffer.from("tick_array", "utf8"),
  Ul = Buffer.from("operation", "utf8"),
  Gl = Buffer.from("pool_tick_array_bitmap_extension", "utf8"),
  Xl = Buffer.from("observation", "utf8");
function Rf(i, e) {
  return le([El, ou(e)], i);
}
function uu(i, e, t, n) {
  return le([Fl, e.toBuffer(), t.toBuffer(), n.toBuffer()], i);
}
function ps(i, e, t) {
  return le([Dl, e.toBuffer(), t.toBuffer()], i);
}
function cu(i, e, t) {
  return le([Wl, e.toBuffer(), t.toBuffer()], i);
}
function Ae(i, e, t) {
  return le([ql, e.toBuffer(), _o(t)], i);
}
function jt(i, e, t, n) {
  return le([au, e.toBuffer(), _o(t), _o(n)], i);
}
function Bt(i, e) {
  return le([au, e.toBuffer()], i);
}
function Un(i) {
  return le([Buffer.from("metadata", "utf8"), cn.toBuffer(), i.toBuffer()], cn);
}
function _i(i) {
  return le([Ul], i);
}
function We(i, e) {
  return le([Gl, e.toBuffer()], i);
}
function lu(i, e) {
  return le([Xl, e.toBuffer()], i);
}
var mu = Buffer.from("locked_position", "utf8");
function fs(i, e) {
  return le([mu, e.toBuffer()], i);
}
function Vi(i, e) {
  return le([mu, e.toBuffer()], i);
}
var zl = Buffer.from("support_mint", "utf8");
function ys(i, e) {
  return le([zl, e.toBuffer()], i);
}
var Vt = require("@solana/web3.js"),
  pu = require("@solana/spl-token"),
  ve = be(require("bn.js"));
var on = be(require("bn.js"));
var Ei = class {
  static getfeeGrowthInside(e, t, n) {
    let o = new on.default(0),
      r = new on.default(0);
    e.tickCurrent >= t.tick
      ? ((o = t.feeGrowthOutsideX64A), (r = t.feeGrowthOutsideX64B))
      : ((o = e.feeGrowthGlobalX64A.sub(t.feeGrowthOutsideX64A)),
        (r = e.feeGrowthGlobalX64B.sub(t.feeGrowthOutsideX64B)));
    let s = new on.default(0),
      a = new on.default(0);
    e.tickCurrent < n.tick
      ? ((s = n.feeGrowthOutsideX64A), (a = n.feeGrowthOutsideX64B))
      : ((s = e.feeGrowthGlobalX64A.sub(n.feeGrowthOutsideX64A)),
        (a = e.feeGrowthGlobalX64B.sub(n.feeGrowthOutsideX64B)));
    let c = ae.wrappingSubU128(ae.wrappingSubU128(e.feeGrowthGlobalX64A, o), s),
      u = ae.wrappingSubU128(ae.wrappingSubU128(e.feeGrowthGlobalX64B, r), a);
    return { feeGrowthInsideX64A: c, feeGrowthInsideBX64: u };
  }
  static GetPositionFees(e, t, n, o) {
    let { feeGrowthInsideX64A: r, feeGrowthInsideBX64: s } =
        this.getfeeGrowthInside(e, n, o),
      a = ae.mulDivFloor(
        ae.wrappingSubU128(r, t.feeGrowthInsideLastX64A),
        t.liquidity,
        _t,
      ),
      c = t.tokenFeesOwedA.add(a),
      u = ae.mulDivFloor(
        ae.wrappingSubU128(s, t.feeGrowthInsideLastX64B),
        t.liquidity,
        _t,
      ),
      l = t.tokenFeesOwedB.add(u);
    return { tokenFeeAmountA: c, tokenFeeAmountB: l };
  }
  static GetPositionFeesV2(e, t, n, o) {
    let { feeGrowthInsideX64A: r, feeGrowthInsideBX64: s } =
        this.getfeeGrowthInside(e, n, o),
      a = ae.mulDivFloor(
        ae.wrappingSubU128(r, t.feeGrowthInsideLastX64A),
        t.liquidity,
        _t,
      ),
      c = t.tokenFeesOwedA.add(a),
      u = ae.mulDivFloor(
        ae.wrappingSubU128(s, t.feeGrowthInsideLastX64B),
        t.liquidity,
        _t,
      ),
      l = t.tokenFeesOwedB.add(u);
    return { tokenFeeAmountA: c, tokenFeeAmountB: l };
  }
  static GetPositionRewardsV2(e, t, n, o) {
    let r = [],
      s = this.getRewardGrowthInsideV2(e.tickCurrent, n, o, e.rewardInfos);
    for (let a = 0; a < s.length; a++) {
      let c = s[a],
        u = t.rewardInfos[a],
        l = ae.wrappingSubU128(c, u.growthInsideLastX64),
        m = ae.mulDivFloor(l, t.liquidity, _t),
        d = u.rewardAmountOwed.add(m);
      r.push(d);
    }
    return r;
  }
  static GetPositionRewards(e, t, n, o) {
    let r = [],
      s = this.getRewardGrowthInside(e.tickCurrent, n, o, e.rewardInfos);
    for (let a = 0; a < s.length; a++) {
      let c = s[a],
        u = t.rewardInfos[a],
        l = ae.wrappingSubU128(c, u.growthInsideLastX64),
        m = ae.mulDivFloor(l, t.liquidity, _t),
        d = u.rewardAmountOwed.add(m);
      r.push(d);
    }
    return r;
  }
  static getRewardGrowthInside(e, t, n, o) {
    let r = [];
    for (let s = 0; s < o.length; s++) {
      let a = new on.default(0);
      t.liquidityGross.eqn(0)
        ? (a = o[s].rewardGrowthGlobalX64)
        : e < t.tick
          ? (a = o[s].rewardGrowthGlobalX64.sub(t.rewardGrowthsOutsideX64[s]))
          : (a = t.rewardGrowthsOutsideX64[s]);
      let c = new on.default(0);
      n.liquidityGross.eqn(0) ||
        (e < n.tick
          ? (c = n.rewardGrowthsOutsideX64[s])
          : (c = o[s].rewardGrowthGlobalX64.sub(n.rewardGrowthsOutsideX64[s]))),
        r.push(
          ae.wrappingSubU128(
            ae.wrappingSubU128(o[s].rewardGrowthGlobalX64, a),
            c,
          ),
        );
    }
    return r;
  }
  static getRewardGrowthInsideV2(e, t, n, o) {
    let r = [];
    for (let s = 0; s < o.length; s++) {
      let a = new on.default(0);
      t.liquidityGross.eqn(0)
        ? (a = o[s].rewardGrowthGlobalX64)
        : e < t.tick
          ? (a = o[s].rewardGrowthGlobalX64.sub(t.rewardGrowthsOutsideX64[s]))
          : (a = t.rewardGrowthsOutsideX64[s]);
      let c = new on.default(0);
      n.liquidityGross.eqn(0) ||
        (e < n.tick
          ? (c = n.rewardGrowthsOutsideX64[s])
          : (c = o[s].rewardGrowthGlobalX64.sub(n.rewardGrowthsOutsideX64[s]))),
        r.push(
          ae.wrappingSubU128(
            ae.wrappingSubU128(o[s].rewardGrowthGlobalX64, a),
            c,
          ),
        );
    }
    return r;
  }
  static getAmountsFromLiquidity({
    poolInfo: e,
    ownerPosition: t,
    liquidity: n,
    slippage: o,
    add: r,
    epochInfo: s,
  }) {
    var b, g, w, P;
    let a = re.priceToSqrtPriceX64(
        new _(e.price),
        e.mintA.decimals,
        e.mintB.decimals,
      ),
      c = re.getSqrtPriceX64FromTick(t.tickLower),
      u = re.getSqrtPriceX64FromTick(t.tickUpper),
      l = r ? 1 + o : 1 - o,
      m = we.getAmountsFromLiquidity(a, c, u, n, r),
      [d, p] = [
        he(
          m.amountA,
          (b = e.mintA.extensions) == null ? void 0 : b.feeConfig,
          s,
          !0,
        ),
        he(
          m.amountB,
          (g = e.mintB.extensions) == null ? void 0 : g.feeConfig,
          s,
          !0,
        ),
      ],
      [y, f] = [
        he(
          new on.default(new _(m.amountA.toString()).mul(l).toFixed(0)),
          (w = e.mintA.extensions) == null ? void 0 : w.feeConfig,
          s,
          !0,
        ),
        he(
          new on.default(new _(m.amountB.toString()).mul(l).toFixed(0)),
          (P = e.mintB.extensions) == null ? void 0 : P.feeConfig,
          s,
          !0,
        ),
      ];
    return {
      liquidity: n,
      amountA: d,
      amountB: p,
      amountSlippageA: y,
      amountSlippageB: f,
      expirationTime: Ht(d.expirationTime, p.expirationTime),
    };
  }
};
var Ql = 15,
  Pe = class {
    static async getTickArrays(e, t, n, o, r, s, a) {
      let c = [],
        u = Z.getTickArrayStartIndexByTick(o, r),
        l = Z.getInitializedTickArrayInRange(s, a, r, u, Math.floor(Ql / 2));
      for (let p = 0; p < l.length; p++) {
        let { publicKey: y } = Ae(t, n, l[p]);
        c.push(y);
      }
      let m = (await zt(e, c)).map((p) =>
          p !== null ? Fi.decode(p.data) : null,
        ),
        d = {};
      for (let p = 0; p < c.length; p++) {
        let y = m[p];
        y !== null && (d[y.startTickIndex] = X(N({}, y), { address: c[p] }));
      }
      return d;
    }
    static nextInitializedTick(e, t, n, o, r, s) {
      let {
        initializedTick: a,
        tickArrayAddress: c,
        tickArrayStartTickIndex: u,
      } = this.nextInitializedTickInOneArray(e, t, n, o, r, s);
      for (; a == null || a.liquidityGross.lten(0); ) {
        if (
          ((u = Z.getNextTickArrayStartIndex(u, r, s)),
          this.checkIsValidStartIndex(u, r))
        )
          throw new Error("No enough initialized tickArray");
        let l = n[u];
        if (l === void 0) continue;
        let {
          nextTick: m,
          tickArrayAddress: d,
          tickArrayStartTickIndex: p,
        } = this.firstInitializedTickInOneArray(e, t, l, s);
        [a, c, u] = [m, d, p];
      }
      if (a == null) throw new Error("No invaild tickArray cache");
      return { nextTick: a, tickArrayAddress: c, tickArrayStartTickIndex: u };
    }
    static nextInitializedTickArray(e, t, n, o, r) {
      let s = Math.floor(e / Pe.tickCount(t)),
        a = n
          ? Z.searchLowBitFromStart(o, r, s - 1, 1, t)
          : Z.searchHightBitFromStart(o, r, s + 1, 1, t);
      return a.length > 0
        ? { isExist: !0, nextStartIndex: a[0] }
        : { isExist: !1, nextStartIndex: 0 };
    }
    static firstInitializedTickInOneArray(e, t, n, o) {
      let r;
      if (o) {
        let a = et - 1;
        for (; a >= 0; ) {
          let c = n.ticks[a];
          if (c.liquidityGross.gtn(0)) {
            r = c;
            break;
          }
          a = a - 1;
        }
      } else {
        let a = 0;
        for (; a < et; ) {
          let c = n.ticks[a];
          if (c.liquidityGross.gtn(0)) {
            r = c;
            break;
          }
          a = a + 1;
        }
      }
      let { publicKey: s } = Ae(e, t, n.startTickIndex);
      return {
        nextTick: r,
        tickArrayAddress: s,
        tickArrayStartTickIndex: n.startTickIndex,
      };
    }
    static nextInitializedTickInOneArray(e, t, n, o, r, s) {
      let a = Z.getTickArrayStartIndexByTick(o, r),
        c = Math.floor((o - a) / r),
        u = n[a];
      if (u == null)
        return {
          initializedTick: void 0,
          tickArrayAddress: void 0,
          tickArrayStartTickIndex: a,
        };
      let l;
      if (s)
        for (; c >= 0; ) {
          let d = u.ticks[c];
          if (d.liquidityGross.gtn(0)) {
            l = d;
            break;
          }
          c = c - 1;
        }
      else
        for (c = c + 1; c < et; ) {
          let d = u.ticks[c];
          if (d.liquidityGross.gtn(0)) {
            l = d;
            break;
          }
          c = c + 1;
        }
      let { publicKey: m } = Ae(e, t, a);
      return {
        initializedTick: l,
        tickArrayAddress: m,
        tickArrayStartTickIndex: u.startTickIndex,
      };
    }
    static getArrayStartIndex(e, t) {
      let n = this.tickCount(t);
      return Math.floor(e / n) * n;
    }
    static checkIsValidStartIndex(e, t) {
      if (Z.checkIsOutOfBoundary(e)) {
        if (e > It) return !1;
        let n = Z.getTickArrayStartIndexByTick(bt, t);
        return e == n;
      }
      return e % this.tickCount(t) == 0;
    }
    static tickCount(e) {
      return et * e;
    }
  };
var bs = 14,
  gn = class {
    static maxTickInTickarrayBitmap(e) {
      return e * et * Gn;
    }
    static getBitmapTickBoundary(e, t) {
      let n = this.maxTickInTickarrayBitmap(t),
        o = Math.floor(Math.abs(e) / n);
      e < 0 && Math.abs(e) % n != 0 && (o += 1);
      let r = n * o;
      return e < 0
        ? { minValue: -r, maxValue: -r + n }
        : { minValue: r, maxValue: r + n };
    }
    static nextInitializedTickArrayStartIndex(e, t, n, o) {
      if (!Pe.checkIsValidStartIndex(t, n))
        throw Error("nextInitializedTickArrayStartIndex check error");
      let r = this.maxTickInTickarrayBitmap(n),
        s = o ? t - Pe.tickCount(n) : t + Pe.tickCount(n);
      if (s < -r || s >= r) return { isInit: !1, tickIndex: t };
      let a = n * et,
        c = s / a + 512;
      s < 0 && s % a != 0 && c--;
      let u = Math.abs(c);
      if (o) {
        let l = e.shln(1024 - u - 1),
          m = ru(1024, l);
        if (m !== null) {
          let d = (u - m - 512) * a;
          return { isInit: !0, tickIndex: d };
        } else return { isInit: !1, tickIndex: -r };
      } else {
        let l = e.shrn(u),
          m = su(1024, l);
        if (m !== null) {
          let d = (u + m - 512) * a;
          return { isInit: !0, tickIndex: d };
        } else return { isInit: !1, tickIndex: r - Pe.tickCount(n) };
      }
    }
  },
  Di = class {
    static getBitmapOffset(e, t) {
      if (!Pe.checkIsValidStartIndex(e, t))
        throw new Error("No enough initialized tickArray");
      this.checkExtensionBoundary(e, t);
      let n = gn.maxTickInTickarrayBitmap(t),
        o = Math.floor(Math.abs(e) / n) - 1;
      return e < 0 && Math.abs(e) % n === 0 && o--, o;
    }
    static getBitmap(e, t, n) {
      let o = this.getBitmapOffset(e, t);
      return e < 0
        ? { offset: o, tickarrayBitmap: n.negativeTickArrayBitmap[o] }
        : { offset: o, tickarrayBitmap: n.positiveTickArrayBitmap[o] };
    }
    static checkExtensionBoundary(e, t) {
      let { positiveTickBoundary: n, negativeTickBoundary: o } =
        this.extensionTickBoundary(t);
      if (e >= o && e < n)
        throw Error("checkExtensionBoundary -> InvalidTickArrayBoundary");
    }
    static extensionTickBoundary(e) {
      let t = gn.maxTickInTickarrayBitmap(e),
        n = -t;
      if (It <= t)
        throw Error(`extensionTickBoundary check error: ${It}, ${t}`);
      if (n <= bt)
        throw Error(`extensionTickBoundary check error: ${n}, ${bt}`);
      return { positiveTickBoundary: t, negativeTickBoundary: n };
    }
    static checkTickArrayIsInit(e, t, n) {
      let { tickarrayBitmap: o } = this.getBitmap(e, t, n),
        r = this.tickArrayOffsetInBitmap(e, t);
      return {
        isInitialized: Z.mergeTickArrayBitmap(o).testn(r),
        startIndex: e,
      };
    }
    static nextInitializedTickArrayFromOneBitmap(e, t, n, o) {
      let r = Pe.tickCount(t),
        s = n ? e - r : e + r,
        { tickarrayBitmap: a } = this.getBitmap(s, t, o);
      return this.nextInitializedTickArrayInBitmap(a, s, t, n);
    }
    static nextInitializedTickArrayInBitmap(e, t, n, o) {
      let { minValue: r, maxValue: s } = gn.getBitmapTickBoundary(t, n),
        a = this.tickArrayOffsetInBitmap(t, n);
      if (o) {
        let c = Z.mergeTickArrayBitmap(e).shln(Gn - 1 - a),
          u = vi(512, c) ? null : ms(512, c);
        if (u !== null) {
          let l = t - u * Pe.tickCount(n);
          return { isInit: !0, tickIndex: l };
        } else return { isInit: !1, tickIndex: r };
      } else {
        let c = Z.mergeTickArrayBitmap(e).shrn(a),
          u = vi(512, c) ? null : ds(512, c);
        if (u !== null) {
          let l = t + u * Pe.tickCount(n);
          return { isInit: !0, tickIndex: l };
        } else return { isInit: !1, tickIndex: s - Pe.tickCount(n) };
      }
    }
    static tickArrayOffsetInBitmap(e, t) {
      let n = Math.abs(e) % gn.maxTickInTickarrayBitmap(t),
        o = Math.floor(n / Pe.tickCount(t));
      return e < 0 && n != 0 && (o = Gn - o), o;
    }
  };
var Oe = class {
  static getOutputAmountAndRemainAccounts(e, t, n, o, r, s = !1) {
    let a = n.toBase58() === e.mintA.address,
      c = [],
      {
        isExist: u,
        startIndex: l,
        nextAccountMeta: m,
      } = this.getFirstInitializedTickArray(e, a);
    if (!u || l === void 0 || !m) throw new Error("Invalid tick array");
    c.push(m);
    let {
      allTrade: d,
      amountCalculated: p,
      accounts: y,
      sqrtPriceX64: f,
      feeAmount: b,
    } = Xn.swapCompute(
      e.programId,
      e.id,
      t,
      e.tickArrayBitmap,
      e.exBitmapInfo,
      a,
      e.ammConfig.tradeFeeRate,
      e.liquidity,
      e.tickCurrent,
      e.tickSpacing,
      e.sqrtPriceX64,
      o,
      l,
      r,
      s,
    );
    return (
      c.push(...y),
      {
        allTrade: d,
        expectedAmountOut: p.mul(bn),
        remainingAccounts: c,
        executionPrice: f,
        feeAmount: b,
      }
    );
  }
  static getInputAmountAndRemainAccounts(e, t, n, o, r) {
    let s = n.toBase58() === e.mintB.address,
      a = [],
      {
        isExist: c,
        startIndex: u,
        nextAccountMeta: l,
      } = this.getFirstInitializedTickArray(e, s);
    if (!c || u === void 0 || !l) throw new Error("Invalid tick array");
    try {
      let f = this.preInitializedTickArrayStartIndex(e, s);
      if (f.isExist) {
        let { publicKey: b } = Ae(e.programId, e.id, f.nextStartIndex);
        a.push(b);
      }
    } catch {}
    a.push(l);
    let {
      amountCalculated: m,
      accounts: d,
      sqrtPriceX64: p,
      feeAmount: y,
    } = Xn.swapCompute(
      e.programId,
      e.id,
      t,
      e.tickArrayBitmap,
      e.exBitmapInfo,
      s,
      e.ammConfig.tradeFeeRate,
      e.liquidity,
      e.tickCurrent,
      e.tickSpacing,
      e.sqrtPriceX64,
      o.mul(bn),
      u,
      r,
    );
    return (
      a.push(...d),
      {
        expectedAmountIn: m,
        remainingAccounts: a,
        executionPrice: p,
        feeAmount: y,
      }
    );
  }
  static getFirstInitializedTickArray(e, t) {
    let { isInitialized: n, startIndex: o } =
      Oe.isOverflowDefaultTickarrayBitmap(e.tickSpacing, [e.tickCurrent])
        ? Di.checkTickArrayIsInit(
            Pe.getArrayStartIndex(e.tickCurrent, e.tickSpacing),
            e.tickSpacing,
            e.exBitmapInfo,
          )
        : Z.checkTickArrayIsInitialized(
            Z.mergeTickArrayBitmap(e.tickArrayBitmap),
            e.tickCurrent,
            e.tickSpacing,
          );
    if (n) {
      let { publicKey: a } = Ae(e.programId, e.id, o);
      return { isExist: !0, startIndex: o, nextAccountMeta: a };
    }
    let { isExist: r, nextStartIndex: s } =
      this.nextInitializedTickArrayStartIndex(
        e,
        Pe.getArrayStartIndex(e.tickCurrent, e.tickSpacing),
        t,
      );
    if (r) {
      let { publicKey: a } = Ae(e.programId, e.id, s);
      return { isExist: !0, startIndex: s, nextAccountMeta: a };
    }
    return { isExist: !1, nextAccountMeta: void 0, startIndex: void 0 };
  }
  static preInitializedTickArrayStartIndex(e, t) {
    let n = Math.floor(e.tickCurrent / Pe.tickCount(e.tickSpacing)),
      o = t
        ? Z.searchHightBitFromStart(
            e.tickArrayBitmap,
            e.exBitmapInfo,
            n + 1,
            1,
            e.tickSpacing,
          )
        : Z.searchLowBitFromStart(
            e.tickArrayBitmap,
            e.exBitmapInfo,
            n - 1,
            1,
            e.tickSpacing,
          );
    return o.length > 0
      ? { isExist: !0, nextStartIndex: o[0] }
      : { isExist: !1, nextStartIndex: 0 };
  }
  static nextInitializedTickArrayStartIndex(e, t, n) {
    for (t = Pe.getArrayStartIndex(e.tickCurrent, e.tickSpacing); ; ) {
      let { isInit: o, tickIndex: r } = gn.nextInitializedTickArrayStartIndex(
        Z.mergeTickArrayBitmap(e.tickArrayBitmap),
        t,
        e.tickSpacing,
        n,
      );
      if (o) return { isExist: !0, nextStartIndex: r };
      t = r;
      let { isInit: s, tickIndex: a } =
        Di.nextInitializedTickArrayFromOneBitmap(
          t,
          e.tickSpacing,
          n,
          e.exBitmapInfo,
        );
      if (s) return { isExist: !0, nextStartIndex: a };
      if (((t = a), t < bt || t > It))
        return { isExist: !1, nextStartIndex: 0 };
    }
  }
  static async updatePoolRewardInfos({
    connection: e,
    apiPoolInfo: t,
    chainTime: n,
    poolLiquidity: o,
    rewardInfos: r,
  }) {
    var a, c, u;
    let s = [];
    for (let l = 0; l < r.length; l++) {
      let m = r[l],
        d =
          (u =
            (a = t.rewardDefaultInfos[l]) == null
              ? void 0
              : a.mint.programId) != null
            ? u
            : (c = await e.getAccountInfo(m.tokenMint)) == null
              ? void 0
              : c.owner;
      if (d === void 0) throw Error("get new reward mint info error");
      let p = X(N({}, m), {
        perSecond: ae.x64ToDecimal(m.emissionsPerSecondX64),
        remainingRewards: void 0,
        tokenProgramId: new Vt.PublicKey(d),
      });
      if (p.tokenMint.equals(Vt.PublicKey.default)) continue;
      if (n <= p.openTime.toNumber() || o.eq(ge)) {
        s.push(p);
        continue;
      }
      let y = new ve.default(Math.min(p.endTime.toNumber(), n)),
        f = y.sub(p.lastUpdateTime),
        b = ae.mulDivFloor(f, p.emissionsPerSecondX64, o),
        g = p.rewardGrowthGlobalX64.add(b),
        w = ae.mulDivFloor(f, p.emissionsPerSecondX64, _t),
        P = p.rewardTotalEmissioned.add(w);
      s.push(
        X(N({}, p), {
          rewardGrowthGlobalX64: g,
          rewardTotalEmissioned: P,
          lastUpdateTime: y,
        }),
      );
    }
    return s;
  }
  static isOverflowDefaultTickarrayBitmap(e, t) {
    let { maxTickBoundary: n, minTickBoundary: o } = this.tickRange(e);
    for (let r of t) {
      let s = Z.getTickArrayStartIndexByTick(r, e);
      if (s >= n || s < o) return !0;
    }
    return !1;
  }
  static tickRange(e) {
    let t = gn.maxTickInTickarrayBitmap(e),
      n = -t;
    return (
      t > It && (t = Pe.getArrayStartIndex(It, e) + Pe.tickCount(e)),
      n < bt && (n = Pe.getArrayStartIndex(bt, e)),
      { maxTickBoundary: t, minTickBoundary: n }
    );
  }
  static get_tick_array_offset(e, t) {
    if (!Pe.checkIsValidStartIndex(e, t))
      throw new Error("No enough initialized tickArray");
    return (e / Pe.tickCount(t)) * Gn;
  }
  static async fetchExBitmaps({
    connection: e,
    exBitmapAddress: t,
    batchRequest: n,
  }) {
    let o = await je(
        e,
        t.map((s) => ({ pubkey: s })),
        { batchRequest: n },
      ),
      r = {};
    for (let s of o)
      s.accountInfo !== null &&
        (r[s.pubkey.toString()] = yu.decode(s.accountInfo.data));
    return r;
  }
  static async fetchMultiplePoolTickArrays({
    connection: e,
    poolKeys: t,
    batchRequest: n,
  }) {
    let o = {},
      r = [];
    for (let c of t) {
      let u = Z.getTickArrayStartIndexByTick(c.tickCurrent, c.tickSpacing),
        l = Z.getInitializedTickArrayInRange(
          c.tickArrayBitmap,
          c.exBitmapInfo,
          c.tickSpacing,
          u,
          7,
        );
      for (let m of l) {
        let { publicKey: d } = Ae(c.programId, c.id, m);
        r.push({ pubkey: d }), (o[d.toString()] = c.id);
      }
    }
    let s = await je(e, r, { batchRequest: n }),
      a = {};
    for (let c of s) {
      if (!c.accountInfo) continue;
      let u = o[c.pubkey.toString()];
      if (!u) continue;
      a[u.toString()] === void 0 && (a[u.toString()] = {});
      let l = Fi.decode(c.accountInfo.data);
      a[u.toString()][l.startTickIndex] = X(N({}, l), { address: c.pubkey });
    }
    return a;
  }
  static async fetchPoolsAccountPosition({
    pools: e,
    connection: t,
    ownerInfo: n,
    batchRequest: o = !1,
    updateOwnerRewardAndFee: r = !0,
  }) {
    var a;
    let s = [];
    for (let c = 0; c < e.length; c++) {
      let u = e[c];
      u !== null &&
        (s.find((l) => l.equals(u.state.programId)) ||
          s.push(u.state.programId));
    }
    if (n) {
      let c = n.tokenAccounts.map((d) => d.accountInfo.mint),
        u = [];
      for (let d of c) for (let p of s) u.push(Bt(p, d).publicKey);
      let l = await zt(t, u, { batchRequest: o }),
        m = {};
      for (let d of l) {
        if (d === null) continue;
        let p = Wi.decode(d.data),
          y = p.poolId.toString(),
          f = e.find((S) => S.state.id.toBase58() === y);
        if (f === void 0) continue;
        let b = f.state,
          g = Z._getTickPriceLegacy({
            poolInfo: b,
            tick: p.tickLower,
            baseIn: !0,
          }),
          w = Z._getTickPriceLegacy({
            poolInfo: b,
            tick: p.tickUpper,
            baseIn: !0,
          }),
          { amountA: P, amountB: T } = we.getAmountsFromLiquidity(
            b.sqrtPriceX64,
            g.tickSqrtPriceX64,
            w.tickSqrtPriceX64,
            p.liquidity,
            !1,
          ),
          B = 1 / (1 - Math.sqrt(Math.sqrt(g.price.div(w.price).toNumber())));
        f.positionAccount = [
          ...((a = f.positionAccount) != null ? a : []),
          {
            poolId: p.poolId,
            nftMint: p.nftMint,
            priceLower: g.price,
            priceUpper: w.price,
            amountA: P,
            amountB: T,
            tickLower: p.tickLower,
            tickUpper: p.tickUpper,
            liquidity: p.liquidity,
            feeGrowthInsideLastX64A: p.feeGrowthInsideLastX64A,
            feeGrowthInsideLastX64B: p.feeGrowthInsideLastX64B,
            tokenFeesOwedA: p.tokenFeesOwedA,
            tokenFeesOwedB: p.tokenFeesOwedB,
            rewardInfos: p.rewardInfos.map((S) =>
              X(N({}, S), { pendingReward: new ve.default(0) }),
            ),
            leverage: B,
            tokenFeeAmountA: new ve.default(0),
            tokenFeeAmountB: new ve.default(0),
          },
        ];
        let h = await Z.getTickArrayAddressByTick(
            f.state.programId,
            p.poolId,
            p.tickLower,
            f.state.tickSpacing,
          ),
          x = await Z.getTickArrayAddressByTick(
            f.state.programId,
            p.poolId,
            p.tickUpper,
            f.state.tickSpacing,
          );
        (m[
          `${f.state.programId.toString()}-${p.poolId.toString()}-${p.tickLower}`
        ] = h),
          (m[
            `${f.state.programId.toString()}-${p.poolId.toString()}-${p.tickUpper}`
          ] = x);
      }
      if (r) {
        let d = Object.values(m),
          p = await zt(t, d, { batchRequest: o }),
          y = {};
        for (let f = 0; f < d.length; f++) {
          let b = p[f];
          if (b === null) continue;
          let g = d[f].toString();
          y[g] = Fi.decode(b.data);
        }
        for (let { state: f, positionAccount: b } of e)
          if (!!b)
            for (let g of b) {
              let w = `${f.programId.toString()}-${f.id.toString()}-${g.tickLower}`,
                P = `${f.programId.toString()}-${f.id.toString()}-${g.tickUpper}`,
                T = y[m[w].toString()],
                B = y[m[P].toString()],
                h = T.ticks[Z.getTickOffsetInArray(g.tickLower, f.tickSpacing)],
                x = B.ticks[Z.getTickOffsetInArray(g.tickUpper, f.tickSpacing)],
                { tokenFeeAmountA: S, tokenFeeAmountB: K } =
                  await Ei.GetPositionFees(f, g, h, x),
                I = await Ei.GetPositionRewards(f, g, h, x);
              (g.tokenFeeAmountA = S.gte(new ve.default(0))
                ? S
                : new ve.default(0)),
                (g.tokenFeeAmountB = K.gte(new ve.default(0))
                  ? K
                  : new ve.default(0));
              for (let C = 0; C < I.length; C++)
                g.rewardInfos[C].pendingReward = I[C].gte(new ve.default(0))
                  ? I[C]
                  : new ve.default(0);
            }
      }
    }
    return e;
  }
  static computeAmountOut({
    poolInfo: e,
    tickArrayCache: t,
    baseMint: n,
    epochInfo: o,
    amountIn: r,
    slippage: s,
    priceLimit: a = new _(0),
    catchLiquidityInsufficient: c = !1,
  }) {
    var L;
    let u,
      l = n.toBase58() === e.mintA.address,
      [m, d] = l
        ? [e.mintA.extensions.feeConfig, e.mintB.extensions.feeConfig]
        : [e.mintB.extensions.feeConfig, e.mintA.extensions.feeConfig];
    a.equals(new _(0))
      ? (u = l ? Wt.add(new ve.default(1)) : qt.sub(new ve.default(1)))
      : (u = re.priceToSqrtPriceX64(a, e.mintA.decimals, e.mintB.decimals));
    let p = he(r, m, o, !1),
      {
        allTrade: y,
        expectedAmountOut: f,
        remainingAccounts: b,
        executionPrice: g,
        feeAmount: w,
      } = Oe.getOutputAmountAndRemainAccounts(
        e,
        t,
        n,
        p.amount.sub((L = p.fee) != null ? L : ge),
        u,
        c,
      ),
      P = he(f, d, o, !1),
      T = re.sqrtPriceX64ToPrice(g, e.mintA.decimals, e.mintB.decimals),
      B = l ? T : new _(1).div(T),
      h = f
        .mul(new ve.default(Math.floor((1 - s) * 1e10)))
        .div(new ve.default(1e10)),
      x = he(h, d, o, !1),
      S = l ? e.currentPrice : new _(1).div(e.currentPrice),
      K = new _(B).sub(S).abs(),
      I = S,
      C = new Ee(
        new _(K).mul(10 ** 15).toFixed(0),
        new _(I).mul(10 ** 15).toFixed(0),
      );
    return {
      allTrade: y,
      realAmountIn: p,
      amountOut: P,
      minAmountOut: x,
      expirationTime: Ht(p.expirationTime, P.expirationTime),
      currentPrice: e.currentPrice,
      executionPrice: B,
      priceImpact: C,
      fee: w,
      remainingAccounts: b,
      executionPriceX64: g,
    };
  }
  static computeAmountOutFormat({
    poolInfo: e,
    tickArrayCache: t,
    amountIn: n,
    tokenOut: o,
    slippage: r,
    epochInfo: s,
    catchLiquidityInsufficient: a = !1,
  }) {
    let c = o.address === e.mintB.address,
      [u, l] = c ? [e.mintA, e.mintB] : [e.mintB, e.mintA],
      [m, d] = [
        new Be(
          X(N({}, u), {
            mint: u.address,
            isToken2022: u.programId === pu.TOKEN_2022_PROGRAM_ID.toBase58(),
          }),
        ),
        new Be(
          X(N({}, l), {
            mint: l.address,
            isToken2022: l.programId === pu.TOKEN_2022_PROGRAM_ID.toBase58(),
          }),
        ),
      ],
      {
        allTrade: p,
        realAmountIn: y,
        amountOut: f,
        minAmountOut: b,
        expirationTime: g,
        currentPrice: w,
        executionPrice: P,
        priceImpact: T,
        fee: B,
        remainingAccounts: h,
        executionPriceX64: x,
      } = Oe.computeAmountOut({
        poolInfo: e,
        tickArrayCache: t,
        baseMint: new Vt.PublicKey(u.address),
        amountIn: n,
        slippage: r,
        epochInfo: s,
        catchLiquidityInsufficient: a,
      }),
      S = X(N({}, y), {
        amount: new ke(m, y.amount),
        fee: y.fee === void 0 ? void 0 : new ke(m, y.fee),
      }),
      K = X(N({}, f), {
        amount: new ke(d, f.amount),
        fee: f.fee === void 0 ? void 0 : new ke(d, f.fee),
      }),
      I = X(N({}, b), {
        amount: new ke(d, b.amount),
        fee: b.fee === void 0 ? void 0 : new ke(d, b.fee),
      }),
      C = new rt({
        baseToken: m,
        denominator: new ve.default(10).pow(new ve.default(20 + m.decimals)),
        quoteToken: d,
        numerator: w.mul(new _(10 ** (20 + d.decimals))).toFixed(0),
      }),
      L = new rt({
        baseToken: m,
        denominator: new ve.default(10).pow(new ve.default(20 + m.decimals)),
        quoteToken: d,
        numerator: P.mul(new _(10 ** (20 + d.decimals))).toFixed(0),
      }),
      O = new ke(m, B);
    return {
      allTrade: p,
      realAmountIn: S,
      amountOut: K,
      minAmountOut: I,
      expirationTime: g,
      currentPrice: C,
      executionPrice: L,
      priceImpact: T,
      fee: O,
      remainingAccounts: h,
      executionPriceX64: x,
    };
  }
  static computeAmountIn({
    poolInfo: e,
    tickArrayCache: t,
    baseMint: n,
    epochInfo: o,
    amountOut: r,
    slippage: s,
    priceLimit: a = new _(0),
  }) {
    var I;
    let c = n.toBase58() === e.mintA.address,
      u = {
        [e.mintA.address]: e.mintA.extensions.feeConfig,
        [e.mintB.address]: e.mintB.extensions.feeConfig,
      },
      l;
    a.equals(new _(0))
      ? (l = c ? qt.sub(new ve.default(1)) : Wt.add(new ve.default(1)))
      : (l = re.priceToSqrtPriceX64(a, e.mintA.decimals, e.mintB.decimals));
    let m = he(r, u[n.toString()], o, !0),
      {
        expectedAmountIn: d,
        remainingAccounts: p,
        executionPrice: y,
        feeAmount: f,
      } = Oe.getInputAmountAndRemainAccounts(
        e,
        t,
        n,
        m.amount.sub((I = m.fee) != null ? I : ge),
        l,
      ),
      b = c ? e.mintB.address : e.mintA.address,
      g = he(d, u[b], o, !1),
      w = re.sqrtPriceX64ToPrice(y, e.mintA.decimals, e.mintB.decimals),
      P = c ? w : new _(1).div(w),
      T = d
        .mul(new ve.default(Math.floor((1 + s) * 1e10)))
        .div(new ve.default(1e10)),
      B = he(T, u[b], o, !0),
      h = c ? e.currentPrice : new _(1).div(e.currentPrice),
      x = new _(P).sub(h).abs(),
      S = h,
      K = new Ee(
        new _(x).mul(10 ** 15).toFixed(0),
        new _(S).mul(10 ** 15).toFixed(0),
      );
    return {
      amountIn: g,
      maxAmountIn: B,
      realAmountOut: m,
      expirationTime: Ht(g.expirationTime, m.expirationTime),
      currentPrice: e.currentPrice,
      executionPrice: P,
      priceImpact: K,
      fee: f,
      remainingAccounts: p,
    };
  }
  static estimateAprsForPriceRangeMultiplier({
    poolInfo: e,
    aprType: t,
    positionTickLowerIndex: n,
    positionTickUpperIndex: o,
  }) {
    var y, f, b;
    let r = e[t],
      s = Z.getTickPrice({ poolInfo: e, tick: n, baseIn: !0 }).price.toNumber(),
      a = Z.getTickPrice({ poolInfo: e, tick: o, baseIn: !0 }).price.toNumber(),
      c = Math.max(s, r.priceMin),
      l = Math.min(a, r.priceMax) - c,
      m = a - s,
      d = r.priceMax - r.priceMin,
      p;
    return (
      l <= 0
        ? (p = 0)
        : m === l
          ? (p = d / l)
          : d === l
            ? (p = l / m)
            : (p = (l / d) * (l / m)),
      {
        feeApr: r.feeApr * p,
        rewardsApr: [
          ((y = r.rewardApr[0]) != null ? y : 0) * p,
          ((f = r.rewardApr[1]) != null ? f : 0) * p,
          ((b = r.rewardApr[2]) != null ? b : 0) * p,
        ],
        apr: r.apr * p,
      }
    );
  }
  static estimateAprsForPriceRangeDelta({
    poolInfo: e,
    poolLiquidity: t,
    aprType: n,
    mintPrice: o,
    liquidity: r,
    positionTickLowerIndex: s,
    positionTickUpperIndex: a,
    chainTime: c,
  }) {
    let u = n === "day" ? 1 : n === "week" ? 7 : n === "month" ? 30 : 0,
      l = e[n],
      m = o[pt(e.mintA.address).toString()],
      d = o[pt(e.mintB.address).toString()],
      p = e.mintA.decimals,
      y = e.mintB.decimals;
    if (!l || !m || !d) return { feeApr: 0, rewardsApr: [0, 0, 0], apr: 0 };
    let f = re.priceToSqrtPriceX64(
        new _(e.price),
        e.mintA.decimals,
        e.mintB.decimals,
      ),
      b = re.getSqrtPriceX64FromTick(s),
      g = re.getSqrtPriceX64FromTick(a),
      { amountSlippageA: w, amountSlippageB: P } =
        we.getAmountsFromLiquidityWithSlippage(f, b, g, t, !1, !1, 0),
      { amountSlippageA: T, amountSlippageB: B } =
        we.getAmountsFromLiquidityWithSlippage(f, b, g, r, !1, !1, 0),
      h = new _(w.toString())
        .div(new _(10).pow(p))
        .mul(m.value)
        .add(new _(P.toString()).div(new _(10).pow(y)).mul(d.value)),
      x = new _(T.toString())
        .div(new _(10).pow(p))
        .mul(m.value)
        .add(new _(B.toString()).div(new _(10).pow(y)).mul(d.value)),
      S = new _(1).div(h.add(x)),
      I = new _(l.volumeFee).mul(365).div(u).mul(S).mul(100).toNumber(),
      C = 3600 * 24 * 365,
      L = e.rewardDefaultInfos.map((O) => {
        var D, ee;
        let F = O.mint.decimals,
          W = o[O.mint.address];
        return c < ((D = O.startTime) != null ? D : 0) ||
          c > ((ee = O.endTime) != null ? ee : 0) ||
          !O.perSecond ||
          !W ||
          F === void 0
          ? 0
          : new _(W.value)
              .mul(new _(O.perSecond).mul(C))
              .div(new _(10).pow(F))
              .mul(S)
              .mul(100)
              .toNumber();
      });
    return { feeApr: I, rewardsApr: L, apr: I + L.reduce((O, F) => O + F, 0) };
  }
  static async getLiquidityAmountOutFromAmountIn({
    poolInfo: e,
    inputA: t,
    tickLower: n,
    tickUpper: o,
    amount: r,
    slippage: s,
    add: a,
    epochInfo: c,
    amountHasFee: u,
  }) {
    var g, w;
    let l = re.priceToSqrtPriceX64(
        new _(e.price),
        e.mintA.decimals,
        e.mintB.decimals,
      ),
      m = re.getSqrtPriceX64FromTick(n),
      d = re.getSqrtPriceX64FromTick(o),
      p = he(
        r,
        (g = e[t ? "mintA" : "mintB"].extensions) == null
          ? void 0
          : g.feeConfig,
        c,
        !u,
      ),
      y = new ve.default(
        new _(p.amount.sub((w = p.fee) != null ? w : ge).toString()).toFixed(0),
      ),
      f;
    if (l.lte(m))
      f = t ? we.getLiquidityFromTokenAmountA(m, d, y, !a) : new ve.default(0);
    else if (l.lte(d)) {
      let P = we.getLiquidityFromTokenAmountA(l, d, y, !a),
        T = we.getLiquidityFromTokenAmountB(m, l, y);
      f = t ? P : T;
    } else f = t ? new ve.default(0) : we.getLiquidityFromTokenAmountB(m, d, y);
    let b = await Oe.getAmountsFromLiquidity({
      epochInfo: c,
      poolInfo: e,
      tickLower: n,
      tickUpper: o,
      liquidity: f,
      slippage: s,
      add: a,
    });
    return {
      liquidity: f,
      amountA: t ? p : b.amountA,
      amountB: t ? b.amountB : p,
      amountSlippageA: t ? p : b.amountSlippageA,
      amountSlippageB: t ? b.amountSlippageB : p,
      expirationTime: b.expirationTime,
    };
  }
  static async getAmountsFromLiquidity({
    epochInfo: e,
    poolInfo: t,
    tickLower: n,
    tickUpper: o,
    liquidity: r,
    slippage: s,
    add: a,
  }) {
    var b, g, w, P;
    let c = re.getSqrtPriceX64FromTick(n),
      u = re.getSqrtPriceX64FromTick(o),
      l = a ? 1 + s : 1 - s,
      m = we.getAmountsFromLiquidity(
        re.priceToSqrtPriceX64(
          new _(t.price),
          t.mintA.decimals,
          t.mintB.decimals,
        ),
        c,
        u,
        r,
        a,
      ),
      [d, p] = [
        he(
          m.amountA,
          (b = t.mintA.extensions) == null ? void 0 : b.feeConfig,
          e,
          !0,
        ),
        he(
          m.amountB,
          (g = t.mintB.extensions) == null ? void 0 : g.feeConfig,
          e,
          !0,
        ),
      ],
      [y, f] = [
        he(
          m.amountA.muln(l),
          (w = t.mintA.extensions) == null ? void 0 : w.feeConfig,
          e,
          !0,
        ),
        he(
          m.amountB.muln(l),
          (P = t.mintB.extensions) == null ? void 0 : P.feeConfig,
          e,
          !0,
        ),
      ];
    return {
      liquidity: r,
      amountA: d,
      amountB: p,
      amountSlippageA: y,
      amountSlippageB: f,
      expirationTime: Ht(d.expirationTime, p.expirationTime),
    };
  }
  static async fetchComputeMultipleClmmInfo({
    connection: e,
    poolList: t,
    rpcDataMap: n = {},
  }) {
    let o = t.filter((c) => !n[c.id]).map((c) => new Vt.PublicKey(c.id));
    (await zt(e, o)).forEach((c, u) => {
      !c || (n[o[u].toBase58()] = zn.decode(c.data));
    });
    let s = t.map(
        (c) =>
          We(new Vt.PublicKey(c.programId), new Vt.PublicKey(c.id)).publicKey,
      ),
      a = await Oe.fetchExBitmaps({
        connection: e,
        exBitmapAddress: s,
        batchRequest: !1,
      });
    return t.reduce(
      (c, u) =>
        X(N({}, c), {
          [u.id]: X(N({}, n[u.id]), {
            id: new Vt.PublicKey(u.id),
            version: 6,
            programId: new Vt.PublicKey(u.programId),
            mintA: u.mintA,
            mintB: u.mintB,
            ammConfig: X(N({}, u.config), {
              id: new Vt.PublicKey(u.config.id),
              fundOwner: "",
            }),
            currentPrice: new _(u.price),
            exBitmapAccount: We(
              new Vt.PublicKey(u.programId),
              new Vt.PublicKey(u.id),
            ).publicKey,
            exBitmapInfo:
              a[
                We(
                  new Vt.PublicKey(u.programId),
                  new Vt.PublicKey(u.id),
                ).publicKey.toBase58()
              ],
            startTime: n[u.id].startTime.toNumber(),
            rewardInfos: n[u.id].rewardInfos,
          }),
        }),
      {},
    );
  }
  static async fetchComputeClmmInfo({
    connection: e,
    poolInfo: t,
    rpcData: n,
  }) {
    return (
      await this.fetchComputeMultipleClmmInfo({
        connection: e,
        rpcDataMap: n ? { [t.id]: n } : void 0,
        poolList: [t],
      })
    )[t.id];
  }
};
function Lf({
  poolInfo: i,
  tickLower: e,
  tickUpper: t,
  amountA: n,
  amountB: o,
  slippage: r,
  add: s,
  epochInfo: a,
  amountHasFee: c,
}) {
  var P, T, B, h;
  let [u, l, m, d] = e < t ? [e, t, n, o] : [t, e, o, n],
    p = re.priceToSqrtPriceX64(
      new _(i.price),
      i.mintA.decimals,
      i.mintB.decimals,
    ),
    y = re.getSqrtPriceX64FromTick(u),
    f = re.getSqrtPriceX64FromTick(l),
    [b, g] = [
      he(m, (P = i.mintA.extensions) == null ? void 0 : P.feeConfig, a, !c),
      he(d, (T = i.mintB.extensions) == null ? void 0 : T.feeConfig, a, !c),
    ],
    w = we.getLiquidityFromTokenAmounts(
      p,
      y,
      f,
      b.amount.sub((B = b.fee) != null ? B : ge),
      g.amount.sub((h = g.fee) != null ? h : ge),
    );
  return we.getAmountsOutFromLiquidity({
    poolInfo: i,
    tickLower: e,
    tickUpper: t,
    liquidity: w,
    slippage: r,
    add: s,
    epochInfo: a,
    amountAddFee: !c,
  });
}
var du = {
  volume: 0,
  volumeQuote: 0,
  volumeFee: 0,
  apr: 0,
  feeApr: 0,
  priceMin: 0,
  priceMax: 0,
  rewardApr: [],
};
function fu(i) {
  return X(N({}, i), {
    type: "Concentrated",
    programId: i.programId.toString(),
    id: i.id.toString(),
    rewardDefaultInfos: [],
    rewardDefaultPoolInfos: "Clmm",
    price: i.currentPrice.toNumber(),
    mintAmountA: 0,
    mintAmountB: 0,
    feeRate: i.ammConfig.tradeFeeRate,
    openTime: i.startTime.toString(),
    tvl: 0,
    day: du,
    week: du,
    month: du,
    pooltype: [],
    farmUpcomingCount: 0,
    farmOngoingCount: 0,
    farmFinishedCount: 0,
    burnPercent: 0,
    config: X(N({}, i.ammConfig), {
      id: i.ammConfig.id.toString(),
      defaultRange: 0,
      defaultRangePoint: [],
    }),
  });
}
var ae = class {
  static mulDivRoundingUp(e, t, n) {
    let o = e.mul(t),
      r = o.div(n);
    return o.mod(n).eq(ge) || (r = r.add(vt)), r;
  }
  static mulDivFloor(e, t, n) {
    if (n.eq(ge)) throw new Error("division by 0");
    return e.mul(t).div(n);
  }
  static mulDivCeil(e, t, n) {
    if (n.eq(ge)) throw new Error("division by 0");
    return e.mul(t).add(n.sub(vt)).div(n);
  }
  static x64ToDecimal(e, t) {
    return new _(e.toString()).div(_.pow(2, 64)).toDecimalPlaces(t);
  }
  static decimalToX64(e) {
    return new pe.default(e.mul(_.pow(2, 64)).floor().toFixed());
  }
  static wrappingSubU128(e, t) {
    return e.add(Oo).sub(t).mod(Oo);
  }
};
function lt(i, e) {
  return bu(i.mul(e), 64, 256);
}
function Of(i, e, t) {
  let n = i.toTwos(t).shln(e);
  return n.imaskn(t + 1), n.fromTwos(t);
}
function bu(i, e, t) {
  let n = i.toTwos(t).shrn(e);
  return n.imaskn(t - e + 1), n.fromTwos(t - e);
}
var re = class {
    static sqrtPriceX64ToPrice(e, t, n) {
      return ae
        .x64ToDecimal(e)
        .pow(2)
        .mul(_.pow(10, t - n));
    }
    static priceToSqrtPriceX64(e, t, n) {
      return ae.decimalToX64(e.mul(_.pow(10, n - t)).sqrt());
    }
    static getNextSqrtPriceX64FromInput(e, t, n, o) {
      if (!e.gt(ge)) throw new Error("sqrtPriceX64 must greater than 0");
      if (!t.gt(ge)) throw new Error("liquidity must greater than 0");
      return o
        ? this.getNextSqrtPriceFromTokenAmountARoundingUp(e, t, n, !0)
        : this.getNextSqrtPriceFromTokenAmountBRoundingDown(e, t, n, !0);
    }
    static getNextSqrtPriceX64FromOutput(e, t, n, o) {
      if (!e.gt(ge)) throw new Error("sqrtPriceX64 must greater than 0");
      if (!t.gt(ge)) throw new Error("liquidity must greater than 0");
      return o
        ? this.getNextSqrtPriceFromTokenAmountBRoundingDown(e, t, n, !1)
        : this.getNextSqrtPriceFromTokenAmountARoundingUp(e, t, n, !1);
    }
    static getNextSqrtPriceFromTokenAmountARoundingUp(e, t, n, o) {
      if (n.eq(ge)) return e;
      let r = t.shln(Ni);
      if (o) {
        let s = r,
          a = r.add(n.mul(e));
        return a.gte(s)
          ? ae.mulDivCeil(s, e, a)
          : ae.mulDivRoundingUp(s, vt, s.div(e).add(n));
      } else {
        let s = n.mul(e);
        if (!r.gt(s))
          throw new Error(
            "getNextSqrtPriceFromTokenAmountARoundingUp,liquidityLeftShift must gt amountMulSqrtPrice",
          );
        let a = r.sub(s);
        return ae.mulDivCeil(r, e, a);
      }
    }
    static getNextSqrtPriceFromTokenAmountBRoundingDown(e, t, n, o) {
      let r = n.shln(Ni);
      if (o) return e.add(r.div(t));
      {
        let s = ae.mulDivRoundingUp(r, vt, t);
        if (!e.gt(s))
          throw new Error(
            "getNextSqrtPriceFromTokenAmountBRoundingDown sqrtPriceX64 must gt amountDivLiquidity",
          );
        return e.sub(s);
      }
    }
    static getSqrtPriceX64FromTick(e) {
      if (!Number.isInteger(e)) throw new Error("tick must be integer");
      if (e < bt || e > It)
        throw new Error("tick must be in MIN_TICK and MAX_TICK");
      let t = e < 0 ? e * -1 : e,
        n =
          (t & 1) != 0
            ? new pe.default("18445821805675395072")
            : new pe.default("18446744073709551616");
      return (
        (t & 2) != 0 && (n = lt(n, new pe.default("18444899583751176192"))),
        (t & 4) != 0 && (n = lt(n, new pe.default("18443055278223355904"))),
        (t & 8) != 0 && (n = lt(n, new pe.default("18439367220385607680"))),
        (t & 16) != 0 && (n = lt(n, new pe.default("18431993317065453568"))),
        (t & 32) != 0 && (n = lt(n, new pe.default("18417254355718170624"))),
        (t & 64) != 0 && (n = lt(n, new pe.default("18387811781193609216"))),
        (t & 128) != 0 && (n = lt(n, new pe.default("18329067761203558400"))),
        (t & 256) != 0 && (n = lt(n, new pe.default("18212142134806163456"))),
        (t & 512) != 0 && (n = lt(n, new pe.default("17980523815641700352"))),
        (t & 1024) != 0 && (n = lt(n, new pe.default("17526086738831433728"))),
        (t & 2048) != 0 && (n = lt(n, new pe.default("16651378430235570176"))),
        (t & 4096) != 0 && (n = lt(n, new pe.default("15030750278694412288"))),
        (t & 8192) != 0 && (n = lt(n, new pe.default("12247334978884435968"))),
        (t & 16384) != 0 && (n = lt(n, new pe.default("8131365268886854656"))),
        (t & 32768) != 0 && (n = lt(n, new pe.default("3584323654725218816"))),
        (t & 65536) != 0 && (n = lt(n, new pe.default("696457651848324352"))),
        (t & 131072) != 0 && (n = lt(n, new pe.default("26294789957507116"))),
        (t & 262144) != 0 && (n = lt(n, new pe.default("37481735321082"))),
        e > 0 && (n = $a.div(n)),
        n
      );
    }
    static getTickFromPrice(e, t, n) {
      return re.getTickFromSqrtPriceX64(re.priceToSqrtPriceX64(e, t, n));
    }
    static getTickFromSqrtPriceX64(e) {
      if (e.gt(qt) || e.lt(Wt))
        throw new Error(
          "Provided sqrtPrice is not within the supported sqrtPrice range.",
        );
      let t = e.bitLength() - 1,
        n = new pe.default(t - 64),
        o = Of(n, 32, 128),
        r = new pe.default("8000000000000000", "hex"),
        s = 0,
        a = new pe.default(0),
        c = t >= 64 ? e.shrn(t - 63) : e.shln(63 - t);
      for (; r.gt(new pe.default(0)) && s < Ja; ) {
        c = c.mul(c);
        let y = c.shrn(127);
        (c = c.shrn(63 + y.toNumber())),
          (a = a.add(r.mul(y))),
          (r = r.shrn(1)),
          (s += 1);
      }
      let u = a.shrn(32),
        m = o.add(u).mul(new pe.default(eu)),
        d = bu(m.sub(new pe.default(tu)), 64, 128).toNumber(),
        p = bu(m.add(new pe.default(nu)), 64, 128).toNumber();
      return d == p ? d : re.getSqrtPriceX64FromTick(p).lte(e) ? p : d;
    }
  },
  Qn = class {
    static getTickWithPriceAndTickspacing(e, t, n, o) {
      let s = re.getTickFromSqrtPriceX64(re.priceToSqrtPriceX64(e, n, o)) / t;
      return s < 0 ? (s = Math.floor(s)) : (s = Math.ceil(s)), s * t;
    }
    static roundPriceWithTickspacing(e, t, n, o) {
      let r = Qn.getTickWithPriceAndTickspacing(e, t, n, o),
        s = re.getSqrtPriceX64FromTick(r);
      return re.sqrtPriceX64ToPrice(s, n, o);
    }
  },
  we = class {
    static addDelta(e, t) {
      return e.add(t);
    }
    static getTokenAmountAFromLiquidity(e, t, n, o) {
      if ((e.gt(t) && ([e, t] = [t, e]), !e.gt(ge)))
        throw new Error("sqrtPriceX64A must greater than 0");
      let r = n.ushln(Ni),
        s = t.sub(e);
      return o
        ? ae.mulDivRoundingUp(ae.mulDivCeil(r, s, t), vt, e)
        : ae.mulDivFloor(r, s, t).div(e);
    }
    static getTokenAmountBFromLiquidity(e, t, n, o) {
      if ((e.gt(t) && ([e, t] = [t, e]), !e.gt(ge)))
        throw new Error("sqrtPriceX64A must greater than 0");
      return o
        ? ae.mulDivCeil(n, t.sub(e), _t)
        : ae.mulDivFloor(n, t.sub(e), _t);
    }
    static getLiquidityFromTokenAmountA(e, t, n, o) {
      e.gt(t) && ([e, t] = [t, e]);
      let r = n.mul(e).mul(t),
        s = t.sub(e),
        a = r.div(s);
      return o ? ae.mulDivRoundingUp(a, vt, ls) : a.shrn(Ni);
    }
    static getLiquidityFromTokenAmountB(e, t, n) {
      return e.gt(t) && ([e, t] = [t, e]), ae.mulDivFloor(n, ls, t.sub(e));
    }
    static getLiquidityFromTokenAmounts(e, t, n, o, r) {
      if ((t.gt(n) && ([t, n] = [n, t]), e.lte(t)))
        return we.getLiquidityFromTokenAmountA(t, n, o, !1);
      if (e.lt(n)) {
        let s = we.getLiquidityFromTokenAmountA(e, n, o, !1),
          a = we.getLiquidityFromTokenAmountB(t, e, r);
        return s.lt(a) ? s : a;
      } else return we.getLiquidityFromTokenAmountB(t, n, r);
    }
    static getAmountsFromLiquidity(e, t, n, o, r) {
      if ((t.gt(n) && ([t, n] = [n, t]), e.lte(t)))
        return {
          amountA: we.getTokenAmountAFromLiquidity(t, n, o, r),
          amountB: new pe.default(0),
        };
      if (e.lt(n)) {
        let s = we.getTokenAmountAFromLiquidity(e, n, o, r),
          a = we.getTokenAmountBFromLiquidity(t, e, o, r);
        return { amountA: s, amountB: a };
      } else
        return {
          amountA: new pe.default(0),
          amountB: we.getTokenAmountBFromLiquidity(t, n, o, r),
        };
    }
    static getAmountsFromLiquidityWithSlippage(e, t, n, o, r, s, a) {
      let { amountA: c, amountB: u } = we.getAmountsFromLiquidity(
          e,
          t,
          n,
          o,
          s,
        ),
        l = r ? 1 + a : 1 - a,
        m = new pe.default(new _(c.toString()).mul(l).toFixed(0)),
        d = new pe.default(new _(u.toString()).mul(l).toFixed(0));
      return { amountSlippageA: m, amountSlippageB: d };
    }
    static getAmountsOutFromLiquidity({
      poolInfo: e,
      tickLower: t,
      tickUpper: n,
      liquidity: o,
      slippage: r,
      add: s,
      epochInfo: a,
      amountAddFee: c,
    }) {
      var w, P, T, B;
      let u = re.priceToSqrtPriceX64(
          new _(e.price),
          e.mintA.decimals,
          e.mintB.decimals,
        ),
        l = re.getSqrtPriceX64FromTick(t),
        m = re.getSqrtPriceX64FromTick(n),
        d = s ? 1 + r : 1 - r,
        p = we.getAmountsFromLiquidity(u, l, m, o, s),
        [y, f] = [
          he(
            p.amountA,
            (w = e.mintA.extensions) == null ? void 0 : w.feeConfig,
            a,
            c,
          ),
          he(
            p.amountB,
            (P = e.mintB.extensions) == null ? void 0 : P.feeConfig,
            a,
            c,
          ),
        ],
        [b, g] = [
          he(
            new pe.default(new _(p.amountA.toString()).mul(d).toFixed(0)),
            (T = e.mintA.extensions) == null ? void 0 : T.feeConfig,
            a,
            c,
          ),
          he(
            new pe.default(new _(p.amountB.toString()).mul(d).toFixed(0)),
            (B = e.mintB.extensions) == null ? void 0 : B.feeConfig,
            a,
            c,
          ),
        ];
      return {
        liquidity: o,
        amountA: y,
        amountB: f,
        amountSlippageA: b,
        amountSlippageB: g,
        expirationTime: Ht(y.expirationTime, f.expirationTime),
      };
    }
  },
  Xn = class {
    static swapCompute(e, t, n, o, r, s, a, c, u, l, m, d, p, y, f = !1) {
      if (d.eq(ge)) throw new Error("amountSpecified must not be 0");
      if ((y || (y = s ? Wt.add(vt) : qt.sub(vt)), s)) {
        if (y.lt(Wt))
          throw new Error("sqrtPriceX64 must greater than MIN_SQRT_PRICE_X64");
        if (y.gte(m)) throw new Error("sqrtPriceX64 must smaller than current");
      } else {
        if (y.gt(qt))
          throw new Error("sqrtPriceX64 must smaller than MAX_SQRT_PRICE_X64");
        if (y.lte(m)) throw new Error("sqrtPriceX64 must greater than current");
      }
      let b = d.gt(ge),
        g = {
          amountSpecifiedRemaining: d,
          amountCalculated: ge,
          sqrtPriceX64: m,
          tick: u > p ? Math.min(p + Pe.tickCount(l) - 1, u) : p,
          accounts: [],
          liquidity: c,
          feeAmount: new pe.default(0),
        },
        w = p,
        P = n[p],
        T = 0,
        B = !s && P.startTickIndex === g.tick;
      for (; !g.amountSpecifiedRemaining.eq(ge) && !g.sqrtPriceX64.eq(y); ) {
        T > 10;
        let h = {};
        h.sqrtPriceStartX64 = g.sqrtPriceX64;
        let x = Z.nextInitTick(P, g.tick, l, s, B),
          S = x || null,
          K = null;
        if (!(S != null && S.liquidityGross.gtn(0))) {
          let C = Oe.nextInitializedTickArrayStartIndex(
            {
              tickCurrent: g.tick,
              tickSpacing: l,
              tickArrayBitmap: o,
              exBitmapInfo: r,
            },
            w,
            s,
          );
          if (!C.isExist) {
            if (f)
              return {
                allTrade: !1,
                amountSpecifiedRemaining: g.amountSpecifiedRemaining,
                amountCalculated: g.amountCalculated,
                feeAmount: g.feeAmount,
                sqrtPriceX64: g.sqrtPriceX64,
                liquidity: g.liquidity,
                tickCurrent: g.tick,
                accounts: g.accounts,
              };
            throw Error("swapCompute LiquidityInsufficient");
          }
          w = C.nextStartIndex;
          let { publicKey: L } = Ae(e, t, w);
          (K = L), (P = n[w]);
          try {
            S = Z.firstInitializedTick(P, s);
          } catch {
            throw Error("not found next tick info");
          }
        }
        (h.tickNext = S.tick),
          (h.initialized = S.liquidityGross.gtn(0)),
          p !== w && K && (g.accounts.push(K), (p = w)),
          h.tickNext < bt
            ? (h.tickNext = bt)
            : h.tickNext > It && (h.tickNext = It),
          (h.sqrtPriceNextX64 = re.getSqrtPriceX64FromTick(h.tickNext));
        let I;
        if (
          ((s && h.sqrtPriceNextX64.lt(y)) || (!s && h.sqrtPriceNextX64.gt(y))
            ? (I = y)
            : (I = h.sqrtPriceNextX64),
          ([g.sqrtPriceX64, h.amountIn, h.amountOut, h.feeAmount] =
            Xn.swapStepCompute(
              g.sqrtPriceX64,
              I,
              g.liquidity,
              g.amountSpecifiedRemaining,
              a,
              s,
            )),
          (g.feeAmount = g.feeAmount.add(h.feeAmount)),
          b
            ? ((g.amountSpecifiedRemaining = g.amountSpecifiedRemaining.sub(
                h.amountIn.add(h.feeAmount),
              )),
              (g.amountCalculated = g.amountCalculated.sub(h.amountOut)))
            : ((g.amountSpecifiedRemaining = g.amountSpecifiedRemaining.add(
                h.amountOut,
              )),
              (g.amountCalculated = g.amountCalculated.add(
                h.amountIn.add(h.feeAmount),
              ))),
          g.sqrtPriceX64.eq(h.sqrtPriceNextX64))
        ) {
          if (h.initialized) {
            let C = S.liquidityNet;
            s && (C = C.mul(bn)), (g.liquidity = we.addDelta(g.liquidity, C));
          }
          (B = h.tickNext != g.tick && !s && P.startTickIndex === h.tickNext),
            (g.tick = s ? h.tickNext - 1 : h.tickNext);
        } else if (g.sqrtPriceX64 != h.sqrtPriceStartX64) {
          let C = re.getTickFromSqrtPriceX64(g.sqrtPriceX64);
          (B = C != g.tick && !s && P.startTickIndex === C), (g.tick = C);
        }
        ++T;
      }
      try {
        let { nextStartIndex: h, isExist: x } = Pe.nextInitializedTickArray(
          g.tick,
          l,
          s,
          o,
          r,
        );
        x && p !== h && (g.accounts.push(Ae(e, t, h).publicKey), (p = h));
      } catch {}
      return {
        allTrade: !0,
        amountSpecifiedRemaining: ge,
        amountCalculated: g.amountCalculated,
        feeAmount: g.feeAmount,
        sqrtPriceX64: g.sqrtPriceX64,
        liquidity: g.liquidity,
        tickCurrent: g.tick,
        accounts: g.accounts,
      };
    }
    static swapStepCompute(e, t, n, o, r, s) {
      let a = {
          sqrtPriceX64Next: new pe.default(0),
          amountIn: new pe.default(0),
          amountOut: new pe.default(0),
          feeAmount: new pe.default(0),
        },
        c = o.gte(ge);
      if (c) {
        let l = ae.mulDivFloor(o, vo.sub(new pe.default(r.toString())), vo);
        (a.amountIn = s
          ? we.getTokenAmountAFromLiquidity(t, e, n, !0)
          : we.getTokenAmountBFromLiquidity(e, t, n, !0)),
          l.gte(a.amountIn)
            ? (a.sqrtPriceX64Next = t)
            : (a.sqrtPriceX64Next = re.getNextSqrtPriceX64FromInput(
                e,
                n,
                l,
                s,
              ));
      } else
        (a.amountOut = s
          ? we.getTokenAmountBFromLiquidity(t, e, n, !1)
          : we.getTokenAmountAFromLiquidity(e, t, n, !1)),
          o.mul(bn).gte(a.amountOut)
            ? (a.sqrtPriceX64Next = t)
            : (a.sqrtPriceX64Next = re.getNextSqrtPriceX64FromOutput(
                e,
                n,
                o.mul(bn),
                s,
              ));
      let u = t.eq(a.sqrtPriceX64Next);
      return (
        s
          ? ((u && c) ||
              (a.amountIn = we.getTokenAmountAFromLiquidity(
                a.sqrtPriceX64Next,
                e,
                n,
                !0,
              )),
            (u && !c) ||
              (a.amountOut = we.getTokenAmountBFromLiquidity(
                a.sqrtPriceX64Next,
                e,
                n,
                !1,
              )))
          : ((a.amountIn =
              u && c
                ? a.amountIn
                : we.getTokenAmountBFromLiquidity(
                    e,
                    a.sqrtPriceX64Next,
                    n,
                    !0,
                  )),
            (a.amountOut =
              u && !c
                ? a.amountOut
                : we.getTokenAmountAFromLiquidity(
                    e,
                    a.sqrtPriceX64Next,
                    n,
                    !1,
                  ))),
        !c && a.amountOut.gt(o.mul(bn)) && (a.amountOut = o.mul(bn)),
        c && !a.sqrtPriceX64Next.eq(t)
          ? (a.feeAmount = o.sub(a.amountIn))
          : (a.feeAmount = ae.mulDivCeil(
              a.amountIn,
              new pe.default(r),
              vo.sub(new pe.default(r)),
            )),
        [a.sqrtPriceX64Next, a.amountIn, a.amountOut, a.feeAmount]
      );
    }
  };
var et = 60,
  Gn = 512,
  Z = class {
    static getTickArrayAddressByTick(e, t, n, o) {
      let r = Z.getTickArrayStartIndexByTick(n, o),
        { publicKey: s } = Ae(e, t, r);
      return s;
    }
    static getTickOffsetInArray(e, t) {
      if (e % t != 0) throw new Error("tickIndex % tickSpacing not equal 0");
      let n = Z.getTickArrayStartIndexByTick(e, t),
        o = Math.floor((e - n) / t);
      if (o < 0 || o >= et) throw new Error("tick offset in array overflow");
      return o;
    }
    static getTickArrayBitIndex(e, t) {
      let n = Pe.tickCount(t),
        o = e / n;
      return (
        e < 0 && e % n != 0 ? (o = Math.ceil(o) - 1) : (o = Math.floor(o)), o
      );
    }
    static getTickArrayStartIndexByTick(e, t) {
      return this.getTickArrayBitIndex(e, t) * Pe.tickCount(t);
    }
    static getTickArrayOffsetInBitmapByTick(e, t) {
      let n = t * et,
        o = Math.floor(e / n) + 512;
      return Math.abs(o);
    }
    static checkTickArrayIsInitialized(e, t, n) {
      let o = n * et,
        r = Math.floor(t / o) + 512,
        s = Math.abs(r);
      return { isInitialized: e.testn(s), startIndex: (s - 512) * o };
    }
    static getNextTickArrayStartIndex(e, t, n) {
      return n ? e - t * et : e + t * et;
    }
    static mergeTickArrayBitmap(e) {
      let t = new Yl.default(0);
      for (let n = 0; n < e.length; n++) t = t.add(e[n].shln(64 * n));
      return t;
    }
    static getInitializedTickArrayInRange(e, t, n, o, r) {
      let s = Math.floor(o / (n * et));
      return [
        ...Z.searchLowBitFromStart(e, t, s - 1, r, n),
        ...Z.searchHightBitFromStart(e, t, s, r, n),
      ];
    }
    static getAllInitializedTickArrayStartIndex(e, t, n) {
      return Z.searchHightBitFromStart(e, t, -7680, Gn, n);
    }
    static getAllInitializedTickArrayInfo(e, t, n, o, r) {
      let s = [],
        a = Z.getAllInitializedTickArrayStartIndex(n, o, r);
      for (let c of a) {
        let { publicKey: u } = Ae(e, t, c);
        s.push({ tickArrayStartIndex: c, tickArrayAddress: u });
      }
      return s;
    }
    static getAllInitializedTickInTickArray(e) {
      return e.ticks.filter((t) => t.liquidityGross.gtn(0));
    }
    static searchLowBitFromStart(e, t, n, o, r) {
      let s = [
          ...[...t.negativeTickArrayBitmap].reverse(),
          e.slice(0, 8),
          e.slice(8, 16),
          ...t.positiveTickArrayBitmap,
        ].map((u) => Z.mergeTickArrayBitmap(u)),
        a = [];
      for (; n >= -7680; ) {
        let u = Math.floor((n + 7680) / 512),
          l = (n + 7680) % 512;
        if ((s[u].testn(l) && a.push(n), n--, a.length === o)) break;
      }
      let c = Pe.tickCount(r);
      return a.map((u) => u * c);
    }
    static searchHightBitFromStart(e, t, n, o, r) {
      let s = [
          ...[...t.negativeTickArrayBitmap].reverse(),
          e.slice(0, 8),
          e.slice(8, 16),
          ...t.positiveTickArrayBitmap,
        ].map((u) => Z.mergeTickArrayBitmap(u)),
        a = [];
      for (; n < 7680; ) {
        let u = Math.floor((n + 7680) / 512),
          l = (n + 7680) % 512;
        if ((s[u].testn(l) && a.push(n), n++, a.length === o)) break;
      }
      let c = Pe.tickCount(r);
      return a.map((u) => u * c);
    }
    static checkIsOutOfBoundary(e) {
      return e < bt || e > It;
    }
    static nextInitTick(e, t, n, o, r) {
      if (Pe.getArrayStartIndex(t, n) != e.startTickIndex) return null;
      let a = Math.floor((t - e.startTickIndex) / n);
      if (o)
        for (; a >= 0; ) {
          if (e.ticks[a].liquidityGross.gtn(0)) return e.ticks[a];
          a = a - 1;
        }
      else
        for (r || (a = a + 1); a < et; ) {
          if (e.ticks[a].liquidityGross.gtn(0)) return e.ticks[a];
          a = a + 1;
        }
      return null;
    }
    static firstInitializedTick(e, t) {
      if (t) {
        let n = et - 1;
        for (; n >= 0; ) {
          if (e.ticks[n].liquidityGross.gtn(0)) return e.ticks[n];
          n = n - 1;
        }
      } else {
        let n = 0;
        for (; n < et; ) {
          if (e.ticks[n].liquidityGross.gtn(0)) return e.ticks[n];
          n = n + 1;
        }
      }
      throw Error(`firstInitializedTick check error: ${e} - ${t}`);
    }
    static _getTickPriceLegacy({ poolInfo: e, tick: t, baseIn: n }) {
      let o = re.getSqrtPriceX64FromTick(t),
        r = re.sqrtPriceX64ToPrice(o, e.mintA.decimals, e.mintB.decimals);
      return n
        ? { tick: t, price: r, tickSqrtPriceX64: o }
        : { tick: t, price: new _(1).div(r), tickSqrtPriceX64: o };
    }
    static _getPriceAndTickLegacy({ poolInfo: e, price: t, baseIn: n }) {
      let o = n ? t : new _(1).div(t),
        r = Qn.getTickWithPriceAndTickspacing(
          o,
          e.ammConfig.tickSpacing,
          e.mintA.decimals,
          e.mintB.decimals,
        ),
        s = re.getSqrtPriceX64FromTick(r),
        a = re.sqrtPriceX64ToPrice(s, e.mintA.decimals, e.mintB.decimals);
      return n ? { tick: r, price: a } : { tick: r, price: new _(1).div(a) };
    }
    static getTickPrice({ poolInfo: e, tick: t, baseIn: n }) {
      let o = re.getSqrtPriceX64FromTick(t),
        r = re.sqrtPriceX64ToPrice(o, e.mintA.decimals, e.mintB.decimals);
      return n
        ? { tick: t, price: r, tickSqrtPriceX64: o }
        : { tick: t, price: new _(1).div(r), tickSqrtPriceX64: o };
    }
    static getPriceAndTick({ poolInfo: e, price: t, baseIn: n }) {
      let o = n ? t : new _(1).div(t),
        r = Qn.getTickWithPriceAndTickspacing(
          o,
          e.config.tickSpacing,
          e.mintA.decimals,
          e.mintB.decimals,
        ),
        s = re.getSqrtPriceX64FromTick(r),
        a = re.sqrtPriceX64ToPrice(s, e.mintA.decimals, e.mintB.decimals);
      return n ? { tick: r, price: a } : { tick: r, price: new _(1).div(a) };
    }
  };
var gu = V([
    Te(8),
    G("bump"),
    dn("index"),
    M(""),
    ct("protocolFeeRate"),
    ct("tradeFeeRate"),
    dn("tickSpacing"),
    j(k(), 8, ""),
  ]),
  Hl = V([ct("blockTimestamp"), ii("tickCumulative"), j(k(), 4)]),
  Au = V([
    Te(8),
    _e("initialized"),
    k("recentEpoch"),
    dn("observationIndex"),
    M("poolId"),
    j(Hl, 100, "observations"),
    j(k(), 4),
  ]),
  jl = V([
    G("rewardState"),
    k("openTime"),
    k("endTime"),
    k("lastUpdateTime"),
    ne("emissionsPerSecondX64"),
    k("rewardTotalEmissioned"),
    k("rewardClaimed"),
    M("tokenMint"),
    M("tokenVault"),
    M("creator"),
    ne("rewardGrowthGlobalX64"),
  ]),
  zn = V([
    Te(8),
    G("bump"),
    M("ammConfig"),
    M("creator"),
    M("mintA"),
    M("mintB"),
    M("vaultA"),
    M("vaultB"),
    M("observationId"),
    G("mintDecimalsA"),
    G("mintDecimalsB"),
    dn("tickSpacing"),
    ne("liquidity"),
    ne("sqrtPriceX64"),
    Ne("tickCurrent"),
    ct(),
    ne("feeGrowthGlobalX64A"),
    ne("feeGrowthGlobalX64B"),
    k("protocolFeesTokenA"),
    k("protocolFeesTokenB"),
    ne("swapInAmountTokenA"),
    ne("swapOutAmountTokenB"),
    ne("swapInAmountTokenB"),
    ne("swapOutAmountTokenA"),
    G("status"),
    j(G(), 7, ""),
    j(jl, 3, "rewardInfos"),
    j(k(), 16, "tickArrayBitmap"),
    k("totalFeesTokenA"),
    k("totalFeesClaimedTokenA"),
    k("totalFeesTokenB"),
    k("totalFeesClaimedTokenB"),
    k("fundFeesTokenA"),
    k("fundFeesTokenB"),
    k("startTime"),
    j(k(), 15 * 4 - 3, "padding"),
  ]),
  Zl = V([ne("growthInsideLastX64"), k("rewardAmountOwed")]),
  Wi = V([
    Te(8),
    G("bump"),
    M("nftMint"),
    M("poolId"),
    Ne("tickLower"),
    Ne("tickUpper"),
    ne("liquidity"),
    ne("feeGrowthInsideLastX64A"),
    ne("feeGrowthInsideLastX64B"),
    k("tokenFeesOwedA"),
    k("tokenFeesOwedB"),
    j(Zl, 3, "rewardInfos"),
    j(k(), 8, ""),
  ]),
  Mf = V([
    Te(8),
    G("bump"),
    M("poolId"),
    Ne("tickLowerIndex"),
    Ne("tickUpperIndex"),
    ne("liquidity"),
    ne("feeGrowthInsideLastX64A"),
    ne("feeGrowthInsideLastX64B"),
    k("tokenFeesOwedA"),
    k("tokenFeesOwedB"),
    j(ne(), 3, "rewardGrowthInside"),
    j(k(), 8, ""),
  ]),
  $l = V([
    Ne("tick"),
    Ra("liquidityNet"),
    ne("liquidityGross"),
    ne("feeGrowthOutsideX64A"),
    ne("feeGrowthOutsideX64B"),
    j(ne(), 3, "rewardGrowthsOutsideX64"),
    j(ct(), 13, ""),
  ]),
  Fi = V([
    Te(8),
    M("poolId"),
    Ne("startTickIndex"),
    j($l, et, "ticks"),
    G("initializedTickCount"),
    j(G(), 115, ""),
  ]),
  wu = V([Te(329), j(M(), 100, "whitelistMints")]),
  yu = V([
    Te(8),
    M("poolId"),
    j(j(k(), 8), bs, "positiveTickArrayBitmap"),
    j(j(k(), 8), bs, "negativeTickArrayBitmap"),
  ]),
  Nf = V([
    k(),
    G("bump"),
    M("owner"),
    M("poolId"),
    M("positionId"),
    M("nftAccount"),
    j(k(), 8),
  ]),
  vf = V([
    Te(8),
    G("bump"),
    M("lockOwner"),
    M("poolId"),
    M("positionId"),
    M("nftAccount"),
    M("lockNftMint"),
    k("recentEpoch"),
    j(k(), 8),
  ]);
Au.span;
var Jl = ye("Raydium_Clmm"),
  Ut = {
    createPool: [233, 146, 209, 142, 207, 104, 64, 188],
    initReward: [95, 135, 192, 196, 242, 129, 230, 68],
    setRewardEmissions: [112, 52, 167, 75, 32, 201, 211, 137],
    openPosition: [77, 184, 74, 214, 112, 86, 241, 199],
    openPositionWithTokenEx: [77, 255, 174, 82, 125, 29, 201, 46],
    closePosition: [123, 134, 81, 0, 49, 68, 98, 98],
    increaseLiquidity: [133, 29, 89, 223, 69, 238, 176, 10],
    decreaseLiquidity: [58, 127, 188, 62, 79, 82, 196, 96],
    swap: [43, 4, 237, 11, 26, 201, 30, 98],
    collectReward: [18, 237, 166, 197, 34, 16, 213, 144],
  },
  em = [188, 37, 179, 131, 82, 150, 84, 73],
  tm = [16, 72, 250, 198, 14, 162, 212, 19],
  Re = class {
    static createPoolInstruction(e, t, n, o, r, s, a, c, u, l, m, d, p, y) {
      let f = V([ne("sqrtPriceX64"), k("zero")]),
        b = [
          { pubkey: n, isSigner: !0, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !1 },
          { pubkey: t, isSigner: !1, isWritable: !0 },
          { pubkey: s, isSigner: !1, isWritable: !1 },
          { pubkey: u, isSigner: !1, isWritable: !1 },
          { pubkey: a, isSigner: !1, isWritable: !0 },
          { pubkey: l, isSigner: !1, isWritable: !0 },
          { pubkey: r, isSigner: !1, isWritable: !0 },
          { pubkey: d, isSigner: !1, isWritable: !0 },
          { pubkey: c, isSigner: !1, isWritable: !1 },
          { pubkey: m, isSigner: !1, isWritable: !1 },
          { pubkey: v.SystemProgram.programId, isSigner: !1, isWritable: !1 },
          { pubkey: ot, isSigner: !1, isWritable: !1 },
          ...((y == null
            ? void 0
            : y.map((P) => ({ pubkey: P, isSigner: !1, isWritable: !1 }))) ||
            []),
        ],
        g = Buffer.alloc(f.span);
      f.encode({ sqrtPriceX64: p, zero: ge }, g);
      let w = Buffer.from([...Ut.createPool, ...g]);
      return new v.TransactionInstruction({ keys: b, programId: e, data: w });
    }
    static async createPoolInstructions(e) {
      let {
          programId: t,
          owner: n,
          mintA: o,
          mintB: r,
          ammConfigId: s,
          initialPriceX64: a,
          extendMintAccount: c,
        } = e,
        [u, l] = [new v.PublicKey(o.address), new v.PublicKey(r.address)],
        { publicKey: m } = uu(t, s, u, l),
        { publicKey: d } = lu(t, m),
        { publicKey: p } = ps(t, m, u),
        { publicKey: y } = ps(t, m, l),
        f = We(t, m).publicKey,
        b = [
          this.createPoolInstruction(
            t,
            m,
            n,
            s,
            d,
            u,
            p,
            new v.PublicKey(o.programId || te.TOKEN_PROGRAM_ID),
            l,
            y,
            new v.PublicKey(r.programId || te.TOKEN_PROGRAM_ID),
            f,
            a,
            c,
          ),
        ];
      return {
        signers: [],
        instructions: b,
        instructionTypes: [U.CreateAccount, U.ClmmCreatePool],
        address: {
          poolId: m,
          observationId: d,
          exBitmapAccount: f,
          mintAVault: p,
          mintBVault: y,
        },
        lookupTableAddress: [],
      };
    }
    static openPositionFromLiquidityInstruction(
      e,
      t,
      n,
      o,
      r,
      s,
      a,
      c,
      u,
      l,
      m,
      d,
      p,
      y,
      f,
      b,
      g,
      w,
      P,
      T,
      B,
      h,
      x,
      S,
      K,
      I,
    ) {
      let C = V([
          Ne("tickLowerIndex"),
          Ne("tickUpperIndex"),
          Ne("tickArrayLowerStartIndex"),
          Ne("tickArrayUpperStartIndex"),
          ne("liquidity"),
          k("amountMaxA"),
          k("amountMaxB"),
          _e("withMetadata"),
          G("optionBaseFlag"),
          _e("baseFlag"),
        ]),
        L = [...(I ? [{ pubkey: I, isSigner: !1, isWritable: !0 }] : [])],
        O = [
          { pubkey: t, isSigner: !0, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !1 },
          { pubkey: r, isSigner: !0, isWritable: !0 },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: a, isSigner: !1, isWritable: !0 },
          { pubkey: n, isSigner: !1, isWritable: !0 },
          { pubkey: c, isSigner: !1, isWritable: !0 },
          { pubkey: u, isSigner: !1, isWritable: !0 },
          { pubkey: l, isSigner: !1, isWritable: !0 },
          { pubkey: m, isSigner: !1, isWritable: !0 },
          { pubkey: d, isSigner: !1, isWritable: !0 },
          { pubkey: p, isSigner: !1, isWritable: !0 },
          { pubkey: y, isSigner: !1, isWritable: !0 },
          { pubkey: f, isSigner: !1, isWritable: !0 },
          { pubkey: ot, isSigner: !1, isWritable: !1 },
          { pubkey: v.SystemProgram.programId, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          {
            pubkey: te.ASSOCIATED_TOKEN_PROGRAM_ID,
            isSigner: !1,
            isWritable: !1,
          },
          { pubkey: cn, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: b, isSigner: !1, isWritable: !1 },
          { pubkey: g, isSigner: !1, isWritable: !1 },
          ...L,
        ],
        F = Buffer.alloc(C.span);
      C.encode(
        {
          tickLowerIndex: w,
          tickUpperIndex: P,
          tickArrayLowerStartIndex: T,
          tickArrayUpperStartIndex: B,
          liquidity: h,
          amountMaxA: x,
          amountMaxB: S,
          withMetadata: K === "create",
          baseFlag: !1,
          optionBaseFlag: 0,
        },
        F,
      );
      let W = Buffer.from([...Ut.openPosition, ...F]);
      return new v.TransactionInstruction({ keys: O, programId: e, data: W });
    }
    static openPositionFromLiquidityInstruction22(
      e,
      t,
      n,
      o,
      r,
      s,
      a,
      c,
      u,
      l,
      m,
      d,
      p,
      y,
      f,
      b,
      g,
      w,
      P,
      T,
      B,
      h,
      x,
      S,
      K,
    ) {
      let I = V([
          Ne("tickLowerIndex"),
          Ne("tickUpperIndex"),
          Ne("tickArrayLowerStartIndex"),
          Ne("tickArrayUpperStartIndex"),
          ne("liquidity"),
          k("amountMaxA"),
          k("amountMaxB"),
          _e("withMetadata"),
          G("optionBaseFlag"),
          _e("baseFlag"),
        ]),
        C = [...(K ? [{ pubkey: K, isSigner: !1, isWritable: !0 }] : [])],
        L = [
          { pubkey: t, isSigner: !0, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !1 },
          { pubkey: r, isSigner: !0, isWritable: !0 },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: n, isSigner: !1, isWritable: !0 },
          { pubkey: a, isSigner: !1, isWritable: !0 },
          { pubkey: c, isSigner: !1, isWritable: !0 },
          { pubkey: u, isSigner: !1, isWritable: !0 },
          { pubkey: l, isSigner: !1, isWritable: !0 },
          { pubkey: m, isSigner: !1, isWritable: !0 },
          { pubkey: d, isSigner: !1, isWritable: !0 },
          { pubkey: p, isSigner: !1, isWritable: !0 },
          { pubkey: y, isSigner: !1, isWritable: !0 },
          { pubkey: ot, isSigner: !1, isWritable: !1 },
          { pubkey: v.SystemProgram.programId, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          {
            pubkey: te.ASSOCIATED_TOKEN_PROGRAM_ID,
            isSigner: !1,
            isWritable: !1,
          },
          { pubkey: te.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: f, isSigner: !1, isWritable: !1 },
          { pubkey: b, isSigner: !1, isWritable: !1 },
          ...C,
        ],
        O = Buffer.alloc(I.span);
      I.encode(
        {
          tickLowerIndex: g,
          tickUpperIndex: w,
          tickArrayLowerStartIndex: P,
          tickArrayUpperStartIndex: T,
          liquidity: B,
          amountMaxA: h,
          amountMaxB: x,
          withMetadata: S === "create",
          baseFlag: !1,
          optionBaseFlag: 0,
        },
        O,
      );
      let F = Buffer.from([...Ut.openPositionWithTokenEx, ...O]);
      return new v.TransactionInstruction({ keys: L, programId: e, data: F });
    }
    static async openPositionInstructions({
      poolInfo: e,
      poolKeys: t,
      ownerInfo: n,
      tickLower: o,
      tickUpper: r,
      liquidity: s,
      amountMaxA: a,
      amountMaxB: c,
      withMetadata: u,
      getEphemeralSigners: l,
      nft2022: m,
    }) {
      let d = [],
        [p, y] = [new v.PublicKey(e.programId), new v.PublicKey(e.id)],
        f;
      if (l) f = new v.PublicKey((await l(1))[0]);
      else {
        let K = v.Keypair.generate();
        d.push(K), (f = K.publicKey);
      }
      let b = Z.getTickArrayStartIndexByTick(o, e.config.tickSpacing),
        g = Z.getTickArrayStartIndexByTick(r, e.config.tickSpacing),
        { publicKey: w } = Ae(p, y, b),
        { publicKey: P } = Ae(p, y, g),
        { publicKey: T } = m
          ? oe(n.wallet, f, te.TOKEN_2022_PROGRAM_ID)
          : oe(n.wallet, f, te.TOKEN_PROGRAM_ID),
        { publicKey: B } = Un(f),
        { publicKey: h } = Bt(p, f),
        { publicKey: x } = jt(p, y, o, r),
        S = m
          ? this.openPositionFromLiquidityInstruction22(
              p,
              n.feePayer,
              y,
              n.wallet,
              f,
              T,
              x,
              w,
              P,
              h,
              n.tokenAccountA,
              n.tokenAccountB,
              new v.PublicKey(t.vault.A),
              new v.PublicKey(t.vault.B),
              new v.PublicKey(e.mintA.address),
              new v.PublicKey(e.mintB.address),
              o,
              r,
              b,
              g,
              s,
              a,
              c,
              u,
              Oe.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [b, g])
                ? We(p, y).publicKey
                : void 0,
            )
          : this.openPositionFromLiquidityInstruction(
              p,
              n.feePayer,
              y,
              n.wallet,
              f,
              T,
              B,
              x,
              w,
              P,
              h,
              n.tokenAccountA,
              n.tokenAccountB,
              new v.PublicKey(t.vault.A),
              new v.PublicKey(t.vault.B),
              new v.PublicKey(e.mintA.address),
              new v.PublicKey(e.mintB.address),
              o,
              r,
              b,
              g,
              s,
              a,
              c,
              u,
              Oe.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [b, g])
                ? We(p, y).publicKey
                : void 0,
            );
      return {
        signers: d,
        instructions: [S],
        instructionTypes: [U.ClmmOpenPosition],
        lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [],
        address: {
          nftMint: f,
          tickArrayLower: w,
          tickArrayUpper: P,
          positionNftAccount: T,
          metadataAccount: B,
          personalPosition: h,
          protocolPosition: x,
        },
      };
    }
    static async openPositionFromBaseInstructions({
      poolInfo: e,
      poolKeys: t,
      ownerInfo: n,
      tickLower: o,
      tickUpper: r,
      base: s,
      baseAmount: a,
      otherAmountMax: c,
      withMetadata: u,
      getEphemeralSigners: l,
      nft2022: m,
    }) {
      let d = [],
        [p, y] = [new v.PublicKey(e.programId), new v.PublicKey(e.id)],
        f;
      if (l) f = new v.PublicKey((await l(1))[0]);
      else {
        let K = v.Keypair.generate();
        d.push(K), (f = K.publicKey);
      }
      let b = Z.getTickArrayStartIndexByTick(o, e.config.tickSpacing),
        g = Z.getTickArrayStartIndexByTick(r, e.config.tickSpacing),
        { publicKey: w } = Ae(p, y, b),
        { publicKey: P } = Ae(p, y, g),
        { publicKey: T } = m
          ? oe(n.wallet, f, te.TOKEN_2022_PROGRAM_ID)
          : oe(n.wallet, f, te.TOKEN_PROGRAM_ID),
        { publicKey: B } = Un(f),
        { publicKey: h } = Bt(p, f),
        { publicKey: x } = jt(p, y, o, r),
        S = m
          ? this.openPositionFromBaseInstruction22(
              p,
              n.feePayer,
              y,
              n.wallet,
              f,
              T,
              x,
              w,
              P,
              h,
              n.tokenAccountA,
              n.tokenAccountB,
              new v.PublicKey(t.vault.A),
              new v.PublicKey(t.vault.B),
              new v.PublicKey(e.mintA.address),
              new v.PublicKey(e.mintB.address),
              o,
              r,
              b,
              g,
              u,
              s,
              a,
              c,
              Oe.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [b, g])
                ? We(p, y).publicKey
                : void 0,
            )
          : this.openPositionFromBaseInstruction(
              p,
              n.feePayer,
              y,
              n.wallet,
              f,
              T,
              B,
              x,
              w,
              P,
              h,
              n.tokenAccountA,
              n.tokenAccountB,
              new v.PublicKey(t.vault.A),
              new v.PublicKey(t.vault.B),
              new v.PublicKey(e.mintA.address),
              new v.PublicKey(e.mintB.address),
              o,
              r,
              b,
              g,
              u,
              s,
              a,
              c,
              Oe.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [b, g])
                ? We(p, y).publicKey
                : void 0,
            );
      return {
        address: {
          nftMint: f,
          tickArrayLower: w,
          tickArrayUpper: P,
          positionNftAccount: T,
          metadataAccount: B,
          personalPosition: h,
          protocolPosition: x,
        },
        instructions: [S],
        signers: d,
        instructionTypes: [U.ClmmOpenPosition],
        lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [],
      };
    }
    static openPositionFromBaseInstruction(
      e,
      t,
      n,
      o,
      r,
      s,
      a,
      c,
      u,
      l,
      m,
      d,
      p,
      y,
      f,
      b,
      g,
      w,
      P,
      T,
      B,
      h,
      x,
      S,
      K,
      I,
    ) {
      let C = V([
          Ne("tickLowerIndex"),
          Ne("tickUpperIndex"),
          Ne("tickArrayLowerStartIndex"),
          Ne("tickArrayUpperStartIndex"),
          ne("liquidity"),
          k("amountMaxA"),
          k("amountMaxB"),
          _e("withMetadata"),
          G("optionBaseFlag"),
          _e("baseFlag"),
        ]),
        L = [...(I ? [{ pubkey: I, isSigner: !1, isWritable: !0 }] : [])],
        O = [
          { pubkey: t, isSigner: !0, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !1 },
          { pubkey: r, isSigner: !0, isWritable: !0 },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: a, isSigner: !1, isWritable: !0 },
          { pubkey: n, isSigner: !1, isWritable: !0 },
          { pubkey: c, isSigner: !1, isWritable: !0 },
          { pubkey: u, isSigner: !1, isWritable: !0 },
          { pubkey: l, isSigner: !1, isWritable: !0 },
          { pubkey: m, isSigner: !1, isWritable: !0 },
          { pubkey: d, isSigner: !1, isWritable: !0 },
          { pubkey: p, isSigner: !1, isWritable: !0 },
          { pubkey: y, isSigner: !1, isWritable: !0 },
          { pubkey: f, isSigner: !1, isWritable: !0 },
          { pubkey: ot, isSigner: !1, isWritable: !1 },
          { pubkey: v.SystemProgram.programId, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          {
            pubkey: te.ASSOCIATED_TOKEN_PROGRAM_ID,
            isSigner: !1,
            isWritable: !1,
          },
          { pubkey: cn, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: b, isSigner: !1, isWritable: !1 },
          { pubkey: g, isSigner: !1, isWritable: !1 },
          ...L,
        ],
        F = Buffer.alloc(C.span);
      C.encode(
        {
          tickLowerIndex: w,
          tickUpperIndex: P,
          tickArrayLowerStartIndex: T,
          tickArrayUpperStartIndex: B,
          liquidity: new gs.default(0),
          amountMaxA: x === "MintA" ? S : K,
          amountMaxB: x === "MintA" ? K : S,
          withMetadata: h === "create",
          baseFlag: x === "MintA",
          optionBaseFlag: 1,
        },
        F,
      );
      let W = Buffer.from([...Ut.openPosition, ...F]);
      return new v.TransactionInstruction({ keys: O, programId: e, data: W });
    }
    static openPositionFromBaseInstruction22(
      e,
      t,
      n,
      o,
      r,
      s,
      a,
      c,
      u,
      l,
      m,
      d,
      p,
      y,
      f,
      b,
      g,
      w,
      P,
      T,
      B,
      h,
      x,
      S,
      K,
    ) {
      let I = V([
          Ne("tickLowerIndex"),
          Ne("tickUpperIndex"),
          Ne("tickArrayLowerStartIndex"),
          Ne("tickArrayUpperStartIndex"),
          ne("liquidity"),
          k("amountMaxA"),
          k("amountMaxB"),
          _e("withMetadata"),
          G("optionBaseFlag"),
          _e("baseFlag"),
        ]),
        C = [...(K ? [{ pubkey: K, isSigner: !1, isWritable: !0 }] : [])],
        L = [
          { pubkey: t, isSigner: !0, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !1 },
          { pubkey: r, isSigner: !0, isWritable: !0 },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: n, isSigner: !1, isWritable: !0 },
          { pubkey: a, isSigner: !1, isWritable: !0 },
          { pubkey: c, isSigner: !1, isWritable: !0 },
          { pubkey: u, isSigner: !1, isWritable: !0 },
          { pubkey: l, isSigner: !1, isWritable: !0 },
          { pubkey: m, isSigner: !1, isWritable: !0 },
          { pubkey: d, isSigner: !1, isWritable: !0 },
          { pubkey: p, isSigner: !1, isWritable: !0 },
          { pubkey: y, isSigner: !1, isWritable: !0 },
          { pubkey: ot, isSigner: !1, isWritable: !1 },
          { pubkey: v.SystemProgram.programId, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          {
            pubkey: te.ASSOCIATED_TOKEN_PROGRAM_ID,
            isSigner: !1,
            isWritable: !1,
          },
          { pubkey: te.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: f, isSigner: !1, isWritable: !1 },
          { pubkey: b, isSigner: !1, isWritable: !1 },
          ...C,
        ],
        O = Buffer.alloc(I.span);
      I.encode(
        {
          tickLowerIndex: g,
          tickUpperIndex: w,
          tickArrayLowerStartIndex: P,
          tickArrayUpperStartIndex: T,
          liquidity: new gs.default(0),
          amountMaxA: h === "MintA" ? x : S,
          amountMaxB: h === "MintA" ? S : x,
          withMetadata: B === "create",
          baseFlag: h === "MintA",
          optionBaseFlag: 1,
        },
        O,
      );
      let F = Buffer.from([...Ut.openPositionWithTokenEx, ...O]);
      return new v.TransactionInstruction({ keys: L, programId: e, data: F });
    }
    static async openPositionFromLiquidityInstructions({
      poolInfo: e,
      poolKeys: t,
      ownerInfo: n,
      tickLower: o,
      tickUpper: r,
      liquidity: s,
      amountMaxA: a,
      amountMaxB: c,
      withMetadata: u,
      getEphemeralSigners: l,
      nft2022: m,
    }) {
      let d,
        p = [];
      if (l) d = new v.PublicKey((await l(1))[0]);
      else {
        let K = v.Keypair.generate();
        p.push(K), (d = K.publicKey);
      }
      let [y, f] = [new v.PublicKey(e.programId), new v.PublicKey(e.id)],
        b = Z.getTickArrayStartIndexByTick(o, e.config.tickSpacing),
        g = Z.getTickArrayStartIndexByTick(r, e.config.tickSpacing),
        { publicKey: w } = Ae(y, f, b),
        { publicKey: P } = Ae(y, f, g),
        { publicKey: T } = m
          ? oe(n.wallet, d, te.TOKEN_2022_PROGRAM_ID)
          : oe(n.wallet, d, te.TOKEN_PROGRAM_ID),
        { publicKey: B } = Un(d),
        { publicKey: h } = Bt(y, d),
        { publicKey: x } = jt(y, f, o, r),
        S = m
          ? this.openPositionFromLiquidityInstruction22(
              y,
              n.wallet,
              f,
              n.wallet,
              d,
              T,
              x,
              w,
              P,
              h,
              n.tokenAccountA,
              n.tokenAccountB,
              new v.PublicKey(t.vault.A),
              new v.PublicKey(t.vault.B),
              new v.PublicKey(t.mintA.address),
              new v.PublicKey(t.mintB.address),
              o,
              r,
              b,
              g,
              s,
              a,
              c,
              u,
              Oe.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [b, g])
                ? We(y, f).publicKey
                : void 0,
            )
          : this.openPositionFromLiquidityInstruction(
              y,
              n.wallet,
              f,
              n.wallet,
              d,
              T,
              B,
              x,
              w,
              P,
              h,
              n.tokenAccountA,
              n.tokenAccountB,
              new v.PublicKey(t.vault.A),
              new v.PublicKey(t.vault.B),
              new v.PublicKey(t.mintA.address),
              new v.PublicKey(t.mintB.address),
              o,
              r,
              b,
              g,
              s,
              a,
              c,
              u,
              Oe.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [b, g])
                ? We(y, f).publicKey
                : void 0,
            );
      return {
        address: {
          nftMint: d,
          tickArrayLower: w,
          tickArrayUpper: P,
          positionNftAccount: T,
          metadataAccount: B,
          personalPosition: h,
          protocolPosition: x,
        },
        instructions: [S],
        signers: p,
        instructionTypes: [U.ClmmOpenPosition],
        lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [],
      };
    }
    static closePositionInstruction(e, t, n, o, r, s) {
      let a = V([]),
        c = [
          { pubkey: t, isSigner: !0, isWritable: !0 },
          { pubkey: n, isSigner: !1, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !0 },
          { pubkey: r, isSigner: !1, isWritable: !0 },
          { pubkey: v.SystemProgram.programId, isSigner: !1, isWritable: !1 },
          {
            pubkey: s ? te.TOKEN_2022_PROGRAM_ID : te.TOKEN_PROGRAM_ID,
            isSigner: !1,
            isWritable: !1,
          },
        ],
        u = Buffer.alloc(a.span);
      a.encode({}, u);
      let l = Buffer.from([...Ut.closePosition, ...u]);
      return new v.TransactionInstruction({ keys: c, programId: e, data: l });
    }
    static closePositionInstructions({
      poolInfo: e,
      poolKeys: t,
      ownerInfo: n,
      ownerPosition: o,
      nft2022: r,
    }) {
      let s = new v.PublicKey(e.programId),
        a = r
          ? oe(n.wallet, o.nftMint, te.TOKEN_2022_PROGRAM_ID).publicKey
          : oe(n.wallet, o.nftMint, te.TOKEN_PROGRAM_ID).publicKey,
        { publicKey: c } = Bt(s, o.nftMint),
        u = [];
      return (
        u.push(this.closePositionInstruction(s, n.wallet, o.nftMint, a, c, r)),
        {
          address: { positionNftAccount: a, personalPosition: c },
          signers: [],
          instructions: u,
          instructionTypes: [U.ClmmClosePosition],
          lookupTableAddress: t.lookupTableAccount
            ? [t.lookupTableAccount]
            : [],
        }
      );
    }
    static increasePositionFromLiquidityInstruction(
      e,
      t,
      n,
      o,
      r,
      s,
      a,
      c,
      u,
      l,
      m,
      d,
      p,
      y,
      f,
      b,
      g,
      w,
    ) {
      let P = V([
          ne("liquidity"),
          k("amountMaxA"),
          k("amountMaxB"),
          G("optionBaseFlag"),
          _e("baseFlag"),
        ]),
        T = [...(w ? [{ pubkey: w, isSigner: !1, isWritable: !0 }] : [])],
        B = [
          { pubkey: t, isSigner: !0, isWritable: !1 },
          { pubkey: n, isSigner: !1, isWritable: !1 },
          { pubkey: r, isSigner: !1, isWritable: !0 },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !0 },
          { pubkey: a, isSigner: !1, isWritable: !0 },
          { pubkey: c, isSigner: !1, isWritable: !0 },
          { pubkey: u, isSigner: !1, isWritable: !0 },
          { pubkey: l, isSigner: !1, isWritable: !0 },
          { pubkey: m, isSigner: !1, isWritable: !0 },
          { pubkey: d, isSigner: !1, isWritable: !0 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: p, isSigner: !1, isWritable: !1 },
          { pubkey: y, isSigner: !1, isWritable: !1 },
          ...T,
        ],
        h = Buffer.alloc(P.span);
      P.encode(
        {
          liquidity: f,
          amountMaxA: b,
          amountMaxB: g,
          optionBaseFlag: 0,
          baseFlag: !1,
        },
        h,
      );
      let x = Buffer.from([...Ut.increaseLiquidity, ...h]);
      return new v.TransactionInstruction({ keys: B, programId: e, data: x });
    }
    static increasePositionFromLiquidityInstructions({
      poolInfo: e,
      poolKeys: t,
      ownerPosition: n,
      ownerInfo: o,
      liquidity: r,
      amountMaxA: s,
      amountMaxB: a,
      nft2022: c,
    }) {
      let [u, l] = [new v.PublicKey(e.programId), new v.PublicKey(e.id)],
        m = Z.getTickArrayStartIndexByTick(n.tickLower, e.config.tickSpacing),
        d = Z.getTickArrayStartIndexByTick(n.tickUpper, e.config.tickSpacing),
        { publicKey: p } = Ae(u, l, m),
        { publicKey: y } = Ae(u, l, d),
        { publicKey: f } = c
          ? oe(o.wallet, n.nftMint, te.TOKEN_2022_PROGRAM_ID)
          : oe(o.wallet, n.nftMint, te.TOKEN_PROGRAM_ID),
        { publicKey: b } = Bt(u, n.nftMint),
        { publicKey: g } = jt(u, l, n.tickLower, n.tickUpper),
        w = this.increasePositionFromLiquidityInstruction(
          u,
          o.wallet,
          f,
          b,
          l,
          g,
          p,
          y,
          o.tokenAccountA,
          o.tokenAccountB,
          new v.PublicKey(t.vault.A),
          new v.PublicKey(t.vault.B),
          new v.PublicKey(e.mintA.address),
          new v.PublicKey(e.mintB.address),
          r,
          s,
          a,
          Oe.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [m, d])
            ? We(u, l).publicKey
            : void 0,
        );
      return {
        address: {
          tickArrayLower: p,
          tickArrayUpper: y,
          positionNftAccount: f,
          personalPosition: b,
          protocolPosition: g,
        },
        signers: [],
        instructions: [w],
        instructionTypes: [U.ClmmIncreasePosition],
        lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [],
      };
    }
    static increasePositionFromBaseInstructions({
      poolInfo: e,
      poolKeys: t,
      ownerPosition: n,
      ownerInfo: o,
      base: r,
      baseAmount: s,
      otherAmountMax: a,
      nft2022: c,
    }) {
      let [u, l] = [new v.PublicKey(e.programId), new v.PublicKey(e.id)],
        m = Z.getTickArrayStartIndexByTick(n.tickLower, e.config.tickSpacing),
        d = Z.getTickArrayStartIndexByTick(n.tickUpper, e.config.tickSpacing),
        { publicKey: p } = Ae(u, l, m),
        { publicKey: y } = Ae(u, l, d),
        { publicKey: f } = c
          ? oe(o.wallet, n.nftMint, te.TOKEN_2022_PROGRAM_ID)
          : oe(o.wallet, n.nftMint, te.TOKEN_PROGRAM_ID),
        { publicKey: b } = Bt(u, n.nftMint),
        { publicKey: g } = jt(u, l, n.tickLower, n.tickUpper);
      return {
        address: {
          tickArrayLower: p,
          tickArrayUpper: y,
          positionNftAccount: f,
          personalPosition: b,
          protocolPosition: g,
        },
        instructions: [
          this.increasePositionFromBaseInstruction(
            u,
            o.wallet,
            f,
            b,
            l,
            g,
            p,
            y,
            o.tokenAccountA,
            o.tokenAccountB,
            new v.PublicKey(t.vault.A),
            new v.PublicKey(t.vault.B),
            new v.PublicKey(e.mintA.address),
            new v.PublicKey(e.mintB.address),
            r,
            s,
            a,
            Oe.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [m, d])
              ? We(u, l).publicKey
              : void 0,
          ),
        ],
        signers: [],
        instructionTypes: [U.ClmmIncreasePosition],
        lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [],
      };
    }
    static increasePositionFromBaseInstruction(
      e,
      t,
      n,
      o,
      r,
      s,
      a,
      c,
      u,
      l,
      m,
      d,
      p,
      y,
      f,
      b,
      g,
      w,
    ) {
      let P = V([
          ne("liquidity"),
          k("amountMaxA"),
          k("amountMaxB"),
          G("optionBaseFlag"),
          _e("baseFlag"),
        ]),
        T = [...(w ? [{ pubkey: w, isSigner: !1, isWritable: !0 }] : [])],
        B = [
          { pubkey: t, isSigner: !0, isWritable: !1 },
          { pubkey: n, isSigner: !1, isWritable: !1 },
          { pubkey: r, isSigner: !1, isWritable: !0 },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !0 },
          { pubkey: a, isSigner: !1, isWritable: !0 },
          { pubkey: c, isSigner: !1, isWritable: !0 },
          { pubkey: u, isSigner: !1, isWritable: !0 },
          { pubkey: l, isSigner: !1, isWritable: !0 },
          { pubkey: m, isSigner: !1, isWritable: !0 },
          { pubkey: d, isSigner: !1, isWritable: !0 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: p, isSigner: !1, isWritable: !1 },
          { pubkey: y, isSigner: !1, isWritable: !1 },
          ...T,
        ],
        h = Buffer.alloc(P.span);
      P.encode(
        {
          liquidity: new gs.default(0),
          amountMaxA: f === "MintA" ? b : g,
          amountMaxB: f === "MintA" ? g : b,
          baseFlag: f === "MintA",
          optionBaseFlag: 1,
        },
        h,
      );
      let x = Buffer.from([...Ut.increaseLiquidity, ...h]);
      return new v.TransactionInstruction({ keys: B, programId: e, data: x });
    }
    static decreaseLiquidityInstruction(
      e,
      t,
      n,
      o,
      r,
      s,
      a,
      c,
      u,
      l,
      m,
      d,
      p,
      y,
      f,
      b,
      g,
      w,
      P,
    ) {
      let T = V([ne("liquidity"), k("amountMinA"), k("amountMinB")]),
        B = [
          ...(P ? [{ pubkey: P, isSigner: !1, isWritable: !0 }] : []),
          ...f
            .map((K) => [
              { pubkey: K.poolRewardVault, isSigner: !1, isWritable: !0 },
              { pubkey: K.ownerRewardVault, isSigner: !1, isWritable: !0 },
              { pubkey: K.rewardMint, isSigner: !1, isWritable: !1 },
            ])
            .flat(),
        ],
        h = [
          { pubkey: t, isSigner: !0, isWritable: !1 },
          { pubkey: n, isSigner: !1, isWritable: !1 },
          { pubkey: o, isSigner: !1, isWritable: !0 },
          { pubkey: r, isSigner: !1, isWritable: !0 },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: m, isSigner: !1, isWritable: !0 },
          { pubkey: d, isSigner: !1, isWritable: !0 },
          { pubkey: a, isSigner: !1, isWritable: !0 },
          { pubkey: c, isSigner: !1, isWritable: !0 },
          { pubkey: u, isSigner: !1, isWritable: !0 },
          { pubkey: l, isSigner: !1, isWritable: !0 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: lo, isSigner: !1, isWritable: !1 },
          { pubkey: p, isSigner: !1, isWritable: !1 },
          { pubkey: y, isSigner: !1, isWritable: !1 },
          ...B,
        ],
        x = Buffer.alloc(T.span);
      T.encode({ liquidity: b, amountMinA: g, amountMinB: w }, x);
      let S = Buffer.from([...Ut.decreaseLiquidity, ...x]);
      return new v.TransactionInstruction({ keys: h, programId: e, data: S });
    }
    static decreaseLiquidityInstructions({
      poolInfo: e,
      poolKeys: t,
      ownerPosition: n,
      ownerInfo: o,
      liquidity: r,
      amountMinA: s,
      amountMinB: a,
      programId: c,
      nft2022: u,
    }) {
      let [l, m] = [new v.PublicKey(e.programId), new v.PublicKey(e.id)],
        d = Z.getTickArrayStartIndexByTick(n.tickLower, e.config.tickSpacing),
        p = Z.getTickArrayStartIndexByTick(n.tickUpper, e.config.tickSpacing),
        { publicKey: y } = Ae(l, m, d),
        { publicKey: f } = Ae(l, m, p),
        { publicKey: b } = u
          ? oe(o.wallet, n.nftMint, te.TOKEN_2022_PROGRAM_ID)
          : oe(o.wallet, n.nftMint, c),
        { publicKey: g } = Bt(l, n.nftMint),
        { publicKey: w } = jt(l, m, n.tickLower, n.tickUpper),
        P = [];
      for (let h = 0; h < e.rewardDefaultInfos.length; h++)
        P.push({
          poolRewardVault: new v.PublicKey(t.rewardInfos[h].vault),
          ownerRewardVault: o.rewardAccounts[h],
          rewardMint: new v.PublicKey(e.rewardDefaultInfos[h].mint.address),
        });
      let T = [],
        B = this.decreaseLiquidityInstruction(
          l,
          o.wallet,
          b,
          g,
          m,
          w,
          y,
          f,
          o.tokenAccountA,
          o.tokenAccountB,
          new v.PublicKey(t.vault.A),
          new v.PublicKey(t.vault.B),
          new v.PublicKey(e.mintA.address),
          new v.PublicKey(e.mintB.address),
          P,
          r,
          s,
          a,
          Oe.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [d, p])
            ? We(l, m).publicKey
            : void 0,
        );
      return (
        T.push(B),
        {
          address: {
            tickArrayLower: y,
            tickArrayUpper: f,
            positionNftAccount: b,
            personalPosition: g,
            protocolPosition: w,
          },
          signers: [],
          instructions: T,
          instructionTypes: [U.ClmmDecreasePosition],
          lookupTableAddress: t.lookupTableAccount
            ? [t.lookupTableAccount]
            : [],
        }
      );
    }
    static swapInstruction(e, t, n, o, r, s, a, c, u, l, m, d, p, y, f, b, g) {
      let w = V([
          k("amount"),
          k("otherAmountThreshold"),
          ne("sqrtPriceLimitX64"),
          _e("isBaseInput"),
        ]),
        P = [
          ...(g ? [{ pubkey: g, isSigner: !1, isWritable: !0 }] : []),
          ...m.map((x) => ({ pubkey: x, isSigner: !1, isWritable: !0 })),
        ],
        T = [
          { pubkey: t, isSigner: !0, isWritable: !1 },
          { pubkey: o, isSigner: !1, isWritable: !1 },
          { pubkey: n, isSigner: !1, isWritable: !0 },
          { pubkey: r, isSigner: !1, isWritable: !0 },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: a, isSigner: !1, isWritable: !0 },
          { pubkey: c, isSigner: !1, isWritable: !0 },
          { pubkey: d, isSigner: !1, isWritable: !0 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: lo, isSigner: !1, isWritable: !1 },
          { pubkey: u, isSigner: !1, isWritable: !1 },
          { pubkey: l, isSigner: !1, isWritable: !1 },
          ...P,
        ],
        B = Buffer.alloc(w.span);
      w.encode(
        {
          amount: p,
          otherAmountThreshold: y,
          sqrtPriceLimitX64: f,
          isBaseInput: b,
        },
        B,
      );
      let h = Buffer.from([...Ut.swap, ...B]);
      return new v.TransactionInstruction({ keys: T, programId: e, data: h });
    }
    static makeSwapBaseInInstructions({
      poolInfo: e,
      poolKeys: t,
      observationId: n,
      ownerInfo: o,
      inputMint: r,
      amountIn: s,
      amountOutMin: a,
      sqrtPriceLimitX64: c,
      remainingAccounts: u,
    }) {
      let [l, m] = [new v.PublicKey(e.programId), new v.PublicKey(e.id)],
        [d, p] = [new v.PublicKey(t.vault.A), new v.PublicKey(t.vault.B)],
        [y, f] = [
          new v.PublicKey(e.mintA.address),
          new v.PublicKey(e.mintB.address),
        ],
        b = e.mintA.address === r.toString(),
        g = [
          this.swapInstruction(
            l,
            o.wallet,
            m,
            new v.PublicKey(e.config.id),
            b ? o.tokenAccountA : o.tokenAccountB,
            b ? o.tokenAccountB : o.tokenAccountA,
            b ? d : p,
            b ? p : d,
            b ? y : f,
            b ? f : y,
            u,
            n,
            s,
            a,
            c,
            !0,
            We(l, m).publicKey,
          ),
        ];
      return {
        signers: [],
        instructions: g,
        instructionTypes: [U.ClmmSwapBaseIn],
        lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [],
        address: {},
      };
    }
    static makeSwapBaseOutInstructions({
      poolInfo: e,
      poolKeys: t,
      observationId: n,
      ownerInfo: o,
      outputMint: r,
      amountOut: s,
      amountInMax: a,
      sqrtPriceLimitX64: c,
      remainingAccounts: u,
    }) {
      let [l, m] = [new v.PublicKey(e.programId), new v.PublicKey(e.id)],
        [d, p] = [new v.PublicKey(t.vault.A), new v.PublicKey(t.vault.B)],
        [y, f] = [
          new v.PublicKey(e.mintA.address),
          new v.PublicKey(e.mintB.address),
        ],
        b = e.mintA.address === r.toBase58(),
        g = [
          this.swapInstruction(
            l,
            o.wallet,
            m,
            new v.PublicKey(e.config.id),
            b ? o.tokenAccountB : o.tokenAccountA,
            b ? o.tokenAccountA : o.tokenAccountB,
            b ? p : d,
            b ? d : p,
            b ? f : y,
            b ? y : f,
            u,
            n,
            s,
            a,
            c,
            !1,
            We(l, m).publicKey,
          ),
        ];
      return {
        signers: [],
        instructions: g,
        instructionTypes: [U.ClmmSwapBaseOut],
        lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [],
        address: {},
      };
    }
    static initRewardInstruction(e, t, n, o, r, s, a, c, u, l, m, d) {
      let p = V([k("openTime"), k("endTime"), ne("emissionsPerSecondX64")]),
        y = [
          { pubkey: t, isSigner: !0, isWritable: !0 },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: r, isSigner: !1, isWritable: !1 },
          { pubkey: n, isSigner: !1, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !0 },
          { pubkey: c, isSigner: !1, isWritable: !1 },
          { pubkey: u, isSigner: !1, isWritable: !0 },
          { pubkey: a, isSigner: !1, isWritable: !1 },
          { pubkey: v.SystemProgram.programId, isSigner: !1, isWritable: !1 },
          { pubkey: ot, isSigner: !1, isWritable: !1 },
        ],
        f = Buffer.alloc(p.span);
      p.encode({ openTime: J(l), endTime: J(m), emissionsPerSecondX64: d }, f);
      let b = Buffer.from([...Ut.initReward, ...f]);
      return new v.TransactionInstruction({ keys: y, programId: e, data: b });
    }
    static initRewardInstructions({
      poolInfo: e,
      poolKeys: t,
      ownerInfo: n,
      rewardInfo: o,
    }) {
      let [r, s] = [new v.PublicKey(e.programId), new v.PublicKey(e.id)],
        a = cu(r, s, o.mint).publicKey,
        c = _i(r).publicKey,
        u = [
          this.initRewardInstruction(
            r,
            n.wallet,
            s,
            c,
            new v.PublicKey(e.config.id),
            n.tokenAccount,
            o.programId,
            o.mint,
            a,
            o.openTime,
            o.endTime,
            o.emissionsPerSecondX64,
          ),
        ];
      return {
        address: { poolRewardVault: a, operationId: c },
        signers: [],
        instructions: u,
        instructionTypes: [U.ClmmInitReward],
        lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [],
      };
    }
    static setRewardInstruction(e, t, n, o, r, s, a, c, u, l, m, d) {
      let p = V([
          G("rewardIndex"),
          ne("emissionsPerSecondX64"),
          k("openTime"),
          k("endTime"),
        ]),
        y = [
          { pubkey: t, isSigner: !0, isWritable: !0 },
          { pubkey: r, isSigner: !1, isWritable: !1 },
          { pubkey: n, isSigner: !1, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !0 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: a, isSigner: !1, isWritable: !0 },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: c, isSigner: !1, isWritable: !0 },
        ],
        f = Buffer.alloc(p.span);
      p.encode(
        {
          rewardIndex: u,
          emissionsPerSecondX64: d,
          openTime: J(l),
          endTime: J(m),
        },
        f,
      );
      let b = Buffer.from([...Ut.setRewardEmissions, ...f]);
      return new v.TransactionInstruction({ keys: y, programId: e, data: b });
    }
    static setRewardInstructions({
      poolInfo: e,
      poolKeys: t,
      ownerInfo: n,
      rewardInfo: o,
    }) {
      let [r, s] = [new v.PublicKey(e.programId), new v.PublicKey(e.id)],
        a,
        c,
        u;
      for (let d = 0; d < e.rewardDefaultInfos.length; d++)
        e.rewardDefaultInfos[d].mint.address === o.mint.toString() &&
          ((a = d),
          (c = new v.PublicKey(t.rewardInfos[d].vault)),
          (u = new v.PublicKey(t.rewardInfos[d].mint.address)));
      (a === void 0 || c === void 0) &&
        Jl.logWithError(
          "reward mint check error",
          "no reward mint",
          e.rewardDefaultInfos,
        );
      let l = _i(r).publicKey,
        m = [
          this.setRewardInstruction(
            r,
            n.wallet,
            s,
            l,
            new v.PublicKey(e.config.id),
            n.tokenAccount,
            c,
            u,
            a,
            o.openTime,
            o.endTime,
            o.emissionsPerSecondX64,
          ),
        ];
      return {
        address: { rewardVault: c, operationId: l },
        signers: [],
        instructions: m,
        instructionTypes: [U.ClmmSetReward],
        lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [],
      };
    }
    static collectRewardInstruction(e, t, n, o, r, s, a) {
      let c = V([G("rewardIndex")]),
        u = [
          { pubkey: t, isSigner: !0, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !0 },
          { pubkey: n, isSigner: !1, isWritable: !0 },
          { pubkey: r, isSigner: !1, isWritable: !0 },
          { pubkey: s, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: lo, isSigner: !1, isWritable: !1 },
        ],
        l = Buffer.alloc(c.span);
      c.encode({ rewardIndex: a }, l);
      let m = Buffer.from([...Ut.collectReward, ...l]);
      return new v.TransactionInstruction({ keys: u, programId: e, data: m });
    }
    static collectRewardInstructions({
      poolInfo: e,
      poolKeys: t,
      ownerInfo: n,
      rewardMint: o,
    }) {
      let [r, s] = [new v.PublicKey(e.programId), new v.PublicKey(e.id)],
        a,
        c;
      for (let l = 0; l < e.rewardDefaultInfos.length; l++)
        e.rewardDefaultInfos[l].mint.address === o.toString() &&
          ((a = l), (c = new v.PublicKey(t.rewardInfos[l].vault)));
      (a === void 0 || c === void 0) &&
        Jl.logWithError(
          "reward mint check error",
          "no reward mint",
          e.rewardDefaultInfos,
        );
      let u = [
        this.collectRewardInstruction(r, n.wallet, s, n.tokenAccount, c, o, a),
      ];
      return {
        address: { rewardVault: c },
        signers: [],
        instructions: u,
        instructionTypes: [U.ClmmCollectReward],
        lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [],
      };
    }
    static async makeLockPositions({
      programId: e,
      authProgramId: t,
      poolProgramId: n,
      payer: o,
      wallet: r,
      nftMint: s,
      nft2022: a,
      getEphemeralSigners: c,
    }) {
      let u = [],
        l;
      if (c) l = new v.PublicKey((await c(1))[0]);
      else {
        let g = v.Keypair.generate();
        u.push(g), (l = g.publicKey);
      }
      let m = a
          ? oe(r, s, te.TOKEN_2022_PROGRAM_ID).publicKey
          : oe(r, s, te.TOKEN_PROGRAM_ID).publicKey,
        { publicKey: d } = Bt(n, s),
        p = Vi(e, l).publicKey,
        y = oe(r, l, te.TOKEN_PROGRAM_ID).publicKey,
        f = Un(l).publicKey,
        b = Re.lockPositionInstructionV2({
          programId: e,
          auth: t,
          payer: o,
          positionOwner: r,
          lockOwner: r,
          positionNftAccount: m,
          positionId: d,
          lockPositionId: p,
          lockNftMint: l,
          lockNftAccount: y,
          metadataAccount: f,
          withMetadata: !0,
          nft2022: a,
          positionNftMint: s,
          authPositionNftAccount: oe(
            t,
            s,
            a ? te.TOKEN_2022_PROGRAM_ID : te.TOKEN_PROGRAM_ID,
          ).publicKey,
          positionNftProgram: a
            ? te.TOKEN_2022_PROGRAM_ID
            : te.TOKEN_PROGRAM_ID,
        });
      return {
        address: {
          positionId: d,
          lockPositionId: p,
          lockNftAccount: y,
          lockNftMint: l,
          positionNftAccount: m,
          metadataAccount: f,
        },
        instructions: [b],
        signers: u,
        instructionTypes: [U.ClmmLockPosition],
        lookupTableAddress: [],
      };
    }
    static lockPositionInstructionV2({
      programId: e,
      auth: t,
      payer: n,
      positionOwner: o,
      lockOwner: r,
      positionNftAccount: s,
      positionId: a,
      positionNftMint: c,
      authPositionNftAccount: u,
      positionNftProgram: l,
      lockPositionId: m,
      lockNftMint: d,
      lockNftAccount: p,
      metadataAccount: y,
      withMetadata: f,
    }) {
      let b = [
          { pubkey: t, isSigner: !1, isWritable: !1 },
          { pubkey: n, isSigner: !0, isWritable: !0 },
          { pubkey: o, isSigner: !0, isWritable: !0 },
          { pubkey: r, isSigner: !1, isWritable: !1 },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: a, isSigner: !1, isWritable: !1 },
          { pubkey: c, isSigner: !1, isWritable: !0 },
          { pubkey: u, isSigner: !1, isWritable: !0 },
          { pubkey: m, isSigner: !1, isWritable: !0 },
          { pubkey: d, isSigner: !0, isWritable: !0 },
          { pubkey: p, isSigner: !1, isWritable: !0 },
          { pubkey: y, isSigner: !1, isWritable: !0 },
          { pubkey: cn, isSigner: !1, isWritable: !1 },
          {
            pubkey: te.ASSOCIATED_TOKEN_PROGRAM_ID,
            isSigner: !1,
            isWritable: !1,
          },
          { pubkey: ot, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: l, isSigner: !1, isWritable: !1 },
          { pubkey: v.SystemProgram.programId, isSigner: !1, isWritable: !1 },
        ],
        g = V([_e("withMetadata")]),
        w = Buffer.alloc(g.span);
      g.encode({ withMetadata: f }, w);
      let P = Buffer.from([...em, ...w]);
      return new v.TransactionInstruction({ keys: b, programId: e, data: P });
    }
    static lockPositionInstruction({
      programId: e,
      authProgramId: t,
      poolProgramId: n,
      owner: o,
      positionNft: r,
    }) {
      let { publicKey: s } = oe(o, r, te.TOKEN_PROGRAM_ID),
        { publicKey: a } = Bt(n, r),
        c = [
          { pubkey: t, isSigner: !1, isWritable: !1 },
          { pubkey: o, isSigner: !0, isWritable: !1 },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: a, isSigner: !1, isWritable: !1 },
          { pubkey: fs(e, a).publicKey, isSigner: !1, isWritable: !0 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: v.SystemProgram.programId, isSigner: !1, isWritable: !1 },
        ];
      return new v.TransactionInstruction({
        keys: c,
        programId: e,
        data: Buffer.from(em),
      });
    }
    static harvestLockPositionInstruction(e) {
      let [t, n] = [
          new v.PublicKey(e.poolKeys.programId),
          new v.PublicKey(e.poolKeys.id),
        ],
        o = Z.getTickArrayStartIndexByTick(
          e.ownerPosition.tickLower,
          e.poolKeys.config.tickSpacing,
        ),
        r = Z.getTickArrayStartIndexByTick(
          e.ownerPosition.tickUpper,
          e.poolKeys.config.tickSpacing,
        ),
        { publicKey: s } = Ae(t, n, o),
        { publicKey: a } = Ae(t, n, r),
        { publicKey: c } = oe(
          e.owner,
          e.ownerPosition.nftMint,
          te.TOKEN_PROGRAM_ID,
        ),
        { publicKey: u } = Bt(t, e.ownerPosition.nftMint),
        { publicKey: l } = jt(
          t,
          n,
          e.ownerPosition.tickLower,
          e.ownerPosition.tickUpper,
        ),
        m = [];
      for (let y = 0; y < e.poolKeys.rewardInfos.length; y++)
        m.push({
          poolRewardVault: new v.PublicKey(e.poolKeys.rewardInfos[y].vault),
          ownerRewardVault: e.ownerRewardAccounts[y],
          rewardMint: new v.PublicKey(e.poolKeys.rewardInfos[y].mint.address),
        });
      let d = [
          ...m
            .map((y) => [
              { pubkey: y.poolRewardVault, isSigner: !1, isWritable: !0 },
              { pubkey: y.ownerRewardVault, isSigner: !1, isWritable: !0 },
              { pubkey: y.rewardMint, isSigner: !1, isWritable: !1 },
            ])
            .flat(),
        ],
        p = [
          { pubkey: e.authProgramId, isSigner: !1, isWritable: !1 },
          {
            pubkey: fs(e.programId, u).publicKey,
            isSigner: !1,
            isWritable: !1,
          },
          { pubkey: t, isSigner: !1, isWritable: !1 },
          { pubkey: e.owner, isSigner: !0, isWritable: !1 },
          { pubkey: c, isSigner: !1, isWritable: !0 },
          { pubkey: u, isSigner: !1, isWritable: !0 },
          { pubkey: n, isSigner: !1, isWritable: !0 },
          { pubkey: l, isSigner: !1, isWritable: !0 },
          {
            pubkey: new v.PublicKey(e.poolKeys.vault.A),
            isSigner: !1,
            isWritable: !0,
          },
          {
            pubkey: new v.PublicKey(e.poolKeys.vault.B),
            isSigner: !1,
            isWritable: !0,
          },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: a, isSigner: !1, isWritable: !0 },
          { pubkey: e.userVaultA, isSigner: !1, isWritable: !0 },
          { pubkey: e.userVaultB, isSigner: !1, isWritable: !0 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: tn, isSigner: !1, isWritable: !1 },
          {
            pubkey: new v.PublicKey(e.poolKeys.mintA.address),
            isSigner: !1,
            isWritable: !1,
          },
          {
            pubkey: new v.PublicKey(e.poolKeys.mintB.address),
            isSigner: !1,
            isWritable: !1,
          },
          ...d,
        ];
      return new v.TransactionInstruction({
        keys: p,
        programId: e.programId,
        data: Buffer.from(tm),
      });
    }
    static harvestLockPositionInstructionV2({
      programId: e,
      auth: t,
      lockPositionId: n,
      clmmProgram: o,
      lockOwner: r,
      lockNftMint: s,
      lockNftAccount: a,
      positionNftAccount: c,
      positionId: u,
      poolId: l,
      protocolPosition: m,
      vaultA: d,
      vaultB: p,
      tickArrayLower: y,
      tickArrayUpper: f,
      userVaultA: b,
      userVaultB: g,
      mintA: w,
      mintB: P,
      rewardAccounts: T,
      exTickArrayBitmap: B,
    }) {
      let h = [
          ...(B ? [{ pubkey: B, isSigner: !1, isWritable: !0 }] : []),
          ...T.map((S) => [
            { pubkey: S.poolRewardVault, isSigner: !1, isWritable: !0 },
            { pubkey: S.ownerRewardVault, isSigner: !1, isWritable: !0 },
            { pubkey: S.rewardMint, isSigner: !1, isWritable: !1 },
          ]).flat(),
        ],
        x = [
          { pubkey: t, isSigner: !1, isWritable: !1 },
          { pubkey: r, isSigner: !0, isWritable: !1 },
          { pubkey: a, isSigner: !1, isWritable: !0 },
          { pubkey: n, isSigner: !1, isWritable: !1 },
          { pubkey: o, isSigner: !1, isWritable: !1 },
          { pubkey: c, isSigner: !1, isWritable: !0 },
          { pubkey: u, isSigner: !1, isWritable: !0 },
          { pubkey: l, isSigner: !1, isWritable: !0 },
          { pubkey: m, isSigner: !1, isWritable: !0 },
          { pubkey: d, isSigner: !1, isWritable: !0 },
          { pubkey: p, isSigner: !1, isWritable: !0 },
          { pubkey: y, isSigner: !1, isWritable: !0 },
          { pubkey: f, isSigner: !1, isWritable: !0 },
          { pubkey: b, isSigner: !1, isWritable: !0 },
          { pubkey: g, isSigner: !1, isWritable: !0 },
          { pubkey: te.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: te.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
          { pubkey: tn, isSigner: !1, isWritable: !1 },
          { pubkey: w, isSigner: !1, isWritable: !1 },
          { pubkey: P, isSigner: !1, isWritable: !1 },
          ...h,
        ];
      return new v.TransactionInstruction({
        keys: x,
        programId: e,
        data: Buffer.from(tm),
      });
    }
  };
var _f = V([
  ct("mintAuthorityOption"),
  M("mintAuthority"),
  k("supply"),
  G("decimals"),
  G("isInitialized"),
  ct("freezeAuthorityOption"),
  M("freezeAuthority"),
]);
var nm = require("@solana/web3.js"),
  Vo = require("@solana/spl-token");
var Vf = async ({ connection: i, mint: e }) => {
    let t = await i.getAccountInfo(new nm.PublicKey(e));
    return !t || t.data.length !== Vo.MintLayout.span
      ? void 0
      : Vo.MintLayout.decode(t.data);
  },
  Ef = ({
    mint: i,
    decimals: e,
    programId: t = Vo.TOKEN_PROGRAM_ID,
    logoURI: n = "",
    priority: o = 3,
  }) => {
    let r = i.toBase58().substring(0, 6);
    return {
      address: i.toBase58(),
      decimals: e,
      symbol: r,
      logoURI: n,
      extensions: {},
      chainId: 101,
      programId: t.toString(),
      name: r,
      tags: [],
      priority: o,
    };
  },
  Eo = (i) =>
    new Be({
      mint: i.address,
      decimals: i.decimals,
      symbol: i.symbol,
      name: i.name,
    }),
  qi = (o) => {
    var r = o,
      { amount: i, isRaw: e, name: t } = r,
      n = He(r, ["amount", "isRaw", "name"]);
    return new ke(
      new Be({
        mint: pt(n.address).toBase58(),
        decimals: n.decimals,
        symbol: n.symbol,
        name: t,
      }),
      i,
      e,
      t,
    );
  };
function Ff(i) {
  return i.address === en.address ? nt : i;
}
function Df(i) {
  return i.address === nt.address ? en : i;
}
var gt = (o) => {
    var r = o,
      { address: i, programId: e, decimals: t } = r,
      n = He(r, ["address", "programId", "decimals"]);
    return N(
      {
        chainId: 101,
        address: pt(i).toBase58(),
        programId: e,
        logoURI: "",
        symbol: "",
        name: "",
        decimals: t,
        tags: [],
        extensions: n.extensions || {},
      },
      n,
    );
  },
  Bn = (i) =>
    i
      ? X(N({}, i), {
          transferFeeConfigAuthority: i.transferFeeConfigAuthority.toBase58(),
          withdrawWithheldAuthority: i.withdrawWithheldAuthority.toBase58(),
          withheldAmount: i.withheldAmount.toString(),
          olderTransferFee: X(N({}, i.olderTransferFee), {
            epoch: i.olderTransferFee.epoch.toString(),
            maximumFee: i.olderTransferFee.maximumFee.toString(),
          }),
          newerTransferFee: X(N({}, i.newerTransferFee), {
            epoch: i.newerTransferFee.epoch.toString(),
            maximumFee: i.newerTransferFee.maximumFee.toString(),
          }),
        })
      : void 0;
var Pu = be(require("bn.js")),
  As = new Pu.default(25),
  Fo = new Pu.default(1e4),
  im = { 4: 3, 5: 3 };
var me = require("@solana/web3.js"),
  xn = require("@solana/spl-token");
var ws = V([G("instruction"), k("amountIn"), k("minAmountOut")]),
  Ps = V([G("instruction"), k("maxAmountIn"), k("amountOut")]),
  Wf = V([G("instruction"), G("nonce")]),
  ks = V([G("instruction"), G("nonce"), k("startTime")]),
  Ui = V([
    k("status"),
    k("nonce"),
    k("maxOrder"),
    k("depth"),
    k("baseDecimal"),
    k("quoteDecimal"),
    k("state"),
    k("resetFlag"),
    k("minSize"),
    k("volMaxCutRatio"),
    k("amountWaveRatio"),
    k("baseLotSize"),
    k("quoteLotSize"),
    k("minPriceMultiplier"),
    k("maxPriceMultiplier"),
    k("systemDecimalValue"),
    k("minSeparateNumerator"),
    k("minSeparateDenominator"),
    k("tradeFeeNumerator"),
    k("tradeFeeDenominator"),
    k("pnlNumerator"),
    k("pnlDenominator"),
    k("swapFeeNumerator"),
    k("swapFeeDenominator"),
    k("baseNeedTakePnl"),
    k("quoteNeedTakePnl"),
    k("quoteTotalPnl"),
    k("baseTotalPnl"),
    k("poolOpenTime"),
    k("punishPcAmount"),
    k("punishCoinAmount"),
    k("orderbookToInitTime"),
    ne("swapBaseInAmount"),
    ne("swapQuoteOutAmount"),
    k("swapBase2QuoteFee"),
    ne("swapQuoteInAmount"),
    ne("swapBaseOutAmount"),
    k("swapQuote2BaseFee"),
    M("baseVault"),
    M("quoteVault"),
    M("baseMint"),
    M("quoteMint"),
    M("lpMint"),
    M("openOrders"),
    M("marketId"),
    M("marketProgramId"),
    M("targetOrders"),
    M("withdrawQueue"),
    M("lpVault"),
    M("owner"),
    k("lpReserve"),
    j(k(), 3, "padding"),
  ]),
  om = V([
    k("accountType"),
    k("status"),
    k("nonce"),
    k("maxOrder"),
    k("depth"),
    k("baseDecimal"),
    k("quoteDecimal"),
    k("state"),
    k("resetFlag"),
    k("minSize"),
    k("volMaxCutRatio"),
    k("amountWaveRatio"),
    k("baseLotSize"),
    k("quoteLotSize"),
    k("minPriceMultiplier"),
    k("maxPriceMultiplier"),
    k("systemDecimalsValue"),
    k("abortTradeFactor"),
    k("priceTickMultiplier"),
    k("priceTick"),
    k("minSeparateNumerator"),
    k("minSeparateDenominator"),
    k("tradeFeeNumerator"),
    k("tradeFeeDenominator"),
    k("pnlNumerator"),
    k("pnlDenominator"),
    k("swapFeeNumerator"),
    k("swapFeeDenominator"),
    k("baseNeedTakePnl"),
    k("quoteNeedTakePnl"),
    k("quoteTotalPnl"),
    k("baseTotalPnl"),
    k("poolOpenTime"),
    k("punishPcAmount"),
    k("punishCoinAmount"),
    k("orderbookToInitTime"),
    ne("swapBaseInAmount"),
    ne("swapQuoteOutAmount"),
    ne("swapQuoteInAmount"),
    ne("swapBaseOutAmount"),
    k("swapQuote2BaseFee"),
    k("swapBase2QuoteFee"),
    M("baseVault"),
    M("quoteVault"),
    M("baseMint"),
    M("quoteMint"),
    M("lpMint"),
    M("modelDataAccount"),
    M("openOrders"),
    M("marketId"),
    M("marketProgramId"),
    M("targetOrders"),
    M("owner"),
    j(k(), 64, "padding"),
  ]),
  hs = V([
    G("instruction"),
    k("baseAmountIn"),
    k("quoteAmountIn"),
    k("fixedSide"),
    k("otherAmountMin"),
  ]),
  Ts = V([
    G("instruction"),
    k("lpAmount"),
    k("baseAmountMin"),
    k("quoteAmountMin"),
  ]),
  qf = { 4: Ui, 5: om },
  ku = V([k("fee")]);
var rm = require("@solana/web3.js");
var ui = new rm.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"),
  ci = 5e4,
  sm = V([k("x"), k("y"), k("price")]),
  am = V([
    k("accountType"),
    k("status"),
    k("multiplier"),
    k("validDataCount"),
    j(sm, ci, "DataElement"),
  ]);
function Uf(i, e) {
  return [0, ci - 2];
}
function Gf(i) {
  return [0, ci - 2];
}
function Xf(i) {
  return [0, ci - 2];
}
function zf(i, e, t) {
  let [n, o] = Uf(e, t),
    r = n,
    s = o,
    a = 0,
    c = (e * i.multiplier) / t;
  for (; r <= s; ) {
    if (((a = Math.floor((s + r) / 2)), a === 0 || a >= ci - 2))
      return [a, a, !1];
    let u = (i.DataElement[a].x * i.multiplier) / i.DataElement[a].y,
      l = (i.DataElement[a - 1].x * i.multiplier) / i.DataElement[a - 1].y,
      m = (i.DataElement[a + 1].x * i.multiplier) / i.DataElement[a + 1].y;
    if (c === u) return [a, a, !0];
    if (c === l) return [a - 1, a - 1, !0];
    if (c === m) return [a + 1, a + 1, !0];
    if (c < l) s = a - 1;
    else {
      if (c > l && c < u) return [a - 1, a, !0];
      if (c > u && c < m) return [a, a + 1, !0];
      r = a + 1;
    }
  }
  return [a, a, !1];
}
function hu(i, e, t) {
  let [n, o, r] = zf(i, e, t);
  if (!r) return 0;
  if (n === o) {
    let s = i.DataElement[n].x;
    return (e * i.multiplier) / s;
  } else {
    let s = i.DataElement[n].x,
      a = i.DataElement[n].y,
      c = i.DataElement[o].x,
      u = i.DataElement[o].y,
      l = t * (c * a - s * u),
      m = s * l,
      d = (c - s) * (e * a - s * t) * u,
      p = m + d;
    return (e * i.multiplier * l) / p;
  }
}
function si(i, e, t) {
  return (e * i.multiplier) / t;
}
function um(i, e, t) {
  return (e * t) / i.multiplier;
}
function Qf(i, e) {
  let [t, n] = Gf(e),
    o = t,
    r = n,
    s = 0,
    a = e;
  for (; o < r; ) {
    if (((s = Math.floor((r + o) / 2)), s <= 0 || s > ci - 2))
      return [s, s, !1];
    let c = i.DataElement[s].x,
      u = i.DataElement[s - 1].x,
      l = i.DataElement[s + 1].x;
    if (a === c) return [s, s, !0];
    if (a === u) return [s - 1, s - 1, !0];
    if (a === l) return [s + 1, s + 1, !0];
    if (a < u) r = s - 1;
    else {
      if (a > u && a < c) return [s - 1, s, !0];
      if (a > c && a < l) return [s, s + 1, !0];
      o = s + 1;
    }
  }
  return [s, s, !1];
}
function Yf(i, e) {
  let [t, n] = Xf(e),
    o = t,
    r = n,
    s = 0,
    a = e;
  for (; o <= r; ) {
    if (((s = Math.floor((r + o) / 2)), s <= 0 || s >= ci - 2))
      return [s, s, !1];
    let c = i.DataElement[s].y,
      u = i.DataElement[s - 1].y,
      l = i.DataElement[s + 1].y;
    if (a === c) return [s, s, !0];
    if (a === u) return [s - 1, s - 1, !0];
    if (a === l) return [s + 1, s + 1, !0];
    if (a < l) o = s + 1;
    else {
      if (a < u && a > c) return [s - 1, s, !0];
      if (a < c && a > l) return [s, s + 1, !0];
      r = s - 1;
    }
  }
  return [s, s, !1];
}
function cm(i, e, t, n) {
  let o = n ? e + t : e - t,
    [r, s, a] = Qf(i, o);
  if (!a) return [0, 0, !1, a];
  if (r === s) return [i.DataElement[s].price, i.DataElement[s].y, !1, a];
  {
    let c = i.DataElement[r].x,
      u = i.DataElement[s].x,
      l = i.DataElement[r].price,
      m = i.DataElement[s].price,
      d = i.DataElement[r].y,
      p = i.DataElement[s].y;
    if (e >= c && e <= u) return n ? [m, p, !0, a] : [l, d, !0, a];
    {
      let y, f;
      return (
        n
          ? ((y = l + ((m - l) * (e - c)) / (u - c)),
            (f = d - ((o - c) * i.multiplier) / m))
          : ((y = l + ((m - l) * (e - c)) / (u - c)),
            (f = p + ((u - o) * i.multiplier) / l)),
        [y, f, !1, a]
      );
    }
  }
}
function Hf(i, e, t, n) {
  let o = n ? e - t : e + t,
    [r, s, a] = Yf(i, o);
  if (!a) return [0, 0, !1, a];
  if (r === s) return [i.DataElement[s].price, i.DataElement[s].x, !1, a];
  {
    let c = i.DataElement[r].x,
      u = i.DataElement[s].x,
      l = i.DataElement[r].price,
      m = i.DataElement[s].price,
      d = i.DataElement[r].y,
      p = i.DataElement[s].y;
    if (e >= p && e <= d) return n ? [m, u, !0, a] : [l, c, !0, a];
    {
      let y, f;
      return (
        n
          ? ((y = l + ((m - l) * (d - e)) / (d - p)),
            (f = c + (m * (d - o)) / i.multiplier))
          : ((y = l + ((m - l) * (d - e)) / (d - p)),
            (f = u - (l * (o - p)) / i.multiplier)),
        [y, f, !1, a]
      );
    }
  }
}
function jf(i, e) {
  let t = cm(i, e, 0, !1);
  return t[3] ? t[0] : 0;
}
function Tu(i, e, t, n) {
  let o = hu(i, e, t),
    r = si(i, e, o),
    s = si(i, t, o),
    a = si(i, n, o),
    c = !0,
    [u, l, m, d] = cm(i, r, a, c);
  if (!d) return 0;
  if (m) return (n * i.multiplier) / u;
  {
    let p = s - l;
    return um(i, p, o);
  }
}
function Iu(i, e, t, n) {
  let o = hu(i, e, t),
    r = si(i, e, o),
    s = si(i, t, o),
    a = si(i, n, o),
    c = !1,
    [u, l, m, d] = Hf(i, s, a, c);
  if (!d) return 0;
  if (m) return (n * u) / i.multiplier;
  {
    let p = r - l;
    return um(i, p, o);
  }
}
function lm(i) {
  let e = am.decode(i);
  return {
    accountType: e.accountType.toNumber(),
    status: e.status.toNumber(),
    multiplier: e.multiplier.toNumber(),
    validDataCount: e.validDataCount.toNumber(),
    DataElement: e.DataElement.map((t) => ({
      x: t.x.toNumber(),
      y: t.y.toNumber(),
      price: t.price.toNumber(),
    })),
  };
}
function Bu(i, e, t, n) {
  let o = jf(i, si(i, e, hu(i, e, t))) / i.multiplier;
  return n ? o : 1 / o;
}
var ai = class {
  constructor({ connection: e }) {
    this._layoutData = {
      accountType: 0,
      status: 0,
      multiplier: 0,
      validDataCount: 0,
      DataElement: [],
    };
    this.connection = e;
  }
  get stableModelData() {
    return this._layoutData;
  }
  async initStableModelLayout() {
    if (this._layoutData.validDataCount === 0 && this.connection) {
      let e = await this.connection.getAccountInfo(ui);
      e && (this._layoutData = lm(e == null ? void 0 : e.data));
    }
  }
};
var mm = ye("Raydium_liquidity_instruction");
function xu(i) {
  let {
      poolInfo: e,
      poolKeys: t,
      userKeys: n,
      baseAmountIn: o,
      quoteAmountIn: r,
      fixedSide: s,
      otherAmountMin: a,
    } = i,
    c = Buffer.alloc(hs.span);
  hs.encode(
    {
      instruction: 3,
      baseAmountIn: J(o),
      quoteAmountIn: J(r),
      otherAmountMin: J(a),
      fixedSide: s === "base" ? Xe : oa,
    },
    c,
  );
  let u = [
    A({ pubkey: xn.TOKEN_PROGRAM_ID, isWritable: !1 }),
    A({ pubkey: new me.PublicKey(e.id) }),
    A({ pubkey: new me.PublicKey(t.authority), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(t.openOrders), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(t.targetOrders) }),
    A({ pubkey: new me.PublicKey(e.lpMint.address) }),
    A({ pubkey: new me.PublicKey(t.vault.A) }),
    A({ pubkey: new me.PublicKey(t.vault.B) }),
  ];
  return (
    e.pooltype.includes("StablePool") && u.push(A({ pubkey: ui })),
    u.push(
      A({ pubkey: new me.PublicKey(e.marketId), isWritable: !1 }),
      A({ pubkey: n.baseTokenAccount }),
      A({ pubkey: n.quoteTokenAccount }),
      A({ pubkey: n.lpTokenAccount }),
      A({ pubkey: n.owner, isWritable: !1, isSigner: !0 }),
      A({ pubkey: new me.PublicKey(t.marketEventQueue), isWritable: !1 }),
    ),
    new me.TransactionInstruction({
      programId: new me.PublicKey(e.programId),
      keys: u,
      data: c,
    })
  );
}
function Is(i) {
  let {
      poolInfo: e,
      poolKeys: t,
      userKeys: n,
      lpAmount: o,
      baseAmountMin: r,
      quoteAmountMin: s,
    } = i,
    a = Me(t),
    c = 4;
  if ((e.pooltype.includes("StablePool") && (c = 5), c === 4 || c === 5)) {
    let u = Buffer.alloc(Ts.span);
    Ts.encode(
      {
        instruction: 4,
        lpAmount: J(o),
        baseAmountMin: J(r),
        quoteAmountMin: J(s),
      },
      u,
    );
    let l = [
      A({ pubkey: xn.TOKEN_PROGRAM_ID, isWritable: !1 }),
      A({ pubkey: a.id }),
      A({ pubkey: a.authority, isWritable: !1 }),
      A({ pubkey: a.openOrders }),
      A({ pubkey: a.targetOrders }),
      A({ pubkey: a.mintLp.address }),
      A({ pubkey: a.vault.A }),
      A({ pubkey: a.vault.B }),
    ];
    return (
      c === 5
        ? l.push(A({ pubkey: ui }))
        : (l.push(A({ pubkey: a.id })), l.push(A({ pubkey: a.id }))),
      l.push(
        A({ pubkey: a.marketProgramId, isWritable: !1 }),
        A({ pubkey: a.marketId }),
        A({ pubkey: a.marketBaseVault }),
        A({ pubkey: a.marketQuoteVault }),
        A({ pubkey: a.marketAuthority, isWritable: !1 }),
        A({ pubkey: n.lpTokenAccount }),
        A({ pubkey: n.baseTokenAccount }),
        A({ pubkey: n.quoteTokenAccount }),
        A({ pubkey: n.owner, isWritable: !1, isSigner: !0 }),
        A({ pubkey: a.marketEventQueue }),
        A({ pubkey: a.marketBids }),
        A({ pubkey: a.marketAsks }),
      ),
      new me.TransactionInstruction({
        programId: a.programId,
        keys: l,
        data: u,
      })
    );
  }
  return new me.TransactionInstruction({ programId: a.programId, keys: [] });
}
function Bs({
  programId: i,
  ammId: e,
  ammAuthority: t,
  ammOpenOrders: n,
  lpMint: o,
  coinMint: r,
  pcMint: s,
  coinVault: a,
  pcVault: c,
  withdrawQueue: u,
  ammTargetOrders: l,
  poolTempLp: m,
  marketProgramId: d,
  marketId: p,
  userWallet: y,
  userCoinVault: f,
  userPcVault: b,
  userLpVault: g,
  nonce: w,
  openTime: P,
  coinAmount: T,
  pcAmount: B,
  ammConfigId: h,
  feeDestinationId: x,
}) {
  let S = V([
      G("instruction"),
      G("nonce"),
      k("openTime"),
      k("pcAmount"),
      k("coinAmount"),
    ]),
    K = [
      { pubkey: xn.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: xn.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: me.SystemProgram.programId, isSigner: !1, isWritable: !1 },
      { pubkey: ot, isSigner: !1, isWritable: !1 },
      { pubkey: e, isSigner: !1, isWritable: !0 },
      { pubkey: t, isSigner: !1, isWritable: !1 },
      { pubkey: n, isSigner: !1, isWritable: !0 },
      { pubkey: o, isSigner: !1, isWritable: !0 },
      { pubkey: r, isSigner: !1, isWritable: !1 },
      { pubkey: s, isSigner: !1, isWritable: !1 },
      { pubkey: a, isSigner: !1, isWritable: !0 },
      { pubkey: c, isSigner: !1, isWritable: !0 },
      { pubkey: l, isSigner: !1, isWritable: !0 },
      { pubkey: h, isSigner: !1, isWritable: !1 },
      { pubkey: x, isSigner: !1, isWritable: !0 },
      { pubkey: d, isSigner: !1, isWritable: !1 },
      { pubkey: p, isSigner: !1, isWritable: !1 },
      { pubkey: y, isSigner: !0, isWritable: !0 },
      { pubkey: f, isSigner: !1, isWritable: !0 },
      { pubkey: b, isSigner: !1, isWritable: !0 },
      { pubkey: g, isSigner: !1, isWritable: !0 },
    ],
    I = Buffer.alloc(S.span);
  return (
    S.encode(
      { instruction: 1, nonce: w, openTime: P, coinAmount: T, pcAmount: B },
      I,
    ),
    {
      instruction: new me.TransactionInstruction({
        keys: K,
        programId: i,
        data: I,
      }),
      instructionType: U.AmmV4CreatePool,
    }
  );
}
function Zf(i) {
  let e = V([G("instruction"), G("simulateType")]),
    t = Buffer.alloc(e.span);
  e.encode({ instruction: 12, simulateType: 0 }, t);
  let n = [
    A({ pubkey: new me.PublicKey(i.id), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.authority), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.openOrders), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.vault.A), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.vault.B), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.mintLp.address), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.marketId), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.marketEventQueue), isWritable: !1 }),
  ];
  return new me.TransactionInstruction({
    programId: new me.PublicKey(i.programId),
    keys: n,
    data: t,
  });
}
function dm({ poolKeys: i, userKeys: e, amountIn: t, minAmountOut: n }, o) {
  let r = Me(i),
    s = Buffer.alloc(ws.span);
  ws.encode({ instruction: 9, amountIn: J(t), minAmountOut: J(n) }, s);
  let a = [
    A({ pubkey: xn.TOKEN_PROGRAM_ID, isWritable: !1 }),
    A({ pubkey: r.id }),
    A({ pubkey: r.authority, isWritable: !1 }),
    A({ pubkey: r.openOrders }),
  ];
  return (
    o === 4 && a.push(A({ pubkey: r.targetOrders })),
    a.push(A({ pubkey: r.vault.A }), A({ pubkey: r.vault.B })),
    o === 5 && a.push(A({ pubkey: ui })),
    a.push(
      A({ pubkey: r.marketProgramId, isWritable: !1 }),
      A({ pubkey: r.marketId }),
      A({ pubkey: r.marketBids }),
      A({ pubkey: r.marketAsks }),
      A({ pubkey: r.marketEventQueue }),
      A({ pubkey: r.marketBaseVault }),
      A({ pubkey: r.marketQuoteVault }),
      A({ pubkey: r.marketAuthority, isWritable: !1 }),
      A({ pubkey: e.tokenAccountIn }),
      A({ pubkey: e.tokenAccountOut }),
      A({ pubkey: e.owner, isWritable: !1, isSigner: !0 }),
    ),
    new me.TransactionInstruction({ programId: r.programId, keys: a, data: s })
  );
}
function pm({ poolKeys: i, userKeys: e, maxAmountIn: t, amountOut: n }, o) {
  let r = Me(i),
    s = Buffer.alloc(Ps.span);
  Ps.encode({ instruction: 11, maxAmountIn: J(t), amountOut: J(n) }, s);
  let a = [
    A({ pubkey: xn.TOKEN_PROGRAM_ID, isWritable: !1 }),
    A({ pubkey: r.id }),
    A({ pubkey: r.authority, isWritable: !1 }),
    A({ pubkey: r.openOrders }),
    A({ pubkey: r.targetOrders }),
    A({ pubkey: r.vault.A }),
    A({ pubkey: r.vault.B }),
  ];
  return (
    o === 5 && a.push(A({ pubkey: ui })),
    a.push(
      A({ pubkey: r.marketProgramId, isWritable: !1 }),
      A({ pubkey: r.marketId }),
      A({ pubkey: r.marketBids }),
      A({ pubkey: r.marketAsks }),
      A({ pubkey: r.marketEventQueue }),
      A({ pubkey: r.marketBaseVault }),
      A({ pubkey: r.marketQuoteVault }),
      A({ pubkey: r.marketAuthority, isWritable: !1 }),
      A({ pubkey: e.tokenAccountIn }),
      A({ pubkey: e.tokenAccountOut }),
      A({ pubkey: e.owner, isWritable: !1, isSigner: !0 }),
    ),
    new me.TransactionInstruction({ programId: r.programId, keys: a, data: s })
  );
}
function Do(i) {
  let {
    poolKeys: e,
    version: t,
    userKeys: n,
    amountIn: o,
    amountOut: r,
    fixedSide: s,
  } = i;
  if (t === 4 || t === 5) {
    let a = { poolKeys: e, userKeys: n };
    if (s === "in") return dm(X(N({}, a), { amountIn: o, minAmountOut: r }), t);
    if (s === "out")
      return pm(X(N({}, a), { maxAmountIn: o, amountOut: r }), t);
    mm.logWithError("invalid params", "params", i);
  }
  throw (
    (mm.logWithError("invalid version", "poolKeys.version", t),
    new Error("invalid version"))
  );
}
function $f({ poolKeys: i, userKeys: e, startTime: t }) {
  let n = Buffer.alloc(ks.span);
  ks.encode({ instruction: 0, nonce: 5, startTime: J(t) }, n);
  let o = Me(i),
    r = [
      A({ pubkey: xn.TOKEN_PROGRAM_ID, isWritable: !1 }),
      A({ pubkey: me.SystemProgram.programId, isWritable: !1 }),
      A({ pubkey: me.SYSVAR_RENT_PUBKEY, isWritable: !1 }),
      A({ pubkey: o.id }),
      A({ pubkey: o.authority, isWritable: !1 }),
      A({ pubkey: o.openOrders }),
      A({ pubkey: o.mintLp.address }),
      A({ pubkey: o.mintA.address, isWritable: !1 }),
      A({ pubkey: o.mintB.address, isWritable: !1 }),
      A({ pubkey: o.vault.A, isWritable: !1 }),
      A({ pubkey: o.vault.B, isWritable: !1 }),
      A({ pubkey: o.id }),
      A({ pubkey: o.targetOrders }),
      A({ pubkey: e.lpTokenAccount }),
      A({ pubkey: o.id, isWritable: !1 }),
      A({ pubkey: o.marketProgramId, isWritable: !1 }),
      A({ pubkey: o.marketId, isWritable: !1 }),
      A({ pubkey: e.payer, isSigner: !0 }),
    ];
  return new me.TransactionInstruction({
    programId: o.programId,
    keys: r,
    data: n,
  });
}
function Su({ poolKeys: i }) {
  let e = V([G("instruction"), G("simulateType")]),
    t = Buffer.alloc(e.span);
  e.encode({ instruction: 12, simulateType: 0 }, t);
  let n = [
    A({ pubkey: new me.PublicKey(i.id), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.authority), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.openOrders), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.vault.A), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.vault.B), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.mintLp.address), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.marketId), isWritable: !1 }),
    A({ pubkey: new me.PublicKey(i.marketEventQueue), isWritable: !1 }),
  ];
  return {
    instruction: new me.TransactionInstruction({
      programId: new me.PublicKey(i.programId),
      keys: n,
      data: t,
    }),
  };
}
var bm = require("@solana/web3.js"),
  Gi = be(require("bn.js"));
var gm = require("@solana/spl-token");
var fm = require("@solana/web3.js");
var Jf = ye("Raydium_liquidity_serum");
function ym({ programId: i, marketId: e }) {
  let t = [e.toBuffer()],
    n = 0,
    o;
  for (; n < 100; ) {
    try {
      let r = t.concat(Buffer.from([n]), Buffer.alloc(7));
      o = fm.PublicKey.createProgramAddressSync(r, i);
    } catch (r) {
      if (r instanceof TypeError) throw r;
      n++;
      continue;
    }
    return { publicKey: o, nonce: n };
  }
  throw (
    (Jf.logWithError(
      "unable to find a viable program address nonce",
      "params",
      { programId: i, marketId: e },
    ),
    new Error("unable to find a viable program address nonce"))
  );
}
function Wo({ programId: i }) {
  let { publicKey: e } = le(
    [Buffer.from("amm_config_account_seed", "utf-8")],
    i,
  );
  return e;
}
function Yn({ name: i, programId: e, marketId: t }) {
  let { publicKey: n } = le(
    [e.toBuffer(), t.toBuffer(), Buffer.from(i, "utf-8")],
    e,
  );
  return n;
}
function Am({ programId: i, marketId: e }) {
  let { publicKey: t } = le(
    [
      i.toBuffer(),
      e.toBuffer(),
      Buffer.from("open_order_associated_seed", "utf-8"),
    ],
    i,
  );
  return t;
}
function xs({ programId: i }) {
  return le(
    [
      Buffer.from([
        97, 109, 109, 32, 97, 117, 116, 104, 111, 114, 105, 116, 121,
      ]),
    ],
    i,
  );
}
function Ss({
  version: i,
  marketVersion: e,
  marketId: t,
  baseMint: n,
  quoteMint: o,
  baseDecimals: r,
  quoteDecimals: s,
  programId: a,
  marketProgramId: c,
}) {
  let u = Yn({ name: "amm_associated_seed", programId: a, marketId: t }),
    l = Yn({ name: "lp_mint_associated_seed", programId: a, marketId: t }),
    { publicKey: m, nonce: d } = xs({ programId: a }),
    p = Yn({ name: "coin_vault_associated_seed", programId: a, marketId: t }),
    y = Yn({ name: "pc_vault_associated_seed", programId: a, marketId: t }),
    f = Yn({
      name: "temp_lp_token_associated_seed",
      programId: a,
      marketId: t,
    }),
    b = Am({ programId: a, marketId: t }),
    g = Yn({ name: "target_associated_seed", programId: a, marketId: t }),
    w = Yn({ name: "withdraw_associated_seed", programId: a, marketId: t }),
    { publicKey: P } = ym({ programId: c, marketId: t });
  return {
    id: u,
    baseMint: n,
    quoteMint: o,
    lpMint: l,
    baseDecimals: r,
    quoteDecimals: s,
    lpDecimals: r,
    version: i,
    programId: a,
    authority: m,
    nonce: d,
    baseVault: p,
    quoteVault: y,
    lpVault: f,
    openOrders: b,
    targetOrders: g,
    withdrawQueue: w,
    marketVersion: e,
    marketProgramId: c,
    marketId: t,
    marketAuthority: P,
    lookupTableAccount: bm.PublicKey.default,
    configId: Wo({ programId: a }),
  };
}
var Ku;
async function ey({ connection: i, poolKeysList: e, config: t }) {
  Ku || ((Ku = new ai({ connection: i })), await Ku.initStableModelLayout());
  let n = e.map((s) => Su({ poolKeys: s }));
  return (
    await ma(
      i,
      n.map((s) => s.instruction),
      "GetPoolData",
    )
  ).map((s) => {
    let a = da(s, "GetPoolData"),
      c = new Gi.default(ln(a, "status")),
      u = Number(ln(a, "coin_decimals")),
      l = Number(ln(a, "pc_decimals")),
      m = Number(ln(a, "lp_decimals")),
      d = new Gi.default(ln(a, "pool_coin_amount")),
      p = new Gi.default(ln(a, "pool_pc_amount")),
      y = new Gi.default(ln(a, "pool_lp_supply")),
      f = "0";
    try {
      f = ln(a, "pool_open_time");
    } catch {}
    return {
      status: c,
      baseDecimals: u,
      quoteDecimals: l,
      lpDecimals: m,
      baseReserve: d,
      quoteReserve: p,
      lpSupply: y,
      startTime: new Gi.default(f),
    };
  });
}
var Cu = {
    volume: 0,
    volumeQuote: 0,
    volumeFee: 0,
    apr: 0,
    feeApr: 0,
    priceMin: 0,
    priceMax: 0,
    rewardApr: [],
  },
  qo = (i) => {
    let e = {},
      t = gm.TOKEN_PROGRAM_ID.toBase58();
    return (
      Object.keys(i).map((n) => {
        let o = i[n],
          [r, s] = [o.baseMint.toBase58(), o.quoteMint.toBase58()];
        e[n] = {
          id: n,
          version: 4,
          status: o.status.toNumber(),
          programId: o.programId.toBase58(),
          mintA: gt({
            address: r,
            programId: t,
            decimals: o.baseDecimal.toNumber(),
          }),
          mintB: gt({
            address: s,
            programId: t,
            decimals: o.quoteDecimal.toNumber(),
          }),
          rewardDefaultInfos: [],
          rewardDefaultPoolInfos: "Ecosystem",
          price: o.poolPrice.toNumber(),
          mintAmountA: new _(o.mintAAmount.toString())
            .div(10 ** o.baseDecimal.toNumber())
            .toNumber(),
          mintAmountB: new _(o.mintBAmount.toString())
            .div(10 ** o.quoteDecimal.toNumber())
            .toNumber(),
          baseReserve: o.baseReserve,
          quoteReserve: o.quoteReserve,
          feeRate: new _(o.tradeFeeNumerator.toString())
            .div(o.tradeFeeDenominator.toString())
            .toNumber(),
          openTime: o.poolOpenTime.toString(),
          tvl: 0,
          day: Cu,
          week: Cu,
          month: Cu,
          pooltype: [],
          farmUpcomingCount: 0,
          farmOngoingCount: 0,
          farmFinishedCount: 0,
          type: "Standard",
          marketId: o.marketId.toBase58(),
          configId: Wo({ programId: o.programId }).toBase58(),
          lpPrice: 0,
          lpAmount: new _(o.lpReserve.toString())
            .div(
              10 **
                Math.min(o.baseDecimal.toNumber(), o.quoteDecimal.toNumber()),
            )
            .toNumber(),
          lpMint: gt({
            address: o.lpMint.toBase58(),
            programId: t,
            decimals: Math.min(
              o.baseDecimal.toNumber(),
              o.quoteDecimal.toNumber(),
            ),
          }),
          burnPercent: 0,
        };
      }),
      e
    );
  };
var Ve = be(require("bn.js"));
var zi = require("@solana/web3.js"),
  Qi = be(require("bn.js")),
  Ru = require("@solana/spl-token");
var Lt = require("@solana/web3.js"),
  Xi = require("@solana/spl-token");
function ty(i = "accountFlags") {
  let e = new Bo(i);
  return (
    e.addBoolean("initialized"),
    e.addBoolean("market"),
    e.addBoolean("openOrders"),
    e.addBoolean("requestQueue"),
    e.addBoolean("eventQueue"),
    e.addBoolean("bids"),
    e.addBoolean("asks"),
    e
  );
}
var Ks = V([
  Te(5),
  ty("accountFlags"),
  M("ownAddress"),
  k("vaultSignerNonce"),
  M("baseMint"),
  M("quoteMint"),
  M("baseVault"),
  k("baseDepositsTotal"),
  k("baseFeesAccrued"),
  M("quoteVault"),
  k("quoteDepositsTotal"),
  k("quoteFeesAccrued"),
  k("quoteDustThreshold"),
  M("requestQueue"),
  M("eventQueue"),
  M("bids"),
  M("asks"),
  k("baseLotSize"),
  k("quoteLotSize"),
  k("feeRateBps"),
  k("referrerRebatesAccrued"),
  Te(7),
]);
function wm({ programId: i, marketInfo: e }) {
  let t = V([
      G("version"),
      ct("instruction"),
      k("baseLotSize"),
      k("quoteLotSize"),
      dn("feeRateBps"),
      k("vaultSignerNonce"),
      k("quoteDustThreshold"),
    ]),
    n = [
      { pubkey: e.id, isSigner: !1, isWritable: !0 },
      { pubkey: e.requestQueue, isSigner: !1, isWritable: !0 },
      { pubkey: e.eventQueue, isSigner: !1, isWritable: !0 },
      { pubkey: e.bids, isSigner: !1, isWritable: !0 },
      { pubkey: e.asks, isSigner: !1, isWritable: !0 },
      { pubkey: e.baseVault, isSigner: !1, isWritable: !0 },
      { pubkey: e.quoteVault, isSigner: !1, isWritable: !0 },
      { pubkey: e.baseMint, isSigner: !1, isWritable: !1 },
      { pubkey: e.quoteMint, isSigner: !1, isWritable: !1 },
      {
        pubkey: e.authority ? e.quoteMint : Lt.SYSVAR_RENT_PUBKEY,
        isSigner: !1,
        isWritable: !1,
      },
    ]
      .concat(
        e.authority
          ? { pubkey: e.authority, isSigner: !1, isWritable: !1 }
          : [],
      )
      .concat(
        e.authority && e.pruneAuthority
          ? { pubkey: e.pruneAuthority, isSigner: !1, isWritable: !1 }
          : [],
      ),
    o = Buffer.alloc(t.span);
  return (
    t.encode(
      {
        version: 0,
        instruction: 0,
        baseLotSize: e.baseLotSize,
        quoteLotSize: e.quoteLotSize,
        feeRateBps: e.feeRateBps,
        vaultSignerNonce: e.vaultSignerNonce,
        quoteDustThreshold: e.quoteDustThreshold,
      },
      o,
    ),
    new Lt.TransactionInstruction({ keys: n, programId: i, data: o })
  );
}
async function Uo({ connection: i, wallet: e, marketInfo: t }) {
  var s, a, c, u, l, m, d, p;
  let n = new Lt.Transaction(),
    o = await i.getMinimumBalanceForRentExemption(165);
  n.add(
    Lt.SystemProgram.createAccountWithSeed({
      fromPubkey: e,
      basePubkey: e,
      seed: t.baseVault.seed,
      newAccountPubkey: t.baseVault.publicKey,
      lamports: o,
      space: 165,
      programId: Xi.TOKEN_PROGRAM_ID,
    }),
    Lt.SystemProgram.createAccountWithSeed({
      fromPubkey: e,
      basePubkey: e,
      seed: t.quoteVault.seed,
      newAccountPubkey: t.quoteVault.publicKey,
      lamports: o,
      space: 165,
      programId: Xi.TOKEN_PROGRAM_ID,
    }),
    (0, Xi.createInitializeAccountInstruction)(
      t.baseVault.publicKey,
      t.baseMint,
      t.vaultOwner,
    ),
    (0, Xi.createInitializeAccountInstruction)(
      t.quoteVault.publicKey,
      t.quoteMint,
      t.vaultOwner,
    ),
    Lt.SystemProgram.createAccountWithSeed({
      fromPubkey: e,
      basePubkey: e,
      seed: t.id.seed,
      newAccountPubkey: t.id.publicKey,
      lamports: await i.getMinimumBalanceForRentExemption(Ks.span),
      space: Ks.span,
      programId: t.programId,
    }),
  );
  let r = new Lt.Transaction();
  return (
    r.add(
      Lt.SystemProgram.createAccountWithSeed({
        fromPubkey: e,
        basePubkey: e,
        seed: t.requestQueue.seed,
        newAccountPubkey: t.requestQueue.publicKey,
        lamports: t.lowestFeeMarket
          ? 6208320
          : await i.getMinimumBalanceForRentExemption(
              (s = t.requestQueueSpace) != null ? s : 5120 + 12,
            ),
        space: t.lowestFeeMarket
          ? 764
          : (a = t.requestQueueSpace) != null
            ? a
            : 5120 + 12,
        programId: t.programId,
      }),
      Lt.SystemProgram.createAccountWithSeed({
        fromPubkey: e,
        basePubkey: e,
        seed: t.eventQueue.seed,
        newAccountPubkey: t.eventQueue.publicKey,
        lamports: t.lowestFeeMarket
          ? 79594560
          : await i.getMinimumBalanceForRentExemption(
              (c = t.eventQueueSpace) != null ? c : 262144 + 12,
            ),
        space: t.lowestFeeMarket
          ? 11308
          : (u = t.eventQueueSpace) != null
            ? u
            : 262144 + 12,
        programId: t.programId,
      }),
      Lt.SystemProgram.createAccountWithSeed({
        fromPubkey: e,
        basePubkey: e,
        seed: t.bids.seed,
        newAccountPubkey: t.bids.publicKey,
        lamports: t.lowestFeeMarket
          ? 101977920
          : await i.getMinimumBalanceForRentExemption(
              (l = t.orderbookQueueSpace) != null ? l : 65536 + 12,
            ),
        space: t.lowestFeeMarket
          ? 14524
          : (m = t.orderbookQueueSpace) != null
            ? m
            : 65536 + 12,
        programId: t.programId,
      }),
      Lt.SystemProgram.createAccountWithSeed({
        fromPubkey: e,
        basePubkey: e,
        seed: t.asks.seed,
        newAccountPubkey: t.asks.publicKey,
        lamports: t.lowestFeeMarket
          ? 101977920
          : await i.getMinimumBalanceForRentExemption(
              (d = t.orderbookQueueSpace) != null ? d : 65536 + 12,
            ),
        space: t.lowestFeeMarket
          ? 14524
          : (p = t.orderbookQueueSpace) != null
            ? p
            : 65536 + 12,
        programId: t.programId,
      }),
      wm({
        programId: t.programId,
        marketInfo: {
          id: t.id.publicKey,
          requestQueue: t.requestQueue.publicKey,
          eventQueue: t.eventQueue.publicKey,
          bids: t.bids.publicKey,
          asks: t.asks.publicKey,
          baseVault: t.baseVault.publicKey,
          quoteVault: t.quoteVault.publicKey,
          baseMint: t.baseMint,
          quoteMint: t.quoteMint,
          baseLotSize: t.baseLotSize,
          quoteLotSize: t.quoteLotSize,
          feeRateBps: t.feeRateBps,
          vaultSignerNonce: t.vaultSignerNonce,
          quoteDustThreshold: t.quoteDustThreshold,
        },
      }),
    ),
    [
      {
        transaction: n,
        signer: [],
        instructionTypes: [
          U.CreateAccount,
          U.CreateAccount,
          U.InitAccount,
          U.InitAccount,
        ],
      },
      {
        transaction: r,
        signer: [],
        instructionTypes: [
          U.CreateAccount,
          U.CreateAccount,
          U.CreateAccount,
          U.CreateAccount,
          U.CreateAccount,
          U.InitMarket,
        ],
      },
    ]
  );
}
var Yi = class extends Fe {
  async create({
    baseInfo: e,
    quoteInfo: t,
    lotSize: n,
    tickSize: o,
    dexProgramId: r,
    requestQueueSpace: s,
    eventQueueSpace: a,
    orderbookQueueSpace: c,
    lowestFeeMarket: u,
    assignSeed: l,
    txVersion: m,
    computeBudgetConfig: d,
    txTipConfig: p,
    feePayer: y,
  }) {
    let f = this.scope.ownerPubKey,
      b = l
        ? `${e.mint.toBase58().slice(0, 10)}-${t.mint.toBase58().slice(0, 10)}-${l}`
        : void 0,
      g = De({
        fromPublicKey: f,
        programId: r,
        assignSeed: b && `${b}-market`,
      }),
      w = De({
        fromPublicKey: f,
        programId: r,
        assignSeed: b && `${b}-request`,
      }),
      P = De({ fromPublicKey: f, programId: r, assignSeed: b && `${b}-event` }),
      T = De({ fromPublicKey: f, programId: r, assignSeed: b && `${b}-bids` }),
      B = De({ fromPublicKey: f, programId: r, assignSeed: b && `${b}-asks` }),
      h = De({
        fromPublicKey: f,
        programId: Ru.TOKEN_PROGRAM_ID,
        assignSeed: b && `${b}-baseVault`,
      }),
      x = De({
        fromPublicKey: f,
        programId: Ru.TOKEN_PROGRAM_ID,
        assignSeed: b && `${b}-quoteVault`,
      }),
      S = 0,
      K = new Qi.default(100);
    function I() {
      let ee = new Qi.default(0);
      for (;;)
        try {
          return {
            vaultOwner: zi.PublicKey.createProgramAddressSync(
              [g.publicKey.toBuffer(), ee.toArrayLike(Buffer, "le", 8)],
              r,
            ),
            vaultSignerNonce: ee,
          };
        } catch {
          if ((ee.iaddn(1), ee.gt(new Qi.default(25555))))
            throw Error("find vault owner error");
        }
    }
    let { vaultOwner: C, vaultSignerNonce: L } = I(),
      O = new Qi.default(Math.round(10 ** e.decimals * n)),
      F = new Qi.default(Math.round(n * 10 ** t.decimals * o));
    if (O.eq(Xe)) throw Error("lot size is too small");
    if (F.eq(Xe)) throw Error("tick size or lot size is too small");
    let W = await Uo({
        connection: this.scope.connection,
        wallet: this.scope.ownerPubKey,
        marketInfo: {
          programId: r,
          id: g,
          baseMint: e.mint,
          quoteMint: t.mint,
          baseVault: h,
          quoteVault: x,
          vaultOwner: C,
          requestQueue: w,
          eventQueue: P,
          bids: T,
          asks: B,
          feeRateBps: S,
          quoteDustThreshold: K,
          vaultSignerNonce: L,
          baseLotSize: O,
          quoteLotSize: F,
          requestQueueSpace: s,
          eventQueueSpace: a,
          orderbookQueueSpace: c,
          lowestFeeMarket: u,
        },
      }),
      D = this.createTxBuilder(y);
    D.addInstruction({
      instructions: W[0].transaction.instructions,
      signers: W[0].signer,
    });
    for await (let ee of W.slice(1, W.length))
      D.addInstruction({
        instructions: ee.transaction.instructions,
        signers: ee.signer,
        instructionTypes: ee.instructionTypes,
      });
    return m === 0
      ? D.sizeCheckBuildV0({
          computeBudgetConfig: d,
          address: {
            marketId: g.publicKey,
            requestQueue: w.publicKey,
            eventQueue: P.publicKey,
            bids: T.publicKey,
            asks: B.publicKey,
            baseVault: h.publicKey,
            quoteVault: x.publicKey,
            baseMint: new zi.PublicKey(e.mint),
            quoteMint: new zi.PublicKey(t.mint),
          },
        })
      : D.sizeCheckBuild({
          computeBudgetConfig: d,
          address: {
            marketId: g.publicKey,
            requestQueue: w.publicKey,
            eventQueue: P.publicKey,
            bids: T.publicKey,
            asks: B.publicKey,
            baseVault: h.publicKey,
            quoteVault: x.publicKey,
            baseMint: new zi.PublicKey(e.mint),
            quoteMint: new zi.PublicKey(t.mint),
          },
        });
  }
};
var Go = class extends Fe {
  constructor(t) {
    super(t);
    this.stableLayout = new ai({ connection: this.scope.connection });
  }
  async initLayout() {
    await this.stableLayout.initStableModelLayout();
  }
  async load() {
    this.checkDisabled();
  }
  computePairAmount({ poolInfo: t, amount: n, slippage: o, baseIn: r }) {
    let s = new Ve.default(
        new _(n).mul(10 ** t[r ? "mintA" : "mintB"].decimals).toFixed(0),
      ),
      a = Eo(t[r ? "mintB" : "mintA"]),
      [c, u] = [
        new Ve.default(
          new _(t.mintAmountA).mul(10 ** t.mintA.decimals).toString(),
        ),
        new Ve.default(
          new _(t.mintAmountB).mul(10 ** t.mintB.decimals).toString(),
        ),
      ],
      l = new Ve.default(
        new _(t.lpAmount).mul(10 ** t.lpMint.decimals).toFixed(0, _.ROUND_DOWN),
      );
    this.logDebug("baseReserve:", c.toString(), "quoteReserve:", u.toString()),
      this.logDebug(
        "tokenIn:",
        r ? t.mintA.symbol : t.mintB.symbol,
        "amountIn:",
        s.toString(),
        "anotherToken:",
        r ? t.mintB.symbol : t.mintA.symbol,
        "slippage:",
        `${o.toSignificant()}%`,
        "baseReserve",
        c.toString(),
        "quoteReserve",
        u.toString(),
      );
    let m = r ? "base" : "quote";
    this.logDebug("input side:", m);
    let d = Xe;
    s.isZero() || (d = m === "base" ? fo(s.mul(u), c) : fo(s.mul(c), u)),
      this.logDebug("amountRaw:", d.toString(), "lpAmount:", l.toString());
    let p = fo(s.mul(l), m === "base" ? c : u);
    this.logDebug("liquidity:", p.toString());
    let y = new Ee(new Ve.default(1)).add(o),
      f = new Ee(new Ve.default(1)).sub(o),
      b = y.mul(d).quotient,
      g = f.mul(d).quotient,
      w = new ke(a, d),
      P = new ke(a, b),
      T = new ke(a, g);
    return (
      this.logDebug(
        "anotherAmount:",
        w.toFixed(),
        "maxAnotherAmount:",
        P.toFixed(),
      ),
      {
        anotherAmount: w,
        maxAnotherAmount: P,
        minAnotherAmount: T,
        liquidity: p,
      }
    );
  }
  async getAmmPoolKeys(t) {
    return (await this.scope.api.fetchPoolKeysById({ idList: [t] }))[0];
  }
  async addLiquidity(t) {
    let {
      poolInfo: n,
      poolKeys: o,
      amountInA: r,
      amountInB: s,
      otherAmountMin: a,
      fixedSide: c,
      config: u,
      txVersion: l,
      computeBudgetConfig: m,
      txTipConfig: d,
      feePayer: p,
    } = t;
    this.scope.availability.addStandardPosition === !1 &&
      this.logAndCreateError("add liquidity feature disabled in your region"),
      this.logDebug("amountInA:", r, "amountInB:", s),
      (r.isZero() || s.isZero()) &&
        this.logAndCreateError(
          "amounts must greater than zero",
          "amountInA & amountInB",
          { amountInA: r.toFixed(), amountInB: s.toFixed() },
        );
    let { account: y } = this.scope,
      { bypassAssociatedCheck: f, checkCreateATAOwner: b } = N(
        { bypassAssociatedCheck: !1, checkCreateATAOwner: !1 },
        u,
      ),
      [g, w] = [r.token, s.token],
      P = await y.getCreatedTokenAccount({ mint: g.mint, associatedOnly: !1 }),
      T = await y.getCreatedTokenAccount({ mint: w.mint, associatedOnly: !1 });
    !P &&
      !T &&
      this.logAndCreateError(
        "cannot found target token accounts",
        "tokenAccounts",
        y.tokenAccounts,
      );
    let B = await y.getCreatedTokenAccount({
        mint: new Ye.PublicKey(n.lpMint.address),
      }),
      h = [g, w],
      x = [P, T],
      S = [r.raw, s.raw],
      K = r.token.mint.toBase58() === n.mintA.address ? "base" : "quote",
      I = "base";
    ["quote", "base"].includes(K) ||
      this.logAndCreateError("invalid fixedSide", "fixedSide", c),
      K === "quote"
        ? (h.reverse(),
          x.reverse(),
          S.reverse(),
          (I = c === "a" ? "quote" : "base"))
        : K === "base" && (I = c === "a" ? "base" : "quote");
    let [C, L] = h,
      [O, F] = x,
      [W, D] = S,
      ee = o != null ? o : await this.getAmmPoolKeys(n.id),
      fe = this.createTxBuilder(p),
      Gt = await y.handleTokenAccount({
        side: "in",
        amount: W,
        mint: C.mint,
        tokenAccount: O,
        bypassAssociatedCheck: f,
        checkCreateATAOwner: b,
      }),
      { tokenAccount: Ue } = Gt,
      wt = He(Gt, ["tokenAccount"]);
    fe.addInstruction(wt);
    let Xt = await y.handleTokenAccount({
        side: "in",
        amount: D,
        mint: L.mint,
        tokenAccount: F,
        bypassAssociatedCheck: f,
        checkCreateATAOwner: b,
      }),
      { tokenAccount: Ke } = Xt,
      Ge = He(Xt, ["tokenAccount"]);
    fe.addInstruction(Ge);
    let Mt = await y.handleTokenAccount({
        side: "out",
        amount: 0,
        mint: new Ye.PublicKey(n.lpMint.address),
        tokenAccount: B,
        bypassAssociatedCheck: f,
        checkCreateATAOwner: b,
      }),
      { tokenAccount: Ct } = Mt,
      sn = He(Mt, ["tokenAccount"]);
    return (
      fe.addInstruction(sn),
      fe.addInstruction({
        instructions: [
          xu({
            poolInfo: n,
            poolKeys: ee,
            userKeys: {
              baseTokenAccount: Ue,
              quoteTokenAccount: Ke,
              lpTokenAccount: Ct,
              owner: this.scope.ownerPubKey,
            },
            baseAmountIn: W,
            quoteAmountIn: D,
            otherAmountMin: a.raw,
            fixedSide: I,
          }),
        ],
        instructionTypes: [
          n.pooltype.includes("StablePool")
            ? U.AmmV5AddLiquidity
            : U.AmmV4AddLiquidity,
        ],
        lookupTableAddress: ee.lookupTableAccount
          ? [ee.lookupTableAccount]
          : [],
      }),
      fe.addCustomComputeBudget(m),
      fe.addTipInstruction(d),
      l === 0 ? await fe.buildV0() : fe.build()
    );
  }
  async removeLiquidity(t) {
    this.scope.availability.removeStandardPosition === !1 &&
      this.logAndCreateError(
        "remove liquidity feature disabled in your region",
      );
    let {
        poolInfo: n,
        poolKeys: o,
        lpAmount: r,
        baseAmountMin: s,
        quoteAmountMin: a,
        config: c,
        txVersion: u,
        computeBudgetConfig: l,
        txTipConfig: m,
        feePayer: d,
      } = t,
      p = o != null ? o : await this.getAmmPoolKeys(n.id),
      [y, f, b] = [
        new Ye.PublicKey(n.mintA.address),
        new Ye.PublicKey(n.mintB.address),
        new Ye.PublicKey(n.lpMint.address),
      ];
    this.logDebug("lpAmount:", r),
      this.logDebug("baseAmountMin:", s),
      this.logDebug("quoteAmountMin:", a),
      r.isZero() &&
        this.logAndCreateError(
          "amount must greater than zero",
          "lpAmount",
          r.toString(),
        );
    let { account: g } = this.scope,
      w = await g.getCreatedTokenAccount({ mint: b, associatedOnly: !1 });
    w ||
      this.logAndCreateError(
        "cannot found lpTokenAccount",
        "tokenAccounts",
        g.tokenAccounts,
      );
    let P = await g.getCreatedTokenAccount({ mint: y }),
      T = await g.getCreatedTokenAccount({ mint: f }),
      B = this.createTxBuilder(d),
      { bypassAssociatedCheck: h, checkCreateATAOwner: x } = N(
        { bypassAssociatedCheck: !1, checkCreateATAOwner: !1 },
        c,
      ),
      L = await g.handleTokenAccount({
        side: "out",
        amount: 0,
        mint: y,
        tokenAccount: P,
        bypassAssociatedCheck: h,
        checkCreateATAOwner: x,
      }),
      { tokenAccount: S } = L,
      K = He(L, ["tokenAccount"]);
    B.addInstruction(K);
    let O = await g.handleTokenAccount({
        side: "out",
        amount: 0,
        mint: f,
        tokenAccount: T,
        bypassAssociatedCheck: h,
        checkCreateATAOwner: x,
      }),
      { tokenAccount: I } = O,
      C = He(O, ["tokenAccount"]);
    return (
      B.addInstruction(C),
      B.addInstruction({
        instructions: [
          Is({
            poolInfo: n,
            poolKeys: p,
            userKeys: {
              lpTokenAccount: w,
              baseTokenAccount: S,
              quoteTokenAccount: I,
              owner: this.scope.ownerPubKey,
            },
            lpAmount: r,
            baseAmountMin: s,
            quoteAmountMin: a,
          }),
        ],
        lookupTableAddress: p.lookupTableAccount ? [p.lookupTableAccount] : [],
        instructionTypes: [
          n.pooltype.includes("StablePool")
            ? U.AmmV5RemoveLiquidity
            : U.AmmV4RemoveLiquidity,
        ],
      }),
      B.addCustomComputeBudget(l),
      B.addTipInstruction(m),
      u === 0 ? await B.buildV0() : B.build()
    );
  }
  async removeAllLpAndCreateClmmPosition({
    poolInfo: t,
    clmmPoolInfo: n,
    removeLpAmount: o,
    createPositionInfo: r,
    farmInfo: s,
    userFarmLpAmount: a,
    base: c,
    computeBudgetConfig: u,
    payer: l,
    userAuxiliaryLedgers: m,
    tokenProgram: d = xt.TOKEN_PROGRAM_ID,
    checkCreateATAOwner: p = !0,
    getEphemeralSigners: y,
    txVersion: f,
    feePayer: b,
  }) {
    if (
      ((this.scope.availability.removeStandardPosition === !1 ||
        this.scope.availability.createConcentratedPosition === !1) &&
        this.logAndCreateError(
          "remove liquidity or create position feature disabled in your region",
        ),
      !(
        t.mintA.address === n.mintA.address ||
        t.mintA.address === n.mintB.address
      ) ||
        !(
          t.mintB.address === n.mintA.address ||
          t.mintB.address === n.mintB.address
        ))
    )
      throw Error("mint check error");
    let g = this.createTxBuilder(b),
      w = {};
    for (let ee of this.scope.account.tokenAccountRawInfos)
      (w[ee.accountInfo.mint.toString()] === void 0 ||
        oe(
          this.scope.ownerPubKey,
          ee.accountInfo.mint,
          xt.TOKEN_PROGRAM_ID,
        ).publicKey.equals(ee.pubkey)) &&
        (w[ee.accountInfo.mint.toString()] = ee.pubkey);
    let P = w[t.lpMint.address];
    if (P === void 0) throw Error("find lp account error in trade accounts");
    let T = o.add(a != null ? a : new Ve.default(0)),
      B = t.mintA.address === Be.WSOL.mint.toString(),
      h = t.mintB.address === Be.WSOL.mint.toString(),
      { account: x, instructionParams: S } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: xt.TOKEN_PROGRAM_ID,
          mint: new Ye.PublicKey(t.mintA.address),
          owner: this.scope.ownerPubKey,
          createInfo: B ? { payer: this.scope.ownerPubKey } : void 0,
          skipCloseAccount: !B,
          notUseTokenAccount: B,
          associatedOnly: !0,
          checkCreateATAOwner: p,
        });
    if ((g.addInstruction(S || {}), x === void 0))
      throw new Error("base token account not found");
    let { account: K, instructionParams: I } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: xt.TOKEN_PROGRAM_ID,
        mint: new Ye.PublicKey(t.mintB.address),
        owner: this.scope.ownerPubKey,
        createInfo: h ? { payer: this.scope.ownerPubKey, amount: 0 } : void 0,
        skipCloseAccount: !h,
        notUseTokenAccount: h,
        associatedOnly: !0,
        checkCreateATAOwner: p,
      });
    if ((g.addInstruction(I || {}), K === void 0))
      throw new Error("quote token account not found");
    if (
      ((w[t.mintA.address] = x),
      (w[t.mintB.address] = K),
      s !== void 0 && !(a != null && a.isZero()))
    ) {
      let ee = Ft[s.programId],
        fe = yt({
          programId: new Ye.PublicKey(s.programId),
          poolId: new Ye.PublicKey(s.id),
          owner: this.scope.ownerPubKey,
          version: ee,
        }),
        Ue,
        wt = await this.scope.connection.getAccountInfo(fe);
      if ((wt && (Ue = ri(ee).decode(wt.data)), ee !== 6 && !Ue)) {
        let { instruction: Mt, instructionType: Kn } = Ri({
          id: new Ye.PublicKey(s.id),
          programId: new Ye.PublicKey(s.programId),
          version: ee,
          ledger: fe,
          owner: this.scope.ownerPubKey,
        });
        g.addInstruction({ instructions: [Mt], instructionTypes: [Kn] });
      }
      let Ke = [];
      for (let Mt of s.rewardInfos) {
        let Kn = Mt.mint.address === Be.WSOL.mint.toString();
        if (w[Mt.mint.address]) Ke.push(w[Mt.mint.address]);
        else {
          let { account: io, instructionParams: Zn } =
            await this.scope.account.getOrCreateTokenAccount({
              mint: new Ye.PublicKey(Mt.mint.address),
              tokenProgram: d,
              owner: this.scope.ownerPubKey,
              skipCloseAccount: !Kn,
              createInfo: { payer: l || this.scope.ownerPubKey },
              associatedOnly: !0,
              checkCreateATAOwner: p,
            });
          io ||
            this.logAndCreateError(
              "farm reward account not found:",
              Mt.mint.address,
            ),
            Zn && g.addInstruction(Zn),
            Ke.push(io);
        }
      }
      let Ge = (await this.scope.api.fetchFarmKeysById({ ids: s.id }))[0],
        Ct = {
          userAuxiliaryLedgers: m,
          amount: a,
          owner: this.scope.ownerPubKey,
          farmInfo: s,
          farmKeys: Ge,
          lpAccount: P,
          rewardAccounts: Ke,
        },
        sn = Ft[s.programId],
        Gt = sn === 6 ? Li(Ct) : sn === 5 ? Oi(Ct) : Mi(Ct),
        Xt = { 3: U.FarmV3Withdraw, 5: U.FarmV5Withdraw, 6: U.FarmV6Withdraw };
      g.addInstruction({ instructions: [Gt], instructionTypes: [Xt[sn]] });
    }
    let C = await this.getAmmPoolKeys(t.id),
      L = Is({
        poolInfo: t,
        poolKeys: C,
        userKeys: {
          lpTokenAccount: P,
          baseTokenAccount: x,
          quoteTokenAccount: K,
          owner: this.scope.ownerPubKey,
        },
        lpAmount: T,
        baseAmountMin: 0,
        quoteAmountMin: 0,
      });
    g.addInstruction({
      instructions: [L],
      instructionTypes: [
        t.pooltype.includes("StablePool")
          ? U.AmmV5RemoveLiquidity
          : U.AmmV4RemoveLiquidity,
      ],
      lookupTableAddress: C.lookupTableAccount ? [C.lookupTableAccount] : [],
    });
    let [O, F] = t.mintA.address === n.mintA.address ? [x, K] : [K, x],
      W = await this.scope.clmm.getClmmPoolKeys(n.id),
      D = await Re.openPositionFromBaseInstructions(
        X(
          N(
            {
              poolInfo: n,
              poolKeys: W,
              ownerInfo: {
                feePayer: this.scope.ownerPubKey,
                wallet: this.scope.ownerPubKey,
                tokenAccountA: O,
                tokenAccountB: F,
              },
              withMetadata: "create",
            },
            r,
          ),
          { base: c, getEphemeralSigners: y },
        ),
      );
    return (
      g.addInstruction({
        instructions: [...D.instructions],
        signers: D.signers,
        instructionTypes: [...D.instructionTypes],
        lookupTableAddress: W.lookupTableAccount ? [W.lookupTableAccount] : [],
      }),
      f === 0
        ? g.sizeCheckBuildV0({ computeBudgetConfig: u })
        : g.sizeCheckBuild({ computeBudgetConfig: u })
    );
  }
  async createPoolV4({
    programId: t,
    marketInfo: n,
    baseMintInfo: o,
    quoteMintInfo: r,
    baseAmount: s,
    quoteAmount: a,
    startTime: c,
    ownerInfo: u,
    associatedOnly: l = !1,
    checkCreateATAOwner: m = !1,
    tokenProgram: d,
    txVersion: p,
    feeDestinationId: y,
    computeBudgetConfig: f,
    txTipConfig: b,
    feePayer: g,
  }) {
    var F;
    let w =
        u.feePayer || ((F = this.scope.owner) == null ? void 0 : F.publicKey),
      P = u.useSOLBalance && o.mint.equals(xt.NATIVE_MINT),
      T = u.useSOLBalance && r.mint.equals(xt.NATIVE_MINT),
      B = this.createTxBuilder(g),
      { account: h, instructionParams: x } =
        await this.scope.account.getOrCreateTokenAccount({
          mint: o.mint,
          owner: this.scope.ownerPubKey,
          createInfo: P ? { payer: w, amount: s } : void 0,
          notUseTokenAccount: P,
          skipCloseAccount: !P,
          associatedOnly: P ? !1 : l,
          checkCreateATAOwner: m,
        });
    B.addInstruction(x || {});
    let { account: S, instructionParams: K } =
      await this.scope.account.getOrCreateTokenAccount({
        mint: r.mint,
        owner: this.scope.ownerPubKey,
        createInfo: T ? { payer: w, amount: a } : void 0,
        notUseTokenAccount: T,
        skipCloseAccount: !T,
        associatedOnly: T ? !1 : l,
        checkCreateATAOwner: m,
      });
    if ((B.addInstruction(K || {}), h === void 0 || S === void 0))
      throw Error("you don't has some token account");
    let I = Ss({
        version: 4,
        marketVersion: 3,
        marketId: n.marketId,
        baseMint: o.mint,
        quoteMint: r.mint,
        baseDecimals: o.decimals,
        quoteDecimals: r.decimals,
        programId: t,
        marketProgramId: n.programId,
      }),
      C = {
        programId: t,
        ammId: I.id,
        ammAuthority: I.authority,
        ammOpenOrders: I.openOrders,
        lpMint: I.lpMint,
        coinMint: I.baseMint,
        pcMint: I.quoteMint,
        coinVault: I.baseVault,
        pcVault: I.quoteVault,
        withdrawQueue: I.withdrawQueue,
        ammTargetOrders: I.targetOrders,
        poolTempLp: I.lpVault,
        marketProgramId: I.marketProgramId,
        marketId: I.marketId,
        ammConfigId: I.configId,
        feeDestinationId: y,
      },
      { instruction: L, instructionType: O } = Bs(
        X(N({}, C), {
          userWallet: this.scope.ownerPubKey,
          userCoinVault: h,
          userPcVault: S,
          userLpVault: oe(this.scope.ownerPubKey, I.lpMint, d).publicKey,
          nonce: I.nonce,
          openTime: c,
          coinAmount: s,
          pcAmount: a,
        }),
      );
    return (
      B.addInstruction({ instructions: [L], instructionTypes: [O] }),
      B.addCustomComputeBudget(f),
      B.addTipInstruction(b),
      B.versionBuild({ txVersion: p, extInfo: { address: C } })
    );
  }
  async createMarketAndPoolV4({
    programId: t = Ai,
    marketProgram: n = Cr,
    feeDestinationId: o = ya,
    tokenProgram: r,
    baseMintInfo: s,
    quoteMintInfo: a,
    baseAmount: c,
    quoteAmount: u,
    startTime: l,
    ownerInfo: m,
    lowestFeeMarket: d,
    assignSeed: p,
    associatedOnly: y = !1,
    checkCreateATAOwner: f = !1,
    lotSize: b = 1,
    tickSize: g = 0.01,
    txVersion: w,
    computeBudgetConfig: P,
    txTipConfig: T,
    feePayer: B,
  }) {
    var $u, Ju, ec;
    let h = this.scope.ownerPubKey,
      x =
        m.feePayer || (($u = this.scope.owner) == null ? void 0 : $u.publicKey),
      S = m.useSOLBalance && s.mint.equals(xt.NATIVE_MINT),
      K = m.useSOLBalance && a.mint.equals(xt.NATIVE_MINT),
      I = p
        ? `${s.mint.toBase58().slice(0, 7)}-${a.mint.toBase58().slice(0, 7)}-${p}`
        : void 0,
      C = De({
        fromPublicKey: h,
        programId: n,
        assignSeed: I && `${I}-market`,
      }),
      L = De({
        fromPublicKey: h,
        programId: n,
        assignSeed: I && `${I}-request`,
      }),
      O = De({ fromPublicKey: h, programId: n, assignSeed: I && `${I}-event` }),
      F = De({ fromPublicKey: h, programId: n, assignSeed: I && `${I}-bids` }),
      W = De({ fromPublicKey: h, programId: n, assignSeed: I && `${I}-asks` }),
      D = De({
        fromPublicKey: h,
        programId: xt.TOKEN_PROGRAM_ID,
        assignSeed: I && `${I}-baseVault`,
      }),
      ee = De({
        fromPublicKey: h,
        programId: xt.TOKEN_PROGRAM_ID,
        assignSeed: I && `${I}-quoteVault`,
      }),
      fe = 0,
      Ue = new Ve.default(100);
    function wt() {
      let an = new Ve.default(0);
      for (;;)
        try {
          return {
            vaultOwner: Ye.PublicKey.createProgramAddressSync(
              [C.publicKey.toBuffer(), an.toArrayLike(Buffer, "le", 8)],
              n,
            ),
            vaultSignerNonce: an,
          };
        } catch {
          if ((an.iaddn(1), an.gt(new Ve.default(25555))))
            throw Error("find vault owner error");
        }
    }
    let { vaultOwner: Ke, vaultSignerNonce: Ge } = wt(),
      Ct = new Ve.default(Math.round(10 ** s.decimals * b)),
      sn = new Ve.default(Math.round(b * 10 ** a.decimals * g));
    if (Ct.eq(Xe)) throw Error("lot size is too small");
    if (sn.eq(Xe)) throw Error("tick size or lot size is too small");
    let Gt = await Uo({
        connection: this.scope.connection,
        wallet: this.scope.ownerPubKey,
        marketInfo: {
          programId: n,
          vaultOwner: Ke,
          baseMint: s.mint,
          quoteMint: a.mint,
          id: C,
          baseVault: D,
          quoteVault: ee,
          requestQueue: L,
          eventQueue: O,
          bids: F,
          asks: W,
          feeRateBps: fe,
          quoteDustThreshold: Ue,
          vaultSignerNonce: Ge,
          baseLotSize: Ct,
          quoteLotSize: sn,
          lowestFeeMarket: d,
        },
      }),
      Xt = this.createTxBuilder(B);
    Xt.addInstruction({
      instructions: Gt[0].transaction.instructions,
      signers: Gt[0].signer,
    });
    for await (let an of Gt.slice(1, Gt.length))
      Xt.addInstruction({
        instructions: an.transaction.instructions,
        signers: an.signer,
        instructionTypes: an.instructionTypes,
      });
    let { account: Mt, instructionParams: Kn } =
      await this.scope.account.getOrCreateTokenAccount({
        mint: s.mint,
        owner: this.scope.ownerPubKey,
        createInfo: S ? { payer: x, amount: c } : void 0,
        notUseTokenAccount: S,
        skipCloseAccount: !S,
        associatedOnly: S ? !1 : y,
        checkCreateATAOwner: f,
        assignSeed: S && I ? `${I}-wsol` : void 0,
      });
    Xt.addInstruction(Kn || {});
    let { account: io, instructionParams: Zn } =
      await this.scope.account.getOrCreateTokenAccount({
        mint: a.mint,
        owner: this.scope.ownerPubKey,
        createInfo: K ? { payer: x, amount: u } : void 0,
        notUseTokenAccount: K,
        skipCloseAccount: !K,
        associatedOnly: K ? !1 : y,
        checkCreateATAOwner: f,
        assignSeed: K && I ? `${I}-wsol` : void 0,
      });
    if ((Xt.addInstruction(Zn || {}), Mt === void 0))
      throw Error("you don't has base token account");
    if (io === void 0) throw Error("you don't has quote token account");
    let Pt = Ss({
        version: 4,
        marketVersion: 3,
        marketId: C.publicKey,
        baseMint: s.mint,
        quoteMint: a.mint,
        baseDecimals: s.decimals,
        quoteDecimals: a.decimals,
        programId: t,
        marketProgramId: n,
      }),
      Es = {
        programId: t,
        ammId: Pt.id,
        ammAuthority: Pt.authority,
        ammOpenOrders: Pt.openOrders,
        lpMint: Pt.lpMint,
        coinMint: Pt.baseMint,
        pcMint: Pt.quoteMint,
        coinVault: Pt.baseVault,
        pcVault: Pt.quoteVault,
        withdrawQueue: Pt.withdrawQueue,
        ammTargetOrders: Pt.targetOrders,
        poolTempLp: Pt.lpVault,
        marketProgramId: Pt.marketProgramId,
        marketId: Pt.marketId,
        ammConfigId: Pt.configId,
        feeDestinationId: o,
      },
      { instruction: Km, instructionType: Cm } = Bs(
        X(N({}, Es), {
          userWallet: this.scope.ownerPubKey,
          userCoinVault: Mt,
          userPcVault: io,
          userLpVault: oe(this.scope.ownerPubKey, Pt.lpMint, r).publicKey,
          nonce: Pt.nonce,
          openTime: l,
          coinAmount: c,
          pcAmount: u,
        }),
      );
    Xt.addInstruction({ instructions: [Km], instructionTypes: [Cm] });
    let Zu =
      S || K
        ? [
            ((Ju = Kn == null ? void 0 : Kn.instructions) == null
              ? void 0
              : Ju[0]) ||
              ((ec = Zn == null ? void 0 : Zn.instructions) == null
                ? void 0
                : ec[0]),
          ].filter((an) => !!an)
        : void 0;
    return w === 0
      ? Xt.sizeCheckBuildV0({
          computeBudgetConfig: P,
          splitIns: Zu,
          address: N(
            {
              requestQueue: L.publicKey,
              eventQueue: O.publicKey,
              bids: F.publicKey,
              asks: W.publicKey,
              baseVault: D.publicKey,
              quoteVault: ee.publicKey,
              baseMint: new Ye.PublicKey(s.mint),
              quoteMint: new Ye.PublicKey(a.mint),
            },
            Es,
          ),
        })
      : Xt.sizeCheckBuild({
          computeBudgetConfig: P,
          splitIns: Zu,
          address: N(
            {
              requestQueue: L.publicKey,
              eventQueue: O.publicKey,
              bids: F.publicKey,
              asks: W.publicKey,
              baseVault: D.publicKey,
              quoteVault: ee.publicKey,
              baseMint: new Ye.PublicKey(s.mint),
              quoteMint: new Ye.PublicKey(a.mint),
            },
            Es,
          ),
        });
  }
  async getCreatePoolFee({ programId: t }) {
    let n = Wo({ programId: t }),
      o = await this.scope.connection.getAccountInfo(n, {
        dataSlice: { offset: 536, length: 8 },
      });
    if (o === null) throw Error("get config account error");
    return ku.decode(o.data).fee;
  }
  computeAmountOut({
    poolInfo: t,
    amountIn: n,
    mintIn: o,
    mintOut: r,
    slippage: s,
  }) {
    let [a, c] = [o.toString(), r.toString()];
    if (a !== t.mintA.address && a !== t.mintB.address)
      throw new Error("toke not match");
    if (c !== t.mintA.address && c !== t.mintB.address)
      throw new Error("toke not match");
    let { baseReserve: u, quoteReserve: l } = t,
      m = [u, l],
      d = [t.mintA.decimals, t.mintB.decimals],
      p = a == t.mintA.address ? "base" : "quote";
    p === "quote" && (m.reverse(), d.reverse());
    let [y, f] = m,
      [b, g] = d,
      w = t.version === 4,
      P;
    if (w)
      P = new _(f.toString())
        .div(10 ** g)
        .div(new _(y.toString()).div(10 ** b));
    else {
      let O = Bu(
        this.stableLayout.stableModelData,
        u.toNumber(),
        l.toNumber(),
        !1,
      );
      p === "quote"
        ? (P = new _(1e6).div(O * 1e6))
        : (P = new _(O * 1e6).div(1e6));
    }
    let T = n,
      B = new Ve.default(0),
      h = new Ve.default(0);
    if (!T.isZero())
      if (w) {
        h = Yt(T.mul(As), Fo);
        let O = T.sub(h),
          F = y.add(O);
        B = f.mul(O).div(F);
      } else {
        h = T.mul(new Ve.default(2)).div(new Ve.default(1e4));
        let O = T.sub(h);
        p === "quote"
          ? (B = new Ve.default(
              Tu(
                this.stableLayout.stableModelData,
                l.toNumber(),
                u.toNumber(),
                O.toNumber(),
              ),
            ))
          : (B = new Ve.default(
              Iu(
                this.stableLayout.stableModelData,
                l.toNumber(),
                u.toNumber(),
                O.toNumber(),
              ),
            ));
      }
    let x = new Ve.default(new _(B.toString()).mul(1 - s).toFixed(0)),
      S = B,
      K = x,
      I = new _(B.toString()).div(new _(T.sub(h).toString()).toFixed(0));
    !T.isZero() &&
      !B.isZero() &&
      (I = new _(B.toString())
        .div(10 ** g)
        .div(new _(T.sub(h).toString()).div(10 ** b)));
    let C = P.sub(I).div(P).mul(100);
    return {
      amountOut: S,
      minAmountOut: K,
      currentPrice: P,
      executionPrice: I,
      priceImpact: C,
      fee: h,
    };
  }
  computeAmountIn({
    poolInfo: t,
    amountOut: n,
    mintIn: o,
    mintOut: r,
    slippage: s,
  }) {
    let { baseReserve: a, quoteReserve: c } = t;
    o.toString() !== t.mintA.address &&
      o.toString() !== t.mintB.address &&
      this.logAndCreateError("mintIn does not match pool"),
      r.toString() !== t.mintA.address &&
        r.toString() !== t.mintB.address &&
        this.logAndCreateError("mintOut does not match pool"),
      this.logDebug("baseReserve:", a.toString()),
      this.logDebug("quoteReserve:", c.toString());
    let u = o.toString() === t.mintA.address,
      [l, m] = u ? [t.mintA, t.mintB] : [t.mintB, t.mintA];
    this.logDebug("currencyOut:", m.symbol || m.address),
      this.logDebug(
        "amountOut:",
        new _(n.toString())
          .div(10 ** m.decimals)
          .toDecimalPlaces(m.decimals)
          .toString(),
        l.symbol || l.address,
      ),
      this.logDebug("slippage:", `${s * 100}%`);
    let d = [a, c],
      p = u ? "quote" : "base";
    p === "base" && d.reverse(), this.logDebug("output side:", p);
    let [y, f] = d,
      b = new _(f.toString())
        .div(10 ** t[u ? "mintB" : "mintA"].decimals)
        .div(new _(y.toString()).div(10 ** t[u ? "mintA" : "mintB"].decimals));
    this.logDebug(
      "currentPrice:",
      `1 ${l.symbol || l.address} \u2248 ${b.toString()} ${m.symbol || m.address}`,
    ),
      this.logDebug(
        "currentPrice invert:",
        `1 ${m.symbol || m.address} \u2248 ${new _(1).div(b).toString()} ${l.symbol || l.address}`,
      );
    let g = new Ve.default(0),
      w = n;
    if (!w.isZero()) {
      w.gt(f) && (w = f.sub(new Ve.default(1)));
      let K = f.sub(w);
      g = y.mul(w).div(K).mul(Fo).div(Fo.sub(As));
    }
    let P = new Ve.default(new _(g.toString()).mul(1 + s).toFixed(0)),
      T = g,
      B = P;
    this.logDebug(
      "amountIn:",
      new _(T.toString())
        .div(10 ** l.decimals)
        .toDecimalPlaces(l.decimals)
        .toString(),
    ),
      this.logDebug(
        "maxAmountIn:",
        new _(B.toString())
          .div(10 ** l.decimals)
          .toDecimalPlaces(l.decimals)
          .toString(),
      );
    let h = null;
    !g.isZero() &&
      !w.isZero() &&
      ((h = new _(w.toString())
        .div(10 ** m.decimals)
        .div(new _(g.toString()).div(10 ** l.decimals))),
      this.logDebug(
        "executionPrice:",
        `1 ${m.symbol || m.address} \u2248 ${h.toDecimalPlaces(Math.max(t.mintA.decimals, t.mintB.decimals)).toString()} ${l.symbol || l.address}`,
      ),
      this.logDebug(
        "executionPrice invert:",
        `1 ${m.symbol || m.address} \u2248 ${new _(1).div(h).toDecimalPlaces(Math.max(t.mintA.decimals, t.mintB.decimals)).toString()} ${l.symbol || l.address}`,
      ));
    let x = b.mul(T.toString()),
      S = x.sub(n.toString()).abs().div(x);
    return (
      this.logDebug("priceImpact:", `${S.toString()}%`),
      {
        amountIn: T,
        maxAmountIn: B,
        currentPrice: b,
        executionPrice: h,
        priceImpact: S,
      }
    );
  }
  async swap({
    poolInfo: t,
    poolKeys: n,
    amountIn: o,
    amountOut: r,
    inputMint: s,
    fixedSide: a,
    txVersion: c,
    config: u,
    computeBudgetConfig: l,
    txTipConfig: m,
    feePayer: d,
  }) {
    let p = this.createTxBuilder(d),
      {
        associatedOnly: y = !0,
        inputUseSolBalance: f = !0,
        outputUseSolBalance: b = !0,
      } = u || {},
      [g, w] = s === t.mintA.address ? [t.mintA, t.mintB] : [t.mintB, t.mintA],
      P = f && g.address === $.toBase58(),
      T = b && w.address === $.toBase58(),
      { account: B, instructionParams: h } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: xt.TOKEN_PROGRAM_ID,
          mint: new Ye.PublicKey(g.address),
          owner: this.scope.ownerPubKey,
          createInfo: P ? { payer: this.scope.ownerPubKey, amount: o } : void 0,
          skipCloseAccount: !P,
          notUseTokenAccount: P,
          associatedOnly: y,
        });
    p.addInstruction(h || {}),
      B ||
        this.logAndCreateError("input token account not found", {
          token: g.symbol || g.address,
          tokenAccountIn: B,
          inputTokenUseSolBalance: P,
          associatedOnly: y,
        });
    let { account: x, instructionParams: S } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: xt.TOKEN_PROGRAM_ID,
        mint: new Ye.PublicKey(w.address),
        owner: this.scope.ownerPubKey,
        createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
        skipCloseAccount: !T,
        notUseTokenAccount: T,
        associatedOnly: T ? !1 : y,
      });
    p.addInstruction(S || {}),
      x === void 0 &&
        this.logAndCreateError("output token account not found", {
          token: w.symbol || w.address,
          tokenAccountOut: x,
          outputTokenUseSolBalance: T,
          associatedOnly: y,
        });
    let K = n || (await this.getAmmPoolKeys(t.id)),
      I = 4;
    return (
      t.pooltype.includes("StablePool") && (I = 5),
      p.addInstruction({
        instructions: [
          Do({
            version: I,
            poolKeys: K,
            userKeys: {
              tokenAccountIn: B,
              tokenAccountOut: x,
              owner: this.scope.ownerPubKey,
            },
            amountIn: o,
            amountOut: r,
            fixedSide: a,
          }),
        ],
        instructionTypes: [I === 4 ? U.AmmV4SwapBaseIn : U.AmmV5SwapBaseIn],
      }),
      p.addCustomComputeBudget(l),
      p.addTipInstruction(m),
      p.versionBuild({ txVersion: c })
    );
  }
  async getRpcPoolInfo(t) {
    return (await this.getRpcPoolInfos([t]))[t];
  }
  async getRpcPoolInfos(t, n) {
    let o = await je(
        this.scope.connection,
        t.map((l) => ({ pubkey: new Ye.PublicKey(l) })),
        n,
      ),
      r = {},
      s = [];
    for (let l = 0; l < t.length; l++) {
      let m = o[l];
      if (m === null || !m.accountInfo)
        throw Error("fetch pool info error: " + String(t[l]));
      let d = Ui.decode(m.accountInfo.data);
      (r[String(t[l])] = X(N({}, d), { programId: m.accountInfo.owner })),
        s.push(d.baseVault, d.quoteVault);
    }
    let a = {},
      c = await je(
        this.scope.connection,
        s.map((l) => ({ pubkey: new Ye.PublicKey(l) })),
        n,
      );
    for (let l = 0; l < s.length; l++) {
      let m = c[l].accountInfo;
      if (m === null) throw Error("fetch vault info error: " + s[l]);
      a[String(s[l])] = new Ve.default(
        xt.AccountLayout.decode(m.data).amount.toString(),
      );
    }
    let u = {};
    for (let [l, m] of Object.entries(r)) {
      let d = a[m.baseVault.toString()].sub(m.baseNeedTakePnl),
        p = a[m.quoteVault.toString()].sub(m.quoteNeedTakePnl);
      u[l] = X(N({}, m), {
        baseReserve: d,
        mintAAmount: a[m.baseVault.toString()],
        mintBAmount: a[m.quoteVault.toString()],
        quoteReserve: p,
        poolPrice: new _(p.toString())
          .div(new _(10).pow(m.quoteDecimal.toString()))
          .div(
            new _(d.toString()).div(new _(10).pow(m.baseDecimal.toString())),
          ),
      });
    }
    return u;
  }
  async getPoolInfoFromRpc({ poolId: t }) {
    let n = await this.getRpcPoolInfo(t),
      o = qo({ [t]: n }),
      r = o[t],
      s = await this.scope.tradeV2.computePoolToPoolKeys({
        pools: [o[t]],
        ammRpcData: { [t]: n },
      });
    return { poolRpcData: n, poolInfo: r, poolKeys: s[0] };
  }
};
var H = require("@solana/web3.js"),
  Ot = be(require("bn.js"));
var mt = require("@solana/spl-token");
var Hi = class extends Fe {
  constructor(e) {
    super(e);
  }
  async getClmmPoolKeys(e) {
    return (await this.scope.api.fetchPoolKeysById({ idList: [e] }))[0];
  }
  async createPool(e) {
    var x;
    let {
        programId: t,
        owner: n = ((x = this.scope.owner) == null ? void 0 : x.publicKey) ||
          H.PublicKey.default,
        mint1: o,
        mint2: r,
        ammConfig: s,
        initialPrice: a,
        computeBudgetConfig: c,
        forerunCreate: u,
        getObserveState: l,
        txVersion: m,
        txTipConfig: d,
        feePayer: p,
      } = e,
      y = this.createTxBuilder(p),
      [f, b, g] = new Ot.default(new H.PublicKey(o.address).toBuffer()).gt(
        new Ot.default(new H.PublicKey(r.address).toBuffer()),
      )
        ? [r, o, new _(1).div(a)]
        : [o, r, a],
      w = re.priceToSqrtPriceX64(g, f.decimals, b.decimals),
      P = [],
      T = [];
    f.programId === mt.TOKEN_2022_PROGRAM_ID.toBase58() &&
      T.push(ys(t, new H.PublicKey(f.address)).publicKey),
      b.programId === mt.TOKEN_2022_PROGRAM_ID.toBase58() &&
        T.push(ys(t, new H.PublicKey(b.address)).publicKey),
      (await this.scope.connection.getMultipleAccountsInfo(T)).forEach(
        (S, K) => {
          S && P.push(T[K]);
        },
      );
    let h = await Re.createPoolInstructions({
      connection: this.scope.connection,
      programId: t,
      owner: n,
      mintA: f,
      mintB: b,
      ammConfigId: s.id,
      initialPriceX64: w,
      forerunCreate: !l && u,
      extendMintAccount: P,
    });
    return (
      y.addInstruction(h),
      y.addCustomComputeBudget(c),
      y.addTipInstruction(d),
      y.versionBuild({
        txVersion: m,
        extInfo: {
          address: X(N({}, h.address), {
            observationId: h.address.observationId.toBase58(),
            exBitmapAccount: h.address.exBitmapAccount.toBase58(),
            programId: t.toString(),
            id: h.address.poolId.toString(),
            mintA: f,
            mintB: b,
            openTime: "0",
            vault: {
              A: h.address.mintAVault.toString(),
              B: h.address.mintBVault.toString(),
            },
            rewardInfos: [],
            config: {
              id: s.id.toString(),
              index: s.index,
              protocolFeeRate: s.protocolFeeRate,
              tradeFeeRate: s.tradeFeeRate,
              tickSpacing: s.tickSpacing,
              fundFeeRate: s.fundFeeRate,
              description: s.description,
              defaultRange: 0,
              defaultRangePoint: [],
            },
          }),
          mockPoolInfo: N(
            {
              type: "Concentrated",
              rewardDefaultPoolInfos: "Clmm",
              id: h.address.poolId.toString(),
              mintA: f,
              mintB: b,
              feeRate: s.tradeFeeRate,
              openTime: "0",
              programId: t.toString(),
              price: g.toNumber(),
              config: {
                id: s.id.toString(),
                index: s.index,
                protocolFeeRate: s.protocolFeeRate,
                tradeFeeRate: s.tradeFeeRate,
                tickSpacing: s.tickSpacing,
                fundFeeRate: s.fundFeeRate,
                description: s.description,
                defaultRange: 0,
                defaultRangePoint: [],
              },
              burnPercent: 0,
            },
            iu,
          ),
          forerunCreate: u,
        },
      })
    );
  }
  async openPositionFromBase({
    poolInfo: e,
    poolKeys: t,
    ownerInfo: n,
    tickLower: o,
    tickUpper: r,
    base: s,
    baseAmount: a,
    otherAmountMax: c,
    nft2022: u,
    associatedOnly: l = !0,
    checkCreateATAOwner: m = !1,
    withMetadata: d = "create",
    getEphemeralSigners: p,
    computeBudgetConfig: y,
    txTipConfig: f,
    txVersion: b,
    feePayer: g,
  }) {
    this.scope.availability.addConcentratedPosition === !1 &&
      this.logAndCreateError("add position feature disabled in your region"),
      this.scope.checkOwner();
    let w = this.createTxBuilder(g),
      P = null,
      T = null,
      B = n.useSOLBalance && e.mintA.address === $.toString(),
      h = n.useSOLBalance && e.mintB.address === $.toString(),
      [x, S] = s === "MintA" ? [a, c] : [c, a],
      { account: K, instructionParams: I } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: e.mintA.programId,
          mint: new H.PublicKey(e.mintA.address),
          owner: this.scope.ownerPubKey,
          createInfo:
            B || x.isZero()
              ? { payer: this.scope.ownerPubKey, amount: x }
              : void 0,
          skipCloseAccount: !B,
          notUseTokenAccount: B,
          associatedOnly: B ? !1 : l,
          checkCreateATAOwner: m,
        });
    K && (P = K), w.addInstruction(I || {});
    let { account: C, instructionParams: L } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: e.mintB.programId,
        mint: new H.PublicKey(e.mintB.address),
        owner: this.scope.ownerPubKey,
        createInfo:
          h || S.isZero()
            ? { payer: this.scope.ownerPubKey, amount: S }
            : void 0,
        skipCloseAccount: !h,
        notUseTokenAccount: h,
        associatedOnly: h ? !1 : l,
        checkCreateATAOwner: m,
      });
    C && (T = C),
      w.addInstruction(L || {}),
      (!P || !T) &&
        this.logAndCreateError(
          "cannot found target token accounts",
          "tokenAccounts",
          {
            ownerTokenAccountA: P == null ? void 0 : P.toBase58(),
            ownerTokenAccountB: T == null ? void 0 : T.toBase58(),
          },
        );
    let O = t || (await this.getClmmPoolKeys(e.id)),
      F = await Re.openPositionFromBaseInstructions({
        poolInfo: e,
        poolKeys: O,
        ownerInfo: X(N({}, n), {
          feePayer: this.scope.ownerPubKey,
          wallet: this.scope.ownerPubKey,
          tokenAccountA: P,
          tokenAccountB: T,
        }),
        tickLower: o,
        tickUpper: r,
        base: s,
        baseAmount: a,
        otherAmountMax: c,
        withMetadata: d,
        getEphemeralSigners: p,
        nft2022: u,
      });
    return (
      w.addInstruction(F),
      w.addCustomComputeBudget(y),
      w.addTipInstruction(f),
      w.versionBuild({ txVersion: b, extInfo: N({}, F.address) })
    );
  }
  async openPositionFromLiquidity({
    poolInfo: e,
    poolKeys: t,
    ownerInfo: n,
    amountMaxA: o,
    amountMaxB: r,
    tickLower: s,
    tickUpper: a,
    liquidity: c,
    associatedOnly: u = !0,
    checkCreateATAOwner: l = !1,
    withMetadata: m = "create",
    txVersion: d,
    computeBudgetConfig: p,
    txTipConfig: y,
    getEphemeralSigners: f,
    nft2022: b,
    feePayer: g,
  }) {
    this.scope.availability.createConcentratedPosition === !1 &&
      this.logAndCreateError("open position feature disabled in your region");
    let w = this.createTxBuilder(g),
      P = null,
      T = null,
      B = n.useSOLBalance && e.mintA.address === $.toBase58(),
      h = n.useSOLBalance && e.mintB.address === $.toBase58(),
      { account: x, instructionParams: S } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: e.mintA.programId,
          mint: new H.PublicKey(e.mintA.address),
          owner: this.scope.ownerPubKey,
          createInfo:
            B || o.isZero()
              ? { payer: this.scope.ownerPubKey, amount: o }
              : void 0,
          skipCloseAccount: !B,
          notUseTokenAccount: B,
          associatedOnly: B ? !1 : u,
          checkCreateATAOwner: l,
        });
    x && (P = x), w.addInstruction(S || {});
    let { account: K, instructionParams: I } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: e.mintB.programId,
        mint: new H.PublicKey(e.mintB.address),
        owner: this.scope.ownerPubKey,
        createInfo:
          h || r.isZero()
            ? { payer: this.scope.ownerPubKey, amount: r }
            : void 0,
        skipCloseAccount: !h,
        notUseTokenAccount: h,
        associatedOnly: h ? !1 : u,
        checkCreateATAOwner: l,
      });
    K && (T = K),
      w.addInstruction(I || {}),
      (P === void 0 || T === void 0) &&
        this.logAndCreateError(
          "cannot found target token accounts",
          "tokenAccounts",
          this.scope.account.tokenAccounts,
        );
    let C = t || (await this.getClmmPoolKeys(e.id)),
      L = await Re.openPositionFromLiquidityInstructions({
        poolInfo: e,
        poolKeys: C,
        ownerInfo: {
          wallet: this.scope.ownerPubKey,
          tokenAccountA: P,
          tokenAccountB: T,
        },
        tickLower: s,
        tickUpper: a,
        liquidity: c,
        amountMaxA: o,
        amountMaxB: r,
        withMetadata: m,
        getEphemeralSigners: f,
        nft2022: b,
      });
    return (
      w.addInstruction(L),
      w.addCustomComputeBudget(p),
      w.addTipInstruction(y),
      w.versionBuild({ txVersion: d, extInfo: { address: L.address } })
    );
  }
  async increasePositionFromLiquidity(e) {
    var I;
    let {
        poolInfo: t,
        poolKeys: n,
        ownerPosition: o,
        amountMaxA: r,
        amountMaxB: s,
        liquidity: a,
        ownerInfo: c,
        associatedOnly: u = !0,
        checkCreateATAOwner: l = !1,
        computeBudgetConfig: m,
        txTipConfig: d,
        txVersion: p,
        feePayer: y,
      } = e,
      f = this.createTxBuilder(y),
      b,
      g,
      w = c.useSOLBalance && t.mintA.address === $.toString(),
      P = c.useSOLBalance && t.mintB.address === $.toString(),
      { account: T, instructionParams: B } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: t.mintA.programId,
          mint: new H.PublicKey(t.mintA.address),
          notUseTokenAccount: w,
          owner: this.scope.ownerPubKey,
          createInfo:
            w || r.isZero()
              ? { payer: this.scope.ownerPubKey, amount: r }
              : void 0,
          skipCloseAccount: !w,
          associatedOnly: w ? !1 : u,
          checkCreateATAOwner: l,
        });
    T && (b = T), f.addInstruction(B || {});
    let { account: h, instructionParams: x } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: t.mintB.programId,
        mint: new H.PublicKey(t.mintB.address),
        owner: this.scope.ownerPubKey,
        createInfo:
          P || s.isZero()
            ? { payer: this.scope.ownerPubKey, amount: s }
            : void 0,
        notUseTokenAccount: P,
        skipCloseAccount: !P,
        associatedOnly: P ? !1 : u,
        checkCreateATAOwner: l,
      });
    h && (g = h),
      f.addInstruction(x || {}),
      !b &&
        !g &&
        this.logAndCreateError(
          "cannot found target token accounts",
          "tokenAccounts",
          this.scope.account.tokenAccounts,
        );
    let S = n != null ? n : await this.getClmmPoolKeys(t.id),
      K = Re.increasePositionFromLiquidityInstructions({
        poolInfo: t,
        poolKeys: S,
        ownerPosition: o,
        ownerInfo: {
          wallet: this.scope.ownerPubKey,
          tokenAccountA: b,
          tokenAccountB: g,
        },
        liquidity: a,
        amountMaxA: r,
        amountMaxB: s,
        nft2022:
          (I = await this.scope.connection.getAccountInfo(o.nftMint)) == null
            ? void 0
            : I.owner.equals(mt.TOKEN_2022_PROGRAM_ID),
      });
    return (
      f.addInstruction(K),
      f.addCustomComputeBudget(m),
      f.addTipInstruction(d),
      f.versionBuild({ txVersion: p, extInfo: { address: K.address } })
    );
  }
  async increasePositionFromBase(e) {
    var K;
    let {
        poolInfo: t,
        ownerPosition: n,
        base: o,
        baseAmount: r,
        otherAmountMax: s,
        ownerInfo: a,
        associatedOnly: c = !0,
        checkCreateATAOwner: u = !1,
        computeBudgetConfig: l,
        txTipConfig: m,
        txVersion: d,
        feePayer: p,
      } = e,
      y = this.createTxBuilder(p),
      f,
      b,
      g = a.useSOLBalance && t.mintA.address === $.toString(),
      w = a.useSOLBalance && t.mintB.address === $.toString(),
      { account: P, instructionParams: T } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: t.mintA.programId,
          mint: new H.PublicKey(t.mintA.address),
          notUseTokenAccount: g,
          owner: this.scope.ownerPubKey,
          createInfo:
            g || (o === "MintA" ? r : s).isZero()
              ? { payer: this.scope.ownerPubKey, amount: o === "MintA" ? r : s }
              : void 0,
          skipCloseAccount: !g,
          associatedOnly: g ? !1 : c,
          checkCreateATAOwner: u,
        });
    P && (f = P), y.addInstruction(T || {});
    let { account: B, instructionParams: h } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: t.mintB.programId,
        mint: new H.PublicKey(t.mintB.address),
        owner: this.scope.ownerPubKey,
        createInfo:
          w || (o === "MintA" ? s : r).isZero()
            ? { payer: this.scope.ownerPubKey, amount: o === "MintA" ? s : r }
            : void 0,
        notUseTokenAccount: w,
        skipCloseAccount: !w,
        associatedOnly: w ? !1 : c,
        checkCreateATAOwner: u,
      });
    B && (b = B),
      y.addInstruction(h || {}),
      !f &&
        !b &&
        this.logAndCreateError(
          "cannot found target token accounts",
          "tokenAccounts",
          this.scope.account.tokenAccounts,
        );
    let x = await this.getClmmPoolKeys(t.id),
      S = Re.increasePositionFromBaseInstructions({
        poolInfo: t,
        poolKeys: x,
        ownerPosition: n,
        ownerInfo: {
          wallet: this.scope.ownerPubKey,
          tokenAccountA: f,
          tokenAccountB: b,
        },
        base: o,
        baseAmount: r,
        otherAmountMax: s,
        nft2022:
          (K = await this.scope.connection.getAccountInfo(n.nftMint)) == null
            ? void 0
            : K.owner.equals(mt.TOKEN_2022_PROGRAM_ID),
      });
    return (
      y.addInstruction(S),
      y.addCustomComputeBudget(l),
      y.addTipInstruction(m),
      y.versionBuild({ txVersion: d, extInfo: { address: S.address } })
    );
  }
  async decreaseLiquidity(e) {
    var O;
    let {
      poolInfo: t,
      poolKeys: n,
      ownerPosition: o,
      ownerInfo: r,
      amountMinA: s,
      amountMinB: a,
      liquidity: c,
      associatedOnly: u = !0,
      checkCreateATAOwner: l = !1,
      computeBudgetConfig: m,
      txTipConfig: d,
      txVersion: p,
      feePayer: y,
    } = e;
    this.scope.availability.removeConcentratedPosition === !1 &&
      this.logAndCreateError("remove position feature disabled in your region");
    let f = this.createTxBuilder(y),
      b = r.useSOLBalance && t.mintA.address === $.toString(),
      g = r.useSOLBalance && t.mintB.address === $.toString(),
      w,
      P,
      { account: T, instructionParams: B } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: t.mintA.programId,
          mint: new H.PublicKey(t.mintA.address),
          notUseTokenAccount: b,
          owner: this.scope.ownerPubKey,
          createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
          skipCloseAccount: !b,
          associatedOnly: b ? !1 : u,
          checkCreateATAOwner: l,
        });
    (w = T), B && f.addInstruction(B);
    let { account: h, instructionParams: x } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: t.mintB.programId,
        mint: new H.PublicKey(t.mintB.address),
        notUseTokenAccount: g,
        owner: this.scope.ownerPubKey,
        createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
        skipCloseAccount: !g,
        associatedOnly: g ? !1 : u,
        checkCreateATAOwner: l,
      });
    (P = h), x && f.addInstruction(x);
    let S = [];
    for (let F of t.rewardDefaultInfos) {
      let W = r.useSOLBalance && F.mint.address === $.toString(),
        D;
      if (F.mint.address === t.mintA.address) D = w;
      else if (F.mint.address === t.mintB.address) D = P;
      else {
        let { account: ee, instructionParams: fe } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: new H.PublicKey(F.mint.programId),
            mint: new H.PublicKey(F.mint.address),
            notUseTokenAccount: W,
            owner: this.scope.ownerPubKey,
            createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
            skipCloseAccount: !W,
            associatedOnly: W ? !1 : u,
            checkCreateATAOwner: l,
          });
        (D = ee), fe && f.addInstruction(fe);
      }
      S.push(D);
    }
    !w &&
      !P &&
      this.logAndCreateError(
        "cannot found target token accounts",
        "tokenAccounts",
        this.scope.account.tokenAccountRawInfos,
      );
    let K = n != null ? n : await this.getClmmPoolKeys(t.id),
      I =
        (O = await this.scope.connection.getAccountInfo(o.nftMint)) == null
          ? void 0
          : O.owner.equals(mt.TOKEN_2022_PROGRAM_ID),
      C = await Re.decreaseLiquidityInstructions({
        poolInfo: t,
        poolKeys: K,
        ownerPosition: o,
        ownerInfo: {
          wallet: this.scope.ownerPubKey,
          tokenAccountA: w,
          tokenAccountB: P,
          rewardAccounts: S,
        },
        liquidity: c,
        amountMinA: s,
        amountMinB: a,
        nft2022: I,
      });
    f.addInstruction({
      instructions: C.instructions,
      instructionTypes: [U.ClmmDecreasePosition],
    });
    let L = N({}, C.address);
    if (r.closePosition) {
      let F = await Re.closePositionInstructions({
        poolInfo: t,
        poolKeys: K,
        ownerInfo: { wallet: this.scope.ownerPubKey },
        ownerPosition: o,
        nft2022: I,
      });
      f.addInstruction({
        endInstructions: F.instructions,
        endInstructionTypes: F.instructionTypes,
      }),
        (L = N(N({}, L), F.address));
    }
    return (
      f.addCustomComputeBudget(m),
      f.addTipInstruction(d),
      f.versionBuild({ txVersion: p, extInfo: { address: L } })
    );
  }
  async lockPosition(e) {
    var y;
    let {
        programId: t = ni,
        authProgramId: n = wi,
        poolProgramId: o = hn,
        ownerPosition: r,
        payer: s,
        computeBudgetConfig: a,
        txTipConfig: c,
        txVersion: u,
        getEphemeralSigners: l,
        feePayer: m,
      } = e,
      d = this.createTxBuilder(m),
      p = await Re.makeLockPositions({
        programId: t,
        authProgramId: n,
        poolProgramId: o,
        wallet: this.scope.ownerPubKey,
        payer: s != null ? s : this.scope.ownerPubKey,
        nftMint: r.nftMint,
        getEphemeralSigners: l,
        nft2022:
          (y = await this.scope.connection.getAccountInfo(r.nftMint)) == null
            ? void 0
            : y.owner.equals(mt.TOKEN_2022_PROGRAM_ID),
      });
    return (
      d.addInstruction(p),
      d.addCustomComputeBudget(a),
      d.addTipInstruction(c),
      d.versionBuild({ txVersion: u, extInfo: p.address })
    );
  }
  async harvestLockPosition(e) {
    let {
        programId: t = ni,
        authProgramId: n = wi,
        clmmProgram: o = hn,
        poolKeys: r,
        lockData: s,
        ownerInfo: a = { useSOLBalance: !0 },
        associatedOnly: c = !0,
        checkCreateATAOwner: u = !1,
        computeBudgetConfig: l,
        txTipConfig: m,
        txVersion: d,
        feePayer: p,
      } = e,
      y = r || (await this.getClmmPoolKeys(s.poolId.toString())),
      f = this.createTxBuilder(p),
      b = await this.scope.connection.getAccountInfo(s.positionId);
    b || this.logger.logWithError("position not found", s.positionId);
    let g = Wi.decode(b.data),
      w = a.useSOLBalance && y.mintA.address === $.toString(),
      P = a.useSOLBalance && y.mintB.address === $.toString(),
      T,
      B,
      { account: h, instructionParams: x } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: y.mintA.programId,
          mint: new H.PublicKey(y.mintA.address),
          notUseTokenAccount: w,
          owner: this.scope.ownerPubKey,
          createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
          skipCloseAccount: !w,
          associatedOnly: w ? !1 : c,
          checkCreateATAOwner: u,
        });
    (T = h), x && f.addInstruction(x);
    let { account: S, instructionParams: K } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: y.mintB.programId,
        mint: new H.PublicKey(y.mintB.address),
        notUseTokenAccount: P,
        owner: this.scope.ownerPubKey,
        createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
        skipCloseAccount: !P,
        associatedOnly: P ? !1 : c,
        checkCreateATAOwner: u,
      });
    (B = S), K && f.addInstruction(K);
    let I = {},
      C = [];
    for (let Ke of y.rewardInfos) {
      let Ge = a.useSOLBalance && Ke.mint.address === $.toString(),
        Ct = I[Ke.mint.address];
      if (!Ct) {
        let { account: sn, instructionParams: Gt } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: new H.PublicKey(Ke.mint.programId),
            mint: new H.PublicKey(Ke.mint.address),
            notUseTokenAccount: Ge,
            owner: this.scope.ownerPubKey,
            skipCloseAccount: !Ge,
            createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
            associatedOnly: Ge ? !1 : c,
          });
        (Ct = sn), Gt && f.addInstruction(Gt);
      }
      (I[Ke.mint.address] = Ct), C.push(Ct);
    }
    let L = Vi(t, s.lockNftMint).publicKey,
      O = oe(
        this.scope.ownerPubKey,
        s.lockNftMint,
        mt.TOKEN_PROGRAM_ID,
      ).publicKey,
      F = Z.getTickArrayStartIndexByTick(g.tickLower, y.config.tickSpacing),
      W = Z.getTickArrayStartIndexByTick(g.tickUpper, y.config.tickSpacing),
      { publicKey: D } = Ae(new H.PublicKey(y.programId), s.poolId, F),
      { publicKey: ee } = Ae(new H.PublicKey(y.programId), s.poolId, W),
      { publicKey: fe } = jt(
        new H.PublicKey(y.programId),
        s.poolId,
        g.tickLower,
        g.tickUpper,
      ),
      Ue = [];
    for (let Ke = 0; Ke < y.rewardInfos.length; Ke++)
      Ue.push({
        poolRewardVault: new H.PublicKey(y.rewardInfos[Ke].vault),
        ownerRewardVault: C[Ke],
        rewardMint: new H.PublicKey(y.rewardInfos[Ke].mint.address),
      });
    let wt = await Re.harvestLockPositionInstructionV2({
      programId: t,
      auth: n,
      lockPositionId: L,
      clmmProgram: o,
      lockOwner: this.scope.ownerPubKey,
      lockNftMint: s.lockNftMint,
      lockNftAccount: O,
      positionNftAccount: s.nftAccount,
      positionId: s.positionId,
      poolId: s.poolId,
      protocolPosition: fe,
      vaultA: new H.PublicKey(y.vault.A),
      vaultB: new H.PublicKey(y.vault.B),
      tickArrayLower: D,
      tickArrayUpper: ee,
      userVaultA: T,
      userVaultB: B,
      mintA: new H.PublicKey(y.mintA.address),
      mintB: new H.PublicKey(y.mintB.address),
      rewardAccounts: Ue,
      exTickArrayBitmap: We(o, s.poolId).publicKey,
    });
    return (
      f.addInstruction({
        instructions: [wt],
        instructionTypes: [U.ClmmHarvestLockPosition],
      }),
      f.addCustomComputeBudget(l),
      f.addTipInstruction(m),
      f.versionBuild({ txVersion: d })
    );
  }
  async closePosition({
    poolInfo: e,
    poolKeys: t,
    ownerPosition: n,
    txVersion: o,
    computeBudgetConfig: r,
    txTipConfig: s,
    feePayer: a,
  }) {
    var m;
    this.scope.availability.removeConcentratedPosition === !1 &&
      this.logAndCreateError("remove position feature disabled in your region");
    let c = this.createTxBuilder(a),
      u = t != null ? t : await this.getClmmPoolKeys(e.id),
      l = Re.closePositionInstructions({
        poolInfo: e,
        poolKeys: u,
        ownerInfo: { wallet: this.scope.ownerPubKey },
        ownerPosition: n,
        nft2022:
          (m = await this.scope.connection.getAccountInfo(n.nftMint)) == null
            ? void 0
            : m.owner.equals(mt.TOKEN_2022_PROGRAM_ID),
      });
    return (
      c.addCustomComputeBudget(r),
      c.addTipInstruction(s),
      c
        .addInstruction(l)
        .versionBuild({ txVersion: o, extInfo: { address: l.address } })
    );
  }
  async initReward({
    poolInfo: e,
    ownerInfo: t,
    rewardInfo: n,
    associatedOnly: o = !0,
    checkCreateATAOwner: r = !1,
    computeBudgetConfig: s,
    txVersion: a,
    feePayer: c,
  }) {
    n.endTime <= n.openTime &&
      this.logAndCreateError("reward time error", "rewardInfo", n);
    let u = this.createTxBuilder(c),
      l = t.useSOLBalance && n.mint.address.toString() === $.toString(),
      m = n.perSecond.mul(n.endTime - n.openTime),
      { account: d, instructionParams: p } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: new H.PublicKey(n.mint.address),
          mint: new H.PublicKey(n.mint.address),
          notUseTokenAccount: !!l,
          skipCloseAccount: !l,
          owner: this.scope.ownerPubKey,
          createInfo: l
            ? {
                payer: t.feePayer || this.scope.ownerPubKey,
                amount: new Ot.default(
                  new _(m.toFixed(0)).gte(m)
                    ? m.toFixed(0)
                    : m.add(1).toFixed(0),
                ),
              }
            : void 0,
          associatedOnly: l ? !1 : o,
          checkCreateATAOwner: r,
        });
    p && u.addInstruction(p),
      d ||
        this.logAndCreateError(
          "no money",
          "ownerRewardAccount",
          this.scope.account.tokenAccountRawInfos,
        );
    let y = await this.getClmmPoolKeys(e.id),
      f = Re.initRewardInstructions({
        poolInfo: e,
        poolKeys: y,
        ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccount: d },
        rewardInfo: {
          programId: new H.PublicKey(n.mint.programId),
          mint: new H.PublicKey(n.mint.address),
          openTime: n.openTime,
          endTime: n.endTime,
          emissionsPerSecondX64: ae.decimalToX64(n.perSecond),
        },
      });
    return (
      u.addInstruction(f),
      u.addCustomComputeBudget(s),
      u.versionBuild({ txVersion: a, extInfo: { address: f.address } })
    );
  }
  async initRewards({
    poolInfo: e,
    poolKeys: t,
    ownerInfo: n,
    rewardInfos: o,
    associatedOnly: r = !0,
    checkCreateATAOwner: s = !1,
    computeBudgetConfig: a,
    txTipConfig: c,
    txVersion: u,
    feePayer: l,
  }) {
    for (let p of o)
      p.endTime <= p.openTime &&
        this.logAndCreateError("reward time error", "rewardInfo", p);
    let m = this.createTxBuilder(l),
      d = {};
    for (let p of o) {
      let y = n.useSOLBalance && p.mint.address === $.toString(),
        f = p.perSecond.mul(p.endTime - p.openTime),
        { account: b, instructionParams: g } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: new H.PublicKey(p.mint.programId),
            mint: new H.PublicKey(p.mint.address),
            notUseTokenAccount: !!y,
            skipCloseAccount: !y,
            owner: this.scope.ownerPubKey,
            createInfo: y
              ? {
                  payer: n.feePayer || this.scope.ownerPubKey,
                  amount: new Ot.default(
                    new _(f.toFixed(0)).gte(f)
                      ? f.toFixed(0)
                      : f.add(1).toFixed(0),
                  ),
                }
              : void 0,
            associatedOnly: y ? !1 : r,
            checkCreateATAOwner: s,
          });
      g && m.addInstruction(g),
        b ||
          this.logAndCreateError(
            "no money",
            "ownerRewardAccount",
            this.scope.account.tokenAccountRawInfos,
          );
      let w = t != null ? t : await this.getClmmPoolKeys(e.id),
        P = Re.initRewardInstructions({
          poolInfo: e,
          poolKeys: w,
          ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccount: b },
          rewardInfo: {
            programId: new H.PublicKey(p.mint.programId),
            mint: new H.PublicKey(p.mint.address),
            openTime: p.openTime,
            endTime: p.endTime,
            emissionsPerSecondX64: ae.decimalToX64(p.perSecond),
          },
        });
      (d = N(N({}, d), P.address)), m.addInstruction(P);
    }
    return (
      m.addCustomComputeBudget(a),
      m.addTipInstruction(c),
      m.versionBuild({ txVersion: u, extInfo: { address: d } })
    );
  }
  async setReward({
    poolInfo: e,
    ownerInfo: t,
    rewardInfo: n,
    associatedOnly: o = !0,
    checkCreateATAOwner: r = !1,
    computeBudgetConfig: s,
    txTipConfig: a,
    txVersion: c,
    feePayer: u,
  }) {
    n.endTime <= n.openTime &&
      this.logAndCreateError("reward time error", "rewardInfo", n);
    let l = this.createTxBuilder(u),
      m = t.useSOLBalance && n.mint.equals($),
      { account: d, instructionParams: p } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: n.programId,
          mint: n.mint,
          notUseTokenAccount: m,
          owner: this.scope.ownerPubKey,
          createInfo: m
            ? {
                payer: t.feePayer || this.scope.ownerPubKey,
                amount: new Ot.default(
                  new _(n.perSecond.sub(n.endTime - n.openTime).toFixed(0)).gte(
                    n.perSecond.sub(n.endTime - n.openTime),
                  )
                    ? n.perSecond.sub(n.endTime - n.openTime).toFixed(0)
                    : n.perSecond
                        .sub(n.endTime - n.openTime)
                        .add(1)
                        .toFixed(0),
                ),
              }
            : void 0,
          associatedOnly: m ? !1 : o,
          checkCreateATAOwner: r,
        });
    p && l.addInstruction(p),
      d ||
        this.logAndCreateError(
          "no money",
          "ownerRewardAccount",
          this.scope.account.tokenAccountRawInfos,
        );
    let y = await this.getClmmPoolKeys(e.id),
      f = Re.setRewardInstructions({
        poolInfo: e,
        poolKeys: y,
        ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccount: d },
        rewardInfo: {
          mint: n.mint,
          openTime: n.openTime,
          endTime: n.endTime,
          emissionsPerSecondX64: ae.decimalToX64(n.perSecond),
        },
      });
    return (
      l.addInstruction(f),
      l.addCustomComputeBudget(s),
      l.addTipInstruction(a),
      l.versionBuild({ txVersion: c, extInfo: { address: f.address } })
    );
  }
  async setRewards({
    poolInfo: e,
    poolKeys: t,
    ownerInfo: n,
    rewardInfos: o,
    associatedOnly: r = !0,
    checkCreateATAOwner: s = !1,
    computeBudgetConfig: a,
    txTipConfig: c,
    txVersion: u,
    feePayer: l,
  }) {
    let m = this.createTxBuilder(l),
      d = {};
    for (let p of o) {
      p.endTime <= p.openTime &&
        this.logAndCreateError("reward time error", "rewardInfo", p);
      let y = n.useSOLBalance && p.mint.address === $.toString(),
        { account: f, instructionParams: b } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: new H.PublicKey(p.mint.programId),
            mint: new H.PublicKey(p.mint.address),
            notUseTokenAccount: y,
            owner: this.scope.ownerPubKey,
            createInfo: y
              ? {
                  payer: n.feePayer || this.scope.ownerPubKey,
                  amount: new Ot.default(
                    new _(
                      p.perSecond.sub(p.endTime - p.openTime).toFixed(0),
                    ).gte(p.perSecond.sub(p.endTime - p.openTime))
                      ? p.perSecond.sub(p.endTime - p.openTime).toFixed(0)
                      : p.perSecond
                          .sub(p.endTime - p.openTime)
                          .add(1)
                          .toFixed(0),
                  ),
                }
              : void 0,
            associatedOnly: y ? !1 : r,
            checkCreateATAOwner: s,
          });
      b && m.addInstruction(b),
        f ||
          this.logAndCreateError(
            "no money",
            "ownerRewardAccount",
            this.scope.account.tokenAccountRawInfos,
          );
      let g = t != null ? t : await this.getClmmPoolKeys(e.id),
        w = Re.setRewardInstructions({
          poolInfo: e,
          poolKeys: g,
          ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccount: f },
          rewardInfo: {
            mint: new H.PublicKey(p.mint.address),
            openTime: p.openTime,
            endTime: p.endTime,
            emissionsPerSecondX64: ae.decimalToX64(p.perSecond),
          },
        });
      m.addInstruction(w), (d = N(N({}, d), w.address));
    }
    return (
      m.addCustomComputeBudget(a),
      m.addTipInstruction(c),
      m.versionBuild({ txVersion: u, extInfo: { address: d } })
    );
  }
  async collectReward({
    poolInfo: e,
    ownerInfo: t,
    rewardMint: n,
    associatedOnly: o = !0,
    checkCreateATAOwner: r = !1,
    computeBudgetConfig: s,
    txTipConfig: a,
    txVersion: c,
    feePayer: u,
  }) {
    let l = e.rewardDefaultInfos.find((g) => g.mint.address === n.toString());
    l ||
      this.logAndCreateError("reward mint error", "not found reward mint", n);
    let m = this.createTxBuilder(u),
      d = t.useSOLBalance && n.equals($),
      { account: p, instructionParams: y } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: new H.PublicKey(l.mint.programId),
          mint: n,
          notUseTokenAccount: d,
          owner: this.scope.ownerPubKey,
          skipCloseAccount: !d,
          createInfo: {
            payer: t.feePayer || this.scope.ownerPubKey,
            amount: 0,
          },
          associatedOnly: d ? !1 : o,
          checkCreateATAOwner: r,
        });
    y && m.addInstruction(y),
      p ||
        this.logAndCreateError(
          "no money",
          "ownerRewardAccount",
          this.scope.account.tokenAccountRawInfos,
        );
    let f = await this.getClmmPoolKeys(e.id),
      b = Re.collectRewardInstructions({
        poolInfo: e,
        poolKeys: f,
        ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccount: p },
        rewardMint: n,
      });
    return (
      m.addInstruction(b),
      m.addCustomComputeBudget(s),
      m.addTipInstruction(a),
      m.versionBuild({ txVersion: c, extInfo: { address: b.address } })
    );
  }
  async collectRewards({
    poolInfo: e,
    ownerInfo: t,
    rewardMints: n,
    associatedOnly: o = !0,
    checkCreateATAOwner: r = !1,
    computeBudgetConfig: s,
    txTipConfig: a,
    feePayer: c,
  }) {
    let u = this.createTxBuilder(c),
      l = {};
    for (let m of n) {
      let d = e.rewardDefaultInfos.find((w) => w.mint.address === m.toString());
      if (!d) {
        this.logAndCreateError("reward mint error", "not found reward mint", m);
        continue;
      }
      let p = t.useSOLBalance && m.equals($),
        { account: y, instructionParams: f } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: new H.PublicKey(d.mint.programId),
            mint: m,
            notUseTokenAccount: p,
            owner: this.scope.ownerPubKey,
            skipCloseAccount: !p,
            createInfo: {
              payer: t.feePayer || this.scope.ownerPubKey,
              amount: 0,
            },
            associatedOnly: p ? !1 : o,
            checkCreateATAOwner: r,
          });
      y ||
        this.logAndCreateError(
          "no money",
          "ownerRewardAccount",
          this.scope.account.tokenAccountRawInfos,
        ),
        f && u.addInstruction(f);
      let b = await this.getClmmPoolKeys(e.id),
        g = Re.collectRewardInstructions({
          poolInfo: e,
          poolKeys: b,
          ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccount: y },
          rewardMint: m,
        });
      u.addInstruction(g), (l = N(N({}, l), g.address));
    }
    return (
      u.addCustomComputeBudget(s),
      u.addTipInstruction(a),
      u.build({ address: l })
    );
  }
  async swap({
    poolInfo: e,
    poolKeys: t,
    inputMint: n,
    amountIn: o,
    amountOutMin: r,
    priceLimit: s,
    observationId: a,
    ownerInfo: c,
    remainingAccounts: u,
    associatedOnly: l = !0,
    checkCreateATAOwner: m = !1,
    txVersion: d,
    computeBudgetConfig: p,
    txTipConfig: y,
    feePayer: f,
  }) {
    let b = this.createTxBuilder(f),
      g = n.toString() === e.mintA.address,
      w = c.useSOLBalance && e.mintA.address === $.toBase58(),
      P = c.useSOLBalance && e.mintB.address === $.toBase58(),
      T;
    !s || s.equals(new _(0))
      ? (T = g ? Wt.add(new Ot.default(1)) : qt.sub(new Ot.default(1)))
      : (T = re.priceToSqrtPriceX64(s, e.mintA.decimals, e.mintB.decimals));
    let B;
    if (!B) {
      let { account: S, instructionParams: K } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: e.mintA.programId,
          mint: new H.PublicKey(e.mintA.address),
          notUseTokenAccount: w,
          owner: this.scope.ownerPubKey,
          skipCloseAccount: !w,
          createInfo:
            w || !g
              ? {
                  payer: c.feePayer || this.scope.ownerPubKey,
                  amount: g ? o : 0,
                }
              : void 0,
          associatedOnly: w ? !1 : l,
          checkCreateATAOwner: m,
        });
      (B = S), K && b.addInstruction(K);
    }
    let h;
    if (!h) {
      let { account: S, instructionParams: K } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: e.mintB.programId,
          mint: new H.PublicKey(e.mintB.address),
          notUseTokenAccount: P,
          owner: this.scope.ownerPubKey,
          skipCloseAccount: !P,
          createInfo:
            P || g
              ? {
                  payer: c.feePayer || this.scope.ownerPubKey,
                  amount: g ? 0 : o,
                }
              : void 0,
          associatedOnly: P ? !1 : l,
          checkCreateATAOwner: m,
        });
      (h = S), K && b.addInstruction(K);
    }
    (!B || !h) &&
      this.logAndCreateError("user do not have token account", {
        tokenA: e.mintA.symbol || e.mintA.address,
        tokenB: e.mintB.symbol || e.mintB.address,
        ownerTokenAccountA: B,
        ownerTokenAccountB: h,
        mintAUseSOLBalance: w,
        mintBUseSOLBalance: P,
        associatedOnly: l,
      });
    let x = t != null ? t : await this.getClmmPoolKeys(e.id);
    return (
      b.addInstruction(
        Re.makeSwapBaseInInstructions({
          poolInfo: e,
          poolKeys: x,
          observationId: a,
          ownerInfo: {
            wallet: this.scope.ownerPubKey,
            tokenAccountA: B,
            tokenAccountB: h,
          },
          inputMint: new H.PublicKey(n),
          amountIn: o,
          amountOutMin: r,
          sqrtPriceLimitX64: T,
          remainingAccounts: u,
        }),
      ),
      b.addCustomComputeBudget(p),
      b.addTipInstruction(y),
      b.versionBuild({ txVersion: d })
    );
  }
  async swapBaseOut({
    poolInfo: e,
    poolKeys: t,
    outputMint: n,
    amountOut: o,
    amountInMax: r,
    priceLimit: s,
    observationId: a,
    ownerInfo: c,
    remainingAccounts: u,
    associatedOnly: l = !0,
    checkCreateATAOwner: m = !1,
    txVersion: d,
    computeBudgetConfig: p,
    txTipConfig: y,
    feePayer: f,
  }) {
    let b = this.createTxBuilder(f),
      g = n.toString() === e.mintB.address,
      w = c.useSOLBalance && e.mintA.address === $.toBase58(),
      P = c.useSOLBalance && e.mintB.address === $.toBase58(),
      T;
    !s || s.equals(new _(0))
      ? (T =
          n.toString() === e.mintB.address
            ? Wt.add(new Ot.default(1))
            : qt.sub(new Ot.default(1)))
      : (T = re.priceToSqrtPriceX64(s, e.mintA.decimals, e.mintB.decimals));
    let B;
    if (!B) {
      let { account: S, instructionParams: K } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: e.mintA.programId,
          mint: new H.PublicKey(e.mintA.address),
          notUseTokenAccount: w,
          owner: this.scope.ownerPubKey,
          skipCloseAccount: !w,
          createInfo:
            w || !g
              ? {
                  payer: c.feePayer || this.scope.ownerPubKey,
                  amount: g ? r : 0,
                }
              : void 0,
          associatedOnly: w ? !1 : l,
          checkCreateATAOwner: m,
        });
      (B = S), K && b.addInstruction(K);
    }
    let h;
    if (!h) {
      let { account: S, instructionParams: K } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: e.mintB.programId,
          mint: new H.PublicKey(e.mintB.address),
          notUseTokenAccount: P,
          owner: this.scope.ownerPubKey,
          skipCloseAccount: !P,
          createInfo:
            P || g
              ? {
                  payer: c.feePayer || this.scope.ownerPubKey,
                  amount: g ? 0 : r,
                }
              : void 0,
          associatedOnly: P ? !1 : l,
          checkCreateATAOwner: m,
        });
      (h = S), K && b.addInstruction(K);
    }
    (!B || !h) &&
      this.logAndCreateError("user do not have token account", {
        tokenA: e.mintA.symbol || e.mintA.address,
        tokenB: e.mintB.symbol || e.mintB.address,
        ownerTokenAccountA: B,
        ownerTokenAccountB: h,
        mintAUseSOLBalance: w,
        mintBUseSOLBalance: P,
        associatedOnly: l,
      });
    let x = t != null ? t : await this.getClmmPoolKeys(e.id);
    return (
      b.addInstruction(
        Re.makeSwapBaseOutInstructions({
          poolInfo: e,
          poolKeys: x,
          observationId: a,
          ownerInfo: {
            wallet: this.scope.ownerPubKey,
            tokenAccountA: B,
            tokenAccountB: h,
          },
          outputMint: new H.PublicKey(n),
          amountOut: o,
          amountInMax: r,
          sqrtPriceLimitX64: T,
          remainingAccounts: u,
        }),
      ),
      b.addCustomComputeBudget(p),
      b.addTipInstruction(y),
      b.versionBuild({ txVersion: d })
    );
  }
  async harvestAllRewards({
    allPoolInfo: e,
    allPositions: t,
    lockInfo: n,
    ownerInfo: o,
    associatedOnly: r = !0,
    checkCreateATAOwner: s = !1,
    programId: a,
    txVersion: c,
    computeBudgetConfig: u,
    feePayer: l,
  }) {
    var b, g;
    let m = {};
    for (let w of this.scope.account.tokenAccountRawInfos)
      r
        ? oe(this.scope.ownerPubKey, w.accountInfo.mint, a).publicKey.equals(
            w.pubkey,
          ) && (m[w.accountInfo.mint.toString()] = w.pubkey)
        : (m[w.accountInfo.mint.toString()] = w.pubkey);
    let d = Object.values(t)
        .flat()
        .map((w) => w.nftMint),
      p = await je(
        this.scope.connection,
        d.map((w) => ({ pubkey: w })),
      ),
      y = {};
    p.forEach((w) => {
      var P, T;
      y[w.pubkey.toBase58()] =
        (T =
          (P = w == null ? void 0 : w.accountInfo) == null
            ? void 0
            : P.owner) != null
          ? T
          : null;
    });
    let f = this.createTxBuilder(l);
    for (let w of Object.values(e)) {
      if (
        t[w.id] === void 0 ||
        !t[w.id].find(
          (C) =>
            !C.liquidity.isZero() ||
            C.rewardInfos.find((L) => !L.rewardAmountOwed.isZero()),
        )
      )
        continue;
      let P = w,
        T = o.useSOLBalance && P.mintA.address === $.toString(),
        B = o.useSOLBalance && P.mintB.address === $.toString(),
        h = m[P.mintA.address];
      if (!h) {
        let { account: C, instructionParams: L } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: P.mintA.programId,
            mint: new H.PublicKey(P.mintA.address),
            notUseTokenAccount: T,
            owner: this.scope.ownerPubKey,
            skipCloseAccount: !T,
            createInfo: {
              payer: o.feePayer || this.scope.ownerPubKey,
              amount: 0,
            },
            associatedOnly: T ? !1 : r,
            checkCreateATAOwner: s,
          });
        (h = C), L && f.addInstruction(L);
      }
      let x = m[P.mintB.address];
      if (!x) {
        let { account: C, instructionParams: L } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: P.mintB.programId,
            mint: new H.PublicKey(P.mintB.address),
            notUseTokenAccount: B,
            owner: this.scope.ownerPubKey,
            skipCloseAccount: !B,
            createInfo: {
              payer: o.feePayer || this.scope.ownerPubKey,
              amount: 0,
            },
            associatedOnly: B ? !1 : r,
            checkCreateATAOwner: s,
          });
        (x = C), L && f.addInstruction(L);
      }
      (m[P.mintA.address] = h), (m[P.mintB.address] = x);
      let S = [];
      for (let C of P.rewardDefaultInfos) {
        let L = o.useSOLBalance && C.mint.address === $.toString(),
          O = m[C.mint.address];
        if (!O) {
          let { account: F, instructionParams: W } =
            await this.scope.account.getOrCreateTokenAccount({
              tokenProgram: new H.PublicKey(C.mint.programId),
              mint: new H.PublicKey(C.mint.address),
              notUseTokenAccount: L,
              owner: this.scope.ownerPubKey,
              skipCloseAccount: !L,
              createInfo: {
                payer: o.feePayer || this.scope.ownerPubKey,
                amount: 0,
              },
              associatedOnly: L ? !1 : r,
            });
          (O = F), W && f.addInstruction(W);
        }
        (m[C.mint.address] = O), S.push(O);
      }
      let K = await this.getClmmPoolKeys(P.id),
        I = [];
      for (let C = 0; C < K.rewardInfos.length; C++)
        I.push({
          poolRewardVault: new H.PublicKey(K.rewardInfos[C].vault),
          ownerRewardVault: S[C],
          rewardMint: new H.PublicKey(K.rewardInfos[C].mint.address),
        });
      for (let C of t[w.id]) {
        let L =
          (b = n == null ? void 0 : n[w.id]) == null
            ? void 0
            : b[C.nftMint.toBase58()];
        if (L) {
          let O = oe(
              this.scope.ownerPubKey,
              L.lockNftMint,
              mt.TOKEN_PROGRAM_ID,
            ).publicKey,
            F = Z.getTickArrayStartIndexByTick(
              C.tickLower,
              K.config.tickSpacing,
            ),
            W = Z.getTickArrayStartIndexByTick(
              C.tickUpper,
              K.config.tickSpacing,
            ),
            { publicKey: D } = Ae(new H.PublicKey(K.programId), L.poolId, F),
            { publicKey: ee } = Ae(new H.PublicKey(K.programId), L.poolId, W),
            { publicKey: fe } = jt(
              new H.PublicKey(K.programId),
              L.poolId,
              C.tickLower,
              C.tickUpper,
            ),
            Ue = Vi(ni, L.lockNftMint).publicKey,
            wt = Re.harvestLockPositionInstructionV2({
              programId: ni,
              auth: wi,
              lockPositionId: Ue,
              clmmProgram: hn,
              lockOwner: this.scope.ownerPubKey,
              lockNftMint: L.lockNftMint,
              lockNftAccount: O,
              positionNftAccount: L.nftAccount,
              positionId: L.positionId,
              poolId: L.poolId,
              protocolPosition: fe,
              vaultA: new H.PublicKey(K.vault.A),
              vaultB: new H.PublicKey(K.vault.B),
              tickArrayLower: D,
              tickArrayUpper: ee,
              userVaultA: h,
              userVaultB: x,
              mintA: new H.PublicKey(K.mintA.address),
              mintB: new H.PublicKey(K.mintB.address),
              rewardAccounts: I,
              exTickArrayBitmap: We(hn, L.poolId).publicKey,
            });
          f.addInstruction({
            instructions: [wt],
            instructionTypes: [U.ClmmHarvestLockPosition],
            lookupTableAddress: K.lookupTableAccount
              ? [K.lookupTableAccount]
              : [],
          });
        } else {
          let O = Re.decreaseLiquidityInstructions({
            poolInfo: P,
            poolKeys: K,
            ownerPosition: C,
            ownerInfo: {
              wallet: this.scope.ownerPubKey,
              tokenAccountA: h,
              tokenAccountB: x,
              rewardAccounts: S,
            },
            liquidity: new Ot.default(0),
            amountMinA: new Ot.default(0),
            amountMinB: new Ot.default(0),
            nft2022:
              (g = y[C.nftMint.toBase58()]) == null
                ? void 0
                : g.equals(mt.TOKEN_2022_PROGRAM_ID),
          });
          f.addInstruction(O);
        }
      }
    }
    return c === 0
      ? f.sizeCheckBuildV0({ computeBudgetConfig: u })
      : f.sizeCheckBuild({ computeBudgetConfig: u });
  }
  async getWhiteListMint({ programId: e }) {
    let t = await this.scope.connection.getAccountInfo(_i(e).publicKey);
    return t
      ? wu
          .decode(t.data)
          .whitelistMints.filter((o) => !o.equals(H.PublicKey.default))
      : [];
  }
  async getOwnerPositionInfo({ programId: e }) {
    await this.scope.account.fetchWalletTokenAccounts();
    let n = this.scope.account.tokenAccountRawInfos
        .filter((s) => s.accountInfo.amount.eq(new Ot.default(1)))
        .map((s) => Bt(new H.PublicKey(e), s.accountInfo.mint).publicKey),
      o = await this.scope.connection.getMultipleAccountsInfo(n),
      r = [];
    return (
      o.forEach((s) => {
        if (!s) return;
        let a = Wi.decode(s.data);
        r.push(a);
      }),
      r
    );
  }
  async getRpcClmmPoolInfo({ poolId: e }) {
    return (await this.getRpcClmmPoolInfos({ poolIds: [e] }))[String(e)];
  }
  async getRpcClmmPoolInfos({ poolIds: e, config: t }) {
    let n = await je(
        this.scope.connection,
        e.map((r) => ({ pubkey: new H.PublicKey(r) })),
        t,
      ),
      o = {};
    for (let r = 0; r < e.length; r++) {
      let s = n[r];
      if (s === null || !s.accountInfo)
        throw Error("fetch pool info error: " + String(e[r]));
      let a = zn.decode(s.accountInfo.data),
        c = re
          .sqrtPriceX64ToPrice(a.sqrtPriceX64, a.mintDecimalsA, a.mintDecimalsB)
          .toNumber();
      o[String(e[r])] = X(N({}, a), {
        currentPrice: c,
        programId: s.accountInfo.owner,
      });
    }
    return o;
  }
  async getComputeClmmPoolInfos({ clmmPoolsRpcInfo: e, mintInfos: t }) {
    let n = new Set(Object.keys(e).map((c) => e[c].ammConfig.toBase58())),
      o = await je(
        this.scope.connection,
        Array.from(n).map((c) => ({ pubkey: new H.PublicKey(c) })),
      ),
      r = {};
    o.forEach((c) => {
      !c.accountInfo ||
        (r[c.pubkey.toBase58()] = gu.decode(c.accountInfo.data));
    });
    let s = await Oe.fetchComputeMultipleClmmInfo({
        connection: this.scope.connection,
        rpcDataMap: e,
        poolList: Object.keys(e).map((c) => {
          var m, d, p, y;
          let [u, l] = [e[c].mintA.toBase58(), e[c].mintB.toBase58()];
          return {
            id: c,
            programId: e[c].programId.toBase58(),
            mintA: gt({
              address: u,
              decimals: e[c].mintDecimalsA,
              programId:
                t[u].programId.toBase58() || mt.TOKEN_PROGRAM_ID.toBase58(),
              extensions: {
                feeConfig:
                  (m = t[u]) != null && m.feeConfig
                    ? Bn((d = t[u]) == null ? void 0 : d.feeConfig)
                    : void 0,
              },
            }),
            mintB: gt({
              address: l,
              decimals: e[c].mintDecimalsB,
              programId:
                t[l].programId.toBase58() || mt.TOKEN_PROGRAM_ID.toBase58(),
              extensions: {
                feeConfig:
                  (p = t[l]) != null && p.feeConfig
                    ? Bn((y = t[l]) == null ? void 0 : y.feeConfig)
                    : void 0,
              },
            }),
            price: e[c].currentPrice,
            config: X(N({}, r[e[c].ammConfig.toBase58()]), {
              id: e[c].ammConfig.toBase58(),
              fundFeeRate: 0,
              description: "",
              defaultRange: 0,
              defaultRangePoint: [],
            }),
          };
        }),
      }),
      a = await Oe.fetchMultiplePoolTickArrays({
        connection: this.scope.connection,
        poolKeys: Object.values(s),
      });
    return { computeClmmPoolInfo: s, computePoolTickData: a };
  }
  async getPoolInfoFromRpc(e) {
    var l;
    let t = await this.getRpcClmmPoolInfo({ poolId: e }),
      n = new Set([t.mintA.toBase58(), t.mintB.toBase58()]),
      o = await Jn({
        connection: this.scope.connection,
        mints: Array.from(n).map((m) => new H.PublicKey(m)),
      }),
      { computeClmmPoolInfo: r, computePoolTickData: s } =
        await this.scope.clmm.getComputeClmmPoolInfos({
          clmmPoolsRpcInfo: { [e]: t },
          mintInfos: o,
        }),
      a = await je(this.scope.connection, [
        { pubkey: t.vaultA },
        { pubkey: t.vaultB },
      ]),
      c = fu(r[e]);
    if (!a[0].accountInfo || !a[1].accountInfo)
      throw new Error("pool vault data not found");
    (c.mintAmountA = Number(
      mt.AccountLayout.decode(a[0].accountInfo.data).amount.toString(),
    )),
      (c.mintAmountB = Number(
        mt.AccountLayout.decode(
          (l = a[1].accountInfo) == null ? void 0 : l.data,
        ).amount.toString(),
      ));
    let u = X(N({}, r[e]), {
      exBitmapAccount: r[e].exBitmapAccount.toBase58(),
      observationId: r[e].observationId.toBase58(),
      id: e,
      programId: t.programId.toBase58(),
      openTime: t.startTime.toString(),
      vault: { A: t.vaultA.toBase58(), B: t.vaultB.toBase58() },
      config: c.config,
      rewardInfos: r[e].rewardInfos
        .filter((m) => !m.tokenVault.equals(H.PublicKey.default))
        .map((m) => ({
          mint: gt({
            address: m.tokenMint.toBase58(),
            programId: mt.TOKEN_PROGRAM_ID.toBase58(),
            decimals: 10,
          }),
          vault: m.tokenVault.toBase58(),
        })),
    });
    return { poolInfo: c, poolKeys: u, computePoolInfo: r[e], tickData: s };
  }
};
var Y = require("@solana/web3.js"),
  ut = require("@solana/spl-token");
var Ls = be(require("bn.js")),
  Qo = be(require("decimal.js-light"));
var Zi = be(require("bn.js"));
function Cs(i, e) {
  if (e.isZero()) throw Error("divisor is zero");
  return i.mod(e);
}
function ny(i, e) {
  if (e.isZero()) throw Error("rhs is zero");
  let t = i.div(e);
  if (t.isZero()) throw Error("quotient is zero");
  let n = Cs(i, e);
  return (
    n.gt(ji) &&
      ((t = t.add(new Zi.default(1))),
      (e = i.div(t)),
      (n = Cs(i, t)),
      n.gt(ji) && (e = e.add(new Zi.default(1)))),
    [t, e]
  );
}
var ji = new Zi.default(0),
  Xo = class {
    static swapWithoutFees(e, t, n) {
      let o = t.mul(n),
        r = t.add(e),
        [s] = ny(o, r),
        a = n.sub(s);
      if (a.isZero()) throw Error("destinationAmountSwapped is zero");
      return { destinationAmountSwapped: a };
    }
    static lpTokensToTradingTokens(e, t, n, o, r) {
      let s = e.mul(n).div(t),
        a = e.mul(o).div(t);
      if (r === 0) return { tokenAmount0: s, tokenAmount1: a };
      if (r === 1)
        return (
          Cs(e.mul(n), t).gt(ji) && s.gt(ji) && (s = s.add(new Zi.default(1))),
          Cs(e.mul(o), t).gt(ji) && a.gt(ji) && (a = a.add(new Zi.default(1))),
          { tokenAmount0: s, tokenAmount1: a }
        );
      throw Error("roundDirection value error");
    }
  };
var Mu = be(require("bn.js")),
  Rs = new Mu.default(1e6);
function Pm(i, e, t) {
  return i.mul(e).add(t).sub(new Mu.default(1)).div(t);
}
function Ou(i, e, t) {
  return i.mul(e).div(t);
}
var zo = class {
  static tradingFee(e, t) {
    return Pm(e, t, Rs);
  }
  static protocolFee(e, t) {
    return Ou(e, t, Rs);
  }
  static fundFee(e, t) {
    return Ou(e, t, Rs);
  }
};
var Lu = ((t) => (
    (t[(t.Floor = 0)] = "Floor"), (t[(t.Ceiling = 1)] = "Ceiling"), t
  ))(Lu || {}),
  Yo = class {
    static validate_supply(e, t) {
      if (e.isZero()) throw Error("tokenAmount0 is zero");
      if (t.isZero()) throw Error("tokenAmount1 is zero");
    }
    static swap(e, t, n, o) {
      let r = zo.tradingFee(e, o),
        s = e.sub(r),
        { destinationAmountSwapped: a } = Xo.swapWithoutFees(s, t, n);
      return {
        newSwapDestinationAmount: n.sub(a),
        sourceAmountSwapped: e,
        destinationAmountSwapped: a,
        tradeFee: r,
      };
    }
    static swapBaseOut({
      poolMintA: e,
      poolMintB: t,
      tradeFeeRate: n,
      baseReserve: o,
      quoteReserve: r,
      outputMint: s,
      outputAmount: a,
    }) {
      let [c, u, l, m, d] =
          t.address === s.toString()
            ? [o, r, e.decimals, t.decimals, e.address]
            : [r, o, t.decimals, e.decimals, t.address],
        p = new Qo.default(u.toString())
          .div(10 ** m)
          .div(new Qo.default(c.toString()).div(10 ** l)),
        y = a.gte(u) ? u.sub(new Ls.default(1)) : a,
        f = u.sub(y),
        b = Yt(c.mul(y), f),
        g = Yt(b.mul(new Ls.default(1e6)), new Ls.default(1e6).sub(n)),
        w = g.sub(b),
        P = new Qo.default(y.toString())
          .div(10 ** m)
          .div(new Qo.default(g.toString()).div(10 ** l)),
        T = p.isZero() ? 0 : P.sub(p).div(p).abs().toNumber();
      return {
        amountRealOut: y,
        amountIn: g,
        amountInWithoutFee: b,
        tradeFee: w,
        priceImpact: T,
      };
    }
  };
var qe = be(require("bn.js"));
var dt = require("@solana/web3.js"),
  St = require("@solana/spl-token");
var iy = Buffer.from("vault_and_lp_mint_auth_seed", "utf8"),
  oy = Buffer.from("amm_config", "utf8"),
  ry = Buffer.from("pool", "utf8"),
  sy = Buffer.from("pool_lp_mint", "utf8"),
  ay = Buffer.from("pool_vault", "utf8"),
  uy = Buffer.from("observation", "utf8");
function li(i) {
  return le([iy], i);
}
function cy(i, e) {
  return le([oy, ly(e)], i);
}
function Os(i, e, t, n) {
  return le([ry, e.toBuffer(), t.toBuffer(), n.toBuffer()], i);
}
function km(i, e) {
  return le([sy, e.toBuffer()], i);
}
function Nu(i, e, t) {
  return le([ay, e.toBuffer(), t.toBuffer()], i);
}
function $i(i, e) {
  return le([uy, e.toBuffer()], i);
}
function ly(i) {
  let e = new ArrayBuffer(2);
  return new DataView(e).setUint16(0, i, !1), new Uint8Array(e);
}
function vu({ poolId: i, programId: e, configId: t, mintA: n, mintB: o }) {
  let r = li(e).publicKey,
    s = i || Os(e, t, n, o).publicKey,
    a = km(e, s).publicKey,
    c = Nu(e, s, n).publicKey,
    u = Nu(e, s, o).publicKey,
    l = $i(e, s).publicKey;
  return {
    poolId: s,
    configId: t,
    authority: r,
    lpMint: a,
    vaultA: c,
    vaultB: u,
    observationId: l,
  };
}
var hm = Buffer.from("locked_liquidity", "utf8");
function Ho(i, e) {
  return le([hm, e.toBuffer()], i);
}
var my = ye("Raydium_cpmm"),
  mi = {
    initialize: [175, 175, 109, 31, 13, 152, 155, 237],
    deposit: [242, 35, 198, 137, 82, 225, 242, 182],
    withdraw: [183, 18, 70, 156, 148, 109, 161, 34],
    swapBaseInput: [143, 190, 90, 218, 196, 30, 51, 222],
    swapBaseOutput: [55, 217, 98, 86, 163, 74, 180, 173],
    lockCpLiquidity: [216, 157, 29, 78, 38, 51, 31, 26],
    collectCpFee: [8, 30, 51, 199, 209, 184, 247, 133],
  };
function _u(i, e, t, n, o, r, s, a, c, u, l, m, d, p, y, f, b, g, w, P) {
  let T = V([k("amountMaxA"), k("amountMaxB"), k("openTime")]),
    B = Os(i, t, r, s).publicKey,
    h = [
      { pubkey: e, isSigner: !0, isWritable: !1 },
      { pubkey: t, isSigner: !1, isWritable: !1 },
      { pubkey: n, isSigner: !1, isWritable: !1 },
      { pubkey: o, isSigner: !o.equals(B), isWritable: !0 },
      { pubkey: r, isSigner: !1, isWritable: !1 },
      { pubkey: s, isSigner: !1, isWritable: !1 },
      { pubkey: a, isSigner: !1, isWritable: !0 },
      { pubkey: c, isSigner: !1, isWritable: !0 },
      { pubkey: u, isSigner: !1, isWritable: !0 },
      { pubkey: l, isSigner: !1, isWritable: !0 },
      { pubkey: m, isSigner: !1, isWritable: !0 },
      { pubkey: d, isSigner: !1, isWritable: !0 },
      { pubkey: p, isSigner: !1, isWritable: !0 },
      { pubkey: b, isSigner: !1, isWritable: !0 },
      { pubkey: St.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: y, isSigner: !1, isWritable: !1 },
      { pubkey: f, isSigner: !1, isWritable: !1 },
      { pubkey: St.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: po, isSigner: !1, isWritable: !1 },
      { pubkey: ot, isSigner: !1, isWritable: !1 },
    ],
    x = Buffer.alloc(T.span);
  return (
    T.encode({ amountMaxA: g, amountMaxB: w, openTime: P }, x),
    new dt.TransactionInstruction({
      keys: h,
      programId: i,
      data: Buffer.from([...mi.initialize, ...x]),
    })
  );
}
function Vu(i, e, t, n, o, r, s, a, c, u, l, m, d, p, y) {
  let f = V([k("lpAmount"), k("amountMaxA"), k("amountMaxB")]),
    b = [
      { pubkey: e, isSigner: !0, isWritable: !1 },
      { pubkey: t, isSigner: !1, isWritable: !1 },
      { pubkey: n, isSigner: !1, isWritable: !0 },
      { pubkey: o, isSigner: !1, isWritable: !0 },
      { pubkey: r, isSigner: !1, isWritable: !0 },
      { pubkey: s, isSigner: !1, isWritable: !0 },
      { pubkey: a, isSigner: !1, isWritable: !0 },
      { pubkey: c, isSigner: !1, isWritable: !0 },
      { pubkey: St.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: St.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: u, isSigner: !1, isWritable: !1 },
      { pubkey: l, isSigner: !1, isWritable: !1 },
      { pubkey: m, isSigner: !1, isWritable: !0 },
    ],
    g = Buffer.alloc(f.span);
  return (
    my.debug("cpmm deposit data", {
      lpAmount: d.toString(),
      amountMaxA: p.toString(),
      amountMaxB: y.toString(),
    }),
    f.encode({ lpAmount: d, amountMaxA: p, amountMaxB: y }, g),
    new dt.TransactionInstruction({
      keys: b,
      programId: i,
      data: Buffer.from([...mi.deposit, ...g]),
    })
  );
}
function Eu(i, e, t, n, o, r, s, a, c, u, l, m, d, p, y) {
  let f = V([k("lpAmount"), k("amountMinA"), k("amountMinB")]),
    b = [
      { pubkey: e, isSigner: !0, isWritable: !1 },
      { pubkey: t, isSigner: !1, isWritable: !1 },
      { pubkey: n, isSigner: !1, isWritable: !0 },
      { pubkey: o, isSigner: !1, isWritable: !0 },
      { pubkey: r, isSigner: !1, isWritable: !0 },
      { pubkey: s, isSigner: !1, isWritable: !0 },
      { pubkey: a, isSigner: !1, isWritable: !0 },
      { pubkey: c, isSigner: !1, isWritable: !0 },
      { pubkey: St.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: St.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: u, isSigner: !1, isWritable: !1 },
      { pubkey: l, isSigner: !1, isWritable: !1 },
      { pubkey: m, isSigner: !1, isWritable: !0 },
      { pubkey: tn, isSigner: !1, isWritable: !1 },
    ],
    g = Buffer.alloc(f.span);
  return (
    f.encode({ lpAmount: d, amountMinA: p, amountMinB: y }, g),
    new dt.TransactionInstruction({
      keys: b,
      programId: i,
      data: Buffer.from([...mi.withdraw, ...g]),
    })
  );
}
function jo(i, e, t, n, o, r, s, a, c, u, l, m, d, p, y, f) {
  let b = V([k("amountIn"), k("amounOutMin")]),
    g = [
      { pubkey: e, isSigner: !0, isWritable: !1 },
      { pubkey: t, isSigner: !1, isWritable: !1 },
      { pubkey: n, isSigner: !1, isWritable: !1 },
      { pubkey: o, isSigner: !1, isWritable: !0 },
      { pubkey: r, isSigner: !1, isWritable: !0 },
      { pubkey: s, isSigner: !1, isWritable: !0 },
      { pubkey: a, isSigner: !1, isWritable: !0 },
      { pubkey: c, isSigner: !1, isWritable: !0 },
      { pubkey: u, isSigner: !1, isWritable: !1 },
      { pubkey: l, isSigner: !1, isWritable: !1 },
      { pubkey: m, isSigner: !1, isWritable: !1 },
      { pubkey: d, isSigner: !1, isWritable: !1 },
      { pubkey: p, isSigner: !1, isWritable: !0 },
    ],
    w = Buffer.alloc(b.span);
  return (
    b.encode({ amountIn: y, amounOutMin: f }, w),
    new dt.TransactionInstruction({
      keys: g,
      programId: i,
      data: Buffer.from([...mi.swapBaseInput, ...w]),
    })
  );
}
function Fu(i, e, t, n, o, r, s, a, c, u, l, m, d, p, y, f) {
  let b = V([k("amountInMax"), k("amountOut")]),
    g = [
      { pubkey: e, isSigner: !0, isWritable: !1 },
      { pubkey: t, isSigner: !1, isWritable: !1 },
      { pubkey: n, isSigner: !1, isWritable: !1 },
      { pubkey: o, isSigner: !1, isWritable: !0 },
      { pubkey: r, isSigner: !1, isWritable: !0 },
      { pubkey: s, isSigner: !1, isWritable: !0 },
      { pubkey: a, isSigner: !1, isWritable: !0 },
      { pubkey: c, isSigner: !1, isWritable: !0 },
      { pubkey: u, isSigner: !1, isWritable: !1 },
      { pubkey: l, isSigner: !1, isWritable: !1 },
      { pubkey: m, isSigner: !1, isWritable: !1 },
      { pubkey: d, isSigner: !1, isWritable: !1 },
      { pubkey: p, isSigner: !1, isWritable: !0 },
    ],
    w = Buffer.alloc(b.span);
  return (
    b.encode({ amountInMax: y, amountOut: f }, w),
    new dt.TransactionInstruction({
      keys: g,
      programId: i,
      data: Buffer.from([...mi.swapBaseOutput, ...w]),
    })
  );
}
async function Du(i) {
  var b;
  let {
      ownerInfo: e,
      poolInfo: t,
      poolKeys: n,
      feeNftOwner: o,
      getEphemeralSigners: r,
    } = i,
    s = [],
    [a, c] = [new dt.PublicKey(t.id), new dt.PublicKey(t.lpMint.address)],
    u;
  if (r) u = new dt.PublicKey((await r(1))[0]);
  else {
    let g = dt.Keypair.generate();
    s.push(g), (u = g.publicKey);
  }
  let { publicKey: l } = oe(o, u, St.TOKEN_PROGRAM_ID),
    { publicKey: m } = Un(u),
    { publicKey: d } = Ho(i.lockProgram, u),
    { publicKey: p } = oe(e.wallet, c, St.TOKEN_PROGRAM_ID),
    { publicKey: y } = oe(i.lockAuthProgram, c, St.TOKEN_PROGRAM_ID),
    f = Tm({
      programId: i.lockProgram,
      auth: i.lockAuthProgram,
      payer: e.feePayer,
      liquidityOwner: e.wallet,
      nftOwner: o,
      nftMint: u,
      nftAccount: l,
      poolId: a,
      lockPda: d,
      mintLp: c,
      userLpVault: p,
      lockLpVault: y,
      poolVaultA: new dt.PublicKey(n.vault.A),
      poolVaultB: new dt.PublicKey(n.vault.B),
      metadataAccount: m,
      lpAmount: i.lpAmount,
      withMetadata: (b = i.withMetadata) != null ? b : !0,
    });
  return {
    address: {
      nftMint: u,
      nftAccount: l,
      metadataAccount: m,
      lockPda: d,
      userLpVault: p,
      lockLpVault: y,
    },
    instructions: [f],
    signers: s,
    instructionTypes: [U.CpmmLockLp],
    lookupTableAddress: [],
  };
}
function Tm({
  programId: i,
  auth: e,
  payer: t,
  liquidityOwner: n,
  nftOwner: o,
  nftMint: r,
  nftAccount: s,
  poolId: a,
  lockPda: c,
  mintLp: u,
  userLpVault: l,
  lockLpVault: m,
  poolVaultA: d,
  poolVaultB: p,
  metadataAccount: y,
  lpAmount: f,
  withMetadata: b,
}) {
  let g = [
      { pubkey: e, isSigner: !1, isWritable: !1 },
      { pubkey: t, isSigner: !0, isWritable: !0 },
      { pubkey: n, isSigner: !0, isWritable: !1 },
      { pubkey: o, isSigner: !1, isWritable: !1 },
      { pubkey: r, isSigner: !0, isWritable: !0 },
      { pubkey: s, isSigner: !1, isWritable: !0 },
      { pubkey: a, isSigner: !1, isWritable: !1 },
      { pubkey: c, isSigner: !1, isWritable: !0 },
      { pubkey: u, isSigner: !1, isWritable: !1 },
      { pubkey: l, isSigner: !1, isWritable: !0 },
      { pubkey: m, isSigner: !1, isWritable: !0 },
      { pubkey: d, isSigner: !1, isWritable: !0 },
      { pubkey: p, isSigner: !1, isWritable: !0 },
      { pubkey: y, isSigner: !1, isWritable: !0 },
      { pubkey: ot, isSigner: !1, isWritable: !1 },
      { pubkey: dt.SystemProgram.programId, isSigner: !1, isWritable: !1 },
      { pubkey: St.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: St.ASSOCIATED_TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: cn, isSigner: !1, isWritable: !1 },
    ],
    w = V([k("lpAmount"), _e("withMetadata")]),
    P = Buffer.alloc(w.span);
  w.encode({ lpAmount: f, withMetadata: b }, P);
  let T = Buffer.from([...mi.lockCpLiquidity, ...P]);
  return new dt.TransactionInstruction({ keys: g, programId: i, data: T });
}
function Wu({
  programId: i,
  nftOwner: e,
  auth: t,
  nftAccount: n,
  lockPda: o,
  poolId: r,
  mintLp: s,
  userVaultA: a,
  userVaultB: c,
  poolVaultA: u,
  poolVaultB: l,
  mintA: m,
  mintB: d,
  lockLpVault: p,
  lpFeeAmount: y,
  cpmmProgram: f,
  cpmmAuthProgram: b,
}) {
  let g = [
      { pubkey: t, isSigner: !1, isWritable: !1 },
      { pubkey: e, isSigner: !0, isWritable: !1 },
      { pubkey: n, isSigner: !1, isWritable: !0 },
      { pubkey: o, isSigner: !1, isWritable: !0 },
      { pubkey: f != null ? f : Pi, isSigner: !1, isWritable: !1 },
      { pubkey: b != null ? b : Rr, isSigner: !1, isWritable: !1 },
      { pubkey: r, isSigner: !1, isWritable: !0 },
      { pubkey: s, isSigner: !1, isWritable: !0 },
      { pubkey: a, isSigner: !1, isWritable: !0 },
      { pubkey: c, isSigner: !1, isWritable: !0 },
      { pubkey: u, isSigner: !1, isWritable: !0 },
      { pubkey: l, isSigner: !1, isWritable: !0 },
      { pubkey: m, isSigner: !1, isWritable: !1 },
      { pubkey: d, isSigner: !1, isWritable: !1 },
      { pubkey: p, isSigner: !1, isWritable: !0 },
      { pubkey: St.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: St.TOKEN_2022_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: tn, isSigner: !1, isWritable: !1 },
    ],
    w = V([k("lpFeeAmount")]),
    P = Buffer.alloc(w.span);
  w.encode({ lpFeeAmount: y }, P);
  let T = Buffer.from([...mi.collectCpFee, ...P]);
  return new dt.TransactionInstruction({ keys: g, programId: i, data: T });
}
var qu = V([
    Te(8),
    G("bump"),
    _e("disableCreatePool"),
    dn("index"),
    k("tradeFeeRate"),
    k("protocolFeeRate"),
    k("fundFeeRate"),
    k("createPoolFee"),
    M("protocolOwner"),
    M("fundOwner"),
    j(k(), 16),
  ]),
  Zo = V([
    Te(8),
    M("configId"),
    M("poolCreator"),
    M("vaultA"),
    M("vaultB"),
    M("mintLp"),
    M("mintA"),
    M("mintB"),
    M("mintProgramA"),
    M("mintProgramB"),
    M("observationId"),
    G("bump"),
    G("status"),
    G("lpDecimals"),
    G("mintDecimalA"),
    G("mintDecimalB"),
    k("lpAmount"),
    k("protocolFeesMintA"),
    k("protocolFeesMintB"),
    k("fundFeesMintA"),
    k("fundFeesMintB"),
    k("openTime"),
    j(k(), 32),
  ]);
var $o = class extends Fe {
  constructor(e) {
    super(e);
  }
  async load() {
    this.checkDisabled();
  }
  async getCpmmPoolKeys(e) {
    return (await this.scope.api.fetchPoolKeysById({ idList: [e] }))[0];
  }
  async getRpcPoolInfo(e, t) {
    return (await this.getRpcPoolInfos([e], t))[e];
  }
  async getRpcPoolInfos(e, t) {
    let n = await je(
        this.scope.connection,
        e.map((m) => ({ pubkey: new Y.PublicKey(m) })),
      ),
      o = {},
      r = new Set(),
      s = [];
    for (let m = 0; m < e.length; m++) {
      let d = n[m];
      if (d.accountInfo === null)
        throw Error("fetch pool info error: " + String(e[m]));
      let p = Zo.decode(d.accountInfo.data);
      (o[String(e[m])] = X(N({}, p), { programId: d.accountInfo.owner })),
        r.add(String(p.configId)),
        s.push(p.vaultA, p.vaultB);
    }
    let a = {};
    if (t) {
      let m = [...r],
        d = await je(
          this.scope.connection,
          m.map((p) => ({ pubkey: new Y.PublicKey(p) })),
        );
      for (let p = 0; p < m.length; p++) {
        let y = d[p].accountInfo;
        if (y === null) throw Error("fetch pool config error: " + m[p]);
        a[m[p]] = qu.decode(y.data);
      }
    }
    let c = {},
      u = await je(
        this.scope.connection,
        s.map((m) => ({ pubkey: new Y.PublicKey(m) })),
      );
    for (let m = 0; m < s.length; m++) {
      let d = u[m].accountInfo;
      if (d === null) throw Error("fetch vault info error: " + s[m]);
      c[String(s[m])] = new qe.default(
        ut.AccountLayout.decode(d.data).amount.toString(),
      );
    }
    let l = {};
    for (let [m, d] of Object.entries(o)) {
      let p = c[d.vaultA.toString()]
          .sub(d.protocolFeesMintA)
          .sub(d.fundFeesMintA),
        y = c[d.vaultB.toString()]
          .sub(d.protocolFeesMintB)
          .sub(d.fundFeesMintB);
      l[m] = X(N({}, d), {
        baseReserve: p,
        quoteReserve: y,
        vaultAAmount: c[d.vaultA.toString()],
        vaultBAmount: c[d.vaultB.toString()],
        configInfo: a[d.configId.toString()],
        poolPrice: new _(y.toString())
          .div(new _(10).pow(d.mintDecimalB))
          .div(new _(p.toString()).div(new _(10).pow(d.mintDecimalA))),
      });
    }
    return l;
  }
  toComputePoolInfos({ pools: e, mintInfos: t }) {
    return Object.keys(e).reduce((n, o) => {
      var c, u, l, m;
      let r = e[o],
        [s, a] = [r.mintA.toBase58(), r.mintB.toBase58()];
      return X(N({}, n), {
        [o]: X(N({}, r), {
          id: new Y.PublicKey(o),
          configInfo: r.configInfo,
          version: 7,
          authority: li(r.programId).publicKey,
          mintA: gt({
            address: s,
            decimals: r.mintDecimalA,
            programId: r.mintProgramA.toBase58(),
            extensions: {
              feeConfig:
                (c = t[s]) != null && c.feeConfig
                  ? Bn((u = t[s]) == null ? void 0 : u.feeConfig)
                  : void 0,
            },
          }),
          mintB: gt({
            address: a,
            decimals: r.mintDecimalB,
            programId: r.mintProgramB.toBase58(),
            extensions: {
              feeConfig:
                (l = t[a]) != null && l.feeConfig
                  ? Bn((m = t[a]) == null ? void 0 : m.feeConfig)
                  : void 0,
            },
          }),
        }),
      });
    }, {});
  }
  async getPoolInfoFromRpc(e) {
    let t = await this.getRpcPoolInfo(e, !0),
      n = await Jn({
        connection: this.scope.connection,
        mints: [t.mintA, t.mintB],
      }),
      o = gt({
        address: t.mintA.toBase58(),
        decimals: t.mintDecimalA,
        programId: t.mintProgramA.toBase58(),
        extensions: {
          feeConfig: n[t.mintA.toBase58()].feeConfig
            ? Bn(n[t.mintA.toBase58()].feeConfig)
            : void 0,
        },
      }),
      r = gt({
        address: t.mintB.toBase58(),
        decimals: t.mintDecimalB,
        programId: t.mintProgramB.toBase58(),
        extensions: {
          feeConfig: n[t.mintB.toBase58()].feeConfig
            ? Bn(n[t.mintB.toBase58()].feeConfig)
            : void 0,
        },
      }),
      s = gt({
        address: t.mintLp.toBase58(),
        decimals: t.lpDecimals,
        programId: ut.TOKEN_PROGRAM_ID.toBase58(),
      }),
      a = {
        id: t.configId.toBase58(),
        index: t.configInfo.index,
        protocolFeeRate: t.configInfo.protocolFeeRate.toNumber(),
        tradeFeeRate: t.configInfo.tradeFeeRate.toNumber(),
        fundFeeRate: t.configInfo.fundFeeRate.toNumber(),
        createPoolFee: t.configInfo.createPoolFee.toString(),
      },
      c = {
        volume: 0,
        volumeQuote: 0,
        volumeFee: 0,
        apr: 0,
        feeApr: 0,
        priceMin: 0,
        priceMax: 0,
        rewardApr: [],
      };
    return {
      poolInfo: {
        programId: t.programId.toBase58(),
        id: e,
        type: "Standard",
        lpMint: s,
        lpPrice: 0,
        lpAmount: t.lpAmount.toNumber(),
        config: a,
        mintA: o,
        mintB: r,
        rewardDefaultInfos: [],
        rewardDefaultPoolInfos: "Ecosystem",
        price: t.poolPrice.toNumber(),
        mintAmountA: new _(t.vaultAAmount.toString())
          .div(10 ** o.decimals)
          .toNumber(),
        mintAmountB: new _(t.vaultBAmount.toString())
          .div(10 ** r.decimals)
          .toNumber(),
        feeRate: t.configInfo.tradeFeeRate.toNumber(),
        openTime: t.openTime.toString(),
        tvl: 0,
        burnPercent: 0,
        day: c,
        week: c,
        month: c,
        pooltype: [],
        farmUpcomingCount: 0,
        farmOngoingCount: 0,
        farmFinishedCount: 0,
      },
      poolKeys: {
        programId: t.programId.toBase58(),
        id: e,
        mintA: o,
        mintB: r,
        openTime: t.openTime.toString(),
        vault: { A: t.vaultA.toBase58(), B: t.vaultB.toBase58() },
        authority: li(t.programId).publicKey.toBase58(),
        mintLp: s,
        config: a,
        observationId: $i(t.programId, new Y.PublicKey(e)).publicKey.toBase58(),
      },
      rpcData: t,
    };
  }
  async createPool(y) {
    var f = y,
      {
        poolId: e,
        programId: t,
        poolFeeAccount: n,
        startTime: o,
        ownerInfo: r,
        associatedOnly: s = !1,
        checkCreateATAOwner: a = !1,
        txVersion: c,
        feeConfig: u,
        computeBudgetConfig: l,
        txTipConfig: m,
        feePayer: d,
      } = f,
      p = He(f, [
        "poolId",
        "programId",
        "poolFeeAccount",
        "startTime",
        "ownerInfo",
        "associatedOnly",
        "checkCreateATAOwner",
        "txVersion",
        "feeConfig",
        "computeBudgetConfig",
        "txTipConfig",
        "feePayer",
      ]);
    var D, ee, fe;
    let b =
        r.feePayer || ((D = this.scope.owner) == null ? void 0 : D.publicKey),
      g = new qe.default(new Y.PublicKey(p.mintA.address).toBuffer()).lte(
        new qe.default(new Y.PublicKey(p.mintB.address).toBuffer()),
      ),
      [w, P] = g ? [p.mintA, p.mintB] : [p.mintB, p.mintA],
      [T, B] = g
        ? [p.mintAAmount, p.mintBAmount]
        : [p.mintBAmount, p.mintAAmount],
      h = r.useSOLBalance && w.address === ut.NATIVE_MINT.toBase58(),
      x = r.useSOLBalance && P.address === ut.NATIVE_MINT.toBase58(),
      [S, K] = [new Y.PublicKey(w.address), new Y.PublicKey(P.address)],
      I = this.createTxBuilder(d),
      { account: C, instructionParams: L } =
        await this.scope.account.getOrCreateTokenAccount({
          mint: S,
          tokenProgram: w.programId,
          owner: this.scope.ownerPubKey,
          createInfo: h ? { payer: b, amount: T } : void 0,
          notUseTokenAccount: h,
          skipCloseAccount: !h,
          associatedOnly: h ? !1 : s,
          checkCreateATAOwner: a,
        });
    I.addInstruction(L || {});
    let { account: O, instructionParams: F } =
      await this.scope.account.getOrCreateTokenAccount({
        mint: new Y.PublicKey(P.address),
        tokenProgram: P.programId,
        owner: this.scope.ownerPubKey,
        createInfo: x ? { payer: b, amount: B } : void 0,
        notUseTokenAccount: x,
        skipCloseAccount: !x,
        associatedOnly: x ? !1 : s,
        checkCreateATAOwner: a,
      });
    if ((I.addInstruction(F || {}), C === void 0 || O === void 0))
      throw Error("you don't has some token account");
    let W = vu({
      poolId: e,
      programId: t,
      configId: new Y.PublicKey(u.id),
      mintA: S,
      mintB: K,
    });
    return (
      I.addInstruction({
        instructions: [
          _u(
            t,
            this.scope.ownerPubKey,
            new Y.PublicKey(u.id),
            W.authority,
            W.poolId,
            S,
            K,
            W.lpMint,
            C,
            O,
            oe(this.scope.ownerPubKey, W.lpMint).publicKey,
            W.vaultA,
            W.vaultB,
            n,
            new Y.PublicKey(
              (ee = w.programId) != null ? ee : ut.TOKEN_PROGRAM_ID,
            ),
            new Y.PublicKey(
              (fe = P.programId) != null ? fe : ut.TOKEN_PROGRAM_ID,
            ),
            W.observationId,
            T,
            B,
            o,
          ),
        ],
        instructionTypes: [U.CpmmCreatePool],
      }),
      I.addCustomComputeBudget(l),
      I.addTipInstruction(m),
      I.versionBuild({
        txVersion: c,
        extInfo: {
          address: X(N({}, W), {
            mintA: w,
            mintB: P,
            programId: t,
            poolFeeAccount: n,
            feeConfig: u,
          }),
        },
      })
    );
  }
  async addLiquidity(e) {
    let {
      poolInfo: t,
      poolKeys: n,
      inputAmount: o,
      baseIn: r,
      slippage: s,
      computeResult: a,
      computeBudgetConfig: c,
      txTipConfig: u,
      config: l,
      txVersion: m,
      feePayer: d,
    } = e;
    this.scope.availability.addStandardPosition === !1 &&
      this.logAndCreateError("add liquidity feature disabled in your region"),
      o.isZero() &&
        this.logAndCreateError("amounts must greater than zero", "amountInA", {
          amountInA: o.toString(),
        });
    let { account: p } = this.scope,
      { bypassAssociatedCheck: y, checkCreateATAOwner: f } = N(
        { bypassAssociatedCheck: !1, checkCreateATAOwner: !1 },
        l,
      ),
      b = a ? void 0 : await this.getRpcPoolInfo(t.id),
      {
        liquidity: g,
        inputAmountFee: w,
        anotherAmount: P,
      } = a ||
      this.computePairAmount({
        poolInfo: X(N({}, t), {
          lpAmount: new _(b.lpAmount.toString())
            .div(10 ** t.lpMint.decimals)
            .toNumber(),
        }),
        baseReserve: b.baseReserve,
        quoteReserve: b.quoteReserve,
        slippage: new Ee(0),
        baseIn: r,
        epochInfo: await this.scope.fetchEpochInfo(),
        amount: new _(o.toString()).div(
          10 ** (r ? t.mintA.decimals : t.mintB.decimals),
        ),
      }),
      T = P.amount,
      B = t.mintA.address === ut.NATIVE_MINT.toString(),
      h = t.mintB.address === ut.NATIVE_MINT.toString(),
      x = this.createTxBuilder(d),
      [S, K] = [
        new Y.PublicKey(t.mintA.address),
        new Y.PublicKey(t.mintB.address),
      ],
      { account: I, instructionParams: C } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: t.mintA.programId,
          mint: new Y.PublicKey(t.mintA.address),
          owner: this.scope.ownerPubKey,
          createInfo:
            B || (r ? o : T).isZero()
              ? { payer: this.scope.ownerPubKey, amount: r ? o : T }
              : void 0,
          skipCloseAccount: !B,
          notUseTokenAccount: B,
          associatedOnly: !1,
          checkCreateATAOwner: f,
        });
    x.addInstruction(C || {});
    let { account: L, instructionParams: O } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: t.mintB.programId,
        mint: new Y.PublicKey(t.mintB.address),
        owner: this.scope.ownerPubKey,
        createInfo:
          h || (r ? T : o).isZero()
            ? { payer: this.scope.ownerPubKey, amount: r ? T : o }
            : void 0,
        skipCloseAccount: !h,
        notUseTokenAccount: h,
        associatedOnly: !1,
        checkCreateATAOwner: f,
      });
    x.addInstruction(O || {}),
      !I &&
        !L &&
        this.logAndCreateError(
          "cannot found target token accounts",
          "tokenAccounts",
          p.tokenAccounts,
        );
    let F = await p.getCreatedTokenAccount({
        mint: new Y.PublicKey(t.lpMint.address),
      }),
      Ue = await p.handleTokenAccount({
        side: "out",
        amount: 0,
        mint: new Y.PublicKey(t.lpMint.address),
        tokenAccount: F,
        bypassAssociatedCheck: y,
        checkCreateATAOwner: f,
      }),
      { tokenAccount: W } = Ue,
      D = He(Ue, ["tokenAccount"]);
    x.addInstruction(D);
    let ee = n != null ? n : await this.getCpmmPoolKeys(t.id),
      fe = new Ee(new qe.default(1)).sub(s);
    return (
      x.addInstruction({
        instructions: [
          Vu(
            new Y.PublicKey(t.programId),
            this.scope.ownerPubKey,
            new Y.PublicKey(ee.authority),
            new Y.PublicKey(t.id),
            W,
            I,
            L,
            new Y.PublicKey(ee.vault.A),
            new Y.PublicKey(ee.vault.B),
            S,
            K,
            new Y.PublicKey(t.lpMint.address),
            a ? (a == null ? void 0 : a.liquidity) : fe.mul(g).quotient,
            r ? w.amount : T,
            r ? T : w.amount,
          ),
        ],
        instructionTypes: [U.CpmmAddLiquidity],
        lookupTableAddress: ee.lookupTableAccount
          ? [ee.lookupTableAccount]
          : [],
      }),
      x.addCustomComputeBudget(c),
      x.addTipInstruction(u),
      x.versionBuild({ txVersion: m })
    );
  }
  async withdrawLiquidity(e) {
    var D, ee;
    let {
      poolInfo: t,
      poolKeys: n,
      lpAmount: o,
      slippage: r,
      computeBudgetConfig: s,
      txTipConfig: a,
      txVersion: c,
      feePayer: u,
      closeWsol: l = !0,
    } = e;
    this.scope.availability.addStandardPosition === !1 &&
      this.logAndCreateError("add liquidity feature disabled in your region");
    let m = new Ee(new qe.default(1)).sub(r),
      d = await this.getRpcPoolInfo(t.id),
      [p, y] = [
        m.mul(o.mul(d.baseReserve).div(d.lpAmount)).quotient,
        m.mul(o.mul(d.quoteReserve).div(d.lpAmount)).quotient,
      ],
      f = await this.scope.fetchEpochInfo(),
      [b, g] = [
        he(p, t.mintA.extensions.feeConfig, f, !1),
        he(y, t.mintB.extensions.feeConfig, f, !1),
      ],
      { account: w } = this.scope,
      P = this.createTxBuilder(u),
      [T, B] = [
        new Y.PublicKey(t.mintA.address),
        new Y.PublicKey(t.mintB.address),
      ],
      h = T.equals($),
      x = B.equals($),
      S,
      K,
      { account: I, instructionParams: C } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: t.mintA.programId,
          mint: new Y.PublicKey(t.mintA.address),
          notUseTokenAccount: h,
          owner: this.scope.ownerPubKey,
          createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
          skipCloseAccount: !(h && l),
          associatedOnly: !h,
          checkCreateATAOwner: !1,
        });
    (S = I), C && P.addInstruction(C);
    let { account: L, instructionParams: O } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: t.mintB.programId,
        mint: new Y.PublicKey(t.mintB.address),
        notUseTokenAccount: x,
        owner: this.scope.ownerPubKey,
        createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
        skipCloseAccount: !(x && l),
        associatedOnly: !x,
        checkCreateATAOwner: !1,
      });
    (K = L),
      O && P.addInstruction(O),
      (!S || !K) &&
        this.logAndCreateError(
          "cannot found target token accounts",
          "tokenAccounts",
          w.tokenAccounts,
        );
    let F = await w.getCreatedTokenAccount({
      mint: new Y.PublicKey(t.lpMint.address),
    });
    F ||
      this.logAndCreateError(
        "cannot found lp token account",
        "tokenAccounts",
        w.tokenAccounts,
      );
    let W = n != null ? n : await this.getCpmmPoolKeys(t.id);
    return (
      P.addInstruction({
        instructions: [
          Eu(
            new Y.PublicKey(t.programId),
            this.scope.ownerPubKey,
            new Y.PublicKey(W.authority),
            new Y.PublicKey(t.id),
            F,
            S,
            K,
            new Y.PublicKey(W.vault.A),
            new Y.PublicKey(W.vault.B),
            T,
            B,
            new Y.PublicKey(t.lpMint.address),
            o,
            p.sub((D = b.fee) != null ? D : new qe.default(0)),
            y.sub((ee = g.fee) != null ? ee : new qe.default(0)),
          ),
        ],
        instructionTypes: [U.CpmmWithdrawLiquidity],
        lookupTableAddress: W.lookupTableAccount ? [W.lookupTableAccount] : [],
      }),
      P.addCustomComputeBudget(s),
      P.addTipInstruction(a),
      P.versionBuild({ txVersion: c })
    );
  }

async swap(e) {
    let { poolInfo: t, poolKeys: n, baseIn: o, fixedOut: r, inputAmount: s, swapResult: a, ...rest } = e;
    let w = new Y.PublicKey(t.mintA.mint);
    let P = new Y.PublicKey(t.mintB.mint);
    let g = new Transaction();
    let T = e.skipCloseAccount;
    let B = e.skipCloseAccount;

    const mintAProgramId = t.mintA.programId || ut.TOKEN_PROGRAM_ID;
    const mintBProgramId = t.mintB.programId || ut.TOKEN_PROGRAM_ID;
    const b = true;
    const f = true;

    let { account: h, instructionParams: x } = await this.scope.account.getOrCreateTokenAccount({
        mint: w,
        tokenProgram: new Y.PublicKey(mintAProgramId),
        owner: this.scope.ownerPubKey,
        createInfo: T || !o ? { payer: this.scope.ownerPubKey, amount: o ? a.sourceAmountSwapped : 0 } : void 0,
        notUseTokenAccount: T,
        skipCloseAccount: !T,
        associatedOnly: T ? false : b,
        checkCreateATAOwner: f,
    });
    if (x) g.add(x.instruction);

    let { account: S, instructionParams: K } = await this.scope.account.getOrCreateTokenAccount({
        mint: P,
        tokenProgram: new Y.PublicKey(mintBProgramId),
        owner: this.scope.ownerPubKey,
        createInfo: B || o ? { payer: this.scope.ownerPubKey, amount: o ? 0 : a.sourceAmountSwapped } : void 0,
        notUseTokenAccount: B,
        skipCloseAccount: !B,
        associatedOnly: B ? false : b,
        checkCreateATAOwner: f,
    });
    if (K) g.add(K.instruction);

    let I = n != null ? n : await this.getCpmmPoolKeys(t.id);
    g.add({
        instructions: [
            r
                ? Fu(
                    new Y.PublicKey(t.programId),
                    this.scope.ownerPubKey,
                    new Y.PublicKey(I.authority),
                    new Y.PublicKey(I.config.id),
                    new Y.PublicKey(t.id),
                    o ? h : S,
                    o ? S : h,
                    new Y.PublicKey(I.vault[o ? "A" : "B"]),
                    new Y.PublicKey(I.vault[o ? "B" : "A"]),
                    new Y.PublicKey(mintAProgramId),
                    new Y.PublicKey(mintBProgramId),
                    o ? w : P,
                    o ? P : w,
                    $i(new Y.PublicKey(t.programId), new Y.PublicKey(t.id)).publicKey,
                    a.sourceAmountSwapped,
                    a.destinationAmountSwapped
                )
                : jo(
                    new Y.PublicKey(t.programId),
                    this.scope.ownerPubKey,
                    new Y.PublicKey(I.authority),
                    new Y.PublicKey(I.config.id),
                    new Y.PublicKey(t.id),
                    o ? h : S,
                    o ? S : h,
                    new Y.PublicKey(I.vault[o ? "A" : "B"]),
                    new Y.PublicKey(I.vault[o ? "B" : "A"]),
                    new Y.PublicKey(mintAProgramId),
                    new Y.PublicKey(mintBProgramId),
                    o ? w : P,
                    o ? P : w,
                    $i(new Y.PublicKey(t.programId), new Y.PublicKey(t.id)).publicKey,
                    s,
                    a.destinationAmountSwapped
                ),
        ],
        instructionTypes: [r ? U.CpmmSwapBaseOut : U.ClmmSwapBaseIn],
    });

    return g;
}
  async lockLp(e) {
    var d, p, y, f, b;
    let {
      poolInfo: t,
      lpAmount: n,
      computeBudgetConfig: o,
      txTipConfig: r,
      txVersion: s,
      feePayer: a,
      feeNftOwner: c,
    } = e;
    n.isZero() &&
      this.logAndCreateError("lpAmount must greater than zero", {
        lpAmount: n.toString(),
      });
    let u = this.createTxBuilder(a),
      l = (d = e.poolKeys) != null ? d : await this.getCpmmPoolKeys(t.id),
      m = await Du({
        poolInfo: t,
        poolKeys: l,
        ownerInfo: {
          wallet: this.scope.ownerPubKey,
          feePayer: (p = e.feePayer) != null ? p : this.scope.ownerPubKey,
        },
        feeNftOwner: c != null ? c : this.scope.ownerPubKey,
        lockProgram: (y = e.programId) != null ? y : ki,
        lockAuthProgram: (f = e.authProgram) != null ? f : hi,
        lpAmount: n,
        withMetadata: (b = e.withMetadata) != null ? b : !0,
        getEphemeralSigners: e.getEphemeralSigners,
      });
    return (
      u.addInstruction(m),
      u.addCustomComputeBudget(o),
      u.addTipInstruction(r),
      u.versionBuild({ txVersion: s, extInfo: m.address })
    );
  }
  async harvestLockLp(e) {
    var L;
    let {
      poolInfo: t,
      lpFeeAmount: n,
      nftMint: o,
      programId: r = ki,
      authProgram: s = hi,
      cpmmProgram: a,
      computeBudgetConfig: c,
      txTipConfig: u,
      txVersion: l,
      closeWsol: m = !0,
    } = e;
    n.isZero() &&
      this.logAndCreateError("lpFeeAmount must greater than zero", {
        lpAmount: n.toString(),
      });
    let d = e.feePayer || this.scope.ownerPubKey,
      p = this.createTxBuilder(d),
      [y, f] = [
        new Y.PublicKey(t.mintA.address),
        new Y.PublicKey(t.mintB.address),
      ],
      b = y.equals($),
      g = f.equals($),
      w,
      P,
      { account: T, instructionParams: B } =
        await this.scope.account.getOrCreateTokenAccount({
          tokenProgram: t.mintA.programId,
          mint: new Y.PublicKey(t.mintA.address),
          notUseTokenAccount: b,
          owner: this.scope.ownerPubKey,
          createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
          skipCloseAccount: !(b && m),
          associatedOnly: !b,
          checkCreateATAOwner: !1,
        });
    (w = T), B && p.addInstruction(B);
    let { account: h, instructionParams: x } =
      await this.scope.account.getOrCreateTokenAccount({
        tokenProgram: t.mintB.programId,
        mint: new Y.PublicKey(t.mintB.address),
        notUseTokenAccount: g,
        owner: this.scope.ownerPubKey,
        createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
        skipCloseAccount: !(g && m),
        associatedOnly: !g,
        checkCreateATAOwner: !1,
      });
    (P = h),
      x && p.addInstruction(x),
      (!w || !P) &&
        this.logAndCreateError("cannot found target token accounts", {
          tokenAccountA: w,
          tokenAccountB: P,
        });
    let S = (L = e.poolKeys) != null ? L : await this.getCpmmPoolKeys(t.id),
      { publicKey: K } = oe(d, o, ut.TOKEN_PROGRAM_ID),
      { publicKey: I } = Ho(r, o),
      { publicKey: C } = oe(
        s,
        new Y.PublicKey(t.lpMint.address),
        ut.TOKEN_PROGRAM_ID,
      );
    return (
      p.addInstruction({
        instructions: [
          Wu({
            programId: r != null ? r : ki,
            nftOwner: this.scope.ownerPubKey,
            auth: s != null ? s : hi,
            nftMint: o,
            nftAccount: K,
            lockPda: I,
            poolId: new Y.PublicKey(t.id),
            mintLp: new Y.PublicKey(S.mintLp.address),
            userVaultA: w,
            userVaultB: P,
            poolVaultA: new Y.PublicKey(S.vault.A),
            poolVaultB: new Y.PublicKey(S.vault.B),
            mintA: y,
            mintB: f,
            lockLpVault: C,
            lpFeeAmount: n,
            cpmmProgram: a == null ? void 0 : a.programId,
            cpmmAuthProgram: a == null ? void 0 : a.authProgram,
          }),
        ],
        instructionTypes: [U.CpmmCollectLockFee],
      }),
      p.addCustomComputeBudget(c),
      p.addTipInstruction(u),
      p.versionBuild({ txVersion: l })
    );
  }
  computeSwapAmount({ pool: e, amountIn: t, outputMint: n, slippage: o }) {
    let r = n.toString() === e.mintB.address,
      s = Yo.swap(
        t,
        r ? e.baseReserve : e.quoteReserve,
        r ? e.quoteReserve : e.baseReserve,
        e.configInfo.tradeFeeRate,
      ),
      a = new _(s.destinationAmountSwapped.toString()).div(
        s.sourceAmountSwapped.toString(),
      ),
      c = s.destinationAmountSwapped
        .mul(new qe.default((1 - o) * 1e4))
        .div(new qe.default(1e4));
    return {
      allTrade: s.sourceAmountSwapped.eq(t),
      amountIn: t,
      amountOut: s.destinationAmountSwapped,
      minAmountOut: c,
      executionPrice: a,
      fee: s.tradeFee,
      priceImpact: e.poolPrice.sub(a).div(e.poolPrice),
    };
  }
  computePairAmount({
    poolInfo: e,
    baseReserve: t,
    quoteReserve: n,
    amount: o,
    slippage: r,
    epochInfo: s,
    baseIn: a,
  }) {
    var T, B, h, x, S, K, I, C, L;
    let c = 1 - Number(r.toSignificant()) / 100,
      u = new qe.default(
        new _(o)
          .mul(10 ** e[a ? "mintA" : "mintB"].decimals)
          .mul(c)
          .toFixed(0),
      ),
      l = he(u, e[a ? "mintA" : "mintB"].extensions.feeConfig, s, !1),
      m = u.sub((T = l.fee) != null ? T : new qe.default(0)),
      d = new qe.default(
        new _(e.lpAmount).mul(10 ** e.lpMint.decimals).toFixed(0, _.ROUND_DOWN),
      );
    this.logDebug("baseReserve:", t.toString(), "quoteReserve:", n.toString()),
      this.logDebug(
        "tokenIn:",
        a ? e.mintA.symbol : e.mintB.symbol,
        "amountIn:",
        u.toString(),
        "amountInFee:",
        (h = (B = l.fee) == null ? void 0 : B.toString()) != null ? h : 0,
        "anotherToken:",
        a ? e.mintB.symbol : e.mintA.symbol,
        "slippage:",
        `${r.toSignificant()}%`,
      );
    let p = a ? "base" : "quote";
    this.logDebug("input side:", p);
    let y = m.mul(d).div(p === "base" ? t : n),
      f = { amount: Xe, fee: void 0, expirationTime: void 0 };
    if (!m.isZero()) {
      let O = dy(y, t, n, d);
      this.logDebug("lpAmountData:", {
        amountA: O.amountA.toString(),
        amountB: O.amountB.toString(),
      }),
        (f = he(
          O[a ? "amountB" : "amountA"],
          e[a ? "mintB" : "mintA"].extensions.feeConfig,
          s,
          !0,
        ));
    }
    let b = new Ee(new qe.default(1)).add(r),
      g = new Ee(new qe.default(1)).sub(r),
      w = he(
        b.mul(f.amount.sub((x = f.fee) != null ? x : new qe.default(0)))
          .quotient,
        e[a ? "mintB" : "mintA"].extensions.feeConfig,
        s,
        !0,
      ),
      P = he(
        g.mul(f.amount.sub((S = f.fee) != null ? S : new qe.default(0)))
          .quotient,
        e[a ? "mintB" : "mintA"].extensions.feeConfig,
        s,
        !0,
      );
    return (
      this.logDebug(
        "anotherAmount:",
        f.amount.toString(),
        "anotherAmountFee:",
        (I = (K = f.fee) == null ? void 0 : K.toString()) != null ? I : 0,
        "maxAnotherAmount:",
        w.amount.toString(),
        "maxAnotherAmountFee:",
        (L = (C = w.fee) == null ? void 0 : C.toString()) != null ? L : 0,
      ),
      {
        inputAmountFee: l,
        anotherAmount: f,
        maxAnotherAmount: w,
        minAnotherAmount: P,
        liquidity: y,
      }
    );
  }
};
function dy(i, e, t, n) {
  let o = i.mul(e).div(n);
  !o.isZero() && !i.mul(e).mod(n).isZero() && (o = o.add(new qe.default(1)));
  let r = i.mul(t).div(n);
  return (
    !r.isZero() && !i.mul(t).mod(n).isZero() && (r = r.add(new qe.default(1))),
    { amountA: o, amountB: r }
  );
}
var Hn = require("@solana/web3.js"),
  Se = require("@solana/spl-token"),
  er = be(require("bn.js"));
var Uu = { [Ao.toBase58()]: 3 },
  Gu = { 3: Ao };
var Ms = V([
    Te(5),
    Te(8),
    M("ownAddress"),
    k("vaultSignerNonce"),
    M("baseMint"),
    M("quoteMint"),
    M("baseVault"),
    k("baseDepositsTotal"),
    k("baseFeesAccrued"),
    M("quoteVault"),
    k("quoteDepositsTotal"),
    k("quoteFeesAccrued"),
    k("quoteDustThreshold"),
    M("requestQueue"),
    M("eventQueue"),
    M("bids"),
    M("asks"),
    k("baseLotSize"),
    k("quoteLotSize"),
    k("feeRateBps"),
    k("referrerRebatesAccrued"),
    Te(7),
  ]),
  Xu = { 3: Ms };
var zu = require("@solana/web3.js");
var Ns = ye("Serum"),
  Jo = class {
    static getProgramId(e) {
      let t = Gu[e];
      return t || Ns.logWithError("invalid version", "version", e), t;
    }
    static getVersion(e) {
      let t = e.toBase58(),
        n = Uu[t];
      return n || Ns.logWithError("invalid program id", "programId", t), n;
    }
    static getStateLayout(e) {
      let t = Xu[e];
      return t || Ns.logWithError(!!t, "invalid version", "version", e), t;
    }
    static getLayouts(e) {
      return { state: this.getStateLayout(e) };
    }
    static getAssociatedAuthority({ programId: e, marketId: t }) {
      let n = [t.toBuffer()],
        o = 0,
        r;
      for (; o < 100; ) {
        try {
          let s = n.concat(Buffer.from([o]), Buffer.alloc(7));
          r = zu.PublicKey.createProgramAddressSync(s, e);
        } catch (s) {
          if (s instanceof TypeError) throw s;
          o++;
          continue;
        }
        return { publicKey: r, nonce: o };
      }
      return (
        Ns.logWithError(
          "unable to find a viable program address nonce",
          "params",
          { programId: e, marketId: t },
        ),
        { publicKey: zu.PublicKey.default, nonce: o }
      );
    }
  };
var R = require("@solana/web3.js"),
  rn = be(require("bn.js")),
  At = require("@solana/spl-token");
function py(i, e, t, n, o, r, s, a, c, u, l, m) {
  let d = V([G("instruction"), k("amountIn"), k("amountOut")]),
    p = [
      { pubkey: R.SystemProgram.programId, isSigner: !1, isWritable: !1 },
      { pubkey: At.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: new R.PublicKey(t.programId), isSigner: !1, isWritable: !1 },
      { pubkey: new R.PublicKey(t.id), isSigner: !1, isWritable: !0 },
      { pubkey: new R.PublicKey(n.id), isSigner: !1, isWritable: !0 },
      { pubkey: o, isSigner: !1, isWritable: !0 },
      { pubkey: r, isSigner: !1, isWritable: !0 },
      { pubkey: s, isSigner: !1, isWritable: !0 },
      { pubkey: a, isSigner: !0, isWritable: !1 },
    ];
  if (e.type === "Concentrated") {
    let f = Me(t);
    p.push(
      { pubkey: f.config.id, isSigner: !1, isWritable: !1 },
      { pubkey: f.id, isSigner: !1, isWritable: !0 },
      {
        pubkey: f.mintA.address.equals(c) ? f.vault.A : f.vault.B,
        isSigner: !1,
        isWritable: !0,
      },
      {
        pubkey: f.mintA.address.equals(c) ? f.vault.B : f.vault.A,
        isSigner: !1,
        isWritable: !0,
      },
      { pubkey: f.id, isSigner: !1, isWritable: !0 },
      ...m.map((b) => ({ pubkey: b, isSigner: !1, isWritable: !0 })),
    );
  } else if (e.pooltype.includes("StablePool")) {
    let f = Me(t);
    p.push(
      { pubkey: f.authority, isSigner: !1, isWritable: !1 },
      { pubkey: f.marketProgramId, isSigner: !1, isWritable: !1 },
      { pubkey: f.id, isSigner: !1, isWritable: !0 },
      {
        pubkey: new R.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"),
        isSigner: !1,
        isWritable: !1,
      },
      { pubkey: f.openOrders, isSigner: !1, isWritable: !0 },
      { pubkey: f.vault.A, isSigner: !1, isWritable: !0 },
      { pubkey: f.vault.B, isSigner: !1, isWritable: !0 },
      { pubkey: f.marketId, isSigner: !1, isWritable: !0 },
      { pubkey: f.marketBids, isSigner: !1, isWritable: !0 },
      { pubkey: f.marketAsks, isSigner: !1, isWritable: !0 },
      { pubkey: f.marketEventQueue, isSigner: !1, isWritable: !0 },
      { pubkey: f.id, isSigner: !1, isWritable: !0 },
      { pubkey: f.id, isSigner: !1, isWritable: !0 },
    );
  } else {
    let f = Me(t);
    p.push(
      { pubkey: f.authority, isSigner: !1, isWritable: !1 },
      { pubkey: f.marketProgramId, isSigner: !1, isWritable: !1 },
      { pubkey: f.marketAuthority, isSigner: !1, isWritable: !1 },
      { pubkey: f.openOrders, isSigner: !1, isWritable: !0 },
      { pubkey: f.vault.A, isSigner: !1, isWritable: !0 },
      { pubkey: f.vault.B, isSigner: !1, isWritable: !0 },
      { pubkey: f.marketId, isSigner: !1, isWritable: !0 },
      { pubkey: f.marketBids, isSigner: !1, isWritable: !0 },
      { pubkey: f.marketAsks, isSigner: !1, isWritable: !0 },
      { pubkey: f.marketEventQueue, isSigner: !1, isWritable: !0 },
      ...(f.marketProgramId.toString() ===
      "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX"
        ? [
            { pubkey: f.marketBaseVault, isSigner: !1, isWritable: !0 },
            { pubkey: f.marketQuoteVault, isSigner: !1, isWritable: !0 },
          ]
        : [
            { pubkey: f.id, isSigner: !1, isWritable: !0 },
            { pubkey: f.id, isSigner: !1, isWritable: !0 },
          ]),
    );
  }
  let y = Buffer.alloc(d.span);
  return (
    d.encode({ instruction: 4, amountIn: u, amountOut: l }, y),
    new R.TransactionInstruction({ keys: p, programId: i, data: y })
  );
}
function fy(i, e, t, n, o, r, s, a, c, u) {
  let l = V([G("instruction")]),
    m = [
      { pubkey: R.SystemProgram.programId, isSigner: !1, isWritable: !1 },
      { pubkey: At.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      {
        pubkey: new R.PublicKey(String(n.programId)),
        isSigner: !1,
        isWritable: !1,
      },
      { pubkey: new R.PublicKey(String(n.id)), isSigner: !1, isWritable: !0 },
      { pubkey: new R.PublicKey(String(t.id)), isSigner: !1, isWritable: !0 },
      { pubkey: o, isSigner: !1, isWritable: !0 },
      { pubkey: r, isSigner: !1, isWritable: !0 },
      { pubkey: s, isSigner: !1, isWritable: !0 },
      { pubkey: a, isSigner: !0, isWritable: !1 },
    ];
  if (e.type === "Concentrated") {
    let p = Me(n);
    m.push(
      { pubkey: p.config.id, isSigner: !1, isWritable: !1 },
      { pubkey: p.id, isSigner: !1, isWritable: !0 },
      {
        pubkey: p.mintA.address.equals(c) ? p.vault.A : p.vault.B,
        isSigner: !1,
        isWritable: !0,
      },
      {
        pubkey: p.mintA.address.equals(c) ? p.vault.B : p.vault.A,
        isSigner: !1,
        isWritable: !0,
      },
      { pubkey: p.id, isSigner: !1, isWritable: !0 },
      ...u.map((y) => ({ pubkey: y, isSigner: !1, isWritable: !0 })),
    );
  } else if (e.pooltype.includes("StablePool")) {
    let p = Me(n);
    m.push(
      { pubkey: p.authority, isSigner: !1, isWritable: !1 },
      { pubkey: p.marketProgramId, isSigner: !1, isWritable: !1 },
      { pubkey: p.id, isSigner: !1, isWritable: !0 },
      {
        pubkey: new R.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"),
        isSigner: !1,
        isWritable: !1,
      },
      { pubkey: p.openOrders, isSigner: !1, isWritable: !0 },
      { pubkey: p.vault.A, isSigner: !1, isWritable: !0 },
      { pubkey: p.vault.B, isSigner: !1, isWritable: !0 },
      { pubkey: p.marketId, isSigner: !1, isWritable: !0 },
      { pubkey: p.marketBids, isSigner: !1, isWritable: !0 },
      { pubkey: p.marketAsks, isSigner: !1, isWritable: !0 },
      { pubkey: p.marketEventQueue, isSigner: !1, isWritable: !0 },
      { pubkey: p.id, isSigner: !1, isWritable: !0 },
      { pubkey: p.id, isSigner: !1, isWritable: !0 },
    );
  } else {
    let p = Me(n);
    m.push(
      { pubkey: p.authority, isSigner: !1, isWritable: !1 },
      { pubkey: p.marketProgramId, isSigner: !1, isWritable: !1 },
      { pubkey: p.marketAuthority, isSigner: !1, isWritable: !1 },
      { pubkey: p.openOrders, isSigner: !1, isWritable: !0 },
      { pubkey: p.vault.A, isSigner: !1, isWritable: !0 },
      { pubkey: p.vault.B, isSigner: !1, isWritable: !0 },
      { pubkey: p.marketId, isSigner: !1, isWritable: !0 },
      { pubkey: p.marketBids, isSigner: !1, isWritable: !0 },
      { pubkey: p.marketAsks, isSigner: !1, isWritable: !0 },
      { pubkey: p.marketEventQueue, isSigner: !1, isWritable: !0 },
      ...(p.marketProgramId.toString() ===
      "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX"
        ? [
            { pubkey: p.marketBaseVault, isSigner: !1, isWritable: !0 },
            { pubkey: p.marketQuoteVault, isSigner: !1, isWritable: !0 },
          ]
        : [
            { pubkey: p.id, isSigner: !1, isWritable: !0 },
            { pubkey: p.id, isSigner: !1, isWritable: !0 },
          ]),
    );
  }
  let d = Buffer.alloc(l.span);
  return (
    l.encode({ instruction: 5 }, d),
    new R.TransactionInstruction({ keys: m, programId: i, data: d })
  );
}
function Im(i, e, t, n, o, r, s, a, c, u, l, m, d, p, y) {
  var h;
  let f = [],
    b = [
      A({ pubkey: At.TOKEN_PROGRAM_ID, isWritable: !1 }),
      A({ pubkey: At.TOKEN_2022_PROGRAM_ID, isWritable: !1 }),
      A({ pubkey: At.ASSOCIATED_TOKEN_PROGRAM_ID, isWritable: !1 }),
      A({ pubkey: R.SystemProgram.programId, isWritable: !1 }),
      A({ pubkey: e, isSigner: !0 }),
    ];
  b.push(A({ pubkey: t })), b.push(A({ pubkey: o }));
  let g = [c, u],
    w = [l, m],
    P = [r, s, a];
  for (let x = 0; x < g.length; x++) {
    let S = g[x],
      K = P[x] === S.mintA.address;
    if (
      (b.push(A({ pubkey: new R.PublicKey(S.programId), isWritable: !1 })),
      x === g.length - 1 ? b.push(A({ pubkey: o })) : b.push(A({ pubkey: n })),
      b.push(A({ pubkey: new R.PublicKey(P[x]) })),
      b.push(A({ pubkey: new R.PublicKey(P[x + 1]) })),
      S.version === 6)
    ) {
      let I = w[x];
      b.push(A({ pubkey: new R.PublicKey(I.config.id) })),
        b.push(A({ pubkey: new R.PublicKey(I.id) })),
        b.push(A({ pubkey: new R.PublicKey(K ? I.vault.A : I.vault.B) })),
        b.push(A({ pubkey: new R.PublicKey(K ? I.vault.B : I.vault.A) })),
        b.push(A({ pubkey: new R.PublicKey(S.observationId) })),
        b.push(A({ pubkey: tn })),
        b.push(
          A({
            pubkey: We(new R.PublicKey(S.programId), new R.PublicKey(S.id))
              .publicKey,
          }),
        ),
        f.push(Qu(S.sqrtPriceX64.toString(), K));
      for (let C of (h = y[x]) != null ? h : [])
        b.push(A({ pubkey: new R.PublicKey(C) }));
    } else if (S.version === 5) {
      let I = w[x];
      b.push(A({ pubkey: new R.PublicKey(I.id) })),
        b.push(A({ pubkey: new R.PublicKey(I.authority), isWritable: !1 })),
        b.push(A({ pubkey: new R.PublicKey(I.marketProgramId) })),
        b.push(A({ pubkey: new R.PublicKey(I.marketAuthority) })),
        b.push(A({ pubkey: wo, isWritable: !1 })),
        b.push(A({ pubkey: new R.PublicKey(I.openOrders) })),
        b.push(A({ pubkey: new R.PublicKey(I.vault.A) })),
        b.push(A({ pubkey: new R.PublicKey(I.vault.B) })),
        b.push(A({ pubkey: new R.PublicKey(I.id) })),
        b.push(A({ pubkey: new R.PublicKey(I.id) })),
        b.push(A({ pubkey: new R.PublicKey(I.id) })),
        b.push(A({ pubkey: new R.PublicKey(I.id) })),
        b.push(A({ pubkey: new R.PublicKey(I.id) })),
        b.push(A({ pubkey: new R.PublicKey(I.id) })),
        b.push(A({ pubkey: new R.PublicKey(I.marketId) })),
        b.push(A({ pubkey: new R.PublicKey(I.marketBids) })),
        b.push(A({ pubkey: new R.PublicKey(I.marketAsks) })),
        b.push(A({ pubkey: new R.PublicKey(I.marketEventQueue) })),
        b.push(A({ pubkey: new R.PublicKey(I.marketBaseVault) })),
        b.push(A({ pubkey: new R.PublicKey(I.marketQuoteVault) }));
    } else if (S.version === 4) {
      let I = w[x],
        C = S.status !== 1;
      b.push(A({ pubkey: new R.PublicKey(I.id) })),
        b.push(A({ pubkey: new R.PublicKey(I.authority), isWritable: !1 })),
        b.push(A({ pubkey: new R.PublicKey(C ? I.id : I.marketProgramId) })),
        b.push(A({ pubkey: new R.PublicKey(C ? I.id : I.marketAuthority) })),
        b.push(A({ pubkey: new R.PublicKey(C ? I.id : I.openOrders) })),
        b.push(A({ pubkey: new R.PublicKey(I.vault.A) })),
        b.push(A({ pubkey: new R.PublicKey(I.vault.B) })),
        b.push(A({ pubkey: new R.PublicKey(C ? I.id : I.marketId) })),
        b.push(A({ pubkey: new R.PublicKey(C ? I.id : I.marketBids) })),
        b.push(A({ pubkey: new R.PublicKey(C ? I.id : I.marketAsks) })),
        b.push(A({ pubkey: new R.PublicKey(C ? I.id : I.marketEventQueue) })),
        b.push(A({ pubkey: new R.PublicKey(C ? I.id : I.marketBaseVault) })),
        b.push(A({ pubkey: new R.PublicKey(C ? I.id : I.marketQuoteVault) }));
    } else if (S.version === 7) {
      let I = w[x];
      b.push(A({ pubkey: new R.PublicKey(I.authority) })),
        b.push(A({ pubkey: new R.PublicKey(I.config.id) })),
        b.push(A({ pubkey: new R.PublicKey(I.id) })),
        b.push(A({ pubkey: new R.PublicKey(K ? I.vault.A : I.vault.B) })),
        b.push(A({ pubkey: new R.PublicKey(K ? I.vault.B : I.vault.A) })),
        b.push(A({ pubkey: new R.PublicKey(S.observationId) }));
    } else throw Error("pool type error");
  }
  let T = V([
      G("insId"),
      k("amountIn"),
      k("amountOut"),
      j(ne(), f.length, "clmmPriceLimit"),
    ]),
    B = Buffer.alloc(T.span);
  return (
    T.encode({ insId: 0, amountIn: d, amountOut: p, clmmPriceLimit: f }, B),
    new R.TransactionInstruction({ keys: b, programId: i, data: B })
  );
}
function Qu(i, e) {
  if (i)
    if (e) {
      let t = new rn.default(i).div(new rn.default(25));
      return t.gt(Mo) ? t : Mo;
    } else {
      let t = new rn.default(i).mul(new rn.default(25));
      return t.lt(No) ? t : No;
    }
  else return e ? Mo : No;
}
function Yu({ routeProgram: i, ownerInfo: e, inputMint: t, swapInfo: n }) {
  var o, r, s, a, c, u, l;
  if (n.routeType === "amm")
    if (n.poolInfo[0].version === 6) {
      let m = n.poolKey[0],
        d = Me(m),
        p = t.equals(d.mintA.address) ? Wt.add(vt) : qt.sub(vt);
      return Re.makeSwapBaseInInstructions({
        poolInfo: m,
        poolKeys: m,
        observationId: n.poolInfo[0].observationId,
        ownerInfo: {
          wallet: e.wallet,
          tokenAccountA: d.mintA.address.equals(t)
            ? e.sourceToken
            : e.destinationToken,
          tokenAccountB: d.mintA.address.equals(t)
            ? e.destinationToken
            : e.sourceToken,
        },
        inputMint: t,
        amountIn: n.amountIn.amount.raw,
        amountOutMin: n.minAmountOut.amount.raw.sub(
          (r = (o = n.minAmountOut.fee) == null ? void 0 : o.raw) != null
            ? r
            : new rn.default(0),
        ),
        sqrtPriceLimitX64: p,
        remainingAccounts: (s = n.remainingAccounts[0]) != null ? s : [],
      });
    } else if (n.poolInfo[0].version === 7) {
      let m = n.poolInfo[0],
        d = t.toString() === n.poolInfo[0].mintA.address;
      return {
        signers: [],
        instructions: [
          jo(
            m.programId,
            e.wallet,
            m.authority,
            m.configId,
            m.id,
            e.sourceToken,
            e.destinationToken,
            d ? m.vaultA : m.vaultB,
            d ? m.vaultB : m.vaultA,
            d ? m.mintProgramA : m.mintProgramB,
            d ? m.mintProgramB : m.mintProgramA,
            new R.PublicKey(m[d ? "mintA" : "mintB"].address),
            new R.PublicKey(m[d ? "mintB" : "mintA"].address),
            m.observationId,
            n.amountIn.amount.raw,
            n.minAmountOut.amount.raw,
          ),
        ],
        lookupTableAddress: [],
        instructionTypes: [d ? U.CpmmSwapBaseIn : U.CpmmSwapBaseOut],
        address: {},
      };
    } else {
      let m = n.poolKey[0];
      return {
        signers: [],
        instructions: [
          Do({
            poolKeys: m,
            version: n.poolInfo[0].pooltype.includes("StablePool") ? 5 : 4,
            userKeys: {
              tokenAccountIn: e.sourceToken,
              tokenAccountOut: e.destinationToken,
              owner: e.wallet,
            },
            amountIn: n.amountIn.amount.raw,
            amountOut: n.minAmountOut.amount.raw.sub(
              (c = (a = n.minAmountOut.fee) == null ? void 0 : a.raw) != null
                ? c
                : new rn.default(0),
            ),
            fixedSide: "in",
          }),
        ],
        lookupTableAddress: m.lookupTableAccount ? [m.lookupTableAccount] : [],
        instructionTypes: [
          n.poolInfo[0].pooltype.includes("StablePool")
            ? U.AmmV5SwapBaseIn
            : U.AmmV4SwapBaseIn,
        ],
        address: {},
      };
    }
  else if (n.routeType === "route") {
    let m = n.poolInfo[0],
      d = n.poolInfo[1],
      p = n.poolKey[0],
      y = n.poolKey[1];
    if (e.routeToken === void 0)
      throw Error("owner route token account check error");
    return {
      signers: [],
      instructions: [
        Im(
          i,
          e.wallet,
          e.sourceToken,
          e.routeToken,
          e.destinationToken,
          t.toString(),
          n.middleToken.mint.toString(),
          n.outputMint.toString(),
          m,
          d,
          p,
          y,
          n.amountIn.amount.raw,
          n.minAmountOut.amount.raw.sub(
            (l = (u = n.minAmountOut.fee) == null ? void 0 : u.raw) != null
              ? l
              : new rn.default(0),
          ),
          n.remainingAccounts,
        ),
      ],
      instructionTypes: [U.RouteSwap],
      lookupTableAddress: [p.lookupTableAccount, y.lookupTableAccount].filter(
        (f) => f !== void 0,
      ),
      address: {},
    };
  } else throw Error("route type error");
}
function yy({
  programId: i,
  wallet: e,
  amount: t,
  inputAccount: n,
  outputAccount: o,
  routeInfo: r,
  poolKeys: s,
}) {
  var d;
  if (r.success === !1) throw Error("route info error");
  let a = [],
    c = [
      A({ pubkey: At.TOKEN_PROGRAM_ID, isWritable: !1 }),
      A({ pubkey: At.TOKEN_2022_PROGRAM_ID, isWritable: !1 }),
      A({ pubkey: At.ASSOCIATED_TOKEN_PROGRAM_ID, isWritable: !1 }),
      A({ pubkey: R.SystemProgram.programId, isWritable: !1 }),
      A({ pubkey: e, isSigner: !0 }),
    ],
    u = { [r.data.inputMint]: n, [r.data.outputMint]: o };
  c.push(A({ pubkey: u[r.data.inputMint] })),
    c.push(A({ pubkey: u[r.data.outputMint] }));
  for (let p = 0; p < s.length; p++) {
    let y = r.data.routePlan[p],
      f = s[p],
      b = y.inputMint === f.mintA.address;
    if (
      (c.push(A({ pubkey: new R.PublicKey(f.programId), isWritable: !1 })),
      p === s.length - 1)
    )
      c.push(A({ pubkey: u[y.outputMint] }));
    else {
      let g = y.outputMint;
      if (u[g] === void 0) {
        let w = oe(
          e,
          new R.PublicKey(g),
          f.programId === ht.CLMM_PROGRAM_ID.toBase58() ||
            f.programId === ht.CREATE_CPMM_POOL_PROGRAM.toBase58()
            ? new R.PublicKey(b ? f.mintB.programId : f.mintA.programId)
            : At.TOKEN_PROGRAM_ID,
        ).publicKey;
        u[g] = w;
      }
      c.push(A({ pubkey: u[g] }));
    }
    if (
      (c.push(A({ pubkey: new R.PublicKey(y.inputMint) })),
      c.push(A({ pubkey: new R.PublicKey(y.outputMint) })),
      f.programId === ht.CLMM_PROGRAM_ID.toBase58())
    ) {
      let g = f;
      c.push(A({ pubkey: new R.PublicKey(g.config.id) })),
        c.push(A({ pubkey: new R.PublicKey(g.id) })),
        c.push(A({ pubkey: new R.PublicKey(b ? g.vault.A : g.vault.B) })),
        c.push(A({ pubkey: new R.PublicKey(b ? g.vault.B : g.vault.A) })),
        c.push(A({ pubkey: new R.PublicKey(g.observationId) })),
        c.push(A({ pubkey: tn, isWritable: !1 })),
        c.push(A({ pubkey: new R.PublicKey(g.exBitmapAccount) })),
        a.push(Qu(y.lastPoolPriceX64, b));
      for (let w of (d = y.remainingAccounts) != null ? d : [])
        c.push(A({ pubkey: new R.PublicKey(w) }));
    } else if (f.programId === ht.AMM_STABLE.toBase58()) {
      let g = f;
      c.push(A({ pubkey: new R.PublicKey(g.id) })),
        c.push(A({ pubkey: new R.PublicKey(g.authority), isWritable: !1 })),
        c.push(
          A({ pubkey: new R.PublicKey(g.marketProgramId), isWritable: !1 }),
        ),
        c.push(
          A({ pubkey: new R.PublicKey(g.marketAuthority), isWritable: !1 }),
        ),
        c.push(A({ pubkey: wo, isWritable: !1 })),
        c.push(A({ pubkey: new R.PublicKey(g.openOrders) })),
        c.push(A({ pubkey: new R.PublicKey(g.vault.A) })),
        c.push(A({ pubkey: new R.PublicKey(g.vault.B) })),
        c.push(A({ pubkey: new R.PublicKey(g.marketId) })),
        c.push(A({ pubkey: new R.PublicKey(g.marketBids) })),
        c.push(A({ pubkey: new R.PublicKey(g.marketAsks) })),
        c.push(A({ pubkey: new R.PublicKey(g.marketEventQueue) })),
        c.push(A({ pubkey: new R.PublicKey(g.marketBaseVault) })),
        c.push(A({ pubkey: new R.PublicKey(g.marketQuoteVault) }));
    } else if (f.programId === ht.AMM_V4.toBase58()) {
      let g = f;
      c.push(A({ pubkey: new R.PublicKey(g.id) })),
        c.push(A({ pubkey: new R.PublicKey(g.authority), isWritable: !1 })),
        c.push(A({ pubkey: new R.PublicKey(g.id) })),
        c.push(A({ pubkey: new R.PublicKey(g.id) })),
        c.push(A({ pubkey: new R.PublicKey(g.id) })),
        c.push(A({ pubkey: new R.PublicKey(g.vault.A) })),
        c.push(A({ pubkey: new R.PublicKey(g.vault.B) })),
        c.push(A({ pubkey: new R.PublicKey(g.id) })),
        c.push(A({ pubkey: new R.PublicKey(g.id) })),
        c.push(A({ pubkey: new R.PublicKey(g.id) })),
        c.push(A({ pubkey: new R.PublicKey(g.id) })),
        c.push(A({ pubkey: new R.PublicKey(g.id) })),
        c.push(A({ pubkey: new R.PublicKey(g.id) }));
    } else if (f.programId === ht.CREATE_CPMM_POOL_PROGRAM.toBase58()) {
      let g = f;
      c.push(A({ pubkey: new R.PublicKey(g.authority) })),
        c.push(A({ pubkey: new R.PublicKey(g.config.id) })),
        c.push(A({ pubkey: new R.PublicKey(g.id) })),
        c.push(A({ pubkey: new R.PublicKey(b ? g.vault.A : g.vault.B) })),
        c.push(A({ pubkey: new R.PublicKey(b ? g.vault.B : g.vault.A) })),
        c.push(A({ pubkey: new R.PublicKey(g.observationId) }));
    } else throw Error("pool type error");
  }
  let l = V([
      G("insId"),
      k("amountIn"),
      k("amountOut"),
      j(ne(), a.length, "clmmPriceLimit"),
    ]),
    m = Buffer.alloc(l.span);
  return (
    l.encode(
      {
        insId: 0,
        amountIn: t,
        amountOut: new rn.default(r.data.otherAmountThreshold),
        clmmPriceLimit: a,
      },
      m,
    ),
    new R.TransactionInstruction({ keys: c, programId: i, data: m })
  );
}
function by({
  programId: i,
  wallet: e,
  inputAccount: t,
  outputAccount: n,
  routeInfo: o,
  poolKeys: r,
}) {
  var m;
  if (o.success === !1) throw Error("route info error");
  let s = [],
    a = [
      A({ pubkey: At.TOKEN_PROGRAM_ID, isWritable: !1 }),
      A({ pubkey: At.TOKEN_2022_PROGRAM_ID, isWritable: !1 }),
      A({ pubkey: At.ASSOCIATED_TOKEN_PROGRAM_ID, isWritable: !1 }),
      A({ pubkey: R.SystemProgram.programId, isWritable: !1 }),
      A({ pubkey: e, isSigner: !0 }),
    ],
    c = { [o.data.inputMint]: t, [o.data.outputMint]: n };
  for (let d = r.length - 1; d >= 0; d--) {
    let p = o.data.routePlan[d],
      y = r[d],
      f = p.inputMint === y.mintA.address;
    if ((a.push(A({ pubkey: new R.PublicKey(y.programId) })), d === 0))
      a.push(A({ pubkey: c[p.inputMint] }));
    else {
      let b = p.inputMint;
      if (c[b] === void 0) {
        let g = oe(
          e,
          new R.PublicKey(b),
          y.programId === ht.CLMM_PROGRAM_ID.toBase58() ||
            y.programId === ht.CREATE_CPMM_POOL_PROGRAM.toBase58()
            ? new R.PublicKey(f ? y.mintA.programId : y.mintB.programId)
            : At.TOKEN_PROGRAM_ID,
        ).publicKey;
        c[b] = g;
      }
      a.push(A({ pubkey: c[b] }));
    }
    if (d === r.length - 1) a.push(A({ pubkey: c[p.outputMint] }));
    else {
      let b = p.outputMint;
      if (c[b] === void 0) {
        let g = oe(
          e,
          new R.PublicKey(b),
          y.programId === ht.CLMM_PROGRAM_ID.toBase58() ||
            y.programId === ht.CREATE_CPMM_POOL_PROGRAM.toBase58()
            ? new R.PublicKey(f ? y.mintB.programId : y.mintA.programId)
            : At.TOKEN_PROGRAM_ID,
        ).publicKey;
        c[b] = g;
      }
      a.push(A({ pubkey: c[b] }));
    }
    if (
      (a.push(A({ pubkey: new R.PublicKey(p.inputMint) })),
      a.push(A({ pubkey: new R.PublicKey(p.outputMint) })),
      y.programId === ht.CLMM_PROGRAM_ID.toBase58())
    ) {
      let b = y;
      a.push(A({ pubkey: new R.PublicKey(b.config.id) })),
        a.push(A({ pubkey: new R.PublicKey(b.id) })),
        a.push(A({ pubkey: new R.PublicKey(f ? b.vault.A : b.vault.B) })),
        a.push(A({ pubkey: new R.PublicKey(f ? b.vault.B : b.vault.A) })),
        a.push(A({ pubkey: new R.PublicKey(b.observationId) })),
        a.push(A({ pubkey: tn, isWritable: !1 })),
        a.push(A({ pubkey: new R.PublicKey(b.exBitmapAccount) })),
        s.push(Qu(p.lastPoolPriceX64, f));
      for (let g of (m = p.remainingAccounts) != null ? m : [])
        a.push(A({ pubkey: new R.PublicKey(g) }));
    } else if (y.programId === ht.AMM_STABLE.toBase58()) {
      let b = y;
      a.push(A({ pubkey: new R.PublicKey(b.id) })),
        a.push(A({ pubkey: new R.PublicKey(b.authority), isWritable: !1 })),
        a.push(
          A({ pubkey: new R.PublicKey(b.marketProgramId), isWritable: !1 }),
        ),
        a.push(
          A({ pubkey: new R.PublicKey(b.marketAuthority), isWritable: !1 }),
        ),
        a.push(A({ pubkey: wo, isWritable: !1 })),
        a.push(A({ pubkey: new R.PublicKey(b.openOrders) })),
        a.push(A({ pubkey: new R.PublicKey(b.vault.A) })),
        a.push(A({ pubkey: new R.PublicKey(b.vault.B) })),
        a.push(A({ pubkey: new R.PublicKey(b.marketId) })),
        a.push(A({ pubkey: new R.PublicKey(b.marketBids) })),
        a.push(A({ pubkey: new R.PublicKey(b.marketAsks) })),
        a.push(A({ pubkey: new R.PublicKey(b.marketEventQueue) })),
        a.push(A({ pubkey: new R.PublicKey(b.marketBaseVault) })),
        a.push(A({ pubkey: new R.PublicKey(b.marketQuoteVault) }));
    } else if (y.programId === ht.AMM_V4.toBase58()) {
      let b = y;
      a.push(A({ pubkey: new R.PublicKey(b.id) })),
        a.push(A({ pubkey: new R.PublicKey(b.authority), isWritable: !1 })),
        a.push(A({ pubkey: new R.PublicKey(b.id) })),
        a.push(A({ pubkey: new R.PublicKey(b.id) })),
        a.push(A({ pubkey: new R.PublicKey(b.id) })),
        a.push(A({ pubkey: new R.PublicKey(b.vault.A) })),
        a.push(A({ pubkey: new R.PublicKey(b.vault.B) })),
        a.push(A({ pubkey: new R.PublicKey(b.id) })),
        a.push(A({ pubkey: new R.PublicKey(b.id) })),
        a.push(A({ pubkey: new R.PublicKey(b.id) })),
        a.push(A({ pubkey: new R.PublicKey(b.id) })),
        a.push(A({ pubkey: new R.PublicKey(b.id) })),
        a.push(A({ pubkey: new R.PublicKey(b.id) }));
    } else if (y.programId === ht.CREATE_CPMM_POOL_PROGRAM.toBase58()) {
      let b = y;
      a.push(A({ pubkey: new R.PublicKey(b.authority) })),
        a.push(A({ pubkey: new R.PublicKey(b.config.id) })),
        a.push(A({ pubkey: new R.PublicKey(b.id) })),
        a.push(A({ pubkey: new R.PublicKey(f ? b.vault.A : b.vault.B) })),
        a.push(A({ pubkey: new R.PublicKey(f ? b.vault.B : b.vault.A) })),
        a.push(A({ pubkey: new R.PublicKey(b.observationId) }));
    } else throw Error("pool type error");
  }
  let u = V([
      G("insId"),
      k("amountIn"),
      k("amountOut"),
      j(ne(), s.length, "clmmPriceLimit"),
    ]),
    l = Buffer.alloc(u.span);
  return (
    u.encode(
      {
        insId: 1,
        amountIn: new rn.default(o.data.otherAmountThreshold),
        amountOut: new rn.default(o.data.outputAmount),
        clmmPriceLimit: s,
      },
      l,
    ),
    new R.TransactionInstruction({ keys: a, programId: i, data: l })
  );
}
var Sn = new er.default(0),
  tr = class extends Fe {
    constructor(e) {
      super(e);
    }
    async getWSolAccounts() {
      this.scope.checkOwner(),
        await this.scope.account.fetchWalletTokenAccounts();
      let e = this.scope.account.tokenAccounts.filter((t) => t.mint.equals($));
      return (
        e.sort((t, n) =>
          t.isAssociated ? 1 : n.isAssociated || t.amount.lt(n.amount) ? -1 : 1,
        ),
        e
      );
    }
    async unWrapWSol(e) {
      let { amount: t, tokenProgram: n, txVersion: o = 1, feePayer: r } = e,
        s = await this.getWSolAccounts(),
        a = this.createTxBuilder(r);
      a.addCustomComputeBudget(e.computeBudgetConfig);
      let c = await yn({
        connection: this.scope.connection,
        owner: this.scope.ownerPubKey,
        payer: this.scope.ownerPubKey,
        amount: 0,
      });
      a.addInstruction(c);
      let u = J(t);
      for (let l = 0; l < s.length; l++)
        u.gte(s[l].amount)
          ? (a.addInstruction({
              instructions: [
                fn({
                  tokenAccount: s[l].publicKey,
                  payer: this.scope.ownerPubKey,
                  owner: this.scope.ownerPubKey,
                  programId: n,
                }),
              ],
            }),
            u.sub(s[l].amount))
          : a.addInstruction({
              instructions: [
                fn({
                  tokenAccount: s[l].publicKey,
                  payer: this.scope.ownerPubKey,
                  owner: this.scope.ownerPubKey,
                  programId: n,
                }),
              ],
            });
      return a.versionBuild({ txVersion: o });
    }
    async wrapWSol(e, t, n, o) {
      let r = this.createTxBuilder(o),
        s = await yn({
          connection: this.scope.connection,
          owner: this.scope.ownerPubKey,
          payer: this.scope.ownerPubKey,
          amount: e,
          skipCloseAccount: !0,
        });
      return (
        r.addInstruction(s), r.versionBuild({ txVersion: n != null ? n : 1 })
      );
    }
    async swap({
      swapInfo: e,
      swapPoolKeys: t,
      ownerInfo: n,
      computeBudgetConfig: o,
      routeProgram: r,
      txVersion: s,
      feePayer: a,
    }) {
      let c = this.createTxBuilder(a),
        u = e.amountIn,
        l = e.amountOut,
        m = u.amount.token.mint.equals($),
        d = l.amount.token.mint.equals($),
        p = u.amount.token.mint,
        y = l.amount.token.mint,
        { account: f, instructionParams: b } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: u.amount.token.isToken2022
              ? Se.TOKEN_2022_PROGRAM_ID
              : Se.TOKEN_PROGRAM_ID,
            mint: p,
            notUseTokenAccount: m,
            owner: this.scope.ownerPubKey,
            skipCloseAccount: !m,
            createInfo: m
              ? { payer: this.scope.ownerPubKey, amount: u.amount.raw }
              : void 0,
            associatedOnly: m ? !1 : n.associatedOnly,
            checkCreateATAOwner: n.checkCreateATAOwner,
          });
      if ((b && c.addInstruction(b), f === void 0))
        throw Error("input account check error");
      let g;
      if (e.routeType === "route" && !d)
        g = this.scope.account.getAssociatedTokenAccount(
          y,
          l.amount.token.isToken2022
            ? Se.TOKEN_2022_PROGRAM_ID
            : Se.TOKEN_PROGRAM_ID,
        );
      else {
        let { account: B, instructionParams: h } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: l.amount.token.isToken2022
              ? Se.TOKEN_2022_PROGRAM_ID
              : Se.TOKEN_PROGRAM_ID,
            mint: y,
            notUseTokenAccount: d,
            owner: this.scope.ownerPubKey,
            skipCloseAccount: !0,
            createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
            associatedOnly: d ? !1 : n.associatedOnly,
            checkCreateATAOwner: n.checkCreateATAOwner,
          });
        (g = B), h && c.addInstruction(h);
      }
      d &&
        c.addInstruction({
          endInstructions: [
            fn({
              owner: this.scope.ownerPubKey,
              payer: this.scope.ownerPubKey,
              tokenAccount: g,
              programId: Se.TOKEN_PROGRAM_ID,
            }),
          ],
          endInstructionTypes: [U.CloseAccount],
        });
      let w;
      if (e.routeType === "route") {
        let B = e.middleToken;
        w = this.scope.account.getAssociatedTokenAccount(
          B.mint,
          B.isToken2022 ? Se.TOKEN_2022_PROGRAM_ID : Se.TOKEN_PROGRAM_ID,
        );
      }
      let P =
          t || (await this.computePoolToPoolKeys({ pools: e.poolInfoList })),
        T = Yu({
          routeProgram: r,
          inputMint: p,
          swapInfo: X(N({}, e), {
            poolInfo: [...e.poolInfoList],
            poolKey: P,
            outputMint: y,
          }),
          ownerInfo: {
            wallet: this.scope.ownerPubKey,
            sourceToken: f,
            routeToken: w,
            destinationToken: g,
          },
        });
      if (e.feeConfig !== void 0) {
        let B = this.createTxBuilder();
        B.addInstruction({
          instructions: [
            (0, Se.createTransferInstruction)(
              f,
              e.feeConfig.feeAccount,
              this.scope.ownerPubKey,
              e.feeConfig.feeAmount.toNumber(),
            ),
          ],
          instructionTypes: [U.TransferAmount],
        }),
          B.addInstruction(T);
        let { transactions: h } =
          s === 0 ? await B.sizeCheckBuildV0() : await B.sizeCheckBuild();
        h.length < 2 &&
          c.addInstruction({
            instructions: [
              (0, Se.createTransferInstruction)(
                f,
                e.feeConfig.feeAccount,
                this.scope.ownerPubKey,
                e.feeConfig.feeAmount.toNumber(),
              ),
            ],
            instructionTypes: [U.TransferAmount],
          });
      }
      return (
        c.addInstruction(T),
        s === 0
          ? c.sizeCheckBuildV0({ computeBudgetConfig: o, address: T.address })
          : c.sizeCheckBuild({ computeBudgetConfig: o, address: T.address })
      );
    }
    async fetchRoutePoolBasicInfo(e) {
      let { amm: t = Ai, clmm: n = hn, cpmm: o = Pi } = e || {},
        r = await this.scope.connection.getProgramAccounts(t, {
          dataSlice: { offset: Ui.offsetOf("baseMint"), length: 64 },
        }),
        s = V([M("baseMint"), M("quoteMint")]),
        a = r.map((p) => ({
          id: p.pubkey,
          version: 4,
          mintA: s.decode(p.account.data).baseMint,
          mintB: s.decode(p.account.data).quoteMint,
        })),
        c = V([M("mintA"), M("mintB")]),
        l = (
          await this.scope.connection.getProgramAccounts(n, {
            filters: [{ dataSize: zn.span }],
            dataSlice: { offset: zn.offsetOf("mintA"), length: 64 },
          })
        ).map((p) => {
          let y = c.decode(p.account.data);
          return { id: p.pubkey, version: 6, mintA: y.mintA, mintB: y.mintB };
        }),
        d = (
          await this.scope.connection.getProgramAccounts(o, {
            dataSlice: { offset: Zo.offsetOf("mintA"), length: 64 },
          })
        ).map((p) => {
          let y = c.decode(p.account.data);
          return { id: p.pubkey, version: 7, mintA: y.mintA, mintB: y.mintB };
        });
      return { clmmPools: l, ammPools: a, cpmmPools: d };
    }
    getAllRoute({
      inputMint: e,
      outputMint: t,
      clmmPools: n,
      ammPools: o,
      cpmmPools: r,
    }) {
      (e = e.toString() === Hn.PublicKey.default.toString() ? $ : e),
        (t = t.toString() === Hn.PublicKey.default.toString() ? $ : t);
      let s = {},
        a = {},
        c = {},
        u = [],
        l = {};
      for (let d of n != null ? n : []) {
        if (
          (((d.mintA.equals(e) && d.mintB.equals(t)) ||
            (d.mintA.equals(t) && d.mintB.equals(e))) &&
            (u.push(d), (a[d.id.toString()] = d)),
          d.mintA.equals(e))
        ) {
          let p = d.mintB.toString();
          l[p] === void 0 &&
            (l[p] = {
              mintProgram: Se.TOKEN_PROGRAM_ID,
              in: [],
              out: [],
              mDecimals: 0,
            }),
            l[p].in.push(d);
        }
        if (d.mintB.equals(e)) {
          let p = d.mintA.toString();
          l[p] === void 0 &&
            (l[p] = {
              mintProgram: Se.TOKEN_PROGRAM_ID,
              in: [],
              out: [],
              mDecimals: 0,
            }),
            l[p].in.push(d);
        }
        if (d.mintA.equals(t)) {
          let p = d.mintB.toString();
          l[p] === void 0 &&
            (l[p] = {
              mintProgram: Se.TOKEN_PROGRAM_ID,
              in: [],
              out: [],
              mDecimals: 0,
            }),
            l[p].out.push(d);
        }
        if (d.mintB.equals(t)) {
          let p = d.mintA.toString();
          l[p] === void 0 &&
            (l[p] = {
              mintProgram: Se.TOKEN_PROGRAM_ID,
              in: [],
              out: [],
              mDecimals: 0,
            }),
            l[p].out.push(d);
        }
      }
      let m = [];
      for (let d of o)
        ((d.mintA.equals(e) && d.mintB.equals(t)) ||
          (d.mintA.equals(t) && d.mintB.equals(e))) &&
          (u.push(d), (s[d.id.toBase58()] = d), m.push(d)),
          d.mintA.equals(e) &&
            (l[d.mintB.toBase58()] === void 0 &&
              (l[d.mintB.toBase58()] = {
                mintProgram: Se.TOKEN_PROGRAM_ID,
                in: [],
                out: [],
                mDecimals: 0,
              }),
            l[d.mintB.toBase58()].in.push(d)),
          d.mintB.equals(e) &&
            (l[d.mintA.toBase58()] === void 0 &&
              (l[d.mintA.toBase58()] = {
                mintProgram: Se.TOKEN_PROGRAM_ID,
                in: [],
                out: [],
                mDecimals: 0,
              }),
            l[d.mintA.toBase58()].in.push(d)),
          d.mintA.equals(t) &&
            (l[d.mintB.toBase58()] === void 0 &&
              (l[d.mintB.toBase58()] = {
                mintProgram: Se.TOKEN_PROGRAM_ID,
                in: [],
                out: [],
                mDecimals: 0,
              }),
            l[d.mintB.toBase58()].out.push(d)),
          d.mintB.equals(t) &&
            (l[d.mintA.toBase58()] === void 0 &&
              (l[d.mintA.toBase58()] = {
                mintProgram: Se.TOKEN_PROGRAM_ID,
                in: [],
                out: [],
                mDecimals: 0,
              }),
            l[d.mintA.toBase58()].out.push(d));
      for (let d of r)
        ((d.mintA.equals(e) && d.mintB.equals(t)) ||
          (d.mintA.equals(t) && d.mintB.equals(e))) &&
          (u.push(d), (c[d.id.toBase58()] = d)),
          d.mintA.equals(e) &&
            (l[d.mintB.toBase58()] === void 0 &&
              (l[d.mintB.toBase58()] = {
                mintProgram: Se.TOKEN_PROGRAM_ID,
                in: [],
                out: [],
                mDecimals: 0,
              }),
            l[d.mintB.toBase58()].in.push(d)),
          d.mintB.equals(e) &&
            (l[d.mintA.toBase58()] === void 0 &&
              (l[d.mintA.toBase58()] = {
                mintProgram: Se.TOKEN_PROGRAM_ID,
                in: [],
                out: [],
                mDecimals: 0,
              }),
            l[d.mintA.toBase58()].in.push(d)),
          d.mintA.equals(t) &&
            (l[d.mintB.toBase58()] === void 0 &&
              (l[d.mintB.toBase58()] = {
                mintProgram: Se.TOKEN_PROGRAM_ID,
                in: [],
                out: [],
                mDecimals: 0,
              }),
            l[d.mintB.toBase58()].out.push(d)),
          d.mintB.equals(t) &&
            (l[d.mintA.toBase58()] === void 0 &&
              (l[d.mintA.toBase58()] = {
                mintProgram: Se.TOKEN_PROGRAM_ID,
                in: [],
                out: [],
                mDecimals: 0,
              }),
            l[d.mintA.toBase58()].out.push(d));
      for (let d of Object.keys(l)) {
        if (
          l[d].in.length === 1 &&
          l[d].out.length === 1 &&
          l[d].in[0].id.equals(l[d].out[0].id)
        ) {
          delete l[d];
          continue;
        }
        if (l[d].in.length === 0 || l[d].out.length === 0) {
          delete l[d];
          continue;
        }
        let p = l[d];
        for (let y of p.in)
          for (let f of p.out)
            y.version === 6 && a[y.id.toString()] === void 0
              ? (a[y.id.toString()] = y)
              : y.version === 7 && c[y.id.toString()] === void 0
                ? (c[y.id.toString()] = y)
                : (y.version === 4 || y.version === 5) &&
                  s[y.id.toString()] === void 0 &&
                  (s[y.id.toString()] = y),
              f.version === 6 && a[f.id.toString()] === void 0
                ? (a[f.id.toString()] = f)
                : f.version === 7 && c[f.id.toString()] === void 0
                  ? (c[f.id.toString()] = f)
                  : (f.version === 4 || f.version === 5) &&
                    s[f.id.toString()] === void 0 &&
                    (s[f.id.toString()] = f);
      }
      return {
        directPath: u,
        addLiquidityPools: m,
        routePathDict: l,
        needSimulate: Object.values(s),
        needTickArray: Object.values(a),
        cpmmPoolList: Object.values(c),
      };
    }
    async fetchSwapRoutesData({ routes: e, inputMint: t, outputMint: n }) {
      let o = new Set([
        ...e.needTickArray
          .map((f) => [f.mintA.toBase58(), f.mintB.toBase58()])
          .flat(),
        t.toString(),
        n.toString(),
      ]);
      console.log("fetching amm pools info, total: ", e.needSimulate.length);
      let r = await this.scope.liquidity.getRpcPoolInfos(
          e.needSimulate.map((f) => f.id),
        ),
        s = qo(r),
        a = {};
      Object.values(s).forEach((f) => {
        o.delete(f.mintA.address),
          (a[f.mintA.address] = {
            address: new Hn.PublicKey(f.mintA.address),
            programId: Se.TOKEN_PROGRAM_ID,
            mintAuthority: null,
            supply: BigInt(0),
            decimals: f.mintA.decimals,
            isInitialized: !0,
            freezeAuthority: null,
            tlvData: Buffer.from("0", "hex"),
            feeConfig: void 0,
          }),
          o.delete(f.mintB.address),
          (a[f.mintB.address] = {
            address: new Hn.PublicKey(f.mintB.address),
            programId: Se.TOKEN_PROGRAM_ID,
            mintAuthority: null,
            supply: BigInt(0),
            decimals: f.mintB.decimals,
            isInitialized: !0,
            freezeAuthority: null,
            tlvData: Buffer.from("0", "hex"),
            feeConfig: void 0,
          });
      }),
        console.log("fetching cpmm pools info, total: ", e.cpmmPoolList.length);
      let c = await this.scope.cpmm.getRpcPoolInfos(
        e.cpmmPoolList.map((f) => f.id.toBase58()),
        !0,
      );
      Object.values(c).forEach((f) => {
        let [b, g] = [f.mintA.toBase58(), f.mintB.toBase58()];
        f.mintProgramA.equals(Se.TOKEN_PROGRAM_ID)
          ? (o.delete(b),
            (a[b] = {
              address: f.mintA,
              programId: f.mintProgramA,
              mintAuthority: null,
              supply: BigInt(0),
              decimals: f.mintDecimalA,
              isInitialized: !0,
              freezeAuthority: null,
              tlvData: Buffer.from("0", "hex"),
              feeConfig: void 0,
            }))
          : o.add(b),
          f.mintProgramB.equals(Se.TOKEN_PROGRAM_ID)
            ? (o.delete(g),
              (a[g] = {
                address: f.mintB,
                programId: f.mintProgramB,
                mintAuthority: null,
                supply: BigInt(0),
                decimals: f.mintDecimalB,
                isInitialized: !0,
                freezeAuthority: null,
                tlvData: Buffer.from("0", "hex"),
                feeConfig: void 0,
              }))
            : o.add(g);
      }),
        console.log("fetching mints info, total: ", o.size);
      let u = await Jn({
        connection: this.scope.connection,
        mints: Array.from(o).map((f) => new Hn.PublicKey(f)),
      });
      a = N(N({}, a), u);
      let l = this.scope.cpmm.toComputePoolInfos({ pools: c, mintInfos: a });
      console.log("fetching clmm pools info, total:", e.needTickArray.length);
      let m = await this.scope.clmm.getRpcClmmPoolInfos({
          poolIds: e.needTickArray.map((f) => f.id),
        }),
        { computeClmmPoolInfo: d, computePoolTickData: p } =
          await this.scope.clmm.getComputeClmmPoolInfos({
            clmmPoolsRpcInfo: m,
            mintInfos: a,
          }),
        y = Object.keys(e.routePathDict).reduce(
          (f, b) =>
            X(N({}, f), {
              [b]: X(N({}, e.routePathDict[b]), {
                mintProgram: a[b].programId,
                mDecimals: a[b].decimals,
                in: e.routePathDict[b].in.map(
                  (g) =>
                    s[g.id.toBase58()] ||
                    d[g.id.toBase58()] ||
                    l[g.id.toBase58()],
                ),
                out: e.routePathDict[b].out.map(
                  (g) =>
                    s[g.id.toBase58()] ||
                    d[g.id.toBase58()] ||
                    l[g.id.toBase58()],
                ),
              }),
            }),
          {},
        );
      return {
        mintInfos: a,
        ammPoolsRpcInfo: r,
        ammSimulateCache: s,
        clmmPoolsRpcInfo: m,
        computeClmmPoolInfo: d,
        computePoolTickData: p,
        computeCpmmData: l,
        routePathDict: y,
      };
    }
    getAllRouteComputeAmountOut({
      inputTokenAmount: e,
      outputToken: t,
      directPath: n,
      routePathDict: o,
      simulateCache: r,
      tickCache: s,
      slippage: a,
      chainTime: c,
      epochInfo: u,
      feeConfig: l,
    }) {
      var g, w, P, T, B, h, x, S, K;
      let m =
          l === void 0
            ? new er.default(0)
            : e.raw
                .mul(new er.default(l.feeBps.toNumber()))
                .div(new er.default(1e4)),
        d = e.raw.sub(m),
        p = new ke(e.token, d),
        y = l === void 0 ? void 0 : { feeAmount: m, feeAccount: l.feeAccount },
        f = X(N({}, t), { address: pt(t.address).toString() }),
        b = [];
      for (let I of n)
        try {
          b.push(
            X(
              N(
                {},
                this.computeAmountOut({
                  itemPool: I,
                  tickCache: s,
                  simulateCache: r,
                  chainTime: c,
                  epochInfo: u,
                  slippage: a,
                  outputToken: f,
                  amountIn: p,
                }),
              ),
              { feeConfig: y },
            ),
          );
        } catch (C) {
          this.logDebug("direct error", I.version, I.id.toString(), C.message);
        }
      this.logDebug("direct done");
      for (let [I, C] of Object.entries(o)) {
        let L = {
            chainId: 101,
            address: I,
            programId: C.mintProgram.toBase58(),
            logoURI: "",
            symbol: "",
            name: "",
            decimals: C.mDecimals,
            tags: [],
            extensions: {},
          },
          O = C.in
            .map((W) => {
              try {
                return {
                  pool: W,
                  data: this.computeAmountOut({
                    itemPool: W,
                    tickCache: s,
                    simulateCache: r,
                    chainTime: c,
                    epochInfo: u,
                    slippage: a,
                    outputToken: L,
                    amountIn: p,
                  }),
                };
              } catch (D) {
                this.logDebug(
                  "route in error",
                  W.version,
                  W.id.toString(),
                  D.message,
                );
                return;
              }
            })
            .sort((W, D) => {
              var Ue, wt, Ke, Ge;
              let ee =
                  W === void 0
                    ? Sn
                    : W.data.amountOut.amount.raw.sub(
                        (wt =
                          (Ue = W.data.amountOut.fee) == null
                            ? void 0
                            : Ue.raw) != null
                          ? wt
                          : Sn,
                      ),
                fe =
                  D === void 0
                    ? Sn
                    : D.data.amountOut.amount.raw.sub(
                        (Ge =
                          (Ke = D.data.amountOut.fee) == null
                            ? void 0
                            : Ke.raw) != null
                          ? Ge
                          : Sn,
                      );
              return ee.lt(fe) ? 1 : -1;
            })[0];
        if (O === void 0) continue;
        let F = new ke(
          Eo(L),
          O.data.amountOut.amount.raw.sub(
            (w = (g = O.data.amountOut.fee) == null ? void 0 : g.raw) != null
              ? w
              : Sn,
          ),
        );
        for (let W of C.out)
          try {
            let D = this.computeAmountOut({
              itemPool: W,
              tickCache: s,
              simulateCache: r,
              chainTime: c,
              epochInfo: u,
              slippage: a,
              outputToken: f,
              amountIn: F,
            });
            b.push(
              X(N({}, D), {
                allTrade: !!(O.data.allTrade && D.allTrade),
                amountIn: O.data.amountIn,
                amountOut: D.amountOut,
                minAmountOut: D.minAmountOut,
                currentPrice: void 0,
                executionPrice: new _(
                  new rt({
                    baseToken: O.data.amountIn.amount.token,
                    denominator: O.data.amountIn.amount.raw,
                    quoteToken: D.amountOut.amount.token,
                    numerator: D.amountOut.amount.raw.sub(
                      (T = (P = D.amountOut.fee) == null ? void 0 : P.raw) !=
                        null
                        ? T
                        : Sn,
                    ),
                  }).toFixed(),
                ),
                priceImpact: new _(
                  O.data.priceImpact.add(D.priceImpact).toFixed(),
                ),
                fee: [O.data.fee[0], D.fee[0]],
                routeType: "route",
                poolInfoList: [O.pool, W],
                remainingAccounts: [
                  O.data.remainingAccounts[0],
                  D.remainingAccounts[0],
                ],
                minMiddleAmountFee:
                  (B = D.amountOut.fee) != null && B.raw
                    ? new ke(
                        O.data.amountOut.amount.token,
                        ((x =
                          (h = O.data.amountOut.fee) == null
                            ? void 0
                            : h.raw) != null
                          ? x
                          : Sn
                        ).add(
                          (K =
                            (S = D.amountOut.fee) == null ? void 0 : S.raw) !=
                            null
                            ? K
                            : Sn,
                        ),
                      )
                    : void 0,
                middleToken: O.data.amountOut.amount.token,
                poolReady: O.data.poolReady && D.poolReady,
                poolType: [O.data.poolType, D.poolType],
                feeConfig: y,
                expirationTime: Ht(O.data.expirationTime, D.expirationTime),
              }),
            );
          } catch (D) {
            this.logDebug(
              "route out error",
              W.version,
              W.id.toString(),
              D.message,
            );
          }
      }
      return b
        .filter(
          (I) => (
            I.allTrade ||
              this.logDebug(
                `pool ${I.poolInfoList.map((C) => C.id.toString()).join(",")} filter out since not all trade`,
              ),
            I.allTrade
          ),
        )
        .sort((I, C) =>
          I.amountOut.amount.raw.sub(C.amountOut.amount.raw).gt(Sn) ? -1 : 1,
        );
    }
    computeAmountOut({
      itemPool: e,
      tickCache: t,
      simulateCache: n,
      chainTime: o,
      epochInfo: r,
      slippage: s,
      outputToken: a,
      amountIn: c,
    }) {
      if (e.version === 6) {
        let {
          allTrade: u,
          realAmountIn: l,
          amountOut: m,
          minAmountOut: d,
          expirationTime: p,
          currentPrice: y,
          executionPrice: f,
          priceImpact: b,
          fee: g,
          remainingAccounts: w,
          executionPriceX64: P,
        } = Oe.computeAmountOutFormat({
          poolInfo: e,
          tickArrayCache: t[e.id.toString()],
          amountIn: c.raw,
          tokenOut: a,
          slippage: s,
          epochInfo: r,
          catchLiquidityInsufficient: !0,
        });
        return {
          allTrade: u,
          amountIn: l,
          amountOut: m,
          minAmountOut: d,
          currentPrice: new _(y.toFixed()),
          executionPrice: new _(f.toFixed()),
          priceImpact: new _(b.toFixed()),
          fee: [g],
          remainingAccounts: [w],
          routeType: "amm",
          poolInfoList: [e],
          poolReady: e.startTime < o,
          poolType: "CLMM",
          slippage: s,
          clmmExPriceX64: [P],
          expirationTime: Ht(l.expirationTime, p),
        };
      } else if (e.version === 7) {
        let {
          allTrade: u,
          executionPrice: l,
          amountOut: m,
          minAmountOut: d,
          priceImpact: p,
          fee: y,
        } = this.scope.cpmm.computeSwapAmount({
          pool: e,
          outputMint: a.address,
          amountIn: c.raw,
          slippage: s,
        });
        return {
          allTrade: u,
          amountIn: { amount: c, fee: void 0, expirationTime: void 0 },
          amountOut: {
            amount: qi(X(N({}, a), { amount: m })),
            fee: void 0,
            expirationTime: void 0,
          },
          minAmountOut: {
            amount: qi(X(N({}, a), { amount: d })),
            fee: void 0,
            expirationTime: void 0,
          },
          currentPrice: e.poolPrice,
          executionPrice: l,
          priceImpact: p,
          fee: [new ke(c.token, y)],
          remainingAccounts: [],
          routeType: "amm",
          poolInfoList: [e],
          poolReady: e.openTime.toNumber() < o,
          poolType: "CPMM",
          slippage: s,
          clmmExPriceX64: [void 0],
          expirationTime: void 0,
        };
      } else {
        if (![1, 6, 7].includes(n[e.id.toString()].status))
          throw Error("swap error");
        let {
          amountOut: u,
          minAmountOut: l,
          currentPrice: m,
          executionPrice: d,
          priceImpact: p,
          fee: y,
        } = this.scope.liquidity.computeAmountOut({
          poolInfo: n[e.id.toString()],
          amountIn: c.raw,
          mintIn: c.token.mint,
          mintOut: a.address,
          slippage: s,
        });
        return {
          amountIn: { amount: c, fee: void 0, expirationTime: void 0 },
          amountOut: {
            amount: qi(X(N({}, a), { amount: u })),
            fee: void 0,
            expirationTime: void 0,
          },
          minAmountOut: {
            amount: qi(X(N({}, a), { amount: l })),
            fee: void 0,
            expirationTime: void 0,
          },
          currentPrice: m,
          executionPrice: d,
          priceImpact: p,
          fee: [new ke(c.token, y)],
          routeType: "amm",
          poolInfoList: [e],
          remainingAccounts: [],
          poolReady: Number(n[e.id].openTime) < o,
          poolType: e.version === 5 ? "STABLE" : void 0,
          expirationTime: void 0,
          allTrade: !0,
          slippage: s,
          clmmExPriceX64: [void 0],
        };
      }
    }
    async computePoolToPoolKeys({
      pools: e,
      clmmRpcData: t = {},
      ammRpcData: n = {},
    }) {
      let o = new Set(
        e
          .filter((u) => u.version === 6 && !t[u.id.toString()])
          .map((u) => u.id.toString()),
      );
      if (o.size > 0) {
        let u = await this.scope.clmm.getRpcClmmPoolInfos({
          poolIds: Array.from(o),
        });
        Object.keys(u).forEach((l) => {
          t[l] = u[l];
        });
      }
      let r = new Set(
        e
          .filter((u) => u.version === 4 && !n[u.id.toString()])
          .map((u) => u.id.toString()),
      );
      if (r.size > 0) {
        let u = await this.scope.liquidity.getRpcPoolInfos(Array.from(r));
        Object.keys(u).forEach((l) => {
          n[l] = u[l];
        });
      }
      let s = new Set(e.filter((u) => u.version === 4).map((u) => u.marketId)),
        a = {};
      s.size > 0 &&
        (
          await je(
            this.scope.connection,
            Array.from(s).map((l) => ({ pubkey: new Hn.PublicKey(l) })),
          )
        ).forEach((l) => {
          if (!l.accountInfo) return;
          let m = Ms.decode(l.accountInfo.data);
          a[l.pubkey.toBase58()] = {
            marketId: l.pubkey.toString(),
            marketProgramId: l.accountInfo.owner.toString(),
            marketAuthority: Jo.getAssociatedAuthority({
              programId: l.accountInfo.owner,
              marketId: l.pubkey,
            }).publicKey.toString(),
            marketBaseVault: m.baseVault.toString(),
            marketQuoteVault: m.quoteVault.toString(),
            marketBids: m.bids.toString(),
            marketAsks: m.asks.toString(),
            marketEventQueue: m.eventQueue.toString(),
          };
        });
      let c = [];
      return (
        e.forEach((u) => {
          if (u.version === 6) {
            let l = t[u.id.toString()],
              m = {
                programId: u.programId.toBase58(),
                id: u.id.toBase58(),
                mintA: u.mintA,
                mintB: u.mintB,
                openTime: String(u.startTime),
                vault: { A: l.vaultA.toBase58(), B: l.vaultB.toBase58() },
                config: X(N({}, u.ammConfig), {
                  id: u.ammConfig.id.toString(),
                  defaultRange: 0,
                  defaultRangePoint: [],
                }),
                rewardInfos: [],
                observationId: u.observationId.toBase58(),
                exBitmapAccount: u.exBitmapAccount.toBase58(),
              };
            c.push(m);
          } else if (u.version === 4) {
            let l = n[u.id.toString()],
              m = N(
                {
                  programId: u.programId,
                  id: u.id,
                  mintA: u.mintA,
                  mintB: u.mintB,
                  openTime: String(u.openTime),
                  vault: {
                    A: l.baseVault.toBase58(),
                    B: l.quoteVault.toBase58(),
                  },
                  authority: xs({
                    programId: new Hn.PublicKey(u.programId),
                  }).publicKey.toString(),
                  openOrders: l.openOrders.toBase58(),
                  targetOrders: l.targetOrders.toBase58(),
                  mintLp: u.lpMint,
                },
                a[u.marketId],
              );
            c.push(m);
          } else
            u.version === 7 &&
              c.push({
                observationId: u.observationId.toBase58(),
                programId: u.programId.toBase58(),
                id: u.id.toBase58(),
                mintA: u.mintA,
                mintB: u.mintB,
                openTime: String(u.openTime),
                authority: li(u.programId).publicKey.toBase58(),
                vault: { A: u.vaultA.toBase58(), B: u.vaultB.toBase58() },
                mintLp: gt({
                  address: u.mintLp.toBase58(),
                  programId: Se.TOKEN_PROGRAM_ID.toBase58(),
                  decimals: u.lpDecimals,
                }),
                config: X(N({ id: u.configId.toBase58() }, u.configInfo), {
                  protocolFeeRate: u.configInfo.protocolFeeRate.toNumber(),
                  tradeFeeRate: u.configInfo.tradeFeeRate.toNumber(),
                  fundFeeRate: u.configInfo.fundFeeRate.toNumber(),
                  createPoolFee: u.configInfo.createPoolFee.toString(),
                }),
              });
        }),
        c
      );
    }
  };
var jn = require("@solana/web3.js"),
  Bm = require("@solana/spl-token"),
  Hu = be(require("bn.js"));
var Kt = class extends Fe {
    static getPdaPoolId(e, t) {
      return le([Kt.SEED_CONFIG.pool.id, t.toBuffer()], e);
    }
    static getPdaOwnerId(e, t, n, o) {
      return le(
        [
          Kt.SEED_CONFIG.owner.id,
          t.toBuffer(),
          n.toBuffer(),
          Buffer.from(new Hu.default(o).toArray()),
        ],
        e,
      );
    }
    static async getAllInfo({
      connection: e,
      programId: t,
      poolIds: n,
      wallet: o,
      chainTime: r,
    }) {
      if (n.length === 0) return [];
      let s = n.map((l) => Kt.getPdaPoolId(t, l).publicKey),
        a = [];
      for (let l = 0; l < Kt.VERSION_PROJECT.length; l++)
        a.push(...s.map((m) => Kt.getPdaOwnerId(t, m, o, l).publicKey));
      let c = await zt(e, [...s, ...a]),
        u = [];
      for (let l = 0; l < c.length; l++) {
        let m = Math.floor(l / n.length),
          d = l % n.length,
          p = s[d],
          y = a[l],
          f = c[d],
          b = c[n.length + l];
        if (
          !(f && b) ||
          f.data.length !== Kt.POOL_LAYOUT.span ||
          b.data.length !== Kt.OWNER_LAYOUT.span
        )
          continue;
        let g = Kt.POOL_LAYOUT.decode(f.data),
          w = Kt.OWNER_LAYOUT.decode(b.data),
          P = g.openTime.toNumber(),
          T = g.endTime.toNumber(),
          B =
            w.tokenInfo
              .map((S) => S.debtAmount.gt(new Hu.default(0)))
              .filter((S) => !S).length !== 3,
          h = r > P && r < T && g.status === 1,
          x = B && h;
        u.push({
          programId: t,
          poolId: p,
          ammId: g.ammId,
          ownerAccountId: y,
          snapshotLpAmount: w.lpAmount,
          project: Kt.VERSION_PROJECT[m],
          openTime: P,
          endTime: T,
          canClaim: x,
          canClaimErrorType: B
            ? h
              ? void 0
              : "outOfOperationalTime"
            : "alreadyClaimIt",
          tokenInfo: g.tokenInfo.map((S, K) => ({
            mintAddress: S.mintAddress,
            mintVault: S.mintVault,
            mintDecimals: S.mintDecimals,
            perLpLoss: S.perLpLoss,
            debtAmount: w.tokenInfo[K].debtAmount.add(
              w.tokenInfo[K].claimedAmount,
            ),
          })),
        });
      }
      return u;
    }
    async makeClaimTransaction({ poolInfo: e, ownerInfo: t, feePayer: n }) {
      t.wallet || this.scope.checkOwner();
      let o = this.createTxBuilder(n),
        r = t.wallet || this.scope.ownerPubKey,
        s = [];
      for (let u of e.tokenInfo) {
        let { account: l, instructionParams: m } =
          await this.scope.account.getOrCreateTokenAccount({
            mint: u.mintAddress,
            owner: this.scope.ownerPubKey,
            notUseTokenAccount: u.mintAddress.equals(Be.WSOL.mint),
            createInfo: { payer: r, amount: 0 },
            skipCloseAccount: !u.mintAddress.equals(Be.WSOL.mint),
            associatedOnly: u.mintAddress.equals(Be.WSOL.mint)
              ? !1
              : t.associatedOnly,
          });
        m && o.addInstruction(m), s.push(l);
      }
      o.addInstruction({
        instructions: [
          Kt.makeClaimInstruction({
            programId: e.programId,
            poolInfo: e,
            ownerInfo: {
              wallet: r,
              ownerPda: e.ownerAccountId,
              claimAddress: s,
            },
          }),
        ],
      });
      let { transaction: a, signers: c } = o.build();
      return [{ transaction: a, signer: c }];
    }
    async makeClaimAllTransaction({ poolInfos: e, ownerInfo: t, feePayer: n }) {
      let o = this.createTxBuilder(n),
        r = t.wallet || this.scope.ownerPubKey,
        s = {};
      for (let l of e) {
        let m = [];
        for (let d of l.tokenInfo) {
          let { account: p, instructionParams: y } =
            await this.scope.account.getOrCreateTokenAccount({
              mint: d.mintAddress,
              owner: this.scope.ownerPubKey,
              notUseTokenAccount: d.mintAddress.equals(Be.WSOL.mint),
              createInfo: { payer: r, amount: 0 },
              skipCloseAccount: !d.mintAddress.equals(Be.WSOL.mint),
              associatedOnly: d.mintAddress.equals(Be.WSOL.mint)
                ? !1
                : t.associatedOnly,
            });
          y && o.addInstruction(y),
            p && ((s[d.mintAddress.toString()] = p), m.push(p));
        }
        o.addInstruction({
          instructions: [
            Kt.makeClaimInstruction({
              programId: l.programId,
              poolInfo: l,
              ownerInfo: {
                wallet: r,
                ownerPda: l.ownerAccountId,
                claimAddress: m,
              },
            }),
          ],
        });
      }
      let { transaction: a, signers: c } = o.build(),
        u = o.allInstructions;
      return go(u, [r, ...c.map((l) => l.publicKey)])
        ? [{ transaction: a, signer: c }]
        : [
            {
              transaction: new jn.Transaction().add(
                ...u.slice(0, o.AllTxData.instructions.length - 1),
              ),
              signer: c,
            },
            {
              transaction: new jn.Transaction().add(
                ...u.slice(o.AllTxData.instructions.length - 1),
              ),
              signer: [],
            },
            {
              transaction: new jn.Transaction().add(
                ...o.AllTxData.endInstructions,
              ),
              signer: [],
            },
          ];
    }
    static makeClaimInstruction({ programId: e, poolInfo: t, ownerInfo: n }) {
      let o = V([]),
        r = [
          { pubkey: n.wallet, isSigner: !0, isWritable: !0 },
          { pubkey: t.poolId, isSigner: !1, isWritable: !0 },
          { pubkey: n.ownerPda, isSigner: !1, isWritable: !0 },
          ...n.claimAddress.map((c) => ({
            pubkey: c,
            isSigner: !1,
            isWritable: !0,
          })),
          ...t.tokenInfo.map(({ mintVault: c }) => ({
            pubkey: c,
            isSigner: !1,
            isWritable: !0,
          })),
          { pubkey: Bm.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
        ],
        s = Buffer.alloc(o.span);
      o.encode({}, s);
      let a = Buffer.from([10, 66, 208, 184, 161, 6, 191, 98, ...s]);
      return new jn.TransactionInstruction({ keys: r, programId: e, data: a });
    }
  },
  Zt = Kt;
(Zt.CLAIMED_NUM = 3),
  (Zt.POOL_LAYOUT = V([
    Te(8),
    G("bump"),
    G("status"),
    k("openTime"),
    k("endTime"),
    M("ammId"),
    j(
      V([
        G("mintDecimals"),
        M("mintAddress"),
        M("mintVault"),
        k("perLpLoss"),
        k("totalClaimedAmount"),
      ]),
      Kt.CLAIMED_NUM,
      "tokenInfo",
    ),
    j(k(), 10, "padding"),
  ])),
  (Zt.OWNER_LAYOUT = V([
    Te(8),
    G("bump"),
    G("version"),
    M("poolId"),
    M("owner"),
    k("lpAmount"),
    j(
      V([M("mintAddress"), k("debtAmount"), k("claimedAmount")]),
      Kt.CLAIMED_NUM,
      "tokenInfo",
    ),
    j(k(), 4, "padding"),
  ])),
  (Zt.DEFAULT_POOL_ID = [
    "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
    "6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg",
    "AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA",
    "DVa7Qmb5ct9RCpaU7UTpSaf3GVMYz17vNVU67XpdCRut",
    "7XawhbbxtsRcQA8KTkHT9f9nc6d69UwqCDh6U5EEbEmX",
    "6a1CsrpeZubDjEJE9s1CMVheB6HWM5d7m1cj2jkhyXhj",
    "EoNrn8iUhwgJySD1pHu8Qxm5gSQqLK3za4m8xzD2RuEb",
    "AceAyRTWt4PyB2pHqf2qhDgNZDtKVNaxgL8Ru3V4aN1P",
    "6tmFJbMk5yVHFcFy7X2K8RwHjKLr6KVFLYXpgpBNeAxB",
  ].map((e) => new jn.PublicKey(e))),
  (Zt.SEED_CONFIG = {
    pool: { id: Buffer.from("pool_seed", "utf8") },
    owner: { id: Buffer.from("user_claim_seed", "utf8") },
  }),
  (Zt.VERSION_PROJECT = [void 0, "Francium", "Tulip", "Larix"]);
var to = require("@solana/web3.js"),
  ju = be(require("bn.js"));
var eo = require("@solana/web3.js"),
  _s = require("@solana/spl-token");
var vs = V([G("instruction"), Sa("amount")]),
  Ji = V([G("instruction")]);
function gy({ programId: i, amount: e, instructionKeys: t }) {
  let n = [
      { pubkey: po, isSigner: !1, isWritable: !1 },
      { pubkey: _s.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: ot, isSigner: !1, isWritable: !1 },
      { pubkey: kr, isSigner: !1, isWritable: !1 },
      ...Object.entries(t).map(([r, s]) => ({
        pubkey: s,
        isSigner: r === "userOwner",
        isWritable: ![
          "authority",
          "userOwner",
          "userIdoCheck",
          "userStakeInfo",
        ].includes(r),
      })),
    ],
    o = Buffer.alloc(vs.span);
  return (
    vs.encode({ instruction: 1, amount: Number(e) }, o),
    new eo.TransactionInstruction({ keys: n, programId: i, data: o })
  );
}
function nr({ programId: i }, e) {
  let t = [
      { pubkey: _s.TOKEN_PROGRAM_ID, isSigner: !1, isWritable: !1 },
      { pubkey: kr, isSigner: !1, isWritable: !1 },
      ...Object.entries(e).map(([o, r]) => ({
        pubkey: r,
        isSigner: o === "userOwner",
        isWritable: !["authority", "userOwner"].includes(o),
      })),
    ],
    n = Buffer.alloc(Ji.span);
  return (
    Ji.encode({ instruction: 2 }, n),
    new eo.TransactionInstruction({ keys: t, programId: i, data: n })
  );
}
function Vs(i) {
  let { poolConfig: e, userKeys: t, side: n } = i,
    o = n === "base" ? t.baseTokenAccount : t.quoteTokenAccount,
    r = n === "base" ? e.baseVault : e.quoteVault,
    s = Buffer.alloc(Ji.span);
  Ji.encode({ instruction: 2 }, s);
  let a = [
    { pubkey: _s.TOKEN_PROGRAM_ID, isWritable: !1, isSigner: !1 },
    { pubkey: eo.SYSVAR_CLOCK_PUBKEY, isWritable: !1, isSigner: !1 },
    { pubkey: e.id, isWritable: !0, isSigner: !1 },
    { pubkey: e.authority, isWritable: !1, isSigner: !1 },
    { pubkey: r, isWritable: !0, isSigner: !1 },
    { pubkey: o, isWritable: !0, isSigner: !1 },
    { pubkey: t.ledgerAccount, isWritable: !0, isSigner: !1 },
    { pubkey: t.owner, isWritable: !1, isSigner: !0 },
  ];
  return new eo.TransactionInstruction({
    programId: e.programId,
    keys: a,
    data: s,
  });
}
var Ay = {
    [Ti.IDO_PROGRAM_ID_V1.toString()]: 1,
    [Ti.IDO_PROGRAM_ID_V2.toString()]: 2,
    [Ti.IDO_PROGRAM_ID_V3.toString()]: 3,
    [Ti.IDO_PROGRAM_ID_V4.toString()]: 4,
  },
  no = class extends Fe {
    async claim({
      ownerInfo: e,
      idoKeys: t,
      associatedOnly: n = !0,
      checkCreateATAOwner: o = !1,
      txVersion: r,
      feePayer: s,
    }) {
      let a = this.createTxBuilder(s),
        c = Ay[t.programId];
      c || this.logAndCreateError("invalid version", c);
      let u = Me(t),
        [l, m] = [
          !new ju.default(e.coin).isZero(),
          !new ju.default(e.pc).isZero(),
        ],
        d = u.projectInfo.mint.address.equals($),
        { account: p, instructionParams: y } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: u.projectInfo.mint.programId,
            mint: u.projectInfo.mint.address,
            owner: this.scope.ownerPubKey,
            createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
            skipCloseAccount: !d,
            notUseTokenAccount: d,
            associatedOnly: d ? !1 : n,
            checkCreateATAOwner: o,
          });
      !p &&
        l &&
        this.logAndCreateError(
          "target token accounts not found",
          "mint",
          t.projectInfo.mint.address,
        ),
        l && y && a.addInstruction(y);
      let f = u.buyInfo.mint.address.equals($),
        { account: b, instructionParams: g } =
          await this.scope.account.getOrCreateTokenAccount({
            tokenProgram: u.buyInfo.mint.programId,
            mint: u.buyInfo.mint.address,
            owner: this.scope.ownerPubKey,
            createInfo: { payer: this.scope.ownerPubKey, amount: 0 },
            skipCloseAccount: !f,
            notUseTokenAccount: f,
            associatedOnly: f ? !1 : n,
            checkCreateATAOwner: o,
          });
      if (
        (!p &&
          m &&
          this.logAndCreateError(
            "target token accounts not found",
            "mint",
            t.projectInfo.mint.address,
          ),
        m && g && a.addInstruction(g),
        (!p || !b) &&
          this.logAndCreateError(
            "target token accounts not found",
            "mint",
            t.projectInfo.mint.address,
            t.buyInfo.mint.address,
          ),
        c === 3)
      )
        return a
          .addInstruction({
            instructions: [
              ...(l
                ? [
                    nr(
                      { programId: u.programId },
                      {
                        idoId: u.id,
                        authority: u.authority,
                        poolTokenAccount: u.projectInfo.vault,
                        userTokenAccount: p,
                        userIdoInfo: new to.PublicKey(e.userIdoInfo),
                        userOwner: this.scope.ownerPubKey,
                      },
                    ),
                  ]
                : []),
              ...(m
                ? [
                    nr(
                      { programId: new to.PublicKey(t.programId) },
                      {
                        idoId: u.id,
                        authority: u.authority,
                        poolTokenAccount: u.buyInfo.vault,
                        userTokenAccount: b,
                        userIdoInfo: new to.PublicKey(e.userIdoInfo),
                        userOwner: this.scope.ownerPubKey,
                      },
                    ),
                  ]
                : []),
            ],
          })
          .versionBuild({ txVersion: r });
      if (c < 3)
        return (
          !l && !m && this.logAndCreateError("no claimable rewards"),
          a
            .addInstruction({
              instructions: [
                nr(
                  { programId: u.programId },
                  {
                    idoId: u.id,
                    authority: u.authority,
                    poolQuoteTokenAccount: u.buyInfo.vault,
                    poolBaseTokenAccount: u.projectInfo.vault,
                    userQuoteTokenAccount: b,
                    userBaseTokenAccount: p,
                    userIdoInfo: new to.PublicKey(e.userIdoInfo),
                    userOwner: this.scope.ownerPubKey,
                  },
                ),
              ],
            })
            .versionBuild({ txVersion: r })
        );
      let w = {
        poolConfig: {
          id: u.id,
          programId: u.programId,
          authority: u.authority,
          baseVault: u.projectInfo.vault,
          quoteVault: u.buyInfo.vault,
          baseToken: t.projectInfo.mint,
          quoteToken: t.buyInfo.mint,
        },
        userKeys: {
          baseTokenAccount: p,
          quoteTokenAccount: b,
          ledgerAccount: new to.PublicKey(e.userIdoInfo),
          owner: this.scope.ownerPubKey,
        },
      };
      return a
        .addInstruction({
          instructions: [
            ...(l ? [Vs(X(N({}, w), { side: "base" }))] : []),
            ...(m ? [Vs(X(N({}, w), { side: "quote" }))] : []),
          ],
        })
        .versionBuild({ txVersion: r });
    }
  };
var xm = require("@solana/web3.js"),
  An = require("@solana/spl-token");
var ir = class extends Fe {
  constructor(t) {
    super(t);
    this._tokenList = [];
    this._tokenMap = new Map();
    this._blackTokenMap = new Set();
    this._mintGroup = { official: new Set(), jup: new Set(), extra: new Set() };
    this._whiteMap = new Set();
    this._extraTokenList = [];
  }
  async load(t) {
    this.checkDisabled();
    let { forceUpdate: n = !1, type: o = "strict" } = t || {},
      {
        mintList: r,
        blacklist: s,
        whiteList: a,
      } = await this.scope.fetchV3TokenList(n),
      c = await this.scope.fetchJupTokenList(n);
    (this._tokenList = []),
      (this._tokenMap = new Map()),
      (this._blackTokenMap = new Set(s)),
      (this._mintGroup = {
        official: new Set(),
        jup: new Set(),
        extra: new Set(),
      }),
      (this._whiteMap = new Set(a)),
      this._tokenMap.set(en.address, en),
      this._mintGroup.official.add(en.address),
      r.forEach((u) => {
        var l;
        this._blackTokenMap.has(u.address) ||
          (this._tokenMap.set(
            u.address,
            X(N({}, u), {
              type: "raydium",
              priority: 2,
              programId:
                (l = u.programId) != null
                  ? l
                  : u.tags.includes("token-2022")
                    ? An.TOKEN_2022_PROGRAM_ID.toBase58()
                    : An.TOKEN_PROGRAM_ID.toBase58(),
            }),
          ),
          this._mintGroup.official.add(u.address));
      }),
      c.forEach((u) => {
        var l;
        this._blackTokenMap.has(u.address) ||
          this._tokenMap.has(u.address) ||
          (this._tokenMap.set(
            u.address,
            X(N({}, u), {
              type: "jupiter",
              priority: 1,
              programId:
                (l = u.programId) != null
                  ? l
                  : u.tags.includes("token-2022")
                    ? An.TOKEN_2022_PROGRAM_ID.toBase58()
                    : An.TOKEN_PROGRAM_ID.toBase58(),
              tags: u.freezeAuthority
                ? [...(u.tags || []), "hasFreeze"]
                : u.tags,
            }),
          ),
          this._mintGroup.jup.add(u.address));
      }),
      this._extraTokenList.forEach((u) => {
        this._blackTokenMap.has(u.address) ||
          this._tokenMap.has(u.address) ||
          (this._tokenMap.set(
            u.address,
            X(N({}, u), {
              type: "extra",
              priority: 1,
              programId:
                u.programId || u.tags.includes("token-2022")
                  ? An.TOKEN_2022_PROGRAM_ID.toBase58()
                  : An.TOKEN_PROGRAM_ID.toBase58(),
            }),
          ),
          this._mintGroup.extra.add(u.address));
      }),
      (this._tokenList = Array.from(this._tokenMap).map((u) => u[1]));
  }
  get tokenList() {
    return this._tokenList;
  }
  get tokenMap() {
    return this._tokenMap;
  }
  get blackTokenMap() {
    return this._blackTokenMap;
  }
  get mintGroup() {
    return this._mintGroup;
  }
  get whiteListMap() {
    return this._whiteMap;
  }
  async getTokenInfo(t) {
    if (!t) throw new Error("please input mint");
    let n = t.toString(),
      o = this._tokenMap.get(n);
    if (o) return o;
    if (n.toLocaleUpperCase() === "SOL") return en;
    let r = (await this.scope.api.getTokenInfo([n]))[0];
    if (r)
      return (
        this._mintGroup.extra.add(n),
        this._tokenMap.set(n, X(N({}, r), { priority: 2 })),
        r
      );
    let s = await this.scope.connection.getAccountInfo(new xm.PublicKey(n));
    if (!s) throw new Error(`mint address not found: ${n}`);
    let a = An.MintLayout.decode(s.data),
      c = n.toString().substring(0, 6),
      u = {
        chainId: 101,
        address: n,
        programId: s.owner.toBase58(),
        logoURI: "",
        symbol: c,
        name: c,
        decimals: a.decimals,
        tags: [],
        extensions: {},
        priority: 0,
        type: "unknown",
      };
    return this._mintGroup.extra.add(n), this._tokenMap.set(n, u), u;
  }
};
var or = class {
  constructor(e) {
    this.rawBalances = new Map();
    let {
      connection: t,
      cluster: n,
      owner: o,
      api: r,
      defaultChainTime: s,
      defaultChainTimeOffset: a,
      apiCacheTime: c,
      blockhashCommitment: u = "confirmed",
      loopMultiTxStatus: l,
    } = e;
    (this._connection = t),
      (this.cluster = n || "mainnet"),
      (this._owner = o ? new Qt(o) : void 0),
      (this._signAllTransactions = e.signAllTransactions),
      (this.blockhashCommitment = u),
      (this.loopMultiTxStatus = l),
      (this.api = r),
      (this._apiCacheTime = c || 5 * 60 * 1e3),
      (this.logger = ye("Raydium")),
      (this.farm = new Lo({ scope: this, moduleName: "Raydium_Farm" })),
      (this.account = new So({
        scope: this,
        moduleName: "Raydium_Account",
        tokenAccounts: e.tokenAccounts,
        tokenAccountRawInfos: e.tokenAccountRawInfos,
      })),
      (this.liquidity = new Go({
        scope: this,
        moduleName: "Raydium_LiquidityV2",
      })),
      (this.token = new ir({ scope: this, moduleName: "Raydium_tokenV2" })),
      (this.tradeV2 = new tr({ scope: this, moduleName: "Raydium_tradeV2" })),
      (this.clmm = new Hi({ scope: this, moduleName: "Raydium_clmm" })),
      (this.cpmm = new $o({ scope: this, moduleName: "Raydium_cpmm" })),
      (this.utils1216 = new Zt({
        scope: this,
        moduleName: "Raydium_utils1216",
      })),
      (this.marketV2 = new Yi({ scope: this, moduleName: "Raydium_marketV2" })),
      (this.ido = new no({ scope: this, moduleName: "Raydium_ido" })),
      (this.availability = {});
    let m = new Date().getTime();
    (this.apiData = {}),
      a &&
        (this._chainTime = {
          fetched: m,
          value: { chainTime: s || Date.now() - a, offset: a },
        });
  }
  static async load(e) {
    var l;
    let t = (0, Sm.merge)(
        {
          cluster: "mainnet",
          owner: null,
          apiRequestInterval: 3e5,
          apiRequestTimeout: 1e4,
        },
        e,
      ),
      {
        cluster: n,
        apiRequestTimeout: o,
        logCount: r,
        logRequests: s,
        urlConfigs: a,
      } = t,
      c = new To({
        cluster: n,
        timeout: o,
        urlConfigs: a,
        logCount: r,
        logRequests: s,
      }),
      u = new or(X(N({}, t), { api: c }));
    return (
      await u.fetchAvailabilityStatus(
        (l = e.disableFeatureCheck) != null ? l : !0,
      ),
      e.disableLoadToken || (await u.token.load({ type: e.jupTokenType })),
      u
    );
  }
  get owner() {
    return this._owner;
  }
  get ownerPubKey() {
    if (!this._owner) throw new Error(Nr);
    return this._owner.publicKey;
  }
  setOwner(e) {
    return (
      (this._owner = e ? new Qt(e) : void 0),
      this.account.resetTokenAccounts(),
      this
    );
  }
  get connection() {
    if (!this._connection) throw new Error(ol);
    return this._connection;
  }
  setConnection(e) {
    return (this._connection = e), this;
  }
  get signAllTransactions() {
    return this._signAllTransactions;
  }
  setSignAllTransactions(e) {
    return (this._signAllTransactions = e), this;
  }
  checkOwner() {
    if (!this.owner) throw (this.logger.error(Nr), new Error(Nr));
  }
  isCacheInvalidate(e) {
    return new Date().getTime() - e > this._apiCacheTime;
  }
  async fetchChainTime() {
    try {
      let e = await this.api.getChainTimeOffset();
      this._chainTime = {
        fetched: Date.now(),
        value: {
          chainTime: Date.now() + e.offset * 1e3,
          offset: e.offset * 1e3,
        },
      };
    } catch {
      this._chainTime = void 0;
    }
  }
  async fetchV3TokenList(e) {
    if (
      this.apiData.tokenList &&
      !this.isCacheInvalidate(this.apiData.tokenList.fetched) &&
      !e
    )
      return this.apiData.tokenList.data;
    try {
      let t = await this.api.getTokenList(),
        n = { fetched: Date.now(), data: t };
      return (this.apiData.tokenList = n), n.data;
    } catch (t) {
      return console.error(t), { mintList: [], blacklist: [], whiteList: [] };
    }
  }
  async fetchJupTokenList(e) {
    let t = this.apiData.jupTokenList;
    if (t && !this.isCacheInvalidate(t.fetched) && !e) return t.data;
    try {
      let n = await this.api.getJupTokenList();
      return (
        (this.apiData.jupTokenList = {
          fetched: Date.now(),
          data: n.map((o) =>
            X(N({}, o), {
              mintAuthority: o.mint_authority || void 0,
              freezeAuthority: o.freeze_authority || void 0,
            }),
          ),
        }),
        this.apiData.jupTokenList.data
      );
    } catch (n) {
      return console.error(n), [];
    }
  }
  get chainTimeData() {
    var e;
    return (e = this._chainTime) == null ? void 0 : e.value;
  }
  async chainTimeOffset() {
    var e;
    return this._chainTime &&
      Date.now() - this._chainTime.fetched <= 1e3 * 60 * 5
      ? this._chainTime.value.offset
      : (await this.fetchChainTime(),
        ((e = this._chainTime) == null ? void 0 : e.value.offset) || 0);
  }
  async currentBlockChainTime() {
    var e;
    return this._chainTime &&
      Date.now() - this._chainTime.fetched <= 1e3 * 60 * 5
      ? this._chainTime.value.chainTime
      : (await this.fetchChainTime(),
        ((e = this._chainTime) == null ? void 0 : e.value.chainTime) ||
          Date.now());
  }
  async fetchEpochInfo() {
    return this._epochInfo && Date.now() - this._epochInfo.fetched <= 1e3 * 30
      ? this._epochInfo.value
      : ((this._epochInfo = {
          fetched: Date.now(),
          value: await this.connection.getEpochInfo(),
        }),
        this._epochInfo.value);
  }
  async fetchAvailabilityStatus(e) {
    if (e) return {};
    try {
      let t = await this.api.fetchAvailabilityStatus(),
        n = t.all === !1;
      return (
        (this.availability = {
          all: t.all,
          swap: n ? !1 : t.swap,
          createConcentratedPosition: n ? !1 : t.createConcentratedPosition,
          addConcentratedPosition: n ? !1 : t.addConcentratedPosition,
          addStandardPosition: n ? !1 : t.addStandardPosition,
          removeConcentratedPosition: n ? !1 : t.removeConcentratedPosition,
          removeStandardPosition: n ? !1 : t.removeStandardPosition,
          addFarm: n ? !1 : t.addFarm,
          removeFarm: n ? !1 : t.removeFarm,
        }),
        t
      );
    } catch {
      return {};
    }
  }
};
var wy = (i) => i;
0 &&
  (module.exports = {
    ACCOUNT_TYPE_SIZE,
    ALL_PROGRAM_ID,
    AMM_CONFIG_SEED,
    AMM_STABLE,
    AMM_V4,
    ANAMint,
    API_URLS,
    AccountType,
    Api,
    BIT_PRECISION,
    BNDivCeil,
    BNLayout,
    BN_100,
    BN_1000,
    BN_10000,
    BN_FIVE,
    BN_ONE,
    BN_TEN,
    BN_THREE,
    BN_TWO,
    BN_ZERO,
    BitStructure,
    Blob,
    CLMM_LOCK_AUTH_ID,
    CLMM_LOCK_PROGRAM_ID,
    CLMM_PROGRAM_ID,
    CLOCK_PROGRAM_ID,
    CREATE_CPMM_POOL_AUTH,
    CREATE_CPMM_POOL_FEE_ACC,
    CREATE_CPMM_POOL_PROGRAM,
    Clmm,
    ClmmConfigLayout,
    ClmmInstrument,
    ConstantProductCurve,
    CpmmConfigInfoLayout,
    CpmmFee,
    CpmmPoolInfoLayout,
    Currency,
    CurrencyAmount,
    CurveCalculator,
    DEVNET_PROGRAM_ID,
    DEV_API_URLS,
    DEV_CREATE_CPMM_POOL_AUTH,
    DEV_CREATE_CPMM_POOL_FEE_ACC,
    DEV_CREATE_CPMM_POOL_PROGRAM,
    DEV_LOCK_CPMM_AUTH,
    DEV_LOCK_CPMM_PROGRAM,
    DataElement,
    ETHMint,
    EXTENSION_TICKARRAY_BITMAP_SIZE,
    FARM_LOCK_MINT,
    FARM_LOCK_VAULT,
    FARM_PROGRAM_ID_V3,
    FARM_PROGRAM_ID_V4,
    FARM_PROGRAM_ID_V5,
    FARM_PROGRAM_ID_V6,
    FARM_PROGRAM_TO_VERSION,
    FARM_VERSION_TO_LEDGER_LAYOUT,
    FARM_VERSION_TO_STATE_LAYOUT,
    FEE_DESTINATION_ID,
    FEE_RATE_DENOMINATOR,
    FEE_RATE_DENOMINATOR_VALUE,
    FETCH_TICKARRAY_COUNT,
    Fee,
    Fraction,
    IDO_ALL_PROGRAM,
    IDO_PROGRAM_ID_V1,
    IDO_PROGRAM_ID_V2,
    IDO_PROGRAM_ID_V3,
    IDO_PROGRAM_ID_V4,
    INSTRUCTION_PROGRAM_ID,
    InstructionType,
    JupTokenType,
    LIQUIDITY_FEES_DENOMINATOR,
    LIQUIDITY_FEES_NUMERATOR,
    LIQUIDITY_POOL_PROGRAM_ID_V5_MODEL,
    LIQUIDITY_VERSION_TO_SERUM_VERSION,
    LIQUIDITY_VERSION_TO_STATE_LAYOUT,
    LOCK_CPMM_AUTH,
    LOCK_CPMM_PROGRAM,
    LOCK_LIQUIDITY_SEED,
    LOG_B_2_X32,
    LOG_B_P_ERR_MARGIN_LOWER_X64,
    LOG_B_P_ERR_MARGIN_UPPER_X64,
    LOOKUP_TABLE_CACHE,
    Layout,
    LiquidityMath,
    LockClPositionLayoutV2,
    LockPositionLayout,
    LogLevel,
    Logger,
    MARKET_STATE_LAYOUT_V2,
    MARKET_STATE_LAYOUT_V3,
    MARKET_VERSION_TO_STATE_LAYOUT,
    MAX_BASE64_SIZE,
    MAX_SQRT_PRICE_X64,
    MAX_SQRT_PRICE_X64_SUB_ONE,
    MAX_TICK,
    MEMO_PROGRAM_ID,
    MEMO_PROGRAM_ID2,
    METADATA_PROGRAM_ID,
    MIN_SQRT_PRICE_X64,
    MIN_SQRT_PRICE_X64_ADD_ONE,
    MIN_TICK,
    MODEL_DATA_PUBKEY,
    Market,
    MathUtil,
    MaxU64,
    MaxUint128,
    NEGATIVE_ONE,
    NRVMint,
    OBSERVATION_SEED,
    ONE,
    OPEN_BOOK_PROGRAM,
    OPERATION_SEED,
    ObservationInfoLayout,
    ObservationLayout,
    OperationLayout,
    OptionLayout,
    Owner,
    PAIMint,
    POOL_LOCK_ID_SEED,
    POOL_REWARD_VAULT_SEED,
    POOL_SEED,
    POOL_TICK_ARRAY_BITMAP_SEED,
    POOL_VAULT_SEED,
    POSITION_SEED,
    Percent,
    PoolFetchType,
    PoolInfoLayout,
    PoolUtils,
    PositionInfoLayout,
    PositionRewardInfoLayout,
    PositionUtils,
    Price,
    ProtocolPositionLayout,
    Q128,
    Q64,
    RAYMint,
    RENT_PROGRAM_ID,
    Raydium,
    RewardInfo,
    RoundDirection,
    Rounding,
    Router,
    SERUM_PROGRAMID_TO_VERSION,
    SERUM_PROGRAM_ID_V3,
    SERUM_VERSION_TO_PROGRAMID,
    SESSION_KEY,
    SOLMint,
    SOL_INFO,
    SPL_MINT_LAYOUT,
    SRMMint,
    STORAGE_KEY,
    SUPPORT_MINT_SEED,
    SYSTEM_PROGRAM_ID,
    SqrtPriceMath,
    StableLayout,
    Structure,
    SwapMath,
    TICK_ARRAY_BITMAP_SIZE,
    TICK_ARRAY_SEED,
    TICK_ARRAY_SIZE,
    TICK_SPACINGS,
    TOKEN_WSOL,
    TickArrayBitmap,
    TickArrayBitmapExtensionLayout,
    TickArrayBitmapExtensionUtils,
    TickArrayLayout,
    TickLayout,
    TickMath,
    TickQuery,
    TickUtils,
    Token,
    TokenAmount,
    TxBuilder,
    TxVersion,
    U64Resolution,
    U64_IGNORE_RANGE,
    UInt,
    USDCMint,
    USDHMint,
    USDTMint,
    UTIL1216,
    Union,
    Voter,
    VoterDepositEntry,
    VoterLockup,
    VoterRegistrar,
    VoterVotingMintConfig,
    WSOLMint,
    WideBits,
    WrappedLayout,
    ZERO,
    _100_PERCENT,
    accountMeta,
    add,
    addComputeBudget,
    addLiquidityLayout,
    array,
    associatedLedgerAccountLayout,
    bits,
    blob,
    bool,
    calFarmRewardAmount,
    ceilDiv,
    checkLegacyTxSize,
    checkV0TxSize,
    chunkArray,
    claimLayout,
    clmmComputeInfoToApiInfo,
    closeAccountInstruction,
    collectCpFeeInstruction,
    commonSystemAccountMeta,
    confirmTransaction,
    cpmmLockPositionInstruction,
    createAssociatedLedgerAccountInstruction,
    createLogger,
    createPoolFeeLayout,
    createPoolV4InstructionV2,
    createPoolV4Layout,
    createWSolAccountInstructions,
    cstr,
    currencyEquals,
    decimalToFraction,
    decodeBool,
    div,
    divCeil,
    dwLayout,
    encodeBool,
    endlessRetry,
    eq,
    f32,
    f32be,
    f64,
    f64be,
    farmAddRewardLayout,
    farmLedgerLayoutV3_1,
    farmLedgerLayoutV3_2,
    farmLedgerLayoutV5_1,
    farmLedgerLayoutV5_2,
    farmLedgerLayoutV6_1,
    farmRewardInfoToConfig,
    farmRewardLayout,
    farmRewardRestartLayout,
    farmRewardTimeInfoLayout,
    farmStateV3Layout,
    farmStateV5Layout,
    farmStateV6Layout,
    fetchMultipleFarmInfoAndUpdate,
    fetchMultipleInfo,
    fetchMultipleMintInfos,
    findProgramAddress,
    fixedSwapInLayout,
    fixedSwapOutLayout,
    floorDiv,
    forecastTransactionSize,
    formatLayout,
    generatePubKey,
    getATAAddress,
    getAssociatedAuthority,
    getAssociatedConfigId,
    getAssociatedLedgerAccount,
    getAssociatedLedgerPoolAccount,
    getAssociatedOpenOrders,
    getAssociatedPoolKeys,
    getCpLockPda,
    getCpmmPdaAmmConfigId,
    getCpmmPdaPoolId,
    getCreatePoolKeys,
    getDate,
    getDepositEntryIndex,
    getDxByDyBaseIn,
    getDyByDxBaseIn,
    getEpochInfo,
    getFarmLedgerLayout,
    getFarmStateLayout,
    getLiquidityAssociatedAuthority,
    getLiquidityAssociatedId,
    getLiquidityFromAmounts,
    getMax,
    getMultipleAccountsInfo,
    getMultipleAccountsInfoWithCustomFlags,
    getMultipleLookupTableInfo,
    getPdaAmmConfigId,
    getPdaExBitmapAccount,
    getPdaLockClPositionIdV2,
    getPdaLockPositionId,
    getPdaLpMint,
    getPdaMetadataKey,
    getPdaMintExAccount,
    getPdaObservationAccount,
    getPdaObservationId,
    getPdaOperationAccount,
    getPdaPersonalPositionAddress,
    getPdaPoolAuthority,
    getPdaPoolId,
    getPdaPoolRewardVaulId,
    getPdaPoolVaultId,
    getPdaProtocolPositionAddress,
    getPdaTickArrayAddress,
    getPdaVault,
    getRecentBlockHash,
    getRegistrarAddress,
    getSessionKey,
    getStablePrice,
    getTime,
    getTimestamp,
    getTokenOwnerRecordAddress,
    getTransferAmountFee,
    getTransferAmountFeeV2,
    getVoterAddress,
    getVoterWeightRecordAddress,
    getVotingMintAuthority,
    getVotingTokenMint,
    governanceCreateTokenOwnerRecord,
    greedy,
    gt,
    gte,
    i128,
    i16ToBytes,
    i32ToBytes,
    i64,
    i8,
    initPoolLayout,
    initTokenAccountInstruction,
    initializeMarket,
    intersection,
    isDateAfter,
    isDateBefore,
    isDecimal,
    isMeaningfulNumber,
    isNumber,
    isValidFarmVersion,
    isZero,
    jsonInfo2PoolKeys,
    judgeFarmType,
    leadingZeros,
    leastSignificantBit,
    liquidityStateV4Layout,
    liquidityStateV5Layout,
    lt,
    lte,
    mSOLMint,
    makeAMMSwapInstruction,
    makeAddLiquidityInstruction,
    makeAddNewRewardInstruction,
    makeClaimInstruction,
    makeClaimInstructionV4,
    makeCpmmLockInstruction,
    makeCreateCpmmPoolInInstruction,
    makeCreateFarmInstruction,
    makeCreateMarketInstruction,
    makeCreatorWithdrawFarmRewardInstruction,
    makeDepositCpmmInInstruction,
    makeDepositInstructionV3,
    makeDepositInstructionV5,
    makeDepositInstructionV6,
    makeDepositTokenInstruction,
    makeDepositWithdrawInstruction,
    makeInitPoolInstructionV4,
    makePurchaseInstruction,
    makeRestartRewardInstruction,
    makeSimulatePoolInfoInstruction,
    makeSwapCpmmBaseInInstruction,
    makeSwapCpmmBaseOutInstruction,
    makeSwapFixedInInstruction,
    makeSwapFixedOutInstruction,
    makeSwapInstruction,
    makeTransferInstruction,
    makeWithdrawCpmmInInstruction,
    makeWithdrawInstructionV3,
    makeWithdrawInstructionV4,
    makeWithdrawInstructionV5,
    makeWithdrawInstructionV6,
    makeWithdrawTokenInstruction,
    minExpirationTime,
    mockCreatePoolInfo,
    mockV3CreatePoolInfo,
    modelDataInfoLayout,
    mostSignificantBit,
    mul,
    notInnerObject,
    ns64,
    ns64be,
    nu64,
    nu64be,
    offset,
    offsetDateTime,
    option,
    parseBigNumberish,
    parseNumberInfo,
    parseSimulateLogToJson,
    parseSimulateValue,
    parseTokenAccountResp,
    parseTokenInfo,
    poolTypeV6,
    printSimulate,
    publicKey,
    purchaseLayout,
    realFarmStateV3Layout,
    realFarmStateV5Layout,
    realFarmV6Layout,
    recursivelyDecimalToFraction,
    removeLiquidityInstruction,
    removeLiquidityLayout,
    route1Instruction,
    route2Instruction,
    routeInstruction,
    rustEnum,
    s16,
    s16be,
    s24,
    s24be,
    s32,
    s32be,
    s40,
    s40be,
    s48,
    s48be,
    s8,
    seq,
    setLoggerLevel,
    shakeFractionDecimal,
    simulateMultipleInstruction,
    simulatePoolInfoInstruction,
    simulateTransaction,
    sleep,
    solToWSol,
    solToWSolToken,
    splAccountLayout,
    splitNumber,
    stSOLMint,
    str,
    struct,
    sub,
    swapBaseInAutoAccount,
    swapBaseOutAutoAccount,
    tagged,
    tenExponential,
    toAmmComputePoolInfo,
    toApiV3Token,
    toBN,
    toBuffer,
    toFeeConfig,
    toFraction,
    toFractionWithDecimals,
    toPercent,
    toToken,
    toTokenAmount,
    toTokenInfo,
    toTokenPrice,
    toTotalPrice,
    toUsdCurrency,
    trailingZeros,
    transformTxToBase64,
    tryParsePublicKey,
    txToBase64,
    u128,
    u16,
    u16ToBytes,
    u16be,
    u24,
    u24be,
    u32,
    u32ToBytes,
    u32be,
    u40,
    u40be,
    u48,
    u48be,
    u64,
    u8,
    union,
    unionArr,
    unionLayoutDiscriminator,
    uniq,
    updateFarmPoolInfo,
    updateReqHistory,
    utf8,
    validateAndParsePublicKey,
    validateFarmRewards,
    vec,
    vecU8,
    voterStakeRegistryCreateDepositEntry,
    voterStakeRegistryCreateVoter,
    voterStakeRegistryDeposit,
    voterStakeRegistryUpdateVoterWeightRecord,
    voterStakeRegistryWithdraw,
    wSolToSolToken,
    withdrawRewardLayout,
    xor,
    zeros,
  });
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
//# sourceMappingURL=index.js.map
