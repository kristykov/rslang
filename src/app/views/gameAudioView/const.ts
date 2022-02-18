const FRONT_BLOCK_CONTENT_START = `<section class="sprint-settings-page">
<div class="sprint-settings-container wide">
<p class="sprint-settings-title">Audiocall</p>
<p class="sprint-settings-description">Audiocall training improves your listening comprehension.</p>
</div>
<div class="sprint-settings-container">
<p class="sprint-settings-title-levels">Choose the level:</p>
<form name="form1" id="sprint-levels" class="sprint-settings-levels-btns">
<label>
  <input type="radio" name="audio-level" value="0" class="level-btn"></input>
  <div class="level-circle">A1</div>
</label>
<label>
  <input type="radio" name="audio-level" value="1" class="level-btn"></input>
  <div class="level-circle">A2</div>
</label>
<label>
  <input type="radio" name="audio-level" value="2" class="level-btn"></input>
  <div class="level-circle">B1</div>
  </label>
  <label>
  <input type="radio" name="audio-level" value="3" class="level-btn"></input>
  <div class="level-circle">B2</div>
  </label>
  <label>
  <input type="radio" name="audio-level" value="4" class="level-btn"></input>
  <div class="level-circle">C1</div>
  </label>
  <label>
  <input type="radio" name="audio-level" value="5" class="level-btn"></input>
  <div class="level-circle">C2</div>
  </label>
</form>
</div>
<button class="start-audio-btn" id="start-audio-btn">Start</button>
</section>`;

const FRONT_BLOCK_CONTENT_GAME = `<section class="audio-game">
<div class="audio-container">
<img id="word-img"/>
<div id="audio-word-player" class="audio-word-player"><ion-icon name="volume-high-outline" class="audio-word-player-btn"></ion-icon></div>
<div class="image-container"><img id="img" class="img"/></div>
<div class="audio-words">
<button class="audio-word-btn" ></button>
<button class="audio-word-btn" ></button>
<button class="audio-word-btn" ></button>
<button class="audio-word-btn" ></button>
<button class="audio-word-btn" ></button>
</div>
<button class="skip-btn" id="skip-btn"></button>
</div>
</section>`;

const FRONT_BLOCK_CONTENT_MODAL = `<section class="sprint-game-modal">
<div class="sprint-game-modal-content">
<div class="modal-upper-btns">
<button class="to-results-btn">Result</button>
<button class="to-see-words-btn">See my words</button>
</div>
<div class="modal-results">
<div class="card">
<p class="result-message">Great result. But you can do better!</p>
<p class="result-statistics"><span id="correct-count">11</span> words learned, <span id="incorrect-count">4</span> words on study</p>
  <div class="box"><div class="percent">
      <svg><circle cx="70" cy="70" r="70"></circle><circle id="percent-circle" cx="70" cy="70" r="70"></circle><svg>
          <div class="num">
            <p class="percentage"><span id="percentage-amount">90</span>%</p>
            <p class="learned-words">learned words</p>
          </div>
    </div>
        <p class="text"></p>
  </div>
</div>
</div>
<div class="modal-lower-btns">
<button class="module-lower-btn" id="restart-btn">Play again</button>
<button class="module-lower-btn" id="to-text-book-btn"><a href="#textbook" class="module-lower-btn-ref">Go to the textbook</a></button>
</div>
</div>
</section>`;

export { FRONT_BLOCK_CONTENT_START, FRONT_BLOCK_CONTENT_GAME, FRONT_BLOCK_CONTENT_MODAL };