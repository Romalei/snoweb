export interface SnowebConfig {
  /** The higher the value the more snowflakes */
  heaviness: number;

  /** The higher the value the faster the snowflakes will fall */
  gravity: number;
}