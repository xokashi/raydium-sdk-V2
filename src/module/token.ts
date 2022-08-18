import { PublicKey } from "@solana/web3.js";

import { PublicKeyish, validateAndParsePublicKey } from "../common/pubKey";
import { TOKEN_WSOL } from "../raydium/token/constant";

/**
 * A token is any fungible financial instrument on Solana, including SOL and all SPL tokens.
 */
export interface TokenProps {
  mint: PublicKeyish;
  decimals: number;
  symbol?: string;
  name?: string;
}

export class Token {
  public readonly symbol?: string;
  public readonly name?: string;
  public readonly decimals: number;

  public readonly mint: PublicKey;
  public static readonly WSOL: Token = new Token(TOKEN_WSOL);

  /**
   *
   * @param mint - pass "sol" as mint will auto generate wsol token config
   */
  public constructor({ mint, decimals, symbol = "UNKNOWN", name = "UNKNOWN" }: TokenProps) {
    if (mint === "sol") {
      this.decimals = TOKEN_WSOL.decimals;
      this.symbol = TOKEN_WSOL.symbol;
      this.name = TOKEN_WSOL.name;
      this.mint = new PublicKey(TOKEN_WSOL.mint);
      return;
    }

    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
    this.mint = validateAndParsePublicKey(mint);
  }

  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true;
    }
    return this.mint.equals(other.mint);
  }
}
