import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class InfoPage extends Component {
	render() {
		return (
			<div className="row">
				<div className="info-nav col s12">
					<ul className="tabs">
						<li className="tab col s3 l2">
							<a className="active" href="#intro">
								Start
							</a>
						</li>
						<li className="tab col s3 l2">
							<a href="#rewards">Rewards</a>
						</li>
						<li className="tab col s3 l2">
							<a href="#reading">Reading</a>
						</li>
						<li className="tab col s3 l2">
							<a href="#memory">Memory</a>
						</li>
						<li className="tab col s3 l2">
							<a href="#bible">Bible</a>
						</li>
						<li className="tab col s3 l2">
							<a href="#exercise">Exercise</a>
						</li>
					</ul>
				</div>
				<div id="intro" className="info-tab col s12">
					<h4>Welcome to Element's Winter Challenge!</h4>
					<h5>
						Here you can track progress on your winter challenge goals, earn points, and win prizes
					</h5>

					<h5> Scroll through the tabs above for more info or... </h5>

					<h5>
						<Link to="/dashboard">Go to the dashboard to get started!</Link>
					</h5>
				</div>
				<div id="rewards" className="info-tab col s12">
					Final reward designs coming soon!
					<img src={"./rewards.png"} className="img-responsive" />
				</div>
				<div id="reading" className="info-tab col s12">
          <h5>You can earn points by reading various Christian books.</h5>
          <h5>We have some recommended options below with differing values, but you are free to choose one of your own as well</h5>

					<div className="row">
						<div className="info-nav col s12">
							<ul className="tabs">
								<li className="tab col s4">
									<a className="active" href="#100pt">
										100 Pt Books
									</a>
								</li>
								<li className="tab col s4">
									<a href="#150pt">150 Pt Books</a>
								</li>
								<li className="tab col s4">
									<a href="#200pt">200 Pt Books</a>
								</li>
							</ul>
						</div>
						<div id="100pt" className="books col s12">

							<div className="book">
								Case for Christmas<br />
								<sub>Lee Strobel</sub>
							</div>

							<div className="book">
								Fictional C.S. Lewis Book<br />
								<sub>C.S. Lewis</sub>
							</div>

              <div className="book">
								Any Chuck Colson Book<br />
								<sub>Chuck Colson</sub>
							</div>

              <div className="book">
								A Shepherd's Look at Psalm 23<br />
								<sub>W. Phillip Keller</sub>
							</div>

						</div>
						<div id="150pt" className="books col s12">

              <div className="book">
								Case for Grace<br />
								<sub>Lee Strobel</sub>
							</div>

							<div className="book">
								Do Hard Things<br />
								<sub>Alex and Brett Harris</sub>
							</div>

              <div className="book">
								The Hiding Place<br />
								<sub>Corrie Ten Boom</sub>
							</div>

              <div className="book">
								Letters from a Skeptic<br />
								<sub>Dr. Gregory Boyd</sub>
							</div>

              <div className="book">
								Tactics<br />
								<sub>Greg Koukl</sub>
							</div>

              <div className="book">
								Ask Me Anything<br />
								<sub>J. Budziszewski</sub>
							</div>

              <div className="book">
								Stop Asking Jesus Into Your Heart<br />
								<sub>JD Greear</sub>
							</div>

              <div className="book">
								Gospel<br />
								<sub>JD Greear</sub>
							</div>

              <div className="book">
								Dug Down Deep<br />
								<sub>Joshua Harris</sub>
							</div>

              <div className="book">
								The Hobbit<br />
								<sub>JRR Tolkien</sub>
							</div>

						</div>
						<div id="200pt" className="books col s12">

              <div className="book">
								Shadow of the Almighty<br />
								<sub>Elisabeth Elliot</sub>
							</div>

              <div className="book">
								Case for Christ<br />
								<sub>Lee Strobel</sub>
							</div>

              <div className="book">
								The Lord of the Rings<br />
								<sub>JRR Tolkien</sub>
							</div>

              <div className="book">
								Mere Christianity<br />
								<sub>C.S. Lewis</sub>
							</div>

              <div className="book">
								The Calvary Road<br />
								<sub>Roy Hession</sub>
							</div>

              <div className="book">
								On Guard<br />
								<sub>William Lane Craig</sub>
							</div>

              <div className="book">
								Satan and his Kingdom<br />
								<sub>Dennis McCallum</sub>
							</div>

						</div>
					</div>
				</div>
				<div id="memory" className="info-tab col s12">
					<h5>You can also earn points by memorizing verses and context about each</h5>
          <h5>The list of verses to choose from is below. Context coming soon!</h5>

          <div className="verses">
            <div className="verse">
              Genesis 15:1-6
            </div>

            <div className="verse">
              Psalm 23:1-6
            </div>

            <div className="verse">
              Isaiah 40:27-31
            </div>

            <div className="verse">
              Habakkuk 3:17-18
            </div>

            <div className="verse">
              John 15:5-8
            </div>

            <div className="verse">
              Romans 8:1-3
            </div>

            <div className="verse">
              1 Corinthians 9:24-27
            </div>

            <div className="verse">
              Philippians 4:4-7
            </div>

            <div className="verse">
              Hebrews 12:1-3
            </div>

            <div className="verse">
              1 John 1:5-9
            </div>

          </div>
				</div>
				<div id="bible" className="info-tab col s12">
          <h5>You can also earn points by reading chapters of the bible</h5>
          <h5>Each chapter is worth 2 points. If you finish a chapter you will get an additional point per chapter!</h5>
				</div>
				<div id="exercise" className="info-tab col s12">
          <h5>Finally, you can earn points by running</h5>
          <h5>Each mile is worth 10 points!</h5>
				</div>
			</div>
		);
	}
}

export default connect(null)(InfoPage);
