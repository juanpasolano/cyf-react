// @flow
import React from 'react';

import TopSection from '../../components/top-section';
import MentorList from '../../components/mentor-list';

const Intro = (
  <section id="intro">
    <p>
      In 2016 a small group of professional developers got together with a group
      of asylum seekers and refugees in London to start the first class of
      CodeYourFuture. Today we are small community creating an environment that
      is open, playful and tolerant, ensuring a lasting learning experience that
      influences the lives of our students.
    </p>

    <p>
      Below are some of the wonderful people that make this project happen. Many
      more help our students every week.
    </p>
  </section>
);

const MeetTheTeam = () => (
  <main className="container">
    <TopSection title="Meet the team" content={Intro} />

    <div className="col-sm-8 col-sm-offset-2 block-2-box">
      <MentorList />
    </div>
  </main>
);

export default MeetTheTeam;
