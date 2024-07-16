import gameRules from "./game-rules.module.scss";

export default function GameRules() {
  return (
    <>
      <div className={gameRules.container}>
        <div className={gameRules.column}>
          <div>Game rules</div>
        </div>
      </div>
    </>
  );
}
