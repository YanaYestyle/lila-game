import onePlayerGame from "./one-player-game.module.scss";

export default function OnePlayerGame() {
  return (
    <>
      <div className={onePlayerGame.container}>
        <div className={onePlayerGame.column}>
          <div>One player game</div>
        </div>
      </div>
    </>
  );
}
