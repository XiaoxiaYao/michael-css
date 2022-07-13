import cardStyles from './michael-style/components/card.module.scss';
import colorStyles from './michael-style/colors.module.scss';
import classNames from 'classnames';

function App() {
  return (
    <div className="App">
      <h2>Cards</h2>
      <div className={cardStyles.card}>
        <div className={cardStyles['card-title']}>Card title</div>
        <div className={cardStyles['card_body']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officiis,
          asperiores dolorum nemo molestiae perferendis expedita sapiente,
          facere velit, qui dolores ab corrupti architecto! Tempore pariatur
          repellat dolor quis culpa.
        </div>
        <div
          className={classNames([
            colorStyles['text-green'],
            colorStyles['text-hover-orange'],
          ])}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officiis,
          asperiores dolorum nemo molestiae perferendis expedita sapiente,
          facere velit, qui dolores ab corrupti architecto! Tempore pariatur
          repellat dolor quis culpa.
        </div>
      </div>
    </div>
  );
}

export default App;
