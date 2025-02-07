import React from "react";
import "./FavouriteReads.css"; // Import the CSS file

function FavouriteReads() {
  return (
    <section className="favourite-reads">
      <h2 className="reads-title">My Favourite Reads</h2>
      <p className="intro-paragraph">
      I am, what you can call, a generic reader. I have a common taste but deep insights behind why I like the book. You may find some hidden gems in the Rom-Com section though!
      </p>

      {/* Genre 1 - Fantasy Fiction */}
      <div className="genre-card">
        <h3 className="genre-title">Fantasy Fiction</h3>
        <div className="books-container">
          <div className="book-card">
            <img src="/hp.jpg" alt="Book 1" className="book-image" />
            <div className="book-info">
              <h4 className="book-title">Harry Potter</h4>
              <p className="book-description">
                Yes. Harry Potter. Made my childhood and gave me some of my  best memories. Ever a fresh read and always awed by the heavily detailed storyline (almost no plot holes!)
              </p>
            </div>
          </div>
          <div className="book-card">
            <img src="/pj&ojp.jpg" alt="Book 2" className="book-image" />
            <div className="book-info">
              <h4 className="book-title">Percy Jackson and the Olympians</h4>
              <p className="book-description">
                Again very generic but was a major part of my childhood. Hated it the first time but loved it the second time and the love only increased with every next read! Opened my brain to the world of Greek Mythology!
              </p>
            </div>
          </div>
          <div className="book-card">
            <img src="/divergent.jpg" alt="Book 3" className="book-image" />
            <div className="book-info">
              <h4 className="book-title">Divergent</h4>
              <p className="book-description">
                Painful, but oh well! An amazing concept by an author who inspired me to write. A truly determined protagonist who clearly impacted me a lot as a child.
              </p>
            </div>
          </div>
          <div className="book-card">
            <img src="/tcon.jpg" alt="Book 4" className="book-image" />
            <div className="book-info">
              <h4 className="book-title">Chronicles of Narnia</h4>
              <p className="book-description">
                Beautiful and extravagent isn't enough to describe the idea. An all-time classic, never a bore. A must try in the fantasy-fiction genre.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Genre 2 - Mystery */}
      <div className="genre-card">
        <h3 className="genre-title">Mystery-Thriller</h3>
        <div className="books-container">
          <div className="book-card">
            <img src="/aggtm.jpg" alt="Book 1" className="book-image" />
            <div className="book-info">
              <h4 className="book-title">A Good Girl's Guide to Murder trilogy</h4>
              <p className="book-description">
                Okay, so this is a trilogy that brought me back to the world of murder and bloodshed (fictional, ofcourse). An amazing series, with twists and turns every step of your way. Each book just makes the experience better. Personally, I was a different woman by the end of the series. A must try for the mystery lovers! 
              </p>
            </div>
          </div>
          <div className="book-card">
            <img src="/thefamilyupstairs.jpg" alt="Book 2" className="book-image" />
            <div className="book-info">
              <h4 className="book-title">The Family Upstairs</h4>
              <p className="book-description">
                Shifting POV's, unexpected plot twists and unexpected villains. One of the best thrillers I have read in a long time. A Can't-put-you-down book which left me kinda lost in thought by the end of it.
              </p>
            </div>
          </div>
          <div className="book-card">
            <img src="/thesilent.jpg" alt="Book 3" className="book-image" />
            <div className="book-info">
              <h4 className="book-title">The Silent Patient</h4>
              <p className="book-description">
                This book kept me on my toes, throughout the read. Kept reading only to be completely devastated, disgusted and traumatised in the end. But well, I do love books that make me feel strong emotions, and thus, The Silent Patient being recommended to you as a must read.
              </p>
            </div>
          </div>

          <div className="book-card">
            <img src="/thedare.jpg" alt="Book 4" className="book-image" />
            <div className="book-info">
              <h4 className="book-title">The Dare</h4>
              <p className="book-description">
                This was the first book I read by Natasha Preston. I love myself some good plot twists and this book most certainly gives you a good number of great plot twists. Made me delve into Natasha Preston's writing which only keeps getting better with every other book. All her books have to be read, for sure.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Genre 3 - Non-Fiction */}
      <div className="genre-card">
        <h3 className="genre-title">Rom-Com</h3>
        <div className="books-container">
          <div className="book-card">
            <img src="/11ph.jpg" alt="Book 1" className="book-image" />
            <div className="book-info">
              <h4 className="book-title">11 Paper Hearts</h4>
              <p className="book-description">
                My most favourite rom-com of all time. 11 paper hearts is sweet and bitter at the same time. It has a happy ending but a protagonist who you can relate to quite a lot. A girl who had a car accident leading to losing eleven weeks of her memory, suddenly finds herself with paper hearts that are trying to revive those 11 lost weeks to her. A beautiful story and truly heart warming.
              </p>
            </div>
          </div>
          <div className="book-card">
            <img src="/yreachedsam.jpg" alt="Book 2" className="book-image" />
            <div className="book-info">
              <h4 className="book-title">You've Reached Sam</h4>
              <p className="book-description">
                A heart breaking story on the necessity to move on. To lose a loved one, is sometimes inevitable. But to move on is a necessity. A story that almost brought me to tears. Taught me an important lesson for life.
              </p>
            </div>
          </div>

          <div className="book-card">
            <img src="/tweetcute.jpg" alt="Book 3" className="book-image" />
            <div className="book-info">
              <h4 className="book-title">Tweet Cute</h4>
              <p className="book-description">
                A really new take on the enemies to lovers trope. Kinda gives Romeo-Juliet family vibes sometimes. But on the whole, a very engaging and fun read. Piqued my interest in Chat Apps and App Development, actually. A book I can read any day!
              </p>
            </div>
          </div>

          <div className="book-card">
            <img src="/10tihap.jpg" alt="Book 4" className="book-image" />
            <div className="book-info">
              <h4 className="book-title">10 Things I Hate About Pinky</h4>
              <p className="book-description">
                The last book in the When Dimple Met Rishi series, but the best one amongst the others in my opinion. The story of Sam and Pinky, friends of Ashish. Sam is your usual "I follow rules" Indian Immigrant while Pinky is our rebellious female lead, who will fight for what she wants. Though a lit cliche in some sections, it is a very fun read, letting us know how important it is to stick to the stuff you feel good about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FavouriteReads;
